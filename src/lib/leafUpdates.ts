import { execSync } from "node:child_process";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import type { TreeNode } from "../data/siteTree";

export type LeafTickerItem = {
  path: string;
  leafTitle: string;
  detail: string;
};

type LeafSnapshot = LeafTickerItem & {
  hash: string;
};

type CommitInfo = {
  hash: string;
  dateMs: number;
};

const SITE_TREE_PATH = "src/data/siteTree.ts";
const HOME_TICKER_WINDOW_DAYS = 7;
const REPO_ROOT = fileURLToPath(new URL("../../", import.meta.url));

let cachedPromise: Promise<LeafTickerItem[]> | undefined;
const siteTreeByCommitCache = new Map<string, Promise<TreeNode | undefined>>();

const firstSentence = (value?: string) => {
  if (!value) return "";
  const normalized = value.replace(/\s+/g, " ").trim();
  if (!normalized) return "";
  const match = normalized.match(/^[^.!?]+[.!?]/);
  return (match ? match[0] : normalized).trim();
};

const digestLeaf = (node: TreeNode) =>
  createHash("sha256")
    .update(
      JSON.stringify({
        title: node.title,
        description: node.description ?? "",
        quickAnswer: node.quickAnswer ?? "",
        icon: node.icon ?? "",
        image: node.image ?? "",
        content: node.content ?? [],
      })
    )
    .digest("hex");

const flattenLeaves = (root: TreeNode) => {
  const leaves: LeafSnapshot[] = [];

  const walk = (node: TreeNode, segments: string[]) => {
    const children = node.children ?? [];
    if (!children.length) {
      const path = segments.length ? `/${segments.join("/")}` : "/";
      if (path === "/") return;
      const detail =
        firstSentence(node.quickAnswer) ||
        firstSentence(node.description) ||
        "Updated travel guidance is available.";
      leaves.push({
        path,
        leafTitle: node.title,
        detail,
        hash: digestLeaf(node),
      });
      return;
    }

    for (const child of children) {
      const nextSegments = child.slug ? [...segments, child.slug] : [...segments];
      walk(child, nextSegments);
    }
  };

  walk(root, []);
  return leaves;
};

const parseSiteTreeFromSource = async (source: string): Promise<TreeNode | undefined> => {
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ES2022,
      target: ts.ScriptTarget.ES2022,
    },
  });
  const code = transpiled.outputText;
  const dataUrl = `data:text/javascript;base64,${Buffer.from(code).toString("base64")}`;
  const mod = await import(dataUrl);
  return mod.siteTree as TreeNode | undefined;
};

const getSiteTreeAtCommit = async (hash: string): Promise<TreeNode | undefined> => {
  if (!siteTreeByCommitCache.has(hash)) {
    siteTreeByCommitCache.set(
      hash,
      (async () => {
        try {
          const source = execSync(`git show ${hash}:${SITE_TREE_PATH}`, {
            encoding: "utf8",
            cwd: REPO_ROOT,
            stdio: ["ignore", "pipe", "ignore"],
          });
          if (!source.trim()) return undefined;
          return await parseSiteTreeFromSource(source);
        } catch {
          return undefined;
        }
      })()
    );
  }
  return siteTreeByCommitCache.get(hash);
};

const getSiteTreeCommitHistory = (): CommitInfo[] => {
  try {
    const output = execSync(`git log --format='%H|%cI' -- ${SITE_TREE_PATH}`, {
      encoding: "utf8",
      cwd: REPO_ROOT,
      stdio: ["ignore", "pipe", "ignore"],
    });
    return output
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [hash = "", iso = ""] = line.split("|");
        return { hash, dateMs: new Date(iso).getTime() };
      })
      .filter((item) => Boolean(item.hash) && Number.isFinite(item.dateMs));
  } catch {
    return [];
  }
};

const buildRecentChangeMap = async (cutoffMs: number) => {
  const commits = getSiteTreeCommitHistory();
  if (!commits.length) return new Map<string, number>();

  const recentCount = commits.filter((commit) => commit.dateMs >= cutoffMs).length;
  if (!recentCount) return new Map<string, number>();

  const windowCommits = commits.slice(0, Math.min(commits.length, recentCount + 1));
  const changedAtByPath = new Map<string, number>();

  for (let index = 0; index < windowCommits.length - 1; index += 1) {
    const newer = windowCommits[index];
    const older = windowCommits[index + 1];
    if (newer.dateMs < cutoffMs) continue;

    const [newerTree, olderTree] = await Promise.all([
      getSiteTreeAtCommit(newer.hash),
      getSiteTreeAtCommit(older.hash),
    ]);
    if (!newerTree || !olderTree) continue;

    const newerLeaves = flattenLeaves(newerTree);
    const olderByPath = new Map(flattenLeaves(olderTree).map((leaf) => [leaf.path, leaf.hash]));

    for (const leaf of newerLeaves) {
      if (olderByPath.get(leaf.path) !== leaf.hash && !changedAtByPath.has(leaf.path)) {
        changedAtByPath.set(leaf.path, newer.dateMs);
      }
    }
  }

  if (windowCommits.length === 1) {
    const lone = windowCommits[0];
    if (lone.dateMs >= cutoffMs) {
      const loneTree = await getSiteTreeAtCommit(lone.hash);
      if (loneTree) {
        for (const leaf of flattenLeaves(loneTree)) {
          if (!changedAtByPath.has(leaf.path)) {
            changedAtByPath.set(leaf.path, lone.dateMs);
          }
        }
      }
    }
  }

  return changedAtByPath;
};

const computeLeafTickerItems = async (root: TreeNode): Promise<LeafTickerItem[]> => {
  const currentLeaves = flattenLeaves(root);
  const cutoffMs = Date.now() - HOME_TICKER_WINDOW_DAYS * 24 * 60 * 60 * 1000;
  const changedAtByPath = await buildRecentChangeMap(cutoffMs);

  return currentLeaves
    .map((leaf) => {
      const changedAt = changedAtByPath.get(leaf.path);
      return {
        ...leaf,
        changedAt,
      };
    })
    .filter(
      (leaf): leaf is LeafSnapshot & { changedAt: number } =>
        Number.isFinite(leaf.changedAt) && leaf.changedAt >= cutoffMs
    )
    .sort((a, b) => b.changedAt - a.changedAt || a.leafTitle.localeCompare(b.leafTitle))
    .map(({ path, leafTitle, detail }) => ({ path, leafTitle, detail }));
};

export const getHomeLeafTickerItems = (root: TreeNode) => {
  if (!cachedPromise) {
    cachedPromise = computeLeafTickerItems(root);
  }
  return cachedPromise;
};

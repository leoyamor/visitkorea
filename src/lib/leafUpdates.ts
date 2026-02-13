import { execSync } from "node:child_process";
import { createHash } from "node:crypto";
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

const FALLBACK_PATHS = [
  "/latest-travel-updates-for-korea",
  "/korea-now-and-more",
  "/this-week-in-korea",
];

let cachedPromise: Promise<LeafTickerItem[]> | undefined;

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

const getPreviousSiteTree = async (): Promise<TreeNode | undefined> => {
  try {
    const previousSource = execSync("git show HEAD^:src/data/siteTree.ts", {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
    if (!previousSource.trim()) return undefined;
    return await parseSiteTreeFromSource(previousSource);
  } catch {
    return undefined;
  }
};

const buildFallbackItems = (currentLeaves: LeafSnapshot[]) => {
  const byPath = new Map(currentLeaves.map((leaf) => [leaf.path, leaf]));
  return FALLBACK_PATHS.map((path) => byPath.get(path))
    .filter((leaf): leaf is LeafSnapshot => Boolean(leaf))
    .map(({ path, leafTitle, detail }) => ({ path, leafTitle, detail }));
};

const computeLeafTickerItems = async (root: TreeNode): Promise<LeafTickerItem[]> => {
  const currentLeaves = flattenLeaves(root);
  const previousTree = await getPreviousSiteTree();
  if (!previousTree) {
    return buildFallbackItems(currentLeaves);
  }

  const previousLeaves = flattenLeaves(previousTree);
  const previousByPath = new Map(previousLeaves.map((leaf) => [leaf.path, leaf.hash]));
  const changedLeaves = currentLeaves.filter(
    (leaf) => previousByPath.get(leaf.path) !== leaf.hash
  );

  if (!changedLeaves.length) {
    return buildFallbackItems(currentLeaves);
  }

  return changedLeaves.map(({ path, leafTitle, detail }) => ({
    path,
    leafTitle,
    detail,
  }));
};

export const getHomeLeafTickerItems = (root: TreeNode) => {
  if (!cachedPromise) {
    cachedPromise = computeLeafTickerItems(root);
  }
  return cachedPromise;
};

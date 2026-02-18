import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const ROOT = process.cwd();
const SITE_TREE_PATH = path.join(ROOT, "src/data/siteTree.ts");
const ES_SLUG_PAGE_PATH = path.join(ROOT, "src/pages/es/[...slug].astro");
const OUTPUT_PATH = path.join(ROOT, "src/data/page-updates.json");
const DEFAULT_UPDATED_ISO = "2026-02-15T00:00:00.000Z";

const stableJson = (value) => JSON.stringify(value, Object.keys(value).sort());

const hashPayload = (value) =>
  crypto.createHash("sha256").update(stableJson(value)).digest("hex");

const toUtcDateIso = (date = new Date()) => {
  const yyyy = date.getUTCFullYear();
  const mm = String(date.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(date.getUTCDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}T00:00:00.000Z`;
};

const readText = (filePath) => fs.readFileSync(filePath, "utf8");

const findMatchingBraceIndex = (text, openIndex) => {
  let depth = 0;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let escaped = false;

  for (let i = openIndex; i < text.length; i += 1) {
    const ch = text[i];
    if (escaped) {
      escaped = false;
      continue;
    }
    if (ch === "\\") {
      escaped = true;
      continue;
    }
    if (inSingle) {
      if (ch === "'") inSingle = false;
      continue;
    }
    if (inDouble) {
      if (ch === '"') inDouble = false;
      continue;
    }
    if (inTemplate) {
      if (ch === "`") inTemplate = false;
      continue;
    }
    if (ch === "'") {
      inSingle = true;
      continue;
    }
    if (ch === '"') {
      inDouble = true;
      continue;
    }
    if (ch === "`") {
      inTemplate = true;
      continue;
    }
    if (ch === "{") {
      depth += 1;
    } else if (ch === "}") {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  throw new Error("Failed to find matching brace.");
};

const extractObjectLiteral = (sourceText, marker) => {
  const markerIndex = sourceText.indexOf(marker);
  if (markerIndex < 0) {
    throw new Error(`Marker not found: ${marker}`);
  }
  const assignIndex = sourceText.indexOf("=", markerIndex);
  if (assignIndex < 0) {
    throw new Error(`Assignment not found for marker: ${marker}`);
  }
  const openBraceIndex = sourceText.indexOf("{", assignIndex);
  if (openBraceIndex < 0) {
    throw new Error(`Opening brace not found for marker: ${marker}`);
  }
  const closeBraceIndex = findMatchingBraceIndex(sourceText, openBraceIndex);
  return sourceText.slice(openBraceIndex, closeBraceIndex + 1);
};

const evalObjectLiteral = (literal) => vm.runInNewContext(`(${literal})`);

const contentFingerprintPayload = (node) => ({
  title: node.title ?? "",
  description: node.description ?? "",
  quickAnswer: node.quickAnswer ?? "",
  content: node.content ?? [],
});

const joinPath = (parts) => `/${parts.filter(Boolean).join("/")}`;

const walkLeafNodes = (node, prefix = [], out = []) => {
  const children = Array.isArray(node?.children) ? node.children : [];
  if (!children.length) {
    out.push({ path: joinPath(prefix), node });
    return out;
  }
  for (const child of children) {
    walkLeafNodes(child, [...prefix, child.slug], out);
  }
  return out;
};

const readJsonSafe = (filePath, fallback) => {
  if (!fs.existsSync(filePath)) return fallback;
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return fallback;
  }
};

const main = () => {
  const siteTreeSource = readText(SITE_TREE_PATH);
  const esPageSource = readText(ES_SLUG_PAGE_PATH);

  const siteTreeLiteral = extractObjectLiteral(siteTreeSource, "export const siteTree");
  const esOverridesLiteral = extractObjectLiteral(esPageSource, "const ES_LEAF_OVERRIDES");

  const siteTree = evalObjectLiteral(siteTreeLiteral);
  const esOverrides = evalObjectLiteral(esOverridesLiteral);

  const leaves = walkLeafNodes(siteTree);
  const prev = readJsonSafe(OUTPUT_PATH, { version: 1, defaultUpdatedIso: DEFAULT_UPDATED_ISO, pages: {} });
  const prevPages = prev.pages ?? {};
  const nextPages = {};
  const todayIso = toUtcDateIso();

  let changedCount = 0;
  let touchedCount = 0;

  for (const { path: routePath, node } of leaves) {
    if (!routePath || routePath === "/") continue;

    const enKey = `en:${routePath}`;
    const enPayload = contentFingerprintPayload(node);
    const enHash = hashPayload(enPayload);
    const prevEn = prevPages[enKey];
    const enSeedIso = node.updatedIso ?? DEFAULT_UPDATED_ISO;

    let enUpdatedIso = prevEn?.updatedIso ?? enSeedIso;
    if (prevEn && prevEn.hash !== enHash) {
      enUpdatedIso = todayIso;
      changedCount += 1;
    }
    if (!prevEn) touchedCount += 1;
    nextPages[enKey] = { hash: enHash, updatedIso: enUpdatedIso };

    const override = esOverrides[node.slug];
    const esNode = override
      ? {
          ...node,
          ...override,
          content: override.content ?? node.content,
        }
      : node;
    const esKey = `es:${routePath}`;
    const esPayload = contentFingerprintPayload(esNode);
    const esHash = hashPayload(esPayload);
    const prevEs = prevPages[esKey];
    const esSeedIso = override?.updatedIso ?? node.updatedIso ?? DEFAULT_UPDATED_ISO;

    let esUpdatedIso = prevEs?.updatedIso ?? esSeedIso;
    if (prevEs && prevEs.hash !== esHash) {
      esUpdatedIso = todayIso;
      changedCount += 1;
    }
    if (!prevEs) touchedCount += 1;
    nextPages[esKey] = { hash: esHash, updatedIso: esUpdatedIso };
  }

  const output = {
    version: 1,
    defaultUpdatedIso: DEFAULT_UPDATED_ISO,
    pages: Object.fromEntries(Object.entries(nextPages).sort(([a], [b]) => a.localeCompare(b))),
  };

  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`, "utf8");
  console.log(
    `[page-updates] synced pages=${Object.keys(nextPages).length} changed=${changedCount} seeded=${touchedCount} date=${todayIso}`
  );
};

main();

#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";
import process from "node:process";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const force = args.includes("--force");
const onlyArg = args.find((arg) => arg.startsWith("--only="));
const only = onlyArg ? onlyArg.slice("--only=".length).trim().toLowerCase() : "";

let sharp;
try {
  ({ default: sharp } = await import("sharp"));
} catch (error) {
  console.error("[images:optimize] 'sharp' is required but not available.");
  console.error("[images:optimize] Run: npm install sharp");
  process.exit(1);
}

const rootDir = process.cwd();

const jobs = [
  {
    sourceDir: path.join(rootDir, "public"),
    outputDir: path.join(rootDir, "public"),
    label: "root",
    excludeNames: new Set(["hero.webp", "hanok-hero.webp", "hanok-hero-home.webp"]),
  },
  {
    sourceDir: path.join(rootDir, "public", "leaf images"),
    outputDir: path.join(rootDir, "public", "leaf images"),
    label: "leaf",
    excludeNames: new Set(["hanok_hero.webp"]),
  },
];

const variants = [
  {
    dir: "thumbs",
    width: 960,
    quality: 82,
    minQuality: 62,
    maxBytes: 130 * 1024,
    qualityStep: 4,
  },
  {
    dir: "thumbs-w640",
    width: 640,
    quality: 76,
    minQuality: 24,
    maxBytes: 48 * 1024,
    qualityStep: 2,
  },
  {
    dir: "thumbs-w384",
    width: 384,
    quality: 72,
    minQuality: 24,
    maxBytes: 26 * 1024,
    qualityStep: 2,
  },
];

const perImageMaxBytes = {
  "this_week_in_korea.webp": {
    thumbs: 130 * 1024,
    "thumbs-w640": 30 * 1024,
    "thumbs-w384": 15 * 1024,
  },
  "latest travel updates for korea.webp": {
    thumbs: 95 * 1024,
    "thumbs-w640": 28 * 1024,
    "thumbs-w384": 13 * 1024,
  },
  "korea-now-more.webp": {
    thumbs: 85 * 1024,
    "thumbs-w640": 22 * 1024,
    "thumbs-w384": 10 * 1024,
  },
};

const counters = {
  scanned: 0,
  written: 0,
  skipped: 0,
};

const isWebpFile = (name) => /\.webp$/i.test(name);

const safeStat = async (filePath) => {
  try {
    return await fs.stat(filePath);
  } catch {
    return null;
  }
};

const listSourceFiles = async (sourceDir) => {
  const entries = await fs.readdir(sourceDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && isWebpFile(entry.name))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
};

const buildWebp = async (srcPath, width, quality) => {
  const image = sharp(srcPath, { failOn: "none" }).rotate().resize({
    width,
    withoutEnlargement: true,
  });
  return image
    .webp({
      quality,
      effort: 6,
      alphaQuality: 90,
      smartSubsample: true,
    })
    .toBuffer();
};

const getTargetMaxBytes = (fileName, variant) => {
  const override = perImageMaxBytes[fileName.toLowerCase()];
  if (!override) return variant.maxBytes;
  return override[variant.dir] ?? variant.maxBytes;
};

const buildAdaptiveWebp = async (srcPath, variant, fileName) => {
  const step = Math.max(1, variant.qualityStep ?? 4);
  const targetMaxBytes = getTargetMaxBytes(fileName, variant);
  let selectedBuffer = await buildWebp(srcPath, variant.width, variant.quality);

  if (!targetMaxBytes || selectedBuffer.length <= targetMaxBytes) {
    return selectedBuffer;
  }

  for (let quality = variant.quality - step; quality >= variant.minQuality; quality -= step) {
    const nextBuffer = await buildWebp(srcPath, variant.width, quality);
    selectedBuffer = nextBuffer;
    if (nextBuffer.length <= targetMaxBytes) {
      break;
    }
  }

  return selectedBuffer;
};

const writeIfNeeded = async (destPath, sourceMtimeMs, nextBuffer) => {
  const destStat = await safeStat(destPath);

  if (!force && destStat && destStat.mtimeMs >= sourceMtimeMs) {
    counters.skipped += 1;
    return;
  }

  if (destStat && destStat.size <= nextBuffer.length) {
    counters.skipped += 1;
    return;
  }

  if (!dryRun) {
    await fs.mkdir(path.dirname(destPath), { recursive: true });
    await fs.writeFile(destPath, nextBuffer);
  }

  counters.written += 1;
};

for (const job of jobs) {
  const names = await listSourceFiles(job.sourceDir);
  for (const name of names) {
    if (job.excludeNames.has(name.toLowerCase())) {
      continue;
    }

    if (only && !name.toLowerCase().includes(only)) {
      continue;
    }

    const srcPath = path.join(job.sourceDir, name);
    const srcStat = await safeStat(srcPath);
    if (!srcStat) continue;

    counters.scanned += 1;

    for (const variant of variants) {
      const destPath = path.join(job.outputDir, variant.dir, name);
      const buffer = await buildAdaptiveWebp(srcPath, variant, name);
      await writeIfNeeded(destPath, srcStat.mtimeMs, buffer);
    }
  }
}

const mode = dryRun ? "dry-run" : "write";
console.log(
  `[images:optimize] mode=${mode} scanned=${counters.scanned} written=${counters.written} skipped=${counters.skipped}`
);

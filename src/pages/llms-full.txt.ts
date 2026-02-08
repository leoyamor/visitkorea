import type { TreeNode } from "../data/siteTree";
import { siteTree } from "../data/siteTree";
import { legalPages } from "../lib/legal-pages";
import { SITE_NAME, SITE_URL } from "../lib/site";

type RouteEntry = {
  path: string;
  title: string;
  description: string;
  depth: number;
};

const compact = (value?: string) => (value ?? "").replace(/\s+/g, " ").trim();

const toCanonicalUrl = (path: string) =>
  `${SITE_URL}${path === "/" ? "/" : `${path.replace(/\/+$/, "")}/`}`;

const walkRoutes = (node: TreeNode, prefix: string[] = [], depth = 0): RouteEntry[] => {
  const currentPath = prefix.length ? `/${prefix.join("/")}` : "/";
  const current: RouteEntry[] = depth === 0
    ? [
        {
          path: "/",
          title: SITE_NAME,
          description: compact(siteTree.description),
          depth: 0,
        },
      ]
    : [
        {
          path: currentPath,
          title: node.title,
          description: compact(node.description ?? node.quickAnswer),
          depth,
        },
      ];

  const children = node.children ?? [];
  return [
    ...current,
    ...children.flatMap((child) => walkRoutes(child, [...prefix, child.slug], depth + 1)),
  ];
};

const contentRoutes = walkRoutes(siteTree);

export const GET = () => {
  const lines = [
    `# ${SITE_NAME} - Full LLM URL Map`,
    "",
    `Base URL: ${SITE_URL}/`,
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "Canonical language: English URLs without query parameters.",
    "Spanish alternate: use /es/... path equivalents.",
    "",
    "## Content Pages",
    ...contentRoutes.map((route) => {
      const indent = "  ".repeat(Math.max(0, route.depth));
      return `${indent}- ${route.title}: ${toCanonicalUrl(route.path)}${route.description ? ` — ${route.description}` : ""}`;
    }),
    "",
    "## Legal Pages",
    ...legalPages.map((page) => `- ${page.titleEn}: ${toCanonicalUrl(page.path)} — ${page.descriptionEn}`),
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};

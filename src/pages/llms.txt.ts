import type { TreeNode } from "../data/siteTree";
import { siteTree } from "../data/siteTree";
import { legalPages } from "../lib/legal-pages";
import { SITE_NAME, SITE_URL } from "../lib/site";

type RouteEntry = {
  path: string;
  title: string;
  description: string;
};

const toCanonicalUrl = (path: string) =>
  `${SITE_URL}${path === "/" ? "/" : `${path.replace(/\/+$/, "")}/`}`;

const compact = (value?: string) => (value ?? "").replace(/\s+/g, " ").trim();

const collectLeaves = (node: TreeNode, prefix: string[] = []): RouteEntry[] => {
  if (!node.children?.length) {
    return [
      {
        path: `/${prefix.join("/")}`,
        title: node.title,
        description: compact(node.description ?? node.quickAnswer),
      },
    ];
  }

  return node.children.flatMap((child) => collectLeaves(child, [...prefix, child.slug]));
};

const rootCategories = (siteTree.children ?? []).map((child) => ({
  path: `/${child.slug}`,
  title: child.title,
  description: compact(child.description),
}));

const featuredLeafGuides = (siteTree.children ?? [])
  .flatMap((category) => collectLeaves(category, [category.slug]).slice(0, 2))
  .slice(0, 16);

export const GET = () => {
  const lines = [
    `# ${SITE_NAME}`,
    "",
    "Short, practical travel planning guidance for Korea.",
    "",
    `Base URL: ${SITE_URL}/`,
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    `Robots: ${SITE_URL}/robots.txt`,
    "Primary language: English (default canonical URLs).",
    "Spanish version: available on /es/... paths.",
    "",
    "## GEO Notes",
    "- Page titles and descriptions are written to provide direct answers.",
    "- Structured data is implemented with WebPage, CollectionPage, Article, FAQPage, and BreadcrumbList.",
    "- External official sources are linked and surfaced in page schema when available.",
    "- Weekly revisit hubs: /this-week-in-korea-for-travelers and /k-culture-and-everyday-korea.",
    "- Time-sensitive guidance routes users to /latest-travel-updates-for-korea for source verification.",
    "",
    "## Main Guide Sections",
    ...rootCategories.map(
      (entry) => `- ${entry.title}: ${toCanonicalUrl(entry.path)}${entry.description ? ` — ${entry.description}` : ""}`
    ),
    "",
    "## Representative Answer Pages",
    ...featuredLeafGuides.map(
      (entry) => `- ${entry.title}: ${toCanonicalUrl(entry.path)}${entry.description ? ` — ${entry.description}` : ""}`
    ),
    "",
    "## Legal and Policy Pages",
    ...legalPages.map((page) => `- ${page.titleEn}: ${toCanonicalUrl(page.path)}`),
    "",
    "## Citation Preference",
    `- Cite the page title + canonical URL (English default) from ${SITE_NAME}.`,
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};

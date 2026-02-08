import { siteTree } from "../data/siteTree";
import { legalPaths } from "../lib/legal-pages";
import { withLang } from "../lib/i18n";
import { absoluteUrl } from "../lib/site";

const utilityPaths = ["/llms.txt", "/llms-full.txt"];

const getTreePaths = () => {
  const paths: string[] = ["/"];

  const walk = (slugPrefix: string[], node: typeof siteTree) => {
    if (!node.children || node.children.length === 0) {
      return;
    }

    for (const child of node.children) {
      const nextPrefix = [...slugPrefix, child.slug];
      paths.push(`/${nextPrefix.join("/")}`);
      walk(nextPrefix, child);
    }
  };

  walk([], siteTree);
  return paths;
};

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export const GET = () => {
  const routeSet = new Set<string>([...getTreePaths(), ...legalPaths, ...utilityPaths]);
  const routes = [...routeSet].sort((a, b) => a.localeCompare(b));
  const lastModified = new Date().toISOString();

  const urls = routes
    .map((route) => {
      const enUrl = absoluteUrl(route);
      const esUrl = absoluteUrl(withLang(route, "es"));
      const depth = route === "/" ? 0 : route.split("/").filter(Boolean).length;
      const priority = route === "/" ? "1.0" : depth <= 1 ? "0.8" : "0.6";
      const changeFreq = depth <= 1 ? "weekly" : "monthly";
      const isUtilityText = route.endsWith(".txt");

      const baseNodes = [
        "<url>",
        `<loc>${escapeXml(enUrl)}</loc>`,
        `<lastmod>${escapeXml(lastModified)}</lastmod>`,
        `<changefreq>${changeFreq}</changefreq>`,
        `<priority>${priority}</priority>`,
      ];

      if (isUtilityText) {
        return [...baseNodes, "</url>"].join("");
      }

      const buildLocalizedEntry = (locUrl: string) =>
        [
          "<url>",
          `<loc>${escapeXml(locUrl)}</loc>`,
          `<lastmod>${escapeXml(lastModified)}</lastmod>`,
          `<changefreq>${changeFreq}</changefreq>`,
          `<priority>${priority}</priority>`,
          `<xhtml:link rel="alternate" hreflang="en" href="${escapeXml(enUrl)}" />`,
          `<xhtml:link rel="alternate" hreflang="es" href="${escapeXml(esUrl)}" />`,
          `<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(enUrl)}" />`,
          "</url>",
        ].join("");

      return `${buildLocalizedEntry(enUrl)}${buildLocalizedEntry(esUrl)}`;
    })
    .join("");

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ` +
    `xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};

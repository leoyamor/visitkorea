import { siteTree } from "../data/siteTree";
import { EDITORIAL_UPDATED_ISO } from "../lib/editorial";
import { withLang } from "../lib/i18n";
import { getPageUpdatedIso } from "../lib/page-updates";
import { absoluteUrl } from "../lib/site";

const utilityPaths = ["/llms.txt", "/llms-full.txt"];
const staticInfoPaths = ["/about", "/privacy-policy", "/contact", "/disclaimer"];

// Temporary recrawl boost for URLs that still show unresolved indexing in GSC.
const temporaryLastmodOverrides: Record<string, string> = {
  "/": "2026-03-11T00:00:00.000Z",
  "/travel-basics/shopping-and-discounts": "2026-03-11T00:00:00.000Z",
  "/where-to-stay/best-value-places": "2026-03-10T00:00:00.000Z",
};

const toSitemapPath = (path: string) => {
  if (path === "/" || path.endsWith(".txt")) return path;
  return `${path.replace(/\/+$/, "")}/`;
};

const getTreePaths = () => {
  const paths: string[] = ["/"];

  const walk = (slugPrefix: string[], node: typeof siteTree) => {
    if (!node.children || node.children.length === 0) {
      return;
    }

    for (const child of node.children) {
      const nextPrefix = [...slugPrefix, child.slug];
      const nextPath = `/${nextPrefix.join("/")}`;
      paths.push(nextPath);
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
  const routeSet = new Set<string>([...getTreePaths(), ...utilityPaths, ...staticInfoPaths]);
  const routes = [...routeSet].sort((a, b) => a.localeCompare(b));
  const defaultLastModified = EDITORIAL_UPDATED_ISO;
  const getEffectiveLastModified = (route: string, lang: "en" | "es") =>
    temporaryLastmodOverrides[route] ?? getPageUpdatedIso(route, lang, defaultLastModified);

  const urls = routes
    .map((route) => {
      const enLastModified = getEffectiveLastModified(route, "en");
      const esLastModified = getEffectiveLastModified(route, "es");
      const enUrl = absoluteUrl(toSitemapPath(route));
      const esUrl = absoluteUrl(toSitemapPath(withLang(route, "es")));
      const depth = route === "/" ? 0 : route.split("/").filter(Boolean).length;
      const priority = route === "/" ? "1.0" : depth <= 1 ? "0.8" : "0.6";
      const changeFreq = depth <= 1 ? "weekly" : "monthly";
      const isUtilityText = route.endsWith(".txt");

      const baseNodes = [
        "<url>",
        `<loc>${escapeXml(enUrl)}</loc>`,
        `<lastmod>${escapeXml(enLastModified)}</lastmod>`,
        `<changefreq>${changeFreq}</changefreq>`,
        `<priority>${priority}</priority>`,
      ];

      if (isUtilityText) {
        return [...baseNodes, "</url>"].join("");
      }

      const buildLocalizedEntry = (locUrl: string, lastModified: string) =>
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

      return `${buildLocalizedEntry(enUrl, enLastModified)}${buildLocalizedEntry(esUrl, esLastModified)}`;
    })
    .join("");

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ` +
    `xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
};

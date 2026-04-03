import fs from "node:fs";
import path from "node:path";

const SITE_ORIGIN = "https://planmykorea.com";
const DIST_DIR = path.resolve("dist");
const SITEMAP_PATH = path.join(DIST_DIR, "sitemap.xml");

const CORE_PATHS = [
  "/plan-your-trip/",
  "/choose-a-city/",
  "/getting-around-korea/",
  "/what-to-eat/",
  "/where-to-stay/",
  "/things-to-do/",
  "/travel-basics/",
  "/before-you-go/",
  "/before-you-go/korea-entry-requirements/",
  "/before-you-go/sim-or-esim/",
];

const toEsPath = (enPath) => (enPath === "/" ? "/es/" : `/es${enPath}`);

const toFsPath = (routePath) => {
  if (routePath === "/") return path.join(DIST_DIR, "index.html");
  return path.join(DIST_DIR, routePath.slice(1), "index.html");
};

const readFile = (filePath) => fs.readFileSync(filePath, "utf8");

const getLinkHref = (html, rel, hreflang) => {
  const relEscaped = rel.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const hreflangEscaped = hreflang.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(
    `<link\\s+[^>]*rel=["']${relEscaped}["'][^>]*hreflang=["']${hreflangEscaped}["'][^>]*href=["']([^"']+)["'][^>]*>`,
    "i"
  );
  const match = html.match(regex);
  return match?.[1] ?? null;
};

const getCanonicalHref = (html) => {
  const match = html.match(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i);
  return match?.[1] ?? null;
};

const getHtmlLang = (html) => {
  const match = html.match(/<html[^>]*\slang=["']([^"']+)["']/i);
  return match?.[1] ?? null;
};

const assert = (condition, message, failures) => {
  if (!condition) failures.push(message);
};

const checkPage = ({ routePath, lang }) => {
  const failures = [];
  const filePath = toFsPath(routePath);
  assert(fs.existsSync(filePath), `Missing built page: ${routePath}`, failures);
  if (failures.length > 0) return failures;

  const html = readFile(filePath);
  const expectedCanonical = `${SITE_ORIGIN}${routePath}`;
  const expectedEn = `${SITE_ORIGIN}${lang === "es" ? routePath.slice(3) : routePath}`;
  const expectedEs = `${SITE_ORIGIN}${lang === "es" ? routePath : `/es${routePath}`}`;

  const canonical = getCanonicalHref(html);
  const hreflangEn = getLinkHref(html, "alternate", "en");
  const hreflangEs = getLinkHref(html, "alternate", "es");
  const hreflangDefault = getLinkHref(html, "alternate", "x-default");
  const htmlLang = getHtmlLang(html);

  assert(canonical === expectedCanonical, `${routePath} canonical mismatch: ${canonical}`, failures);
  assert(hreflangEn === expectedEn, `${routePath} hreflang en mismatch: ${hreflangEn}`, failures);
  assert(hreflangEs === expectedEs, `${routePath} hreflang es mismatch: ${hreflangEs}`, failures);
  assert(hreflangDefault === expectedEn, `${routePath} hreflang x-default mismatch: ${hreflangDefault}`, failures);
  assert(htmlLang === lang, `${routePath} html lang mismatch: ${htmlLang}`, failures);
  assert(html.includes('data-lang-switcher'), `${routePath} missing language switcher`, failures);

  return failures;
};

const checkSitemapAlternates = (enPath) => {
  const failures = [];
  if (!fs.existsSync(SITEMAP_PATH)) {
    return ["Missing built sitemap.xml page"];
  }
  const xml = readFile(SITEMAP_PATH);
  const enUrl = `${SITE_ORIGIN}${enPath}`;
  const esUrl = `${SITE_ORIGIN}${toEsPath(enPath)}`;
  const entryRegex = new RegExp(
    `<loc>${enUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc>[\\s\\S]*?<xhtml:link rel="alternate" hreflang="en" href="${enUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}" \\/>[\\s\\S]*?<xhtml:link rel="alternate" hreflang="es" href="${esUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}" \\/>[\\s\\S]*?<xhtml:link rel="alternate" hreflang="x-default" href="${enUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}" \\/>`,
    "i"
  );
  assert(entryRegex.test(xml), `sitemap alternate block missing or broken for ${enPath}`, failures);
  return failures;
};

const allFailures = [];
if (!fs.existsSync(SITEMAP_PATH)) {
  allFailures.push("Missing built sitemap.xml page");
}
for (const enPath of CORE_PATHS) {
  const enFailures = checkPage({ routePath: enPath, lang: "en" });
  allFailures.push(...enFailures);

  const esPath = toEsPath(enPath);
  const esFailures = checkPage({ routePath: esPath, lang: "es" });
  allFailures.push(...esFailures);

  if (allFailures.length === 0 || !allFailures.includes("Missing built sitemap.xml page")) {
    const sitemapFailures = checkSitemapAlternates(enPath);
    allFailures.push(...sitemapFailures);
  }
}

if (allFailures.length > 0) {
  console.error("Day 9 hreflang check FAILED");
  for (const failure of allFailures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Day 9 hreflang check PASSED");
console.log(`Checked ${CORE_PATHS.length} core EN routes + ${CORE_PATHS.length} ES routes.`);

const REDIRECT_HOSTS = new Set([
  "www.planmykorea.com",
  "visitkorea.pages.dev",
  "www.visitkorea.pages.dev",
  "visitingkorea.pages.dev",
  "www.visitingkorea.pages.dev",
]);

const LEGACY_PATH_REDIRECT_ENTRIES = [
  ["/shopping-and-deals/shopping-in-seoul", "/travel-basics/shopping-and-discounts/"],
  ["/shopping-and-deals/shopping-in-busan", "/travel-basics/shopping-and-discounts/"],
  ["/shopping-and-deals/tax-refund-explained", "/travel-basics/shopping-and-discounts/"],
  ["/es/shopping-and-deals/shopping-in-seoul", "/es/travel-basics/shopping-and-discounts/"],
  ["/es/shopping-and-deals/shopping-in-busan", "/es/travel-basics/shopping-and-discounts/"],
  ["/es/shopping-and-deals/tax-refund-explained", "/es/travel-basics/shopping-and-discounts/"],
  ["/es/shopping-and-deals/is-shopping-cheap-in-korea", "/es/travel-basics/shopping-and-discounts/"],
  ["/what-to-eat/food-for-first-timers", "/what-to-eat/what-should-i-try-first/"],
  ["/travel-basics/travel-insurance-for-korea", "/before-you-go/travel-insurance-for-korea/"],
  ["/es/travel-basics/travel-insurance-for-korea", "/es/before-you-go/travel-insurance-for-korea/"],
  ["/shopping-and-deals", "/travel-basics/shopping-and-discounts/"],
  ["/travel-basics/in-case-of-emergency", "/travel-basics/korea-travel-safety/"],
  ["/travel-basics/solo-travel-safety", "/travel-basics/korea-travel-safety/"],
  ["/travel-basics/how-to-pay-in-korea", "/travel-basics/"],
  ["/es/travel-basics/in-case-of-emergency", "/es/travel-basics/korea-travel-safety/"],
  ["/es/travel-basics/solo-travel-safety", "/es/travel-basics/korea-travel-safety/"],
  ["/es/travel-basics/how-to-pay-in-korea", "/es/travel-basics/"],
  ["/shopping-and-deals/how-to-get-discounts", "/travel-basics/shopping-and-discounts/"],
  ["/es/what-to-eat/food-for-first-timers", "/es/what-to-eat/what-should-i-try-first/"],
  ["/things-to-do/good-places-without-crowds", "/things-to-do/explore-korea/"],
  ["/es/things-to-do/good-places-without-crowds", "/es/things-to-do/explore-korea/"],
];

function hasFileExtension(pathname) {
  return /\/[^/]+\.[^/]+$/.test(pathname);
}

function stripTrailingSlash(pathname) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

function normalizePathLookup(pathname) {
  return stripTrailingSlash(pathname).toLowerCase();
}

function normalizeIncomingPath(pathname) {
  let next = pathname || "/";
  if (!next.startsWith("/")) {
    next = `/${next}`;
  }
  next = next.replace(/\/{2,}/g, "/");

  if (next !== "/") {
    next = next.replace(/\/index\.html$/i, "/");
    next = next.replace(/\/index$/i, "/");
  }

  if (!hasFileExtension(next)) {
    next = next.toLowerCase();
    if (next !== "/" && !next.endsWith("/")) {
      next = `${next}/`;
    }
  }

  return next;
}

function isSpanishPath(pathname) {
  return pathname === "/es/" || pathname.startsWith("/es/");
}

function stripSpanishPrefix(pathname) {
  if (!isSpanishPath(pathname)) {
    return pathname;
  }
  if (pathname === "/es/") {
    return "/";
  }
  return pathname.slice(3);
}

function withLang(pathname, lang) {
  const basePath = stripSpanishPrefix(pathname);
  if (lang === "es") {
    return basePath === "/" ? "/es/" : `/es${basePath}`;
  }
  return basePath;
}

const LEGACY_PATH_REDIRECTS = new Map(
  LEGACY_PATH_REDIRECT_ENTRIES.map(([from, to]) => [normalizePathLookup(from), to])
);

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const host = url.hostname.toLowerCase();
  const needsHostRedirect = REDIRECT_HOSTS.has(host);
  if (needsHostRedirect) {
    url.protocol = "https:";
    url.hostname = "planmykorea.com";
  }

  const originalPath = url.pathname;
  const originalSearch = url.search;
  let nextPath = normalizeIncomingPath(originalPath);

  const redirectPath = LEGACY_PATH_REDIRECTS.get(normalizePathLookup(nextPath));
  if (redirectPath) {
    nextPath = redirectPath;
  }

  const langQuery = url.searchParams.get("lang");
  if (langQuery) {
    const normalizedLang = langQuery.toLowerCase();
    if ((normalizedLang === "en" || normalizedLang === "es") && !hasFileExtension(nextPath)) {
      nextPath = withLang(nextPath, normalizedLang);
    }
    url.searchParams.delete("lang");
  }

  if (needsHostRedirect || nextPath !== originalPath || url.search !== originalSearch) {
    url.pathname = nextPath;
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}

const REDIRECT_HOSTS = new Set([
  "www.planmykorea.com",
  "visitkorea.pages.dev",
  "www.visitkorea.pages.dev",
  "visitingkorea.pages.dev",
  "www.visitingkorea.pages.dev",
]);

const LEGACY_PATH_REDIRECTS = new Map([
  ["/es/shopping-and-deals/is-shopping-cheap-in-korea", "/es/travel-basics/shopping-and-discounts/"],
  ["/what-to-eat/food-for-first-timers", "/what-to-eat/what-should-i-try-first/"],
  ["/shopping-and-deals", "/travel-basics/shopping-and-discounts/"],
  ["/travel-basics/in-case-of-emergency", "/travel-basics/korea-travel-safety/"],
  ["/travel-basics/solo-travel-safety", "/travel-basics/korea-travel-safety/"],
  ["/travel-basics/how-to-pay-in-korea", "/travel-basics/"],
  ["/shopping-and-deals/how-to-get-discounts", "/travel-basics/shopping-and-discounts/"],
  ["/es/what-to-eat/food-for-first-timers", "/es/what-to-eat/what-should-i-try-first/"],
]);

function normalizePath(pathname) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const host = url.hostname.toLowerCase();
  if (REDIRECT_HOSTS.has(host)) {
    url.protocol = "https:";
    url.hostname = "planmykorea.com";
    return Response.redirect(url.toString(), 301);
  }

  const normalizedPath = normalizePath(url.pathname);
  const redirectPath = LEGACY_PATH_REDIRECTS.get(normalizedPath);
  if (redirectPath) {
    url.pathname = redirectPath;
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}

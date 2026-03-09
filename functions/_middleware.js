const REDIRECT_HOSTS = new Set([
  "www.planmykorea.com",
  "visitkorea.pages.dev",
  "www.visitkorea.pages.dev",
  "visitingkorea.pages.dev",
  "www.visitingkorea.pages.dev",
]);

const CANONICAL_TRAILING_SLASH = new Set([
  "/plan-your-trip/2-weeks-in-korea",
  "/es/plan-your-trip/2-weeks-in-korea",
  "/things-to-do",
  "/es/things-to-do",
]);

const LEGACY_PATH_REDIRECTS = new Map([
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

  if (CANONICAL_TRAILING_SLASH.has(url.pathname)) {
    url.pathname = `${url.pathname}/`;
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

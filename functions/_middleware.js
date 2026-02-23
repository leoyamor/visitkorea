const REDIRECT_HOSTS = new Set([
  "www.planmykorea.com",
  "visitkorea.pages.dev",
  "www.visitkorea.pages.dev",
  "visitingkorea.pages.dev",
  "www.visitingkorea.pages.dev",
]);

const BLOCKED_PATHS = new Set([
  "/getting-around-korea/saving-on-transport",
  "/getting-around-korea/transfers-explained",
  "/es/getting-around-korea/saving-on-transport",
  "/es/getting-around-korea/transfers-explained",
  "/what-to-eat/food-for-first-timers",
  "/es/what-to-eat/food-for-first-timers",
  "/where-to-stay/where-to-stay-in-seoul",
  "/where-to-stay/where-to-stay-in-busan",
  "/es/where-to-stay/where-to-stay-in-seoul",
  "/es/where-to-stay/where-to-stay-in-busan",
]);

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const host = url.hostname.toLowerCase();
  const pathname = url.pathname.replace(/\/+$/, "") || "/";

  if (REDIRECT_HOSTS.has(host)) {
    url.protocol = "https:";
    url.hostname = "planmykorea.com";
    return Response.redirect(url.toString(), 301);
  }

  if (BLOCKED_PATHS.has(pathname)) {
    return new Response("Not Found", {
      status: 404,
      headers: {
        "cache-control": "no-store",
        "content-type": "text/plain; charset=utf-8",
        "x-robots-tag": "noindex",
      },
    });
  }

  return context.next();
}

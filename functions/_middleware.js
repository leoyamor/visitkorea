const REDIRECT_HOSTS = new Set([
  "www.planmykorea.com",
  "visitkorea.pages.dev",
  "www.visitkorea.pages.dev",
  "visitingkorea.pages.dev",
  "www.visitingkorea.pages.dev",
]);

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const host = url.hostname.toLowerCase();

  if (REDIRECT_HOSTS.has(host)) {
    url.protocol = "https:";
    url.hostname = "planmykorea.com";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}

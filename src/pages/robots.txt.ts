import { SITE_URL } from "../lib/site";

const host = new URL(SITE_URL).host;

export const GET = () =>
  new Response(
    `User-agent: *\nAllow: /\nDisallow: /404\n\nSitemap: ${SITE_URL}/sitemap.xml\nHost: ${host}\n`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    }
  );

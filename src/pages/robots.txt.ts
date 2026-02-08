import { SITE_URL } from "../lib/site";

export const GET = () =>
  new Response(
    `User-agent: *\nAllow: /\nDisallow: /404\nAllow: /llms.txt\nAllow: /llms-full.txt\n\nUser-agent: GPTBot\nAllow: /\n\nUser-agent: ChatGPT-User\nAllow: /\n\nUser-agent: Google-Extended\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    }
  );

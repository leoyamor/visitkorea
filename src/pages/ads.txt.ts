import { ADSENSE_PUBLISHER_ID } from "../lib/ads";

const adsTxtBody =
  ADSENSE_PUBLISHER_ID.length > 0
    ? `google.com, ${ADSENSE_PUBLISHER_ID}, DIRECT, f08c47fec0942fa0\n`
    : [
        "# No authorized digital sellers configured.",
        "# Set PUBLIC_ADSENSE_CLIENT_ID/ADSENSE_CLIENT_ID or PUBLIC_ADSENSE_PUBLISHER_ID/ADSENSE_PUBLISHER_ID to publish a valid ads.txt record.",
      ].join("\n");

export const GET = () =>
  new Response(adsTxtBody, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });

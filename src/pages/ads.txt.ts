import { ADSENSE_CLIENT_ID } from "../lib/ads";

const normalizePublisherId = (clientId: string) => {
  const normalized = clientId.trim().replace(/^ca-/, "");
  return /^pub-\d{16}$/.test(normalized) ? normalized : "";
};

const publisherId = normalizePublisherId(ADSENSE_CLIENT_ID);
const adsTxtBody =
  publisherId.length > 0
    ? `google.com, ${publisherId}, DIRECT, f08c47fec0942fa0\n`
    : [
        "# No authorized digital sellers configured.",
        "# Set PUBLIC_ADSENSE_CLIENT_ID to publish a valid ads.txt record.",
      ].join("\n");

export const GET = () =>
  new Response(adsTxtBody, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });

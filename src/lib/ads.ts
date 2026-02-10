export type AdZone = "leaf_after_intro" | "leaf_mid_content" | "leaf_end_content";

const env = import.meta.env as Record<string, string | undefined>;
const processEnv =
  typeof process !== "undefined" && process?.env
    ? (process.env as Record<string, string | undefined>)
    : {};

const readEnv = (...keys: string[]) => {
  for (const key of keys) {
    const value = (env[key] ?? processEnv[key] ?? "").trim();
    if (value.length > 0) return value;
  }
  return "";
};

const normalizeAdSenseClientId = (raw: string) => {
  const value = raw.trim().toLowerCase();
  if (/^ca-pub-\d{16}$/.test(value)) return value;
  if (/^pub-\d{16}$/.test(value)) return `ca-${value}`;
  return "";
};

const toPublisherId = (clientId: string) => clientId.replace(/^ca-/, "");

export const ADSENSE_CLIENT_ID = normalizeAdSenseClientId(
  readEnv("PUBLIC_ADSENSE_CLIENT_ID", "ADSENSE_CLIENT_ID", "NEXT_PUBLIC_ADSENSE_CLIENT_ID")
);
export const ADSENSE_ENABLED = ADSENSE_CLIENT_ID.length > 0;
export const ADSENSE_PUBLISHER_ID = toPublisherId(ADSENSE_CLIENT_ID);

export const ADSENSE_SLOT_BY_ZONE: Record<AdZone, string> = {
  leaf_after_intro: readEnv("PUBLIC_ADSENSE_SLOT_LEAF_AFTER_INTRO", "ADSENSE_SLOT_LEAF_AFTER_INTRO"),
  leaf_mid_content: readEnv("PUBLIC_ADSENSE_SLOT_LEAF_MID_CONTENT", "ADSENSE_SLOT_LEAF_MID_CONTENT"),
  leaf_end_content: readEnv("PUBLIC_ADSENSE_SLOT_LEAF_END_CONTENT", "ADSENSE_SLOT_LEAF_END_CONTENT"),
};

export const getAdSlotByZone = (zone: AdZone) => ADSENSE_SLOT_BY_ZONE[zone] ?? "";

export type AdZone = "leaf_after_intro" | "leaf_mid_content" | "leaf_end_content";

const env = import.meta.env as Record<string, string | undefined>;

const readEnv = (key: string) => (env[key] ?? "").trim();

export const ADSENSE_CLIENT_ID = readEnv("PUBLIC_ADSENSE_CLIENT_ID");
export const ADSENSE_ENABLED = ADSENSE_CLIENT_ID.length > 0;

export const ADSENSE_SLOT_BY_ZONE: Record<AdZone, string> = {
  leaf_after_intro: readEnv("PUBLIC_ADSENSE_SLOT_LEAF_AFTER_INTRO"),
  leaf_mid_content: readEnv("PUBLIC_ADSENSE_SLOT_LEAF_MID_CONTENT"),
  leaf_end_content: readEnv("PUBLIC_ADSENSE_SLOT_LEAF_END_CONTENT"),
};

export const getAdSlotByZone = (zone: AdZone) => ADSENSE_SLOT_BY_ZONE[zone] ?? "";

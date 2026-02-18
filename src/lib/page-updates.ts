import updates from "../data/page-updates.json";
import { EDITORIAL_UPDATED_ISO } from "./editorial";
import type { SupportedLang } from "./i18n";

type UpdatesFile = {
  pages?: Record<string, { updatedIso?: string }>;
};

const fileData = updates as UpdatesFile;

const normalizePath = (routePath: string) => {
  const trimmed = routePath.trim();
  if (!trimmed || trimmed === "/") return "/";
  return `/${trimmed.replace(/^\/+|\/+$/g, "")}`;
};

export const getPageUpdatedIso = (
  routePath: string,
  lang: SupportedLang,
  fallbackIso?: string
) => {
  const normalized = normalizePath(routePath);
  const key = `${lang}:${normalized}`;
  const iso = fileData.pages?.[key]?.updatedIso;
  return iso ?? fallbackIso ?? EDITORIAL_UPDATED_ISO;
};

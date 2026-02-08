export type SupportedLang = "en" | "es";

export const DEFAULT_LANG: SupportedLang = "en";

export const parseLang = (value?: string | null): SupportedLang =>
  value === "es" ? "es" : "en";

const isExternalUrl = (path: string) =>
  /^https?:\/\//.test(path) || /^mailto:/.test(path) || /^tel:/.test(path);

export const withLang = (path: string, lang: SupportedLang): string => {
  if (lang !== "es" || !path || isExternalUrl(path) || path.startsWith("#")) {
    return path;
  }

  const hashIndex = path.indexOf("#");
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : "";
  const withoutHash = hashIndex >= 0 ? path.slice(0, hashIndex) : path;

  const [pathname, queryString = ""] = withoutHash.split("?");
  const params = new URLSearchParams(queryString);
  params.set("lang", "es");
  const query = params.toString();

  return `${pathname}${query ? `?${query}` : ""}${hash}`;
};

export type SupportedLang = "en" | "es";

export const DEFAULT_LANG: SupportedLang = "en";

export const parseLang = (value?: string | null): SupportedLang =>
  value === "es" ? "es" : "en";

const LANG_PREFIX = "/es";

const isExternalUrl = (path: string) =>
  /^https?:\/\//.test(path) || /^mailto:/.test(path) || /^tel:/.test(path);

const normalizePathname = (pathname: string) => {
  if (!pathname) return "/";
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
};

export const isSpanishPath = (pathname: string) => {
  const normalized = normalizePathname(pathname);
  return normalized === LANG_PREFIX || normalized.startsWith(`${LANG_PREFIX}/`);
};

export const stripLangPrefix = (pathname: string) => {
  const normalized = normalizePathname(pathname);
  if (!isSpanishPath(normalized)) return normalized;
  if (normalized === LANG_PREFIX) return "/";
  const stripped = normalized.slice(LANG_PREFIX.length);
  return stripped || "/";
};

export const parseLangFromPath = (pathname?: string | null): SupportedLang =>
  pathname && isSpanishPath(pathname) ? "es" : "en";

export const withLang = (path: string, lang: SupportedLang): string => {
  if (lang !== "es" || !path || isExternalUrl(path) || path.startsWith("#")) {
    if (!path || isExternalUrl(path) || path.startsWith("#")) {
      return path;
    }
  }

  const hashIndex = path.indexOf("#");
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : "";
  const withoutHash = hashIndex >= 0 ? path.slice(0, hashIndex) : path;

  const [pathname = "/", queryString = ""] = withoutHash.split("?");
  const basePath = stripLangPrefix(pathname);
  const localizedPath =
    lang === "es"
      ? basePath === "/"
        ? "/es"
        : `/es${basePath}`
      : basePath;

  const params = new URLSearchParams(queryString);
  params.delete("lang");
  const query = params.toString();

  return `${localizedPath}${query ? `?${query}` : ""}${hash}`;
};

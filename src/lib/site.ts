export const SITE_URL = "https://visitingkorea.pages.dev";

export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

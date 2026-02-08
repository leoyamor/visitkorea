export const SITE_URL = "https://visitingkorea.pages.dev";
export const SITE_NAME = "Visit Korea Planner";
export const DEFAULT_OG_IMAGE_PATH = "/hero.webp";
export const DEFAULT_OG_IMAGE_ALT = "Visit Korea Planner home hero";

export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

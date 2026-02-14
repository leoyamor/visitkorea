import type { SupportedLang } from "./i18n";

export const EDITORIAL_AUTHOR_NAME = "Visit Korea Planner Editorial Team";
export const EDITORIAL_REVIEWER_NAME = "Travel Policy Review Desk";
export const EDITORIAL_UPDATED_ISO = "2026-02-15T00:00:00.000Z";

const formatUpdatedDate = (_lang: SupportedLang) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(EDITORIAL_UPDATED_ISO));

export const getEditorialMeta = (lang: SupportedLang) => ({
  authorName: EDITORIAL_AUTHOR_NAME,
  reviewerName: EDITORIAL_REVIEWER_NAME,
  updatedIso: EDITORIAL_UPDATED_ISO,
  updatedText: formatUpdatedDate(lang),
  labels:
    lang === "es"
      ? {
          writtenBy: "Autor",
          reviewedBy: "Revisión",
          updated: "Actualizado",
          aria: "Metadatos editoriales",
        }
      : {
          writtenBy: "Written by",
          reviewedBy: "Reviewed by",
          updated: "Updated",
          aria: "Editorial metadata",
        },
});

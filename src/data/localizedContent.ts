import type { SupportedLang } from "../lib/i18n";
import type { TreeNode } from "./siteTree";
import { localizedContentByPath, localizedContentByPathDraft } from "./localizedContentByPath";

type LocalizedContentBlock = NonNullable<TreeNode["content"]>[number];

export const localizedHubPathsPhase1 = [
  "/plan-your-trip",
  "/choose-a-city",
  "/before-you-go",
] as const;

export const localizedShadowReviewPaths = [
  "/plan-your-trip",
  "/before-you-go",
] as const;

export const localizedTranslationFields = [
  "title",
  "description",
  "quickAnswer",
  "content",
  "children.title",
  "children.description",
] as const;

export const structuralDataBoundary = [
  "slug",
  "icon",
  "image",
  "pageType",
  "overrides",
  "childrenOrder",
  "routing",
  "faqVisibility",
] as const;

export const translationDataBoundary = [
  "title",
  "description",
  "quickAnswer",
  "content",
  "children.<slug>.title",
  "children.<slug>.description",
] as const;

export const localizedContentPathKeyPattern = /^\/(?:[a-z0-9-]+)(?:\/[a-z0-9-]+)*$/;
export const localizedContentPathKeyExample = "/plan-your-trip/7-days-in-korea" as const;

export const localizedShadowReviewLangs = ["en", "es"] as const satisfies readonly SupportedLang[];
export const localizedShadowRequiredFields = [
  "title",
  "description",
  "quickAnswer",
  "content",
] as const;

export type LocalizedChildCopy = {
  title?: string;
  description?: string;
};

export type LocalizedPathCopy = {
  title?: string;
  description?: string;
  quickAnswer?: string;
  content?: LocalizedContentBlock[];
  children?: Record<string, LocalizedChildCopy>;
};

export type LocalizedContentByPath = Partial<
  Record<string, Partial<Record<SupportedLang, LocalizedPathCopy>>>
>;

export type LocalizedShadowRequiredField =
  (typeof localizedShadowRequiredFields)[number];

export type LocalizedContentReviewIssue = {
  path: string;
  lang: SupportedLang;
  reason: "invalid-path-key" | "missing-required-fields";
  needsReview: true;
  missingFields?: LocalizedShadowRequiredField[];
};

export const localizedContentDesignNotes = {
  defaultSourceOfTruth: "siteTree.ts",
  shadowDataSource: "localizedContentByPath.ts",
  migrationRule:
    "Keep routing, hierarchy, page type, and UI toggles in siteTree. Mirror only translatable copy into localizedContentByPath during the phased migration.",
  phase1Scope: localizedHubPathsPhase1,
  buildReviewScope: localizedShadowReviewPaths,
  requiredLangs: localizedShadowReviewLangs,
  translationFields: localizedTranslationFields,
  structureFields: structuralDataBoundary,
  translationFieldsBoundary: translationDataBoundary,
  pathKeyRule:
    "Use absolute content paths with no locale prefix and no trailing slash. Example: /plan-your-trip/7-days-in-korea",
  missingFieldRule:
    "If a review-scope path is missing any required field in a required language, it stays in the pre-build review queue until backfilled.",
} as const;

const hasRequiredShadowField = (
  copy: LocalizedPathCopy | undefined,
  field: LocalizedShadowRequiredField
) => {
  if (!copy) return false;
  const value = copy[field];

  if (field === "content") {
    return Array.isArray(value) && value.length > 0;
  }

  return typeof value === "string" && value.trim().length > 0;
};

export const isLocalizedContentPathKey = (path: string) =>
  localizedContentPathKeyPattern.test(path);

export const getLocalizedContentReviewQueue = (
  content: LocalizedContentByPath = localizedContentByPath
): LocalizedContentReviewIssue[] => {
  const issues: LocalizedContentReviewIssue[] = [];

  for (const path of Object.keys(content)) {
    if (!isLocalizedContentPathKey(path)) {
      for (const lang of localizedShadowReviewLangs) {
        issues.push({
          path,
          lang,
          reason: "invalid-path-key",
          needsReview: true,
        });
      }
    }
  }

  for (const path of localizedShadowReviewPaths) {
    const localizedEntry = content[path];

    for (const lang of localizedShadowReviewLangs) {
      const copy = localizedEntry?.[lang];
      const missingFields = localizedShadowRequiredFields.filter(
        (field) => !hasRequiredShadowField(copy, field)
      );

      if (missingFields.length > 0) {
        issues.push({
          path,
          lang,
          reason: "missing-required-fields",
          missingFields,
          needsReview: true,
        });
      }
    }
  }

  return issues;
};

export { localizedContentByPath, localizedContentByPathDraft };

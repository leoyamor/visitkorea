import type { TreeNode } from "./siteTree";
import type { SupportedLang } from "../lib/i18n";

type LocalizedContentBlock = NonNullable<TreeNode["content"]>[number];

export const localizedHubPathsPhase1 = [
  "/plan-your-trip",
  "/choose-a-city",
  "/before-you-go",
] as const;

export const localizedTranslationFields = [
  "title",
  "description",
  "quickAnswer",
  "content",
  "hubCardLabel",
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
  "hubCards.<slug>.label",
] as const;

export type LocalizedHubCardCopy = {
  label?: string;
};

export type LocalizedPathCopy = {
  title?: string;
  description?: string;
  quickAnswer?: string;
  content?: LocalizedContentBlock[];
  hubCards?: Record<string, LocalizedHubCardCopy>;
};

export type LocalizedContentByPath = Partial<
  Record<string, Partial<Record<SupportedLang, LocalizedPathCopy>>>
>;

export const localizedContentDesignNotes = {
  defaultSourceOfTruth: "siteTree.ts",
  migrationRule:
    "Keep routing, hierarchy, page type, and UI toggles in siteTree. Move only translatable copy into localizedContentByPath during the phased migration.",
  phase1Scope: localizedHubPathsPhase1,
  translationFields: localizedTranslationFields,
  structureFields: structuralDataBoundary,
  translationFieldsBoundary: translationDataBoundary,
} as const;

// Draft only: TreePage still reads inline overrides today. This object locks the target shape
// and phase-1 path scope without switching the rendering source yet.
export const localizedContentByPath: LocalizedContentByPath = {
  "/plan-your-trip": {
    es: {
      title: "Planifica tu viaje",
      description: "Planifica tus dias con un ritmo realista, sin llenar demasiado el itinerario.",
      quickAnswer:
        "Empieza con tres filtros simples: cuanto tiempo te quedas, con que frecuencia aceptas cambiar de hotel y cuanto te drenan los dias largos de traslado.",
      content: [],
      hubCards: {
        "7-days-in-korea": { label: "7 dias en Corea" },
        "2-weeks-in-korea": { label: "2 semanas en Corea" },
        "1-month-in-korea": { label: "1 mes en Corea" },
      },
    },
  },
  "/choose-a-city": {
    es: {
      title: "Elige una ciudad",
      description: "Elige la ciudad que mejor encaja con tu forma de viajar.",
      quickAnswer:
        "Primero decide por energia, friccion de transporte y temporada; luego compara el tipo de ritmo que quieres sostener cada dia.",
      content: [],
      hubCards: {
        seoul: { label: "Seul" },
        busan: { label: "Busan" },
        jeju: { label: "Jeju" },
        gyeongju: { label: "Gyeongju" },
        jeonju: { label: "Jeonju" },
        "which-city-fits-you-best": { label: "Que ciudad te queda mejor?" },
      },
    },
  },
  "/before-you-go": {
    es: {
      title: "Antes de viajar",
      description: "Cierra los preparativos finales antes de salir.",
      quickAnswer:
        "Usa este hub para confirmar entrada, conectividad y comprobaciones finales sin dejar decisiones importantes para el ultimo minuto.",
      content: [],
      hubCards: {},
    },
  },
};

export const localizedContentByPathDraft = localizedContentByPath;

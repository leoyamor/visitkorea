import type { TreeNode } from "../data/siteTree";
import type { SupportedLang } from "./i18n";

type LeafContentBlock = NonNullable<TreeNode["content"]>[number];

const compact = (value?: string) => (value ?? "").replace(/\s+/g, " ").trim();

const truncate = (value: string, max = 260) => {
  const text = compact(value);
  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}...`;
};

const ensureSentence = (value: string) => {
  const text = compact(value);
  if (!text) return "";
  return /[.!?]$/.test(text) ? text : `${text}.`;
};

const firstSentence = (value?: string) => {
  const text = compact(value);
  if (!text) return "";
  const match = text.match(/^(.+?[.!?])(\s|$)/);
  return match ? match[1].trim() : text;
};

const stripTrailingPunctuation = (value: string) => compact(value).replace(/[.:;!?]+$/g, "");

const cleanTitle = (value?: string) =>
  stripTrailingPunctuation(
    compact(value)
      .replace(/^[^A-Za-z0-9]+/g, "")
      .replace(/^\d+\s*[\).:-]\s*/g, "")
  );

const unique = (items: string[]) => [...new Set(items)];

const joinItems = (items: string[], lang: SupportedLang) => {
  if (items.length <= 1) return items[0] ?? "";
  if (items.length === 2) return `${items[0]} ${lang === "es" ? "y" : "and"} ${items[1]}`;
  const conjunction = lang === "es" ? "y" : "and";
  return `${items.slice(0, -1).join(", ")}, ${conjunction} ${items[items.length - 1]}`;
};

const hasPlaceholderTone = (value: string, lang: SupportedLang) => {
  const text = compact(value).toLowerCase();
  if (!text) return true;
  if (lang === "es") {
    return (
      text.includes("descripcion breve") ||
      text.includes("resumen breve") ||
      text.includes("mas detalle mas adelante")
    );
  }
  return (
    text.includes("short description") ||
    text.includes("short summary coming soon") ||
    text.includes("to be added later")
  );
};

const stopTitlePattern: Record<SupportedLang, RegExp> = {
  en: /^(quick overview|introduction|final advice|conclusion|summary)$/i,
  es: /^(respuesta rapida|introduccion|consejo final|conclusion|resumen)$/i,
};

const pickTopics = (sections: LeafContentBlock[], lang: SupportedLang) =>
  unique(
    sections
      .map((section) => cleanTitle(section.title))
      .filter(Boolean)
      .filter((title) => !stopTitlePattern[lang].test(title))
      .slice(0, 2)
  );

const pickBullet = (sections: LeafContentBlock[]) => {
  const bullets = sections
    .flatMap((section) => section.bullets ?? [])
    .map((bullet) => stripTrailingPunctuation(bullet))
    .filter((bullet) => bullet.length >= 10);
  return bullets[0] ?? "";
};

const normalize = (value: string) =>
  compact(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const buildSupport = (topics: string[], bullet: string, lang: SupportedLang) => {
  const topicText = joinItems(topics, lang);
  const shortBullet = truncate(bullet, 96);

  if (lang === "es") {
    if (topicText && shortBullet) return `Cubre ${topicText} con puntos practicos como ${shortBullet}.`;
    if (topicText) return `Cubre ${topicText} con pasos claros y aplicables.`;
    if (shortBullet) return `Incluye un punto clave: ${shortBullet}.`;
    return "";
  }

  if (topicText && shortBullet) return `It covers ${topicText}, with practical points like ${shortBullet}.`;
  if (topicText) return `It covers ${topicText} with clear, actionable steps.`;
  if (shortBullet) return `A key point is ${shortBullet}.`;
  return "";
};

export const buildLeafQuickAnswer = (node: TreeNode, lang: SupportedLang) => {
  if (node.children?.length) return compact(node.quickAnswer ?? node.description);

  const sections = node.content ?? [];
  const quickAnswerSeed = compact(node.quickAnswer);
  const usableSeed = !hasPlaceholderTone(quickAnswerSeed, lang) ? quickAnswerSeed : "";
  const fallbackFromContent =
    firstSentence(sections[0]?.body) ||
    firstSentence(sections[1]?.body) ||
    compact(node.description);

  const baseText =
    usableSeed ||
    fallbackFromContent ||
    (lang === "es"
      ? "Esta pagina resume la decision principal para tu viaje en Corea."
      : "This page summarizes the key decision for your Korea trip.");

  const baseSentence = ensureSentence(baseText);
  const topics = pickTopics(sections, lang);
  const keyBullet = pickBullet(sections);
  const support = buildSupport(topics, keyBullet, lang);

  if (!support) return truncate(baseSentence);

  const normalizedBase = normalize(baseSentence);
  const hasTopicInBase = topics.some((topic) => normalizedBase.includes(normalize(topic)));
  const hasBulletInBase = keyBullet && normalizedBase.includes(normalize(keyBullet).slice(0, 24));
  const shouldAppendSupport = !hasBulletInBase && (!hasTopicInBase || baseSentence.length < 140);

  return truncate(shouldAppendSupport ? `${baseSentence} ${support}` : baseSentence);
};

import type { TreeNode } from "../data/siteTree";
import type { SupportedLang } from "./i18n";

export type LeafFaqItem = {
  question: string;
  answer: string;
};

type LeafContentBlock = NonNullable<TreeNode["content"]>[number];

const compact = (value?: string) => (value ?? "").replace(/\s+/g, " ").trim();

const ensureSentence = (value: string) => {
  const trimmed = compact(value);
  if (!trimmed) return "";
  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
};

const toFirstSentence = (value?: string) => {
  const text = compact(value);
  if (!text) return "";
  const match = text.match(/^(.+?[.!?])(\s|$)/);
  return match ? match[1].trim() : text;
};

const truncate = (value: string, max = 220) => {
  const text = compact(value);
  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}...`;
};

const summarizeSection = (section?: LeafContentBlock) => {
  if (!section) return "";
  const bulletLead = section.bullets?.[0] ? compact(section.bullets[0]) : "";
  const answer = compact(
    [section.emphasis, toFirstSentence(section.body), bulletLead].filter(Boolean).join(" ")
  );
  return truncate(answer);
};

const joinItems = (items: string[], conjunction: string) => {
  if (items.length <= 1) return items[0] ?? "";
  if (items.length === 2) return `${items[0]} ${conjunction} ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, ${conjunction} ${items[items.length - 1]}`;
};

const hasPattern = (section: LeafContentBlock, pattern: RegExp) =>
  pattern.test(compact([section.title, section.emphasis, section.body].join(" ")));

const LEAF_FAQ_LABELS: Record<
  SupportedLang,
  {
    overview: string;
    decision: string;
    avoid: string;
    verify: string;
    next: string;
  }
> = {
  en: {
    overview: "Do I need to read this before I finalize plans?",
    decision: "What is the key decision on this page?",
    avoid: "What common mistake should I avoid?",
    verify: "What should I verify with official sources?",
    next: "What should I do next after this page?",
  },
  es: {
    overview: "Debo leer esto antes de cerrar mi plan?",
    decision: "Cual es la decision clave de esta pagina?",
    avoid: "Que error comun debo evitar?",
    verify: "Que debo verificar en fuentes oficiales?",
    next: "Que deberia hacer despues de esta pagina?",
  },
};

const LEAF_FAQ_BY_LANG: Record<SupportedLang, Record<string, LeafFaqItem[]>> = {
  en: {
    "travel-insurance-for-korea": [
      {
        question: "Is travel insurance required for Korea?",
        answer:
          "Usually no. It is not mandatory for most short-term visitors, but it is strongly recommended.",
      },
      {
        question: "What can a hospital visit cost without insurance?",
        answer:
          "Emergency care can be expensive for tourists. A single ER visit in Seoul can be a few hundred dollars, and inpatient care can rise quickly.",
      },
      {
        question: "What coverage is enough for a normal trip?",
        answer:
          "A practical baseline is emergency medical, hospitalization, and trip disruption coverage. Many travelers target at least $50,000-$100,000 USD medical coverage.",
      },
      {
        question: "Do I need adventure coverage too?",
        answer:
          "Only if you plan higher-risk activities like skiing, climbing, or similar sports.",
      },
      {
        question: "Why buy insurance if I may never use it?",
        answer:
          "Most travelers never need it, which is ideal. The value is reducing financial risk so one incident does not damage your trip budget.",
      },
    ],
  },
  es: {
    "travel-insurance-for-korea": [
      {
        question: "Es obligatorio el seguro de viaje para Corea?",
        answer:
          "Normalmente no. Para la mayoria de visitas cortas no es obligatorio, pero si es muy recomendable.",
      },
      {
        question: "Cuanto puede costar una atencion medica sin seguro?",
        answer:
          "Para turistas puede ser caro. Una sola visita a urgencias en Seul puede costar cientos de dolares y una hospitalizacion puede subir rapido.",
      },
      {
        question: "Que cobertura minima conviene para un viaje normal?",
        answer:
          "Como base practica, cobertura medica de emergencia, hospitalizacion y problemas del viaje. Muchos viajeros buscan al menos $50,000-$100,000 USD en cobertura medica.",
      },
      {
        question: "Necesito tambien cobertura de aventura?",
        answer:
          "Solo si planeas actividades de mayor riesgo como esqui, escalada u otros deportes similares.",
      },
      {
        question: "Por que contratar seguro si quizas no lo use?",
        answer:
          "Lo ideal es no usarlo nunca. Su valor real es reducir el riesgo financiero para que un incidente no arruine tu presupuesto.",
      },
    ],
  },
};

const buildAutoLeafFaqItems = (node: TreeNode, lang: SupportedLang): LeafFaqItem[] => {
  const labels = LEAF_FAQ_LABELS[lang] ?? LEAF_FAQ_LABELS.en;
  const sections = node.content ?? [];
  const quickSummary = compact(node.quickAnswer) || compact(node.description);
  const topTitles = sections.map((section) => compact(section.title)).filter(Boolean).slice(0, 2);
  const topTitleText = joinItems(topTitles, lang === "es" ? "y" : "and");

  const avoidSection = sections.find((section) =>
    hasPattern(
      section,
      /(wrong|mistake|avoid|careful|risk|trap|error|issue|evitar|errores|cuidado|riesgo|problema)/i
    )
  );
  const verifySection = sections.find((section) =>
    hasPattern(
      section,
      /(official|confirm|verify|latest|updated|details|check|source|oficial|verifica|confirm|actual)/i
    )
  );
  const nextSection = sections[sections.length - 1];

  const overviewAnswer = ensureSentence(
    quickSummary ||
      (lang === "es"
        ? "Esta guia te ayuda a decidir lo esencial de forma rapida y clara"
        : "This guide helps you make the key trip decision quickly and clearly")
  );
  const decisionAnswer = ensureSentence(
    topTitleText
      ? lang === "es"
        ? `Enfocate primero en ${topTitleText}`
        : `Focus first on ${topTitleText}`
      : toFirstSentence(node.description) ||
          (lang === "es"
            ? "Prioriza una decision principal y deja los detalles para despues"
            : "Prioritize one main decision first, then fill in details")
  );
  const avoidAnswer = ensureSentence(
    summarizeSection(avoidSection) ||
      (lang === "es"
        ? "Evita decidir con prisa o suponer que todo funciona igual que en tu pais"
        : "Avoid rushed decisions and assumptions that everything works like your home country")
  );
  const verifyAnswer = ensureSentence(
    summarizeSection(verifySection) ||
      (lang === "es"
        ? "Antes de pagar o reservar, confirma siempre reglas y precios en fuentes oficiales"
        : "Before paying or booking, always confirm rules and prices with official sources")
  );
  const nextAnswer = ensureSentence(
    summarizeSection(nextSection) ||
      (lang === "es"
        ? "Aplica esta decision y sigue con la siguiente guia recomendada para cerrar tu plan"
        : "Apply this decision, then move to the recommended next guide to finalize your plan")
  );

  const items: LeafFaqItem[] = [
    { question: labels.overview, answer: truncate(overviewAnswer) },
    { question: labels.decision, answer: truncate(decisionAnswer) },
    { question: labels.avoid, answer: truncate(avoidAnswer) },
    { question: labels.verify, answer: truncate(verifyAnswer) },
    { question: labels.next, answer: truncate(nextAnswer) },
  ];

  const seen = new Set<string>();
  return items.filter((item) => {
    const key = `${item.question}::${item.answer}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return Boolean(compact(item.answer));
  });
};

export const getLeafFaqItems = (node: TreeNode | undefined, lang: SupportedLang): LeafFaqItem[] => {
  if (!node?.slug || node.children?.length) return [];
  const bySlug = LEAF_FAQ_BY_LANG[lang] ?? LEAF_FAQ_BY_LANG.en;
  const manual = bySlug[node.slug] ?? [];
  if (manual.length > 0) return manual;
  return buildAutoLeafFaqItems(node, lang);
};

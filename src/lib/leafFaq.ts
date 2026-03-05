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
    "sim-or-esim": [
      {
        question: "My phone supports eSIM. Should I still buy a physical SIM at the airport?",
        answer:
          "Usually no. If your phone is unlocked, install eSIM before departure and activate after landing.",
      },
      {
        question: "I land late at night. What setup is least risky?",
        answer:
          "Pre-installed eSIM is usually safest because you can use maps and messages immediately without counter queues.",
      },
      {
        question: "Do I need a Korean number, or is data-only enough?",
        answer:
          "Data-only is enough for most trips. Add voice only if you must call local numbers directly.",
      },
      {
        question: "Unusual case: Can I keep my home SIM for OTP while using eSIM data in Korea?",
        answer:
          "Yes in many cases with dual-SIM phones. Keep your home SIM active for SMS OTP and route mobile data through the Korea eSIM.",
      },
    ],
    "travel-insurance-for-korea": [
      {
        question: "Is travel insurance required for entry to Korea?",
        answer:
          "Usually no. It is not mandatory for most short-term visitors under visa-free travel or K-ETA.",
      },
      {
        question: "When is buying insurance the rational decision?",
        answer:
          "Buy it when one medical bill, delay, or lost bag would materially hurt your trip budget.",
      },
      {
        question: "What minimum coverage should I compare first?",
        answer:
          "Start with emergency medical and hospitalization, then add delay/cancellation and baggage based on your itinerary.",
      },
      {
        question: "Do I need adventure or winter sports coverage?",
        answer:
          "Yes if you plan skiing, hiking, or similar activities. Standard plans often exclude those unless added.",
      },
      {
        question: "Unusual case: If I rent a scooter or e-bike for one day, is it covered?",
        answer:
          "Often not by default. Check policy wording for two-wheel vehicle exclusions before assuming coverage.",
      },
    ],
  },
  es: {
    "sim-or-esim": [
      {
        question: "Mi telefono admite eSIM. Aun asi conviene comprar SIM fisica en el aeropuerto?",
        answer:
          "Normalmente no. Si tu telefono esta desbloqueado, instala la eSIM antes de salir y activala al aterrizar.",
      },
      {
        question: "Llego tarde por la noche. Que opcion reduce mas riesgo?",
        answer:
          "La eSIM preinstalada suele ser la mas segura porque te deja usar mapas y mensajes al instante, sin filas en mostrador.",
      },
      {
        question: "Necesito numero coreano o me alcanza con datos?",
        answer:
          "Para la mayoria de viajes alcanza con datos. Agrega voz solo si realmente necesitas llamar a numeros locales.",
      },
      {
        question: "Caso poco comun: puedo mantener mi SIM de origen para OTP y usar datos con eSIM en Corea?",
        answer:
          "Si, en muchos moviles dual-SIM. Mantienes tu SIM de origen para SMS OTP y dejas los datos moviles en la eSIM coreana.",
      },
    ],
    "travel-insurance-for-korea": [
      {
        question: "Es obligatorio el seguro para entrar a Corea?",
        answer:
          "Normalmente no. Para la mayoria de visitas cortas bajo viaje sin visado o K-ETA no es obligatorio.",
      },
      {
        question: "Cuando tiene sentido comprarlo?",
        answer:
          "Cuando una factura medica, un retraso o una maleta perdida golpearia de forma real tu presupuesto.",
      },
      {
        question: "Que cobertura minima conviene comparar primero?",
        answer:
          "Empieza por cobertura medica de emergencia y hospitalizacion, y luego agrega retraso/cancelacion y equipaje segun tu itinerario.",
      },
      {
        question: "Necesito cobertura para aventura o deportes de invierno?",
        answer:
          "Si planeas esqui, senderismo u otras actividades de riesgo, si. Muchos planes base no lo cubren sin extra.",
      },
      {
        question: "Caso poco comun: si alquilo scooter o bici electrica un dia, suele cubrirme?",
        answer:
          "Muchas veces no de forma automatica. Revisa exclusiones de vehiculos de dos ruedas antes de asumir cobertura.",
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

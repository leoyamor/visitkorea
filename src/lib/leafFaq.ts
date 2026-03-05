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
          "Usually no. If your phone is unlocked, installing an eSIM before departure is the simplest option.",
      },
      {
        question: "I land late at night. What setup is least risky?",
        answer:
          "A pre-installed eSIM is often the safest because you can use maps and messaging immediately after landing.",
      },
      {
        question: "Do I need a Korean phone number, or is data-only enough?",
        answer:
          "For most travelers, data-only is completely sufficient. Add voice service only if you expect to call Korean numbers directly.",
      },
      {
        question: "Unusual case: Can I keep my home SIM for OTP while using a Korea eSIM for data?",
        answer:
          "Yes. Many dual-SIM phones allow you to keep your home SIM active for SMS verification while using the Korean eSIM for mobile data.",
      },
    ],
    "travel-insurance-for-korea": [
      {
        question: "Is travel insurance required for entry to Korea?",
        answer:
          "Usually no. Most short-term visitors entering visa-free or with K-ETA do not need travel insurance for immigration.",
      },
      {
        question: "When is buying insurance the rational choice?",
        answer:
          "Consider it if one medical bill, flight disruption, or lost bag would noticeably affect your travel budget.",
      },
      {
        question: "What coverage should I compare first?",
        answer:
          "Start with emergency medical treatment and hospitalization coverage. Then consider trip delay, cancellation, and baggage protection depending on your itinerary.",
      },
      {
        question: "Do I need coverage for winter or outdoor activities?",
        answer:
          "Yes if you plan activities like skiing, hiking, or similar sports. Standard plans sometimes exclude these unless additional coverage is added.",
      },
      {
        question: "Unusual case: If I rent a scooter or e-bike for one day, is it covered?",
        answer:
          "Not always. Some policies exclude two-wheel vehicles, so check the wording before assuming you are covered.",
      },
    ],
  },
  es: {
    "sim-or-esim": [
      {
        question: "Mi telefono admite eSIM. Aun asi conviene comprar SIM fisica en el aeropuerto?",
        answer:
          "Normalmente no. Si tu telefono esta desbloqueado, instalar una eSIM antes de salir suele ser la opcion mas simple.",
      },
      {
        question: "Llego tarde por la noche. Que opcion reduce mas riesgo?",
        answer:
          "Una eSIM preinstalada suele ser la opcion mas segura porque te permite usar mapas y mensajeria justo despues de aterrizar.",
      },
      {
        question: "Necesito numero coreano o me alcanza con datos?",
        answer:
          "Para la mayoria de viajeros, un plan solo de datos es totalmente suficiente. Agrega voz solo si esperas llamar directamente a numeros coreanos.",
      },
      {
        question: "Caso poco comun: puedo mantener mi SIM de origen para OTP y usar datos con eSIM en Corea?",
        answer:
          "Si. Muchos moviles dual-SIM permiten mantener activa tu SIM de origen para SMS de verificacion mientras usas la eSIM coreana para datos moviles.",
      },
    ],
    "travel-insurance-for-korea": [
      {
        question: "Es obligatorio el seguro para entrar a Corea?",
        answer:
          "Normalmente no. La mayoria de visitantes de corta estancia que entran sin visado o con K-ETA no necesita seguro de viaje para inmigracion.",
      },
      {
        question: "Cuando es una decision racional contratarlo?",
        answer:
          "Consideralo si una factura medica, una interrupcion de vuelo o una maleta perdida afectaria de forma visible tu presupuesto de viaje.",
      },
      {
        question: "Que cobertura conviene comparar primero?",
        answer:
          "Empieza por tratamiento medico de emergencia y hospitalizacion. Luego evalua retrasos, cancelaciones y proteccion de equipaje segun tu itinerario.",
      },
      {
        question: "Necesito cobertura para actividades de invierno o al aire libre?",
        answer:
          "Si, si planeas actividades como esqui, senderismo o deportes similares. Los planes estandar a veces las excluyen salvo que agregues cobertura adicional.",
      },
      {
        question: "Caso poco comun: si alquilo scooter o bici electrica un dia, suele cubrirme?",
        answer:
          "No siempre. Algunas polizas excluyen vehiculos de dos ruedas, asi que revisa el texto antes de asumir que estas cubierto.",
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

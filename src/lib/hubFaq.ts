import type { TreeNode } from "../data/siteTree";
import type { SupportedLang } from "./i18n";

export type HubFaqItem = {
  question: string;
  answer: string;
};

const HUB_FAQ_BY_LANG: Record<SupportedLang, Record<string, HubFaqItem[]>> = {
  en: {
    "travel-basics": [
      {
        question: "Do I need a local SIM or can I rely on Wi-Fi?",
        answer:
          "Most travelers should use eSIM or SIM on day one. Public Wi-Fi helps, but maps, ride apps, and translations are more reliable with your own data.",
      },
      {
        question: "How much should I budget for internet in Korea?",
        answer:
          "A typical traveler plan is about 15,000-30,000 KRW for short trips. Prices vary by data size, provider, and where you buy.",
      },
      {
        question: "Can I pay mostly by card in Korea?",
        answer:
          "Yes. Card is accepted in most places, but keep a small cash backup for markets, small shops, or transport edge cases.",
      },
      {
        question: "Is Korea generally safe for foreign visitors?",
        answer:
          "Korea is generally safe, including for solo travelers. Basic awareness still matters in crowded areas and late-night districts.",
      },
      {
        question: "What emergency numbers should I save before arrival?",
        answer:
          "Save 112 for police, 119 for fire and ambulance, and 1330 for travel help. Keep them in your phone before your flight.",
      },
    ],
  },
  es: {
    "travel-basics": [
      {
        question: "Necesito una SIM local o basta con Wi-Fi?",
        answer:
          "La mayoria de viajeros deberia usar eSIM o SIM desde el primer dia. El Wi-Fi publico ayuda, pero mapas, transporte y traduccion funcionan mejor con datos propios.",
      },
      {
        question: "Cuanto cuesta normalmente el internet movil en Corea?",
        answer:
          "Un plan tipico para viajeros cuesta aprox. 15,000-30,000 KRW en viajes cortos. El precio cambia segun datos, proveedor y punto de compra.",
      },
      {
        question: "Se puede pagar casi todo con tarjeta en Corea?",
        answer:
          "Si. La tarjeta se acepta en la mayoria de lugares, pero conviene llevar algo de efectivo para mercados, tiendas pequenas o casos puntuales.",
      },
      {
        question: "Corea es segura para visitantes extranjeros?",
        answer:
          "En general, Corea es segura, incluso para viajeros solos. Aun asi, en zonas muy concurridas o de noche conviene mantener cuidado basico.",
      },
      {
        question: "Que numeros de emergencia debo guardar antes de viajar?",
        answer:
          "Guarda 112 para policia, 119 para bomberos y ambulancia, y 1330 para asistencia turistica. Guardalos antes del vuelo.",
      },
    ],
  },
};

const compact = (value?: string) => (value ?? "").replace(/\s+/g, " ").trim();
const firstSentence = (value?: string) => {
  const text = compact(value);
  if (!text) return "";
  const match = text.match(/^(.+?[.!?])(\s|$)/);
  return match ? match[1].trim() : text;
};
const stripTrailingPunctuation = (value: string) => compact(value).replace(/[.!?]+$/g, "");
const trimDanglingConnector = (value: string) =>
  compact(value).replace(/\b(with|and|or|y|con|e)$/i, "").trim();

const joinTitles = (titles: string[], lang: SupportedLang) => {
  const cleaned = titles.map((title) => compact(title)).filter(Boolean);
  if (!cleaned.length) return "";
  if (cleaned.length === 1) return cleaned[0];
  if (cleaned.length === 2) {
    return lang === "es" ? `${cleaned[0]} y ${cleaned[1]}` : `${cleaned[0]} and ${cleaned[1]}`;
  }
  if (lang === "es") return `${cleaned[0]}, ${cleaned[1]} y ${cleaned[2]}`;
  return `${cleaned[0]}, ${cleaned[1]}, and ${cleaned[2]}`;
};

type HubDecisionFrame = {
  factorEn: string;
  factorEs: string;
  outcomeEn: string;
  outcomeEs: string;
};

const HUB_DECISION_FRAMES: Record<string, HubDecisionFrame> = {
  "plan-your-trip": {
    factorEn: "trip length, transfer load, and daily pacing",
    factorEs: "duracion del viaje, carga de traslados y ritmo diario",
    outcomeEn:
      "Each guide explains realistic travel time, cost expectations, and practical trade-offs before you lock your route.",
    outcomeEs:
      "Cada guia explica tiempos reales, expectativas de costo y compensaciones practicas antes de cerrar tu ruta.",
  },
  "choose-a-city": {
    factorEn: "travel style, city atmosphere, and transfer distance",
    factorEs: "estilo de viaje, ambiente de ciudad y distancia de traslados",
    outcomeEn:
      "Each guide compares neighborhood feel, access, and planning trade-offs so you can choose the right base.",
    outcomeEs:
      "Cada guia compara ambiente de zona, accesos y compensaciones de planificacion para elegir la mejor base.",
  },
  "getting-around-korea": {
    factorEn: "route length, budget, and comfort level",
    factorEs: "distancia de ruta, presupuesto y nivel de comodidad",
    outcomeEn:
      "Each guide shows practical transfer flow, likely costs, and where each transport option works best.",
    outcomeEs:
      "Cada guia muestra flujo real de traslados, costos probables y donde funciona mejor cada opcion de transporte.",
  },
  "what-to-eat": {
    factorEn: "spice tolerance, dietary needs, and neighborhood context",
    factorEs: "tolerancia al picante, necesidades alimentarias y contexto de zona",
    outcomeEn:
      "Each guide clarifies what to try first, what to avoid, and practical trade-offs for different food styles.",
    outcomeEs:
      "Cada guia aclara que probar primero, que evitar y las compensaciones practicas segun estilo de comida.",
  },
  "where-to-stay": {
    factorEn: "location priority, budget range, and sleep style",
    factorEs: "prioridad de ubicacion, rango de presupuesto y estilo de descanso",
    outcomeEn:
      "Each guide compares area fit, typical price range, and trade-offs between convenience, noise, and value.",
    outcomeEs:
      "Cada guia compara encaje por zona, rango tipico de precio y compensaciones entre conveniencia, ruido y valor.",
  },
  "things-to-do": {
    factorEn: "interest fit, pass value, and day-to-day energy",
    factorEs: "interes personal, valor de pases y energia diaria",
    outcomeEn:
      "Each guide helps you estimate realistic attraction mix, timing, and cost trade-offs before booking.",
    outcomeEs:
      "Cada guia ayuda a estimar una mezcla realista de atracciones, tiempos y compensaciones de costo antes de reservar.",
  },
  "travel-basics": {
    factorEn: "connectivity needs, payment habits, and safety expectations",
    factorEs: "necesidades de conectividad, habitos de pago y expectativas de seguridad",
    outcomeEn:
      "Each guide explains practical setup choices and what may vary by travel style, location, or daily routine.",
    outcomeEs:
      "Cada guia explica decisiones practicas de configuracion y lo que puede variar por estilo de viaje, zona o rutina diaria.",
  },
  "before-you-go": {
    factorEn: "entry status, document readiness, and airport process timing",
    factorEs: "estado de entrada, preparacion de documentos y tiempos de proceso en aeropuerto",
    outcomeEn:
      "Each guide clarifies official steps, conditional rules, and practical checks before departure under current policy.",
    outcomeEs:
      "Cada guia aclara pasos oficiales, reglas condicionales y verificaciones practicas antes de salir bajo la politica vigente.",
  },
  "shopping-and-deals": {
    factorEn: "product category, VAT eligibility, and real discount conditions",
    factorEs: "categoria de producto, elegibilidad de IVA y condiciones reales de descuento",
    outcomeEn:
      "Each guide separates headline promotions from actual savings and shows practical cost trade-offs before spending.",
    outcomeEs:
      "Cada guia separa promociones de titulares del ahorro real y muestra compensaciones practicas de costo antes de comprar.",
  },
  "latest-travel-updates-for-korea": {
    factorEn: "official update date, nationality, and policy scope",
    factorEs: "fecha oficial de actualizacion, nacionalidad y alcance de politica",
    outcomeEn:
      "Each guide prioritizes source-backed changes and what may change again under current rules.",
    outcomeEs:
      "Cada guia prioriza cambios respaldados por fuentes y lo que puede cambiar de nuevo bajo reglas vigentes.",
  },
  "korea-now-and-more": {
    factorEn: "seasonal timing, local events, and crowd patterns",
    factorEs: "timing estacional, eventos locales y patrones de afluencia",
    outcomeEn:
      "Each guide highlights practical timing trade-offs that may affect itinerary quality week by week.",
    outcomeEs:
      "Cada guia destaca compensaciones practicas de timing que pueden afectar la calidad del itinerario semana a semana.",
  },
  "this-week-in-korea": {
    factorEn: "immediate timing, weather shifts, and short-term disruptions",
    factorEs: "timing inmediato, cambios de clima y disrupciones de corto plazo",
    outcomeEn:
      "Each guide gives short-horizon checks for decisions that may change quickly before departure or in trip.",
    outcomeEs:
      "Cada guia da verificaciones de corto plazo para decisiones que pueden cambiar rapido antes de salir o durante el viaje.",
  },
};

const DEFAULT_DECISION_FRAME: HubDecisionFrame = {
  factorEn: "budget, pacing, and travel priorities",
  factorEs: "presupuesto, ritmo y prioridades de viaje",
  outcomeEn:
    "Each guide explains realistic time, cost expectations, and practical trade-offs for international visitors.",
  outcomeEs:
    "Cada guia explica tiempos reales, expectativas de costo y compensaciones practicas para viajeros internacionales.",
};

const buildChildFocus = (child: TreeNode, lang: SupportedLang) => {
  const source = firstSentence(child.description) || firstSentence(child.quickAnswer);
  if (!source) {
    return lang === "es" ? "puntos practicos para decidir rapido" : "practical decision points";
  }
  return trimDanglingConnector(stripTrailingPunctuation(source));
};

const buildHubComparisonLine = (node: TreeNode, lang: SupportedLang) => {
  const children = (node.children ?? []).slice(0, 2);
  if (!children.length) return "";
  if (children.length === 1) {
    const only = children[0];
    const focus = buildChildFocus(only, lang);
    return lang === "es"
      ? `${only.title} se centra en ${focus}.`
      : `${only.title} focuses on ${focus}.`;
  }

  const [first, second] = children;
  const firstFocus = buildChildFocus(first, lang);
  const secondFocus = buildChildFocus(second, lang);
  return lang === "es"
    ? `${first.title} se centra en ${firstFocus}, mientras que ${second.title} destaca ${secondFocus}.`
    : `${first.title} focuses on ${firstFocus}, while ${second.title} highlights ${secondFocus}.`;
};

const buildAutoHubFaqItems = (node: TreeNode, lang: SupportedLang): HubFaqItem[] => {
  const children = (node.children ?? []).filter((child) => compact(child.title));
  if (!children.length) return [];

  return children.slice(0, 5).map((child) => {
    const question =
      lang === "es" ? `Que debo saber sobre ${child.title}?` : `What should I know about ${child.title}?`;
    const description = compact(child.description);
    const answer = description
      ? description
      : lang === "es"
      ? "Esta guia resume lo esencial para decidir rapido sin perder los puntos importantes."
      : "This guide summarizes the essentials so you can decide quickly without missing key points.";
    return { question, answer };
  });
};

export const getHubQuickSummary = (node: TreeNode, lang: SupportedLang) => {
  if (!node.children?.length) return compact(node.quickAnswer ?? node.description);
  const frame = HUB_DECISION_FRAMES[node.slug] ?? DEFAULT_DECISION_FRAME;
  const decisionLine =
    lang === "es"
      ? `Tu mejor opcion depende de ${frame.factorEs}.`
      : `Your best option depends on ${frame.factorEn}.`;
  const comparisonLine = buildHubComparisonLine(node, lang);
  const outcomeLine = lang === "es" ? frame.outcomeEs : frame.outcomeEn;
  return [decisionLine, comparisonLine, outcomeLine].filter(Boolean).join(" ");
};

export const getHomeQuickSummary = (node: TreeNode, lang: SupportedLang) => {
  const shortlist = (node.children ?? []).map((child) => child.title).slice(0, 3);
  const joined = joinTitles(shortlist, lang);
  if (lang === "es") {
    const firstLine = joined
      ? `Empieza con ${joined} para definir entrada, ritmo y presupuesto base.`
      : "Empieza con una categoria para definir entrada, ritmo y presupuesto base.";
    return `${firstLine} El mejor plan depende de nacionalidad, temporada y estilo de viaje, asi que compara guias antes de reservar. Vuelve aqui para cambios de politica y contexto local actualizado.`;
  }
  const firstLine = joined
    ? `Start with ${joined} to set your entry plan, pacing, and budget basics.`
    : "Start with a category to set your entry plan, pacing, and budget basics.";
  return `${firstLine} Your best plan depends on nationality, season, and travel style, so compare guides before booking. Return here for policy changes and updated local context.`;
};

export const getHubFaqItems = (node: TreeNode, lang: SupportedLang): HubFaqItem[] => {
  if (!node.slug) return [];
  const bySlug = HUB_FAQ_BY_LANG[lang] ?? HUB_FAQ_BY_LANG.en;
  const curated = bySlug[node.slug];
  if (curated?.length) return curated;
  return buildAutoHubFaqItems(node, lang);
};

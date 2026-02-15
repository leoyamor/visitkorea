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
  if (!node.slug || !(node.children?.length)) return "";
  const shortlist = node.children.map((child) => child.title).slice(0, 3);
  const joined = joinTitles(shortlist, lang);
  if (!joined) return "";
  if (lang === "es") {
    return `Empieza con ${joined}. Compara opciones rapido y luego abre cada guia para los detalles practicos.`;
  }
  return `Start with ${joined}. Compare options quickly, then open each guide for practical details.`;
};

export const getHubFaqItems = (node: TreeNode, lang: SupportedLang): HubFaqItem[] => {
  if (!node.slug) return [];
  const bySlug = HUB_FAQ_BY_LANG[lang] ?? HUB_FAQ_BY_LANG.en;
  const curated = bySlug[node.slug];
  if (curated?.length) return curated;
  return buildAutoHubFaqItems(node, lang);
};

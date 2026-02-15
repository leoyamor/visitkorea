import type { SupportedLang } from "./i18n";

export type LeafFaqItem = {
  question: string;
  answer: string;
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

export const getLeafFaqItems = (slug: string | undefined, lang: SupportedLang): LeafFaqItem[] => {
  if (!slug) return [];
  const bySlug = LEAF_FAQ_BY_LANG[lang] ?? LEAF_FAQ_BY_LANG.en;
  return bySlug[slug] ?? [];
};

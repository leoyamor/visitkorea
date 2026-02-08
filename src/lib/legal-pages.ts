export type LegalSection = {
  id: string;
  titleEn: string;
  titleEs: string;
  bodyEn: string;
  bodyEs: string;
  bulletsEn: string[];
  bulletsEs: string[];
  icon?: string;
};

export type LegalPageInfo = {
  slug: string;
  path: string;
  titleEn: string;
  titleEs: string;
  descriptionEn: string;
  descriptionEs: string;
};

export const legalPages: LegalPageInfo[] = [
  {
    slug: "about",
    path: "/about",
    titleEn: "About",
    titleEs: "Acerca de",
    descriptionEn: "Why this guide exists and how we keep it simple.",
    descriptionEs: "Por qué existe esta guía y cómo mantenemos todo simple.",
  },
  {
    slug: "contact",
    path: "/contact",
    titleEn: "Contact",
    titleEs: "Contacto",
    descriptionEn: "How to reach us with feedback or corrections.",
    descriptionEs: "Cómo contactarnos para comentarios o correcciones.",
  },
  {
    slug: "privacy-policy",
    path: "/privacy-policy",
    titleEn: "Privacy Policy",
    titleEs: "Política de privacidad",
    descriptionEn: "How we handle data and site analytics.",
    descriptionEs: "Cómo gestionamos los datos y la analítica del sitio.",
  },
  {
    slug: "terms",
    path: "/terms",
    titleEn: "Terms",
    titleEs: "Términos",
    descriptionEn: "Site usage terms in plain language.",
    descriptionEs: "Términos de uso del sitio en lenguaje claro.",
  },
  {
    slug: "disclaimer",
    path: "/disclaimer",
    titleEn: "Disclaimer",
    titleEs: "Descargo de responsabilidad",
    descriptionEn: "Travel info is general and can change.",
    descriptionEs: "La información de viaje es general y puede cambiar.",
  },
];

export const legalSections: LegalSection[] = [
  {
    id: "purpose",
    titleEn: "Purpose",
    titleEs: "Propósito",
    bodyEn: "This site is designed to make Korea trip planning easier for international travelers.",
    bodyEs: "Este sitio está diseñado para facilitar la planificación de viajes a Corea para viajeros internacionales.",
    bulletsEn: [
      "Content is practical and beginner-friendly.",
      "We focus on clear decisions instead of information overload.",
      "We update pages when important travel details change.",
    ],
    bulletsEs: [
      "El contenido es práctico y fácil para principiantes.",
      "Nos enfocamos en decisiones claras, no en sobrecarga de información.",
      "Actualizamos las páginas cuando cambian datos importantes de viaje.",
    ],
    icon: "spark",
  },
  {
    id: "data-and-privacy",
    titleEn: "Data and Privacy",
    titleEs: "Datos y privacidad",
    bodyEn: "You can read the guide without creating an account or sharing personal details.",
    bodyEs: "Puedes leer la guía sin crear una cuenta ni compartir datos personales.",
    bulletsEn: [
      "Anonymous usage metrics may be used to improve content quality.",
      "No sensitive travel documents are requested on this site.",
      "For final policies, always verify with official government sources.",
    ],
    bulletsEs: [
      "Podemos usar métricas anónimas para mejorar la calidad del contenido.",
      "Este sitio no solicita documentos de viaje sensibles.",
      "Para políticas finales, verifica siempre en fuentes oficiales del gobierno.",
    ],
    icon: "shield",
  },
  {
    id: "responsibility",
    titleEn: "User Responsibility",
    titleEs: "Responsabilidad del usuario",
    bodyEn: "Travel rules can change quickly by nationality, season, and local policy updates.",
    bodyEs: "Las reglas de viaje pueden cambiar rápidamente según nacionalidad, temporada y actualizaciones locales.",
    bulletsEn: [
      "Use this site as a planning guide, not as legal advice.",
      "Confirm visas, entry rules, and transport conditions before booking.",
      "Keep your own travel documents and confirmations up to date.",
    ],
    bulletsEs: [
      "Usa este sitio como guía de planificación, no como asesoría legal.",
      "Confirma visados, reglas de entrada y transporte antes de reservar.",
      "Mantén tus documentos y confirmaciones de viaje actualizados.",
    ],
    icon: "checklist",
  },
  {
    id: "updates",
    titleEn: "Updates and Corrections",
    titleEs: "Actualizaciones y correcciones",
    bodyEn: "If you find outdated information, contact us so we can review and correct it.",
    bodyEs: "Si encuentras información desactualizada, contáctanos para revisarla y corregirla.",
    bulletsEn: [
      "We review high-impact changes as quickly as possible.",
      "Official source links are included where available.",
      "Last-updated dates are shown to improve transparency.",
    ],
    bulletsEs: [
      "Revisamos cambios importantes lo más rápido posible.",
      "Incluimos enlaces a fuentes oficiales cuando están disponibles.",
      "Mostramos fechas de actualización para mayor transparencia.",
    ],
    icon: "alert",
  },
];

export const getLegalPageBySlug = (slug: string) =>
  legalPages.find((page) => page.slug === slug);

export const legalPaths = legalPages.map((page) => page.path);

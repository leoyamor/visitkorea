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
  sections: LegalSection[];
};

const termsSections: LegalSection[] = [
  {
    id: "use-of-content",
    titleEn: "Use of Content",
    titleEs: "Uso del contenido",
    bodyEn:
      "PlanMyKorea content is provided for personal travel planning and general information purposes.",
    bodyEs:
      "El contenido de PlanMyKorea se ofrece para planificación personal de viajes y fines informativos generales.",
    bulletsEn: [
      "Information is educational and not legal or immigration advice.",
      "Travelers are responsible for confirming official rules before booking or departure.",
      "Content may be updated without prior notice.",
    ],
    bulletsEs: [
      "La información es educativa y no constituye asesoramiento legal o migratorio.",
      "El viajero es responsable de confirmar normas oficiales antes de reservar o viajar.",
      "El contenido puede actualizarse sin aviso previo.",
    ],
    icon: "checklist",
  },
];

const disclaimerSections: LegalSection[] = [
  {
    id: "information-disclaimer",
    titleEn: "Information Disclaimer",
    titleEs: "Descargo informativo",
    bodyEn:
      "Travel requirements, schedules, prices, and policies can change by nationality, season, and local decisions.",
    bodyEs:
      "Los requisitos de viaje, horarios, precios y políticas pueden cambiar según nacionalidad, temporada y decisiones locales.",
    bulletsEn: [
      "PlanMyKorea does not guarantee completeness or real-time accuracy.",
      "Always verify critical information with official government or transport websites.",
      "Use this site as a planning reference, then validate final details before action.",
    ],
    bulletsEs: [
      "PlanMyKorea no garantiza integridad ni exactitud en tiempo real.",
      "Verifica siempre la información crítica en fuentes oficiales gubernamentales o de transporte.",
      "Usa este sitio como referencia y valida los detalles finales antes de actuar.",
    ],
    icon: "alert",
  },
];

export const legalPages: LegalPageInfo[] = [
  {
    slug: "about",
    path: "/about",
    titleEn: "About",
    titleEs: "Acerca de",
    descriptionEn:
      "Learn what PlanMyKorea is and how we provide practical South Korea travel planning guidance for international visitors.",
    descriptionEs:
      "Conoce qué es PlanMyKorea y cómo ofrecemos orientación práctica para planear viajes a Corea del Sur.",
    sections: [
      {
        id: "about-planmykorea",
        titleEn: "About PlanMyKorea",
        titleEs: "Sobre PlanMyKorea",
        bodyEn:
          "PlanMyKorea is an independent travel information website created to help international visitors understand and plan their trip to South Korea.",
        bodyEs:
          "PlanMyKorea es un sitio web independiente de información de viajes creado para ayudar a visitantes internacionales a entender y planear su viaje a Corea del Sur.",
        bulletsEn: [
          "This site provides practical guidance, explanations, and curated resources for travelers.",
          "Our content focuses on clear decisions for real trips, not information overload.",
          "For high-stakes decisions, always confirm the latest details with official sources.",
        ],
        bulletsEs: [
          "Este sitio ofrece orientación práctica, explicaciones y recursos seleccionados para viajeros.",
          "Nuestro contenido se centra en decisiones claras para viajes reales, sin saturación de información.",
          "Para decisiones críticas, confirma siempre los detalles más recientes en fuentes oficiales.",
        ],
        icon: "spark",
      },
    ],
  },
  {
    slug: "privacy-policy",
    path: "/privacy-policy",
    titleEn: "Privacy Policy",
    titleEs: "Política de privacidad",
    descriptionEn:
      "Read how PlanMyKorea handles cookies, analytics, and Google AdSense data for transparent travel information browsing.",
    descriptionEs:
      "Consulta cómo PlanMyKorea gestiona cookies, analítica y datos de Google AdSense para una navegación transparente.",
    sections: [
      {
        id: "privacy-overview",
        titleEn: "Privacy Policy Overview",
        titleEs: "Resumen de la política de privacidad",
        bodyEn:
          "Last updated: February 2026. PlanMyKorea is an informational website for international travelers planning a trip to South Korea, and we are committed to transparent data practices.",
        bodyEs:
          "Última actualización: febrero de 2026. PlanMyKorea es un sitio informativo para viajeros internacionales que planean viajar a Corea del Sur y estamos comprometidos con prácticas de datos transparentes.",
        bulletsEn: [
          "PlanMyKorea respects user privacy and keeps data use disclosures clear.",
          "You can browse the website without account creation.",
          "Policy updates are posted on this page when practices change.",
        ],
        bulletsEs: [
          "PlanMyKorea respeta la privacidad del usuario y mantiene claras las divulgaciones de uso de datos.",
          "Puedes navegar el sitio sin crear una cuenta.",
          "Las actualizaciones de la política se publican en esta página cuando cambian las prácticas.",
        ],
        icon: "shield",
      },
      {
        id: "information-we-do-not-collect",
        titleEn: "Information We Do Not Collect",
        titleEs: "Información que no recopilamos",
        bodyEn:
          "We do not directly collect personal information from visitors.",
        bodyEs:
          "No recopilamos directamente información personal de los visitantes.",
        bulletsEn: [
          "No account registration.",
          "No name or email collection.",
          "No comments or user-submitted forms.",
          "You can browse this website anonymously.",
        ],
        bulletsEs: [
          "Sin registro de cuentas.",
          "Sin recopilación de nombre o correo electrónico.",
          "Sin comentarios ni formularios enviados por usuarios.",
          "Puedes navegar este sitio de forma anónima.",
        ],
        icon: "checklist",
      },
      {
        id: "third-party-services",
        titleEn: "Third-Party Services",
        titleEs: "Servicios de terceros",
        bodyEn:
          "Although we do not collect personal data directly, this website uses third-party services that may automatically collect limited information.",
        bodyEs:
          "Aunque no recopilamos datos personales directamente, este sitio usa servicios de terceros que pueden recopilar información limitada de forma automática.",
        bulletsEn: [
          "Google AdSense (advertising).",
          "Google Analytics (traffic analysis).",
          "Microsoft Clarity (user behavior analytics).",
          "Cloudflare (website security and performance).",
          "These providers may collect IP address, browser type, device information, and pages visited via cookies or similar technologies.",
        ],
        bulletsEs: [
          "Google AdSense (publicidad).",
          "Google Analytics (análisis de tráfico).",
          "Microsoft Clarity (análisis de comportamiento).",
          "Cloudflare (seguridad y rendimiento del sitio).",
          "Estos proveedores pueden recopilar IP, tipo de navegador, dispositivo y páginas visitadas mediante cookies o tecnologías similares.",
        ],
        icon: "cloud",
      },
      {
        id: "cookies-and-advertising",
        titleEn: "Cookies and Advertising",
        titleEs: "Cookies y publicidad",
        bodyEn:
          "Third-party vendors, including Google, use cookies to serve ads based on users' visits to this and other websites.",
        bodyEs:
          "Los proveedores externos, incluido Google, usan cookies para mostrar anuncios según las visitas del usuario a este y otros sitios.",
        bulletsEn: [
          "Manage personalized ad preferences at: https://adssettings.google.com",
          "Learn how Google uses data from partner sites: https://policies.google.com/technologies/ads",
        ],
        bulletsEs: [
          "Gestiona tus preferencias de anuncios personalizados en: https://adssettings.google.com",
          "Consulta cómo Google usa datos de sitios asociados en: https://policies.google.com/technologies/ads",
        ],
        icon: "card",
      },
      {
        id: "purpose-and-links",
        titleEn: "Purpose, External Links, and Contact",
        titleEs: "Finalidad, enlaces externos y contacto",
        bodyEn:
          "All content on PlanMyKorea is provided for informational and travel guidance purposes only.",
        bodyEs:
          "Todo el contenido de PlanMyKorea se ofrece solo con fines informativos y de orientación de viaje.",
        bulletsEn: [
          "We strive to keep information accurate and up to date, but we do not guarantee completeness or official accuracy.",
          "Travelers should verify important details with official sources.",
          "We may link to external websites and are not responsible for their privacy practices or content.",
          "Questions about this policy: bayernmc@gmail.com",
        ],
        bulletsEs: [
          "Procuramos mantener la información actualizada, pero no garantizamos integridad ni exactitud oficial.",
          "Los viajeros deben verificar información importante en fuentes oficiales.",
          "Podemos enlazar a sitios externos y no somos responsables de sus prácticas de privacidad o contenido.",
          "Consultas sobre esta política: bayernmc@gmail.com",
        ],
        icon: "alert",
      },
    ],
  },
  {
    slug: "contact",
    path: "/contact",
    titleEn: "Contact",
    titleEs: "Contacto",
    descriptionEn:
      "Contact PlanMyKorea to report outdated South Korea travel information or ask general questions.",
    descriptionEs:
      "Contacta con PlanMyKorea para reportar información desactualizada o hacer preguntas generales.",
    sections: [
      {
        id: "contact-planmykorea",
        titleEn: "Contact PlanMyKorea",
        titleEs: "Contacto de PlanMyKorea",
        bodyEn:
          "If you have questions or notice outdated information, feel free to contact us.",
        bodyEs:
          "Si tienes preguntas o notas información desactualizada, puedes contactarnos.",
        bulletsEn: ["Email: bayernmc@gmail.com"],
        bulletsEs: ["Correo electrónico: bayernmc@gmail.com"],
        icon: "hand",
      },
    ],
  },
  {
    slug: "terms",
    path: "/terms",
    titleEn: "Terms",
    titleEs: "Términos",
    descriptionEn: "Site usage terms in plain language.",
    descriptionEs: "Términos de uso del sitio en lenguaje claro.",
    sections: termsSections,
  },
  {
    slug: "disclaimer",
    path: "/disclaimer",
    titleEn: "Disclaimer",
    titleEs: "Descargo de responsabilidad",
    descriptionEn: "Travel info is general and can change.",
    descriptionEs: "La información de viaje es general y puede cambiar.",
    sections: disclaimerSections,
  },
];

export const getLegalPageBySlug = (slug: string) =>
  legalPages.find((page) => page.slug === slug);

export const legalPaths = legalPages.map((page) => page.path);

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
    "7-days-in-korea": [
      {
        question: "Who is this 7-day two-base plan not ideal for?",
        answer:
          "It may not work well if you want to visit three cities in one week, need a slower pace with frequent rest time, or strongly prefer completely flexible plans without fixed transfer days.",
      },
      {
        question: "What is the main downside of adding a third destination?",
        answer:
          "You often lose valuable exploration time to packing, check-ins, and transportation. On a one-week trip, those hours usually add up faster than travelers expect.",
      },
      {
        question: "What is the safer alternative if this plan feels tight?",
        answer:
          "Use one main base with a few day trips, or keep the plan to Seoul plus one contrasting city. Reducing movement usually creates a more enjoyable week.",
      },
      {
        question: "Should I finalize bookings before checking transport timing?",
        answer:
          "No. Always confirm realistic transfer times first, then finalize bookings. Planning movement before reservations helps avoid most one-week itinerary stress.",
      },
    ],
    "which-city-fits-you-best": [
      {
        question: "Who is this city-matching approach not ideal for?",
        answer:
          "It may not work well if your trip is shorter than three full days, centered around a single event, or requires a slower pace due to mobility limits. In those cases, it is usually better to focus on convenience and choose the easiest base.",
      },
      {
        question: "Can I choose only by popularity rankings?",
        answer:
          "Not reliably. Popular destinations do not always match your travel pace, tolerance for long transfers, or seasonal conditions.",
      },
      {
        question: "What is the safest fallback if I am still undecided?",
        answer:
          "Start with Seoul as your main base. Once you confirm realistic transfer times for your travel dates, you can add one contrasting city if it still fits your schedule.",
      },
      {
        question: "What trade-off matters most when choosing a city?",
        answer:
          "Transport friction. A city may look perfect in photos, but if daily movement requires long transfers, the trip can feel more tiring than expected.",
      },
    ],
    "attraction-passes-discounts": [
      {
        question: "Who should usually skip attraction passes?",
        answer:
          "Travelers who prefer flexible schedules, plan to visit only one or two paid attractions per day, or dislike strict time windows often do better without a pass.",
      },
      {
        question: "Is buying a pass always cheaper?",
        answer:
          "No. A pass only saves money if the number of attractions you visit and your timing actually match the pass conditions.",
      },
      {
        question: "What is the most common mistake with attraction passes?",
        answer:
          "Buying a pass before planning your route. Many travelers then feel pressured to rush through attractions just to \"use the pass enough.\"",
      },
      {
        question: "What is the safer decision rule?",
        answer:
          "Plan your realistic route first. Then compare the total cost of individual tickets with the pass price using official information pages.",
      },
    ],
    "korea-now-and-more": [
      {
        question: "Do I need to read this before I finalize plans?",
        answer:
          "Not necessarily. This page gives a quick overview of the Gangneung-Gallae Tour Pass, a travel pass that combines several attractions and experiences in Gangneung.",
      },
      {
        question: "What is the key decision on this page?",
        answer:
          "Decide whether the Gangneung-Gallae Tour Pass fits your travel style. The TL;DR section explains the main benefits, possible savings, and how the pass works.",
      },
      {
        question: "What common mistake should I avoid?",
        answer:
          "Do not assume the pass covers everything automatically. Always check included attractions, conditions, and validity before planning your visit.",
      },
      {
        question: "What should I verify with official sources?",
        answer:
          "Before purchasing, confirm the latest prices, participating venues, and conditions through the official tourism campaign or the booking platform.",
      },
      {
        question: "What should I do after reading this page?",
        answer:
          "If you plan to visit Gangneung, compare the pass with individual tickets. The Gangneung-Gallae Tour Pass may simplify planning and reduce costs for travelers exploring Korea's east coast.",
      },
    ],
    "this-week-in-korea": [
      {
        question: "Do I need to read this before finalizing my plans?",
        answer:
          "Not necessarily. This page gives a quick overview of late March in Korea. The 2026 spring equinox falls on March 20, when Korea usually begins to feel like early spring.",
      },
      {
        question: "What is the key takeaway from this page?",
        answer:
          "Late March marks the start of spring, not the peak. Early cherry blossoms usually appear first in Jeju and Busan, while Seoul blooms later.",
      },
      {
        question: "What common mistake should I avoid?",
        answer:
          "Do not expect spring to arrive everywhere at the same time. In Korea, seasonal changes move from south to north.",
      },
      {
        question: "What should I verify with official sources?",
        answer:
          "Before finalizing plans, check updated information such as blossom forecasts, festival schedules, and transportation updates.",
      },
      {
        question: "What should I do after reading this page?",
        answer:
          "Use this guide to understand spring timing in Korea, then plan your itinerary based on where blossoms or seasonal events appear first.",
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
    "7-days-in-korea": [
      {
        question: "Para quien NO es ideal este plan de 7 dias con dos bases?",
        answer:
          "Puede no funcionar bien si quieres visitar tres ciudades en una semana, necesitas un ritmo mas lento con descansos frecuentes, o prefieres planes totalmente flexibles sin dias de traslado fijos.",
      },
      {
        question: "Cual es la principal desventaja de agregar una tercera ciudad?",
        answer:
          "A menudo pierdes tiempo valioso de exploracion en equipaje, check-in y transporte. En un viaje de una semana, esas horas suelen acumularse mas rapido de lo que se espera.",
      },
      {
        question: "Cual es la alternativa mas segura si este plan se siente ajustado?",
        answer:
          "Usa una base principal con algunas excursiones de un dia, o limita el plan a Seoul mas una ciudad de contraste. Reducir desplazamientos suele crear una semana mas disfrutable.",
      },
      {
        question: "Conviene reservar todo antes de validar tiempos de transporte?",
        answer:
          "No. Confirma primero tiempos de traslado realistas y luego cierra reservas. Planificar movimientos antes de reservar ayuda a evitar gran parte del estres de un viaje de una semana.",
      },
    ],
    "which-city-fits-you-best": [
      {
        question: "Para quien NO es ideal este enfoque para elegir ciudad?",
        answer:
          "Puede no funcionar bien si tu viaje dura menos de tres dias completos, gira en torno a un solo evento, o requiere un ritmo mas lento por limites de movilidad. En esos casos, suele ser mejor priorizar la conveniencia y elegir la base mas facil.",
      },
      {
        question: "Puedo elegir solo por rankings de popularidad?",
        answer:
          "No de forma confiable. Los destinos populares no siempre encajan con tu ritmo de viaje, tu tolerancia a traslados largos o las condiciones de temporada.",
      },
      {
        question: "Cual es la opcion mas segura si sigo indeciso?",
        answer:
          "Empieza con Seoul como base principal. Una vez que confirmes tiempos de traslado realistas para tus fechas, puedes agregar una ciudad de contraste si todavia encaja en tu calendario.",
      },
      {
        question: "Que trade-off pesa mas al elegir ciudad?",
        answer:
          "La friccion de transporte. Una ciudad puede verse perfecta en fotos, pero si el movimiento diario exige traslados largos, el viaje puede sentirse mas agotador de lo esperado.",
      },
    ],
    "attraction-passes-discounts": [
      {
        question: "Quienes suelen estar mejor sin pases de atracciones?",
        answer:
          "Quienes prefieren horarios flexibles, planean visitar solo una o dos atracciones pagas por dia, o no quieren ventanas horarias estrictas suelen estar mejor sin pase.",
      },
      {
        question: "Comprar un pase siempre ahorra dinero?",
        answer:
          "No. Un pase solo ahorra dinero si la cantidad de atracciones que visitas y tus horarios realmente coinciden con las condiciones del pase.",
      },
      {
        question: "Cual es el error mas comun con los pases de atracciones?",
        answer:
          "Comprar un pase antes de planificar la ruta. Luego muchos viajeros se sienten presionados a recorrer atracciones con prisa solo para \"aprovechar bien el pase\".",
      },
      {
        question: "Cual es la regla mas segura para decidir?",
        answer:
          "Primero planifica una ruta realista. Luego compara el costo total de entradas individuales con el precio del pase usando paginas oficiales de informacion.",
      },
    ],
    "korea-now-and-more": [
      {
        question: "Necesito leer esto antes de finalizar mi plan?",
        answer:
          "No necesariamente. Esta pagina ofrece una vista rapida del Gangneung-Gallae Tour Pass, un pase de viaje que combina varias atracciones y experiencias en Gangneung.",
      },
      {
        question: "Cual es la decision clave en esta pagina?",
        answer:
          "Decide si el Gangneung-Gallae Tour Pass encaja con tu estilo de viaje. La seccion TL;DR explica los beneficios principales, el posible ahorro y como funciona el pase.",
      },
      {
        question: "Que error comun debo evitar?",
        answer:
          "No asumas que el pase cubre todo automaticamente. Revisa siempre las atracciones incluidas, las condiciones y la validez antes de planear tu visita.",
      },
      {
        question: "Que debo verificar con fuentes oficiales?",
        answer:
          "Antes de comprar, confirma los ultimos precios, los lugares participantes y las condiciones en la campana oficial de turismo o en la plataforma de reserva.",
      },
      {
        question: "Que debo hacer despues de leer esta pagina?",
        answer:
          "Si planeas visitar Gangneung, compara el pase con los tickets individuales. El Gangneung-Gallae Tour Pass puede simplificar la planificacion y reducir costos para viajeros que exploran la costa este de Corea.",
      },
    ],
    "this-week-in-korea": [
      {
        question: "Necesito leer esta pagina antes de finalizar mi plan?",
        answer:
          "No necesariamente. Esta pagina ofrece una vista rapida de finales de marzo en Corea. El equinoccio de primavera de 2026 cae el 20 de marzo, cuando Corea suele empezar a sentirse como inicios de primavera.",
      },
      {
        question: "Cual es la idea clave de esta pagina?",
        answer:
          "Finales de marzo marca el inicio de la primavera, no su punto maximo. Los primeros cerezos en flor suelen aparecer antes en Jeju y Busan, mientras Seul florece mas tarde.",
      },
      {
        question: "Que error comun debo evitar?",
        answer:
          "No esperes que la primavera llegue a todo el pais al mismo tiempo. En Corea, los cambios estacionales se mueven de sur a norte.",
      },
      {
        question: "Que debo verificar en fuentes oficiales?",
        answer:
          "Antes de cerrar tus planes, revisa informacion actualizada como pronosticos de floracion, calendarios de festivales y actualizaciones de transporte.",
      },
      {
        question: "Que debo hacer despues de leer esta pagina?",
        answer:
          "Usa esta guia para entender el calendario de primavera en Corea y luego arma tu itinerario segun donde aparezcan primero las flores o eventos estacionales.",
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
  const topic = compact(node.title).replace(/[.!?]+$/g, "");
  const topicLabel = truncate(topic, 84);
  const questionLabels = topicLabel
    ? lang === "es"
      ? {
          overview: `Debo leer esto antes de planear ${topicLabel}?`,
          decision: `Cual es la decision clave para ${topicLabel}?`,
          avoid: `Que error comun debo evitar para ${topicLabel}?`,
          verify: `Que debo verificar en fuentes oficiales para ${topicLabel}?`,
          next: `Que deberia hacer despues de decidir ${topicLabel}?`,
        }
      : {
          overview: `Should I read this before I plan ${topicLabel}?`,
          decision: `What is the key decision for ${topicLabel}?`,
          avoid: `What common mistake should I avoid for ${topicLabel}?`,
          verify: `What should I verify with official sources for ${topicLabel}?`,
          next: `What should I do after I decide ${topicLabel}?`,
        }
    : labels;

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
    { question: questionLabels.overview, answer: truncate(overviewAnswer) },
    { question: questionLabels.decision, answer: truncate(decisionAnswer) },
    { question: questionLabels.avoid, answer: truncate(avoidAnswer) },
    { question: questionLabels.verify, answer: truncate(verifyAnswer) },
    { question: questionLabels.next, answer: truncate(nextAnswer) },
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

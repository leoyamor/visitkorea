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
          "If a 300-1,000+ USD unexpected cost would affect your travel budget, insurance is usually worth it.",
      },
      {
        question: "What coverage should I compare first?",
        answer:
          "Start with emergency medical treatment and hospitalization, then consider delay and baggage coverage.",
      },
      {
        question: "Do I need coverage for winter or outdoor activities?",
        answer:
          "Yes. Activities like skiing or hiking are often excluded unless explicitly covered.",
      },
      {
        question: "Unusual case: If I rent a scooter or e-bike for one day, is it covered?",
        answer:
          "Not always. Many policies exclude two-wheel vehicles, so check before assuming coverage.",
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
    "2-weeks-in-korea": [
      {
        question: "Should I read this before planning a 2-week trip to Korea?",
        answer:
          "Yes. This page helps you understand how to structure two weeks without rushing or changing hotels too often.",
      },
      {
        question: "What is the key decision when planning two weeks in Korea?",
        answer:
          "Decide your regional structure first. The simplest approach is three regions with one main base in each.",
      },
      {
        question: "What common mistake should I avoid on a two-week trip?",
        answer:
          "Trying to visit too many cities. Even with two weeks, frequent transfers can reduce exploration time.",
      },
      {
        question: "What should I verify with official sources before final bookings?",
        answer:
          "Transport schedules, seasonal conditions, and major holiday periods may change.",
      },
      {
        question: "What should I do after reading this page?",
        answer:
          "Choose your three regions first, then start planning each block in more detail.",
      },
    ],
    "1-month-in-korea": [
      {
        question: "Should I read this before planning a one-month trip to Korea?",
        answer:
          "Yes. This page explains how to structure a long stay so your trip feels comfortable rather than rushed.",
      },
      {
        question: "What is the key decision for a one-month Korea trip?",
        answer:
          "Choose two or three home bases first. Longer stays in each place usually create a better long-stay rhythm.",
      },
      {
        question: "What common mistake should I avoid during a one-month stay?",
        answer:
          "Moving cities too often. Frequent transfers can turn a relaxed month into a tiring extended tour.",
      },
      {
        question: "What should I verify with official sources before booking long stays?",
        answer:
          "Accommodation policies, seasonal conditions, and transport schedules may change.",
      },
      {
        question: "What is the safest structure for a one-month trip to Korea?",
        answer:
          "Stay about two weeks in Seoul, then spend one week each in two slower regions such as Busan, Jeju, or Gyeongju.",
      },
    ],
    "shopping-and-discounts": [
      {
        question: "Is shopping in Korea actually cheap?",
        answer:
          "Sometimes. Korea offers strong value in categories like cosmetics, snacks, and local fashion, but not everything is cheaper than overseas.",
      },
      {
        question: "What is the most important rule before buying something in Korea?",
        answer: "Check the real value first. Discounts only matter if the item was already worth buying.",
      },
      {
        question: "What common shopping mistake do travelers make?",
        answer:
          "Assuming every discount means real savings. Promotional percentages often have conditions.",
      },
      {
        question: "What VAT refund rule should travelers remember?",
        answer:
          "The key numbers are ₩15,000 (minimum purchase), ₩1,000,000 (immediate refund limit), and ₩5,000,000 (trip total limit).",
      },
      {
        question: "What should I do before making a purchase?",
        answer:
          "Compare prices, confirm VAT refund eligibility, and check whether discounts actually reduce the final cost.",
      },
    ],
    "korea-entry-requirements": [
      {
        question: "Do first-time and returning travelers follow different legal entry rules?",
        answer:
          "No. Legal entry rules are based on passport nationality and current policy dates, not on travel experience. Returning travelers should still recheck K-ETA and arrival-card requirements before each trip.",
      },
      {
        question: "Do I need K-ETA to enter Korea?",
        answer:
          "It depends on your nationality and the current temporary exemption policy. Some visa-exempt travelers must apply for K-ETA before departure, while others may be temporarily exempt until December 31, 2026.",
      },
      {
        question: "How should I handle the e-Arrival Card if my trip includes multiple cities?",
        answer:
          "Use one primary accommodation address in your declaration and keep your full itinerary details ready. If you hold a valid K-ETA, you are generally exempt from a separate arrival declaration, but always recheck the latest notice.",
      },
      {
        question: "What changes between single-city and multi-city preparation?",
        answer:
          "Core legal checks are the same, but multi-city trips need better document readiness: one representative stay address, full route details, and transport bookings that match your entry timeline.",
      },
      {
        question: "What should I lock within 24 hours before departure?",
        answer:
          "Confirm K-ETA status, verify e-Arrival Card requirements, and recheck official government updates. Then finalize SIM or eSIM and Travel Insurance decisions so arrival-day execution is simple.",
      },
    ],
    seoul: [
      {
        question: "Is Seoul a good base for a first trip to Korea?",
        answer:
          "Yes. Seoul has the most developed transport system, the largest range of accommodation, and easy access from the international airport.",
      },
      {
        question: "How many days should I spend in Seoul?",
        answer:
          "Most first-time visitors stay 3–5 days. Shorter trips focus on major districts, while longer stays allow slower neighborhood exploration.",
      },
      {
        question: "Do I need a car to travel around Seoul?",
        answer:
          "No. Seoul’s subway system covers most areas, and stations include English signage and clear numbering.",
      },
      {
        question: "What is the easiest way to explore the city?",
        answer:
          "Think in districts. Stay in one main area and explore nearby neighborhoods instead of crossing the entire city every day.",
      },
      {
        question: "What mistake do travelers often make in Seoul?",
        answer:
          "Trying to visit too many districts in one day. Efficient routing and slower pacing make the city much more enjoyable.",
      },
    ],
    busan: [
      {
        question: "Is Busan worth visiting on a first trip to Korea?",
        answer:
          "Yes. Busan offers a different atmosphere from Seoul, with beaches, seafood markets, and a more relaxed coastal pace.",
      },
      {
        question: "How many days should I spend in Busan?",
        answer:
          "Most visitors stay 2–3 days. This allows time for one beach area, a seafood market, and one cultural district without rushing.",
      },
      {
        question: "What is the easiest way to travel from Seoul to Busan?",
        answer:
          "The KTX high-speed train is the most common option and takes about 2.5 hours from Seoul Station.",
      },
      {
        question: "Where should I stay in Busan?",
        answer:
          "Choose accommodation near the area you want to explore most, such as Haeundae, Gwangalli, Nampo, or Seomyeon, and stay close to a subway station.",
      },
      {
        question: "What mistake do travelers often make in Busan?",
        answer:
          "Trying to visit too many distant districts in one day. Busan is spread along the coast, so planning by area is important.",
      },
    ],
    "first-time-in-korea": [
      {
        question: "Should I read this before my first trip to Korea?",
        answer:
          "Yes. This page explains what first-time visitors usually notice and what preparation actually matters before arrival.",
      },
      {
        question: "What is the most important preparation before visiting Korea?",
        answer:
          "Make sure your phone works internationally, confirm your first-night accommodation, and know how you will reach the city from the airport.",
      },
      {
        question: "What common mistake should first-time travelers avoid?",
        answer:
          "Overplanning the first few days. Leave space to adjust while you learn how the city works.",
      },
      {
        question: "What should I verify with official sources before departure?",
        answer: "Entry procedures, airport arrival steps, and travel regulations may change.",
      },
      {
        question: "What should I do after reading this page?",
        answer:
          "Prepare the basics for your first 24 hours, then start planning your trip structure.",
      },
    ],
    "been-here-before": [
      {
        question: "Should I read this before planning a second trip to Korea?",
        answer:
          "Yes. This page helps returning travelers plan a trip that feels slower, deeper, and more comfortable.",
      },
      {
        question: "What is the key decision for a repeat visit to Korea?",
        answer:
          "Decide how you want your days to feel first - relaxed, food-focused, nature-oriented, or neighborhood-based.",
      },
      {
        question: "What common mistake should returning travelers avoid?",
        answer:
          "Repeating the exact same Seoul-Busan-Jeju route or adding too many cities again.",
      },
      {
        question: "What should I verify with official sources before traveling again?",
        answer:
          "Transport schedules, seasonal events, and attraction opening hours may change.",
      },
      {
        question: "What is the safest structure for a second trip to Korea?",
        answer:
          "Stay longer in one or two regions, explore neighborhoods in depth, and add one slower city or nature destination.",
      },
    ],
    "basic-korean-etiquette": [
      {
        question: "Should I read this before visiting Korea for the first time?",
        answer:
          "Yes. This guide explains the everyday etiquette habits that help travelers avoid awkward situations.",
      },
      {
        question: "What is the most important etiquette rule in Korea?",
        answer:
          "Show quiet respect in shared spaces. Observing how others behave usually works well.",
      },
      {
        question: "What common mistake should visitors avoid?",
        answer:
          "Being too loud in public places such as trains, buses, or cafes.",
      },
      {
        question: "What etiquette rule surprises many travelers?",
        answer:
          "Queue culture is very clear in Korea. People usually wait their turn in places like subway platforms, bus stops, and checkout counters.",
      },
      {
        question: "What should I remember after reading this guide?",
        answer:
          "You do not need to be perfect. Small gestures of respect matter more than knowing every rule.",
      },
    ],
    "korea-travel-safety": [
      {
        question: "Should I read this before traveling to Korea for the first time?",
        answer:
          "Yes. This guide explains how safe Korea is and what basic precautions travelers should know.",
      },
      {
        question: "Is Korea safe for tourists and solo travelers?",
        answer:
          "Yes. Korea is widely considered a very safe destination, and many travelers feel comfortable moving around even at night.",
      },
      {
        question: "What common safety mistake should visitors avoid?",
        answer:
          "Drinking heavily or becoming disoriented late at night in unfamiliar nightlife areas.",
      },
      {
        question: "What emergency information should travelers know in Korea?",
        answer: "Police: 112\nFire or ambulance: 119",
      },
      {
        question: "What should I remember after reading this guide?",
        answer: "Stay aware, not anxious. Basic preparation and common sense are usually enough.",
      },
    ],
    "which-city-fits-you-best": [
      {
        question: "Should I read this even if I already picked a city?",
        answer:
          "Yes. This page helps you stress-test your city choice against transfer friction, travel pace, and season before you lock bookings.",
      },
      {
        question: "What is the first filter when choosing a city in Korea?",
        answer:
          "Start with your daily movement tolerance. A city only works if your real transfer load still leaves enough time and energy to enjoy each day.",
      },
      {
        question: "When is Seoul the safest default base?",
        answer:
          "Seoul is usually the safest default for first trips, short itineraries, or undecided plans because transport coverage and accommodation options are strongest.",
      },
      {
        question: "What common mistake do travelers make on this decision?",
        answer:
          "Choosing by popularity only. A city can look great online but still create tiring day-to-day movement in your actual schedule.",
      },
      {
        question: "What should I do after reading this page?",
        answer:
          "Pick one main city that clearly fits your pace, then set one fallback option only if your dates or transfer times change.",
      },
    ],
    "what-should-i-try-first": [
      {
        question: "Should I read this before my first meal in Korea?",
        answer:
          "Yes. This page gives a practical first-food structure so you can start confidently without over-ordering or choosing only extreme dishes.",
      },
      {
        question: "What is the safest first lineup of Korean food?",
        answer:
          "Start with familiar balance: one rice-based meal, one soup or stew, one grilled protein, and one lighter side-focused meal.",
      },
      {
        question: "What common mistake should first-time food travelers avoid?",
        answer:
          "Starting with only the spiciest or most unfamiliar dishes. This often causes early fatigue and narrows what you try later.",
      },
      {
        question: "What if I do not handle spicy food well?",
        answer:
          "Ask for mild options first and build tolerance gradually. Many Korean menus include non-spicy dishes that still represent local flavor well.",
      },
      {
        question: "What should I do after reading this page?",
        answer:
          "Choose three to five starter dishes for your first two days, then expand by neighborhood once you know your comfort range.",
      },
    ],
    "attraction-passes-discounts": [
      {
        question: "Do I need an attraction pass when visiting Korea?",
        answer:
          "Not always. Many attractions are inexpensive or free. Passes only save money if your itinerary includes several paid attractions within a limited time.",
      },
      {
        question: "When does an attraction pass actually save money?",
        answer:
          "Usually when you visit three or more paid attractions during the pass validity period and plan your route efficiently.",
      },
      {
        question: "What is the most common mistake travelers make with passes?",
        answer:
          "Buying a pass before planning their itinerary. Time-based passes only work well when attractions are scheduled carefully.",
      },
      {
        question: "What is the difference between the main passes in Korea?",
        answer:
          "KORAIL PASS reduces long-distance train costs, while passes such as Discover Seoul Pass and VISIT BUSAN PASS provide entry or discounts for attractions in specific cities.",
      },
      {
        question: "How should I decide whether to buy a pass?",
        answer:
          "List the attractions you plan to visit, compare the total ticket cost with the pass price, and check which attractions are free versus discounted.",
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
          "Normalmente no. La mayoria de viajeros con entrada sin visado o K-ETA no lo necesitan.",
      },
      {
        question: "Cuando merece la pena contratarlo?",
        answer:
          "Cuando un gasto inesperado de 300-1.000 USD o mas afectaria tu presupuesto.",
      },
      {
        question: "Que cobertura conviene comparar primero?",
        answer:
          "Empieza por atencion medica y hospitalizacion, luego anade retrasos y equipaje.",
      },
      {
        question: "Necesito cobertura para actividades como esqui o senderismo?",
        answer:
          "Si. Muchas polizas no lo incluyen automaticamente.",
      },
      {
        question: "Caso especial: si alquilo una moto o bicicleta electrica, estoy cubierto?",
        answer:
          "No siempre. Muchas polizas excluyen vehiculos de dos ruedas.",
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
          "Usa una base principal con algunas excursiones de un dia, o limita el plan a Seúl mas una ciudad de contraste. Reducir desplazamientos suele crear una semana mas disfrutable.",
      },
      {
        question: "Conviene reservar todo antes de validar tiempos de transporte?",
        answer:
          "No. Confirma primero tiempos de traslado realistas y luego cierra reservas. Planificar movimientos antes de reservar ayuda a evitar gran parte del estres de un viaje de una semana.",
      },
    ],
    "2-weeks-in-korea": [
      {
        question: "Debo leer esto antes de planificar un viaje de 2 semanas a Corea?",
        answer:
          "Si. Esta pagina te ayuda a entender como estructurar dos semanas sin ir con prisa ni cambiar de hotel con demasiada frecuencia.",
      },
      {
        question: "Cual es la decision clave al planificar dos semanas en Corea?",
        answer:
          "Decide primero tu estructura regional. El enfoque mas simple es usar tres regiones con una base principal en cada una.",
      },
      {
        question: "Que error comun debo evitar en un viaje de dos semanas?",
        answer:
          "Intentar visitar demasiadas ciudades. Incluso con dos semanas, los traslados frecuentes pueden reducir el tiempo real de exploracion.",
      },
      {
        question: "Que debo verificar en fuentes oficiales antes de cerrar reservas?",
        answer:
          "Los horarios de transporte, las condiciones estacionales y los periodos de festivos importantes pueden cambiar.",
      },
      {
        question: "Que debo hacer despues de leer esta pagina?",
        answer:
          "Elige primero tus tres regiones y luego empieza a planificar cada bloque con mas detalle.",
      },
    ],
    "1-month-in-korea": [
      {
        question: "Debo leer esto antes de planificar un viaje de un mes a Corea?",
        answer:
          "Si. Esta pagina explica como estructurar una estancia larga para que el viaje se sienta comodo en lugar de apresurado.",
      },
      {
        question: "Cual es la decision clave para un viaje de un mes por Corea?",
        answer:
          "Elige primero dos o tres bases principales. Las estancias mas largas en cada lugar suelen crear un mejor ritmo de larga estancia.",
      },
      {
        question: "Que error comun debo evitar durante una estancia de un mes?",
        answer:
          "Cambiar de ciudad con demasiada frecuencia. Los traslados constantes pueden convertir un mes relajado en un tour largo y agotador.",
      },
      {
        question: "Que debo verificar en fuentes oficiales antes de reservar estancias largas?",
        answer:
          "Las politicas de alojamiento, las condiciones estacionales y los horarios de transporte pueden cambiar.",
      },
      {
        question: "Cual es la estructura mas segura para un viaje de un mes a Corea?",
        answer:
          "Quedate unas dos semanas en Seúl y luego pasa una semana en cada una de dos regiones mas tranquilas, como Busan, Jeju o Gyeongju.",
      },
    ],
    "shopping-and-discounts": [
      {
        question: "Comprar en Corea realmente es barato?",
        answer:
          "A veces. Corea ofrece muy buena relacion valor-precio en categorias como cosmetica, snacks y moda local, pero no todo es mas barato que en el extranjero.",
      },
      {
        question: "Cual es la regla mas importante antes de comprar algo en Corea?",
        answer:
          "Primero revisa el valor real. Los descuentos solo importan si el producto ya valia la pena.",
      },
      {
        question: "Que error de compra cometen muchos viajeros?",
        answer:
          "Suponer que todo descuento significa ahorro real. Los porcentajes promocionales suelen tener condiciones.",
      },
      {
        question: "Que regla de VAT refund deben recordar los viajeros?",
        answer:
          "Los numeros clave son ₩15,000 (compra minima), ₩1,000,000 (limite de reembolso inmediato) y ₩5,000,000 (limite total por viaje).",
      },
      {
        question: "Que debo hacer antes de comprar?",
        answer:
          "Compara precios, confirma si aplica el VAT refund y revisa si los descuentos realmente reducen el precio final.",
      },
    ],
    "korea-entry-requirements": [
      {
        question: "Los viajeros primerizos y recurrentes tienen reglas diferentes?",
        answer:
          "No. Dependen de la nacionalidad y la normativa actual.",
      },
      {
        question: "Necesito K-ETA para entrar a Corea?",
        answer:
          "Depende de tu nacionalidad y la exencion vigente.",
      },
      {
        question: "Como gestionar la e-Arrival Card en viajes multi-ciudad?",
        answer:
          "Usa una direccion principal y ten el itinerario listo.",
      },
      {
        question: "Que cambia entre viajes simples y complejos?",
        answer:
          "La preparacion de documentos, no los requisitos legales.",
      },
      {
        question: "Que revisar 24 horas antes del vuelo?",
        answer:
          "Estado K-ETA, e-Arrival Card y actualizaciones oficiales.",
      },
    ],
    seoul: [
      {
        question: "Seul es una buena base para un primer viaje a Corea?",
        answer:
          "Si. Seul tiene el sistema de transporte mas desarrollado, la mayor variedad de alojamientos y acceso facil desde el aeropuerto internacional.",
      },
      {
        question: "Cuantos dias deberia quedarme en Seul?",
        answer:
          "La mayoria de quienes viajan por primera vez se quedan 3-5 dias. Los viajes cortos se enfocan en distritos principales, y las estancias mas largas permiten explorar barrios con un ritmo mas tranquilo.",
      },
      {
        question: "Necesito coche para moverme por Seul?",
        answer:
          "No. El metro de Seul cubre la mayor parte de la ciudad, y las estaciones incluyen senalizacion en ingles y numeracion clara.",
      },
      {
        question: "Cual es la forma mas facil de explorar la ciudad?",
        answer:
          "Piensa por distritos. Alojate en una zona principal y explora barrios cercanos en lugar de cruzar toda la ciudad cada dia.",
      },
      {
        question: "Que error cometen muchos viajeros en Seul?",
        answer:
          "Intentar visitar demasiados distritos en un solo dia. Rutas eficientes y un ritmo mas lento hacen la ciudad mucho mas disfrutable.",
      },
    ],
    busan: [
      {
        question: "Vale la pena visitar Busan en un primer viaje a Corea?",
        answer:
          "Si. Busan ofrece una atmosfera diferente a Seul, con playas, mercados de mariscos y un ritmo costero mas relajado.",
      },
      {
        question: "Cuantos dias deberia quedarme en Busan?",
        answer:
          "La mayoria de visitantes se queda 2-3 dias. Eso permite ver una zona de playa, un mercado de mariscos y un distrito cultural sin ir con prisa.",
      },
      {
        question: "Cual es la forma mas facil de viajar de Seul a Busan?",
        answer:
          "El tren de alta velocidad KTX es la opcion mas comun y tarda unas 2.5 horas desde la estacion de Seul.",
      },
      {
        question: "Donde deberia alojarme en Busan?",
        answer:
          "Elige alojamiento cerca del area que mas quieras explorar, como Haeundae, Gwangalli, Nampo o Seomyeon, y mantente cerca de una estacion de metro.",
      },
      {
        question: "Que error cometen muchos viajeros en Busan?",
        answer:
          "Intentar visitar demasiados distritos lejanos en un solo dia. Busan se extiende por la costa, asi que planificar por zonas es clave.",
      },
    ],
    "first-time-in-korea": [
      {
        question: "Deberia leer esto antes de mi primer viaje a Corea?",
        answer:
          "Si. Esta pagina explica lo que suelen notar quienes visitan Corea por primera vez y que preparacion realmente importa antes de llegar.",
      },
      {
        question: "Cual es la preparacion mas importante antes de visitar Corea?",
        answer:
          "Asegurate de que tu telefono funcione internacionalmente, confirma tu alojamiento de la primera noche y ten claro como llegaras desde el aeropuerto a la ciudad.",
      },
      {
        question: "Que error comun deben evitar quienes viajan por primera vez?",
        answer:
          "Planificar en exceso los primeros dias. Deja espacio para ajustarte mientras aprendes como funciona la ciudad.",
      },
      {
        question: "Que debo verificar con fuentes oficiales antes de salir?",
        answer:
          "Los procedimientos de entrada, los pasos de llegada en aeropuerto y las regulaciones de viaje pueden cambiar.",
      },
      {
        question: "Que debo hacer despues de leer esta pagina?",
        answer:
          "Prepara lo basico para tus primeras 24 horas y luego empieza a estructurar tu viaje.",
      },
    ],
    "been-here-before": [
      {
        question: "Deberia leer esto antes de planificar un segundo viaje a Corea?",
        answer:
          "Si. Esta pagina ayuda a quienes ya viajaron a Corea a planificar un viaje mas pausado, mas profundo y mas comodo.",
      },
      {
        question: "Cual es la decision clave para un viaje repetido a Corea?",
        answer:
          "Primero decide como quieres sentir tus dias: relajados, centrados en comida, orientados a naturaleza o basados en barrios.",
      },
      {
        question: "Que error comun deben evitar quienes regresan a Corea?",
        answer:
          "Repetir exactamente la misma ruta Seúl-Busan-Jeju o volver a agregar demasiadas ciudades.",
      },
      {
        question: "Que debo verificar con fuentes oficiales antes de viajar otra vez?",
        answer:
          "Los horarios de transporte, los eventos de temporada y los horarios de apertura de atracciones pueden cambiar.",
      },
      {
        question: "Cual es la estructura mas segura para un segundo viaje a Corea?",
        answer:
          "Quedate mas tiempo en una o dos regiones, explora barrios con mas profundidad y agrega una ciudad mas tranquila o un destino natural.",
      },
    ],
    "basic-korean-etiquette": [
      {
        question: "Deberia leer esto antes de visitar Corea por primera vez?",
        answer:
          "Si. Esta guia explica habitos cotidianos de etiqueta que ayudan a evitar situaciones incomodas.",
      },
      {
        question: "Cual es la regla de etiqueta mas importante en Corea?",
        answer:
          "Muestra respeto silencioso en espacios compartidos. Observar como se comportan los demas suele funcionar bien.",
      },
      {
        question: "Que error comun deben evitar los visitantes?",
        answer:
          "Hablar demasiado fuerte en espacios publicos como trenes, buses o cafeterias.",
      },
      {
        question: "Que regla de etiqueta sorprende a muchos viajeros?",
        answer:
          "La cultura de hacer fila es muy clara en Corea. La gente suele esperar su turno en lugares como andenes de metro, paradas de bus y cajas de pago.",
      },
      {
        question: "Que debo recordar despues de leer esta guia?",
        answer:
          "No necesitas ser perfecto. Los pequenos gestos de respeto importan mas que conocer cada regla.",
      },
    ],
    "korea-travel-safety": [
      {
        question: "Deberia leer esto antes de viajar a Corea por primera vez?",
        answer:
          "Si. Esta guia explica que tan segura es Corea y que precauciones basicas deben conocer los viajeros.",
      },
      {
        question: "Corea es segura para turistas y viajeros en solitario?",
        answer:
          "Si. Corea es considerada ampliamente un destino muy seguro, y muchos viajeros se sienten comodos moviendose incluso de noche.",
      },
      {
        question: "Que error comun de seguridad deben evitar los visitantes?",
        answer:
          "Beber en exceso o desorientarse tarde en la noche en zonas de ocio nocturno que no conocen.",
      },
      {
        question: "Que informacion de emergencia deben saber los viajeros en Corea?",
        answer: "Policia: 112\nBomberos o ambulancia: 119",
      },
      {
        question: "Que debo recordar despues de leer esta guia?",
        answer:
          "Mantente atento, no ansioso. La preparacion basica y el sentido comun suelen ser suficientes.",
      },
    ],
    "which-city-fits-you-best": [
      {
        question: "Debo leer esto aunque ya haya elegido ciudad?",
        answer:
          "Si. Esta pagina te ayuda a validar tu eleccion con friccion de traslados, ritmo real y temporada antes de cerrar reservas.",
      },
      {
        question: "Cual es el primer filtro para elegir ciudad en Corea?",
        answer:
          "Empieza por tu tolerancia diaria a moverte. Una ciudad solo funciona si la carga real de traslados te deja tiempo y energia para disfrutar.",
      },
      {
        question: "Cuando Seul es la base mas segura por defecto?",
        answer:
          "Seul suele ser la opcion mas segura para primer viaje, itinerarios cortos o planes aun indefinidos por su transporte y oferta de alojamiento.",
      },
      {
        question: "Que error comun cometen los viajeros en esta decision?",
        answer:
          "Elegir solo por popularidad. Una ciudad puede verse ideal en redes, pero cansarte en la practica por traslados diarios largos.",
      },
      {
        question: "Que debo hacer despues de leer esta pagina?",
        answer:
          "Elige una ciudad principal que encaje con tu ritmo y define solo una opcion de respaldo por si cambian fechas o tiempos reales.",
      },
    ],
    "what-should-i-try-first": [
      {
        question: "Debo leer esto antes de mi primera comida en Corea?",
        answer:
          "Si. Esta pagina te da una estructura practica para empezar sin pedir de mas ni lanzarte solo a platos extremos.",
      },
      {
        question: "Cual es la seleccion mas segura para empezar con comida coreana?",
        answer:
          "Empieza con equilibrio: una comida con arroz, una sopa o guiso, una proteina a la parrilla y una opcion de acompanamientos.",
      },
      {
        question: "Que error comun deben evitar quienes prueban comida coreana por primera vez?",
        answer:
          "Empezar solo con platos muy picantes o demasiado intensos. Eso suele cansar temprano y limitar lo que pruebas despues.",
      },
      {
        question: "Que hago si no tolero bien el picante?",
        answer:
          "Pide opciones suaves al principio y sube el nivel poco a poco. Hay muchos platos no picantes que representan bien la cocina coreana.",
      },
      {
        question: "Que debo hacer despues de leer esta pagina?",
        answer:
          "Elige de tres a cinco platos base para tus dos primeros dias y luego amplia por barrios segun tu nivel de comodidad.",
      },
    ],
    "attraction-passes-discounts": [
      {
        question: "¿Necesito un pase turístico para visitar Corea?",
        answer:
          "No necesariamente. Muchas atracciones tienen precios bajos o incluso son gratuitas. Los pases solo suelen ahorrar dinero si tu itinerario incluye varias atracciones de pago en poco tiempo.",
      },
      {
        question: "¿Cuándo realmente vale la pena un pase turístico?",
        answer:
          "Normalmente cuando visitas tres o más atracciones de pago dentro del período de validez del pase y planificas tu ruta con eficiencia.",
      },
      {
        question: "¿Cuál es el error más común que cometen los viajeros con estos pases?",
        answer:
          "Comprar el pase antes de planificar el itinerario. Los pases basados en tiempo funcionan mejor cuando las visitas están bien organizadas.",
      },
      {
        question: "¿Cuál es la diferencia entre los principales pases en Corea?",
        answer:
          "El KORAIL PASS reduce el costo de los trenes de larga distancia. En cambio, pases como Discover Seoul Pass o VISIT BUSAN PASS ofrecen entradas gratuitas o descuentos para atracciones dentro de una ciudad específica.",
      },
      {
        question: "¿Cómo debería decidir si comprar un pase o no?",
        answer:
          "Haz una lista de las atracciones que planeas visitar, compara el precio total de las entradas individuales con el precio del pase y revisa cuáles atracciones son gratuitas y cuáles solo ofrecen descuento.",
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
          "Finales de marzo marca el inicio de la primavera, no su punto maximo. Los primeros cerezos en flor suelen aparecer antes en Jeju y Busan, mientras Seúl florece mas tarde.",
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

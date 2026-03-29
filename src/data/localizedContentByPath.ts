import type { LocalizedContentByPath } from "./localizedContent";

// Draft only: rendering still reads siteTree and inline overrides today. This file stores
// the target shape so the content can be backfilled without switching the live source yet.
export const localizedContentByPath: LocalizedContentByPath = {
  "/plan-your-trip": {
    en: {
      title: "Plan Your Trip",
      description:
        "Plan your days realistically, without overpacking your schedule.",
      quickAnswer:
        "Start with three simple filters: how long you're staying, how often you're willing to change hotels, and how much long travel days drain your energy. These three factors usually determine whether your Korea trip should be compact, balanced, or slower-paced.",
      content: [
        {
          title: "🗺️ Start with one decision question",
          icon: "compass",
          emphasis:
            "Do you want to see more places - or protect your time and energy between moves?",
          body:
            "This hub works best when you choose your pace before choosing your city list. The right plan is usually the one you can still enjoy on day five, not the one that looks the most efficient on a map.",
          bullets: [
            "Trip length: Seven days usually works best with one main base and one contrasting stop. Longer trips can absorb a slower regional stay.",
            "Move frequency: Every hotel change adds packing time, check-in friction, and partial sightseeing loss on transfer days.",
            "Energy and stamina: If early mornings and long travel days wear you down, depth often works better than adding another city.",
          ],
        },
        {
          title: "🧩 Start with the page that fits your trip",
          icon: "spark",
          body:
            "Use the links below as your next meaningful step, not as a checklist. Each page answers a different planning question.",
          bullets: [
            "7 Days in Korea works best if you want one major move and clear structure.",
            "2 Weeks in Korea suits travelers who want Seoul plus one city and one slower region.",
            "1 Month in Korea is ideal if you can plan around rhythm instead of constant movement.",
            "First Time in Korea keeps your first visit simpler and lower-friction.",
            "Been Here Before helps you trade familiar highlights for better pacing and fresher ideas.",
          ],
        },
        {
          title: "🛠️ Adjust when your trip context changes",
          icon: "calendar",
          body: "Your plan should shift when your travel context shifts.",
          bullets: [
            "If this is your first Korea trip, anchor your schedule around Seoul and add only one contrasting destination.",
            "If you've been before, or prefer a calmer rhythm, remove one transfer and replace it with recovery time or a slower regional base.",
          ],
        },
        {
          title: "🚧 What travelers misjudge first",
          icon: "alert",
          body: "Most pacing problems come from two assumptions:",
          bullets: [
            "Copying a list of cities before calculating how many hours disappear into trains, flights, and check-ins.",
            "Treating arrival days and transfer days as if they were full sightseeing days.",
          ],
        },
      ],
      children: {
        "7-days-in-korea": {
          title: "7 Days in Korea",
          description: "A one-week travel plan that actually works.",
        },
        "2-weeks-in-korea": {
          title: "2 Weeks in Korea",
          description: "How to see more without moving too fast.",
        },
        "1-month-in-korea": {
          title: "1 Month in Korea",
          description: "A slower way to travel Korea without burning out.",
        },
        "first-time-in-korea": {
          title: "First Time in Korea",
          description: "What to expect and how to keep your first trip lower-friction.",
        },
        "been-here-before": {
          title: "Been Here Before",
          description: "A better second-trip rhythm than repeating the standard route.",
        },
      },
    },
    es: {
      title: "Planifica tu viaje",
      description:
        "Planifica tus dias con un ritmo realista, sin llenar demasiado el itinerario.",
      quickAnswer:
        "Empieza con tres filtros simples: cuánto tiempo te quedas, con qué frecuencia estás dispuesto a cambiar de hotel y cuánto te cansan los días largos de traslado. Estos tres factores suelen determinar si tu viaje por Corea debería ser compacto, equilibrado o más relajado.",
      content: [
        {
          title: "🗺️ Empieza con una sola pregunta",
          icon: "compass",
          emphasis:
            "Quieres ver mas lugares, o proteger tu tiempo y energia entre traslados?",
          body:
            "Este hub funciona mejor cuando eliges tu ritmo antes de elegir tu lista de ciudades. El plan correcto suele ser el que todavia disfrutas en el quinto dia, no el que parece mas eficiente en un mapa.",
          bullets: [
            "Duracion del viaje: Siete dias suele funcionar mejor con una base principal y una parada de contraste. Los viajes mas largos pueden absorber una estancia regional mas lenta.",
            "Frecuencia de cambios: Cada cambio de hotel agrega tiempo de equipaje, friccion en el check-in y perdida parcial de turismo en dias de traslado.",
            "Energia y resistencia: Si los madrugones y los dias largos de viaje te agotan, a menudo conviene profundizar en vez de sumar otra ciudad.",
          ],
        },
        {
          title: "🧩 Empieza por la pagina que encaja con tu viaje",
          icon: "spark",
          body:
            "Usa los enlaces de abajo como tu siguiente paso con sentido, no como una lista de control. Cada pagina responde una pregunta distinta de planificacion.",
          bullets: [
            "7 dias en Corea funciona mejor si quieres un gran traslado y una estructura clara.",
            "2 semanas en Corea encaja si quieres Seúl, una ciudad adicional y una region mas lenta.",
            "1 mes en Corea es ideal si puedes planear por ritmo en lugar de movimiento constante.",
            "Primera vez en Corea hace que tu primera visita sea mas simple y con menos friccion.",
            "Ya estuviste en Corea te ayuda a cambiar lo conocido por un mejor ritmo y nuevas ideas.",
          ],
        },
        {
          title: "🛠️ Ajusta cuando cambie el contexto de tu viaje",
          icon: "calendar",
          body: "Tu plan debe cambiar cuando cambie el contexto de tu viaje.",
          bullets: [
            "Si es tu primer viaje a Corea, arma tu itinerario alrededor de Seúl y agrega solo un destino de contraste.",
            "Si ya viniste antes, o prefieres un ritmo mas calmado, elimina un traslado y cambialo por tiempo de recuperacion o una base regional mas lenta.",
          ],
        },
        {
          title: "🚧 Lo que mas se calcula mal",
          icon: "alert",
          body: "La mayoria de los problemas de ritmo nacen de dos supuestos:",
          bullets: [
            "Copiar una lista de ciudades antes de calcular cuantas horas se van en trenes, vuelos y check-ins.",
            "Tratar el dia de llegada y el dia de traslado como si fueran dias completos de turismo.",
          ],
        },
      ],
      children: {
        "7-days-in-korea": {
          title: "7 dias en Corea",
          description: "Un plan de una semana que de verdad funciona.",
        },
        "2-weeks-in-korea": {
          title: "2 semanas en Corea",
          description: "Como ver mas sin ir con prisa.",
        },
        "1-month-in-korea": {
          title: "1 mes en Corea",
          description: "Ideas para viajar despacio y quedarte mas tiempo.",
        },
        "first-time-in-korea": {
          title: "Primera vez en Corea",
          description: "Que esperar y que preparar.",
        },
        "been-here-before": {
          title: "Ya estuviste en Corea?",
          description: "Ideas mas alla de la ruta turistica tipica.",
        },
      },
    },
  },
  "/plan-your-trip/7-days-in-korea": {
    en: {
      title: "7 Days in Korea",
      description: "A one-week travel plan that actually works.",
      quickAnswer:
        "Use two bases, not three. This keeps a 7-day Korea trip realistic, less rushed, and easier to enjoy.",
      content: [
        {
          title: "🎯 Core decision",
          body:
            "Choose two places. A third destination usually costs more time than it adds value in a one-week trip.",
        },
        {
          title: "🚫 Who this is not ideal for",
          body: "This structure is often a poor fit if:",
          bullets: [
            "You need very low-movement pacing.",
            "You want zero fixed transfer timing.",
            "You expect to cover three destinations in one week.",
          ],
        },
        {
          title: "🔁 Lower-friction alternatives",
          body: "If this still feels tight, use one of these:",
          bullets: [
            "Seoul only plus one day trip.",
            "Seoul and Busan only.",
            "Seoul and Jeju only if airport transfer overhead is acceptable.",
          ],
        },
      ],
    },
    es: {
      title: "7 dias en Corea",
      description: "Un plan de una semana que de verdad funciona.",
      quickAnswer:
        "Usa dos bases y no tres. Asi un viaje de 7 dias por Corea es mas realista, menos apurado y mas disfrutable.",
      content: [
        {
          title: "🎯 Decision central",
          body:
            "Elige dos lugares. Una tercera ciudad suele costar mas tiempo del que aporta en una semana.",
        },
        {
          title: "🚫 Para quien no es ideal",
          body: "Este formato suele ser mala opcion si:",
          bullets: [
            "Necesitas ritmo de muy poco movimiento.",
            "No quieres fijar horarios de traslado.",
            "Esperas cubrir tres destinos en una semana.",
          ],
        },
        {
          title: "🔁 Alternativas de menor friccion",
          body: "Si aun se siente ajustado, usa una de estas:",
          bullets: [
            "Solo Seúl + una excursion de un dia.",
            "Solo Seúl y Busan.",
            "Seúl y Jeju solo si aceptas la carga de traslados de aeropuerto.",
          ],
        },
      ],
    },
  },
  "/choose-a-city": {
    es: {
      title: "Elige una ciudad",
      description: "Elige la ciudad que mejor encaja con tu forma de viajar.",
      quickAnswer:
        "Elige tu ciudad considerando tres factores: tu energía de viaje, lo estresante que resulta moverse entre lugares y la temporada de tu viaje a Corea. Seúl suele ser la base más fácil, Busan añade contraste costero y Jeju ofrece naturaleza pero requiere más planificación. Gyeongju o Jeonju funcionan mejor si prefieres un ritmo más tranquilo en lugar de cambiar constantemente de lugar.",
      content: [],
      children: {
        seoul: { title: "Seúl" },
        busan: { title: "Busan" },
        jeju: { title: "Jeju" },
        gyeongju: { title: "Gyeongju" },
        jeonju: { title: "Jeonju" },
        "which-city-fits-you-best": {
          title: "Que ciudad te queda mejor?",
        },
      },
    },
  },
  "/choose-a-city/which-city-fits-you-best": {
    en: {
      title: "Which City Fits You Best?",
      description: "Pick a city based on how you actually travel.",
      quickAnswer:
        "Choose a city by movement tolerance, pace, and transport friction - not by popularity alone.",
      content: [
        {
          title: "🎯 Better decision frame",
          body:
            "There is no universal best city. The practical choice is the one that matches your movement style and daily energy.",
        },
        {
          title: "🚫 Who should simplify first",
          body: "Use a simpler route first if:",
          bullets: [
            "You have under 3 full days.",
            "Your schedule is fixed around one event.",
            "You need low-mobility-first planning.",
          ],
        },
        {
          title: "🔁 Safe fallback",
          body:
            "If still undecided, start with Seoul and add only one contrast city after checking real transfer time.",
        },
      ],
    },
    es: {
      title: "Que ciudad te queda mejor?",
      description: "Elige ciudad segun como viajas de verdad.",
      quickAnswer:
        "Elige por tolerancia a traslados, ritmo y friccion de transporte, no solo por popularidad.",
      content: [
        {
          title: "🎯 Marco de decision",
          body:
            "No existe una ciudad universalmente mejor. La opcion practica es la que encaja con tu estilo de movimiento y energia diaria.",
        },
        {
          title: "🚫 Quienes deberian simplificar primero",
          body: "Usa primero una ruta mas simple si:",
          bullets: [
            "Tienes menos de 3 dias completos.",
            "Tu agenda depende de un evento fijo.",
            "Necesitas planificacion centrada en baja movilidad.",
          ],
        },
        {
          title: "🔁 Ruta de respaldo segura",
          body:
            "Si sigues indeciso, empieza en Seúl y agrega solo una ciudad de contraste tras validar tiempos reales de traslado.",
        },
      ],
    },
  },
  "/before-you-go": {
    en: {
      title: "Before You Go",
      description:
        "Lock in entry rules, arrival connectivity, and risk coverage before departure.",
      quickAnswer:
        "Use this hub as a final pre-departure check. First confirm your entry eligibility, then make sure you can get connected on arrival, and finally decide whether travel insurance meaningfully reduces the financial risk of your trip.",
      content: [
        {
          title: "🛂 Start with entry certainty",
          icon: "passport",
          emphasis:
            "If your boarding eligibility is unclear, start here.",
          body:
            "Visa rules, K-ETA status, and the e-Arrival Card determine whether your trip begins smoothly or becomes a stressful problem at airport check-in.",
          bullets: [
            "Open Korea Entry Requirements first if you are not fully certain whether your passport still qualifies for visa-free entry or a temporary exemption.",
            "Use that page if you want the exact arrival process at Korean airports instead of a generic immigration overview.",
            "Resolving this step removes the highest-stakes risk in this hub: problems before or immediately after boarding.",
          ],
        },
        {
          title: "📶 Decide how you will land connected",
          icon: "sim",
          emphasis:
            "SIM or eSIM is not just a tech choice - it's an arrival-friction decision.",
          body:
            "Mobile data matters most in the first hour after landing, when maps, airport transfers, translation apps, and payments become essential.",
          bullets: [
            "Start with SIM or eSIM if you arrive late, travel solo, or expect to rely on navigation right after exiting the airport.",
            "For many travelers, this is the highest-impact preparation step for avoiding confusion and transport mistakes.",
            "Choose before departure rather than standing in an airport queue without data.",
          ],
        },
        {
          title: "🛡️ Buy insurance only when the downside matters",
          icon: "shield",
          emphasis:
            "Travel insurance is about protecting your budget, not simply checking a box.",
          body:
            "For many trips it remains optional, but the calculation changes if one clinic visit, missed connection, or lost bag would significantly disrupt your plans.",
          bullets: [
            "Open Travel Insurance first if you are traveling in winter, planning outdoor activities, or following a tight non-refundable itinerary.",
            "Compare realistic medical costs, coverage limits, and exclusions before deciding.",
            "This page helps travelers cap downside risk - not everyone needs it by default.",
          ],
        },
        {
          title: "⚠️ What usually causes last-minute problems",
          icon: "alert",
          body:
            "Most departure stress comes from leaving one high-friction decision unresolved.",
          bullets: [
            "Assuming visa-free travel means no other pre-departure steps apply.",
            "Waiting until arrival day to solve connectivity.",
            "Buying insurance quickly without checking exclusions or coverage limits.",
            "Forgetting to recheck official updates in the final 24 hours before departure.",
          ],
        },
      ],
      children: {
        "sim-or-esim": {
          title: "SIM or eSIM for Korea? A Practical Guide for Travelers",
          description:
            "Best for travelers who want data working on landing day, rely on maps immediately, or want the lowest-friction arrival.",
        },
        "travel-insurance-for-korea": {
          title: "Do I Need Travel Insurance for South Korea? (2026 Guide)",
          description:
            "Best for travelers whose budget would be hit hard by a medical bill, delay, or lost bag, and who want to compare realistic risk.",
        },
        "korea-entry-requirements": {
          title:
            "K-ETA & Immigration Process: Official Entry Guide to Korea (2026 Update)",
          description:
            "Start here if you need certainty on K-ETA, the e-Arrival Card, or the exact airport arrival steps tied to your passport.",
        },
      },
    },
    es: {
      title: "Antes de viajar",
      description:
        "Asegura reglas de entrada, conectividad al llegar y cobertura de riesgo antes de salir.",
      quickAnswer:
        "Usa este hub como una revision final antes de salir. Primero confirma si cumples los requisitos de entrada, despues asegurate de poder conectarte al llegar y, por ultimo, decide si el seguro de viaje reduce de forma real el riesgo financiero de tu viaje.",
      content: [
        {
          title: "🛂 Empieza por la certeza de entrada",
          icon: "passport",
          emphasis:
            "Si no tienes claro si podras abordar sin problemas, empieza aqui.",
          body:
            "Las reglas de visado, el estado de K-ETA y la e-Arrival Card determinan si tu viaje empieza sin contratiempos o se convierte en un problema estresante en el check-in del aeropuerto.",
          bullets: [
            "Abre primero Requisitos de entrada a Corea si no tienes plena certeza de que tu pasaporte sigue calificando para entrada sin visado o para una exencion temporal.",
            "Usa esa pagina si quieres ver el proceso exacto de llegada en los aeropuertos coreanos, no un resumen generico de inmigracion.",
            "Resolver este punto elimina el riesgo mas importante de este hub: problemas antes de abordar o justo despues.",
          ],
        },
        {
          title: "📶 Decide como vas a aterrizar con conexion",
          icon: "sim",
          emphasis:
            "SIM o eSIM no es solo una decision tecnica: es una decision sobre la friccion de tu llegada.",
          body:
            "Los datos moviles importan mas durante la primera hora despues de aterrizar, cuando mapas, traslados desde el aeropuerto, apps de traduccion y pagos se vuelven esenciales.",
          bullets: [
            "Empieza por SIM o eSIM si llegas tarde, viajas solo o esperas depender de la navegacion justo al salir del aeropuerto.",
            "Para muchos viajeros, este es el paso de preparacion con mas impacto para evitar confusion y errores de transporte.",
            "Decidelo antes de salir, no cuando ya estas haciendo fila en el aeropuerto sin datos.",
          ],
        },
        {
          title: "🛡️ Compra seguro solo cuando el riesgo a la baja importe",
          icon: "shield",
          emphasis:
            "El seguro de viaje consiste en proteger tu presupuesto, no en marcar una casilla.",
          body:
            "En muchos viajes sigue siendo opcional, pero el calculo cambia si una consulta medica, una conexion perdida o una maleta extraviada alterarian de forma importante tus planes.",
          bullets: [
            "Abre primero Seguro de viaje si vas a viajar en invierno, planeas actividades al aire libre o sigues un itinerario ajustado y no reembolsable.",
            "Compara antes de decidir los costos medicos realistas, los limites de cobertura y las exclusiones.",
            "Esta pagina ayuda a limitar el riesgo a la baja; no todo el mundo lo necesita por defecto.",
          ],
        },
        {
          title: "⚠️ Que suele causar problemas de ultimo minuto",
          icon: "alert",
          body:
            "La mayor parte del estres antes de salir viene de dejar sin resolver una decision de alta friccion.",
          bullets: [
            "Asumir que viajar sin visado significa que no aplica ningun otro paso previo.",
            "Esperar al dia de llegada para resolver la conectividad.",
            "Comprar un seguro rapido sin revisar exclusiones ni limites de cobertura.",
            "Olvidar volver a revisar las actualizaciones oficiales en las ultimas 24 horas antes de salir.",
          ],
        },
      ],
      children: {
        "sim-or-esim": {
          title: "SIM o eSIM para Corea? Guia practica para viajeros",
          description:
            "Ideal para quien quiere tener datos al aterrizar, usar mapas desde el primer minuto o reducir friccion al llegar.",
        },
        "travel-insurance-for-korea": {
          title:
            "Necesito seguro de viaje para Corea del Sur? (Guia 2026)",
          description:
            "Ideal para quien podria resentir una factura medica, un retraso o una maleta perdida y quiere comparar riesgo real.",
        },
        "korea-entry-requirements": {
          title:
            "K-ETA y proceso de inmigracion: guia oficial de entrada a Corea (Actualizacion 2026)",
          description:
            "Empieza aqui si necesitas certeza sobre K-ETA, la e-Arrival Card o los pasos exactos de llegada que aplican a tu pasaporte.",
        },
      },
    },
  },
  "/before-you-go/sim-or-esim": {
    en: {
      title: "SIM or eSIM for Korea? A Practical Guide for Travelers",
      description:
        "Best for travelers who want data working on landing day, rely on maps immediately, or want the lowest-friction arrival.",
      quickAnswer:
        "For most travelers, eSIM is the easiest option if your phone supports it and is unlocked. If your device does not support eSIM, a physical SIM card at the airport is the safest alternative.",
      content: [],
    },
    es: {
      title: "SIM o eSIM para Corea? Guia practica para viajeros",
      description:
        "Ideal para quien quiere tener datos al aterrizar, usar mapas desde el primer minuto o reducir friccion al llegar.",
      quickAnswer:
        "Para la mayoria de los viajeros, eSIM es la opcion mas facil si tu telefono la admite y esta desbloqueado. Si tu dispositivo no admite eSIM, una SIM fisica en el aeropuerto suele ser la alternativa mas segura.",
      content: [
        {
          title: "✅ Respuesta rapida",
          body:
            "Para la mayoria de los viajeros, eSIM es la opcion mas facil, si tu telefono la admite y esta desbloqueado.",
          bullets: [
            "Instalala antes de salir, activala despues de aterrizar y tendras conexion inmediata.",
            "Si tu dispositivo no admite eSIM, una SIM fisica en el aeropuerto suele ser la alternativa mas segura.",
          ],
          tail:
            "En Corea, contar con datos moviles fiables reduce mucho el estres de llegada.",
        },
        {
          title: "📱 Por que importan los datos moviles en Corea",
          body:
            "El entorno de viaje en Corea es muy digital. Muchos servicios practicos dependen del acceso movil en tiempo real.",
          subsections: [
            {
              title: "Uso real en viaje",
              lead: ["Los visitantes suelen usar datos para:"],
              bullets: [
                "Navegacion en tiempo real y transbordos de metro",
                "Apps de traduccion para menus y senales",
                "Billetes y pases con codigo QR",
                "Apps para pedir taxi",
                "Encontrar entradas exactas de edificios",
              ],
            },
          ],
          tail:
            "Hay Wi-Fi publico, pero suele ser inestable mientras te mueves entre lugares. Un buen plan de datos mejora tanto la eficiencia como la tranquilidad.",
        },
        {
          title: "💸 Cuanto deberias presupuestar",
          body:
            "Los precios exactos cambian segun el proveedor y las promociones. Aun asi, entender el rango normal ayuda a planificar.",
          subsections: [
            {
              title: "Rango de precio habitual",
              lead: ["La mayoria de los planes turisticos de SIM/eSIM suelen costar:"],
              bullets: [
                "₩6,000-₩8,000 por dia",
                "Aproximadamente ₩18,000-₩30,000 por 5 dias",
                "Los periodos mas largos reducen el costo medio diario",
              ],
            },
            {
              title: "El precio final depende de:",
              bullets: [
                "El limite diario de datos a alta velocidad",
                "Si incluye servicio de voz",
                "Recogida en aeropuerto o eSIM instantanea",
                "Promociones de temporada",
              ],
              tail:
                "Confirma siempre el precio actual en la pagina oficial del proveedor antes de comprar.",
            },
          ],
        },
        {
          title: "🔍 Diferencias practicas entre SIM y eSIM",
          body:
            "Elige segun la compatibilidad del dispositivo, tu preferencia de configuracion y la rapidez con la que quieres conectarte tras aterrizar.",
          subsections: [
            {
              title: "eSIM (SIM digital)",
              lead: [
                "Es mejor para viajeros que quieren conectividad inmediata al aterrizar.",
                "Conviene si",
              ],
              bullets: [
                "Tu telefono admite eSIM",
                "Tu dispositivo esta desbloqueado por operadora",
                "Quieres evitar filas en el aeropuerto",
                "Prefieres no quitar tu SIM fisica",
              ],
            },
            {
              title: "Cuidado importante",
              tail:
                "Muchos productos eSIM para turistas no pueden restaurarse si los borras. Instalala con cuidado y evita eliminarla durante el viaje.",
            },
            {
              title: "SIM fisica",
              lead: [
                "Es mejor para viajeros que prefieren ayuda presencial.",
                "Conviene si",
              ],
              bullets: [
                "Tu dispositivo no admite eSIM",
                "Prefieres una configuracion manual",
                "Quieres ayuda del personal en mostradores del aeropuerto",
              ],
              tail:
                "Los principales aeropuertos de Corea ofrecen mostradores de recogida de SIM con ayuda para la instalacion.",
            },
          ],
        },
        {
          title: "📊 Lo que suele significar \"datos ilimitados\"",
          body:
            "\"Ilimitado\" casi nunca significa datos de alta velocidad sin limite durante todo el dia.",
          subsections: [
            {
              title: "Estructura habitual",
              lead: ["La mayoria de los planes turisticos siguen esta estructura:"],
              bullets: [
                "Un limite diario de alta velocidad (a menudo alrededor de 3 GB al dia)",
                "Velocidad reducida despues de alcanzar ese limite hasta el reinicio a medianoche",
              ],
            },
          ],
          tail:
            "La velocidad reducida suele bastar para mapas, mensajeria y navegacion basica. Si haces streaming pesado o usas hotspot, puede sentirse lenta. Revisa siempre la politica de datos antes de comprar.",
        },
        {
          title: "⏱️ Cuando empieza el plan",
          body:
            "El momento de activacion afecta cuantos dias reales de uso recibes.",
          tail:
            "Algunos planes empiezan a contar desde el primer uso de datos, no desde la compra. Instalar antes de salir y activar despues de aterrizar ayuda a aprovechar mejor el tiempo. Confirma siempre la regla exacta antes de comprar.",
        },
        {
          title: "☎️ Necesitas un numero coreano",
          body:
            "La mayoria de los viajeros pueden usar planes solo de datos, pero las opciones con voz sirven en casos concretos.",
          subsections: [
            {
              title: "Solo datos",
              tail:
                "Sirve para la mayoria de los viajeros. Las apps, reservas y servicios de mensajeria funcionan normalmente sin numero coreano.",
            },
            {
              title: "Datos + voz",
              lead: ["Es util si planeas:"],
              bullets: [
                "Llamar a restaurantes u hoteles locales",
                "Recibir llamadas locales",
              ],
              tail:
                "Aun asi, muchos productos SIM/eSIM para turistas no sirven para servicios coreanos de verificacion de identidad. Contrata voz solo si de verdad necesitas llamar localmente.",
            },
          ],
        },
        {
          title: "🛬 Comprar antes o despues de llegar",
          body:
            "Elige el momento de compra segun cuanta ayuda quieras tener el dia de llegada.",
          subsections: [
            {
              title: "Comprar antes de salir (recomendado)",
              bullets: [
                "Confirmar compatibilidad con eSIM",
                "Confirmar que el telefono esta desbloqueado",
                "Comprar online",
                "Instalar antes del viaje",
                "Activar despues de aterrizar",
              ],
              tail: "Esto reduce el estres de llegada.",
            },
            {
              title: "SIM con recogida en aeropuerto",
              bullets: [
                "Reservar online",
                "Elegir recogida en aeropuerto",
                "Mostrar pasaporte",
                "Recibir ayuda del personal para instalarla",
              ],
              tail: "Es ideal si prefieres configuracion presencial.",
            },
            {
              title: "Comprar despues de llegar",
              tail:
                "Es posible, pero menos comodo para quienes vienen por primera vez. Llegar sin datos puede complicar la navegacion y el transporte.",
            },
          ],
        },
        {
          title: "⚠️ Errores comunes que conviene evitar",
          body:
            "Evita estos puntos para prevenir la mayoria de los problemas de conectividad.",
          bullets: [
            "El telefono esta bloqueado por operadora",
            "El dispositivo no admite eSIM",
            "Borrar la eSIM durante el viaje",
            "Suponer que \"ilimitado\" significa alta velocidad ilimitada",
            "Esperar que una SIM turistica sirva para verificacion de identidad en Corea",
            "No revisar cuando empieza a correr el tiempo del plan",
          ],
          tail:
            "Evitar estos errores previene la mayoria de los problemas de conectividad.",
        },
        {
          title: "🧾 Lista simple para decidir",
          body:
            "Usa esta guia rapida para elegir la opcion que mejor encaja con tu dispositivo y tu forma de viajar.",
          subsections: [
            {
              title: "Elige eSIM si",
              bullets: [
                "Tu telefono admite eSIM",
                "Tu telefono esta desbloqueado",
                "Quieres conexion inmediata al aterrizar",
                "Prefieres evitar filas en el aeropuerto",
              ],
            },
            {
              title: "Elige SIM fisica si",
              bullets: [
                "Tu dispositivo no admite eSIM",
                "Quieres ayuda presencial",
                "Prefieres una instalacion fisica",
              ],
            },
          ],
        },
        {
          title: "💬 Consejo final",
          body: "Tener datos moviles fiables afecta:",
          bullets: [
            "Tu primera hora despues de aterrizar",
            "Tus decisiones de transporte",
            "Tu flexibilidad durante el viaje",
            "Tu comodidad general",
            "Antes de comprar, revisa:",
            "Compatibilidad del dispositivo",
            "Estado de desbloqueo",
            "Politica de datos",
            "Regla de inicio del plan",
            "Rango de precio realista",
          ],
          tail:
            "Unos pocos minutos de preparacion pueden ahorrarte horas de incomodidad.",
        },
      ],
    },
  },
  "/before-you-go/travel-insurance-for-korea": {
    en: {
      title: "Do I Need Travel Insurance for South Korea? (2026 Guide)",
      description:
        "Best for travelers whose budget would be hit hard by a medical bill, delay, or lost bag, and who want to compare realistic risk.",
      quickAnswer:
        "Travel insurance for South Korea is not required for most short-term visitors in 2026. You should consider buying it if a 300-1,000+ USD unexpected cost such as a medical visit, trip delay, or lost baggage would affect your travel budget. Medical care in South Korea is high quality but not free, and emergency treatment or hospitalization can still cost hundreds to thousands of dollars without insurance. You may skip insurance only if you can comfortably pay for medical care, delays, and disruptions yourself, and your visa type does not require insurance coverage. Next decision: check your Korea entry requirements (K-ETA, visa, arrival rules) and set up your SIM or eSIM before choosing a policy.",
      content: [],
    },
    es: {
      title: "Necesito seguro de viaje para Corea del Sur? (Guia 2026)",
      description:
        "Ideal para quien podria resentir una factura medica, un retraso o una maleta perdida y quiere comparar riesgo real.",
      quickAnswer:
        "El seguro de viaje para Corea del Sur no es obligatorio para la mayoria de los visitantes de corta duracion en 2026. Deberias considerar contratarlo si un gasto inesperado de 300-1.000 USD o mas, como una consulta medica, un retraso de vuelo o la perdida de equipaje, podria afectar tu presupuesto de viaje. La atencion medica en Corea del Sur es de alta calidad, pero no es gratuita, y un tratamiento de emergencia o una hospitalizacion pueden costar cientos o miles de dolares sin seguro. Puedes prescindir del seguro solo si puedes pagar sin problema gastos medicos, retrasos e imprevistos, y tu tipo de visado no exige seguro. Siguiente decision: revisa los requisitos de entrada a Corea (K-ETA, visado, normas de llegada) y configura tu SIM o eSIM antes de elegir una poliza.",
      content: [
        {
          title: "Necesito seguro de viaje para Corea del Sur? (Guia 2026)",
          icon: "shield",
          emphasis:
            "El seguro de viaje no es un requisito legal para la mayoria de los visitantes de corta estancia en Corea del Sur en 2026.",
          body:
            "Sin embargo, la atencion medica no es gratuita para turistas. Si ocurre algo inesperado, tendras que pagar el costo completo por tu cuenta. Corea del Sur tiene un sistema sanitario moderno y de alta calidad. Los hospitales son limpios, eficientes y estan bien equipados. Pero sin seguro, incluso una visita simple de urgencias puede salir cara. Para la mayoria de los viajeros internacionales, un seguro basico es una red de seguridad practica y asequible.",
        },
        {
          title: "Respuesta rapida",
          icon: "spark",
          emphasis: "El seguro de viaje no es obligatorio para entrar.",
          body:
            "Aun asi, muchos viajeros deciden contratarlo para protegerse financieramente.",
          bullets: [
            "El seguro de viaje no es obligatorio para entrar a Corea del Sur bajo viaje sin visado o K-ETA.",
            "Aun asi, muchos viajeros deciden contratarlo para protegerse financieramente.",
            "Una poliza basica suele costar menos que una comida de restaurante por dia y puede evitar gastos grandes e imprevistos.",
          ],
        },
        {
          title: "Cuanto cuesta la atencion medica en Corea del Sur",
          icon: "wallet",
          emphasis:
            "Los turistas no estan cubiertos por el sistema nacional de seguro medico de Corea.",
          body: "Gastos habituales de bolsillo en 2026:",
          bullets: [
            "Consulta ambulatoria: 30-80 USD",
            "Urgencias en Seúl: 300-800 USD",
            "Hospitalizacion (por noche): 1,000-3,000+ USD",
            "TAC, resonancia, analisis de sangre: cargos adicionales",
            "Servicio de ambulancia: varia segun el caso",
            "Las clinicas internacionales privadas pueden cobrar mas que los hospitales publicos.",
            "Son estimaciones generales. El costo real depende de la ciudad, el tipo de hospital y el tratamiento necesario.",
          ],
        },
        {
          title: "Cuando es obligatorio el seguro de viaje",
          icon: "passport",
          emphasis:
            "Para la mayoria de los turistas de corta estancia, el seguro de viaje no es obligatorio para entrar en Corea del Sur.",
          body: "Aun asi, podria exigirse para:",
          bullets: [
            "Algunas categorias de visado",
            "Programas de estudio o intercambio",
            "Visados working holiday",
            "Algunas estancias patrocinadas por empleador",
            "Comprueba siempre los requisitos oficiales de visado segun tu nacionalidad antes de viajar.",
          ],
        },
        {
          title: "Cuando se recomienda el seguro de viaje",
          icon: "checklist",
          emphasis:
            "El seguro de viaje se recomienda para la mayoria de los visitantes.",
          body: "Es especialmente util si:",
          bullets: [
            "Viajas en invierno (las aceras con hielo aumentan el riesgo de caidas)",
            "Planeas senderismo, esqui u otras actividades al aire libre",
            "Tienes vuelos con conexion o trayectos largos",
            "Quieres cobertura ante cancelacion del viaje o retrasos de equipaje",
            "Incluso en un pais seguro como Corea del Sur, pueden ocurrir imprevistos.",
          ],
        },
        {
          title: "Que deberia cubrir una buena poliza",
          icon: "shield",
          emphasis:
            "Para viajar a Corea del Sur en 2026, una poliza practica deberia incluir:",
          body: "Busca estos elementos esenciales:",
          bullets: [
            "Cobertura medica de emergencia (al menos 50,000-100,000 USD)",
            "Hospitalizacion y ambulancia",
            "Cobertura por retraso o cancelacion del viaje",
            "Cobertura por equipaje perdido, robado o retrasado",
            "Asistencia de emergencia 24 horas en ingles",
            "Si planeas actividades de aventura, asegurate de que la poliza incluya deportes de invierno o senderismo.",
          ],
        },
        {
          title: "Lo que normalmente no cubre",
          icon: "alert",
          emphasis: "Las polizas estandar suelen excluir:",
          body:
            "Lee siempre los detalles de la poliza con atencion antes de comprar.",
          bullets: [
            "Condiciones medicas preexistentes",
            "Deportes de alto riesgo (salvo cobertura adicional)",
            "Reclamaciones sin documentacion adecuada",
            "Motivos no medicos de cancelacion",
          ],
        },
        {
          title: "Situaciones comunes que viven los viajeros",
          icon: "spark",
          emphasis: "La mayoria de las reclamaciones no son grandes emergencias.",
          body: "Lo mas habitual es encontrar casos como:",
          bullets: [
            "Intoxicacion alimentaria",
            "Resbalones en calles con hielo",
            "Accidentes de trafico menores",
            "Gripe fuerte o infecciones respiratorias",
            "Equipaje perdido o vuelos retrasados",
            "Son problemas normales de viaje que pueden ocurrir en cualquier destino.",
          ],
        },
        {
          title: "Cuanto cuesta el seguro de viaje para Corea del Sur",
          icon: "wallet",
          emphasis: "El seguro de viaje suele ser asequible.",
          body: "Para viajeros sanos de 20 a 40 anos:",
          bullets: [
            "1 semana: alrededor de 15-40 USD",
            "2 semanas: alrededor de 30-70 USD",
            "El precio varia segun la edad, el pais de residencia, la duracion del viaje y el nivel de cobertura.",
          ],
        },
        {
          title: "Reflexion final",
          icon: "spark",
          emphasis:
            "Corea del Sur es un destino seguro y muy desarrollado.",
          body:
            "La mayoria de los viajeros nunca llegan a usar su seguro de viaje, y eso es lo ideal. El seguro es simplemente una forma de reducir el riesgo financiero. Para muchos visitantes, el costo es pequeno en comparacion con el presupuesto total del viaje y aporta tranquilidad desde la llegada hasta la salida.",
        },
      ],
    },
  },
  "/before-you-go/korea-entry-requirements": {
    es: {
      title:
        "K-ETA y proceso de inmigracion: guia oficial de entrada a Corea (Actualizacion 2026)",
      description:
        "Empieza aqui si necesitas certeza sobre K-ETA, la e-Arrival Card o los pasos exactos de llegada que aplican a tu pasaporte.",
      quickAnswer:
        "Los requisitos de entrada a Corea del Sur en 2026 dependen de tu nacionalidad (pasaporte) y de las fechas de tu viaje. Algunos viajeros necesitan una K-ETA, mientras que otros estan temporalmente exentos segun su nacionalidad. Debes confirmar tu situacion antes de viajar. La mayoria de los viajeros deben presentar una tarjeta de llegada electronica (e-Arrival Card) antes de entrar, salvo en casos de exencion (por ejemplo, personas con K-ETA valida o residentes registrados). Si tu viaje incluye varias ciudades, prepara una direccion principal de alojamiento y los detalles completos de tu itinerario para inmigracion. Antes de embarcar, revisa las notificaciones oficiales y asegurate de que todos tus documentos de entrada esten correctos y actualizados.",
      content: [
        {
          title: "Resumen rapido",
          body: "Entrar en Corea implica dos etapas:",
          subsections: [
            {
              title: "",
              plainTitle: true,
              bullets: [
                "Antes de viajar - Verifica el estado de visado y si necesitas K-ETA.",
                "Despues de aterrizar - Sigue el procedimiento oficial de entrada en el aeropuerto.",
              ],
            },
            {
              title: "El orden correcto al llegar al aeropuerto es:",
              plainTitle: true,
              bullets: [
                "Llegada -> (Si aplica) Cuarentena -> Inmigracion -> Recogida de equipaje -> Aduanas -> Sala de llegadas",
              ],
            },
          ],
          tail: "Comprender esta secuencia evita confusion y retrasos.",
        },
        {
          title: "Condicion: elige el caso que se ajusta a tu viaje",
          body:
            "Usa esta rama antes de completar cualquier formulario para que tu configuracion de entrada a Corea coincida con tu plan real de viaje.",
          subsections: [
            {
              title: "Viajero primerizo + estancia en una sola ciudad",
              bullets: [
                "Confirma primero tu estado de K-ETA, luego verifica si necesitas enviar una e-Arrival Card.",
                "Prepara una direccion de alojamiento, un numero de contacto y tu plan basico de llegada.",
                "Configura tu SIM o eSIM antes de salir para que el traslado desde el aeropuerto y la navegacion sean fluidos al aterrizar.",
              ],
            },
            {
              title: "Viajero primerizo + estancia en varias ciudades",
              bullets: [
                "Sigue las mismas comprobaciones de entrada: estado de K-ETA, requisito de e-Arrival Card y proceso de llegada.",
                "Usa una direccion principal de alojamiento para tu declaracion y conserva accesible tu itinerario completo.",
                "Si tu itinerario es ajustado o incluye reservas prepagadas, revisa opciones de seguro de viaje antes de salir.",
              ],
            },
            {
              title: "Viajero recurrente + estancia en una sola ciudad",
              bullets: [
                "No te bases en viajes anteriores. Reconfirma las reglas de K-ETA y e-Arrival Card segun tus fechas actuales.",
                "Si tu pasaporte cambio, tratalo como una solicitud nueva y verifica todos los datos.",
                "Configura SIM o eSIM si necesitas acceso inmediato a apps de transporte, reservas o documentos al llegar.",
              ],
            },
            {
              title: "Viajero recurrente + estancia en varias ciudades",
              bullets: [
                "Reconfirma primero todos los requisitos de entrada a Corea, luego prepara una direccion principal de alojamiento y tu ruta completa.",
                "Ten listos los comprobantes de reserva y el detalle de transporte de continuidad por si inmigracion lo solicita.",
                "Si retrasos, cancelaciones o incidencias de equipaje afectarian tu presupuesto, compara opciones de seguro de viaje antes de salir.",
              ],
            },
            {
              title: "Idea clave",
              plainTitle: true,
              tail:
                "Los requisitos legales de entrada a Corea del Sur dependen de tu nacionalidad y tus fechas de viaje, pero la estructura de tu itinerario determina que informacion y documentos debes preparar con antelacion.",
            },
          ],
        },
        {
          title: "Parte 1: K-ETA (Autorizacion previa al viaje)",
          body: "Las reglas de K-ETA determinan si se requiere autorizacion previa al viaje.",
          subsections: [
            {
              title: "Que es K-ETA",
              bullets: [
                "Un sistema electronico de autorizacion de viaje",
                "Aplica a ciertos titulares de pasaporte exentos de visado",
                "No es un visado",
                "No garantiza la entrada (la decision final la toman los oficiales de inmigracion)",
              ],
            },
            {
              title: "Cifras oficiales clave (a fecha de 2026)",
              bullets: [
                "Tarifa de solicitud: 10,000 KRW",
                "Pago no reembolsable, incluso si se deniega",
                "Tiempo de proceso: normalmente dentro de 72 horas (puede superar ese plazo en periodos de alta demanda)",
                "Validez: 3 anos, o hasta el vencimiento del pasaporte (lo que ocurra primero)",
                "No hay tramite urgente disponible",
              ],
            },
            {
              title: "Exencion temporal de K-ETA",
              lead: ["(Valida hasta 2026-12-31)"],
              bullets: [
                "Esta exencion solo aplica al requisito de solicitud de K-ETA",
                "No todos los paises estan exentos",
                "La elegibilidad depende de la nacionalidad",
                "Los viajeros elegibles no estan obligados a solicitarla durante el periodo de exencion",
                "Los viajeros exentos aun pueden solicitarla voluntariamente",
              ],
              tail:
                "Esta medida temporal no elimina requisitos de visado ni la inspeccion migratoria.",
            },
            {
              title: "Regla aparte:",
              plainTitle: true,
              lead: [
                "Los viajeros que ya tienen una K-ETA valida normalmente no necesitan presentar una tarjeta de llegada en papel por separado.",
                "Esto no forma parte de la exencion temporal y opera bajo la politica estandar de entrada.",
              ],
              tail:
                "Confirma siempre el estado aplicable a tu nacionalidad en fuentes oficiales antes de salir.",
            },
            {
              title: "Advertencia: sitios no oficiales de K-ETA",
              lead: ["Usa solo:"],
              bullets: [
                "Sitio web oficial del gobierno",
                "Aplicacion oficial del gobierno",
              ],
              tail: "Sitios no oficiales pueden cobrar comisiones de servicio excesivas.",
            },
          ],
        },
        {
          title: "Parte 2: e-Arrival Card (Declaracion electronica de llegada)",
          body: "El requisito de declaracion de llegada depende de tu condicion de viajero.",
          subsections: [
            {
              title: "Reglas clave (a fecha de 2026)",
              bullets: [
                "Gratuita",
                "Puede enviarse desde 3 dias antes de la llegada (incluido el dia de llegada, hora de Corea)",
                "Se invalida si no entras en Corea dentro de las 72 horas posteriores al envio",
              ],
            },
            {
              title: "Quienes suelen estar exentos",
              bullets: [
                "Residentes extranjeros registrados en Corea",
                "Titulares de K-ETA valida",
                "Titulares de visado electronico grupal",
                "Tripulacion aerea",
              ],
              tail: "Verifica siempre tu estado antes del viaje.",
            },
            {
              title: "Informacion requerida",
              bullets: [
                "Datos del pasaporte",
                "Correo electronico",
                "Una direccion representativa de alojamiento en Corea",
                "Numero de contacto",
                "Numero de vuelo",
                "Fechas de llegada y salida",
              ],
              tail:
                "Si te alojas en varias ubicaciones, normalmente basta con indicar un alojamiento principal.",
            },
          ],
        },
        {
          title: "Parte 3: Proceso de inmigracion en el aeropuerto (orden correcto)",
          body:
            "El flujo estandar de llegada en aeropuertos internacionales de Corea es:",
          subsections: [
            {
              title:
                "Llegada -> (Si aplica) Cuarentena -> Inmigracion -> Recogida de equipaje -> Aduanas -> Sala de llegadas",
              plainTitle: true,
            },
            {
              title: "1 Llegada",
              bullets: [
                "Sigue las senales de Arrivals",
                "En algunos terminales puede ser necesario usar tren lanzadera",
                "Avanza hacia Inmigracion",
              ],
            },
            {
              title: "2 Cuarentena (si aplica)",
              lead: ["Puede aplicar segun:"],
              bullets: [
                "Viajes recientes a regiones designadas de control sanitario",
                "Sintomas",
                "Politica sanitaria vigente",
              ],
              tail:
                "Q-CODE o un reporte sanitario pueden ser requeridos bajo condiciones especificas. Q-CODE no se exige de forma universal. El incumplimiento cuando aplica puede derivar en sanciones segun la ley coreana de cuarentena.",
            },
            {
              title: "3 Inmigracion (control de pasaporte)",
              bullets: [
                "Presenta el pasaporte",
                "Entrega datos biometricos si se requieren",
                "Responde preguntas basicas de viaje",
                "La aprobacion final de entrada se decide en esta etapa.",
                "Incluso con K-ETA aprobada, la entrada no esta garantizada.",
              ],
            },
            {
              title: "4 Recogida de equipaje",
              bullets: [
                "Revisa los monitores para confirmar el numero de cinta",
                "Recoge el equipaje",
              ],
            },
            {
              title: "5 Aduanas",
              lead: ["Elige un carril:"],
              bullets: [
                "Nada que declarar",
                "Bienes para declarar",
              ],
              tail:
                "Viajeros con bienes restringidos o cantidades altas de divisa deben declarar segun corresponda. Las familias pueden presentar una declaracion aduanera por unidad familiar (segun la politica vigente).",
            },
            {
              title: "6 Sala de llegadas",
              bullets: [
                "Sales a la sala publica de llegadas",
                "Accedes a transporte, mostradores de SIM, cambio de moneda y zonas de recogida",
              ],
            },
          ],
        },
        {
          title: "Tiempo de proceso habitual",
          body: "En condiciones normales:",
          bullets: [
            "Inmigracion: 10-30 minutos",
            "Equipaje y aduanas: 10-20 minutos",
          ],
          tail: "Los tiempos pueden aumentar en temporadas de alta demanda.",
        },
        {
          title: "Fuentes oficiales",
          body: "Usa fuentes oficiales antes del check-in final y el embarque.",
          subsections: [
            {
              title: "Ultima revision: 2026-03-29 (KST)",
              plainTitle: true,
              bullets: [
                "Portal oficial K-ETA: https://www.k-eta.go.kr/portal/newapply/index.do?locale=ES",
                "Portal oficial de e-Arrival Card: https://www.e-arrivalcard.go.kr/portal/main/index.do?locale=EN",
                "Servicio de Inmigracion de Corea: https://www.immigration.go.kr/immigration_eng/index.do",
                "Procedimientos de llegada del Aeropuerto Internacional de Incheon: https://www.airport.kr/ap_en/1439/subview.do",
              ],
            },
          ],
        },
        {
          title: "Recordatorios clave",
          body: "K-ETA no es un visado.",
          bullets: [
            "La decision de entrada se toma en inmigracion.",
            "El envio de e-Arrival Card es sensible al tiempo.",
            "Los requisitos de control sanitario son condicionales.",
            "Verifica siempre fuentes oficiales antes de viajar.",
          ],
        },
        {
          title: "Consejo final",
          body: "Haz esta verificacion rapida antes de embarcar tu vuelo:",
          subsections: [
            {
              title: "1 Confirma estado de K-ETA",
              tail:
                "Verifica si K-ETA aplica a tu nacionalidad y fechas de viaje.",
            },
            {
              title: "2 Verifica requisitos de e-Arrival Card",
              tail:
                "Enviala solo si aplica y dentro de la ventana valida de envio.",
            },
            {
              title: "3 Prepara datos basicos de llegada",
              tail:
                "Ten listos pasaporte, direccion del primer alojamiento y datos de vuelo por si inmigracion los solicita.",
            },
          ],
          tail:
            "La mayoria de los problemas de entrada ocurren antes de embarcar, no despues de llegar. Las cifras clave de esta guia siguen la orientacion oficial de inmigracion de 2026. Como las politicas de entrada pueden cambiar, lo mas seguro es volver a comprobar avisos oficiales del gobierno dentro de las 24 horas previas a la salida.",
        },
      ],
    },
  },
};

export const localizedContentByPathDraft = localizedContentByPath;

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
        "Start with three simple filters: how long you're staying, how often you're willing to change hotels, and how much long transit days drain your energy. Those three factors usually determine whether your Korea plan should be compact, balanced, or slower-paced.",
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
        "Empieza con tres filtros simples: cuanto tiempo te quedas, con que frecuencia aceptas cambiar de hotel y cuanto te drenan los dias largos de traslado. Esos tres factores suelen definir si tu plan por Corea debe ser compacto, equilibrado o mas pausado.",
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
            "2 semanas en Corea encaja si quieres Seul, una ciudad adicional y una region mas lenta.",
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
            "Si es tu primer viaje a Corea, arma tu itinerario alrededor de Seul y agrega solo un destino de contraste.",
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
  "/choose-a-city": {
    es: {
      title: "Elige una ciudad",
      description: "Elige la ciudad que mejor encaja con tu forma de viajar.",
      quickAnswer:
        "Primero decide por energia, friccion de transporte y temporada; luego compara el tipo de ritmo que quieres sostener cada dia.",
      content: [],
      children: {
        seoul: { title: "Seul" },
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
  "/before-you-go": {
    en: {
      title: "Before You Go",
      description:
        "Lock in entry rules, arrival connectivity, and risk coverage before departure.",
      quickAnswer:
        "Use this hub as a final departure check: confirm entry rules first, secure data for landing day second, and decide whether insurance meaningfully reduces the financial risk of your trip.",
      content: [
        {
          title: "🛂 Start with entry certainty",
          icon: "passport",
          emphasis:
            "If your boarding eligibility is unclear, this is the first page to open.",
          body:
            "K-ETA, visa status, and e-Arrival Card rules decide whether your trip starts smoothly or turns into a last-minute problem at check-in.",
          bullets: [
            "Open Korea Entry Requirements first if you are not fully sure whether your passport still qualifies for visa-free entry or a temporary exemption.",
            "Use it if you need the exact airport arrival order instead of a generic immigration summary.",
            "This removes the highest-stakes risk in this hub: being delayed before or after boarding.",
          ],
        },
        {
          title: "📶 Decide how you will land connected",
          icon: "sim",
          emphasis:
            "SIM or eSIM is not a gadget choice. It is an arrival-friction choice.",
          body:
            "Mobile data matters most in your first hour after landing, when maps, airport pickup, translation, and payment apps become practical rather than optional.",
          bullets: [
            "Start with SIM or eSIM if you arrive late, travel solo, or rely on navigation immediately after exit.",
            "This is the highest-ROI page for travelers who want a lower-friction arrival and fewer transport mistakes.",
            "Choose before departure, not while standing in an airport queue without data.",
          ],
        },
        {
          title: "🛡️ Buy insurance only when the downside matters",
          icon: "shield",
          emphasis:
            "Insurance is about budget protection, not checking a box.",
          body:
            "For many travelers it stays optional, but the decision changes if one clinic visit, missed connection, or lost bag would materially disrupt your trip budget.",
          bullets: [
            "Open Travel Insurance first if you are traveling in winter, planning outdoor activities, or carrying a tight non-refundable itinerary.",
            "Skip panic-buying and compare realistic medical costs, exclusions, and claim limits first.",
            "This page is for travelers who need to cap downside risk, not for everyone by default.",
          ],
        },
        {
          title: "⚠️ What creates last-minute problems",
          icon: "alert",
          body:
            "Most departure stress comes from leaving one high-friction decision unresolved.",
          bullets: [
            "Assuming visa-free travel means no other pre-departure step applies.",
            "Waiting until arrival day to solve connectivity.",
            "Buying insurance without checking exclusions, then assuming you are covered.",
            "Not rechecking official updates in the final 24 hours before departure.",
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
        "Usa este hub como tu revision final antes de partir: confirma primero las reglas de entrada, resuelve despues tu conexion movil para el dia de llegada y decide al final si el seguro reduce de verdad el riesgo financiero de tu viaje.",
      content: [
        {
          title: "🛂 Empieza por la certeza de entrada",
          icon: "passport",
          emphasis:
            "Si no tienes claro si puedes abordar sin problemas, esta es la primera pagina que debes abrir.",
          body:
            "Las reglas de K-ETA, el estado de visado y la e-Arrival Card definen si tu viaje arranca sin friccion o se convierte en un problema de ultimo minuto en el check-in.",
          bullets: [
            "Abre primero Requisitos de entrada a Corea si no tienes totalmente claro si tu pasaporte sigue entrando en visado exento o en una exencion temporal.",
            "Usala si necesitas el orden exacto de llegada en el aeropuerto, no un resumen generico de inmigracion.",
            "Esto elimina el riesgo mas delicado de este hub: retrasarte antes de abordar o justo al entrar.",
          ],
        },
        {
          title: "📶 Decide como vas a aterrizar con conexion",
          icon: "sim",
          emphasis:
            "SIM o eSIM no es una decision de gadget. Es una decision de friccion al llegar.",
          body:
            "Los datos moviles importan mas en tu primera hora tras aterrizar, cuando mapas, recogida en aeropuerto, traduccion y apps de pago pasan de ser utiles a ser practicos de verdad.",
          bullets: [
            "Empieza por SIM o eSIM si llegas tarde, viajas solo o dependes de la navegacion apenas sales.",
            "Es la pagina de mayor retorno para quien quiere una llegada con menos friccion y menos errores de transporte.",
            "Elige antes de salir, no mientras haces fila en el aeropuerto sin datos.",
          ],
        },
        {
          title: "🛡️ Compra seguro solo si el coste de caer mal te importa",
          icon: "shield",
          emphasis:
            "El seguro trata de proteger presupuesto, no de marcar una casilla.",
          body:
            "Para muchos viajeros sigue siendo opcional, pero la decision cambia si una consulta medica, una conexion perdida o una maleta extraviada alterarian de verdad tu presupuesto.",
          bullets: [
            "Abre primero Seguro de viaje si viajas en invierno, planeas actividades al aire libre o llevas un itinerario ajustado y no reembolsable.",
            "Evita comprar por panico y compara antes costes medicos reales, exclusiones y limites de cobertura.",
            "Esta pagina sirve a quien necesita limitar el riesgo a la baja, no a todo el mundo por defecto.",
          ],
        },
        {
          title: "⚠️ Lo que crea problemas de ultimo minuto",
          icon: "alert",
          body:
            "Casi todo el estres antes de salir viene de dejar una decision de alta friccion sin resolver.",
          bullets: [
            "Asumir que viajar sin visado significa que no aplica ningun otro paso previo.",
            "Esperar al dia de llegada para resolver la conectividad.",
            "Comprar seguro sin revisar exclusiones y dar por hecho que ya estas cubierto.",
            "No volver a revisar actualizaciones oficiales en las 24 horas previas a la salida.",
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
    es: {
      title: "Necesito seguro de viaje para Corea del Sur? (Guia 2026)",
      description:
        "Ideal para quien podria resentir una factura medica, un retraso o una maleta perdida y quiere comparar riesgo real.",
      quickAnswer:
        "El seguro de viaje no es obligatorio bajo viaje sin visado o K-ETA, pero muchos viajeros contratan un plan basico porque la atencion medica no es gratuita para turistas.",
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
            "Urgencias en Seul: 300-800 USD",
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
        "Comprueba antes de salir si necesitas K-ETA y e-Arrival Card, y sigue despues el orden oficial de llegada en los aeropuertos coreanos para evitar retrasos.",
      content: [
        {
          title: "🧭 Vista rapida",
          body: "Entrar en Corea implica dos etapas:",
          subsections: [
            {
              title: "",
              plainTitle: true,
              bullets: [
                "Antes de salir - Revisa tu situacion de visado y si necesitas K-ETA.",
                "Despues de aterrizar - Sigue el procedimiento oficial de llegada en el aeropuerto.",
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
          tail:
            "Entender esta secuencia evita confusion y retrasos innecesarios.",
        },
        {
          title: "🛂 Parte 1: K-ETA (autorizacion previa al viaje)",
          body:
            "Las reglas de K-ETA determinan si necesitas una autorizacion antes de viajar.",
          subsections: [
            {
              title: "📘 Que es K-ETA",
              bullets: [
                "Un sistema electronico de autorizacion de viaje",
                "Aplica a ciertos titulares de pasaporte exentos de visado",
                "No es un visado",
                "No garantiza la entrada (la decision final depende del oficial de inmigracion)",
              ],
            },
            {
              title: "📊 Datos clave oficiales (a fecha de 2026)",
              bullets: [
                "Tarifa de solicitud: ₩10,000",
                "Pago no reembolsable, incluso si se rechaza",
                "Tiempo de proceso: normalmente dentro de 72 horas (puede tardar mas en temporada alta)",
                "Validez: 3 anos o hasta el vencimiento del pasaporte, lo que ocurra primero",
                "No existe tramite urgente",
              ],
            },
            {
              title: "🗓️ Exencion temporal de K-ETA",
              lead: ["(Valida hasta 2026-12-31)"],
              bullets: [
                "Esta exencion solo afecta al requisito de solicitar K-ETA",
                "No todos los paises estan exentos",
                "La elegibilidad depende de la nacionalidad",
                "Los viajeros elegibles no estan obligados a solicitarla durante el periodo de exencion",
                "Los viajeros exentos aun pueden solicitarla de forma voluntaria",
                "Esta medida temporal no elimina requisitos de visado ni la inspeccion migratoria.",
              ],
            },
            {
              title: "⚠️ Regla aparte:",
              plainTitle: true,
              lead: [
                "Los viajeros que ya tienen una K-ETA valida normalmente no necesitan presentar una tarjeta de llegada en papel por separado.",
                "Esto no forma parte de la exencion temporal y opera bajo la politica estandar de entrada.",
              ],
              tail:
                "Confirma siempre tu situacion segun tu nacionalidad en fuentes oficiales antes de salir.",
            },
            {
              title: "🚨 Aviso sobre paginas no oficiales de K-ETA",
              lead: ["Usa solo:"],
              bullets: [
                "La web oficial del gobierno",
                "La app oficial del gobierno",
              ],
              tail:
                "Los sitios no oficiales pueden cobrar comisiones de servicio excesivas.",
            },
          ],
        },
        {
          title: "🧾 Parte 2: e-Arrival Card (declaracion electronica de llegada)",
          body:
            "Los requisitos de declaracion de llegada dependen de tu situacion como viajero.",
          subsections: [
            {
              title: "📌 Reglas clave (a fecha de 2026)",
              bullets: [
                "Es gratuita",
                "Puede enviarse desde 3 dias antes de la llegada (incluido el dia de llegada, hora de Corea)",
                "Pierde validez si no entras en Corea dentro de las 72 horas posteriores al envio",
              ],
            },
            {
              title: "👥 Quien suele estar exento",
              bullets: [
                "Residentes extranjeros registrados en Corea",
                "Titulares de una K-ETA valida",
                "Titulares de visado electronico grupal",
                "Tripulacion aerea",
              ],
              tail:
                "Confirma siempre tu situacion concreta antes de viajar.",
            },
            {
              title: "🗂️ Informacion necesaria",
              bullets: [
                "Datos del pasaporte",
                "Correo electronico",
                "Una direccion principal de alojamiento en Corea",
                "Numero de contacto",
                "Numero de vuelo",
                "Fechas de llegada y salida",
              ],
              tail:
                "Si te alojas en varios lugares, normalmente basta con indicar un alojamiento principal.",
            },
          ],
        },
        {
          title: "🛬 Parte 3: proceso de inmigracion en el aeropuerto (orden correcto)",
          body:
            "El flujo estandar de llegada en los aeropuertos internacionales de Corea es:",
          subsections: [
            {
              title:
                "Llegada -> (Si aplica) Cuarentena -> Inmigracion -> Recogida de equipaje -> Aduanas -> Sala de llegadas",
              plainTitle: true,
            },
            {
              title: "1️⃣ Llegada",
              bullets: [
                "Sigue las senales hacia Arrivals",
                "En algunos terminales puede hacer falta usar un tren lanzadera",
                "Avanza hacia Inmigracion",
              ],
            },
            {
              title: "2️⃣ Cuarentena (si aplica)",
              lead: ["Puede aplicarse segun:"],
              bullets: [
                "Viajes recientes a regiones bajo control sanitario designado",
                "Sintomas",
                "La politica sanitaria vigente",
              ],
              tail:
                "Q-CODE o un reporte sanitario pueden ser necesarios en condiciones concretas. Q-CODE no se exige de forma universal. Incumplirlo cuando aplica puede acarrear sanciones segun la ley coreana de cuarentena.",
            },
            {
              title: "3️⃣ Inmigracion (control de pasaporte)",
              bullets: [
                "Presenta el pasaporte",
                "Entrega datos biometricos si se requieren",
                "Responde preguntas basicas del viaje",
                "La aprobacion final de entrada se decide en esta etapa.",
                "Incluso con K-ETA aprobada, la entrada no esta garantizada.",
              ],
            },
            {
              title: "4️⃣ Recogida de equipaje",
              bullets: [
                "Revisa los monitores para ver la cinta asignada",
                "Recoge tu equipaje",
              ],
            },
            {
              title: "5️⃣ Aduanas",
              lead: ["Elige un carril:"],
              bullets: [
                "Nada que declarar",
                "Mercancias para declarar",
              ],
              tail:
                "Los viajeros que lleven bienes restringidos o grandes cantidades de dinero deben declarar segun corresponda. Las familias pueden presentar una sola declaracion aduanera por unidad familiar, segun la politica vigente.",
            },
            {
              title: "6️⃣ Sala de llegadas",
              bullets: [
                "Sales a la sala publica de llegadas",
                "Accedes a transporte, mostradores SIM, cambio de divisa y zonas de recogida",
              ],
            },
          ],
        },
        {
          title: "⏱️ Tiempo de proceso habitual",
          body: "En condiciones normales:",
          bullets: [
            "Inmigracion: 10-30 minutos",
            "Equipaje y aduanas: 10-20 minutos",
          ],
          tail:
            "Los tiempos pueden aumentar en temporadas de viaje con mucha demanda.",
        },
        {
          title: "🧠 Recordatorios clave",
          body: "K-ETA no es un visado.",
          bullets: [
            "La entrada se decide en inmigracion.",
            "La e-Arrival Card tiene una ventana de tiempo limitada.",
            "Los requisitos sanitarios dependen del contexto.",
            "Verifica siempre fuentes oficiales antes de viajar.",
          ],
        },
        {
          title: "✅ Consejo final",
          body: "Preparate con precision antes de salir.",
          bullets: [
            "Sigue el orden correcto del aeropuerto despues de aterrizar.",
          ],
          tail:
            "La mayoria de los problemas de entrada ocurren antes de abordar, no despues de llegar. Las cifras clave de esta guia se basan en orientacion oficial de inmigracion de 2026 y pueden cambiar. Las politicas de exencion y los requisitos sanitarios pueden actualizarse. Confirma siempre los avisos oficiales del gobierno antes de salir.",
        },
      ],
    },
  },
};

export const localizedContentByPathDraft = localizedContentByPath;

export type PageType = "hub" | "actionLeaf" | "policyLeaf";

export type PageBlockOverrides = {
  showHubFaq?: boolean;
  showLeafFaq?: boolean;
  showChecklist?: boolean;
  showNextDecision?: boolean;
};

export type TreeNode = {
  title: string;
  slug: string;
  description?: string;
  quickAnswer?: string;
  updatedIso?: string;
  icon?: string;
  image?: string;
  pageType?: PageType;
  overrides?: PageBlockOverrides;
  content?: {
    title: string;
    body: string;
    bodyLead?: boolean;
    bullets?: string[];
    subsections?: {
      title: string;
      lead?: string[];
      bullets?: string[];
      tail?: string;
      plainTitle?: boolean;
    }[];
    tail?: string;
    icon?: string;
    emphasis?: string;
  }[];
  children?: TreeNode[];
};

export const siteTree: TreeNode = {
  title: "Home",
  slug: "",
  description:
    "A practical, beginner-friendly guide for travelers visiting Korea for the first or second time.",
  image: "basics",
  children: [
    {
      title: "Plan Your Trip",
      slug: "plan-your-trip",
      icon: "calendar",
      image: "/Plan%20Your%20Trip.webp",
      pageType: "hub",
      overrides: {
        showHubFaq: false,
      },
      description: "Plan your days realistically, without overpacking your schedule.",
      quickAnswer:
        "Start with three simple filters: how long you're staying, how often you're willing to change hotels, and how much long travel days drain your energy. These three factors usually determine whether your Korea trip should be compact, balanced, or slower-paced.",
      content: [
        {
          title: "🗺️ Start with one decision question",
          icon: "compass",
          emphasis: "Do you want to see more places - or protect your time and energy between moves?",
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
      children: [
        {
          title: "7 Days in Korea",
          slug: "7-days-in-korea",
          icon: "calendar",
          image: "planning",
          description: "A one-week travel plan that actually works.",
          quickAnswer:
            "This page helps you build a balanced 7-day Korea trip with two bases, realistic pacing, and minimal hotel changes.",
          content: [
            {
              title: "🌟 Introduction",
              emphasis: "Seven days is short. That is not a problem.",
              body:
                "You cannot see all of Korea in one week. The goal is not to see everything. The goal is to travel well. A strong 7-day trip is built on structure, not speed.",
            },
            {
              title: "🎯 The Decision That Saves Your Trip",
              emphasis: "Core Principle",
              body:
                "Choose two places. Not three. Many first-time visitors try to fit Seoul, Busan, and Jeju into one week. On a map, it looks efficient. In practice, it creates repeated packing, transfer days, and reduced exploration time. In seven days, every move costs you part of the experience.",
            },
            {
              title: "Recommended Structure",
              body:
                "The structure that works most consistently:",
              bullets: [
                "One main city",
                "One contrast destination",
                "This creates depth without exhaustion.",
              ],
            },
            {
              title: "🏙️ Days 1–4: Seoul (Stay in One Hotel)",
              emphasis: "Why Start in Seoul",
              body:
                "Seoul is the most practical starting point for international travelers. Stay in one neighborhood for four nights. Move around the city, not your suitcase. Public transportation is extensive and easy to use. Changing hotels within Seoul rarely improves your trip. Seoul offers:",
              bullets: [
                "Direct airport rail connection from Incheon (AREX)",
                "Clear English signage",
                "Reliable subway coverage",
                "Wide accommodation choices",
                "Easy access to day trips",
              ],
            },
            {
              title: "📍 Practical Areas to Stay",
              emphasis: "Choose one base and remain there.",
              body:
                "Pick one. Stay there. Explore outward.",
              bullets: [
                "Myeongdong - Central and convenient",
                "Hongdae - Younger atmosphere and nightlife",
                "Insadong - Traditional streets and historic surroundings",
                "Gangnam - Modern and spacious",
              ],
            },
            {
              title: "🗺️ What Four Days Can Realistically Include",
              emphasis: "Plan by area, not by minute.",
              body:
                "Four days allows exploration at a balanced pace. You do not need hour-by-hour scheduling.",
              bullets: [
                "One day focused on historic palaces and traditional neighborhoods",
                "One day in a modern shopping and dining district",
                "One evening dedicated to street food",
                "One organized day trip (such as the DMZ or a nearby city)",
                "Seoul rewards structured flexibility.",
              ],
            },
            {
              title: "🧭 Days 5–7: Choose One Contrast Destination",
              emphasis: "After Seoul, select one contrasting environment.",
              body:
                "The two most practical options are Busan and Jeju Island. Including both within seven days usually reduces overall enjoyment due to travel time.",
            },
            {
              title: "🌊 Option 1: Busan",
              emphasis: "Overview",
              body:
                "Busan combines city energy with coastal scenery.",
            },
            {
              title: "Option 1-1: Why Choose Busan",
              body:
                "Busan works well if you want:",
              bullets: [
                "Ocean views within a city setting",
                "Beach access without renting a car",
                "A relaxed atmosphere with urban convenience",
              ],
            },
            {
              title: "Option 1-2: Practical Considerations",
              body:
                "Keep these logistics in mind:",
              bullets: [
                "High-speed KTX from Seoul: about 2.5 hours",
                "One-way fare: roughly $45-50",
                "Major areas accessible by public transport",
              ],
            },
            {
              title: "Option 1-3: Example Three-Day Flow",
              body:
                "A balanced 3-day Busan flow may look like this:",
              bullets: [
                "One beach-focused afternoon",
                "One seafood market and harbor exploration",
                "One cultural or scenic neighborhood visit",
                "Busan provides contrast without complicated logistics.",
              ],
            },
            {
              title: "🏝️ Option 2: Jeju Island",
              emphasis: "Overview",
              body:
                "Jeju offers natural landscapes and open space.",
            },
            {
              title: "Option 2-1: Why Choose Jeju",
              body:
                "Jeju is ideal if you prefer:",
              bullets: [
                "Volcanic landscapes",
                "Waterfalls and coastal cliffs",
                "Outdoor exploration",
                "A slower pace",
              ],
            },
            {
              title: "Option 2-2: Practical Realities",
              body:
                "These logistics matter:",
              bullets: [
                "Flight from Seoul: about 1 hour plus airport procedures",
                "Rental car strongly recommended",
                "Public transport limited outside main towns",
              ],
            },
            {
              title: "Option 2-3: Example Three-Day Structure",
              body:
                "A typical 3-day Jeju structure may include:",
              bullets: [
                "One coastal scenic drive",
                "One volcanic or hiking site",
                "One waterfall or cliff area",
                "Jeju works best for travelers comfortable driving abroad and planning flexible days.",
              ],
            },
            {
              title: "⚠️ What Usually Goes Wrong",
              emphasis: "More plans do not mean a better trip.",
              body: "Common first-time mistakes include:",
              bullets: [
                "Visiting three cities in one week",
                "Changing hotels every one or two nights",
                "Over-scheduling arrival day",
                "Ignoring jet lag",
                "Underestimating transfer time",
                "Efficiency improves experience quality.",
              ],
            },
            {
              title: "🚄 Transport Reality Check",
              emphasis: "Korea's transport system is efficient, but not instant.",
              body:
                "Every transfer day reduces sightseeing time. Plan transfer days as partial sightseeing days.",
              bullets: [
                "Approximate travel times:",
                "Incheon Airport to central Seoul: 45-60 minutes",
                "Seoul to Busan by KTX: about 2.5 hours",
                "Seoul to Jeju: 1 hour flight plus airport procedures",
              ],
            },
            {
              title: "💸 Budget Expectations (Rough Guide)",
              emphasis: "Frequent movement increases costs.",
              body:
                "The hidden cost of a one-week trip is usually over-moving, not meals.",
              bullets: [
                "Typical mid-range costs:",
                "Hotels: approximately $80-180 per night",
                "KTX one way: about $45-50",
                "Domestic flight to Jeju: varies by season",
                "Food: flexible, from street food to premium dining",
              ],
            },
            {
              title: "📝 Decide Structure First",
              emphasis: "Framework first. Details later.",
              body:
                "Before booking:",
              bullets: [
                "Choose two bases",
                "Allocate days (4 + 3 works well)",
                "Confirm transfer timing",
                "Book practical accommodation",
                "Structure determines experience.",
              ],
            },
            {
              title: "✅ When This Plan Works Best",
              emphasis: "This structure is ideal if:",
              body:
                "Seven days is short, but structured correctly, it is enough.",
              bullets: [
                "It is your first visit",
                "You prefer balance over speed",
                "You want depth without exhaustion",
                "You value comfort and flexibility",
              ],
            },
            {
              title: "Need Updated Information?",
              body:
                "Transport schedules and policies may change. Confirm official sources before final booking decisions.",
            },
            {
              title: "✨ Bottom Line",
              emphasis: "Balanced beats busy.",
              body:
                "Two bases. One clear structure. Minimal hotel changes. If you return home feeling rested instead of rushed, your 7-day Korea trip was structured correctly.",
            },
          ],
        },
        {
          title: "2 Weeks in Korea",
          slug: "2-weeks-in-korea",
          icon: "calendar",
          image: "planning",
          description: "How to see more without rushing.",
          quickAnswer:
            "This page helps you plan a two-week Korea trip with more variety and less stress.",
          content: [
            {
              title: "🌟 Introduction",
              emphasis: "Two weeks is the easiest way to enjoy Korea.",
              body:
                "With fourteen days, you have enough time to explore multiple regions without feeling rushed. You can see more than just highlights. You can slow down. You can stay longer in places that feel right. This guide focuses on structure, not filling every hour.",
            },
            {
              title: "💡 Why Two Weeks Works So Well",
              emphasis: "Core Idea",
              body: "With two weeks, you can:",
              bullets: [
                "Visit more than one region without constant transfers",
                "Add natural rest days",
                "Enjoy neighborhoods and food, not just major sights",
                "More time should mean deeper experiences, not more cities.",
              ],
            },
            {
              title: "🧭 The Simple Rule for Two Weeks",
              emphasis: "Planning Principle",
              body: "Think in three blocks.",
              bullets: [
                "Three regions.",
                "One main base per region.",
                "No backtracking.",
                "This keeps your route efficient and your energy stable.",
              ],
            },
            {
              title: "🏙️ First Block: Seoul (5–6 Days)",
              emphasis: "Why Seoul Deserves Time",
              body:
                "Seoul is more than a capital city. It is a collection of neighborhoods, each with its own character. Five to six days allows you to explore historic areas, modern districts, markets, and at least one day trip without rushing.",
            },
            {
              title: "🗺️ A Realistic Structure",
              body: "A balanced Seoul stay may include:",
              bullets: [
                "Two days focused on historic palaces and traditional neighborhoods",
                "One or two days exploring modern districts and shopping areas",
                "One evening dedicated to street food and night views",
                "One organized day trip outside the city",
                "One flexible day for slower exploration",
                "Staying in one hotel during this block keeps the experience smooth.",
              ],
            },
            {
              title: "🌊 Second Block: Busan (3–4 Days)",
              emphasis: "Why Add Busan",
              body:
                "Busan provides contrast. After Seoul, Busan offers coastal views, seafood markets, and a slower evening atmosphere. Three to four days usually feels right.",
            },
            {
              title: "📍 What to Expect",
              body: "A simple Busan structure may include:",
              bullets: [
                "A beach afternoon",
                "A seafood market or harbor visit",
                "A scenic or cultural neighborhood",
                "Relaxed evenings without strict scheduling",
                "The high-speed train from Seoul takes about 2.5 hours, making Busan a practical second region.",
              ],
            },
            {
              title: "🌿 Third Block: A Slower Region (3–4 Days)",
              emphasis: "Purpose of the Final Segment",
              body:
                "This final block should feel different and more relaxed. Choose based on your travel style. The goal of this third block is balance, not intensity.",
            },
            {
              title: "🏝️ Option 1: Jeju Island",
              body:
                "Jeju suits travelers who prefer nature and open landscapes. Volcanic terrain, waterfalls, and coastal drives define the experience. A rental car is typically recommended. Three to four days allows for scenic drives and outdoor exploration at a slower pace.",
            },
            {
              title: "🏛️ Option 2: Gyeongju",
              body:
                "Gyeongju is historic and calm. It works well for travelers who enjoy walking between heritage sites in a quieter setting.",
            },
            {
              title: "🏘️ Option 3: A Smaller Regional City",
              body:
                "Some travelers prefer finishing their trip in a smaller city with a more local atmosphere.",
            },
            {
              title: "⚠️ What Often Goes Wrong",
              emphasis: "Common Mistakes",
              body: "Even with two weeks, travelers sometimes:",
              bullets: [
                "Add too many cities",
                "Change hotels frequently",
                "Travel back and forth between regions",
                "Schedule every day tightly",
                "Two weeks works best when movement is limited and stays are longer.",
              ],
            },
            {
              title: "🚄 Transport Reality",
              emphasis: "Practical Timing",
              body:
                "Korea's transport system is efficient, but frequent transfers reduce exploration time. Planning in regional blocks reduces unnecessary travel days.",
              bullets: [
                "Typical travel times:",
                "Seoul to Busan by high-speed train: about 2.5 hours",
                "Seoul to Jeju by flight: about 1 hour plus airport procedures",
                "Airport to central Seoul: roughly 45-60 minutes",
              ],
            },
            {
              title: "💸 Budget Expectations",
              emphasis: "General Range",
              body:
                "Costs vary by style and season, but frequent movement increases expenses. Longer stays in one place help control costs.",
              bullets: [
                "Typical mid-range estimates:",
                "Hotels: approximately $80-180 per night",
                "High-speed train: about $45-50 one way",
                "Flights to Jeju: seasonal variation",
                "Food: flexible based on preference",
              ],
            },
            {
              title: "📝 What You Do Not Need to Decide Immediately",
              body: "Two weeks allows flexibility. You do not need:",
              bullets: [
                "Detailed restaurant lists in advance",
                "Exact daily attraction schedules",
                "Hour-by-hour plans",
                "Set your regional structure first. Refine details later.",
              ],
            },
            {
              title: "✅ When This Plan Works Best",
              body: "This structure works well if:",
              bullets: [
                "It is your first visit",
                "You prefer balance over speed",
                "You value rest between travel days",
                "You want depth rather than constant movement",
                "Two weeks should feel full, not packed.",
              ],
            },
            {
              title: "🔎 Need Current Information?",
              body:
                "Transport schedules, seasonal events, and policies may change. Confirm official sources before final booking decisions.",
            },
            {
              title: "✨ Bottom Line",
              emphasis: "Full, not busy.",
              body:
                "Three regions. One base per region. No backtracking. If you finish your two weeks feeling relaxed rather than exhausted, your plan was structured correctly.",
            },
          ],
        },
        {
          title: "1 Month in Korea",
          slug: "1-month-in-korea",
          icon: "calendar",
          image: "planning",
          description: "Slow travel and long-stay ideas.",
          quickAnswer:
            "This page helps you decide how to slow down and enjoy Korea during a long stay.",
          content: [
            {
              title: "🌟 Introduction",
              emphasis: "A month in Korea is about living better, not seeing more.",
              body:
                "With four weeks, your trip stops feeling like a checklist and begins to feel like temporary daily life. This guide helps you structure a long stay comfortably, without turning it into an extended to-do list.",
            },
            {
              title: "🧠 The Key Mindset for a One-Month Trip",
              emphasis: "Core Perspective",
              body:
                "Stop thinking in days. Start thinking in weeks. Short trips reward tight scheduling. A month rewards rhythm and familiarity. A well-structured long stay usually includes:",
              bullets: [
                "Fewer cities",
                "Longer stays in each location",
                "Repeated daily routines",
                "Built-in flexibility",
                "The goal is comfort, not constant novelty.",
              ],
            },
            {
              title: "🧭 The Simple Rule That Works",
              emphasis: "Planning Principle",
              body:
                "Pick two or three home bases. Stay long enough in each location to recognize streets, cafes, and transport routes. Anything more than three bases in a month often creates unnecessary fatigue. Longer stays reduce decision stress and increase comfort.",
            },
            {
              title: "🏙️ Weeks 1–2: Seoul as Your Main Base",
              emphasis: "Why Seoul Works for Long Stays",
              body:
                "Seoul is the most practical long-stay base. Daily life is easy. Public transport is efficient. Neighborhoods are diverse and well connected. After two weeks, the city feels familiar rather than overwhelming.",
            },
            {
              title: "🗓️ How to Use Two Weeks in Seoul",
              body: "Fourteen days allows you to:",
              bullets: [
                "Explore historic districts at a relaxed pace",
                "Spend time in modern neighborhoods without rushing",
                "Revisit areas you enjoy",
                "Include one or two day trips",
                "Add genuine rest days",
                "The repetition of daily routines transforms the experience from tourism into temporary living.",
              ],
            },
            {
              title: "🌿 Week 3: Change the Rhythm",
              emphasis: "Purpose of the Third Week",
              body:
                "After two weeks in the capital, shift to space and slower surroundings. This week is about atmosphere rather than maximizing attractions.",
            },
            {
              title: "🌊 Option 1: Busan",
              body:
                "Busan offers sea views, coastal walks, and calmer evenings. It maintains city comfort while changing the setting. A week here might include:",
              bullets: [
                "Morning beach walks",
                "Casual market visits",
                "Neighborhood exploration",
                "Evenings without fixed plans",
                "The pace naturally softens.",
              ],
            },
            {
              title: "🏝️ Option 2: Jeju Island",
              body:
                "Jeju suits travelers who prefer open landscapes and quiet mornings. A rental car is typically recommended, allowing flexible exploration. This week can focus on:",
              bullets: [
                "Scenic coastal drives",
                "Light outdoor activities",
                "Unstructured afternoons",
                "The change in environment resets your energy.",
              ],
            },
            {
              title: "🧘 Week 4: Finish Somewhere Calmer",
              emphasis: "Ending the Trip Comfortably",
              body:
                "The final week should feel lighter than the previous ones. Choose a location that simplifies daily life and reduces stimulation.",
            },
            {
              title: "🏛️ Option 1: Gyeongju",
              body:
                "Gyeongju is compact and historic, suitable for relaxed walks and bike-friendly exploration.",
            },
            {
              title: "🍲 Option 2: Jeonju",
              body:
                "Jeonju offers food culture and traditional streets in a manageable setting.",
            },
            {
              title: "🏘️ Option 3: A Smaller Regional City",
              body:
                "Finishing in a lesser-known city often creates a more local and restorative final week. The purpose of this final block is comfort, not intensity.",
            },
            {
              title: "⚠️ What Often Goes Wrong",
              emphasis: "Common Long-Stay Mistakes",
              body:
                "Treating a one-month stay like a long tour leads to burnout. Even with four weeks, travelers sometimes:",
              bullets: [
                "Move cities too frequently",
                "Schedule sightseeing every day",
                "Treat each week as a separate short trip",
                "Change accommodations too often",
                "Stability improves experience quality.",
              ],
            },
            {
              title: "☕ Daily Life Considerations",
              emphasis: "Living, Not Touring",
              body:
                "Long stays introduce practical routines. You may begin to think about:",
              bullets: [
                "Laundry and grocery habits",
                "Regular cafes or workspaces",
                "Familiar transport routes",
                "Weekly neighborhood patterns",
                "These small routines shape the quality of a month more than additional attractions.",
              ],
            },
            {
              title: "💸 Budget Perspective",
              emphasis: "General Expectations",
              body:
                "Costs depend on lifestyle and season, but fewer transfers reduce overall expenses. Typical considerations include:",
              bullets: [
                "Accommodation rates varying by city and duration",
                "Transportation costs decreasing with fewer regional moves",
                "Flexible food spending based on daily habits",
                "The hidden cost of a long trip is excessive movement, not everyday living.",
              ],
            },
            {
              title: "📝 What You Do Not Need to Plan Early",
              emphasis: "Leave Space for Flexibility",
              body: "You do not need:",
              bullets: [
                "Detailed daily schedules",
                "A complete list of attractions",
                "Reservations for every evening",
                "Final decisions for every weekend",
                "Choose your main bases first. Allow plans to evolve naturally once you settle in.",
              ],
            },
            {
              title: "✅ When a One-Month Trip Works Best",
              body: "A month in Korea works well if:",
              bullets: [
                "You prefer slow travel",
                "You value routine alongside exploration",
                "You are comfortable with flexible planning",
                "You want to experience daily life",
                "The experience should gradually feel normal.",
              ],
            },
            {
              title: "🔎 Need Current Information?",
              body:
                "Accommodation policies, pricing, and long-stay options can change. Confirm up-to-date information through official or reliable sources before final bookings.",
            },
            {
              title: "✨ Bottom Line",
              emphasis: "Calm beats busy.",
              body:
                "Two or three home bases. Longer stays. Fewer transfers. A good month in Korea feels steady and comfortable. When your days begin to feel ordinary in a positive way, your long stay is structured correctly.",
            },
          ],
        },
        {
          title: "First Time in Korea",
          slug: "first-time-in-korea",
          icon: "compass",
          image: "basics",
          description: "What to expect and what to prepare.",
          quickAnswer:
            "This page helps you understand what really matters before your first trip to Korea.",
          content: [
            {
              title: "🌟 Introduction",
              emphasis: "Most travelers are surprised by how easy Korea feels.",
              body:
                "If this is your first visit, you do not need to feel anxious. Korea is modern, organized, and designed in a way that makes short-term travel manageable, even for visitors who do not speak the language. This guide explains what to expect and what to prepare - without overwhelming you.",
            },
            {
              title: "👀 What First-Time Visitors Usually Notice",
              emphasis: "Overall Impression",
              body:
                "You do not need survival skills. Many visitors expect confusion or difficulty. Instead, they often notice how structured and efficient daily life feels. Korea is:",
              bullets: [
                "Very safe, even late at night",
                "Clean and well organized",
                "Easy to navigate with reliable public transportation",
                "Full of convenience stores and food options almost everywhere",
                "The systems work consistently, which reduces stress for first-time travelers.",
              ],
            },
            {
              title: "🧩 What May Feel Unfamiliar at First",
              emphasis: "Small Adjustments, Not Real Problems",
              body:
                "The main challenges are minor and temporary. First-time visitors sometimes experience:",
              bullets: [
                "Language differences outside major tourist areas",
                "Uncertainty about which apps to use for maps or taxis",
                "Questions about daily routines, such as ordering food or sorting trash",
                "These adjustments usually become comfortable within a few days.",
              ],
            },
            {
              title: "🧳 What to Prepare Before Arrival",
              emphasis: "Keep It Practical",
              body:
                "Preparation does not need to be complicated. Before your flight, confirm that you have:",
              bullets: [
                "A phone that works internationally or a plan for connectivity",
                "At least one international payment method",
                "Your first-night accommodation details",
                "Basic knowledge of how to travel from the airport to your lodging",
                "A smooth first 24 hours reduces most travel anxiety.",
              ],
            },
            {
              title: "✨ What Surprises Many First-Timers",
              emphasis: "Easier Than Expected",
              body:
                "Several things tend to surprise visitors in a positive way:",
              bullets: [
                "Cards are accepted in most places",
                "Cash is still useful in small local shops or markets",
                "Taxis are safe and regulated",
                "Even when English is limited, people often try to assist",
                "Daily life may feel more straightforward than expected.",
              ],
            },
            {
              title: "⚠️ Common Mistakes to Avoid",
              emphasis: "Simple Preparation Makes a Difference",
              body: "Avoid these common errors:",
              bullets: [
                "Overplanning your first few days",
                "Relying only on taxis instead of learning public transport",
                "Expecting everything to function exactly like home",
                "Skipping preparation entirely because it appears easy",
                "Balance preparation with flexibility.",
              ],
            },
            {
              title: "📝 What You Do Not Need to Decide Yet",
              emphasis: "Leave Room for Flexibility",
              body: "You do not need:",
              bullets: [
                "A complete list of attractions",
                "Hour-by-hour daily schedules",
                "Restaurant reservations for every meal",
                "Some of the best experiences happen when plans remain flexible.",
              ],
            },
            {
              title: "🤝 Cultural Adjustment",
              emphasis: "Understanding Everyday Differences",
              body: "Certain differences may stand out:",
              bullets: [
                "Public spaces are generally orderly and quiet",
                "Interactions can feel efficient and direct",
                "Personal space is often respected",
                "These are cultural patterns, not obstacles.",
              ],
            },
            {
              title: "🛡️ Safety Perspective",
              emphasis: "A Secure Environment",
              body:
                "Korea is widely regarded as a safe destination for travelers. Late-night transportation is common. Urban areas are well lit. Lost items are frequently returned. Basic awareness is always important, but excessive concern is usually unnecessary.",
            },
            {
              title: "🔎 One Important Note",
              emphasis: "Confirm Before You Travel",
              body:
                "Entry procedures, airport processes, and regulations can change. Before departure, confirm essential information through official and up-to-date sources. Staying informed reduces uncertainty.",
            },
            {
              title: "✅ Bottom Line",
              emphasis: "Comfortable beats perfect.",
              body:
                "Your first trip to Korea does not need to be flawless. It needs to feel manageable and steady. If you arrive relaxed instead of nervous, you prepared correctly.",
            },
          ],
        },
        {
          title: "Been Here Before?",
          slug: "been-here-before",
          icon: "spark",
          image: "planning",
          description: "Ideas beyond the usual tourist route.",
          quickAnswer:
            "This page helps you find new ideas beyond the usual tourist route in Korea.",
          content: [
            {
              title: "🌟 Introduction",
              emphasis: "Not more sights. Better days.",
              body:
                "If this is not your first trip to Korea, you do not need another checklist. You need a better rhythm. A second visit is not about doing more. It is about traveling smarter and feeling more comfortable.",
            },
            {
              title: "🌿 How a Second Trip Should Feel",
              emphasis: "A Different Pace",
              body: "Your second trip should feel:",
              bullets: [
                "Slower",
                "Deeper",
                "Easier",
                "You already know how transportation works. You know what convenience stores look like. You understand the basics. That familiarity is an advantage.",
                "Use it.",
              ],
            },
            {
              title: "🧭 Instead of Adding Cities, Try This",
              emphasis: "Comfort Is Not Boring. It Is Efficient.",
              body:
                "Many returning travelers assume they must see completely new places every time. That is not necessary. Instead of adding more cities, consider:",
              bullets: [
                "Staying longer in one place",
                "Reducing city-to-city transfers",
                "Revisiting a favorite neighborhood properly",
                "Depth improves quality more than distance.",
              ],
            },
            {
              title: "❓ The Question That Changes Everything",
              emphasis: "How Do You Want Your Days to Feel?",
              body:
                "Before planning routes, ask yourself one question: How do I want my days to feel? Let that answer guide your structure - not social media trends. Maybe you want:",
              bullets: [
                "Relaxed mornings with no alarm",
                "Food-focused afternoons",
                "Walkable neighborhoods instead of long transport days",
                "Nature breaks between city stays",
                "Structure follows intention.",
              ],
            },
            {
              title: "✅ What Works Best on Repeat Visits",
              emphasis: "Less Movement, More Rhythm",
              body:
                "Second trips improve when movement decreases. Strategies that consistently work:",
              bullets: [
                "Stay two or three nights in smaller cities such as Gangneung, Jeonju, or Tongyeong",
                "Explore neighborhoods rather than only major landmarks",
                "Add one nature-focused day each week",
                "Keep at least two mornings unscheduled",
                "Flexibility creates space.",
              ],
            },
            {
              title: "🍁 Season Matters More Than New Places",
              emphasis: "Timing Changes Everything",
              body: "Consider:",
              bullets: [
                "On a repeat visit, timing often matters more than novelty. The same city can feel completely different in another season.",
                "Spring (April): Cherry blossoms and mild weather",
                "Autumn (October-November): Foliage and comfortable temperatures",
                "Summer: Coastal cities like Busan or Sokcho",
                "Winter: Food-focused trips, hot springs, and fewer crowds",
                "Returning at a different time of year can feel like visiting a new country.",
              ],
            },
            {
              title: "⚠️ What Usually Goes Wrong",
              emphasis: "Trying to Prove Something",
              body:
                "A second trip is not about proving you are a serious traveler. Even experienced visitors sometimes:",
              bullets: [
                "Repeat the exact same Seoul-Busan-Jeju route",
                "Add too many cities again",
                "Chase 'hidden gems' while rushing between them",
                "A calmer structure usually leads to a better experience.",
              ],
            },
            {
              title: "📝 What You Can Skip Without Regret",
              emphasis: "Fewer Checkmarks. Better Days.",
              body: "You do not need to:",
              bullets: [
                "Revisit every major attraction",
                "Follow updated 'Top 10' lists",
                "Compare this trip to your previous one",
                "Travel evolves with you. It does not need to repeat itself.",
              ],
            },
            {
              title: "🔎 One Quick Reminder",
              emphasis: "Details change.",
              body:
                "Even if you have been here before, always double-check practical information. Before traveling:",
              bullets: [
                "Reconfirm seasonal events",
                "Confirm opening hours",
                "Verify transport schedules",
                "Confirm festival dates",
                "Small updates prevent unnecessary stress.",
              ],
            },
            {
              title: "✨ Bottom Line",
              emphasis: "Calmer beats busier.",
              body:
                "If your second trip feels balanced - familiar, but refreshed - you planned it correctly.",
            },
          ],
        },
      ],
    },
    {
      title: "Choose a City",
      slug: "choose-a-city",
      icon: "city",
      image: "/Choose%20a%20City.webp",
      pageType: "hub",
      overrides: {
        showHubFaq: false,
      },
      description: "Choose the city that fits how you like to travel.",
      quickAnswer:
        "Choose your city by considering three things first: your travel energy, how stressful moving between places feels, and the season of your trip in Korea. Seoul is the easiest all-around base, Busan adds coastal contrast, and Jeju offers nature but requires more planning. Gyeongju or Jeonju work best if you prefer a slower rhythm over constant variety.",
      content: [
        {
          title: "🧭 Start with your travel energy",
          icon: "compass",
          emphasis:
            "Choose the city you can still enjoy on a tired day - not just the one that looks impressive in photos.",
          body:
            "The best choice is usually the one that matches your stamina, noise tolerance, and willingness to keep moving after day one.",
          subsections: [
            {
              title: "Seoul",
              lead: [
                "Best if you want maximum flexibility, dense public transport, and easy day-by-day adjustments.",
              ],
            },
            {
              title: "Busan",
              lead: [
                "Best if you want sea views plus city life and are comfortable with longer cross-city distances.",
              ],
            },
            {
              title: "Jeju",
              lead: [
                "Best if open space matters more than convenience, and you are comfortable with flights or car rentals.",
              ],
            },
            {
              title: "Gyeongju or Jeonju",
              lead: [
                "Best if you want quieter evenings, a smaller walking radius, and less big-city stimulation.",
              ],
            },
          ],
        },
        {
          title: "🚆 Compare movement cost before attractions",
          icon: "train",
          emphasis: "Transport friction shapes your day more than a famous landmark does.",
          body:
            "A city can look perfect online and still feel wrong if every meaningful stop costs you time, transfers, or recovery energy.",
          subsections: [
            {
              title: "Lowest friction base",
              lead: [
                "Seoul is the most forgiving city for flexible planning. Transport is dense, last-minute changes are manageable, and bad weather rarely ruins the entire day.",
              ],
            },
            {
              title: "Moderate spread",
              lead: [
                "Busan is navigable by subway and taxi, but beaches, hills, and district gaps make it feel larger than the map suggests.",
              ],
            },
            {
              title: "Highest logistics load",
              lead: [
                "Jeju rewards you with scenery, but only after you accept airport time, driving decisions, or slower bus routes.",
              ],
            },
          ],
        },
        {
          title: "🌦️ Let the season change the winner",
          icon: "cloud",
          emphasis: "The same city can feel effortless in October and exhausting in August.",
          body:
            "Weather changes how much walking, waiting, and outdoor time feels comfortable. Your actual travel dates matter more than popularity.",
          subsections: [
            {
              title: "Summer",
              lead: [
                "Busan and Jeju work well if you want coastal scenery and can handle heat, humidity, and peak crowds.",
              ],
            },
            {
              title: "Spring or Autumn",
              lead: [
                "Gyeongju and Jeonju become easier to enjoy, especially if you plan to walk through historic districts.",
              ],
            },
            {
              title: "Winter",
              lead: [
                "Seoul is usually the most adaptable choice because indoor options and dense transport make cold days easier to adjust.",
              ],
            },
          ],
          tail:
            "If your trip depends on beaches, foliage, or outdoor hikes, confirm the season before committing to a city.",
        },
        {
          title: "🚫 Do not choose a city just because it is famous",
          icon: "alert",
          emphasis: "Popularity is not the same as travel fit.",
          body:
            "A well-known city can still be the wrong choice for your pace. Use the city pages below to confirm daily rhythm, transport style, and atmosphere - not to copy the most common itinerary.",
          bullets: [
            "Choose the page that solves a real travel need, not the place you feel you are 'supposed' to visit.",
            "If two cities seem similar, choose the one with lower movement cost for your dates and budget.",
            "Add a second city only if it gives you a clearly different rhythm - not just another box to tick.",
          ],
        },
      ],
      children: [
        {
          title: "Seoul",
          slug: "seoul",
          icon: "city",
          image: "city",
          description: "Big city life, food, and culture.",
          quickAnswer:
            "This page helps you decide if Seoul matches your travel style, pace, and interests.",
          content: [
            {
              title: "🌟 Introduction",
              emphasis: "The easiest starting point for first-time visitors to Korea.",
              body:
                "Seoul is large, modern, and active. At first glance, it can look overwhelming. In reality, the city is structured by districts and connected by an efficient transport system, which makes it manageable even for first-time travelers. If this is your first trip to Korea, Seoul is the most practical and reliable base.",
            },
            {
              title: "🚇 Why Seoul Feels Convenient",
              emphasis: "Infrastructure Designed for Movement",
              body:
                "Seoul works because the systems are consistent. International visitors benefit from:",
              bullets: [
                "Direct airport access via AREX train and airport buses",
                "Extensive subway coverage across the city",
                "Clearly numbered stations with English signage",
                "Reliable public transport operating from early morning to late night",
                "Food options available at almost any hour",
                "You do not need a car. Most areas are reachable within 30-40 minutes by subway.",
              ],
            },
            {
              title: "🗺️ Understanding the City Layout",
              emphasis: "District-Based Structure",
              body:
                "Seoul is divided by the Han River into northern and southern areas. Each district has a different character. Common visitor-friendly districts include:",
              bullets: [
                "Myeongdong - Central, shopping-oriented, easy airport access",
                "Hongdae - Youthful atmosphere, cafes, nightlife",
                "Insadong - Traditional streets and cultural sites",
                "Gangnam - Modern, wide streets, business hotels",
                "Staying in one district and exploring nearby areas reduces fatigue.",
              ],
            },
            {
              title: "🏙️ What Seoul Is Best For",
              emphasis: "Urban Variety Without Confusion",
              body:
                "Seoul offers contrast within short distances. In one realistic day, you can:",
              bullets: [
                "Visit a royal palace",
                "Explore a traditional market",
                "Walk along Cheonggyecheon Stream",
                "Dine in a modern restaurant district",
                "The variety is compact. Planning geographically keeps travel time short.",
              ],
            },
            {
              title: "✅ Who Seoul Fits Best",
              body: "Seoul works especially well if you:",
              bullets: [
                "Enjoy food culture",
                "Prefer public transport over driving",
                "Want both traditional and modern experiences",
                "Like flexible day planning",
                "If your goal is primarily quiet nature, a secondary city may suit you better.",
              ],
            },
            {
              title: "⏳ How Long Should You Stay?",
              emphasis: "Time Shapes the Experience",
              body: "A general guide:",
              bullets: [
                "3-4 days - Highlights within a wider Korea trip",
                "5-6 days - Balanced exploration without rushing",
                "1-2 weeks - Neighborhood-level familiarity and slower travel",
                "Short stays focus on major areas. Longer stays allow repetition and comfort.",
              ],
            },
            {
              title: "🧭 How to Avoid Burnout",
              emphasis: "Think in Districts, Not Attractions",
              body:
                "Seoul feels overwhelming when movement is inefficient. A practical approach:",
              bullets: [
                "Choose one main accommodation area",
                "Explore only one or two nearby districts per day",
                "Use cafes and parks as built-in rest breaks",
                "Avoid crossing the entire city multiple times in one day",
                "Efficient routing improves experience quality.",
              ],
            },
            {
              title: "💳 Practical Travel Notes",
              emphasis: "Payment and Daily Use",
              body: "Useful day-to-day points:",
              bullets: [
                "Cards are widely accepted",
                "T-money cards work on buses and subways",
                "Taxis are regulated and relatively affordable compared to many global cities",
                "Convenience stores provide quick, inexpensive meal options",
                "These details reduce daily friction.",
              ],
            },
            {
              title: "⚠️ Common Mistakes",
              emphasis: "Overplanning Creates Fatigue",
              body: "Avoid:",
              bullets: [
                "Visiting four or five districts in a single day",
                "Changing hotels mid-stay",
                "Treating the city like a checklist",
                "Scheduling every hour in advance",
                "Seoul rewards structured flexibility.",
              ],
            },
            {
              title: "📝 What You Do Not Need to Decide Early",
              body: "You do not need:",
              bullets: [
                "A full restaurant list",
                "Exact daily schedules",
                "Pre-booked attractions for every day",
                "Once you arrive, distances and timing become clearer.",
              ],
            },
            {
              title: "🔎 Always Confirm Updated Information",
              body:
                "Transport routes, palace closing days, and seasonal events can change. Before visiting, verify:",
              bullets: [
                "Subway service notices",
                "Attraction opening days",
                "Airport transport schedules",
                "Seasonal event information",
                "Use official transport and tourism sources for confirmation.",
              ],
            },
            {
              title: "✨ Bottom Line",
              emphasis: "Stay in one area. Move efficiently. Explore slowly.",
              body:
                "Seoul is manageable once you understand its district structure. If your days feel balanced rather than rushed, you are using the city correctly.",
            },
          ],
        },
        {
          title: "Busan",
          slug: "busan",
          icon: "beach",
          image: "beach",
          description: "Beaches, seafood, and a relaxed vibe.",
          quickAnswer:
            "This page helps you decide if Busan is the right mix of beach, food, and city life for you.",
          content: [
            {
              title: "🌟 Introduction",
              emphasis: "Korea's coastal city with a slower rhythm.",
              body:
                "Busan is Korea's second-largest city, located on the southeastern coast. It feels different from Seoul. The pace is slightly slower, the skyline opens toward the sea, and daily life feels less compressed. For travelers who want city convenience without the intensity of the capital, Busan works well.",
            },
            {
              title: "🌊 Why Busan Feels Different",
              emphasis: "A Coastal City With Space",
              body:
                "Unlike Seoul, Busan is spread along the coastline and between hills. What this means for travelers:",
              bullets: [
                "Ocean views are common",
                "Walking routes often include beaches or harbor areas",
                "Neighborhoods feel more separated from each other",
                "Movement between districts may take longer than expected",
                "Busan is not as compact as Seoul. Planning by district helps.",
              ],
            },
            {
              title: "🚄 Getting to Busan",
              emphasis: "Simple but Not Instant",
              body: "Most visitors arrive by:",
              bullets: [
                "KTX high-speed train from Seoul (about 2.5 hours)",
                "Domestic flights (around 1 hour from Seoul, plus airport procedures)",
                "The KTX arrives at Busan Station, which connects directly to the subway system.",
                "Travel days should be treated as half-days.",
              ],
            },
            {
              title: "🏙️ What Busan Is Best For",
              emphasis: "Sea + City Combination",
              body: "Busan works especially well if you:",
              bullets: [
                "Enjoy coastal walks",
                "Want fresh seafood in traditional markets",
                "Prefer open views instead of dense skyscrapers",
                "Like urban convenience without extreme pace",
                "The city offers beaches such as Haeundae and Gwangalli, along with traditional fish markets and hillside neighborhoods.",
              ],
            },
            {
              title: "⏳ How Long Should You Stay?",
              emphasis: "Realistic Timing",
              body: "A practical guide:",
              bullets: [
                "2-3 days - Beach area + seafood market + one cultural district",
                "3-4 days - Balanced coastal exploration without rushing",
                "5+ days - Slower mornings and repeated neighborhood visits",
                "Busan benefits from a slightly slower schedule.",
              ],
            },
            {
              title: "🗺️ Understanding District Layout",
              emphasis: "Spread-Out Structure",
              body:
                "Busan is not centered around one main district. Common visitor areas include:",
              bullets: [
                "Haeundae (beach and modern hotels)",
                "Gwangalli (beach views and bridge skyline)",
                "Nampo (traditional markets and older streets)",
                "Seomyeon (transport hub and shopping area)",
                "Staying near a subway station simplifies movement.",
              ],
            },
            {
              title: "🧭 How to Avoid Exhaustion in Busan",
              emphasis: "Plan by Area",
              body:
                "Because Busan stretches along the coast, crossing the city repeatedly can waste time. A practical approach:",
              bullets: [
                "Choose accommodation near your preferred beach area",
                "Explore nearby districts on the same day",
                "Avoid scheduling opposite ends of the city in one afternoon",
                "Efficient routing improves comfort.",
              ],
            },
            {
              title: "🍂 When Busan Works Best",
              emphasis: "Season Matters",
              body: "Busan changes significantly by season.",
              bullets: [
                "Summer: Beaches active and crowded",
                "Spring and Autumn: Comfortable weather, fewer crowds",
                "Winter: Quieter atmosphere, seafood-focused trips",
                "If your goal is beach swimming, timing matters.",
              ],
            },
            {
              title: "⚠️ Common Mistakes",
              emphasis: "Treating It Like Seoul",
              body: "Avoid:",
              bullets: [
                "Trying to see every beach in one day",
                "Staying far from subway access",
                "Planning too many hillside attractions back-to-back",
                "Expecting ultra-compact movement",
                "Busan rewards slower pacing.",
              ],
            },
            {
              title: "📝 What You Do Not Need to Pre-Plan",
              body: "You do not need:",
              bullets: [
                "Every restaurant decided in advance",
                "A rigid hourly schedule",
                "Multiple hotel changes",
                "Once you see the coastline layout, decisions become easier.",
              ],
            },
            {
              title: "🔎 Always Confirm Updated Information",
              body:
                "Transport schedules, seasonal events, and beach conditions may change. Before traveling, verify:",
              bullets: [
                "KTX schedules",
                "Local transport notices",
                "Seasonal festival dates",
                "Weather forecasts",
                "Use official transport and tourism sources for confirmation.",
              ],
            },
            {
              title: "✨ Bottom Line",
              emphasis: "Sea air changes the rhythm.",
              body:
                "Busan works best when you allow space between plans. If your days include ocean views and unhurried meals, you are using the city correctly.",
            },
          ],
        },
        {
          title: "Jeju",
          slug: "jeju",
          icon: "island",
          image: "island",
          description: "Nature, driving, and island life.",
          quickAnswer:
            "This page helps you decide if Jeju's nature-focused travel fits your trip goals.",
          content: [
            {
              title: "🌋 Introduction",
              emphasis: "Island landscapes. Coastal roads. Volcanic scenery.",
              body:
                "Jeju Island is Korea's most well-known natural destination. Located off the southern coast, it is famous for lava cliffs, waterfalls, coastal trails, and open ocean views. Jeju feels very different from Seoul or Busan. It is quieter, more spacious, and structured around driving rather than subways.",
            },
            {
              title: "🛣️ What Jeju Is Really Like",
              emphasis: "Spread-Out and Scenic",
              body:
                "Jeju is not compact. Attractions are distributed around the island's coastline and inland mountain areas. This means:",
              bullets: [
                "Driving between stops is normal",
                "Scenic coastal roads are part of the experience",
                "Travel time between attractions can range from 20 to 60 minutes",
                "Evenings are quieter compared to major cities",
                "Jeju feels calm because movement is slower.",
              ],
            },
            {
              title: "🚗 Getting Around",
              emphasis: "Renting a Car Is the Practical Choice",
              body: "Most visitors rent a car.",
              bullets: [
                "With a car: flexible timing.",
                "With a car: easier access to beaches and waterfalls.",
                "With a car: convenient access to Hallasan hiking trails.",
                "With a car: ability to explore coastal routes freely.",
                "Without a car: bus routes are limited outside main towns.",
                "Without a car: transfers can take significant time.",
                "Without a car: some attractions are difficult to reach.",
                "Driving is straightforward for visitors comfortable with international travel, but an international driving permit is required.",
              ],
            },
            {
              title: "⏳ How Long Should You Stay?",
              emphasis: "Time Improves the Experience",
              body: "Jeju rewards flexibility. General guidance:",
              bullets: [
                "3 nights - Core highlights such as Seongsan Ilchulbong, Jeongbang Waterfall, and a short Hallasan trail.",
                "4-5 nights - Add Manjanggul Lava Tube, Hyupjae Beach, Cheonjiyeon Waterfall.",
                "6-7 nights or more - Slower travel, Olle Trail sections, Udo Island, Seopjikoji.",
                "Weather changes quickly on the island. Extra days improve flexibility.",
              ],
            },
            {
              title: "🏨 Where to Stay",
              emphasis: "Choose One Base",
              body: "Two practical areas:",
              bullets: [
                "Jeju City - Close to airport, restaurants, and rental car offices.",
                "Seogwipo - Closer to southern waterfalls and coastal scenery.",
                "Switching hotels usually wastes time due to driving distances.",
              ],
            },
            {
              title: "🌊 What Jeju Is Best For",
              emphasis: "Nature Over Nightlife",
              body: "Jeju is ideal for:",
              bullets: [
                "Scenic coastal drives",
                "Easy to moderate hiking",
                "Ocean viewpoints",
                "Volcanic landscapes",
                "Quiet evenings",
                "It is not ideal for nightlife or dense urban activity.",
              ],
            },
            {
              title: "🍃 Seasonal Considerations",
              emphasis: "Timing Matters",
              body: "Weather can influence daily plans more than in mainland cities.",
              bullets: [
                "Spring - Mild weather, flowers blooming.",
                "Summer - Beach season but humid.",
                "Autumn - Clear skies and good hiking conditions.",
                "Winter - Windy but peaceful, fewer crowds.",
              ],
            },
            {
              title: "⚠️ Common Mistakes",
              emphasis: "Overplanning Reduces Enjoyment",
              body: "Avoid:",
              bullets: [
                "Visiting for only one or two nights",
                "Scheduling too many stops per day",
                "Underestimating driving time",
                "Expecting city-level convenience",
                "Jeju works best with breathing room.",
              ],
            },
            {
              title: "✅ Always Confirm Updated Information",
              body: "Before traveling, verify:",
              bullets: [
                "Rental car requirements",
                "Trail conditions for Hallasan",
                "Attraction opening hours",
                "Seasonal weather forecasts",
                "Use official transport and tourism sources for confirmation.",
              ],
            },
            {
              title: "✨ Bottom Line",
              emphasis: "Nature needs space.",
              body:
                "Jeju suits travelers who prefer open roads, coastal views, and slower days. If your schedule allows flexibility and fewer daily stops, the island experience improves significantly.",
            },
          ],
        },
        {
          title: "Gyeongju",
          slug: "gyeongju",
          icon: "temple",
          image: "heritage",
          description: "Ancient capital. Open-air history. Walkable landmarks.",
          quickAnswer:
            "This page helps you decide if Gyeongju is worth adding for history and a slower pace.",
          content: [
            {
              title: "🏛️ Introduction",
              emphasis: "Ancient capital. Open-air history. Walkable landmarks.",
              body:
                "Gyeongju was the capital of the Silla Kingdom for nearly 1,000 years. Today, its royal tombs, observatories, and temple sites are not hidden inside modern traffic zones. Instead, they sit inside open parks and quiet streets. If your itinerary has been busy, Gyeongju offers historical depth without urban intensity.",
            },
            {
              title: "🚶 Why Gyeongju Works So Well",
              emphasis: "Central Sites Are Close Together",
              body:
                "Most major landmarks in the historic district are within walking distance of one another. You can comfortably walk between:",
              bullets: [
                "Daereungwon Tomb Complex - Large grass-covered royal burial mounds",
                "Cheomseongdae Observatory - One of the oldest surviving astronomical towers in Asia",
                "Donggung Palace & Wolji Pond - Historic palace ruins, especially atmospheric after sunset",
                "The streets are flat and distances are short. You spend more time exploring than commuting.",
              ],
            },
            {
              title: "🗿 Key Sites Beyond the Center",
              body:
                "Some of Gyeongju's most significant heritage sites are located outside the central walking area. These include:",
              bullets: [
                "Bulguksa Temple - A UNESCO World Heritage Site and one of Korea's most important Buddhist temples",
                "Seokguram Grotto - A stone Buddha shrine overlooking the East Sea",
                "Gyeongju National Museum - Exhibits including Silla gold crowns and royal artifacts",
                "These locations are best grouped into one half-day using bus or taxi, rather than mixed into a central walking route.",
              ],
            },
            {
              title: "⏳ How Much Time Do You Need?",
              body: "Plan by pace:",
              bullets: [
                "1 full day - Central historic district only",
                "1 night + 2 days - Central district plus Bulguksa and Seokguram at a relaxed pace",
                "If your overall trip is short, Gyeongju works well as a slower stop between larger cities.",
              ],
            },
            {
              title: "🌿 What Makes Gyeongju Different",
              emphasis: "Gyeongju is not a high-rise city.",
              body: "Instead, you experience:",
              bullets: [
                "Open parks containing ancient tombs",
                "Temple complexes surrounded by trees and hills",
                "Wide walking paths rather than dense shopping streets",
                "The city feels spacious and quiet, especially in the evening.",
              ],
            },
            {
              title: "🚕 Best Way to Explore",
              emphasis: "Logistics are simple compared to larger cities.",
              body: "Most visitors:",
              bullets: [
                "Walk through the central district",
                "Rent a bicycle for park areas",
                "Use short taxi rides for outer temple sites",
                "Public transport exists, but taxis are often more efficient for time-limited stays.",
              ],
            },
            {
              title: "📝 Practical Travel Notes",
              body: "Small timing adjustments improve the experience.",
              bullets: [
                "The central district is compact and easy to navigate without detailed planning",
                "Evenings around Wolji Pond are popular for photography",
                "Summer can be hot and humid; spring and autumn are more comfortable for walking",
                "Temple sites may close earlier than urban attractions, so check opening hours in advance",
              ],
            },
            {
              title: "✨ Bottom Line",
              emphasis:
                "Gyeongju presents Korea's early history in a calm, open environment.",
              body:
                "If your itinerary feels crowded or fast, this city restores balance without adding complexity. When you finish the day feeling unhurried rather than rushed, you have used Gyeongju correctly.",
            },
          ],
        },
        {
          title: "Jeonju",
          slug: "jeonju",
          icon: "bowl",
          image: "food",
          description: "Food and traditional streets.",
          quickAnswer:
            "This page helps you decide if Jeonju is the right stop for food and traditional streets.",
          content: [
            {
              title: "🏮 Jeonju",
              emphasis: "Traditional streets. Local food. Hanok village charm.",
              body:
                "Jeonju is best known for Jeonju Hanok Village and its reputation as one of Korea's most food-focused cities. Unlike large metropolitan areas, Jeonju feels compact and manageable. Traditional houses, street snacks, and regional restaurants are concentrated within a walkable area. If you want traditional atmosphere without complex transport planning, Jeonju is a practical stop.",
            },
            {
              title: "🚶 Why Jeonju Works Well in a Korea Trip",
              body:
                "Jeonju fits naturally between Seoul and Busan and is easy to explore within a single district. Most major sites are located around the Hanok Village area, which reduces commuting time. Key places include:",
              bullets: [
                "Jeonju Hanok Village - The largest concentration of traditional hanok houses in Korea",
                "Gyeonggijeon Shrine - A Joseon-era shrine dedicated to the royal lineage",
                "Nambu Market - Local street food and traditional market stalls",
                "Omokdae Viewpoint - Elevated views across the hanok rooftops",
                "Jeondong Cathedral - Historic cathedral beside the village",
                "Everything is within short walking distance. You spend more time exploring and less time navigating.",
              ],
            },
            {
              title: "⏳ How Much Time Do You Need?",
              emphasis:
                "Jeonju works best as a short cultural and food-focused stop.",
              body: "Plan by pace:",
              bullets: [
                "1 night - Walk the hanok streets, try bibimbap, and experience the area after sunset",
                "2 days - Add markets, viewpoints, museums, and relaxed cafe time",
                "Jeonju is not designed for rushed half-day visits. Staying overnight improves the atmosphere.",
              ],
            },
            {
              title: "🍲 What Jeonju Is Known For",
              body:
                "Jeonju's reputation is strongly tied to food and traditional architecture. The city is known for:",
              bullets: [
                "Bibimbap and regional Korean cuisine",
                "Street snacks within Hanok Village",
                "Traditional tea houses",
                "Preserved hanok architecture",
                "Compared to larger cities, dining here often focuses on local specialties rather than global restaurant chains.",
              ],
            },
            {
              title: "🌇 What Makes Jeonju Different",
              body:
                "Jeonju is less dense than Seoul and less coastal than Busan. Instead of skyline views, you experience:",
              bullets: [
                "Low traditional rooftops",
                "Narrow pedestrian streets",
                "Local restaurants clustered within small blocks",
                "The city feels intimate rather than expansive.",
              ],
            },
            {
              title: "🗺️ Best Way to Explore",
              emphasis: "Walk.",
              body:
                "Most highlights are within 15-20 minutes on foot inside the central district. For sites slightly outside the core area, short taxi rides are simple and inexpensive. Because of the compact layout, complicated transport planning is rarely necessary.",
            },
            {
              title: "📝 Practical Travel Notes",
              body: "Checking opening hours in advance prevents frustration.",
              bullets: [
                "Weekends can be busy around Hanok Village",
                "Evening visits offer softer lighting and fewer tour groups",
                "Summer can be hot; spring and autumn are more comfortable for walking",
                "Many small restaurants close between lunch and dinner service",
              ],
            },
            {
              title: "✨ Bottom Line",
              emphasis:
                "Jeonju offers traditional streets and regional food in one compact, easy-to-navigate city.",
              body:
                "If your itinerary needs good food, walkable neighborhoods, and a slower rhythm, Jeonju is a practical and balanced addition.",
            },
          ],
        },
        {
          title: "Which City Fits You Best?",
          slug: "which-city-fits-you-best",
          icon: "spark",
          image: "planning",
          description: "Pick a city based on how you actually travel.",
          quickAnswer:
            "This page helps you choose the best Korean city based on how you like to travel.",
          content: [
            {
              title: "🎯 Why This Choice Matters",
              emphasis: "The right base changes your entire trip.",
              body:
                "Many travelers ask, \"Which city is the best?\" A better question is: \"Which city matches how I travel?\" Distance, transport, pace, and crowd levels vary significantly across Korea. Choosing the right base reduces unnecessary movement and fatigue.",
            },
            {
              title: "🧭 Step 1: Decide Your Movement Style",
              body: "Ask yourself:",
              bullets: [
                "Do I prefer frequent subway rides or fewer transfers?",
                "Am I comfortable renting a car?",
                "Do I want everything walkable?",
                "Do I mind seasonal crowds?",
                "Your tolerance for movement is more important than popularity.",
              ],
            },
            {
              title: "🏙️ If You Prefer Energy, Variety, and Easy Transport",
              emphasis: "Best Fit: Seoul",
              body: "Why it works:",
              bullets: [
                "Extensive subway system with English signage",
                "Airport rail connection (AREX)",
                "Short travel times between districts (30-40 minutes typical cross-city trips)",
                "Wide food range available late into the evening",
                "Best for: restaurant exploration, museums and palaces in one day, nightlife and shopping.",
                "Typical stay: 3-6 days minimum to avoid rushing.",
                "Common mistake: Trying to see 4-5 districts per day instead of grouping geographically.",
              ],
            },
            {
              title: "🌊 If You Prefer Coastal Views Without a Car",
              emphasis: "Best Fit: Gangneung or Yeosu",
              body: "Why they work:",
              bullets: [
                "Compact waterfront areas",
                "Walkable cafe districts",
                "Train access from Seoul (Gangneung)",
                "Harbor-based layout (Yeosu)",
                "Gangneung: Strong for sunrise beaches and relaxed walking routes.",
                "Yeosu: Strongest at night - cable car views and harbor lighting.",
                "Typical stay: 1-2 nights.",
                "Common mistake: Leaving before sunset in Yeosu. Evening atmosphere defines the experience.",
              ],
            },
            {
              title: "🚗 If You Are Comfortable Driving and Want Open Landscapes",
              emphasis: "Best Fit: Jeju",
              body: "Why it works:",
              bullets: [
                "Spread-out attractions connected by coastal roads",
                "Scenic drives between waterfalls and volcanic sites",
                "Flexible pacing with rental car",
                "Public transport exists but significantly increases travel time.",
                "Typical stay: 3-5 nights.",
                "Common mistake: Planning too many stops per day. Distances are larger than expected.",
              ],
            },
            {
              title: "🏔️ If You Want Mountain Scenery",
              emphasis: "Best Fit: Sokcho (Seoraksan access)",
              body: "Why it works:",
              bullets: [
                "Direct access to Seoraksan National Park",
                "Cable car viewpoints",
                "Short hiking options and ocean nearby",
                "Typical stay: 1-2 nights.",
                "Important: Autumn foliage season increases congestion significantly.",
              ],
            },
            {
              title: "🏛️ If History Is Your Priority",
              emphasis: "Best Fit: Gyeongju or Andong",
              body: "Gyeongju:",
              bullets: [
                "Walkable tomb parks",
                "Bulguksa Temple and Seokguram Grotto (UNESCO-listed sites)",
                "Minimal high-rise development",
                "Best for slow walking and open-air heritage.",
                "Andong: Hahoe Folk Village (UNESCO-listed traditional village) with a rural heritage atmosphere.",
                "Typical stay: 1 night minimum.",
                "Common mistake: Attempting both cities in one short trip.",
              ],
            },
            {
              title: "🏰 If You Want a Short, Easy Cultural Add-On",
              emphasis: "Best Fit: Suwon",
              body: "Why it works:",
              bullets: [
                "Hwaseong Fortress (UNESCO-listed)",
                "Day-trip distance from Seoul",
                "Structured walking route along fortress walls",
                "Ideal for travelers who want history without changing hotel bases.",
              ],
            },
            {
              title: "🧩 How to Narrow It Down",
              body: "Choose based on:",
              bullets: [
                "Transport comfort",
                "Tolerance for crowds",
                "Preferred pace",
                "Interest focus (food / nature / history / coast)",
                "Adding one well-matched secondary city often improves a trip more than adding three mismatched ones.",
              ],
            },
            {
              title: "📝 Practical Planning Reminder",
              body: "Before finalizing:",
              bullets: [
                "Check transport schedules",
                "Confirm seasonal operating hours",
                "Verify weather-dependent attractions",
                "Review festival dates if traveling in peak seasons",
                "Access rules and schedules can change.",
              ],
            },
            {
              title: "✨ Bottom Line",
              emphasis:
                "There is no universally \"best\" city.",
              body:
                "But there is a city that matches: your pace, your movement style, your energy level, and your interests. Choose based on how you travel, not on what ranks highest online.",
            },
          ],
        },
      ],
    },
    {
      title: "Getting Around Korea",
      slug: "getting-around-korea",
      icon: "train",
      image: "/Getting%20Around%20Korea.webp",
      description: "Learn how to use buses, subways, and taxis with confidence.",
      quickAnswer:
        "Each card opens a focused guide to getting around Korea, covering transport options, routes, and practical travel tips.",
      children: [
        {
          title: "Is Getting Around Hard in South Korea?",
          slug: "is-getting-around-hard",
          updatedIso: "2026-02-18T00:00:00.000Z",
          icon: "route",
          image: "transport",
          description:
            "How public transportation actually works - costs, airport options, and when to choose subway, bus, or taxi.",
          quickAnswer:
            "This page explains why getting around South Korea is easy, even for first-time visitors.",
          content: [
            {
              title: "🚇 Introduction",
              emphasis:
                "For most visitors, transportation in South Korea is structured, frequent, and predictable.",
              body:
                "Public transportation in cities like Seoul and Busan is designed for daily commuters. That means routes follow clear logic, trains run often, and payment works consistently across the system. If you stay in a central area, you usually do not need a rental car. Parking is limited, traffic builds quickly during peak hours, and subways are often faster.",
            },
            {
              title: "✅ The Short Answer",
              emphasis: "Getting around South Korea is usually simple.",
              body: "In major cities, you can expect:",
              bullets: [
                "Subway trains every 2-5 minutes during core daytime hours",
                "Color-coded lines and numbered stations",
                "English signage inside stations",
                "Distance-based fares calculated automatically when you tap",
                "Straightforward transfers between subway and bus",
                "Most travelers adjust after their first subway ride.",
              ],
            },
            {
              title: "💳 How Fares Work",
              emphasis: "Public transport operates on a base fare plus distance system.",
              body: "As of recent fare updates:",
              bullets: [
                "Seoul subway (transportation card): from about 1,550 KRW",
                "Busan subway (transportation card): from about 1,600 KRW",
                "Seoul regular taxi base fare: from about 4,800 KRW",
                "Subway fares increase mainly by distance. Transfers do not normally restart a full base fare if you transfer within the allowed time window using the same card.",
                "Taxi rides may feel affordable at first, but repeated short trips increase daily costs quickly.",
              ],
            },
            {
              title: "✈️ Airport to City Options",
              body:
                "If you arrive at Incheon International Airport, you generally choose between rail, bus, or taxi.",
              subsections: [
                {
                  title: "AREX (Airport Railroad Express)",
                  bullets: [
                    "All-stop train reaches central Seoul in about 1 hour",
                    "Express train is faster but more expensive",
                    "Travel time is predictable because it is not affected by traffic",
                  ],
                },
                {
                  title: "Airport Limousine Bus",
                  bullets: [
                    "Direct routes to many districts",
                    "Useful if your accommodation is far from a subway station",
                    "Travel time depends on traffic conditions",
                  ],
                },
              ],
              tail:
                "For many solo travelers, rail is the most predictable default option.",
            },
            {
              title: "❓ What First-Time Visitors Worry About",
              body: "Concern: \"What if I get lost underground?\" In practice:",
              bullets: [
                "Stations are numbered",
                "Exits are numbered",
                "Signs include English",
                "If you go the wrong direction, you exit at the next stop and switch platforms",
                "The system is built for millions of daily commuters. It is repetitive and structured rather than confusing.",
              ],
            },
            {
              title: "⏰ Rush Hour Reality",
              body: "Weekday peak times are typically:",
              bullets: [
                "Morning: 7:30-9:00 AM",
                "Evening: 5:30-7:00 PM",
                "Trains run frequently, but they can be crowded. If possible, plan longer cross-city trips outside these windows for a more comfortable experience.",
              ],
            },
            {
              title: "🚕 When a Taxi Makes Sense",
              body:
                "Public transport is usually the default option. However, a taxi may be practical when:",
              bullets: [
                "Subway service has ended (often around midnight, depending on the line)",
                "You are carrying large luggage",
                "Weather conditions are severe",
                "You are traveling with several people and splitting the fare",
                "The key is using taxis strategically rather than automatically.",
              ],
            },
            {
              title: "⚠️ Common Mistake",
              emphasis: "Assuming the system is complicated and avoiding it entirely.",
              body:
                "Many first-time visitors rely heavily on taxis out of uncertainty. After trying the subway once, most realize the system is structured and manageable.",
            },
            {
              title: "✨ Bottom Line",
              emphasis:
                "Transportation in South Korea is not difficult.",
              body:
                "If you follow three principles - tap your card, follow line numbers, and allow extra time during rush hour - moving around becomes routine. For most travelers, public transportation quickly becomes one of the least stressful parts of the trip.",
            },
          ],
        },
        {
          title: "Using the Subway",
          slug: "using-the-subway",
          icon: "train",
          image: "transport",
          description:
            "Tickets, transportation cards, fares, and what first-time riders should expect.",
          quickAnswer:
            "This page helps you use the Korean subway with confidence from day one.",
          content: [
            {
              title: "🚇 Introduction",
              body:
                "Using the subway in South Korea is usually straightforward, even for first-time visitors. Major cities such as Seoul and Busan operate structured, commuter-based systems. Trains run frequently, stations are clearly numbered, and payment follows a consistent distance-based model. Once you understand how to pay and how fares are calculated, the rest becomes routine.",
            },
            {
              title: "💳 Choose How You Pay",
              body:
                "There are two main ways to pay for a subway ride:",
              subsections: [
                {
                  title: "Option 1: Single-Use Ticket",
                  bullets: [
                    "You can purchase a single-use ticket from machines inside subway stations.",
                    "Pay per ride",
                    "Slightly higher fare compared to transportation cards",
                    "Transfers are not eligible for a transfer discount",
                  ],
                  tail:
                    "This option works for occasional rides, but it becomes inefficient if you use the subway multiple times per day.",
                },
                {
                  title: "Option 2: Transportation Card",
                  bullets: [
                    "A rechargeable transportation card works across:",
                    "Subways",
                    "City buses",
                    "Many taxis",
                    "You tap when entering and tap again when exiting. The system calculates your fare automatically.",
                  ],
                  tail:
                    "For most travelers staying more than one day, this is the more practical option.",
                },
              ],
            },
            {
              title: "💸 How Subway Fares Work",
              body:
                "Subway fares are based on distance.",
              bullets: [
                "As of current fare structures in major cities:",
                "Base fare in Seoul starts around 1,550 KRW when using a transportation card",
                "Fares increase gradually depending on total distance traveled",
                "Transfers within the allowed time window usually do not restart a full base fare, as long as you use the same card.",
              ],
              tail:
                "You do not need to calculate the price manually. The system processes it when you tap.",
            },
            {
              title: "🚉 Entering and Exiting the System",
              body: "The process is consistent across stations.",
              bullets: [
                "Tap your card or scan your ticket at the entrance gate",
                "Ride your train",
                "Tap again at the exit gate",
              ],
              tail:
                "If your balance is too low, the gate will not open. Recharge machines are located inside stations.",
            },
            {
              title: "😬 What First-Time Riders Usually Worry About",
              body:
                "Many visitors worry about taking the wrong train. In practice:",
              bullets: [
                "Subway lines are color-coded",
                "Stations are numbered",
                "Direction signs clearly show terminal stations",
                "English station names are displayed",
              ],
              tail:
                "If you board in the wrong direction, exit at the next stop and switch platforms. Mistakes typically cost a few minutes, not significant money.",
            },
            {
              title: "⏰ Rush Hour Reality",
              body: "Weekday peak hours in large cities are typically:",
              bullets: [
                "7:30-9:00 AM",
                "5:30-7:00 PM",
                "Trains operate frequently, but they can be crowded during these times.",
              ],
              tail:
                "If your schedule allows, plan longer cross-city trips outside peak hours for a more comfortable ride.",
            },
            {
              title: "🧳 When the Subway May Not Be Ideal",
              body: "The subway may not be the best option if:",
              bullets: [
                "Service has ended (often around midnight, depending on the line)",
                "You are carrying very large luggage",
                "Your destination is far from any station",
              ],
              tail: "In those cases, buses or taxis may be more practical.",
            },
            {
              title: "⚠️ Common Mistakes to Avoid",
              body: "Common mistakes include:",
              bullets: [
                "Buying single-use tickets repeatedly instead of using one transportation card",
                "Not checking train direction before boarding",
                "Assuming taxis are always easier",
              ],
              tail: "Most confusion disappears after one or two rides.",
            },
            {
              title: "🧠 What the Subway Is NOT",
              body:
                "The subway system in Korea is not:",
              bullets: [
                "Complicated",
                "Tourist-only",
                "Unpredictable",
              ],
              tail:
                "It is a structured commuter network used daily by millions of residents.",
            },
            {
              title: "✅ Bottom Line",
              body:
                "Using the subway in South Korea is manageable once you understand how payment works. Choose a transportation card, tap correctly, check train direction before boarding, and allow extra time during peak hours. For most visitors, the subway becomes one of the fastest and most reliable ways to move around the city.",
            },
          ],
        },
        {
          title: "Taking the Bus",
          slug: "taking-the-bus",
          icon: "bus",
          image: "transport",
          description:
            "How buses work, how to pay, and when they are the better choice for daily travel.",
          quickAnswer:
            "This page helps you know when and how to use buses without confusion.",
          content: [
            {
              title: "🚌 Introduction",
              body:
                "In South Korea, buses are not a backup option. They are a core part of daily transportation. They connect residential neighborhoods, tourist attractions, and areas that subway lines do not reach directly. In many situations, a single bus ride is faster and more practical than multiple subway transfers. Once you understand payment and how stops are announced, buses become predictable and easy to use.",
            },
            {
              title: "🎯 When the Bus Is the Smarter Option",
              body: "Choose the bus when:",
              bullets: [
                "Your destination is not close to a subway station",
                "The subway route requires multiple transfers",
                "The subway station involves long underground walking",
                "A map app shows a direct bus route",
              ],
              tail:
                "If one bus takes you directly to your stop without changing lines, it is often the most efficient option.",
            },
            {
              title: "💳 How to Pay on Korean Buses",
              emphasis: "Simple and Consistent Payment",
              body:
                "Use a rechargeable transportation card (such as T-money).",
              bullets: [
                "Tap when boarding",
                "Tap again when exiting",
                "The fare is calculated automatically based on distance.",
                "If you transfer to or from the subway within the allowed time window, the system applies a reduced combined fare - as long as you use the same card.",
              ],
              tail: "There is no need to calculate fares manually.",
            },
            {
              title: "✅ The Most Important Rule",
              body: "Always tap when exiting.",
              bullets: [
                "If you forget to tap out:",
                "You may lose your transfer discount",
                "Your next ride can be treated as a new full fare",
              ],
              tail:
                "Many unexpected fare increases happen because of a missed tap-out, not because buses are expensive.",
            },
            {
              title: "🎨 Understanding Bus Types",
              body: "In major cities like Seoul, buses are color-coded:",
              bullets: [
                "Blue: Main routes connecting districts",
                "Green: Local neighborhood routes",
                "Red: Express routes between city centers and suburbs",
                "Yellow: Circular downtown routes",
              ],
              tail:
                "You do not need to memorize the system, but knowing that red buses are usually longer-distance express routes can help when checking directions.",
            },
            {
              title: "😬 What First-Time Visitors Worry About",
              body: "Common concerns include:",
              bullets: [
                "Getting on the wrong bus",
                "Missing their stop",
                "Not knowing when to exit",
              ],
            },
            {
              title: "🔍 What Actually Happens",
              body: "In practice:",
              bullets: [
                "Bus numbers and final destinations are displayed clearly",
                "Stops are announced in Korean and usually English",
                "Digital screens show the next stop",
                "Map apps (Google Maps, Naver Map) track your location in real time",
                "You can see exactly how many stops remain before yours.",
              ],
            },
            {
              title: "🧭 When Buses Feel Easier Than Subways",
              body: "Unlike subways, buses travel above ground. You:",
              bullets: [
                "See street names",
                "Recognize landmarks",
                "Stay oriented visually",
              ],
              tail:
                "For many visitors, this makes travel feel more intuitive, especially in unfamiliar neighborhoods.",
            },
            {
              title: "⏰ Rush Hour Considerations",
              body:
                "Buses operate throughout the day, but traffic affects travel time.",
              bullets: [
                "Weekday peak hours (roughly 7:30-9:00 AM and 5:30-7:00 PM) can slow bus routes significantly in busy areas.",
              ],
              tail:
                "If your route depends heavily on road traffic, check estimated arrival times in your map app before boarding.",
            },
            {
              title: "🚫 When Not to Choose the Bus",
              body: "The bus may not be ideal when:",
              bullets: [
                "You are traveling long cross-city distances where the subway is faster",
                "Traffic conditions are heavy",
                "You are unsure of the route and a subway line is more direct",
              ],
              tail:
                "In many cases, the best strategy is a combination of subway and bus.",
            },
            {
              title: "⚠️ Common Mistakes",
              body: "Common mistakes include:",
              bullets: [
                "Defaulting to taxis for short trips",
                "Avoiding buses entirely out of uncertainty",
                "Ignoring direct bus routes suggested by map apps",
              ],
              tail:
                "Often, a single bus ride is cheaper than a taxi and more direct than an indirect subway route.",
            },
            {
              title: "🧠 What You Do Not Need to Master",
              body: "You do not need:",
              bullets: [
                "To memorize bus routes",
                "To understand every color system detail",
                "To speak Korean fluently",
              ],
              tail:
                "If you can follow numbers and use a map app, you can use Korean buses confidently.",
            },
            {
              title: "✅ Bottom Line",
              body:
                "In South Korea, buses are practical, structured, and reliable. When the subway gets you close, the bus often gets you exactly there. Use buses when they clearly reduce transfers, walking distance, or total travel time.",
            },
          ],
        },
        {
          title: "Using Taxis",
          slug: "using-taxis",
          icon: "taxi",
          image: "transport",
          description:
            "Costs, when to use them, taxi apps, and practical payment tips for visitors.",
          quickAnswer:
            "This page helps you decide when taxis make sense and how to use them safely.",
          content: [
            {
              title: "🚕 Introduction",
              body:
                "Taxis in South Korea are regulated, safe, and widely available in major cities. They are not always the cheapest option, but they are reliable when used strategically. Knowing when to choose a taxi - and when not to - helps control both time and budget.",
            },
            {
              title: "✅ When a Taxi Makes Sense",
              body: "A taxi is often the better choice when:",
              bullets: [
                "The subway has stopped running (many lines end around midnight)",
                "You are carrying heavy luggage",
                "You are traveling in a group and can split the fare",
                "Weather conditions are poor (rain, snow, extreme heat)",
                "Your destination is far from the nearest station",
              ],
              tail:
                "If public transport requires multiple transfers and long walking, a taxi can reduce both effort and stress.",
            },
            {
              title: "💸 How Expensive Are Taxis?",
              body:
                "Taxi fares are government-regulated and standardized.",
              subsections: [
                {
                  title: "As of recent fare structures in Seoul:",
                  plainTitle: true,
                  bullets: [
                    "Base fare starts around 4,800 KRW",
                    "Additional distance and time increase the fare",
                    "Heavy traffic raises the price because time is included in the calculation",
                  ],
                  tail:
                    "Short rides are usually affordable. Long cross-city trips can become significantly more expensive.",
                },
              ],
              bullets: [
                "If a direct subway or bus route exists, it is often cheaper.",
                "If convenience matters more than cost, a taxi may be reasonable.",
              ],
            },
            {
              title: "🚦 Traffic Considerations",
              body:
                "Unlike subways, taxis are affected by road traffic.",
              bullets: [
                "Weekday peak hours (approximately 7:30-9:00 AM and 5:30-7:00 PM) can slow travel times and increase fares.",
              ],
              tail:
                "Before booking, check estimated travel time in a map app. In some cases, the subway may be faster and more predictable.",
            },
            {
              title: "📱 Using Taxi Apps",
              body: "Taxi apps make the process simpler for visitors.",
              bullets: [
                "Apps such as Kakao T allow you to:",
                "Set your pickup location precisely",
                "Enter your destination in English",
                "See estimated fares",
                "Reduce communication barriers",
              ],
              tail:
                "For first-time visitors, using an app is often easier than street-hailing.",
            },
            {
              title: "💳 Payment Methods",
              body: "Most taxis accept:",
              bullets: [
                "International credit cards",
                "Mobile payments",
                "In some cases, transportation cards",
              ],
              tail:
                "Carrying a small amount of cash is still advisable as a backup. If paying by card, confirm with the driver before departure if you are unsure.",
            },
            {
              title: "🧳 When Taxis Improve the Experience",
              body: "Taxis are especially useful for:",
              bullets: [
                "Late-night returns to your accommodation",
                "Early morning airport transfers",
                "Traveling with multiple suitcases",
                "Visiting locations not well connected by subway",
              ],
              tail:
                "In these situations, the additional cost may improve overall comfort and efficiency.",
            },
            {
              title: "⚠️ Common Mistakes to Avoid",
              body: "Common mistakes include:",
              bullets: [
                "Taking taxis during heavy rush hour without checking traffic",
                "Using taxis for every short distance without comparing routes",
                "Entering the wrong pickup location in an app",
                "Assuming all payment methods are accepted without confirmation",
              ],
              tail:
                "A quick comparison in a map app can prevent unnecessary expenses.",
            },
            {
              title: "🧠 Quick Decision Check",
              body: "Before choosing a taxi, ask:",
              bullets: [
                "Is public transport direct and simple?",
                "Will traffic significantly increase travel time?",
                "Does this ride save meaningful time or effort?",
              ],
              tail:
                "If the answer is yes, a taxi may be justified. If not, public transport is often more cost-efficient.",
            },
            {
              title: "✅ Bottom Line",
              body:
                "Taxis in South Korea are safe, regulated, and easy to use. When chosen strategically, they add flexibility and comfort to your trip. When overused, they increase your daily transportation budget without saving much time. Understanding the trade-off between cost and convenience helps you decide wisely.",
            },
          ],
        },
        {
          title: "Transportation Cards & Transfers",
          slug: "transportation-cards",
          icon: "card",
          image: "transport",
          description:
            "What card to buy, how transfers work, and the simple habits that keep costs low.",
          quickAnswer:
            "This page helps you choose the right transport card and use it correctly.",
          content: [
            {
              title: "🚇 Introduction",
              body:
                "A transportation card and a few basic rules make public transport in Korea straightforward. You do not need complex passes or tourist bundles. Most visitors only need one rechargeable transportation card and an understanding of how transfer time windows work.",
            },
            {
              title: "🪪 Get One Transportation Card (Day One)",
              body: "Buy a rechargeable transportation card as soon as possible after arrival.",
              subsections: [
                {
                  title: "It works for:",
                  plainTitle: true,
                  bullets: [
                    "Subways",
                    "City buses",
                    "Many taxis",
                    "Convenience stores (small purchases)",
                  ],
                  tail:
                    "You do not need a special tourist edition. If it works on both buses and subways, it is sufficient for most travelers.",
                },
                {
                  title: "Cards are available at:",
                  plainTitle: true,
                  bullets: [
                    "Airport convenience stores",
                    "Subway station machines",
                    "Major convenience store chains",
                  ],
                },
              ],
            },
            {
              title: "📲 How to Use It (The Only Routine That Matters)",
              body: "The routine is simple:",
              bullets: [
                "Tap when entering the subway",
                "Tap when boarding a bus",
                "Tap again when exiting",
              ],
              tail: "The fare is calculated automatically based on distance.",
            },
            {
              title: "⚠️ Important Bus Rule",
              body: "If you forget to tap out on a bus:",
              bullets: [
                "You may lose your transfer discount",
                "The system may treat your next ride as a new full fare",
              ],
              tail: "This is one of the most common reasons travelers pay more than expected.",
            },
            {
              title: "🔄 How Transfers Actually Work",
              emphasis: "The key principle: Transfers operate within a time window.",
              body:
                "If you use the same card and tap again within the allowed time window, the system combines your rides and applies a reduced fare. Typical published standards:",
              bullets: [
                "Seoul metropolitan area: 30 minutes during the day, 60 minutes late at night",
                "Busan: 30 minutes",
              ],
              tail:
                "Transfer limits (how many rides count as one connected journey) vary slightly by city. The most important rule is consistency: use the same card and tap correctly each time.",
            },
            {
              title: "💡 The Biggest Cost Saver",
              emphasis: "Use one card consistently.",
              body:
                "Transfer discounts depend on continuous use of the same card within the allowed time window. Switching cards during the day may cancel the discount. This single habit prevents most unexpected extra charges.",
            },
            {
              title: "📊 Realistic Daily Cost Expectations",
              body: "For typical sightseeing days in major cities:",
              bullets: [
                "Daily public transport spending often falls between 5,000-10,000 KRW, depending on distance and number of rides.",
              ],
              tail:
                "You do not need to preload large balances. Recharge when needed. There is no price advantage to loading a large amount at once.",
            },
            {
              title: "🧠 Easy Habits That Lower Costs",
              body: "You do not need special passes to spend less.",
              subsections: [
                {
                  title: "Simple habits work:",
                  bullets: [
                    "Group attractions by neighborhood",
                    "Combine bus and subway within one transfer window",
                    "Walk short distances between nearby stops",
                    "Check your route once before riding",
                    "Use taxis strategically (late night, heavy luggage, severe weather)",
                  ],
                },
              ],
              tail: "Efficiency reduces costs naturally.",
            },
            {
              title: "🏷️ What a Transportation Card Is NOT",
              emphasis: "Keep expectations realistic.",
              body: "A transportation card is not:",
              bullets: [
                "A sightseeing pass",
                "A bundled tourist discount package",
                "Something you need to optimize obsessively",
              ],
              tail: "It is simply the fastest and most consistent way to pay for daily transport.",
            },
            {
              title: "✨ Bottom Line",
              body:
                "If you use one card, tap correctly, and transfer within the time window, Korea's public transport becomes predictable and cost-efficient - even for first-time visitors.",
              tail:
                "If you want a broader overview of how public transportation works in major cities, see our guide on Getting Around Korea.",
            },
          ],
        },
        {
          title: "Renting a Car",
          slug: "renting-a-car",
          icon: "car",
          image: "transport",
          description: "When it makes sense (and when it does not).",
          quickAnswer:
            "This page helps you decide if renting a car in Korea is actually worth it.",
          content: [
            {
              title: "🚗 Introduction",
              body:
                "Korea is one of the easiest countries to travel without a car - especially in Seoul and other big cities. But in a few specific cases, renting a car can make your trip smoother and more flexible. This guide helps you decide based on route reality, cost, and requirements - not \"just in case\" thinking.",
            },
            {
              title: "🏙️ The Honest Reality in Major Cities",
              body:
                "In cities like Seoul and Busan, public transport is built for daily commuting:",
              bullets: [
                "Subways and buses cover most tourist routes efficiently",
                "Parking is limited (and often expensive)",
                "Traffic can be heavy during peak hours",
              ],
              tail:
                "For most city-based itineraries, a rental car usually adds cost + friction rather than convenience.",
            },
            {
              title: "✅ When Renting a Car Makes Sense",
              body: "Renting a car is most useful when it clearly adds value:",
              bullets: [
                "Jeju Island (more flexibility, easier multi-stop days)",
                "Coastal / mountain routes with limited direct public transport",
                "Multiple remote spots in one day (photo spots, small villages, trailheads)",
                "Accommodation outside city centers (or you want late-night flexibility)",
              ],
              tail:
                "If your day plan is \"many stops + rural gaps,\" a car often saves time and energy.",
            },
            {
              title: "🚫 When It Usually Does NOT Make Sense",
              body: "Skip the car if your trip is mostly:",
              bullets: [
                "Seoul-focused sightseeing (central areas)",
                "Intercity travel by KTX and local public transport",
                "Hotel near a subway station + you prefer low-effort movement",
              ],
              tail:
                "In many cases, trains are faster and more predictable than driving between major cities.",
            },
            {
              title: "💰 Realistic Cost Expectations",
              body:
                "Prices move a lot by season, booking timing, and pickup location - but these give you a realistic frame.",
              subsections: [
                {
                  title: "Jeju (car rental search averages)",
                  plainTitle: true,
                  bullets: [
                    "Many searches show an average around ₩69,900/day.",
                  ],
                },
                {
                  title: "Seoul (car rental search averages)",
                  plainTitle: true,
                  bullets: [
                    "Many searches show an average around ₩71,000/day.",
                  ],
                },
              ],
              tail:
                "Use these as \"planning ranges,\" not guarantees. Weekends, holidays, and peak seasons can push prices up.",
            },
            {
              title: "🪪 What You Need to Rent and Drive Legally",
              body: "For most foreign visitors, the key requirement is:",
              subsections: [
                {
                  title: "Key requirement",
                  plainTitle: true,
                  bullets: [
                    "International Driving Permit (IDP) + your original license + passport.",
                  ],
                  tail:
                    "Korean legal guidance notes that driving on an overseas license generally requires an IDP under the Geneva Convention (1949) or Vienna Convention (1968), and it is typically valid for a limited period after entry (often referenced as up to 1 year).",
                },
                {
                  title: "Also expect common rental desk policies such as:",
                  plainTitle: true,
                  bullets: [
                    "Minimum age (often 21+)",
                    "License held for at least 1 year (common condition)",
                  ],
                  tail:
                    "Because requirements can vary by company and vehicle class, always verify the exact checklist on the rental listing you book.",
                },
              ],
            },
            {
              title: "🛡️ Insurance: The Part Travelers Underestimate",
              body:
                "Most rentals include basic coverage, but it may not remove your financial risk.",
              bullets: [
                "What the included insurance actually covers",
                "Whether CDW / full coverage is available and what the deductible is",
                "Whether tires, glass, underbody, and single-vehicle incidents are excluded",
              ],
              tail:
                "If you are not confident driving in unfamiliar roads, full coverage often reduces stress more than any \"perfect route plan.\"",
            },
            {
              title: "⚠️ The Most Common Mistake",
              body: "Renting \"just in case.\"",
              bullets: [
                "Paying for unused rental days",
                "Parking fees you did not plan for",
                "Stress in dense city traffic",
                "A trip that becomes less efficient, not more",
              ],
              tail: "Rent only when your itinerary clearly benefits.",
            },
            {
              title: "✅ Decision Checklist (Fast and Practical)",
              body: "Rent a car only if most answers are \"yes\":",
              bullets: [
                "Are you going to Jeju or rural/coastal areas with gaps in transit?",
                "Will you do multiple stops in one day where buses/trains add big detours?",
                "Is parking straightforward at your accommodation?",
                "Do you have an IDP and feel comfortable driving?",
              ],
              tail:
                "If not, public transport is usually the smarter default.",
            },
            {
              title: "✅ Bottom Line",
              body:
                "In Korea, a car is a tool, not a default. If it clearly saves time and effort (Jeju / rural multi-stop days), rent one. If not, you will usually travel faster - and with less stress - by public transportation.",
            },
          ],
        },
      ],
    },
    {
      title: "What to Eat",
      slug: "what-to-eat",
      icon: "bowl",
      image: "/What%20to%20Eat.webp",
      description: "Know what to try first — and what to skip.",
      quickAnswer:
        "Each card opens a focused guide to Korean food, including what to try first, how to find good and affordable restaurants, and which dishes travelers should approach with caution.",
      children: [
        {
          title: "What Should I Eat First in Korea?",
          slug: "what-should-i-try-first",
          icon: "bowl",
          image: "food",
          description:
            "Beginner-friendly Korean dishes, realistic prices by region, and how to choose confidently.",
          quickAnswer:
            "This page helps you choose beginner-friendly Korean food with confidence.",
          content: [
            {
              title: "🍽️ Introduction",
              body:
                "Your first Korean meal should feel comfortable, not overwhelming. You do not need the spiciest or most traditional dish on day one. Start with balanced, widely loved dishes that are easy to understand - both in flavor and price. Below are beginner-friendly options, with realistic price ranges based on major travel regions in Korea.",
            },
            {
              title: "🥘 Beginner-Friendly Dishes (By Region & Budget)",
              body:
                "These dishes are widely available, generally mild, and easy for first-time visitors.",
              subsections: [
                {
                  title: "1️⃣ Bibimbap (Mixed Rice Bowl)",
                  lead: [
                    "What it is: Rice topped with vegetables, meat, egg, and chili paste served separately.",
                    "Why it is good first: You control how much sauce you mix in. Balanced and customizable.",
                    "Typical price range:",
                  ],
                  bullets: [
                    "Seoul: ₩10,000-₩20,000",
                    "Jeonju (famous for bibimbap): around ₩12,000+",
                    "Other cities: ₩9,000-₩15,000",
                  ],
                  tail:
                    "A safe and structured introduction to Korean flavors.",
                },
                {
                  title: "2️⃣ Bulgogi (Marinated Beef)",
                  lead: [
                    "What it is: Sweet soy-marinated grilled beef.",
                    "Why it is good first: Familiar flavor profile. Mild and approachable.",
                    "Typical price range:",
                  ],
                  bullets: [
                    "Seoul: ₩15,000-₩25,000",
                    "Other major cities: ₩12,000-₩20,000",
                  ],
                  tail: "Often served with rice and side dishes.",
                },
                {
                  title: "3️⃣ Pork Soup / Local Signature Soups",
                },
                {
                  title: "Busan - Dwaeji Gukbap (Pork Soup with Rice)",
                  plainTitle: true,
                  bullets: [
                    "A Busan specialty and very beginner-friendly.",
                    "Typical price range: ₩9,000-₩12,000",
                    "Rich but not spicy. Easy to eat and filling.",
                  ],
                },
                {
                  title: "Seolleongtang / Gomtang (Beef Broth Soup)",
                  plainTitle: true,
                  bullets: [
                    "Found in Seoul and other cities.",
                    "Typical price range: ₩10,000-₩15,000",
                    "Clear broth, mild taste. Very comfortable first meal.",
                  ],
                },
                {
                  title: "4️⃣ Jeju Black Pork (If You are in Jeju)",
                  bullets: [
                    "What it is: Grilled pork, usually ordered in 200g portions.",
                    "Typical price example: About ₩20,000 per 200g (varies by restaurant)",
                  ],
                  tail:
                    "Jeju black pork is famous but more expensive than mainland pork. Good for sharing rather than solo dining.",
                },
                {
                  title: "5️⃣ Japchae (Glass Noodles)",
                  bullets: [
                    "Lightly sweet stir-fried noodles with vegetables and beef.",
                    "Typical price range: ₩12,000-₩18,000",
                  ],
                  tail: "Mild and easy to enjoy.",
                },
                {
                  title: "6️⃣ Kimbap (Casual & Budget-Friendly)",
                  bullets: [
                    "Rice rolls wrapped in seaweed.",
                    "Typical price range (nationwide): ₩3,000-₩6,000",
                  ],
                  tail:
                    "Good for a light meal or snack. Ask for non-spicy fillings.",
                },
                {
                  title: "7️⃣ Korean Fried Chicken (Soy-Garlic or Original)",
                  bullets: [
                    "Usually shared.",
                    "Typical price range: ₩18,000-₩25,000 per whole chicken",
                  ],
                  tail:
                    "Choose soy-garlic or original before trying spicy versions.",
                },
              ],
            },
            {
              title: "🥟 Street Food & Casual Snacks",
              body: "If you prefer something very simple:",
              bullets: [
                "Tteokbokki (Korean Rice Cakes in Chili Sauce): around ₩4,000-₩6,000 in markets",
                "Kimbap: ₩3,000-₩6,000",
                "Hotteok (sweet pancake): around ₩2,000-₩3,000",
              ],
              tail:
                "Markets in Seoul (like Gwangjang), Busan, and other cities offer beginner-friendly options at low cost.",
            },
            {
              title: "🌶️ Understanding Spice (Without Fear)",
              body:
                "Korean food has a spicy reputation, but many beginner dishes are mild.",
              bullets: [
                "Red color does not always mean extremely spicy.",
                "Sauce is often served separately.",
                "\"Not spicy, please\" is commonly understood.",
                "Asking \"Is this spicy?\" is normal.",
                "You are not expected to tolerate strong heat.",
              ],
            },
            {
              title: "⏭️ Dishes to Try Later (After You Build Confidence)",
              body: "Explore these after your comfort level grows:",
              bullets: [
                "Very spicy tteokbokki",
                "Strong fermented dishes",
                "Raw seafood (hoe)",
                "Extremely spicy stews",
              ],
              tail: "Explore gradually.",
            },
            {
              title: "💸 Realistic First-Meal Budget Planning",
              body: "If you are budgeting per person:",
              bullets: [
                "Casual snack: ₩3,000-₩7,000",
                "Regular restaurant meal: ₩10,000-₩15,000",
                "BBQ or specialty dish: ₩20,000+",
                "Premium dining: ₩100,000+",
              ],
              tail:
                "This range works across Seoul, Busan, Jeju, Jeonju, and Gyeongju, though tourist zones may be slightly higher.",
            },
            {
              title: "🧭 How to Choose a Good First Restaurant",
              body: "Keep it simple:",
              bullets: [
                "Short, focused menu",
                "Local customers inside",
                "Busy at meal times",
                "Clear pricing displayed",
              ],
              tail:
                "Neighborhood restaurants often offer better value than highly tourist-focused areas.",
            },
            {
              title: "⚠️ Common Beginner Mistakes",
              body: "Avoid:",
              bullets: [
                "Ordering too many dishes at once",
                "Choosing the spiciest dish to \"be adventurous\"",
                "Feeling pressured to try something unfamiliar immediately",
              ],
              tail: "Start with one or two dishes. Add more next meal.",
            },
            {
              title: "✅ Why Starting Mild Works",
              body:
                "When your first meals feel balanced and enjoyable:",
              bullets: [
                "You understand flavor combinations",
                "You gain ordering confidence",
                "You become curious rather than cautious",
              ],
              tail: "Comfort builds curiosity.",
            },
            {
              title: "✅ Bottom Line",
              body:
                "You do not need extreme spice or rare specialties to experience authentic Korean food. Start with mild, structured, widely loved dishes. Use realistic regional price expectations. Build confidence step by step. Korean cuisine becomes more exciting as your comfort grows.",
            },
          ],
        },
        {
          title: "Finding Good & Affordable Restaurants in Korea",
          slug: "finding-good-restaurants",
          icon: "pin",
          image: "food",
          description:
            "Practical methods to choose well, avoid common mistakes, and understand real value when eating out in Korea.",
          quickAnswer:
            "Practical methods to choose well, avoid common mistakes, and understand real value when eating out in Korea.",
          content: [
            {
              title: "🌟 Introduction",
              body:
                "Good decisions reduce travel stress.",
              tail:
                "Finding a good restaurant in Korea is not about luck or viral trends. It is about using practical signals to reduce uncertainty. Many visitors choose based only on review counts or social media popularity. That often leads to long waits, unclear pricing rules, or disappointment. This guide explains how to choose confidently using structured, realistic steps.",
            },
            {
              title: "🔎 1. Search the Right Way",
              body:
                "Use neighborhood-based keywords. In Korea, restaurants are strongly tied to specific districts. Instead of searching only in English, combine: Neighborhood + Dish name.",
              subsections: [
                {
                  title: "Examples",
                  plainTitle: true,
                  bullets: [
                    "Hongdae kalguksu",
                    "Seomyeon dwaeji gukbap",
                    "Jeonju bibimbap",
                    "Jeju black pork",
                  ],
                },
              ],
              tail:
                "Searching this way increases accuracy and reduces tourist-only results. Korean cities operate around local commercial zones. Precision improves outcomes.",
            },
            {
              title: "📸 2. Check Menu Photos Before Ratings",
              body:
                "Price transparency is the strongest signal. High ratings alone do not guarantee good value. Before choosing, check:",
              bullets: [
                "Clear menu board photos with prices",
                "Portion size references (especially meat in grams)",
                "Recent reviews mentioning waiting time",
                "Rules such as \"one order per person\"",
              ],
              tail:
                "If price and portion are clearly visible, risk decreases significantly.",
            },
            {
              title: "📍 3. Understand Regional Price Differences",
              body: "Location influences cost.",
              subsections: [
                {
                  title: "In areas such as",
                  plainTitle: true,
                  bullets: [
                    "Myeongdong (Seoul)",
                    "Haeundae (Busan)",
                    "Hanok Village (Jeonju)",
                  ],
                },
              ],
              tail:
                "Prices may include a location premium. Walking one block away can reduce both cost and waiting time. Tourist convenience often carries a pricing layer.",
            },
            {
              title: "⏱️ 4. Consider Time as Part of the Cost",
              body:
                "Waiting time affects real value. A meal that costs ₩12,000 but requires a 90-minute wait may not be efficient during a short trip.",
              subsections: [
                {
                  title: "Peak hours in major cities",
                  plainTitle: true,
                  bullets: [
                    "19:00–20:30 dinner peak",
                    "12:00–13:30 lunch peak",
                  ],
                },
              ],
              tail:
                "Choosing slightly earlier or later time slots improves success rates. Time is part of your budget.",
            },
            {
              title: "💰 5. Set a Personal Budget Baseline",
              body: "Compare within the same category.",
              subsections: [
                {
                  title: "General reference ranges (may vary by region)",
                  plainTitle: true,
                  bullets: [
                    "Standard local meal: ₩10,000–₩15,000",
                    "Barbecue or specialty meal: ₩20,000+ per person",
                    "Market snacks: a few thousand won",
                  ],
                },
              ],
              tail:
                "Do not compare barbecue pricing to noodle pricing. Compare like with like. Clarity prevents misjudgment.",
            },
            {
              title: "🚫 6. Watch for Common Visitor Mistakes",
              body: "Small details matter. Avoid:",
              bullets: [
                "Choosing only by review count",
                "Ignoring minimum order rules",
                "Not checking meat portion (grams)",
                "Ordering too many dishes at once",
                "Assuming red dishes are always extremely spicy",
              ],
              tail:
                "Most food-related disappointment comes from skipped details.",
            },
            {
              title: "📲 7. Use Reservation Systems When Necessary",
              body:
                "Popular does not always mean accessible. In cities like Seoul and Busan, highly rated restaurants may require:",
              subsections: [
                {
                  title: "Reservation methods",
                  plainTitle: true,
                  bullets: [
                    "Online reservations",
                    "App-based waiting registration",
                    "On-site queue registration",
                  ],
                },
              ],
              tail:
                "Check availability before traveling across the city. This reduces wasted time.",
            },
            {
              title: "🗺️ 8. Regional Context Matters",
              body: "Korea is not uniform.",
              bullets: [
                "Seoul: wide variety, strong reservation culture",
                "Busan: seafood and pork specialties, peak-hour crowding",
                "Jeju: black pork and seafood, rental car often needed",
                "Jeonju: traditional set meals and bibimbap focus",
                "Gyeongju: traditional cuisine and fixed-menu restaurants",
              ],
              tail:
                "Understanding the local context improves decision quality.",
            },
            {
              title: "✅ Bottom Line",
              body:
                "Structure improves enjoyment. Good restaurants in Korea are not difficult to find. But good decisions require structure.",
              bullets: [
                "Search by district.",
                "Check menu photos.",
                "Confirm pricing rules.",
                "Account for waiting time.",
                "Set a budget baseline.",
              ],
              tail:
                "When you approach it methodically, you reduce risk — and increase enjoyment.",
            },
          ],
        },
        {
          title: "Food to Be Careful With",
          slug: "food-to-be-careful-with",
          icon: "chili",
          image: "food",
          description:
            "Very spicy or unfamiliar dishes — what to delay, why it matters, and how to try them safely later.",
          quickAnswer:
            "Very spicy or unfamiliar dishes — what to delay, why it matters, and how to try them safely later.",
          content: [
            {
              title: "🍽️ Food to Be Careful With",
              body: "Start smart, not extreme.",
              bodyLead: true,
              tail:
                "Some Korean dishes are bold in spice, fermentation, or texture. They are authentic and loved locally — but they may not be the best choice for your first few meals. This guide shows what to delay, why it matters, and how to try it later without turning your meal into a test.",
            },
            {
              title: "🧭 Why This Matters for First-Time Visitors",
              body: "Your first meals set your baseline.",
              bodyLead: true,
              tail:
                "If your early meals feel overwhelming (too spicy, too strong-smelling, too unfamiliar in texture), many travelers become cautious and stop exploring. Starting with comfortable dishes first helps you build confidence — then bold dishes become exciting instead of stressful.",
            },
            {
              title: "🌶️ Spicy in Korea Can Surprise You",
              body: "It’s not always “immediate heat.”",
              bodyLead: true,
              subsections: [
                {
                  title: "Korean spice often feels different from what many visitors expect",
                  plainTitle: true,
                  bullets: [
                    "Mild at first, then stronger after a minute",
                    "Sweet or savory before the heat kicks in",
                    "Lingering heat that lasts longer than expected",
                  ],
                },
                {
                  title: "Useful phrases (simple and effective)",
                  lead: [
                    "If you are unsure, ask directly before ordering.",
                  ],
                  bullets: [
                    "“Is this spicy?”",
                    "“Not spicy, please.”",
                    "“Make it mild, please.”",
                    "“Sauce on the side, please.”",
                  ],
                },
              ],
            },
            {
              title: "⚠️ Dishes Many Visitors Should Save for Later",
              body:
                "Popular, but not beginner-friendly. These dishes are not “bad” — they just depend heavily on your tolerance for spice, fermentation, or texture:",
              subsections: [
                {
                  title: "Very spicy dishes",
                  plainTitle: true,
                  bullets: [
                    "Extra-spicy tteokbokki (spicy rice cakes)",
                    "“Fire-level” spicy chicken dishes (very high heat)",
                  ],
                },
                {
                  title: "Strong fermentation / strong aroma",
                  plainTitle: true,
                  bullets: [
                    "Very strong fermented foods (some kimchi stews / soybean-based stews can feel intense)",
                    "Fermented skate (very strong ammonia-like aroma)",
                  ],
                },
                {
                  title: "Raw or “very textured” foods",
                  plainTitle: true,
                  bullets: [
                    "Raw or heavily marinated seafood",
                    "Live octopus (sannakji) (texture can be shocking for first-timers)",
                  ],
                },
                {
                  title: "Organ meats and intense textures",
                  plainTitle: true,
                  bullets: [
                    "Gopchang (intestines) and other organ-based dishes",
                  ],
                },
                {
                  title: "Unfamiliar snack experiences",
                  plainTitle: true,
                  bullets: [
                    "Beondegi (silkworm larvae)",
                  ],
                },
              ],
              tail:
                "Simple rule: if a dish is famous for being extreme, don’t make it your first impression of Korean food.",
            },
            {
              title: "🧩 4 Things Visitors Commonly Miss",
              body: "These cause most “first meal regrets.”",
              subsections: [
                {
                  title: "1) Hidden seafood in broths and kimchi",
                  plainTitle: true,
                  lead: [
                    "Even dishes that don’t look “seafood-based” may use anchovy or shellfish-based broth, or salted seafood in kimchi.",
                  ],
                },
                {
                  title: "2) Hidden pork in soups and sauces",
                  plainTitle: true,
                  lead: [
                    "If you avoid pork for religious or dietary reasons, confirm carefully — pork can appear in broths, dumplings, and stews.",
                  ],
                },
                {
                  title: "3) Allergens that hide in sauces and side dishes",
                  plainTitle: true,
                  lead: [
                    "Common “hidden” triggers include peanuts/nuts, soy, wheat, and shellfish.",
                    "If you have a serious allergy, ask about cross-contamination (shared oil / shared cooking tools).",
                    "Helpful allergy phrases:",
                  ],
                  bullets: [
                    "“I have a ___ allergy. Is it in this dish?”",
                    "“Is this cooked in the same oil or on the same grill?”",
                  ],
                },
                {
                  title: "4) Raw foods are better after your stomach adapts",
                  plainTitle: true,
                  lead: [
                    "If you are sensitive, keep raw seafood and raw-meat dishes for later in the trip — especially if you’re jet-lagged or your stomach is not settled yet.",
                  ],
                },
              ],
            },
            {
              title: "🥢 How Locals Enjoy Strong Food",
              body: "Balance, not bravado.",
              bullets: [
                "Pair spicy dishes with mild sides",
                "Eat strong flavors in small portions",
                "Share intense dishes instead of eating a full portion alone",
                "Adjust their choices based on mood and tolerance",
              ],
              tail:
                "Strong food is usually part of a balanced meal — not a challenge.",
            },
            {
              title: "✅ A Smarter Way to Try Bold Dishes",
              body:
                "You can still enjoy them — just time it better. If a dish sounds intense, use this approach:",
              bullets: [
                "Save it for later (after a few comfortable meals)",
                "Share one portion instead of ordering a full serving alone",
                "Ask: “Is this very spicy?” before ordering",
                "Take a small bite first, then decide",
                "If you’re sensitive: keep a mild backup (rice, soup, dumplings)",
              ],
              tail:
                "This keeps the experience enjoyable and lowers the risk of ruining the meal.",
            },
            {
              title: "🏁 Bottom Line",
              body: "Korean food rewards patience.",
              tail:
                "Start with comfortable, balanced dishes first. Then explore the boldest flavors when you’re ready to appreciate them — not just survive them. If you want safe first-dish ideas before trying bold flavors, see\nWhat Should I Eat First in Korea?: https://planmykorea.com/what-to-eat/what-should-i-try-first/",
            },
          ],
        },
      ],
    },
    {
      title: "Where to Stay",
      slug: "where-to-stay",
      icon: "bed",
      image: "/Where%20to%20Stay.webp",
      description: "Find the right area and hotel for your budget.",
      quickAnswer:
        "Each card opens a focused guide on where to stay in Korea, including best value places, budget stays, and luxury hotels for different travel styles.",
      children: [
        {
          title: "Best Value Places",
          slug: "best-value-places",
          icon: "bed",
          image: "stay",
          description: "Comfort without overspending.",
          quickAnswer: "Comfort without overspending.",
          content: [
            {
              title: "🌟 Introduction",
              body: "Comfort without unnecessary expense.",
              bodyLead: true,
              tail:
                "Finding the best value accommodation in Korea is not about choosing the cheapest room. It is about reducing stress, saving time, and avoiding hidden costs while staying comfortable. A true value stay should make your trip easier every day.",
            },
            {
              title: "⚡ Quick Answer",
              body: "What “best value” usually means in Korea.",
              bodyLead: true,
              subsections: [
                {
                  title: "In practical terms, a best value place is:",
                  plainTitle: true,
                  bullets: [
                    "Within 5–7 minutes of a subway station",
                    "Rated 8.0+ with at least 200 reviews",
                    "On a convenient transport line",
                    "Clean, private bathroom, non-smoking",
                    "Priced in a realistic mid-range band",
                  ],
                },
              ],
              tail:
                "For most visitors, this means choosing a well-located mid-range hotel instead of the absolute cheapest option.",
            },
            {
              title: "🧭 What Best Value Really Means",
              body: "Location matters more than room size.",
              bodyLead: true,
              tail:
                "In Korea, transportation efficiency directly affects your experience. A slightly more expensive hotel near a major subway station can save daily taxi costs, 30–60 minutes of commuting, and physical fatigue from transfers and hills. Value is about total trip efficiency — not just the nightly rate.",
            },
            {
              title: "💸 Realistic Price Bands",
              body: "Understanding accommodation pricing in Korea.",
              subsections: [
                {
                  title: "Instead of focusing on the lowest number shown online, use price bands:",
                  plainTitle: true,
                  bullets: [
                    "Budget: ₩30,000–₩80,000",
                    "Mid-range: ₩80,000–₩150,000",
                    "Luxury: ₩150,000–₩500,000+",
                  ],
                },
              ],
              tail:
                "Prices vary by city, season, and weekends. For first-time visitors in Seoul or Busan, the ₩90,000–₩130,000 range often offers the best balance of comfort and location. Always compare the total price including taxes and fees, not just the advertised minimum rate.",
            },
            {
              title: "🏨 Where Value-Focused Travelers Stay",
              body: "Common accommodation types that balance comfort and cost.",
              subsections: [
                {
                  title: "Most travelers find the best balance in:",
                  plainTitle: true,
                  bullets: [
                    "Mid-range hotels",
                    "Serviced apartments (especially for 4+ nights)",
                    "Well-reviewed business hotels",
                  ],
                },
                {
                  title: "These properties typically provide:",
                  plainTitle: true,
                  bullets: [
                    "Reliable cleanliness",
                    "Private bathrooms",
                    "Elevators",
                    "24-hour reception",
                  ],
                },
              ],
            },
            {
              title: "🛡️ How to Filter for Safe Value",
              body: "A practical method to avoid common problems.",
              subsections: [
                {
                  title:
                    "When searching on Booking, Agoda, Expedia, or Google Hotels, apply these filters:",
                  plainTitle: true,
                  bullets: [
                    "Rating 8.0+",
                    "200+ reviews (500+ preferred)",
                    "Recent reviews within 3–6 months",
                    "Walking distance to subway (under 7 minutes)",
                    "Private bathroom",
                    "Non-smoking",
                  ],
                },
                {
                  title:
                    "Then check recent reviews for repeated warning signs:",
                  plainTitle: true,
                  bullets: [
                    "Noise → “thin walls”, “noisy”",
                    "Smell → “smoke”, “mold”",
                    "Cleanliness → “dirty”, “hair”, “dust”",
                    "Bathroom → “drain”, “flooding”",
                    "Photos → “smaller than expected”, “not like photos”",
                  ],
                },
              ],
              tail:
                "Repeated complaints usually signal real issues.",
            },
            {
              title: "⚠️ Why Cheaper Isn’t Always Better",
              body: "Low prices can hide higher total costs.",
              subsections: [
                {
                  title: "Very cheap accommodations may involve:",
                  plainTitle: true,
                  bullets: [
                    "Long uphill walks",
                    "Poor soundproofing",
                    "Late-night check-in complications",
                    "Smaller rooms than expected",
                  ],
                },
                {
                  title: "Saving ₩20,000 per night can cost more in:",
                  plainTitle: true,
                  bullets: [
                    "Extra taxi rides",
                    "Lost sightseeing time",
                    "Travel fatigue",
                  ],
                },
              ],
              tail:
                "True value balances comfort, location, and logistics.",
            },
            {
              title: "🏙️ Location Strategy: Seoul",
              body: "Choose your base based on your travel style.",
              subsections: [
                {
                  title: "Myeongdong / Euljiro / City Hall",
                  plainTitle: true,
                  lead: [
                    "Easy airport access, central location, low navigation stress.",
                  ],
                },
                {
                  title: "Hongdae / Hapjeong",
                  plainTitle: true,
                  lead: [
                    "More mid-range options, lively atmosphere.",
                    "(Check noise reviews for weekends.)",
                  ],
                },
                {
                  title: "Jongno / Insadong",
                  plainTitle: true,
                  lead: [
                    "Walkable cultural area near palaces and museums.",
                  ],
                },
                {
                  title: "Gangnam / Jamsil",
                  plainTitle: true,
                  lead: [
                    "Efficient only if most activities are in southern Seoul.",
                  ],
                },
              ],
              tail:
                "Avoid properties requiring multiple transfers for daily sightseeing.",
            },
            {
              title: "🌊 Location Strategy: Busan",
              body: "Value depends on purpose.",
              bullets: [
                "Haeundae → Beach and relaxation",
                "Seomyeon → Central transport hub",
                "Busan Station / Nampo → Efficient for KTX and day tours",
              ],
              tail:
                "Choose the area based on where you will spend most of your time.",
            },
            {
              title: "🚫 Common Mistake to Avoid",
              body: "Saving money in the wrong place.",
              bodyLead: true,
              subsections: [
                {
                  title:
                    "Booking far outside main areas just to reduce price often results in:",
                  plainTitle: true,
                  bullets: [
                    "Longer commuting",
                    "Higher transport spending",
                    "Reduced daily energy",
                  ],
                },
              ],
              tail:
                "A centrally located ₩120,000 hotel can be cheaper overall than a ₩70,000 hotel far away.",
            },
            {
              title: "✅ 5-Minute Reservation Checklist",
              body: "Quick checks before confirming your booking.",
              bullets: [
                "Sort reviews by “Newest”",
                "Read the latest 20 reviews",
                "Confirm 24-hour reception if arriving late",
                "Check the walking route on the map (hills? major road noise?)",
                "Confirm property type (hotel, motel, guesthouse, residence)",
              ],
              tail:
                "For motels especially, recent reviews are critical due to quality variation.",
            },
            {
              title: "🏁 Bottom Line",
              body: "Comfort improves your entire trip.",
              tail:
                "Best value is not about being cheap. It is about reducing friction and improving your daily travel experience. Before booking, compare at least two platforms and always check the total price including taxes.",
            },
          ],
        },
        {
          title: "Budget Stays",
          slug: "budget-stays",
          icon: "wallet",
          image: "stay",
          description: "Affordable and comfortable without unnecessary risk.",
          quickAnswer:
            "Affordable and comfortable without unnecessary risk.",
          content: [
            {
              title: "🌟 Introduction",
              body: "Budget does not mean unsafe or uncomfortable.",
              bodyLead: true,
              tail:
                "In Korea, budget stays can be clean, convenient, and reliable — if you know how to filter properly. The key is not choosing the cheapest option, but choosing the safest option within your budget.",
            },
            {
              title: "⚡ Quick Answer",
              body: "How to find a safe budget stay in Korea.",
              bodyLead: true,
              subsections: [
                {
                  title: "Look for:",
                  plainTitle: true,
                  bullets: [
                    "Rating 8.0+",
                    "200+ reviews (recent reviews within 3–6 months)",
                    "Within 7 minutes walking distance of a subway station",
                    "Clear check-in instructions",
                    "Total price including taxes visible",
                  ],
                },
              ],
              tail:
                "For most travelers, this means choosing a well-reviewed hostel, guesthouse, or budget business hotel — not the absolute lowest price available.",
            },
            {
              title: "💸 Realistic Budget Price Bands",
              body:
                "Prices vary by season, weekends, and events. Use price bands instead of chasing the lowest number.",
              subsections: [
                {
                  title: "Seoul (Seoul)",
                  plainTitle: true,
                  bullets: [
                    "Dormitory bed: $10–$30",
                    "Private room (guesthouse/hostel): $45–$90",
                    "Budget business hotel: ₩70,000–₩120,000",
                  ],
                  tail:
                    "During cherry blossom season, holidays, or major concerts, prices can increase significantly.",
                },
                {
                  title: "Busan (Busan)",
                  plainTitle: true,
                  bullets: [
                    "Dormitory bed: $10–$25",
                    "Private room: $40–$85",
                    "Budget hotel: ₩60,000–₩110,000",
                  ],
                  tail:
                    "(Haeundae and beach areas increase during summer.)",
                },
              ],
              tail:
                "Always compare the grand total including taxes and service charges before booking.",
            },
            {
              title: "⚠️ Hidden Costs That Break a Budget",
              body:
                "The most common mistake is focusing only on the displayed minimum price.",
              subsections: [
                {
                  title: "In some cases:",
                  plainTitle: true,
                  bullets: [
                    "10% VAT + 10% service charge may apply",
                    "Additional fees may appear at check-in",
                    "Early check-in or late arrival may require booking the previous night",
                  ],
                },
              ],
              tail:
                "Always compare total cost across at least two platforms.",
            },
            {
              title: "🔍 How to Verify Condition (Most Important Step)",
              body: "Budget stays have greater variation in quality.",
              subsections: [
                {
                  title: "Set these filters:",
                  plainTitle: true,
                  bullets: [
                    "Rating 8.0+",
                    "200+ reviews",
                    "Sort reviews by “Newest”",
                    "Non-smoking preference",
                    "Private bathroom if required",
                  ],
                },
                {
                  title:
                    "Scan the latest 20 reviews for repeated warning signs:",
                  plainTitle: true,
                  bullets: [
                    "Noise → thin walls, noisy",
                    "Smell → smoke, mold",
                    "Cleanliness → dirty, hair, dust",
                    "Bathroom → drain issues, flooding",
                    "Photos → smaller than expected",
                  ],
                },
              ],
              tail:
                "Repeated mentions usually indicate real problems.",
            },
            {
              title: "📍 Location Strategy: Why Distance Matters",
              body:
                "A cheaper room far from transit can cost more in time and energy.",
              subsections: [
                {
                  title: "Seoul",
                  lead: [
                    "Safe budget base areas:",
                  ],
                  bullets: [
                    "Myeongdong / Euljiro / City Hall (easy for first-time visitors)",
                    "Hongdae / Hapjeong (good airport rail access, many hostels)",
                    "Jongno / Insadong (walkable cultural area)",
                  ],
                  tail:
                    "Avoid places requiring multiple subway transfers for daily sightseeing.",
                },
                {
                  title: "Busan",
                  lead: [
                    "Choose based on purpose:",
                  ],
                  bullets: [
                    "Seomyeon → transport hub",
                    "Haeundae → beach access (higher in summer)",
                    "Busan Station / Nampo → convenient for KTX and markets",
                  ],
                },
              ],
            },
            {
              title: "✅ When Budget Stays Work Best",
              body: "Budget stays are ideal when:",
              bullets: [
                "You spend most of your day exploring",
                "You mainly need a clean place to sleep",
                "You travel light",
              ],
            },
            {
              title: "🚩 When to Reconsider",
              body: "You may want to upgrade if:",
              bullets: [
                "You are a very light sleeper",
                "You carry large luggage",
                "You need strong soundproofing",
                "You arrive very late at night without confirmed 24-hour reception",
              ],
            },
            {
              title: "🌙 Late Arrival Warning",
              body: "For early morning flights:",
              bodyLead: true,
              bullets: [
                "Confirm 24-hour reception",
                "Confirm real self check-in availability",
                "If unsure, book the previous night",
              ],
              tail:
                "Many budget travelers overlook this and face check-in problems.",
            },
            {
              title: "📝 5-Minute Booking Checklist",
              body: "Before confirming:",
              bullets: [
                "Is it within 7 minutes of a subway station?",
                "Did you read the latest 20 reviews?",
                "Any repeated complaints about noise or cleanliness?",
                "Are taxes and fees included in the total price?",
                "Is the reception available at your arrival time?",
                "Did you confirm the property type (hostel, motel, hotel)?",
              ],
            },
            {
              title: "🏁 Bottom Line",
              body:
                "Budget stays in Korea can be clean, safe, and convenient — but only if you verify properly.",
              tail:
                "Affordable does not mean careless. Focus on location, condition, and total price — not just the lowest number you see.",
            },
          ],
        },
        {
          title: "Luxury Hotels",
          slug: "luxury-hotels",
          icon: "spark",
          image: "stay",
          description: "Worth it when chosen wisely.",
          quickAnswer: "Worth it when chosen wisely.",
          content: [
            {
              title: "🌟 Luxury Hotels",
              body: "Worth it when chosen wisely.",
              bodyLead: true,
              tail:
                "Luxury hotels in Korea can elevate your trip — but only when they genuinely improve comfort, save time, or create a memorable experience. Luxury should support your itinerary, not replace it. Prices vary by season, demand, and availability, so always confirm the total cost for your specific dates before booking.",
            },
            {
              title: "💎 When Luxury Makes Sense",
              body: "A highlight, not the whole trip.",
              bodyLead: true,
              subsections: [
                {
                  title: "It often makes sense for:",
                  plainTitle: true,
                  lead: [
                    "Luxury works best when it delivers practical value.",
                  ],
                  bullets: [
                    "Special occasions (anniversaries, celebrations)",
                    "A recovery night after a long flight",
                    "A stay with meaningful views (city skyline or oceanfront)",
                    "Reducing transport stress in busy districts",
                  ],
                },
              ],
              tail:
                "If the hotel improves your sleep, convenience, or overall flow, the premium can be justified.",
            },
            {
              title: "🧠 A Smart Strategy",
              body: "One intentional splurge night.",
              bodyLead: true,
              subsections: [
                {
                  title: "Many experienced travelers use a balanced approach:",
                  plainTitle: true,
                  bullets: [
                    "Choose one or two nights of luxury",
                    "Stay mid-range for the rest",
                    "Allocate savings toward food, activities, or local experiences",
                  ],
                },
              ],
              tail:
                "One well-timed luxury night often feels more satisfying than an expensive stay every night.",
            },
            {
              title: "🔍 What to Evaluate Beyond Price",
              body: "Value matters more than brand.",
              bodyLead: true,
              subsections: [
                {
                  title: "Before booking, consider:",
                  plainTitle: true,
                  bullets: [
                    "Location relative to where you will spend most of your time",
                    "Proximity to major subway lines",
                    "Room size compared to price",
                    "Whether the advertised view is guaranteed by room category",
                    "What is included (breakfast, lounge access, spa/sauna facilities)",
                  ],
                },
              ],
              tail:
                "Luxury is defined by convenience and comfort, not just a famous name.",
            },
            {
              title: "🧾 Hidden Costs to Check",
              body: "Details can change the real total.",
              bodyLead: true,
              subsections: [
                {
                  title: "Luxury hotels may involve additional costs that affect value:",
                  plainTitle: true,
                  bullets: [
                    "Taxes and service charges",
                    "Breakfast fees if not included",
                    "Spa or sauna facility policies",
                    "Parking or valet fees",
                    "View upgrades",
                    "Peak-season cancellation penalties",
                  ],
                },
              ],
              tail:
                "Always compare the total price including taxes and fees, not just the starting rate.",
            },
            {
              title: "📍 Where Luxury Delivers Strong Value",
              body: "When location matches your purpose.",
              bodyLead: true,
              subsections: [
                {
                  title: "Luxury tends to provide the most benefit in:",
                  plainTitle: true,
                  bullets: [
                    "Central Seoul districts with walkable attractions",
                    "Busan beachfront areas with ocean views",
                    "Celebration nights or final-night stays",
                    "Trips where comfort and recovery are priorities",
                  ],
                },
              ],
              tail:
                "Choose luxury where it enhances movement and atmosphere, not where it complicates logistics.",
            },
            {
              title: "🚫 Common Mistakes to Avoid",
              body: "Luxury should complement your plan.",
              bodyLead: true,
              subsections: [
                {
                  title: "Travelers often regret luxury bookings when they:",
                  plainTitle: true,
                  bullets: [
                    "Stay far from major transport routes",
                    "Pay for amenities they never use",
                    "Choose luxury every night and limit experiences",
                    "Focus on brand reputation instead of practical location",
                  ],
                },
              ],
              tail:
                "A thoughtful decision leads to better overall satisfaction.",
            },
            {
              title: "🗓️ When to Finalize Your Booking",
              body: "Decide after your itinerary is clear.",
              bodyLead: true,
              tail:
                "Luxury rates fluctuate frequently. It is wiser to confirm your travel dates and daily plans first, then determine whether a luxury stay meaningfully improves your trip.",
            },
            {
              title: "🏁 Bottom Line",
              body: "One great night beats seven expensive ones.",
              bodyLead: true,
              tail:
                "Luxury hotels in Korea are worth it when used intentionally. If they enhance comfort, reduce stress, or create a lasting memory, they are a smart choice. Before booking, compare at least two platforms and confirm the total cost including taxes and fees.",
            },
          ],
        },
      ],
    },
    {
      title: "Things to Do",
      slug: "things-to-do",
      icon: "spark",
      image: "/Things%20to%20Do.webp",
      description: "See what’s truly worth your time and money.",
      quickAnswer:
        "Each card opens a focused guide to things to do in Korea — from must-see places for first-time visitors to flexible ways to explore and attraction passes that help you save money.",
      children: [
        {
          title: "Must-See for First Timers",
          slug: "must-see-for-first-timers",
          icon: "spark",
          image: "basics",
          description:
            "Explore the places that truly represent Korea — history, modern life, and unforgettable scenery in a balanced first trip.",
          quickAnswer:
            "Focus on a balanced mix of history, modern life, and one unforgettable view instead of trying to see everything.",
          content: [
            {
              title: "🌟 Introduction",
              body:
                "Your first trip to Korea should feel clear, not overwhelming.",
              tail:
                "Instead of trying to see everything, focus on a small number of places that explain the country properly. A balanced mix of history, daily life, and one strong scenic moment will give you a much better first impression than rushing through a long checklist.",
            },
            {
              title: "✅ What Makes a Place \"Must-See\"?",
              body:
                "Not every famous place is essential for a first visit. A true must-see usually does at least two of the following:",
              bullets: [
                "Explains Korea's historical background",
                "Reflects modern Korean city life",
                "Feels culturally distinct and difficult to replace",
                "Is realistic to visit without complicated logistics",
              ],
              tail:
                "If a place takes half a day in transportation but adds little understanding, it's better saved for a future trip.",
            },
            {
              title: "🧭 The Smart First-Timer Structure",
              body: "Most successful first trips follow this order:",
              bullets: [
                "Seoul — Understand Korea's past and present",
                "Busan or Jeju — Add coastal scenery or natural contrast",
                "Gyeongju or Jeonju — Experience concentrated traditional heritage",
              ],
              tail:
                "This structure prevents overplanning while still giving a complete picture of the country.",
            },
            {
              title: "🏙️ Seoul: The Essential Foundation",
              body:
                "Seoul is not just the capital — it is the fastest way to understand Korea.",
              subsections: [
                {
                  title: "Historical Highlights",
                  plainTitle: true,
                },
                {
                  title: "Gyeongbokgung Palace",
                  lead: [
                    "Korea's most recognized royal palace and an ideal starting point.",
                  ],
                  bullets: [
                    "Admission: ₩3,000 (Adults 19-64), free for under 18 and 65+",
                    "Time needed: 1.5-2.5 hours",
                    "Best paired with Gwanghwamun Square and Insadong.",
                  ],
                },
                {
                  title: "Changdeokgung Palace",
                  lead: [
                    "A UNESCO-listed palace known for its natural layout.",
                  ],
                  bullets: [
                    "Admission: ₩3,000 (Adult)",
                    "Secret Garden (Huwon): additional ₩5,000 (timed entry required)",
                    "Plan extra time if visiting the Secret Garden.",
                  ],
                },
                {
                  title: "Bukchon Hanok Village",
                  lead: [
                    "Traditional Korean houses with city views.",
                    "Visit respectfully, as it is a residential neighborhood.",
                  ],
                },
                {
                  title: "Modern & Lively Districts",
                  plainTitle: true,
                },
                {
                  title: "Myeongdong",
                  lead: [
                    "Street food, K-beauty, and global brands.",
                    "Best for first-time shopping convenience.",
                  ],
                },
                {
                  title: "Insadong",
                  lead: [
                    "Traditional tea houses, crafts, and cultural souvenirs.",
                    "Compact and easy to combine with palace visits.",
                  ],
                },
                {
                  title: "Scenic Perspective",
                  plainTitle: true,
                },
                {
                  title: "N Seoul Tower",
                  lead: [
                    "Panoramic skyline views of the city.",
                  ],
                  bullets: [
                    "Admission (Observatory): ₩21,000-₩26,000 (adult, varies by season and promotion)",
                    "Note: The tower area itself is free to visit. Only the observatory requires a ticket.",
                    "Best visited near sunset.",
                  ],
                },
              ],
            },
            {
              title: "🌊 Busan: Coastal Energy and Market Culture",
              body:
                "Busan offers ocean views without sacrificing urban convenience.",
              subsections: [
                {
                  title: "Coastal Highlights",
                  plainTitle: true,
                },
                {
                  title: "Haeundae Beach",
                  lead: [
                    "Iconic urban beach with easy subway access.",
                  ],
                },
                {
                  title: "Gamcheon Culture Village",
                  lead: [
                    "Colorful hillside streets and photo spots.",
                  ],
                  bullets: [
                    "Optional map/stamp experience: around ₩2,000 (not required)",
                  ],
                },
                {
                  title: "Local Market Experience",
                  plainTitle: true,
                },
                {
                  title: "Jagalchi Market",
                  lead: [
                    "Seafood market and harbor district atmosphere.",
                  ],
                },
              ],
            },
            {
              title: "🍃 Jeju: Nature as the Main Experience",
              body:
                "Jeju is ideal if your trip needs landscapes more than shopping.",
              subsections: [
                {
                  title: "Natural Highlights",
                  plainTitle: true,
                },
                {
                  title: "Seongsan Ilchulbong",
                  lead: [
                    "Iconic volcanic crater and sunrise viewpoint.",
                    "One of Korea's most recognizable natural landmarks.",
                  ],
                  bullets: [
                    "Admission: ₩5,000 (Adult)",
                  ],
                },
              ],
            },
            {
              title: "🏛️ Gyeongju: High-Density History",
              body:
                "Gyeongju concentrates historical heritage in one compact city.",
              subsections: [
                {
                  title: "Bulguksa Temple",
                  lead: [
                    "Historic Buddhist temple complex.",
                    "(Admission currently free following nationwide temple entrance fee removal policy.)",
                  ],
                },
                {
                  title: "Donggung Palace and Wolji Pond",
                  lead: [
                    "Popular evening site with illuminated reflections.",
                  ],
                  bullets: [
                    "Admission: ₩3,000 (Adult)",
                  ],
                },
              ],
            },
            {
              title: "🍲 Jeonju: Traditional Streets and Food Culture",
              body: "Jeonju is compact and walkable.",
              subsections: [
                {
                  title: "Jeonju Hanok Village",
                  lead: [
                    "Large traditional neighborhood ideal for slow exploration.",
                  ],
                },
                {
                  title: "Gyeonggijeon Shrine",
                  lead: [
                    "Historic shrine within walking distance of the Hanok Village.",
                  ],
                  bullets: [
                    "Admission: ₩3,000 (Adult)",
                  ],
                },
              ],
            },
            {
              title: "🗺️ How to Choose Without Overplanning",
              body: "Per city, aim for:",
              bullets: [
                "1 major historical site",
                "1 lively district",
                "1 scenic viewpoint",
              ],
              tail:
                "Avoid scheduling more than 2-3 major stops per day. Travel time and walking distances add up faster than expected.",
            },
            {
              title: "💸 Budget Reality for Must-See Planning",
              body: "Many meaningful experiences in Korea are completely free:",
              bullets: [
                "Traditional neighborhoods",
                "Markets",
                "Beaches",
                "Temple complexes",
                "Hanok districts",
              ],
              tail:
                "Paid sites are generally modest compared to many global destinations. A simple budgeting rule: Free district + One paid highlight per day.",
            },
            {
              title: "🏁 Bottom Line",
              body:
                "You don't need to see everything to understand Korea.",
              tail:
                "A balanced mix of history, modern life, and one unforgettable view will give you a complete first impression. If your days end inspired rather than exhausted, you chose the right must-see places.",
            },
          ],
        },
        {
          title: "Explore Korea Your Way",
          slug: "explore-korea",
          icon: "pin",
          image: "/leaf%20images/Top%20Places%20by%20City.webp",
          description:
            "Go beyond the basics and choose places that truly add depth to your second trip — culturally, historically, and geographically.",
          quickAnswer:
            "Your second trip should add clarity — not just more stops.",
          content: [
            {
              title: "🧭 Explore Korea Your Way",
              body:
                "Your second trip should add clarity — not just more stops.",
              tail:
                "If your first visit covered major palaces, skyline views, and famous districts, your next trip should focus on places that help you understand Korea more deeply. This page highlights meaningful second-trip anchors — not just popular spots.",
            },
            {
              title: "🏛️ 1) Seoul — Historical & Political Foundations",
              body:
                "Instead of repeating palace complexes, consider places that explain Korea's philosophical and modern structure.",
              subsections: [
                {
                  title: "Jongmyo Shrine",
                  lead: [
                    "UNESCO World Heritage site dedicated to royal ancestral rites.",
                    "Why it matters:",
                  ],
                  bullets: [
                    "Physical expression of Confucian state ideology",
                    "More ritual-focused than decorative",
                    "Still used for ceremonial traditions",
                    "Admission: ₩1,000 (Adult, general admission)",
                    "Special guided programs or combined tickets may vary.",
                  ],
                },
                {
                  title: "National Museum of Korea",
                  lead: [
                    "The largest museum in Korea.",
                    "Why it matters:",
                  ],
                  bullets: [
                    "Chronological overview of Korean civilization",
                    "English-supported displays",
                    "Strong cultural context for second-time visitors",
                    "Admission: Permanent exhibition: Free",
                    "Special exhibitions: Separate ticket (varies by exhibition)",
                  ],
                },
                {
                  title: "War Memorial of Korea",
                  lead: [
                    "Comprehensive overview of modern Korean military history.",
                    "Why it matters:",
                  ],
                  bullets: [
                    "Structured explanation of the Korean War",
                    "Adds geopolitical context to later DMZ visits",
                    "Admission: Permanent exhibition: Free",
                    "Some special exhibitions may be ticketed.",
                  ],
                },
              ],
            },
            {
              title: "🏯 2) One Deep Heritage City (Choose One)",
              body:
                "Rather than repeating multiple royal sites, choose one historic capital and explore it thoroughly.",
              subsections: [
                {
                  title: "Gyeongju — Former Silla Capital",
                  lead: [
                    "Why it matters:",
                  ],
                  bullets: [
                    "Royal tomb complexes integrated into the city",
                    "UNESCO-listed heritage",
                    "Strong night atmosphere around Donggung & Wolji",
                    "Donggung Palace and Wolji Pond — Admission: ₩3,000 (Adult)",
                    "Bulguksa Temple — Admission: Free (Currently free following temple heritage fee abolition policy)",
                  ],
                },
                {
                  title: "Hahoe Folk Village",
                  lead: [
                    "Traditional Confucian clan village.",
                    "Why it matters:",
                  ],
                  bullets: [
                    "Preserved elite village structure",
                    "Living cultural landscape",
                    "Admission: ₩5,000 (Adult)",
                  ],
                },
                {
                  title: "Hwaseong Haenggung",
                  lead: [
                    "Part of the Suwon Hwaseong fortress complex.",
                    "Why it matters:",
                  ],
                  bullets: [
                    "Late Joseon reform-era urban fortress",
                    "Walkable city wall experience",
                    "Admission: ₩2,000 (Adult)",
                  ],
                },
              ],
            },
            {
              title: "🌿 3) Add One Strong Nature Anchor",
              body:
                "Geography shapes Korean identity. A second trip benefits from one major natural landscape.",
              subsections: [
                {
                  title: "Seoraksan National Park",
                  lead: [
                    "Granite peaks and dramatic seasonal scenery.",
                    "Why it matters:",
                  ],
                  bullets: [
                    "Strongest mountain skyline on the mainland",
                    "Compact but visually powerful",
                    "Seorak Cable Car — Admission: ₩15,000 (Adult, round trip)",
                    "Park entry areas are generally free.",
                  ],
                },
                {
                  title: "Seongsan Ilchulbong",
                  lead: [
                    "UNESCO-listed volcanic crater.",
                    "Why it matters:",
                  ],
                  bullets: [
                    "Coastal volcanic formation",
                    "Sunrise viewpoint",
                    "Admission: ₩5,000 (Adult)",
                  ],
                },
              ],
              tail:
                "Jeju works best when planned as a theme (oreum hiking, coastal walking, scenic driving).",
            },
            {
              title: "🌊 4) Busan — Coastal Geography Beyond the Headline Beach",
              body:
                "If your first visit included Haeundae and Gamcheon, expand outward.",
              subsections: [
                {
                  title: "Huinnyeoul Culture Village",
                  lead: [
                    "Cliffside walking district in Yeongdo.",
                    "Why it matters:",
                  ],
                  bullets: [
                    "Coastal geology + residential texture",
                    "Less commercial density",
                    "Admission: Free",
                  ],
                },
                {
                  title: "Gwangalli Beach",
                  lead: [
                    "Evening skyline and bridge views.",
                  ],
                  bullets: [
                    "Admission: Free",
                  ],
                },
                {
                  title: "Taejongdae Park",
                  lead: [
                    "Rocky coastal promontory.",
                  ],
                  bullets: [
                    "Admission: Free",
                    "(Danubi train inside the park requires a separate ticket.)",
                  ],
                },
              ],
            },
            {
              title: "🛂 5) Political Context — DMZ Experience",
              body:
                "For travelers seeking modern historical understanding:",
              subsections: [
                {
                  title: "Third Tunnel of Aggression",
                  lead: [
                    "Part of the DMZ tour circuit.",
                    "Why it matters:",
                  ],
                  bullets: [
                    "Direct experience of division history",
                    "Educational rather than entertainment-focused",
                    "Admission (within tour structure): Approximately ₩9,000-12,000 depending on walking vs. monorail access.",
                    "Passport required.",
                  ],
                },
              ],
            },
            {
              title: "🗺️ Planning Structure That Works",
              body:
                "A strong second-trip framework often includes:",
              bullets: [
                "One deeper Seoul foundation site",
                "One historic capital city",
                "One major nature destination",
                "One contextual site (museum or DMZ)",
              ],
              tail:
                "This prevents repetition and adds dimension.",
            },
            {
              title: "💸 Budget Perspective",
              body:
                "Many meaningful second-trip experiences are free:",
              bullets: [
                "National museums (permanent exhibitions)",
                "Coastal districts",
                "Parks and fortress walls",
              ],
              tail:
                "Paid heritage and nature sites remain modest compared to many global destinations. Depth usually depends more on time than cost.",
            },
            {
              title: "🏁 Bottom Line",
              body:
                "Your first trip showed you Korea's highlights.",
              bullets: [
                "how philosophy shaped architecture",
                "how geography shaped settlement",
                "how history shapes modern politics",
              ],
              tail:
                "Choose depth over volume. Move slower. Let structure guide your planning.",
            },
          ],
        },
        {
          title: "Korea Attraction Passes & Discounts",
          slug: "attraction-passes-discounts",
          icon: "card",
          image: "/leaf%20images/Discount%20Passes.webp",
          description:
            "Official attraction passes, regional discount cards, and when they genuinely reduce your travel costs in Korea.",
          quickAnswer:
            "Compare official passes by region and travel pace to see when they truly save money.",
          content: [
            {
              title: "✨ Introduction",
              emphasis:
                "Some passes can significantly reduce costs. Others only make sense for specific travel styles.",
              body:
                "Korea offers several official attraction passes and regional discount programs. This page explains where each pass works, what it includes, and when it actually saves money.",
              tail:
                "Most visitors do not automatically need a pass. The key is matching the product to your itinerary.",
            },
            {
              title: "🚆 Nationwide Transportation Savings",
              emphasis: "KORAIL PASS (Foreign Visitors Only)",
              body:
                "Region: Nationwide (Korail-operated trains including KTX). Type: Rail pass for intercity travel.",
              subsections: [
                {
                  title: "What It Covers",
                  bullets: [
                    "Unlimited travel on Korail-operated trains during selected validity period",
                    "Useful for multi-city itineraries",
                  ],
                },
                {
                  title: "When It Makes Sense",
                  bullets: [
                    "Seoul ↔ Busan",
                    "Busan ↔ Gyeongju",
                    "Seoul ↔ Andong",
                    "Multiple long-distance KTX rides within a few days",
                  ],
                },
                {
                  title: "Important Conditions",
                  bullets: [
                    "Available only to short-term foreign visitors",
                    "Seat reservations required",
                    "Not valid for subways or local metro systems",
                    "Must follow official reservation rules",
                  ],
                },
              ],
              tail:
                "This is a transportation savings tool - not an attraction pass - but it can reduce overall travel costs significantly when moving between cities.",
            },
            {
              title: "🏙️ Seoul",
              emphasis: "Discover Seoul Pass",
              body: "Region: Seoul. Format: Time-based (48 / 72 / 120 hours).",
              subsections: [
                {
                  title: "What It Includes",
                  bullets: [
                    "Free entry or discounted access to selected attractions",
                    "Includes a mix of palaces, observatories, museums, and experiences",
                  ],
                },
                {
                  title: "How It Works",
                  bullets: [
                    "The timer begins when you enter your first attraction - not when you purchase it.",
                  ],
                },
                {
                  title: "When It Saves Money",
                  bullets: [
                    "You visit 3 or more paid attractions within the time window",
                    "You include higher-cost attractions",
                    "Your schedule is fixed and efficient",
                  ],
                },
                {
                  title: "When It Does Not",
                  bullets: [
                    "You prefer parks, neighborhoods, and free museums",
                    "You travel slowly and change plans frequently",
                    "You only visit 1-2 paid sites per day",
                  ],
                },
              ],
              tail: "Time-based passes reward structured planning.",
            },
            {
              title: "🌊 Busan",
              emphasis: "VISIT BUSAN PASS",
              body: "Region: Busan. Format: 24-hour / 48-hour time-based pass.",
              subsections: [
                {
                  title: "What It Includes",
                  bullets: [
                    "Selected attractions free",
                    "Others discounted",
                    "Mix of cultural sites and paid experiences",
                  ],
                },
                {
                  title: "Important Clarification",
                  bullets: [
                    "Not all listed partners are free-entry.",
                    "Some offer discounts only.",
                    "Always check the official partner list before purchasing.",
                  ],
                },
                {
                  title: "When It Saves Money",
                  bullets: [
                    "You combine multiple paid attractions within one day",
                    "You plan route order carefully",
                    "You prioritize higher-cost experiences",
                  ],
                },
                {
                  title: "When It Does Not",
                  bullets: [
                    "You focus mainly on beaches and outdoor areas",
                    "You travel slowly",
                    "Your schedule is flexible",
                  ],
                },
              ],
            },
            {
              title: "🌿 Gyeonggi Province (Near Seoul)",
              emphasis: "Gyeonggi Tour Pass",
              body:
                "Region: Gyeonggi-do (Suwon, Gapyeong and surrounding areas). Format: 24h / 48h / 72h / 120h time-based options.",
              subsections: [
                {
                  title: "What It Includes",
                  bullets: [
                    "Entry or discounts at participating attractions",
                    "Designed for short regional trips outside Seoul",
                  ],
                },
                {
                  title: "When It Saves Money",
                  bullets: [
                    "You plan multiple paid attractions within one province",
                    "You organize visits geographically",
                  ],
                },
                {
                  title: "Important Note",
                  bullets: [
                    "Coverage depends on current partner list.",
                    "Always confirm participating attractions before purchase.",
                  ],
                },
              ],
            },
            {
              title: "🗺️ Regional Tour Pass Programs",
              body:
                "Several provinces operate official regional passes (examples include Jeonbuk and Gyeongbuk).",
              bullets: [
                "Provide entry or discounts at selected local attractions",
                "Operate via QR/mobile validation",
                "Work best when your entire trip stays inside that region",
              ],
              tail:
                "Regional passes are not useful for nationwide itineraries. They are designed for concentrated regional exploration.",
            },
            {
              title: "✅ When Attraction Passes Actually Save Money",
              body: "A pass usually makes financial sense if:",
              bullets: [
                "You visit 3+ paid attractions in one day",
                "The attractions included are mid- to high-priced",
                "You activate the pass strategically",
                "Your schedule is fixed",
              ],
              tail: "Passes reward efficiency.",
            },
            {
              title: "⚠️ When They Do Not",
              body: "Passes usually do not help if:",
              bullets: [
                "You enjoy relaxed mornings",
                "You spend time in markets and neighborhoods",
                "You focus on free museums and outdoor areas",
                "You only plan 1-2 ticketed sites per day",
              ],
              tail: "Time pressure reduces both savings and enjoyment.",
            },
            {
              title: "🧭 The Most Common Tourist Mistake",
              emphasis: "Buying before planning.",
              body: "Many travelers:",
              bullets: [
                "Purchase \"just in case\"",
                "Activate too early",
                "Rush between locations",
                "Feel pressure to maximize value",
              ],
              tail: "A pass should support your plan - not control it.",
            },
            {
              title: "🧮 A Simple Decision Formula",
              body:
                "Ask yourself: How many paid attractions will I realistically visit within the pass time window?",
              bullets: [
                "1-2 -> Pay individually",
                "3+ -> Compare total ticket prices with pass price",
              ],
              tail:
                "Always check official attraction websites for updated pricing before deciding.",
            },
            {
              title: "🏁 Final Advice",
              body: "Korea is generally affordable for sightseeing.",
              bullets: [
                "Many historic sites have low entrance fees.",
                "Many national museums are free.",
                "Outdoor attractions cost nothing.",
              ],
              tail:
                "Attraction passes can be useful tools - but only when matched to a clear, structured itinerary. In many cases, flexibility provides better value than a pass.",
            },
          ],
        },
      ],
    },
    {
      title: "Travel Basics",
      slug: "travel-basics",
      icon: "compass",
      image: "/Travel%20Basics.webp",
      description: "Handle internet, money, and safety with less stress.",
      quickAnswer:
        "Start with the travel basics for visiting Korea — simple etiquette, safety expectations for travelers, and practical guidance on shopping value, VAT refunds, and real discounts.",
      children: [
        {
          title: "Basic Korean Etiquette: Simple Rules for Travelers",
          slug: "basic-korean-etiquette",
          icon: "hand",
          image: "/leaf%20images/Basic%20Korean.webp?v=20260209",
          description:
            "Practical Korean etiquette for visitors. Learn the small habits that prevent awkward moments — greetings, public-space manners, dining basics, and cultural “unspoken rules.”",
          quickAnswer:
            "Korean etiquette is less about \"strict rules\" and more about respect, quiet consideration, and reading the situation. You do not need to be perfect. You just need to avoid the most common misunderstandings.",
          content: [
            {
              title: "🧭 Quick Overview",
              body:
                "Korean etiquette is less about \"strict rules\" and more about respect, quiet consideration, and reading the situation.",
              tail:
                "You do not need to be perfect. You just need to avoid the most common misunderstandings.",
            },
            {
              title: "👋 1. Greetings and First Impressions",
              body:
                "A small gesture makes interactions smoother. A light nod or small bow is normal when you:",
              bullets: [
                "meet someone for the first time",
                "say thank you",
                "interact with staff in shops, hotels, and restaurants",
              ],
              tail:
                "You do not need a deep bow. A brief, respectful nod is enough.",
            },
            {
              title: "🏷️ 2. Names, Titles, and How to Address People",
              body:
                "Names are handled differently than in many Western cultures. Koreans usually avoid calling someone by name alone (especially early on).",
              subsections: [
                {
                  title: "A safe, common pattern is:",
                  plainTitle: true,
                  bullets: [
                    "First name + \"씨\" (ssi)",
                    "First name + \"님\" (nim)",
                  ],
                },
                {
                  title: "If you are unsure, it is also fine to avoid names entirely and use:",
                  plainTitle: true,
                  bullets: [
                    "\"Excuse me\" + a polite tone",
                    "\"Thank you\" (감사합니다)",
                  ],
                },
              ],
              tail:
                "This is more important in formal settings or first meetings.",
            },
            {
              title: "🚇 3. Public Space Etiquette",
              body: "Quiet and order are strongly valued.",
              subsections: [
                {
                  title: "In public spaces (especially transport), it is best to:",
                  plainTitle: true,
                  bullets: [
                    "keep your voice low",
                    "avoid loud videos on speaker",
                    "keep calls short",
                  ],
                },
                {
                  title: "Line culture is strict and clear in Korea:",
                  plainTitle: true,
                  bullets: [
                    "buses, checkout counters, elevators, popular cafes",
                    "Cutting in line is usually viewed very negatively.",
                  ],
                },
              ],
            },
            {
              title: "🍽️ 4. Dining Etiquette",
              body:
                "Simple habits prevent the most common awkward moments.",
              subsections: [
                {
                  title: "The basics:",
                  plainTitle: true,
                  bullets: [
                    "If older people are at the table, wait a moment before starting",
                    "Do not stick chopsticks vertically into rice (ritual symbolism)",
                    "Shared side dishes are normal in Korea",
                    "Water is usually free, often self-serve",
                    "Many restaurants use a table call button (no need to wave)",
                  ],
                },
                {
                  title: "Payment culture often differs from table-service countries:",
                  plainTitle: true,
                  bullets: ["Paying at the counter is common"],
                },
              ],
            },
            {
              title: "👟 5. Shoes and Indoor Culture",
              body: "If locals remove shoes, you should too.",
              subsections: [
                {
                  title: "You may need to take off shoes in:",
                  plainTitle: true,
                  bullets: [
                    "homes",
                    "some traditional restaurants",
                    "hanok stays and some guesthouses",
                  ],
                },
              ],
              tail:
                "If you see shoe racks or people in socks indoors, that is your signal.",
            },
            {
              title: "♻️ 6. Trash, Recycling, and Street Habits",
              body:
                "Korea can feel clean, but trash bins are surprisingly limited.",
              subsections: [
                {
                  title: "It is normal to:",
                  plainTitle: true,
                  bullets: [
                    "carry small trash until you find a bin",
                    "dispose of it at convenience stores or your accommodation",
                  ],
                },
              ],
              tail:
                "Recycling rules are relatively strict. As a visitor, just follow the labels on public bins when available.",
            },
            {
              title: "📸 7. Photo and Privacy Etiquette",
              body: "Be careful with strangers' faces.",
              bullets: [
                "Avoid casually filming or photographing strangers up close.",
                "Inside shops or cafes, it is safer to ask before taking photos.",
              ],
              tail:
                "Also note: Some military-related areas or government-sensitive locations may have photo restrictions.",
            },
            {
              title: "💳 8. Money, Payment, and Tipping",
              body: "Tipping is not expected in Korea.",
              subsections: [
                {
                  title: "In most cases:",
                  plainTitle: true,
                  bullets: [
                    "service charges are already included",
                    "tipping can make staff uncomfortable",
                    "Card payment is extremely common, even for small purchases.",
                  ],
                },
              ],
            },
            {
              title: "🧘 9. Emotional Tone and Conflict Style",
              body: "Korea generally avoids public confrontation.",
              subsections: [
                {
                  title: "If something goes wrong, it is usually best to:",
                  plainTitle: true,
                  bullets: [
                    "speak calmly",
                    "ask staff quietly",
                    "avoid raising your voice in public",
                  ],
                },
              ],
              tail: "Polite and steady communication tends to get better help.",
            },
            {
              title: "⚠️ 10. Sensitive Topics to Avoid",
              body: "Some topics can become uncomfortable quickly.",
              subsections: [
                {
                  title: "It is safer to avoid:",
                  plainTitle: true,
                  bullets: [
                    "jokes about North Korea",
                    "casual comments about military service",
                    "heated political debates",
                    "sensitive historical disputes",
                  ],
                },
              ],
              tail:
                "Even if people do discuss them, visitors should approach carefully.",
            },
            {
              title: "✅ Final Advice",
              body:
                "You do not need to \"perform\" Korean culture.",
              subsections: [
                {
                  title: "If you remember three principles, you will be fine:",
                  plainTitle: true,
                  bullets: [
                    "be quieter than you think you need to be",
                    "follow lines and shared-space norms",
                    "show respect through small gestures",
                  ],
                },
              ],
              tail:
                "Most locals do not expect tourists to know everything. They notice effort more than perfection.",
            },
          ],
        },
        {
          title: "Safety in Korea: What Travelers Should Know",
          slug: "korea-travel-safety",
          icon: "shield",
          image: "/leaf%20images/Is%20Korea%20Safe.webp",
          description:
            "How safe Korea is, what solo travelers should expect, and what to do in an emergency.",
          quickAnswer:
            "Korea is very safe for visitors, including solo travelers, but awareness and basic emergency preparation still matter.",
          content: [
            {
              title: "✨ Introduction",
              body:
                "Korea is widely considered one of the safest countries for travelers.",
              tail:
                "Violent crime is rare in tourist areas, public transport is reliable, and streets remain active late into the night. However, \"safe\" does not mean \"careless.\" Understanding basic awareness makes your trip smoother and more confident.",
            },
            {
              title: "🛡️ 1. General Safety Overview",
              emphasis: "What Most Visitors Notice",
              body: "Many travelers quickly observe:",
              bullets: [
                "People walking alone late at night",
                "Well-lit streets in major cities",
                "Active late-night food areas",
                "Organized and reliable public transportation",
              ],
              tail: "Serious incidents involving tourists are uncommon.",
            },
            {
              title: "🧍 2. Solo Travel Safety",
              emphasis: "Traveling Alone in Korea",
              body: "Solo travel is common and socially accepted.",
              subsections: [
                {
                  title: "Practical Advantages",
                  bullets: [
                    "Clear subway systems",
                    "Easy-to-follow signage",
                    "Convenience stores everywhere",
                    "Dining alone is normal",
                  ],
                  tail:
                    "Even first-time solo travelers usually feel comfortable within a few days.",
                },
                {
                  title: "Dining Alone",
                  lead: ["In Korea:"],
                  bullets: [
                    "Cafes and most restaurants welcome solo diners",
                    "Convenience store meals are widely used and socially normal",
                    "Some traditional BBQ restaurants prefer groups, but alternatives are abundant",
                  ],
                  tail:
                    "There is no social pressure to avoid eating alone.",
                },
              ],
            },
            {
              title: "🌆 3. Day and Night Movement",
              body: "Main streets remain active in Korea's major cities.",
              subsections: [
                {
                  title: "During the Day",
                  bullets: [
                    "Public transport is safe and monitored",
                    "Tourist districts are busy and visible",
                    "Walking alone feels comfortable in major cities",
                  ],
                },
                {
                  title: "At Night",
                  bullets: [
                    "Subways and buses operate safely",
                    "Taxis are reliable and regulated",
                    "Late-night dining streets are busy",
                  ],
                  tail:
                    "Basic rule: stay on well-lit main streets and avoid empty alleys.",
                },
              ],
            },
            {
              title: "⚠️ 4. Situations That Require Awareness",
              body: "Even in safe countries, awareness matters.",
              bullets: [
                "Drink heavily",
                "Stay out extremely late in nightlife areas",
                "Feel tired or disoriented",
                "Carry valuables in crowded subways",
              ],
              tail:
                "Crowded areas can lead to minor issues such as pickpocketing, though it is not widespread.",
            },
            {
              title: "🧭 5. Cultural Differences (Not Safety Risks)",
              body: "Some behaviors may feel unfamiliar:",
              bullets: [
                "People may stare out of curiosity",
                "Public transport is quiet",
                "Strangers do not engage in small talk",
              ],
              tail: "These are cultural norms, not warning signs.",
            },
            {
              title: "🚨 6. Emergency Information",
              body:
                "Emergencies are rare, but preparation reduces stress.",
              subsections: [
                {
                  title: "Emergency Numbers",
                  bullets: ["Police: 112", "Fire / Ambulance: 119"],
                  tail:
                    "These numbers work from mobile phones and public phones. English assistance is commonly available.",
                },
                {
                  title: "Medical Situations",
                  lead: [
                    "For serious issues:",
                    "Call 119.",
                    "For non-urgent care:",
                  ],
                  bullets: [
                    "Visit a hospital",
                    "Ask hotel staff for assistance",
                    "Use a pharmacy for minor issues",
                  ],
                  tail:
                    "Hospitals in major cities often provide English-language support.",
                },
                {
                  title: "Lost Items",
                  lead: [
                    "Korea has a strong lost-and-found system.",
                    "If you lose something:",
                  ],
                  bullets: [
                    "Visit the nearest police station",
                    "Ask hotel staff for help",
                    "File a report",
                  ],
                  tail: "Lost items are frequently returned.",
                },
              ],
            },
            {
              title: "✅ 7. Simple Preparation Checklist",
              body: "Before your trip:",
              bullets: [
                "Save 112 and 119 in your phone",
                "Screenshot your hotel address",
                "Carry travel insurance information",
                "Keep a portable charger",
              ],
              tail: "These small steps increase confidence.",
            },
            {
              title: "💬 Final Thought",
              body:
                "Korea is very safe for visitors, including solo travelers.",
              bullets: [
                "Most trips pass without incident.",
                "Stay aware, not anxious.",
              ],
              tail:
                "Prepared travelers feel relaxed - and relaxation makes travel better.",
            },
          ],
        },
        {
          title:
            "Is Shopping Cheap in Korea? A Practical Guide to Value, VAT Refunds, and Real Discounts",
          slug: "shopping-and-discounts",
          icon: "wallet",
          image: "/leaf%20images/Is%20Shopping%20Cheap%20in%20Korea.webp",
          description:
            "Clear, fact-based guidance on what is truly worth buying in Korea and how official VAT refunds and major discount programs actually work. Understand key numbers, conditions, and common mistakes before you spend.",
          quickAnswer:
            "Shopping in Korea can feel very affordable — or unexpectedly expensive. Smart travelers evaluate value first and apply discounts second.",
          content: [
            {
              title: "🧭 Quick Overview",
              body:
                "Shopping in Korea can feel very affordable — or unexpectedly expensive.",
              subsections: [
                {
                  title: "The difference usually depends on:",
                  plainTitle: true,
                  bullets: [
                    "What you buy",
                    "Where you buy",
                    "Whether a discount truly reduces your total cost",
                  ],
                },
              ],
              tail: "Smart travelers evaluate value first and apply discounts second.",
            },
            {
              title: "🛍️ Is Shopping Cheap in Korea? The Honest Answer",
              emphasis: "Sometimes yes. Sometimes no.",
              body:
                "Korea offers strong value in specific categories, but not everything is cheaper than overseas. Perceived affordability often depends on category, exchange rate, tax refund eligibility, and planning.",
            },
            {
              title: "✅ What Is Usually Worth Buying",
              emphasis: "Categories with Consistent Value",
              body: "Many visitors find reliable value in:",
              bullets: [
                "Korean skincare and cosmetics",
                "Local snacks and packaged food gifts",
                "Small lifestyle goods such as stationery and accessories",
                "Trend-driven Korean fashion brands (not global luxury brands)",
              ],
              tail:
                "These products are often competitively priced and practical to carry home.",
            },
            {
              title: "⚠️ What Is Often Not a Bargain",
              emphasis: "Compare Carefully Before Buying",
              body: "Items that are not consistently cheaper:",
              bullets: [
                "International luxury brands",
                "Imported electronics",
                "Large or heavy products",
                "Impulse purchases in tourist-heavy areas",
              ],
              tail:
                "Luxury goods may appear discounted due to exchange rates or tax refund eligibility, but final savings vary. Always compare prices before assuming something is a deal.",
            },
            {
              title: "🧾 How Discounts Actually Work in Korea",
              body: "Discounts in Korea generally fall into four categories:",
              bullets: [
                "Tax-based (legal system) — VAT refund",
                "Retail chain programs — tourist membership cards",
                "National campaigns — Korea Grand Sale",
                "Duty-free structures — membership + coupon systems",
              ],
              tail:
                "Understanding which type you are using prevents unrealistic expectations.",
            },
            {
              title: "💸 VAT Refund (Tax Refund) — The Most Reliable System",
              emphasis: "Official Immediate Tax Refund Rules",
              body:
                "The following key figures are based on official tourism guidance for 2025–2026 and may be updated:",
              bullets: [
                "Minimum purchase per receipt: ₩15,000 or more",
                "Immediate refund applies when a single purchase is under ₩1,000,000",
                "Total cumulative purchases during the trip: ₩5,000,000 limit",
                "These three numbers are the most important to remember: ₩15,000 / ₩1,000,000 / ₩5,000,000",
              ],
              tail:
                "If your purchase exceeds the immediate refund threshold, standard airport refund procedures may apply instead.",
            },
            {
              title: "ℹ️ Important Clarification About Refund Amount",
              body:
                "Korean VAT is 10%. However, the refunded amount may not always equal the full 10%, depending on processing methods and service fees.",
              tail:
                "Avoid assuming \"10% back\" automatically. Always confirm the actual refund amount shown at payment.",
            },
            {
              title: "📋 Practical VAT Checklist",
              body: "Before paying:",
              bullets: [
                "Confirm the store displays \"Tax Free\" or \"Tax Refund\" signage",
                "Present your passport at checkout",
                "Confirm whether the refund is immediate or processed at departure",
              ],
              tail:
                "Failure to check these steps is one of the most common tourist mistakes.",
            },
            {
              title: "🏬 Department Store Tourist Membership Programs",
              body:
                "Some large retail groups operate tourist-specific membership systems. Recent reports have indicated benefits such as:",
              bullets: [
                "Lotte Department Store: around 5%",
                "Lotte Duty Free: up to 10%",
                "Seven-Eleven: around 10%",
                "Lotte Mart: around 7%",
              ],
              tail:
                "These benefits are corporate programs and may vary by location, promotional period, brand exclusions, or stacking limits. Always confirm current conditions at the store information desk.",
            },
            {
              title: "🎉 Korea Grand Sale (Seasonal Campaign)",
              body:
                "Korea Grand Sale is a government-supported national shopping campaign. Promotions may include:",
              bullets: [
                "Discount tier upgrades",
                "Shopping vouchers",
                "Payment-based cashback (for example, up to 15% with certain payment platforms during specific periods)",
              ],
              tail:
                "Important: \"Up to\" percentages reflect maximum promotional benefits, not guaranteed savings across all stores or products. Campaign periods, participating merchants, and stacking rules may change. Always verify official sources before purchase.",
            },
            {
              title: "🛃 Duty-Free Shopping",
              body: "Duty-free stores typically combine:",
              bullets: [
                "Membership tier discounts",
                "Fixed-amount coupons",
                "Brand-specific restrictions",
              ],
              tail:
                "Some brands exclude additional discounts, and multiple promotions are often subject to stacking limitations. Duty-free does not automatically guarantee the lowest price.",
            },
            {
              title: "🎟️ Tourist Attraction Passes",
              body: "Passes are useful only when:",
              bullets: [
                "You visit multiple paid attractions within 1–2 days",
                "Those attractions were already part of your plan",
                "The total pass cost is lower than buying individual tickets",
              ],
              tail:
                "Buying passes \"just in case\" often reduces flexibility without meaningful savings.",
            },
            {
              title: "🚫 Common Shopping and Discount Mistakes",
              body: "Avoid:",
              bullets: [
                "Assuming every discount equals real savings",
                "Ignoring immediate refund thresholds",
                "Exceeding cumulative VAT limits without realizing",
                "Forgetting your passport",
                "Traveling across the city for minor price differences",
                "Believing promotional \"maximum discount\" applies to all items",
              ],
              tail:
                "Overspending usually comes from misunderstanding rules, not from base prices alone.",
            },
            {
              title: "🧠 A Simple Decision Framework",
              body: "Before making a purchase, ask:",
              bullets: [
                "Was this already part of my plan?",
                "Do I understand which VAT rule applies?",
                "Am I within the ₩1,000,000 immediate refund limit?",
                "Did I verify campaign or stacking conditions?",
                "Would I still buy this without the discount?",
              ],
              tail:
                "If the answers are clear and realistic, the purchase is likely justified.",
            },
            {
              title: "✅ Final Advice",
              body:
                "Plan first. Evaluate value second. Apply discounts third. Korea can feel affordable when:",
              bullets: [
                "You focus on categories with genuine value",
                "You understand official VAT rules",
                "You treat promotional discounts as conditional benefits rather than automatic savings",
              ],
              tail:
                "The smartest savings come from informed decisions, not from chasing every promotion. Return home with items you genuinely use and enjoy. That is the real measure of smart shopping.",
            },
          ],
        },
      ],
    },
    {
      title: "Before You Go",
      slug: "before-you-go",
      icon: "passport",
      image: "/Before%20You%20Go.webp",
      pageType: "hub",
      overrides: {
        showHubFaq: false,
      },
      description:
        "Lock in entry rules, arrival connectivity, and risk coverage before departure.",
      quickAnswer:
        "Use this hub as your final pre-departure check for Korea: confirm your entry requirements, plan how you will stay connected with SIM or eSIM, and decide whether travel insurance helps reduce the financial risk of your trip.",
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
          body: "Most departure stress comes from leaving one high-friction decision unresolved.",
          bullets: [
            "Assuming visa-free travel means no other pre-departure steps apply.",
            "Waiting until arrival day to solve connectivity.",
            "Buying insurance quickly without checking exclusions or coverage limits.",
            "Forgetting to recheck official updates in the final 24 hours before departure.",
          ],
        },
      ],
      children: [
        {
          title: "SIM or eSIM for Korea? A Practical Guide for Travelers",
          slug: "sim-or-esim",
          icon: "sim",
          image: "basics",
          pageType: "actionLeaf",
          description:
            "Best for travelers who want data working on landing day, rely on maps immediately, or want the lowest-friction arrival.",
          quickAnswer:
            "For most travelers, eSIM is the easiest option if your phone supports it and is unlocked. If your device does not support eSIM, a physical SIM card at the airport is the safest alternative.",
          content: [
            {
              title: "Quick Answer",
              body:
                "Default choice: use eSIM if your phone supports it and is unlocked. If not, choose an airport pickup SIM card.",
              bullets: [
                "Install the eSIM before departure and activate it after landing. You will have mobile data immediately when you leave the airport.",
                "If your device does not support eSIM, a physical SIM card picked up at the airport is the safest alternative.",
              ],
              tail:
                "In Korea, having reliable mobile data right after arrival makes a big difference. It helps with navigation, translation apps, messaging, and transport bookings during your first hour in the country.",
            },
            {
              title: "Scenario Example: Late-Night Arrival",
              body:
                "Imagine arriving at Incheon Airport around midnight.",
              bullets: [
                "Your hotel asks you to send a message before check-in, and you need directions as soon as you leave the airport.",
                "If your eSIM is already installed, you can connect to data immediately after landing. You can message your hotel, check transit options, and navigate to your accommodation without delay.",
                "If you prefer in-person help with setup, an airport pickup SIM is a reliable alternative because staff can assist with installation.",
              ],
              tail:
                "The best option is not necessarily the cheapest one - it is the one that removes friction during your first hour in Korea.",
            },
            {
              title: "📱 Why Mobile Data Matters in Korea",
              body:
                "Korea's travel environment is highly digital. Many essential services depend on real-time mobile access.",
              subsections: [
                {
                  title: "Real-World Usage",
                  lead: ["Visitors commonly use data for:"],
                  bullets: [
                    "Real-time navigation and subway transfers",
                    "Translation apps for menus and signs",
                    "QR-based tickets and passes",
                    "Taxi booking apps",
                    "Locating exact building entrances",
                  ],
                },
              ],
              tail:
                "Public Wi-Fi exists, but it is unstable while moving between locations. Reliable data improves both efficiency and confidence.",
            },
            {
              title: "💸 How Much Should You Budget?",
              body:
                "Exact prices change depending on provider and promotions. However, understanding the typical range helps with planning.",
              subsections: [
                {
                  title: "Typical Price Range",
                  lead: ["Most short-term tourist SIM/eSIM plans generally cost:"],
                  bullets: [
                    "₩6,000-₩8,000 per day",
                    "Around ₩18,000-₩30,000 for 5 days",
                    "Longer durations reduce the average daily cost",
                  ],
                },
                {
                  title: "Final pricing depends on:",
                  bullets: [
                    "Daily high-speed data allowance",
                    "Whether voice service is included",
                    "Airport pickup versus instant eSIM",
                    "Seasonal promotions",
                  ],
                  tail:
                    "Always verify current pricing on official provider pages before purchasing.",
                },
              ],
            },
            {
              title: "🔍 SIM vs eSIM - Practical Differences",
              body:
                "Choose based on device compatibility, setup preference, and how quickly you want to connect after landing.",
              subsections: [
                {
                  title: "eSIM (Digital SIM)",
                  lead: [
                    "Best for travelers who want immediate connectivity after landing.",
                    "Suitable if",
                  ],
                  bullets: [
                    "Your phone supports eSIM",
                    "Your device is carrier-unlocked",
                    "You want to avoid airport queues",
                    "You prefer not to remove your physical SIM",
                  ],
                },
                {
                  title: "Important Caution",
                  tail:
                    "Many tourist eSIM products cannot be restored if deleted. Install carefully and avoid removing it during your trip.",
                },
                {
                  title: "Physical SIM Card",
                  lead: [
                    "Best for travelers who prefer in-person assistance.",
                    "Suitable if",
                  ],
                  bullets: [
                    "Your device does not support eSIM",
                    "You prefer manual setup",
                    "You want staff assistance at airport counters",
                  ],
                  tail:
                    "Major airports in Korea provide SIM pickup counters with setup support.",
                },
              ],
            },
            {
              title: "📊 What \"Unlimited Data\" Usually Means",
              body: "\"Unlimited\" rarely means unlimited high-speed data all day.",
              subsections: [
                {
                  title: "Common Structure",
                  lead: ["Most tourist plans follow this structure:"],
                  bullets: [
                    "A daily high-speed allowance (often around 3GB per day)",
                    "Reduced speed after the daily limit until midnight reset",
                  ],
                },
              ],
              tail:
                "Reduced speed is typically sufficient for maps, messaging, and basic browsing. Heavy streaming or hotspot use may feel slower. Always check the data policy before buying.",
            },
            {
              title: "⏱️ When Does the Plan Start?",
              body:
                "Usage timing affects how many real travel days you receive.",
              tail:
                "Some plans begin counting from the moment you first use data - not from purchase time. Installing before departure and activating after landing helps maximize usage. Always confirm the start timing rule before purchasing.",
            },
            {
              title: "☎️ Do You Need a Korean Phone Number?",
              body:
                "Most travelers can rely on data-only plans, but voice options help in specific situations.",
              subsections: [
                {
                  title: "Data Only",
                  tail:
                    "Suitable for most travelers. Apps, bookings, and messaging services work normally without a Korean number.",
                },
                {
                  title: "Data + Voice",
                  lead: ["Useful if you plan to:"],
                  bullets: ["Call local restaurants or hotels", "Receive local calls"],
                  tail:
                    "However, many tourist SIM/eSIM products cannot be used for Korean identity verification services. Purchase voice service only if local calling is necessary.",
                },
              ],
            },
            {
              title: "🛬 Buying Before or After Arrival",
              body:
                "Choose your purchase timing based on how much setup support you want on arrival day.",
              subsections: [
                {
                  title: "Buy Before Departure (Recommended)",
                  bullets: [
                    "Confirm eSIM support",
                    "Confirm unlock status",
                    "Purchase online",
                    "Install before travel",
                    "Activate after landing",
                  ],
                  tail: "This minimizes arrival stress.",
                },
                {
                  title: "Airport Pickup SIM",
                  bullets: [
                    "Reserve online",
                    "Select airport pickup",
                    "Show passport",
                    "Staff assist with installation",
                  ],
                  tail: "Suitable if you prefer in-person setup.",
                },
                {
                  title: "Buy After Arrival",
                  tail:
                    "Possible, but less convenient for first-time visitors. Arriving without data may complicate navigation and transport arrangements.",
                },
              ],
            },
            {
              title: "⚠️ Common Mistakes to Avoid",
              body: "Avoid these to prevent most connectivity problems.",
              bullets: [
                "Phone is carrier-locked",
                "Device does not support eSIM",
                "Deleting eSIM during the trip",
                "Assuming \"unlimited\" means unlimited high speed",
                "Expecting tourist SIM to support Korean identity verification",
                "Not checking when the usage timer starts",
              ],
              tail:
                "Avoiding these prevents most connectivity problems.",
            },
            {
              title: "🧾 Simple Decision Checklist",
              body:
                "Use this checklist to choose the option that fits your device and travel style.",
              subsections: [
                {
                  title: "Choose eSIM if",
                  bullets: [
                    "Your phone supports eSIM",
                    "Your phone is unlocked",
                    "You want immediate connectivity after landing",
                    "You prefer no airport queues",
                  ],
                },
                {
                  title: "Choose Physical SIM if",
                  bullets: [
                    "Your device does not support eSIM",
                    "You want in-person assistance",
                    "You prefer physical installation",
                  ],
                },
              ],
            },
            {
              title: "Final Advice",
              body:
                "Before purchasing a SIM or eSIM, run through this quick four-point check.",
              subsections: [
                {
                  title: "1️⃣ Confirm device compatibility",
                  tail:
                    "Make sure your exact phone model supports eSIM and that the device is carrier-unlocked.",
                },
                {
                  title: "2️⃣ Check when the plan starts",
                  tail:
                    "Some plans begin at purchase time, while others start when data is first used.",
                },
                {
                  title: "3️⃣ Review fair-use policies",
                  tail:
                    "Unlimited plans may slow down after heavy usage. Also check hotspot limits if you plan to tether.",
                },
                {
                  title: "4️⃣ Save activation instructions offline",
                  tail:
                    "Download the QR code, setup guide, and support contact before departure.",
                },
              ],
              tail:
                "A few quick checks like these usually prevent most connectivity problems on arrival day.",
            },
          ],
        },
        {
          title: "Do I Need Travel Insurance for South Korea? (2026 Guide)",
          slug: "travel-insurance-for-korea",
          icon: "shield",
          image: "/leaf%20images/travel-insurance-for-korea.webp",
          description:
            "Best for travelers whose budget would be hit hard by a medical bill, delay, or lost bag, and who want to compare realistic risk.",
          quickAnswer:
            "Travel insurance for South Korea is not required for most short-term visitors in 2026. You should consider buying it if a 300-1,000+ USD unexpected cost such as a medical visit, trip delay, or lost baggage would affect your travel budget. Medical care in South Korea is high quality but not free, and emergency treatment or hospitalization can still cost hundreds to thousands of dollars without insurance. You may skip insurance only if you can comfortably pay for medical care, delays, and disruptions yourself, and your visa type does not require insurance coverage. Next decision: check your Korea entry requirements (K-ETA, visa, arrival rules) and set up your SIM or eSIM before choosing a policy.",
          content: [
            {
              title: "Quick Answer (Decision Summary)",
              icon: "spark",
              body:
                "Default choice for most tourists: buy a basic travel insurance plan with emergency medical, hospitalization, and trip disruption coverage.",
              bullets: [
                "Emergency medical",
                "Hospitalization",
                "Trip disruption",
                "Insurance is usually low-cost compared to one emergency room visit or delay-related loss.",
                "If your budget cannot absorb a sudden 300-1,000+ expense, insurance is usually the safer choice.",
                "This is a risk-control decision, not a legal requirement for most short stays.",
              ],
            },
            {
              title: "Condition Branch (Who Needs It / Exception)",
              icon: "checklist",
              body: "Use this logic before comparing policies.",
              bullets: [
                "Buy now if: you have prepaid hotels or flights.",
                "Buy now if: your trip includes winter or outdoor activities (skiing, hiking).",
                "Buy now if: you have tight transfers or multi-city travel.",
                "Buy now if: your emergency budget is limited.",
                "Double-check legal requirement if: your visa type, school, or employer requires proof of insurance.",
                "Consider skipping only if: you can fully self-pay medical treatment, delays, and baggage disruption.",
                "Consider skipping only if: unexpected costs will not affect your trip or finances.",
              ],
              tail:
                "If unsure: choose a basic plan and avoid expensive add-ons.",
            },
            {
              title: "What Does Travel Insurance Usually Cover in Korea?",
              icon: "shield",
              body: "Most standard plans include:",
              bullets: [
                "Emergency medical treatment",
                "Hospitalization",
                "Trip delay or interruption",
                "Lost or delayed baggage",
                "Optional add-ons (often unnecessary): high-risk sports coverage, premium cancellation upgrades.",
              ],
              tail:
                "A basic plan usually covers the most common real risks for short-term visitors.",
            },
            {
              title: "Typical Cost vs Risk (Simple Reality Check)",
              icon: "wallet",
              body: "This is why insurance is a risk trade-off decision, not a formality.",
              bullets: [
                "Typical insurance cost: 20-60 USD per trip",
                "Minor medical visit: 100-300+ USD",
                "Emergency room or hospitalization: 500-2,000+ USD",
                "Flight delay or disruption: 100-500+ USD impact",
              ],
            },
            {
              title: "Evidence (Official Sources)",
              icon: "wallet",
              body: "Use official sources before purchasing.",
              bullets: [
                "Last checked: 2026-03-28",
                "Korean Immigration Service: https://www.immigration.go.kr/immigration_eng/index.do",
                "K-ETA Official Portal: https://www.k-eta.go.kr/portal/newapply/index.do?locale=EN",
                "National Health Insurance Service (NHIS): https://www.nhis.or.kr/english/index.do",
                "Ministry of Foreign Affairs (Korea): https://www.mofa.go.kr/eng/index.do",
              ],
            },
            {
              title: "Best For / Not Ideal",
              icon: "shield",
              body: "Choose based on fit, not fear.",
              bullets: [
                "Best for: first-time visitors.",
                "Best for: winter travelers (ski, snow activities).",
                "Best for: hikers and outdoor travelers.",
                "Best for: tight itineraries.",
                "Best for: travelers with high prepaid costs.",
                "Not ideal for: travelers with strong emergency cash reserves.",
                "Not ideal for: low-risk itineraries with minimal prepaid costs.",
              ],
              tail:
                "For most short-term trips, a basic plan is enough.",
            },
            {
              title: "Common Mistakes",
              icon: "alert",
              body: "These mistakes create most claim frustrations.",
              bullets: [
                "Choosing the cheapest plan without checking medical limits.",
                "Ignoring exclusions (pre-existing conditions, sports).",
                "Not understanding claim requirements (receipts, reports).",
                "Assuming all visa types have the same rules.",
                "Assuming all activities are automatically covered.",
              ],
            },
            {
              title: "Next Decision",
              icon: "passport",
              body: "Confirm entry and arrival readiness first:",
              bullets: [
                "Check Korea Entry Requirements (K-ETA, visa, arrival rules).",
                "Set up SIM or eSIM to access policy details after arrival.",
                "Then compare 2-3 insurance options.",
                "Choose one with clear medical coverage and claim terms.",
              ],
            },
          ],
        },

        {
          title: "K-ETA & Immigration Process: Official Entry Guide to Korea (2026 Update)",
          slug: "korea-entry-requirements",
          updatedIso: "2026-03-08T00:00:00.000Z",
          icon: "passport",
          image: "/leaf%20images/Immigration%20Process.webp",
          pageType: "policyLeaf",
          overrides: {
            showNextDecision: true,
          },
          description:
            "Start here if you need certainty on K-ETA, the e-Arrival Card, or the exact airport arrival steps tied to your passport.",
          quickAnswer:
            "Before departure, confirm whether K-ETA applies to your passport, submit an e-Arrival Card only if it is required, and follow the official airport arrival process in Korea to avoid delays when entering the country.",
          content: [
            {
              title: "🧭 Quick Overview",
              body: "Entering Korea involves two stages:",
              subsections: [
                {
                  title: "",
                  plainTitle: true,
                  bullets: [
                    "Before departure – Check visa status and K-ETA requirement.",
                    "After landing – Follow the official airport entry procedure.",
                  ],
                },
                {
                  title: "The correct airport arrival order is:",
                  plainTitle: true,
                  bullets: [
                    "Arrival → (If applicable) Quarantine → Immigration → Baggage Claim → Customs → Arrival Hall",
                  ],
                },
              ],
              tail: "Understanding this sequence prevents confusion and delays.",
            },
            {
              title: "🛂 Part 1: K-ETA (Pre-Travel Authorization)",
              body: "K-ETA rules determine whether pre-travel authorization is required.",
              subsections: [
                {
                  title: "📘 What K-ETA Is",
                  bullets: [
                    "An electronic travel authorization system",
                    "Applies to certain visa-exempt passport holders",
                    "Not a visa",
                    "Does not guarantee entry (final decision rests with immigration officers)",
                  ],
                },
                {
                  title: "📊 Official Key Figures (As of 2026)",
                  bullets: [
                    "Application fee: ₩10,000",
                    "Payment: Non-refundable, even if denied",
                    "Processing time: Usually within 72 hours (may exceed during peak periods)",
                    "Validity: 3 years, or until passport expiration (whichever comes first)",
                    "No expedited processing available",
                  ],
                },
                {
                  title: "🗓️ Temporary K-ETA Exemption",
                  lead: ["(Valid Until 2026-12-31)"],
                  bullets: [
                    "This exemption applies only to the K-ETA application requirement",
                    "Not all countries are exempt",
                    "Eligibility depends on nationality",
                    "Eligible travelers are not required to apply during the exemption period",
                    "Exempt travelers may still apply voluntarily",
                    "This temporary measure does not remove visa requirements or immigration inspection.",
                  ],
                },
                {
                  title: "⚠️ Separate rule:",
                  plainTitle: true,
                  lead: [
                    "Travelers who already hold a valid K-ETA generally do not need to submit a separate paper arrival card.",
                    "This is not part of the temporary exemption and operates under standard entry policy.",
                  ],
                  tail:
                    "Always confirm your nationality status through official government sources before departure.",
                },
                {
                  title: "🚨 Warning: Unofficial K-ETA Websites",
                  lead: ["Use only:"],
                  bullets: [
                    "Official government website",
                    "Official government mobile app",
                  ],
                  tail: "Unofficial sites may charge excessive service fees.",
                },
              ],
            },
            {
              title: "🧾 Part 2: e-Arrival Card (Electronic Arrival Declaration)",
              body: "Arrival declaration requirements depend on your traveler status.",
              subsections: [
                {
                  title: "📌 Key Rules (As of 2026)",
                  bullets: [
                    "Free of charge",
                    "Can be submitted starting 3 days before arrival (including arrival day, KST)",
                    "Becomes invalid if you do not enter Korea within 72 hours of submission",
                  ],
                },
                {
                  title: "👥 Who Is Generally Exempt?",
                  bullets: [
                    "Registered foreign residents in Korea",
                    "Valid K-ETA holders",
                    "Group electronic visa holders",
                    "Airline crew",
                  ],
                  tail: "Always verify your status before travel.",
                },
                {
                  title: "🗂️ Information Required",
                  bullets: [
                    "Passport information",
                    "Email address",
                    "One representative accommodation address in Korea",
                    "Contact number",
                    "Flight number",
                    "Arrival and departure dates",
                  ],
                  tail:
                    "If staying in multiple locations, listing one primary accommodation is generally sufficient.",
                },
              ],
            },
            {
              title: "🛬 Part 3: Airport Immigration Process (Correct Order)",
              body: "The standard arrival flow at Korean international airports is:",
              subsections: [
                {
                  title:
                    "Arrival → (If applicable) Quarantine → Immigration → Baggage Claim → Customs → Arrival Hall",
                  plainTitle: true,
                },
                {
                  title: "1️⃣ Arrival",
                  bullets: [
                    "Follow signs for Arrivals",
                    "Shuttle train may be required at some terminals",
                    "Proceed toward Immigration",
                  ],
                },
                {
                  title: "2️⃣ Quarantine (If Applicable)",
                  lead: ["May apply depending on:"],
                  bullets: [
                    "Recent travel to designated quarantine-control regions",
                    "Symptoms",
                    "Current public health policy",
                  ],
                  tail:
                    "Q-CODE or health reporting may be required under specific conditions. Q-CODE is not universally required. Failure to comply (when required) may result in penalties under Korean quarantine law.",
                },
                {
                  title: "3️⃣ Immigration (Passport Control)",
                  bullets: [
                    "Present passport",
                    "Provide biometric data if required",
                    "Answer basic travel questions",
                    "Final entry approval is determined at this stage.",
                    "Even with K-ETA approval, entry is not guaranteed.",
                  ],
                },
                {
                  title: "4️⃣ Baggage Claim",
                  bullets: [
                    "Check monitors for baggage belt number",
                    "Collect luggage",
                  ],
                },
                {
                  title: "5️⃣ Customs",
                  lead: ["Choose one lane:"],
                  bullets: [
                    "Nothing to Declare",
                    "Goods to Declare",
                  ],
                  tail:
                    "Travelers carrying restricted goods or large amounts of currency must declare accordingly. Families may submit one customs declaration per family unit (subject to current policy).",
                },
                {
                  title: "6️⃣ Arrival Hall",
                  bullets: [
                    "Exit into the public Arrival Hall",
                    "Access transportation, SIM counters, exchange services, and pickup areas",
                  ],
                },
              ],
            },
            {
              title: "⏱️ Typical Processing Time",
              body: "Under normal conditions:",
              bullets: [
                "Immigration: 10–30 minutes",
                "Baggage and customs: 10–20 minutes",
              ],
              tail: "Times may increase during peak travel seasons.",
            },
            {
              title: "🧠 Key Reminders",
              body: "K-ETA is not a visa.",
              bullets: [
                "Entry is decided at immigration.",
                "e-Arrival Card submission is time-sensitive.",
                "Health reporting requirements are conditional.",
                "Always verify official sources before travel.",
              ],
            },
            {
              title: "✅ Final Advice",
              body: "Run this quick check before boarding your flight:",
              subsections: [
                {
                  title: "1️⃣ Confirm K-ETA status",
                  tail: "Check whether K-ETA applies to your nationality and travel dates.",
                },
                {
                  title: "2️⃣ Verify e-Arrival Card requirements",
                  tail: "Submit it only if it is required and within the valid submission window.",
                },
                {
                  title: "3️⃣ Prepare basic arrival details",
                  tail:
                    "Have your passport, first accommodation address, and flight information ready in case immigration officers ask for them.",
                },
              ],
              tail:
                "Most entry problems happen before boarding, not after arrival. The key figures in this guide follow official 2026 immigration guidance. Because entry policies can change, it is always safest to recheck official government notices within 24 hours before departure.",
            },
          ],
        },
      ],
    },
    
    {
      title: "Latest Travel Updates for Korea",
      slug: "latest-travel-updates-for-korea",
      icon: "shield",
      image: "airport",
      description: "Official Sources to Confirm Before You Travel",
      quickAnswer:
        "Use this page as your final checkpoint before booking or flying.",
      content: [
        {
          title: "Latest Travel Updates for Korea",
          icon: "shield",
          emphasis: "Official Sources to Confirm Before You Travel",
          body:
            "Travel information in South Korea can change faster than any guidebook. Use this page as your final checkpoint before booking or flying.",
          bullets: [
            "Plan first. Confirm here. Travel confidently.",
          ],
        },
        {
          title: "Entry & Immigration Updates",
          icon: "passport",
          emphasis:
            "Entry rules and authorization depend on your nationality and can change without notice.",
          body: "Always confirm your entry status before departure.",
          bullets: [
            "K-ETA (Official Authorization System) — Apply before departure if visa exempt. https://www.k-eta.go.kr/portal/apply/index.do?locale=EN",
            "e-Arrival Card (Online Arrival Form) — Online arrival declaration (submit within 3 days before arrival). https://www.e-arrivalcard.go.kr/portal/main/index.do?locale=EN",
            "Arrival / Immigration Procedures – Incheon Airport: https://www.airport.kr/ap_en/1439/subview.do",
          ],
        },
        {
          title: "Transportation & Airports",
          icon: "train",
          emphasis:
            "Train schedules, airport procedures, and transit prices may vary during holidays and peak seasons.",
          body:
            "Train schedules, airport procedures, and transit prices may vary during holidays and peak seasons.",
          bullets: [
            "Incheon International Airport (English) — Arrival procedures, terminal info, transport options. https://www.airport.kr/sites/ap_en/index.do",
            "Seoul — Getting to Seoul From Incheon Airport (Official) — Official transport options from airport to Seoul (including AREX & limousines). https://english.seoul.go.kr/service/entry/getting-to-seoul-from-incheon-airport/",
            "Korail — High-Speed & Regional Trains (KTX) — National train schedules, routes & tickets. https://www.korail.com/global/eng/intro",
            "AREX (Airport Railroad Express) — Airport rail link between Incheon and Seoul. https://www.arex.or.kr (English UI available)",
            "Seoul Public Transportation (Official English page) — Seoul city transport information. https://english.seoul.go.kr/service/movement/public-transportation/",
            "Busan Public Transportation (Official English page) — Busan city transport information. https://www.busan.go.kr/eng/public-transportation",
          ],
        },
        {
          title: "Weather & Seasonal Travel Conditions",
          icon: "cloud",
          emphasis:
            "Weather significantly affects travel plans — especially in summer and winter.",
          body:
            "Weather significantly affects travel plans — especially in summer and winter.",
          bullets: [
            "Korea Meteorological Administration — English. Official weather forecasts and severe weather alerts. https://www.kma.go.kr/neng/index.do",
          ],
        },
        {
          title: "Official Tourism Organizations",
          icon: "pin",
          emphasis: "Updated attraction hours, festivals, and closures for cities.",
          body: "Updated attraction hours, festivals, and closures for cities.",
          bullets: [
            "Korea Tourism Organization — National tourism info and planning. https://english.visitkorea.or.kr/svc/main/index.do",
            "Seoul Tourism Organization (Official English site) — City attractions, neighborhoods, food & shopping. https://english.visitseoul.net",
            "Busan Tourism Organization — City information and travel tips. https://english.busan.go.kr",
            "Jeju Tourism Organization — Jeju Island attractions and events. https://www.visitjeju.net/en",
            "Gyeongju Tourism — Historic sites and cultural heritage information. https://www.gyeongju.go.kr/tour/index.do",
            "Jeonju Tourism — Official Jeonju tourism info & culture. https://tour.jeonju.go.kr/eng",
          ],
        },
        {
          title: "Safety & Travel Notices",
          icon: "alert",
          emphasis:
            "South Korea is generally very safe, but official guides help you stay informed.",
          body: "Emergency Numbers (24/7): Police 112, Fire / Ambulance 119",
          bullets: [
            "Ministry of Foreign Affairs – Travel Notices (English) — Official advisories and updates. https://www.mofa.go.kr/eng/index.do",
            "Korea Travel Hotline (1330) — Official tourism support hotline (English available when dialed in Korea): 1330",
            "Also check your own country’s embassy website in Korea for consular support.",
          ],
        },
        {
          title: "Payments, Shopping & Tax Refunds",
          icon: "wallet",
          emphasis: "Tax refund rules and payment methods vary by store and location.",
          body: "Tax refund rules and payment methods vary by store and location.",
          bullets: [
            "Global Tax Free Korea — Participating stores and refund procedures. https://www.global-taxfree.com/?lang=en#1",
            "Korea Customs Service — English. Duty-free limits and customs declaration rules. https://www.customs.go.kr/english/main.do",
          ],
        },
        {
          title: "How to Use This Page",
          icon: "spark",
          emphasis:
            "Decide where you’re going and how long you’ll stay, then confirm here.",
          body:
            "Many travelers revisit this page a few days before flying to avoid last-minute surprises.",
          bullets: [
            "Use these official sources to confirm current rules and conditions.",
            "Double-check entry requirements, weather, transport, and airports before departure.",
            "Before booking non-refundable plans, review travel insurance for Korea.",
          ],
        },
      ],
    },
    {
      title: "Korea Now & More",
      slug: "korea-now-and-more",
      updatedIso: "2026-03-08T00:00:00.000Z",
      icon: "spark",
      image: "/leaf%20images/korea-now-more.webp",
      description:
        "Discover the Gangneung 'Gangneung-Gallae' Tour Pass: discounts, conditions, and transport tips for international visitors.",
      quickAnswer:
        "One pass that combines multiple travel experiences in Gangneung.",
      content: [
        {
          title: "Discover Gangneung 'Gangneung-Gallae' Tour Pass",
          icon: "spark",
          emphasis: "Save money while exploring one of Korea's most popular coastal cities.",
          body:
            "Gangneung City introduced the Gangneung-Gallae Tour Pass, a travel pass designed to make sightseeing easier and more affordable for visitors. The pass bundles selected attractions, experiences, cafes, and tourism benefits into a single package.",
          tail:
            "Instead of booking everything separately, travelers can access several activities with one pass. The goal is to simplify trip planning and reduce travel costs for people visiting Korea's east coast.",
        },
        {
          title: "TL;DR",
          icon: "checklist",
          emphasis: "One pass that combines multiple travel experiences in Gangneung.",
          body:
            "Travelers can access selected attractions and services through a single purchase and may save up to 55% compared with buying items separately.",
          bullets: [
            "Access to selected attractions and travel experiences.",
            "Discounts at partner cafes and tourism locations.",
            "Packages designed for different travel styles.",
            "Options depending on weekday or weekend visits.",
          ],
        },
        {
          title: "Benefits for Korea Travel Visitors",
          icon: "wallet",
          emphasis: "Budget and convenience in one travel product.",
          body:
            "For travelers visiting Korea's east coast, organizing multiple reservations for attractions, cafes, and experiences can take time. The Gangneung-Gallae Tour Pass simplifies that process by combining several tourism services into one product.",
          bullets: [
            "Potential savings compared with purchasing individual tickets.",
            "Simpler planning with fewer reservations to manage.",
            "Flexible options depending on travel schedule or transport style.",
          ],
          tail:
            "This type of bundled tourism pass is becoming increasingly common in Korea as cities try to make travel easier for international visitors.",
        },
        {
          title: "Validity of the Offer",
          icon: "calendar",
          emphasis: "Part of the Visit Gangneung tourism campaign.",
          body:
            "The Gangneung-Gallae Tour Pass was introduced as part of the Visit Gangneung 2026-2027 tourism campaign organized by the city.",
          bullets: [
            "Campaign window: 2026-2027 (subject to updates).",
          ],
          tail:
            "The promotion is expected to run during the campaign period, although specific discounts, participating venues, or conditions may change depending on tourism updates. Travelers should always confirm the latest details before purchasing.",
        },
        {
          title: "Conditions to Use It",
          icon: "passport",
          emphasis: "Simple purchase process for visitors.",
          body:
            "The pass can be purchased through the travel activity platform Frip.",
          bullets: [
            "Search for: Gangneung-Gallae.",
            "Available to international travelers.",
            "No Korean residency requirement.",
            "Purchase and booking handled through the platform.",
          ],
          tail:
            "Availability and specific benefits may vary depending on campaign updates.",
        },
        {
          title: "Where This Happens",
          icon: "pin",
          emphasis: "Gangneung, Gangwon Province, South Korea.",
          body:
            "Gangneung is a well-known coastal destination located in Gangwon Province on Korea's east coast. The city is popular for beaches, coffee culture, seafood restaurants, and scenic ocean views.",
          tail:
            "Most navigation apps such as Google Maps, Naver Map, or KakaoMap can easily provide directions to the city.",
        },
        {
          title: "How to Get There from Incheon International Airport",
          icon: "train",
          emphasis: "A common travel route takes about three hours.",
          body:
            "Step 1: Take the AREX airport train from Incheon International Airport to Seoul Station. Travel time: about 1 hour.",
          tail:
            "Step 2: Transfer at Seoul Station to a KTX high-speed train or ITX-Saemaeul train heading to Gangneung. Travel time: about 2 hours.<br />Estimated total travel time: around three hours depending on transfer timing.",
        },
        {
          title: "Bottom Line for Affordable Korea Trips",
          icon: "spark",
          emphasis: "Lower cost, simpler planning.",
          body:
            "For travelers planning to visit Korea's east coast, the Gangneung-Gallae Tour Pass may offer a convenient way to combine several travel experiences while potentially reducing costs.",
          bullets: [
            "First-time visitors who want easier trip planning.",
            "Travelers looking for bundled tourism options.",
            "Visitors exploring Gangneung's beaches, cafes, and attractions.",
          ],
          tail:
            "Before making any travel purchase, always confirm the latest conditions and availability through official tourism sources or the purchase platform.",
        },
      ],
    },
    {
      title:
        "This Week in Korea: Spring Equinox, Cherry Blossoms, and What Travelers Should Know",
      slug: "this-week-in-korea",
      icon: "calendar",
      image: "/leaf%20images/This_Week_in_Korea.webp",
      description:
        "Late March marks the start of real spring in Korea. Learn what the spring equinox means, when cherry blossoms begin across the country, and where travelers can enjoy the season this week.",
      quickAnswer:
        "The 2026 spring equinox in Korea falls on March 20. In Korean, it is called Chunbun, and this week is when Korea often begins to feel like spring rather than winter.",
      content: [
        {
          title: "Late March in Korea",
          icon: "cloud",
          emphasis: "When the country begins to feel like spring",
          body:
            "Late March is when Korea begins to feel noticeably different. Winter has not completely disappeared, but the atmosphere shifts. Days become longer, temperatures start to rise in the afternoon, and people begin spending more time outdoors.",
          tail:
            "Parks become livelier, walking streets fill with locals again, and seasonal events slowly return. For travelers, this period marks the transition from winter travel conditions to the beginning of spring travel.",
        },
        {
          title: "Quick Answer",
          icon: "checklist",
          emphasis: "What travelers should know this week",
          body:
            "The 2026 spring equinox in Korea falls on March 20. In Korean, it is called Chunbun, one of the traditional seasonal divisions marking the midpoint of spring.",
          tail:
            "It is not a public holiday, but it signals an important seasonal turning point. Around this time, daylight becomes noticeably longer, the weather gradually warms, and the first cherry blossoms begin appearing in southern regions of Korea. For visitors, this week is often when Korea begins to feel like spring rather than winter.",
        },
        {
          title: "What Chunbun Means in Korea",
          icon: "calendar",
          emphasis: "The traditional spring equinox",
          body:
            "Chunbun refers to the spring equinox in the traditional East Asian seasonal calendar. It is the fourth of the 24 seasonal divisions, a system historically used to track agricultural seasons. The equinox marks the moment when day and night are nearly equal in length.",
          tail:
            "While modern Korean life is no longer tied to the agricultural calendar, the concept still represents a cultural signal that winter is ending and spring is beginning. For travelers, it is useful mainly as a seasonal reference point rather than a specific celebration.",
        },
        {
          title: "Why Late March Is a Good Time to Visit",
          icon: "spark",
          emphasis: "Comfortable weather before peak tourist crowds",
          body:
            "Late March can be one of the most comfortable travel periods in Korea. The weather is usually cool but pleasant for walking, and the busiest spring travel crowds have not fully arrived yet.",
          bullets: [
            "exploring historic neighborhoods",
            "visiting palaces and cultural sites",
            "walking along river parks",
            "discovering seasonal festivals",
          ],
          tail:
            "Early spring sunlight, longer evenings, and outdoor cultural events create a relaxed atmosphere across major cities. For many visitors, this time offers a balanced travel experience before the busiest cherry blossom weeks begin.",
        },
        {
          title: "When Cherry Blossoms Begin in Korea",
          icon: "calendar",
          emphasis: "Spring moves from south to north",
          body:
            "Cherry blossom season is one of the most famous travel experiences in Korea. Unlike some countries where flowers bloom at the same time nationwide, Korea's blossom season moves gradually from south to north. Southern coastal regions warm earlier, so blossoms appear there first before reaching northern cities.",
          bullets: [
            "Jeju Island: around March 25",
            "Busan: around March 25",
            "Jeonju and Gyeongju: around March 28",
            "Gangneung: around April 1",
            "Seoul: around April 3",
            "Full bloom usually occurs about one week after the first blossoms appear.",
          ],
          tail:
            "For travelers visiting in late March, southern destinations often provide the best chance of seeing the beginning of the season.",
        },
        {
          title: "Major Cherry Blossom Festivals",
          icon: "pin",
          emphasis: "Famous spring events across Korea",
          body:
            "Several well-known festivals celebrate the arrival of cherry blossom season.",
          subsections: [
            {
              title: "Jinhae Gunhangje Cherry Blossom Festival",
              lead: [
                "Often considered the largest cherry blossom festival in Korea, Jinhae Gunhangje attracts visitors from across the country and overseas.",
                "The festival usually takes place from late March to early April, and the city becomes covered with millions of cherry blossoms. Two of the most famous viewing spots are Yeojwacheon Stream, where blossoms line a small canal walkway, and Gyeonghwa Station, where cherry trees create a dramatic tunnel over old railway tracks.",
                "Because of its scale, Jinhae is often the most photographed cherry blossom destination in Korea.",
              ],
            },
            {
              title: "Yeouido Cherry Blossom Festival (Seoul)",
              lead: [
                "Seoul's best-known blossom event takes place along Yeouido's Yunjung-ro road, where rows of cherry trees create one of the most famous spring walking routes in the capital.",
                "The area typically hosts seasonal performances, food stalls, and evening lighting during the blossom period.",
                "Even outside the festival dates, the park areas around Yeouido remain one of the easiest places in Seoul to enjoy spring scenery.",
              ],
            },
          ],
        },
        {
          title: "Best Places to See Cherry Blossoms",
          icon: "pin",
          emphasis: "Popular viewing spots for travelers",
          body:
            "Beyond official festivals, several locations are well known for spring blossoms.",
          subsections: [
            {
              title: "In Seoul",
              bullets: [
                "Yeouido Park",
                "Seokchon Lake",
                "Namsan Park",
                "Seoul Forest",
              ],
            },
            {
              title: "In Busan",
              bullets: [
                "Dalmaji Hill",
                "Oncheoncheon Stream",
              ],
            },
            {
              title: "In Jeju",
              bullets: [
                "Jeonnong-ro Cherry Blossom Road",
                "Seogwipo coastal areas",
              ],
            },
          ],
          tail:
            "These locations are popular because they combine blossom views with scenic walking routes, city landmarks, or waterfront scenery.",
        },
        {
          title: "Seasonal Events This Week",
          icon: "spark",
          emphasis: "A few simple activities travelers may enjoy",
          body:
            "Depending on where you are traveling, several seasonal activities may be available.",
          subsections: [
            {
              title: "Seoul",
              tail:
                "Some weekends feature special programs where sections of major streets open for walking, cycling, and public activities. These events allow visitors to experience the city in a more relaxed atmosphere.",
            },
            {
              title: "Busan",
              tail:
                "The Gwangalli Drone Light Show is one of the city's most popular evening attractions. Hundreds of drones create animated displays above the ocean near Gwangalli Beach.",
            },
            {
              title: "Jeju",
              lead: [
                "Jeju Island often hosts early spring cultural festivals and seasonal events celebrating the arrival of warmer weather.",
                "Travelers already visiting Jeju may find this period particularly interesting for experiencing local traditions and outdoor landscapes.",
              ],
            },
          ],
        },
        {
          title: "A Simple Travel Tip",
          icon: "route",
          emphasis: "Choose destinations based on blossom timing",
          body:
            "One common travel mistake is expecting the entire country to experience spring at the same time. Because Korea's climate varies by region, seasonal changes move gradually northward.",
          tail:
            "If your main goal is seeing early blossoms in late March, southern destinations such as Jeju or Busan usually provide better chances than Seoul. If your trip takes place in early April, however, Seoul becomes one of the best places to enjoy full cherry blossom scenery. Understanding this timing can help travelers plan routes more effectively.",
        },
        {
          title: "Bottom Line",
          icon: "spark",
          emphasis: "The beginning of Korea's spring season",
          body: "The spring equinox itself is not the main attraction for travelers.",
          tail:
            "What matters more is what happens around it. Days grow longer, outdoor activities become more enjoyable, and the first cherry blossoms begin appearing across southern regions of Korea. For visitors arriving in late March, this week often marks the start of Korea's spring atmosphere, a moment when the country slowly shifts from winter into one of its most beautiful travel seasons.",
        },
      ],
    },
  ],
};

export const getPathForNode = (segments: string[]) => {
  if (segments.length === 0) return "/";
  return `/${segments.join("/")}`;
};

export const findNodeBySegments = (segments: string[]) => {
  let node: TreeNode | undefined = siteTree;
  let parent: TreeNode | undefined = undefined;
  for (const segment of segments) {
    const next = node.children?.find((child) => child.slug === segment);
    if (!next) {
      return { node: undefined, parent: undefined };
    }
    parent = node;
    node = next;
  }
  return { node, parent };
};

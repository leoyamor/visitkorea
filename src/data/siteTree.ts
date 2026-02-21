export type TreeNode = {
  title: string;
  slug: string;
  description?: string;
  quickAnswer?: string;
  updatedIso?: string;
  icon?: string;
  image?: string;
  content?: {
    title: string;
    body: string;
    bullets?: string[];
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
      description: "Plan your days realistically, without overpacking your schedule.",
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
              title: "1 Month in Korea",
              icon: "calendar",
              emphasis: "A month is about living better, not seeing more.",
              body:
                "This guide helps you use a month comfortably without turning your trip into a long to-do list.",
            },
            {
              title: "The key mindset for a 1-month trip",
              icon: "spark",
              emphasis: "Stop thinking in days. Start thinking in weeks.",
              body: "A good long stay has:",
              bullets: [
                "Fewer cities",
                "Longer stays",
                "Repeated routines",
              ],
            },
            {
              title: "The simple rule that works",
              icon: "route",
              emphasis: "Pick 2 or 3 home bases.",
              body:
                "Stay long enough to feel familiar. Anything more usually leads to fatigue.",
            },
            {
              title: "Weeks 1-2: Seoul",
              icon: "city",
              emphasis: "Seoul is the best long-stay base.",
              body:
                "Daily life is easy, public transport is efficient, and the neighborhoods feel almost endless. After two weeks, the city begins to feel familiar rather than overwhelming.",
            },
            {
              title: "Week 3: One nature or coastal city",
              icon: "leaf",
              emphasis: "Change the rhythm.",
              body: "This week is about space, not sightseeing.",
              bullets: [
                "Busan -> sea, walks, slower evenings",
                "Jeju -> nature, driving, quiet mornings",
              ],
            },
            {
              title: "Week 4: One smaller or calmer city",
              icon: "temple",
              emphasis: "Finish somewhere relaxed.",
              body: "Fewer plans. More comfort.",
              bullets: [
                "Gyeongju -> history and bike-friendly paths",
                "Jeonju -> food and traditional streets",
                "Smaller regional city -> local pace",
              ],
            },
            {
              title: "What often goes wrong",
              icon: "alert",
              emphasis: "Treating a long stay like a tour leads to burnout.",
              body: "Even with a month, travelers:",
              bullets: [
                "Move cities too often",
                "Plan sightseeing every day",
                "Treat a long stay like a tour",
              ],
            },
            {
              title: "What you don't need to plan early",
              icon: "checklist",
              emphasis: "Long trips work best with flexibility.",
              body: "You don’t need to lock in:",
              bullets: [
                "Detailed daily schedules",
                "A full list of attractions",
                "Restaurant reservations for every day",
              ],
            },
            {
              title: "Need current details?",
              icon: "shield",
              emphasis: "Always confirm before booking.",
              body:
                "Accommodation rules, prices, and options can change. Always confirm long-stay details through official or up-to-date sources before booking.",
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Calm beats busy.",
              body:
                "A good month in Korea feels calm, not busy. If your days start to feel normal, you planned it right.",
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
              title: "First Time in Korea",
              icon: "compass",
              emphasis: "Most travelers are surprised by how easy it feels.",
              body:
                "If this is your first time in Korea, don't worry. This guide helps you know what to expect without overwhelming you.",
            },
            {
              title: "What first-time visitors usually notice",
              icon: "spark",
              emphasis: "You don't need survival skills.",
              body: "Korea is:",
              bullets: [
                "Very safe, even late at night",
                "Clean and well-organized",
                "Easy to move around thanks to convenient public transport.",
                "Full of convenience stores and food options, almost everywhere",
              ],
            },
            {
              title: "What feels unfamiliar at first",
              icon: "alert",
              emphasis: "Small challenges, not real problems.",
              body: "The main challenges are:",
              bullets: [
                "Language differences outside major tourist areas",
                "Knowing which apps to use (maps, taxis, transport)",
                "Understanding daily routines, like how to order food or sort trash",
              ],
            },
            {
              title: "What to prepare before arrival",
              icon: "passport",
              emphasis: "Keep it simple.",
              body: "Before your flight, make sure you have:",
              bullets: [
                "A phone that works overseas",
                "At least one international payment method",
                "Your first-night accommodation details",
              ],
            },
            {
              title: "What surprises many first-timers",
              icon: "wallet",
              emphasis: "These are normal, not problems.",
              body: "Many first-time visitors notice:",
              bullets: [
                "Cards work almost everywhere",
                "Cash is still useful in small local shops or markets",
                "Taxis are safe, apps make them easier",
                "People may not speak much English, but they try to help",
              ],
            },
            {
              title: "Common mistakes to avoid",
              icon: "checklist",
              emphasis: "A little preparation makes a big difference.",
              body: "Avoid these:",
              bullets: [
                "Overplanning your first few days",
                "Using taxis for everything instead of public transport",
                "Expecting everything to work like home",
                "Skipping preparation because it looks easy",
              ],
            },
            {
              title: "What you don't need to decide yet",
              icon: "hand",
              emphasis: "Let some plans wait.",
              body: "You don't need:",
              bullets: [
                "Full attraction lists",
                "Exact daily schedules",
                "Restaurant planning in advance",
              ],
            },
            {
              title: "One important note",
              icon: "shield",
              emphasis: "Always confirm before traveling.",
              body:
                "Entry rules, airport procedures, and practical details can change. Always confirm important information through official sources before traveling.",
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Comfortable beats perfect.",
              body:
                "Your first trip to Korea doesn't need to be perfect. If you arrive relaxed instead of nervous, you planned it right.",
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
              title: "Been Here Before?",
              icon: "spark",
              emphasis: "Not more sights. Better days.",
              body:
                "If this isn't your first trip to Korea, you don't need another checklist. You need a better rhythm. A second trip isn't about doing more. It's about traveling smarter.",
            },
            {
              title: "How a Second Trip Should Feel",
              icon: "leaf",
              emphasis: "A second trip isn't about doing more. It's about traveling smarter.",
              body: "Your second visit should feel:",
              bullets: [
                "Slower",
                "Deeper",
                "Easier",
              ],
            },
            {
              title: "Instead of adding cities, try",
              icon: "route",
              emphasis: "Comfort is not boring. It's efficient.",
              body: "Instead of adding cities, try:",
              bullets: [
                "Staying longer in one place",
                "Cutting down city-to-city travel",
                "Revisiting a favorite area properly",
              ],
            },
            {
              title: "The Question That Changes Everything",
              icon: "route",
              emphasis: "Ask how you want your days to feel.",
              body:
                "Before planning, ask: How do I want my days to feel? Let that answer guide your schedule - not social media trends.",
              bullets: [
                "Relaxed mornings",
                "Food-focused afternoons",
                "Walkable neighborhoods",
                "Nature between city stays",
              ],
            },
            {
              title: "What Works Best on Repeat Visits",
              icon: "checklist",
              emphasis: "Less movement. More rhythm.",
              body: "These strategies consistently improve second trips:",
              bullets: [
                "Stay 2-3 nights in smaller cities (Gangneung, Jeonju, Tongyeong)",
                "Explore neighborhoods, not just landmarks",
                "Add one nature day per week",
                "Keep at least two mornings unscheduled",
              ],
            },
            {
              title: "Season Matters More Than New Places",
              icon: "calendar",
              emphasis:
                "On a second visit, timing matters more than novelty. The same city can feel completely different in another season.",
              body: "Consider:",
              bullets: [
                "Spring (April): Cherry blossoms + mild weather",
                "Autumn (Oct-Nov): Foliage + comfortable temperatures",
                "Summer: Coastal cities like Busan or Sokcho",
                "Winter: Food trips, hot springs, fewer crowds",
              ],
            },
            {
              title: "What Usually Goes Wrong",
              icon: "alert",
              emphasis: "A second trip isn't about proving something. It's about choosing deliberately.",
              body: "Even experienced travelers sometimes:",
              bullets: [
                "Repeat the exact same Seoul-Busan-Jeju route",
                "Add too many cities again",
                "Chase hidden gems but rush between them",
              ],
            },
            {
              title: "What You Can Skip Without Regret",
              icon: "hand",
              emphasis: "Fewer checkmarks. Better experiences.",
              body: "You don't need to:",
              bullets: [
                "Revisit every major attraction",
                "Follow updated Top 10 lists",
                "Compare this trip to your last one",
              ],
            },
            {
              title: "One Quick Reminder",
              icon: "shield",
              emphasis: "Details change.",
              body: "Even if you've been before, double-check:",
              bullets: [
                "Recheck seasonal events",
                "Confirm opening hours",
                "Verify transport schedules",
                "Double-check festival dates",
              ],
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "Calmer beats busier.",
              body:
                "If your second trip feels balanced - familiar, but refreshed - you planned it right.",
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
      description: "Choose the city that fits how you like to travel.",
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
              title: "Seoul",
              icon: "city",
              emphasis: "The easiest starting point for first-time visitors to Korea.",
              body:
                "If this is your first trip to Korea, Seoul is the most reliable base. Seoul is a large city, but it is divided into clear districts, which makes it more manageable than it first appears. Why Seoul feels convenient is simple:",
              bullets: [
                "Direct airport connections (AREX and airport buses)",
                "Reliable, on-time public transport",
                "Food available at almost any hour",
                "Basic English support in major areas",
              ],
            },
            {
              title: "Why Is Seoul Easy to Travel?",
              icon: "train",
              emphasis: "A city built for movement.",
              body: "You don't need a car. You don't need fluent Korean. You don't need a perfect itinerary.",
              bullets: [
                "Subways run frequently",
                "Stations are clearly numbered",
                "Major stations include English signage",
                "One T-money card works on both buses and subways",
                "Most areas are reachable within 30-40 minutes",
              ],
            },
            {
              title: "What Seoul Is Best For",
              icon: "spark",
              emphasis: "Urban variety without confusion.",
              body: "Seoul works well if you:",
              bullets: [
                "Enjoy eating late at night",
                "Want to experience traditional palaces and modern districts in the same day",
                "Like cafes, markets, shopping streets, and museums",
                "Prefer moving around easily by public transport",
                "If your goal is only quiet nature, another city may suit you better",
              ],
            },
            {
              title: "How Long Should You Stay in Seoul?",
              icon: "calendar",
              emphasis: "Seoul is not a city to rush.",
              body: "A general guide:",
              bullets: [
                "3-4 days: As part of a wider Korea trip",
                "5-6 days: If Seoul is your main base",
                "1-2 weeks: For a longer, slower stay",
                "Short visits focus on major highlights",
                "Longer stays allow neighborhood-level exploration",
              ],
            },
            {
              title: "How to Enjoy Seoul Without Burning Out",
              icon: "route",
              emphasis: "Think in districts, not landmarks.",
              body: "Seoul feels overwhelming mainly because of excessive movement. A practical approach:",
              bullets: [
                "Choose one main area to stay (Hongdae, Myeongdong, Insadong, Gangnam, etc.)",
                "Explore only 1-2 nearby neighborhoods per day",
                "Take real breaks in cafes, parks, or markets",
                "Avoid crossing the entire city multiple times in one day",
              ],
            },
            {
              title: "Where Seoul Really Shines",
              icon: "temple",
              emphasis: "Variety within short distances.",
              body: "In one realistic day, you can:",
              bullets: [
                "Visit a royal palace",
                "Eat at a traditional market",
                "Walk through a downtown stream or park",
                "End the evening in a modern shopping or nightlife district",
                "If you plan geographically, travel time stays short",
              ],
            },
            {
              title: "Common Mistakes to Avoid",
              icon: "alert",
              emphasis: "Plans should be efficient, but too much planning leads to exhaustion.",
              body: "Avoid:",
              bullets: [
                "Visiting 4-5 districts in one day",
                "Changing hotels mid-stay to save time",
                "Overplanning individual attractions",
                "Treating Seoul like a checklist instead of a flexible base",
              ],
            },
            {
              title: "What You Don't Need to Decide in Advance",
              icon: "hand",
              emphasis: "Flexibility makes travel smoother.",
              body: "Once you arrive, distances become clearer. You don't need to pre-select:",
              bullets: [
                "Every attraction",
                "A full restaurant list",
                "A strict day-by-day schedule",
              ],
            },
            {
              title: "Always Check Updated Information",
              icon: "shield",
              emphasis: "Details change.",
              body: "Before visiting, confirm:",
              bullets: [
                "Subway route updates",
                "Palace closing days",
                "Seasonal event schedules",
                "Airport transport timetables",
                "Always verify details through official tourism or transport websites",
              ],
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "Stay in one area. Move efficiently. Explore slowly.",
              body:
                "Seoul is manageable once you understand its structure. If you finish your trip feeling curious - not exhausted - you chose the right pace.",
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
              title: "Busan",
              icon: "beach",
              emphasis: "Coastal city. Wide views. Ocean air.",
              body:
                "Busan feels different from Seoul in a good way. If Seoul concentrates energy in dense districts, Busan stretches along beaches and waterfront neighborhoods. It's a city shaped by the sea.",
            },
            {
              title: "Start With These Areas",
              icon: "spark",
              emphasis: "Busan is best explored by district.",
              body: "Choose a few that match where you stay:",
              bullets: [
                "Haeundae: Wide beach and modern skyline",
                "Gwangalli: Bridge views and relaxed evenings",
                "Jagalchi and Nampo: Seafood markets and port atmosphere",
                "Gamcheon: Hillside streets and city views",
                "Haedong Yonggungsa: Temple built along the sea",
                "Taejongdae and Igidae: Coastal cliffs and walking trails",
              ],
            },
            {
              title: "Seafood Without Overplanning",
              icon: "bowl",
              emphasis: "Freshness matters more than rankings.",
              body: "In Busan, location often matters more than online reviews. Look for places:",
              bullets: [
                "Near the coast or traditional markets",
                "Busy with locals at dinner time",
                "Away from empty tourist-only streets",
              ],
            },
            {
              title: "Beach District or City Hub?",
              icon: "route",
              emphasis: "Your base shapes your experience.",
              body: "Changing hotels mid-stay usually adds stress. Choose one style first:",
              bullets: [
                "Beach areas: Sea walks, open views, calm evenings",
                "City hubs (Seomyeon or Nampo): Easier transport, denser food options",
              ],
            },
            {
              title: "How Long Should You Stay in Busan?",
              icon: "calendar",
              emphasis: "Busan fits different Korea itineraries.",
              body: "Short stays show the seaside atmosphere. Longer stays reveal local rhythm.",
              bullets: [
                "3-4 days: Great after Seoul for coastline, seafood, and a change of scenery",
                "5-6 days: Balanced for multi-city trips with beaches, markets, and relaxed evenings",
                "1 week or more: Use Busan as a coastal base and add nearby day trips",
                "Busan adjusts to your trip, not the other way around",
              ],
            },
            {
              title: "Common Mistakes",
              icon: "alert",
              emphasis: "Busan works best with space in your schedule.",
              body: "Avoid:",
              bullets: [
                "Staying far from your main area",
                "Visiting multiple beaches in one day",
                "Treating Busan like a checklist",
              ],
            },
            {
              title: "When Busan Makes Sense",
              icon: "spark",
              emphasis: "It adds variety without adding complexity.",
              body: "Busan is ideal if you want:",
              bullets: [
                "A coastal contrast after Seoul",
                "Ocean views without island travel",
                "Strong seafood culture",
                "An open but active city",
              ],
            },
            {
              title: "Before You Go",
              icon: "shield",
              emphasis: "Always verify through official tourism or transport websites.",
              body: "Confirm:",
              bullets: [
                "Beach swimming season",
                "Festival dates",
                "Transport updates",
                "Public holiday closures",
              ],
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "Stay in one area. Move locally. Explore slowly.",
              body:
                "If you leave Busan feeling rested and well-fed, you planned it right.",
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
              title: "Jeju",
              icon: "island",
              emphasis: "Island landscapes. Coastal roads. Volcanic scenery.",
              body:
                "Jeju is Korea's natural escape - known for lava cliffs, waterfalls, and wide ocean views. It's ideal if you prefer open space over dense city life.",
            },
            {
              title: "What Jeju Is Really Like",
              icon: "leaf",
              emphasis: "Jeju is spread out.",
              body: "Attractions are not clustered like Seoul. Expect:",
              bullets: [
                "Scenic drives between stops",
                "Quiet coastal routes",
                "Fewer crowds outside peak seasons",
                "Relaxed evenings",
                "Jeju feels spacious and calm.",
              ],
            },
            {
              title: "Getting Around",
              icon: "car",
              emphasis: "A rental car makes Jeju much easier.",
              body: "With a car:",
              bullets: [
                "Flexible timing and easy access to beaches, waterfalls, and hiking trails.",
                "Without a car: longer travel times, limited routes, and more waiting.",
                "Most visitors choose to drive.",
              ],
            },
            {
              title: "How Long Should You Stay?",
              icon: "calendar",
              emphasis: "Jeju rewards time and flexibility.",
              body: "Recommended length:",
              bullets: [
                "3 nights - Iconic highlights: Seongsan Ilchulbong, Jeongbang Waterfall, and a short Hallasan trail.",
                "4-5 nights - Add variety: Manjanggul Lava Tube, Hyupjae Beach, Cheonjiyeon Waterfall.",
                "6-7 nights or more - Slow island travel: Jeju Olle Trail sections, Udo Island, Seopjikoji coastal cliffs.",
                "More days mean less rushing and better weather flexibility.",
              ],
            },
            {
              title: "Where to Stay",
              icon: "bed",
              emphasis: "Choose one base.",
              body: "Jeju City or Seogwipo are the two practical options:",
              bullets: [
                "Jeju City -> Close to airport and restaurants.",
                "Seogwipo -> Closer to waterfalls and southern coast scenery.",
                "Switching hotels usually wastes time.",
              ],
            },
            {
              title: "What Jeju Is Best For",
              icon: "spark",
              emphasis: "Jeju is strong in nature, not nightlife.",
              body: "Best for:",
              bullets: [
                "Scenic coastal drives",
                "Easy hiking",
                "Ocean viewpoints",
                "Scenic cafes",
                "Quiet evenings",
              ],
            },
            {
              title: "Common Mistakes",
              icon: "alert",
              emphasis: "Keep the schedule light.",
              body: "Common mistakes:",
              bullets: [
                "Visiting for only 1-2 nights",
                "Planning too many stops per day",
                "Underestimating driving time",
                "Expecting city-style convenience",
              ],
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "Jeju suits travelers who want nature, space, and slower days.",
              body: "If you enjoy open roads and ocean views, Jeju fits perfectly.",
            },
          ],
        },
        {
          title: "Gyeongju",
          slug: "gyeongju",
          icon: "temple",
          image: "heritage",
          description: "History everywhere you walk.",
          quickAnswer:
            "This page helps you decide if Gyeongju is worth adding for history and a slower pace.",
          content: [
            {
              title: "Gyeongju",
              icon: "temple",
              emphasis: "Ancient capital. Open-air history. Walkable landmarks.",
              body:
                "Gyeongju was the capital of the Silla Kingdom for nearly 1,000 years. Today, royal tombs, Buddhist temples, and stone observatories are spread across open parks and quiet streets rather than hidden behind modern city traffic. It's ideal if you want history, space, and a slower pace after Seoul or Busan.",
            },
            {
              title: "Why Gyeongju Works So Well",
              icon: "spark",
              emphasis: "Most major sites are close together and easy to reach on foot.",
              body: "You can walk between:",
              bullets: [
                "Daereungwon Tomb Complex - Grass-covered royal burial mounds",
                "Cheomseongdae Observatory - One of Asia's oldest astronomical towers",
                "Donggung Palace & Wolji Pond - Historic palace ruins with evening reflections",
                "Flat streets. Short distances. Minimal commuting.",
              ],
            },
            {
              title: "Key Sites Beyond the Center",
              icon: "temple",
              emphasis: "A short ride from downtown:",
              body:
                "Together, these sites present a complete picture of Korea's early history.",
              bullets: [
                "Bulguksa Temple - UNESCO-listed Buddhist temple",
                "Seokguram Grotto - Cliffside stone Buddha overlooking the sea",
                "Gyeongju National Museum - Silla gold crowns and royal artifacts",
              ],
            },
            {
              title: "How Much Time Do You Need?",
              icon: "calendar",
              emphasis: "Gyeongju fits naturally between Seoul and Busan.",
              body: "Plan by pace:",
              bullets: [
                "1 full day - Covers the central historic district.",
                "1 night + 2 days - Adds Bulguksa and Seokguram with a relaxed evening around Wolji Pond.",
              ],
            },
            {
              title: "What Makes Gyeongju Different",
              icon: "route",
              emphasis: "You won't find skyscrapers or nightlife districts.",
              body: "Instead:",
              bullets: [
                "Open parks with ancient tombs",
                "Temple complexes surrounded by nature",
                "Wide walking paths instead of shopping streets",
                "The city feels calm, spacious, and easy to explore.",
              ],
            },
            {
              title: "Best Way to Explore",
              icon: "route",
              emphasis: "No complicated transport planning is required.",
              body: "Best methods:",
              bullets: [
                "Walk the central district",
                "Rent a bicycle for nearby parks",
                "Take short taxis to outer temples",
              ],
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis:
                "Gyeongju offers Korea's history in a quiet, open setting.",
              body:
                "If your itinerary feels fast-paced, this city restores balance without adding stress.",
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
              title: "Jeonju",
              icon: "bowl",
              emphasis: "Traditional streets. Local food. Hanok village charm.",
              body:
                "Jeonju is famous for Jeonju Hanok Village and its reputation as Korea's food capital. It's a compact, walkable city where traditional houses, street snacks, and regional restaurants are all within a short distance.",
            },
            {
              title: "Why Jeonju Works Well in a Korea Trip",
              icon: "spark",
              emphasis:
                "Jeonju fits naturally between Seoul and Busan and is easy to explore in one area.",
              body: "Key places:",
              bullets: [
                "Jeonju Hanok Village - Korea's largest traditional hanok district",
                "Gyeonggijeon Shrine - Historic royal shrine from the Joseon era",
                "Nambu Market - Local street food and traditional market stalls",
                "Omokdae Viewpoint - Elevated views over hanok rooftops",
                "Jeondong Cathedral - Historic cathedral beside the village",
                "Everything is close together, so you spend more time exploring and less time commuting.",
              ],
            },
            {
              title: "How Much Time Do You Need?",
              icon: "calendar",
              emphasis:
                "Jeonju works best as a short cultural and food-focused stop.",
              body: "Plan by length:",
              bullets: [
                "1 night - Walk the hanok streets, try bibimbap, and see the area after sunset.",
                "2 days - Add markets, viewpoints, and slower cafe stops.",
              ],
            },
            {
              title: "What Jeonju Is Known For",
              icon: "bowl",
              emphasis: "The flavors are balanced and easy to enjoy.",
              body: "Known for:",
              bullets: [
                "Bibimbap and regional Korean cuisine",
                "Traditional hanok architecture",
                "Street snacks and market food",
              ],
            },
            {
              title: "Best Way to Explore",
              icon: "route",
              emphasis: "Walk.",
              body: "Most highlights are within 15-20 minutes on foot.",
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis:
                "Jeonju offers traditional streets and regional food in one easy-to-navigate city.",
              body:
                "If your trip needs good food and a slower rhythm, Jeonju is a smart addition.",
            },
          ],
        },
        {
          title: "Which City Fits You Best?",
          slug: "which-city-fits-you-best",
          icon: "spark",
          image: "planning",
          description: "Pick a city based on your travel style.",
          quickAnswer:
            "This page helps you choose the best Korean city based on how you like to travel.",
          content: [
            {
              title: "Which City Fits You Best?",
              icon: "spark",
              emphasis: "Different cities suit different travel styles.",
              body:
                "Choosing the right city matters more than choosing the most famous one. Use this guide to match your travel style with the place that fits you best.",
            },
            {
              title: "Start With How You Like to Travel",
              icon: "route",
              emphasis: "Think about how you want your days to feel.",
              body: "Do you prefer:",
              bullets: [
                "Busy streets or quiet walks?",
                "Food-focused days or nature breaks?",
                "Easy public transport or driving freedom?",
                "Your answers matter more than rankings.",
              ],
            },
            {
              title: "If You Like Energy, Food, and Variety",
              icon: "city",
              emphasis: "A major city base works best.",
              body: "You'll enjoy:",
              bullets: [
                "Exploring different neighborhoods each day",
                "Trying many restaurants in one area",
                "Cafes, shopping, museums, nightlife",
                "Reliable public transport",
                "(Seoul remains the strongest choice for this style.)",
              ],
            },
            {
              title: "If You Want Coastal Views and Open Space",
              icon: "beach",
              emphasis: "Choose a seaside city.",
              body: "Consider:",
              bullets: [
                "Gangneung - Anmok Beach for sunrise cafes",
                "Yeosu - Ocean cable car views",
                "Tongyeong - Island panoramas from Mireuksan",
                "Boryeong - Wide sandy beaches",
                "These cities combine scenery with relaxed evenings.",
              ],
            },
            {
              title: "If Nature Is Your Priority",
              icon: "leaf",
              emphasis: "Pick mountain or countryside destinations.",
              body: "Good options:",
              bullets: [
                "Sokcho - Seoraksan National Park",
                "Pyeongchang - Rolling sheep farm landscapes",
                "Danyang - Mancheonha Skywalk cliffs",
                "Boseong - Green tea field hills",
                "These places suit slower travel and outdoor days.",
              ],
            },
            {
              title: "If History and Culture Matter Most",
              icon: "temple",
              emphasis: "Choose compact historic cities.",
              body: "Consider:",
              bullets: [
                "Andong - Hahoe Folk Village (UNESCO)",
                "Suwon - Hwaseong Fortress walls",
                "Both are easy to explore and rich in traditional heritage.",
              ],
            },
            {
              title: "Common Mistake to Avoid",
              icon: "alert",
              emphasis:
                "Don't ask, \"Which city is best?\" Ask, \"Which city fits how I travel?\"",
              body:
                "Trying to visit every type in one short trip often means more packing and less enjoyment.",
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis:
                "There is no perfect city for everyone - but there is a city that fits you.",
              body: "Choose based on your travel style, not popularity.",
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
      children: [
        {
          title: "Is Getting Around Hard in South Korea?",
          slug: "is-getting-around-hard",
          updatedIso: "2026-02-18T00:00:00.000Z",
          icon: "route",
          image: "transport",
          description:
            "How easy public transportation really is in South Korea.",
          quickAnswer:
            "This page explains why getting around South Korea is easy, even for first-time visitors.",
          content: [
            {
              title: "Is Getting Around Hard in South Korea?",
              icon: "train",
              emphasis: "For most travelers, it’s much easier than expected.",
              body:
                "South Korea has one of the most efficient public transportation systems in Asia. Trains, subways, and buses are clean, punctual, and built for daily commuters — which means they run frequently, all day, every day.",
            },
            {
              title: "The Short Answer",
              icon: "spark",
              emphasis: "No. It’s simple, reliable, and tourist-friendly.",
              body: "Most visitors quickly notice:",
              bullets: [
                "Subway trains every 2–5 minutes in major cities like Seoul and Busan",
                "Clear English station names and numbered exits",
                "Affordable, distance-based fares (automatically calculated)",
                "Easy transfers between subway and bus",
                "No need for a rental car in large cities",
                "If you’re staying in a central area, public transportation is usually faster and more predictable than driving.",
              ],
            },
            {
              title: "Why Transportation in Korea Works So Well",
              icon: "route",
              emphasis: "Everything is connected under one system.",
              body:
                "Subways, city buses, airport rail, and regional trains use an integrated fare network. A rechargeable T-money card works nationwide — on subways, buses, many taxis, and even at convenience stores.",
              bullets: [
                "For intercity travel, KTX (Korea Train Express) — operated by Korail — connects major cities quickly. You can travel from Seoul to Busan in about 2.5 hours.",
                "For airport transfers, the AREX (Airport Railroad Express) links downtown Seoul directly to Incheon International Airport. It’s fast, reliable, and easy to use after a long flight.",
              ],
            },
            {
              title: "What First-Time Visitors Usually Worry About",
              icon: "alert",
              emphasis:
                "The good news: the system is designed with international visitors in mind.",
              body: "These concerns are common:",
              bullets: [
                "“What if I can’t read Korean?”",
                "“What if I get on the wrong train?”",
                "“What if I get lost underground?”",
              ],
            },
            {
              title: "What Actually Happens",
              icon: "shield",
              emphasis: "Mistakes are easy to fix.",
              body: "In real life:",
              bullets: [
                "Subway lines are color-coded and numbered",
                "Stations display English names clearly",
                "Announcements are in Korean and English (often Chinese and Japanese too)",
                "If you take the wrong direction, simply get off at the next stop and switch platforms",
                "For navigation, Naver Map and KakaoMap provide accurate real-time transit routes. Google Maps works for subways, but local apps are more detailed for buses and transfers.",
              ],
            },
            {
              title: "How Most Travelers Get Around",
              icon: "train",
              emphasis: "A simple mix of transport works best.",
              body: "Most visitors use:",
              bullets: [
                "Subways for major attractions and long distances",
                "City buses for neighborhood routes",
                "Taxis late at night or when carrying heavy luggage",
                "Taxis in Korea are affordable compared to many Western countries. Drivers rely on navigation systems, so you can show your destination in Korean from your map app.",
              ],
            },
            {
              title: "What You Don’t Need",
              icon: "hand",
              emphasis: "Download a transit app, get a T-money card, and you’re ready.",
              body: "You don’t need:",
              bullets: [
                "Fluent Korean",
                "Printed paper maps",
                "A rental car in Seoul or Busan",
                "Complicated route planning",
              ],
            },
            {
              title: "A Common Mistake",
              icon: "alert",
              emphasis: "Overthinking transportation.",
              body:
                "Some first-time visitors rely too much on taxis because they assume public transit is confusing. In reality, subways are often faster — especially during rush hour when traffic slows cars significantly.",
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis:
                "Getting around South Korea is one of the easiest parts of your trip.",
              body:
                "After your first subway ride, the system feels clear and routine. For most travelers, transportation quickly becomes one of the least stressful — and most efficient — parts of visiting Korea.",
            },
          ],
        },
        {
          title: "Using the Subway",
          slug: "using-the-subway",
          icon: "train",
          image: "transport",
          description: "Tickets, cards, and how to pay.",
          quickAnswer:
            "This page helps you use the Korean subway with confidence from day one.",
          content: [
            {
              title: "Using the Subway",
              icon: "train",
              emphasis: "Simple. Clear. Reliable.",
              body:
                "If you've used a subway in any major city, you can use it in Korea. Korea's subway system is fast, clean, affordable, and designed for everyday commuters. That's exactly why it works so well for visitors. Most travelers feel comfortable after just one ride.",
            },
            {
              title: "The One Thing You Need to Know",
              icon: "card",
              emphasis: "Get a transportation card.",
              body:
                "You can buy a rechargeable transit card (such as T-money) at convenience stores or subway stations. Tap once when you enter. Tap once when you exit. That's it.",
              bullets: [
                "You don't need paper tickets.",
                "You don't need to calculate fares.",
              ],
            },
            {
              title: "How Payment Works",
              icon: "wallet",
              emphasis: "It's automatic.",
              body:
                "You don't need to understand zones or complicated fare systems.",
              bullets: [
                "Add credit to your card",
                "Fares are calculated by distance",
                "Transfers between buses and subways are discounted automatically",
              ],
            },
            {
              title: "What Stations Are Like",
              icon: "pin",
              emphasis: "Clear and traveler-friendly.",
              body:
                "In most cases, following the line number and exit number is enough.",
              bullets: [
                "Lines are color-coded and numbered",
                "Station names are shown in English",
                "Major stations include English announcements",
                "Exit numbers guide you directly to streets and landmarks",
              ],
            },
            {
              title: "What First-Time Riders Worry About",
              icon: "alert",
              emphasis: "Mistakes are easy to fix.",
              body: "Common concerns:",
              bullets: [
                "What if I take the wrong direction?",
                "What if I can't read Korean?",
                "What if I tap incorrectly?",
                "Signs are consistent and easy to follow",
                "If you go the wrong way, get off at the next station and switch",
                "If there's a payment issue, the gate won't open - so you'll know immediately",
              ],
            },
            {
              title: "What You Don't Need to Worry About",
              icon: "hand",
              emphasis: "A transit app and basic station signs are usually enough.",
              body: "You don't need:",
              bullets: [
                "Fluent Korean",
                "A rental car in major cities",
                "Complex route memorization",
                "Taxis for short distances",
              ],
            },
            {
              title: "A Helpful Tip",
              icon: "route",
              emphasis:
                "Don't default to taxis just because you feel uncertain.",
              body:
                "In cities like Seoul or Busan, the subway is often faster, more predictable, and cheaper than driving.",
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis:
                "Korea's subway system is one of the easiest parts of your trip.",
              body:
                "Once you ride it once, it quickly feels routine - not something to stress about.",
            },
          ],
        },
        {
          title: "Taking the Bus",
          slug: "taking-the-bus",
          icon: "bus",
          image: "transport",
          description: "How buses work and when to use them.",
          quickAnswer:
            "This page helps you know when and how to use buses without confusion.",
          content: [
            {
              title: "Taking the Bus",
              icon: "bus",
              emphasis: "More than just a backup plan.",
              body:
                "In Korea, buses are a core part of the public transport system. They connect neighborhoods, attractions, and areas the subway doesn't cover. Once you understand the routes and payment system, buses are simple, efficient, and reliable.",
            },
            {
              title: "When Should You Take the Bus?",
              icon: "route",
              emphasis: "When it saves time and steps.",
              body: "Choose the bus when:",
              bullets: [
                "Your destination is not near a subway station",
                "The subway route requires multiple transfers",
                "You want to avoid long underground walking",
                "A map app shows a faster direct route by bus",
                "If one bus gets you there without changing lines, it is often the most efficient choice.",
              ],
            },
            {
              title: "How to Pay on Korean Buses",
              icon: "card",
              emphasis: "Same card, simple system.",
              body:
                "You use the same transportation card as the subway (such as T-money).",
              bullets: [
                "Tap once when you get on",
                "Tap again when you get off",
                "The system automatically calculates distance and transfers",
                "There is no need to calculate fares manually. Just remember to tap out.",
              ],
            },
            {
              title: "Common Concerns for First-Time Visitors",
              icon: "alert",
              emphasis: "Clear and manageable.",
              body: "Many travelers worry about:",
              bullets: [
                "Getting on the wrong bus",
                "Missing their stop",
                "Not knowing when to exit",
                "In practice, buses are easy to follow using a map app and the onboard screens.",
              ],
            },
            {
              title: "What You'll Notice on the Bus",
              icon: "shield",
              emphasis: "Visible, trackable, predictable.",
              body: "In practice:",
              bullets: [
                "Bus numbers and final destinations are clearly displayed",
                "Stops are announced and shown on digital screens",
                "Google Maps or Naver Map tracks your location in real time",
                "You can see exactly how many stops remain before yours.",
              ],
            },
            {
              title: "Why Buses Feel Different",
              icon: "pin",
              emphasis: "You see the city.",
              body: "Unlike the subway, buses travel above ground. You:",
              bullets: [
                "See streets and neighborhoods",
                "Understand distances better",
                "Stay oriented more easily",
                "For many visitors, this makes travel feel more intuitive.",
              ],
            },
            {
              title: "A Common Mistake to Avoid",
              icon: "alert",
              emphasis: "Do not default to taxis.",
              body: "Some travelers:",
              bullets: [
                "Avoid buses completely",
                "Use taxis instead for short trips",
                "Overuse the subway even when it is indirect",
                "Often, the bus is cheaper than a taxi and more direct than the subway.",
              ],
            },
            {
              title: "What You Don't Need to Master",
              icon: "hand",
              emphasis: "It is simpler than it looks.",
              body: "You do not need:",
              bullets: [
                "To memorize bus routes",
                "To deeply understand the color system",
                "To speak Korean fluently",
                "If you can follow numbers and use a map app, you can use Korean buses confidently.",
              ],
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "Practical and reliable.",
              body:
                "When the subway gets you close, the bus often gets you exactly there. Use it when it clearly saves time, transfers, or walking.",
            },
          ],
        },
        {
          title: "Using Taxis",
          slug: "using-taxis",
          icon: "taxi",
          image: "transport",
          description: "Costs, apps, and payment tips.",
          quickAnswer:
            "This page helps you decide when taxis make sense and how to use them safely.",
          content: [
            {
              title: "Using Taxis",
              icon: "taxi",
              emphasis: "Easy when used strategically.",
              body:
                "Taxis in Korea are safe, regulated, and widely available. They are best for short distances, late nights, or when public transport is inconvenient. If you know when to use them, taxis are straightforward and reliable.",
            },
            {
              title: "When Should You Take a Taxi?",
              icon: "alert",
              emphasis: "Use it when it clearly saves effort.",
              body: "A taxi makes sense when:",
              bullets: [
                "The subway has stopped running (usually around midnight)",
                "You are carrying heavy luggage",
                "You are traveling in a group and can split the fare",
                "The weather is bad (rain, snow, extreme heat)",
                "Your destination is far from the nearest station",
                "If public transport requires multiple transfers and long walking, a taxi can save both time and energy.",
              ],
            },
            {
              title: "How Expensive Are Taxis in Korea?",
              icon: "wallet",
              emphasis: "Affordable for short distances.",
              body:
                "Taxi fares in Korea are regulated and generally reasonable compared to many major cities worldwide.",
              bullets: [
                "Short rides are usually cost-effective",
                "Long cross-city rides can become expensive",
                "Heavy traffic increases the fare because time is included",
                "If a direct subway or bus route is available, it is often cheaper. If convenience matters more, a taxi may be worth it.",
              ],
            },
            {
              title: "Using Taxi Apps",
              icon: "sim",
              emphasis: "No Korean needed.",
              body:
                "Taxi apps such as Kakao T make the process simple. You can:",
              bullets: [
                "Set your pickup location precisely",
                "Enter your destination in English",
                "See estimated fares",
                "Reduce communication issues",
                "This is the easiest option for first-time visitors.",
              ],
            },
            {
              title: "Payment Options",
              icon: "card",
              emphasis: "Card is standard.",
              body: "Most taxis accept:",
              bullets: [
                "International credit cards",
                "Mobile payments",
                "In some cases, transportation cards",
                "Carrying a small amount of cash is still a good backup.",
              ],
            },
            {
              title: "When Taxis Are the Best Option",
              icon: "spark",
              emphasis: "Comfort over complexity.",
              body: "Taxis are especially useful for:",
              bullets: [
                "Late-night returns to your hotel",
                "Early morning airport transfers",
                "Traveling with suitcases",
                "Reaching areas not well connected by subway",
                "In these situations, the extra cost often improves your overall travel experience.",
              ],
            },
            {
              title: "Common Taxi Mistakes to Avoid",
              icon: "alert",
              emphasis: "Plan before you ride.",
              body: "Avoid:",
              bullets: [
                "Taking taxis during rush hour traffic",
                "Using taxis for every short distance",
                "Entering the wrong pickup location in an app",
                "Assuming payment methods without checking",
                "A quick route comparison in a map app can prevent unnecessary expenses.",
              ],
            },
            {
              title: "Quick Decision Guide",
              icon: "checklist",
              emphasis: "Ask yourself:",
              body: "Check these before booking:",
              bullets: [
                "Is public transport direct and easy?",
                "Will traffic make a taxi slower?",
                "Does this ride save meaningful time or effort?",
                "If the answer is yes, take the taxi. If not, public transport may be smarter.",
              ],
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "Smart use makes taxis valuable.",
              body:
                "Taxis in Korea are safe, reliable, and easy to use. When chosen strategically, they add comfort and flexibility to your trip. When overused, they simply increase your travel budget.",
            },
          ],
        },
        {
          title: "Transportation Cards",
          slug: "transportation-cards",
          icon: "card",
          image: "transport",
          description: "What card to buy and how to use it.",
          quickAnswer:
            "This page helps you choose the right transport card and use it correctly.",
          content: [
            {
              title: "Transportation Cards",
              icon: "card",
              emphasis: "A small card, a big convenience.",
              body:
                "Buy a transportation card early in your trip and moving around Korea becomes much easier. It works on subways, buses, and even some taxis and convenience stores. You do not need to compare different versions - any standard transit card will do the job.",
            },
            {
              title: "Why You Should Get One on Day One",
              icon: "train",
              emphasis: "Save time from your first ride.",
              body: "A transportation card lets you:",
              bullets: [
                "Skip single-use subway tickets",
                "Board buses without cash",
                "Receive automatic transfer discounts",
                "Move faster through gates and bus doors",
                "Instead of buying tickets every time, you tap and go.",
              ],
            },
            {
              title: "Which Card Should You Buy?",
              icon: "wallet",
              emphasis: "Keep it simple.",
              body: "For most travelers, a standard card like T-money is enough.",
              bullets: [
                "Airport convenience stores",
                "Subway station machines",
                "Major convenience store chains",
                "If it works on both buses and subways, it works everywhere you need.",
                "You do not need a special tourist version unless you want extra features.",
              ],
            },
            {
              title: "How to Use It",
              icon: "card",
              emphasis: "Tap in. Tap out.",
              body: "Using a Korean transportation card is straightforward:",
              bullets: [
                "Tap when you enter the subway or board a bus",
                "Tap again when you exit",
                "The system calculates the correct fare automatically.",
                "Important: If you forget to tap out on a bus, you won't receive the transfer discount and could be charged the full fare on your next trip.",
              ],
            },
            {
              title: "How Much Money Should You Load?",
              icon: "receipt",
              emphasis: "Start small and adjust.",
              body: "Load enough for one or two days. You can recharge easily at:",
              bullets: [
                "Convenience stores",
                "Subway station recharge machines",
                "There is no benefit to loading a large amount at once. You can always add more later.",
              ],
            },
            {
              title: "How to Save More Without Trying",
              icon: "transfer",
              emphasis: "Always use the same card.",
              body:
                "Transfer discounts only apply when you use the same card within the allowed time window. If you switch cards, you may lose the discount. Using one card consistently keeps your daily transport costs lower.",
            },
            {
              title: "What a Transportation Card Is NOT",
              icon: "tag",
              emphasis: "Keep expectations realistic.",
              body: "A transportation card is not:",
              bullets: [
                "A sightseeing pass",
                "A tourist attraction discount card",
                "A bundled travel package",
                "It is simply a fast and efficient way to pay for transport.",
              ],
            },
            {
              title: "Common Mistakes to Avoid",
              icon: "alert",
              emphasis: "Small habits matter.",
              body: "Avoid these:",
              bullets: [
                "Waiting until your second day to buy one",
                "Carrying multiple transit cards",
                "Forgetting to tap out on buses",
                "A single card and a simple routine make travel smoother.",
              ],
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "Less waiting. Less confusion. Less stress.",
              body:
                "A transportation card removes friction from daily travel in Korea. Once you have it, public transport becomes predictable, efficient, and easy to manage.",
            },
          ],
        },
        {
          title: "Saving on Transport",
          slug: "saving-on-transport",
          icon: "wallet",
          image: "transport",
          description: "How to pay less for daily travel.",
          quickAnswer:
            "This page helps you reduce daily transport costs without changing your plans.",
          content: [
            {
              title: "Saving on Transport",
              icon: "wallet",
              emphasis: "Small decisions, real savings.",
              body:
                "Many travelers spend more on transportation simply because they do not understand how the system works. The good news? You do not need special passes or complicated tricks. A few smart habits can noticeably reduce your daily travel costs in Korea.",
            },
            {
              title: "The Real Secret",
              icon: "spark",
              emphasis: "The system rewards simple habits.",
              body: 'You do not save money by searching for "cheap tickets." You save money by:',
              bullets: [
                "Using one transportation card consistently",
                "Making smooth transfers",
                "Avoiding unnecessary taxi rides",
                "The Korean transport system is designed to reward efficient movement.",
              ],
            },
            {
              title: "The Biggest Cost Saver",
              icon: "card",
              emphasis: "Use one card for everything.",
              body: "Always use the same transportation card for:",
              bullets: [
                "Subways",
                "Buses",
                "Transfers",
              ],
            },
            {
              title: "Why this matters",
              icon: "checklist",
              emphasis: "One card = fewer extra charges.",
              body: "Using one card consistently helps because:",
              bullets: [
                "Transfer discounts apply automatically",
                "You avoid paying full fare twice",
                "You reduce small mistakes that increase costs",
              ],
            },
            {
              title: "Plan Routes, Not Separate Rides",
              icon: "route",
              emphasis: "Think in connections.",
              body: "Instead of paying for multiple short trips:",
              bullets: [
                "Combine bus and subway within the transfer time window",
                "Walk one stop instead of riding it",
                "Visit places in the same neighborhood on the same day",
                "Efficient routing naturally lowers total costs.",
              ],
            },
            {
              title: "The Hidden Money Drain",
              icon: "taxi",
              emphasis: "Frequent short taxi rides.",
              body:
                "Short taxi rides feel affordable, but using them repeatedly increases your total spending quickly.",
            },
            {
              title: "A smarter rule",
              icon: "taxi",
              emphasis: "Use taxis when they truly help.",
              body: "A smarter rule:",
              bullets: [
                "Use taxis late at night",
                "Use taxis when public transport has stopped",
                "Avoid taxis for short daytime distances",
                "Public transport is usually the more cost-effective option.",
              ],
            },
            {
              title: "What You Probably Don't Need",
              icon: "tag",
              emphasis: "Avoid overpaying for flexibility.",
              body: "Most visitors do not need:",
              bullets: [
                "Unlimited ride passes",
                "Tourist-only transport cards",
                'Large prepaid balances "just in case"',
                "Pay for what you actually use.",
              ],
            },
            {
              title: "Easy Habits That Lower Costs",
              icon: "checklist",
              emphasis: "Simple routines work.",
              body: "Try this:",
              bullets: [
                "Walk between nearby stations",
                "Group attractions by area",
                "Avoid crossing the city multiple times in one day",
                "Start earlier to avoid peak congestion",
                "Efficient planning usually means lower spending.",
              ],
            },
            {
              title: "Smart Travelers Do This",
              icon: "shield",
              emphasis: "Check before you ride.",
              body: "Before choosing your route, ask:",
              bullets: [
                "Is there a direct bus or subway option?",
                "Can I combine routes within one transfer window?",
                "Is a taxi really necessary?",
                "A quick map check prevents unnecessary expenses.",
              ],
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "Awareness saves money.",
              body:
                "Saving on transport in Korea is not about strict budgeting. When you move efficiently and use the system correctly, your travel costs stay naturally under control.",
            },
          ],
        },
        {
          title: "Transfers Explained",
          slug: "transfers-explained",
          icon: "transfer",
          image: "transport",
          description: "How switching lines and buses works.",
          quickAnswer:
            "This page helps you understand transfers so you do not pay more than necessary.",
          content: [
            {
              title: "Transfers Explained",
              icon: "transfer",
              emphasis: "Simple rules, lower costs.",
              body:
                "Transfers in Korea are straightforward once you understand the basic principle. The system is built for daily commuters, and visitors benefit from the same automatic discounts and smooth connections.",
            },
            {
              title: "The One Rule That Matters Most",
              icon: "route",
              emphasis: "Transfers work by time, not distance.",
              body:
                "In major cities like Seoul and Busan, you must tap in again within the transfer window to avoid paying a full new fare.",
            },
            {
              title: "Transfer Time Limits",
              icon: "calendar",
              emphasis: "Time windows differ by city.",
              body: "Transfer time limits:",
              bullets: [
                "Seoul metropolitan area: 30 minutes (7:00-21:00)",
                "Seoul metropolitan area: 60 minutes at night (21:00-7:00)",
                "Busan: 30 minutes (all day)",
              ],
            },
            {
              title: "Transfer Limits by City",
              icon: "checklist",
              emphasis: "Transfer counts also vary.",
              body: "Transfer limits also differ slightly by city:",
              bullets: [
                "Seoul area: up to 4 transfers (5 rides total)",
                "Busan: up to 2 transfers (3 rides total)",
                "In Busan, exiting and re-entering the subway alone does not qualify as a discounted transfer.",
              ],
            },
            {
              title: "This Applies To",
              icon: "transfer",
              emphasis: "Most daily combinations are covered.",
              body:
                "As long as you use the same transportation card within the time window, the discounted fare is calculated automatically.",
              bullets: [
                "Subway to subway (Seoul area)",
                "Bus to bus",
                "Subway to bus",
                "Bus to Subway",
              ],
            },
            {
              title: "Why Transfers Feel Easy in Korea",
              icon: "spark",
              emphasis: "Structured and predictable.",
              body: "You will notice:",
              bullets: [
                "Clear color-coded subway lines",
                "Numbered stations and exits",
                "Announcements in Korean and English",
                "Logical station layouts",
                "The network is designed to guide people efficiently.",
              ],
            },
            {
              title: "How to Transfer Smoothly",
              icon: "checklist",
              emphasis: "Three simple habits.",
              body: "Do these and transfers stay simple:",
              bullets: [
                "Always tap your card when entering and exiting",
                "Follow line numbers and direction signs",
                "Confirm the train or bus direction before boarding",
                "Numbers matter more than station names.",
              ],
            },
            {
              title: "Common Transfer Mistakes",
              icon: "alert",
              emphasis: "Easy to avoid.",
              body: "Some first-time visitors:",
              bullets: [
                "Wait too long between rides and lose the discount",
                "Forget to tap out on buses",
                "Feel overwhelmed in large stations",
                "Most problems disappear when you tap correctly and move within the time limit.",
              ],
            },
            {
              title: "What You Don't Need to Worry About",
              icon: "hand",
              emphasis: "Keep it simple.",
              body:
                "You do not need to memorize station layouts, pre-plan every transfer, or speak Korean. The system works automatically when you follow the basics.",
            },
            {
              title: "When Transfers Save the Most",
              icon: "wallet",
              emphasis: "Small connections add up.",
              body: "Transfers are most useful when:",
              bullets: [
                "Combining short rides",
                "Switching between subway and bus",
                "Crossing multiple neighborhoods in one day",
                "Instead of paying several full fares, you pay one reduced combined fare.",
              ],
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "Designed to help you.",
              body:
                "Tap correctly, stay within the time window, and follow the numbers. If your trip feels smooth and affordable, your transfers are working.",
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
              title: "Renting a Car in Korea",
              icon: "car",
              emphasis: "Useful when it truly adds value.",
              body:
                "In many trips, you do not need a car in Korea. Public transport is modern, affordable, and reliable. But in specific regions, renting a car can make your trip smoother and more flexible. This guide helps you decide clearly - not emotionally.",
            },
            {
              title: "First, the Honest Reality",
              icon: "alert",
              emphasis: "Cities are built for trains and buses.",
              body: "In major cities like Seoul and Busan:",
              bullets: [
                "Subways are fast and extensive",
                "Buses fill the gaps",
                "Parking is limited and expensive",
                "Traffic can be heavy during peak hours",
                "For most city-based travel, a car adds cost and stress.",
              ],
            },
            {
              title: "When Renting a Car Makes Sense",
              icon: "spark",
              emphasis: "Best for islands and rural routes.",
              body: "A car is useful if:",
              bullets: [
                "You are visiting Jeju Island",
                "You plan to explore coastal or mountain areas",
                "You want to visit multiple remote spots in one day",
                "Your accommodation is outside city centers",
                "In these situations, public transport can be limited. A car gives you control over your schedule.",
              ],
            },
            {
              title: "When It Usually Doesn't Make Sense",
              icon: "alert",
              emphasis: "City trips rarely require it.",
              body: "Skip renting a car if:",
              bullets: [
                "You are staying mainly in Seoul",
                "You are traveling between cities by KTX",
                "Your hotel is near a subway station",
                "You prefer low-effort, stress-free travel",
                "Trains are often faster than driving between major cities.",
              ],
            },
            {
              title: "The Most Common Mistake",
              icon: "hand",
              emphasis: "Renting \"just in case.\"",
              body: "Many visitors rent a car without a clear plan. This can lead to:",
              bullets: [
                "Paying for unused rental days",
                "Extra parking fees",
                "Driving stress in unfamiliar traffic",
                "Only rent when you clearly benefit from it.",
              ],
            },
            {
              title: "What You Need to Rent",
              icon: "passport",
              emphasis: "Prepare these documents.",
              body: "Most rental companies in Korea require:",
              bullets: [
                "An International Driving Permit (IDP) (1949 or 1968 format)",
                "Your original, valid home-country driver's license",
                "Your passport",
                "A credit card in the driver's name for the security deposit",
              ],
            },
            {
              title: "Important",
              icon: "shield",
              emphasis: "Confirm details before booking.",
              body: "Before booking, check these points:",
              bullets: [
                "The IDP must be presented together with your original license",
                "Most companies require drivers to be at least 21 years old and to have held a license for 1 year or more",
                "Basic insurance is included, but consider full coverage (CDW) to reduce risk",
                "Policies may vary by company, vehicle type, and season",
                "Always confirm exact requirements, insurance coverage, and payment rules directly with the rental company",
              ],
            },
            {
              title: "You Can Decide Later",
              icon: "checklist",
              emphasis: "Start simple.",
              body: "You do not have to rent a car on arrival. Many travelers:",
              bullets: [
                "Use public transport first",
                "Rent a car only for Jeju or rural segments",
                "Book for specific days instead of the entire trip",
                "Flexibility reduces unnecessary costs.",
              ],
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "Freedom when it fits. Skip it when it doesn't.",
              body:
                "In Korea, a car is a practical tool - not a default choice. If it clearly saves time and effort, rent one. If not, public transport will likely serve you better.",
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
      children: [
        {
          title: "What Should I Try First?",
          slug: "what-should-i-try-first",
          icon: "bowl",
          image: "food",
          description: "Easy Korean food for beginners.",
          quickAnswer:
            "This page helps you choose beginner-friendly Korean food with confidence.",
          content: [
            {
              title: "What Should I Try First?",
              icon: "bowl",
              emphasis: "Start simple.",
              body:
                "You don't need the most famous dish on day one. Choose something familiar, balanced, and easy to enjoy. Your first Korean meal should feel comfortable - and make you excited to explore more tomorrow.",
            },
            {
              title: "The Best First Dishes to Start With",
              icon: "spark",
              emphasis: "Beginner-friendly and widely available.",
              body:
                "If this is your first Korean meal, start with dishes that are approachable and flexible:",
              bullets: [
                "Bibimbap - A rice bowl with vegetables and sauce on the side. You control how much sauce you mix in.",
                "Bulgogi - Sweet, marinated grilled beef with a familiar, comforting flavor.",
                "Korean fried chicken - Try soy-garlic or plain before exploring spicy versions.",
                "Mandu - Steamed or fried dumplings that are easy, filling, and not overwhelming.",
                "These dishes are popular, easy to find, and rarely too spicy.",
              ],
            },
            {
              title: "About Spicy Food",
              icon: "chili",
              emphasis: "Not everything in Korea is spicy.",
              body:
                "While Korean cuisine has a spicy reputation, many dishes are mild. If you prefer less heat, simply say:",
              bullets: [
                "\"Not spicy, please.\"",
                "Red color does not always mean very spicy.",
                "Some dishes are lightly seasoned rather than hot.",
                "When unsure, ask the staff before ordering.",
              ],
            },
            {
              title: "What You Don't Need to Decide Yet",
              icon: "hand",
              emphasis: "Let your taste adjust naturally.",
              body: "On your first day, you don't need to:",
              bullets: [
                "Memorize Korean dish names",
                "Plan every restaurant in advance",
                "Order the most \"authentic\" option",
                "Start with comfort. Try new things gradually.",
              ],
            },
            {
              title: "How to Pick a Good Place to Eat",
              icon: "pin",
              emphasis: "Keep the decision simple.",
              body: "A reliable rule:",
              bullets: [
                "A short, focused menu",
                "Local customers dining there",
                "Busy during lunch or dinner hours",
                "If locals are eating comfortably, it's usually a safe choice.",
              ],
            },
            {
              title: "Common Beginner Mistakes",
              icon: "alert",
              emphasis: "No pressure.",
              body: "Avoid:",
              bullets: [
                "Ordering too many dishes at once",
                "Choosing the spiciest option just to be adventurous",
                "Feeling obligated to try something you're unsure about",
                "You can always explore more later.",
              ],
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "Start easy. Build confidence.",
              body:
                "Your first Korean meals should feel enjoyable, not intimidating. Begin with familiar flavors, stay curious, and let your comfort grow naturally.",
            },
          ],
        },
        {
          title: "Food for First-Timers",
          slug: "food-for-first-timers",
          icon: "leaf",
          image: "food",
          description: "Mild dishes most visitors like.",
          quickAnswer:
            "This page helps you find mild Korean dishes most visitors enjoy.",
          content: [
            {
              title: "Food for First-Timers",
              icon: "leaf",
              emphasis: "Start with comfort.",
              body:
                "You don't need to be adventurous on your first meal in Korea. Many Korean dishes are mild, balanced, and easy to enjoy - especially those locals often recommend to first-time visitors.",
            },
            {
              title: "Mild Dishes Most Visitors Enjoy",
              icon: "bowl",
              emphasis: "Safe, familiar, still very Korean.",
              body:
                "If you prefer gentle flavors, begin with dishes that are widely loved and easy to approach:",
              bullets: [
                "Bulgogi - Sweet, marinated grilled beef with a soft, familiar flavor. A reliable first choice for many travelers.",
                "Bibimbap - A balanced rice bowl with vegetables and sauce served separately. You control how much sauce you add.",
                "Galbijjim - Slow-braised ribs that are tender, rich, and typically not spicy.",
                "Japchae - Stir-fried glass noodles with vegetables and beef, lightly seasoned and slightly sweet.",
                "Kimbap - Seaweed rice rolls with simple fillings. Ask for non-spicy options for a clean, mild taste.",
                "These dishes are easy to find across Korea, beginner-friendly, and rarely overwhelming - ideal for your first meals.",
              ],
            },
            {
              title: "About Spice Levels",
              icon: "chili",
              emphasis: "You can adjust the heat.",
              body:
                "Korean cuisine has a spicy reputation, but not everything is hot. In many restaurants:",
              bullets: [
                "\"Not spicy\" usually means mild, not bland.",
                "Chili paste or sauce is often served on the side.",
                "It's completely fine to ask, \"Is this spicy?\"",
                "Most restaurants are used to helping visitors choose comfortably.",
              ],
            },
            {
              title: "What to Take Slowly at First",
              icon: "hand",
              emphasis: "No rush.",
              body:
                "You may want to try these later, once you know your comfort level:",
              bullets: [
                "Very spicy rice cakes (tteokbokki)",
                "Strong fermented dishes",
                "Raw seafood options",
                "There's no rush. You can explore step by step.",
              ],
            },
            {
              title: "A Common Beginner Mistake",
              icon: "alert",
              emphasis: "Less is better at first.",
              body: "Many first-time visitors:",
              bullets: [
                "Order too many dishes at once",
                "Mix extremely spicy and mild dishes in one meal",
                "Feel pressured to try everything immediately",
                "Start simple. You can always try more tomorrow.",
              ],
            },
            {
              title: "Why This Approach Works",
              icon: "checklist",
              emphasis: "Confidence builds naturally.",
              body:
                "Once you enjoy a few balanced, comfortable meals, new flavors feel less intimidating - and much more exciting.",
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "Start mild. Explore gradually.",
              body:
                "Korean food doesn't need to be intense to be authentic. Begin with comfort, build confidence, and let curiosity guide you at your own pace.",
            },
          ],
        },
        {
          title: "Finding Good Restaurants",
          slug: "finding-good-restaurants",
          icon: "pin",
          image: "food",
          description: "How locals choose places to eat.",
          quickAnswer:
            "This page helps you spot good local restaurants without relying on reviews.",
          content: [
            {
              title: "Finding Good Restaurants",
              icon: "pin",
              emphasis: "Look for local patterns, not loud marketing.",
              body:
                "In Korea, the best restaurants are often discovered by observing small, practical signals - not by chasing viral trends or famous names. Once you understand what locals look for, choosing where to eat becomes faster, easier, and far less stressful.",
            },
            {
              title: "The First Rule Locals Follow",
              icon: "spark",
              emphasis: "Consistency beats hype.",
              body: "Locals tend to choose restaurants that:",
              bullets: [
                "Focus on one main dish",
                "Stay busy at regular meal times",
                "Have operated steadily for years",
                "In Korea, many excellent restaurants are specialists. A place that does one thing well usually does it very well.",
              ],
            },
            {
              title: "The Strongest Quality Signal",
              icon: "bowl",
              emphasis: "Look at the menu.",
              body: "Reliable local spots often have:",
              bullets: [
                "A short, focused menu",
                "One clear specialty",
                "Simple presentation instead of flashy advertising",
                "If a restaurant offers dozens of unrelated dishes, quality can be inconsistent. A narrow menu often signals confidence and expertise.",
              ],
            },
            {
              title: "Timing Reveals Everything",
              icon: "calendar",
              emphasis: "Watch who eats there - and when.",
              body: "Strong signs include:",
              bullets: [
                "Busy lunch hours (around 12:00-1:00 PM)",
                "Steady dinner crowds",
                "Office workers, families, or older locals dining comfortably",
                "In Korea, repeat local customers are one of the most trustworthy indicators of quality.",
              ],
            },
            {
              title: "Why a Short Line Is Often Good",
              icon: "route",
              emphasis: "A small queue usually means:",
              body: "In busy areas, a short wait is often a better sign than an empty dining room.",
              bullets: [
                "High turnover",
                "Freshly prepared food",
                "Consistent demand",
              ],
            },
            {
              title: "How Locals Avoid Tourist Traps",
              icon: "hand",
              emphasis: "Step slightly away from landmarks.",
              body: "Locals rarely:",
              bullets: [
                "Eat directly next to major tourist attractions",
                "Choose restaurants covered with large photo boards",
                "Rely on \"Top 10\" tourist signs",
                "Walking one or two side streets away often improves both taste and value.",
              ],
            },
            {
              title: "Using Review Apps the Smart Way",
              icon: "sim",
              emphasis: "Recent activity matters more than high ratings.",
              body: "Instead of focusing only on star scores, check:",
              bullets: [
                "Recent photos",
                "Comments from local customers",
                "Current busy times",
                "Active, recent engagement is more reliable than old viral popularity.",
              ],
            },
            {
              title: "A Common Visitor Mistake",
              icon: "alert",
              emphasis: "Viral does not always mean better.",
              body: "Many travelers:",
              bullets: [
                "Follow influencer trends without context",
                "Wait in long lines unnecessarily",
                "Overlook small neighborhood restaurants",
                "Quiet, consistently busy places often deliver better everyday quality.",
              ],
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "Follow the right crowd.",
              body:
                "In Korea, strong restaurants rarely rely on hype. If locals are eating there regularly, the menu is focused, and the turnover is steady, you've likely found a dependable place.",
            },
          ],
        },
        {
          title: "Food to Be Careful With",
          slug: "food-to-be-careful-with",
          icon: "chili",
          image: "food",
          description: "Very spicy or unfamiliar dishes.",
          quickAnswer:
            "This page helps you avoid food choices that often surprise first-time visitors.",
          content: [
            {
              title: "Food to Be Careful With",
              icon: "chili",
              emphasis: "Start smart, not extreme.",
              body:
                "Some Korean dishes are bold in spice, fermentation, or texture. They are authentic and loved locally - but may not be the best choice for your first few meals. This guide helps you pick the right time to try them so you can enjoy them fully.",
            },
            {
              title: "Spicy Doesn't Always Mean \"A Little Hot\"",
              icon: "alert",
              emphasis: "Korean spice is different from what you might expect.",
              body: "It can be:",
              bullets: [
                "Mild at first, then gradually more intense",
                "Slightly sweet before the heat kicks in",
                "A lingering heat that lasts longer than you'd expect",
                "It's layered, slow, and often not just immediate heat.",
              ],
            },
            {
              title: "Dishes That Can Feel Intense at First",
              icon: "chili",
              emphasis: "Popular but challenging for newcomers.",
              body: "Many first-time visitors find these dishes strong:",
              bullets: [
                "Extra-spicy tteokbokki (rice cakes)",
                "\"Fire-level\" chicken dishes",
                "Raw or heavily marinated seafood",
                "Strong fermented foods (e.g., kimchi or soybean stews)",
                "Fermented skate with a strong ammonia-like aroma",
                "Insect snacks like beondegi (silkworm larvae)",
                "Raw live octopus (sannakji)",
                "Organ meats like gopchang (intestines)",
                "These dishes are not \"bad\" choices, but they rely heavily on your tolerance for spice, texture, or strong flavors.",
              ],
            },
            {
              title: "Why Your First Meals Matter",
              icon: "spark",
              emphasis: "Early meals set your comfort level.",
              body:
                "If your first meal is too overwhelming in flavor or spice, it could make you hesitant to try more. Starting with balanced, mild dishes helps build confidence and keeps your curiosity alive for later.",
            },
            {
              title: "How Locals Handle Strong Flavors",
              icon: "hand",
              emphasis: "Balance, not a test.",
              body: "Locals often:",
              bullets: [
                "Pair spicy dishes with mild side dishes",
                "Eat strong-flavored foods in small portions",
                "Gradually adjust spice levels to their liking",
                "Know their limits",
                "Strong flavors are usually enjoyed as part of a well-balanced meal, not as a challenge.",
              ],
            },
            {
              title: "A Common Visitor Mistake",
              icon: "alert",
              emphasis: "Turning food into a test.",
              body: "Some visitors:",
              bullets: [
                "Order the spiciest dish \"for the experience\"",
                "Try extreme dishes just for the story",
                "End up losing their appetite after one overwhelming meal",
                "Food should be enjoyable, not a survival experiment.",
              ],
            },
            {
              title: "A Smarter Way to Try Bold Dishes",
              icon: "checklist",
              emphasis: "Take it slow.",
              body: "If a dish sounds intense:",
              bullets: [
                "Save it for later in your trip",
                "Share one portion with others",
                "Ask about spice level before ordering",
                "Try a small bite first rather than a full portion",
                "This way, you can enjoy the experience without the stress.",
              ],
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "Korean food rewards patience.",
              body:
                "Start with comfort, build up your familiarity, and save the boldest flavors for when you're truly ready to appreciate them - not just survive them.",
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
      children: [
        {
          title: "Best Value Places",
          slug: "best-value-places",
          icon: "bed",
          image: "stay",
          description: "Comfort without overpaying.",
          quickAnswer:
            "This page helps you find comfortable places to stay without overpaying.",
          content: [
            {
              title: "Best Value Places",
              icon: "bed",
              emphasis: "Comfort without overspending.",
              body:
                "The best value accommodations make your trip enjoyable without straining your budget. You don't have to settle for the cheapest or splurge on luxury. Choose a place that offers both comfort and convenience at a reasonable price.",
            },
            {
              title: "What Best Value Really Means",
              icon: "spark",
              emphasis: "Location over luxury.",
              body: "In Korea, value is typically defined by:",
              bullets: [
                "A great location, not just a large room",
                "Easy access to transport, rather than luxury amenities",
                "Clean, well-maintained properties",
              ],
            },
            {
              title: "Where Value-Focused Travelers Stay",
              icon: "bed",
              emphasis: "Mid-range options are usually best.",
              body: "Most visitors prefer:",
              bullets: [
                "Mid-range hotels",
                "Serviced apartments",
                "Well-reviewed business hotels",
                "A great location beats a luxurious room. Look for accommodations that are:",
                "Within 5 minutes of a subway station",
                "On a main line (without needing multiple transfers)",
                "Surrounded by convenience stores and cafes",
              ],
            },
            {
              title: "Why Cheaper Isn't Always Better",
              icon: "alert",
              emphasis: "Hidden costs can quickly add up.",
              body: "Very cheap places can sometimes mean:",
              bullets: [
                "Long walks, especially late at night",
                "Poor soundproofing",
                "Complicated check-in processes",
              ],
            },
            {
              title: "Balancing Comfort and Cost",
              icon: "route",
              emphasis: "One solid base works best.",
              body: "Many travelers:",
              bullets: [
                "Choose one hotel for the entire stay",
                "Stay longer instead of switching accommodations",
                "Use savings for food or local experiences",
              ],
            },
            {
              title: "A Common Mistake to Avoid",
              icon: "alert",
              emphasis: "Cheap locations can cost more in the end.",
              body: "Some travelers:",
              bullets: [
                "Book accommodations far from the city center to save money",
                "End up spending more on taxis or public transport",
                "Feel tired from long commutes",
              ],
            },
            {
              title: "How This Page Helps You",
              icon: "checklist",
              emphasis: "Will this place make my trip easier?",
              body: "If the answer is yes, it's likely a good value.",
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "Comfort is key to a great trip.",
              body:
                "The best value stay should be clean, well-located, and easy to live with - making your journey more enjoyable.",
            },
          ],
        },
        {
          title: "Budget Stays",
          slug: "budget-stays",
          icon: "wallet",
          image: "stay",
          description: "Affordable and Comfortable",
          quickAnswer:
            "This guide helps you find practical, stress-free options that fit your budget.",
          content: [
            {
              title: "Budget Stays",
              icon: "wallet",
              emphasis: "Affordable and Comfortable",
              body:
                "In Korea, budget stays can be both clean and safe when you know what to look for. This guide helps you find practical, stress-free options that fit your budget.",
            },
            {
              title: "What Budget Stays Offer",
              icon: "bed",
              emphasis: "Simple, No Frills, but Safe",
              body: "Budget accommodations usually include:",
              bullets: [
                "Guesthouses",
                "Small hotels",
                "Basic business hotels",
              ],
            },
            {
              title: "What to Check Before Booking",
              icon: "checklist",
              emphasis: "Focus on the essentials.",
              body: "A great budget stay should provide:",
              bullets: [
                "A private bed in a quiet room",
                "Clean bathrooms (shared or private)",
                "Clear check-in instructions",
                "Recent, positive reviews from guests",
              ],
            },
            {
              title: "Location is Key",
              icon: "pin",
              emphasis: "Distance can cost more than you think.",
              body: "Look for places that are:",
              bullets: [
                "Within walking distance of a subway station",
                "On a main subway line (no multiple transfers)",
                "Close to shops and food options",
              ],
            },
            {
              title: "When Budget Stays Work Best",
              icon: "route",
              emphasis: "Sleep, Rest, Explore",
              body: "Budget stays are ideal when:",
              bullets: [
                "You spend most of your day exploring",
                "You need a place just to rest and sleep",
                "You don't require extra space",
              ],
            },
            {
              title: "When to Rethink Budget Stays",
              icon: "alert",
              emphasis: "Know your comfort level.",
              body: "You may want to reconsider if:",
              bullets: [
                "You're a light sleeper",
                "You have large luggage",
                "You need more personal space",
              ],
            },
            {
              title: "Common Mistake: Cheapest Isn't Always Best",
              icon: "alert",
              body: "Many travelers:",
              bullets: [
                "Choose the absolute cheapest option",
                "Ignore location and noise reviews",
                "End up feeling exhausted after a few nights",
              ],
            },
            {
              title: "How This Page Helps You",
              icon: "spark",
              emphasis: "Is this place a good fit for your style?",
              body: "If it checks the essential boxes, it's likely a great budget choice.",
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "Focus on the basics.",
              body:
                "Budget stays in Korea can be clean, safe, and convenient. You don't need luxury to have a great trip.",
            },
          ],
        },
        {
          title: "Luxury Hotels",
          slug: "luxury-hotels",
          icon: "spark",
          image: "stay",
          description: "Worth it when chosen wisely.",
          quickAnswer:
            "Opt for luxury when it truly adds value to your stay.",
          content: [
            {
              title: "Luxury Hotels",
              icon: "spark",
              emphasis: "Worth it when chosen wisely.",
              body:
                "Luxury hotels in Korea offer exceptional experiences, but they should enhance your trip, not just your room. Opt for luxury when it truly adds value to your stay.",
            },
            {
              title: "When Luxury Makes Sense",
              icon: "spark",
              emphasis: "A highlight, not the whole trip.",
              body: "Luxury is perfect for:",
              bullets: [
                "Special occasions",
                "Stunning views and easy transport access",
                "Exceptional service without stress",
                "A night or two of pure comfort",
              ],
            },
            {
              title: "The Smartest Way to Enjoy Luxury",
              icon: "route",
              emphasis: "One splurge night.",
              body: "Best approach:",
              bullets: [
                "Splurge on one night of luxury",
                "Choose mid-range options for the rest",
                "Save on accommodation and spend more on food and experiences",
              ],
            },
            {
              title: "What to Look for Beyond Price",
              icon: "checklist",
              emphasis: "Value > Brand.",
              body: "Before booking, check:",
              bullets: [
                "Convenient location near subway lines",
                "Real views, not just pictures",
                "Lounge or breakfast value",
                "Room size compared to price",
              ],
            },
            {
              title: "Where Luxury Shines in Korea",
              icon: "pin",
              emphasis: "Ideal for specific situations.",
              body: "Luxury is best for:",
              bullets: [
                "Seoul: City views and walking districts",
                "Busan: Beachfront with ocean views",
                "Special nights like anniversaries",
              ],
            },
            {
              title: "Common Mistakes to Avoid",
              icon: "alert",
              emphasis: "Luxury should complement your trip.",
              body: "Many travelers regret:",
              bullets: [
                "Booking luxury far from transport",
                "Paying for unused amenities",
                "Choosing luxury every night, missing out on experiences",
                "Prioritizing brand over location",
              ],
            },
            {
              title: "What You Don’t Need to Decide Now",
              icon: "hand",
              emphasis: "Make decisions when your plan is set.",
              body:
                "This guide helps you understand if luxury fits your plans, but prices and availability often change, so wait until your dates are firm.",
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "One great night beats seven expensive ones.",
              body:
                "Luxury hotels are a smart choice when used intentionally. If they enhance comfort, save time, or create lasting memories, they’re worth it.",
            },
          ],
        },
        {
          title: "Where to Stay in Seoul",
          slug: "where-to-stay-in-seoul",
          icon: "city",
          image: "city",
          description: "Location matters more than hotel stars.",
          quickAnswer: "Choose the area first - then pick the hotel.",
          content: [
            {
              title: "Where to Stay in Seoul",
              icon: "city",
              emphasis: "Location matters more than hotel stars.",
              body:
                "In Seoul, your neighborhood affects your trip more than room size or brand name. The right area can save you hours of commuting and make each day easier. Choose the area first - then pick the hotel.",
            },
            {
              title: "First Rule",
              icon: "pin",
              emphasis: "A small room in the right place beats a big room far away.",
              body:
                "Stay within a 5-minute walk of a subway station. Even better, choose a stop on a main subway line with easy connections. Less transferring = less fatigue.",
            },
            {
              title: "If You Like Energy and Nightlife",
              icon: "spark",
              emphasis: "Hongdae",
              body: "Why travelers choose it:",
              bullets: [
                "Lively streets, music, and late-night food",
                "Trendy cafes and affordable eats",
                "Direct airport train access (AREX)",
                "Best for first-time visitors who enjoy a youthful, social atmosphere.",
              ],
            },
            {
              title: "If You Want Convenience and Shopping",
              icon: "tag",
              emphasis: "Myeongdong",
              body: "Why travelers choose it:",
              bullets: [
                "Walkable shopping streets",
                "Many hotels experienced with international guests",
                "Central location with easy transport",
                "Best for short stays and travelers who want simple logistics.",
              ],
            },
            {
              title: "If You Prefer Culture and History",
              icon: "temple",
              emphasis: "Jongno (Insadong / Gyeongbokgung area)",
              body: "Why travelers choose it:",
              bullets: [
                "Traditional streets and historic palaces",
                "Quieter evenings",
                "Easy walking access to cultural sites",
                "Best for travelers focused on sightseeing and local atmosphere.",
              ],
            },
            {
              title: "If You Want Modern and Spacious",
              icon: "city",
              emphasis: "Gangnam",
              body: "Why travelers choose it:",
              bullets: [
                "Modern buildings and wider streets",
                "Strong dining and cafe scene",
                "Good subway connections",
                "Best for repeat visitors, business travelers, and longer stays.",
              ],
            },
            {
              title: "Common Mistakes to Avoid",
              icon: "alert",
              emphasis: "Daily commuting drains your energy.",
              body: "Many visitors:",
              bullets: [
                "Book far from subway stations to save money",
                "Spend more on taxis later",
                "Change hotels inside Seoul and waste time",
                "A slightly higher room rate in the right location often saves money overall.",
              ],
            },
            {
              title: "What You Don't Need Yet",
              icon: "hand",
              emphasis: "Decide the area first, not the exact hotel.",
              body: "You don't need:",
              bullets: [
                "A luxury brand",
                "A \"top 10\" blog recommendation",
                "The biggest room available",
              ],
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "There is no single best neighborhood.",
              body:
                "There is only the best area for your travel style. Choose location first - comfort and value will follow.",
            },
          ],
        },
        {
          title: "Where to Stay in Busan",
          slug: "where-to-stay-in-busan",
          icon: "beach",
          image: "beach",
          description: "Beach life or city life?",
          quickAnswer:
            "Where you stay will shape your entire experience. Once you make your choice, everything else will fall into place.",
          content: [
            {
              title: "Where to Stay in Busan",
              icon: "beach",
              emphasis: "Beach life or city life?",
              body:
                "Busan doesn't have a single \"best\" area to stay. Where you stay will shape your entire experience. Once you make your choice, everything else will fall into place.",
            },
            {
              title: "Beachside Vibes",
              icon: "beach",
              emphasis: "Haeundae",
              body: "Why it's popular:",
              bullets: [
                "Iconic beach with easy access",
                "Perfect for beach activities and seaside dining",
                "Nearby shopping, cafes, and entertainment options",
                "Best for: Visitors who love the beach and want direct access to the sea.",
              ],
            },
            {
              title: "City Center Comfort",
              icon: "city",
              emphasis: "Seomyeon",
              body: "Why it's popular:",
              bullets: [
                "Central location with vibrant nightlife",
                "Shopping streets, restaurants, and cafes nearby",
                "Excellent public transport connections",
                "Best for: Those who want to explore the city, shop, and enjoy local life.",
              ],
            },
            {
              title: "Cultural & Scenic Relaxation",
              icon: "temple",
              emphasis: "Gamcheon Culture Village",
              body: "Why it's popular:",
              bullets: [
                "Colorful, artistic neighborhood with unique cafes",
                "Close to cultural sites and scenic spots",
                "Quieter, more relaxed than the city center",
                "Best for: Travelers looking for a peaceful, scenic experience with a cultural touch.",
              ],
            },
            {
              title: "Convenient and Modern",
              icon: "city",
              emphasis: "Centum City",
              body: "Why it's popular:",
              bullets: [
                "Upscale, modern area with malls and restaurants",
                "Ideal for both business and leisure stays",
                "Close to major attractions like Shinsegae and Busan Exhibition Center",
                "Best for: Business travelers or those who prefer a modern and well-organized area.",
              ],
            },
            {
              title: "Common Mistakes to Avoid",
              icon: "alert",
              emphasis: "Location matters more than hotel quality.",
              body: "Avoid these common issues:",
              bullets: [
                "Booking far from your preferred attractions adds unnecessary stress",
                "Forgetting to check transport options can lead to long commutes",
                "Opting for luxury when a mid-range hotel offers more convenience",
              ],
            },
            {
              title: "What You Don't Need to Decide Yet",
              icon: "hand",
              emphasis: "Choose the area first, not the exact hotel.",
              body: "You can decide these details later:",
              bullets: [
                "Don't worry about specific hotel brands just yet",
                "Skip stressing over perfect views or \"ideal\" spots",
                "Focus on choosing the right area that fits your travel style",
              ],
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "Where you stay in Busan shapes your experience.",
              body:
                "Pick the area that matches your interests, and everything else will follow. Whether it's the beach, the city center, or a quieter neighborhood, the right location makes all the difference.",
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
      children: [
        {
          title: "Must-See for First Timers",
          slug: "must-see-for-first-timers",
          icon: "spark",
          image: "basics",
          description: "Explore key spots that truly represent Korea.",
          quickAnswer:
            "This guide helps you choose places that are truly worth your time.",
          content: [
            {
              title: "Must-See for First Timers",
              icon: "spark",
              emphasis: "Explore key spots that truly represent Korea.",
              body:
                "When time is limited, focus on a few highlights instead of trying to see everything. This guide helps you choose places that are truly worth your time.",
            },
            {
              title: "What Makes a Place \"Must-See\"?",
              icon: "checklist",
              emphasis: "A must-see place should:",
              body: "A must-see place should:",
              bullets: [
                "Show Korea's history and traditions",
                "Reflect modern Korean culture",
                "Be easy to reach by public transportation",
              ],
            },
            {
              title: "Top Places First-Time Visitors Love",
              icon: "spark",
              emphasis: "A balanced mix of history, local life, and scenery.",
              body: "Use these categories to build your first-timer list:",
            },
            {
              title: "Historical Highlights",
              icon: "temple",
              emphasis: "Classic places that explain Korea's past.",
              body: "Top picks:",
              bullets: [
                "Gyeongbokgung Palace - Korea's most famous royal palace with a guard changing ceremony.",
                "Changdeokgung Palace & Secret Garden - UNESCO-listed palace with a peaceful royal garden.",
                "Bukchon Hanok Village - Traditional Korean houses with scenic city views.",
              ],
            },
            {
              title: "Lively Local Areas",
              icon: "tag",
              emphasis: "Food, shopping, and everyday energy.",
              body: "Top picks:",
              bullets: [
                "Myeongdong - Street food, K-beauty shopping, and global brands.",
                "Insadong - Traditional tea houses, crafts, and cultural souvenirs.",
              ],
            },
            {
              title: "Scenic & Fun Experiences",
              icon: "spark",
              emphasis: "Views, nature, and memorable activities.",
              body: "Top picks:",
              bullets: [
                "N Seoul Tower - Panoramic city views, especially at sunset.",
                "Gamcheon Culture Village (Busan) - Colorful hillside houses and photo spots.",
                "Jeju Island - Volcanic landscapes, beaches, and waterfalls.",
                "Nami Island - Beautiful tree-lined paths, perfect for seasonal visits.",
                "Everland - Korea's largest theme park.",
              ],
            },
            {
              title: "Smart Travel Tip",
              icon: "route",
              emphasis: "Pick 2-3 highlights per city.",
              body:
                "Avoid planning too many stops in one day. Travel time adds up quickly.",
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "You don't need to see everything.",
              body:
                "Choose a balanced mix of history, culture, and scenery. If you end your day inspired instead of exhausted, you've chosen the right must-see places in Korea.",
            },
          ],
        },
        {
          title: "Good Places Without Crowds",
          slug: "good-places-without-crowds",
          icon: "leaf",
          image: "heritage",
          description: "Crowds are not required for a great experience.",
          quickAnswer:
            "This guide helps you discover peaceful places without wasting your travel time.",
          content: [
            {
              title: "Good Places Without Crowds",
              icon: "leaf",
              emphasis: "Crowds are not required for a great experience.",
              body:
                "Some of the most memorable moments in Korea happen away from busy tourist hotspots. This guide helps you discover peaceful places without wasting your travel time.",
            },
            {
              title: "Rethink \"Hidden\"",
              icon: "spark",
              emphasis: "Quiet places are not truly hidden.",
              body:
                "They are simply less promoted. They don't appear in viral videos or Top-10 rankings - and that's exactly why they feel more relaxed and authentic.",
            },
            {
              title: "Calm Places Near Seoul (Easy to Reach)",
              icon: "pin",
              emphasis: "Good choices without heavy crowds.",
              body: "Try these spots:",
              bullets: [
                "Seochon - A quieter alternative to Bukchon, with traditional alleys, local cafes, and art spaces.",
                "Seoul Forest - A large urban park loved by locals, ideal for walks, biking, or a relaxed picnic.",
                "Suwon Hwaseong Fortress - About one hour from Seoul, with open walking paths and fewer crowds than central palaces.",
                "Bukhansan National Park - Nature views right next to the city; weekday mornings are the calmest.",
                "Incheon Chinatown & Wolmido - Harbor views, seaside walks, and a slower atmosphere than central Seoul.",
              ],
            },
            {
              title: "Timing Matters More Than Location",
              icon: "calendar",
              emphasis: "The same place can feel completely different depending on when you go.",
              body: "Simple rules that work:",
              bullets: [
                "Go early in the morning",
                "Visit on weekdays",
                "Avoid lunch and sunset peak hours",
                "Walk one subway stop away from major tourist hubs",
              ],
            },
            {
              title: "Common Mistakes to Avoid",
              icon: "alert",
              emphasis: "Calm travel requires flexibility.",
              body: "Avoid these mistakes:",
              bullets: [
                "Visiting quiet areas during weekend peak hours",
                "Trying to see too many \"hidden spots\" in one day",
                "Expecting silence in central Seoul",
              ],
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "Walk a little farther. Go a little earlier.",
              body:
                "Step away from obvious highlights, slow down, and your Korea trip will feel more personal - and far more memorable.",
            },
          ],
        },
        {
          title: "Top Places by City",
          slug: "top-places-by-city",
          icon: "pin",
          image: "city",
          description: "Highlights for each city.",
          quickAnswer:
            "This page helps you plan activities by city without jumping around too much.",
          content: [
            {
              title: "Top Places by City",
              icon: "pin",
              emphasis: "See less, enjoy more.",
              body:
                "Every Korean city offers plenty to see. Instead of rushing, focus on a few well-chosen highlights that match your travel style.",
            },
            {
              title: "How to Use This Guide",
              icon: "checklist",
              emphasis: "Choose one main area per day.",
              body:
                "Stay within one district instead of crossing the entire city. This saves time, reduces stress, and makes your trip more enjoyable.",
            },
            {
              title: "Incheon - Port History & Modern Skyline",
              icon: "city",
              emphasis: "A mix of old trading streets and futuristic city views.",
              body: "Best approach: Combine one historic area with one waterfront walk.",
              bullets: [
                "Chinatown - Korea's oldest Chinatown and the birthplace of jajangmyeon.",
                "Songdo Central Park - Skyscrapers, canals, and a modern waterfront walk.",
                "Wolmido - Casual seaside walks and small amusement rides.",
                "Open Port Street - Historic buildings from Korea's early modernization period.",
              ],
            },
            {
              title: "Ulsan - Coast & Nature",
              icon: "beach",
              emphasis: "Wide ocean views and open landscapes.",
              body: "Best approach: Focus on one coastal route and take your time.",
              bullets: [
                "Taehwagang National Garden - Large ecological garden in the city center.",
                "Ganjeolgot - Famous sunrise spot on Korea's east coast.",
                "Daewangam Park - Dramatic coastal rock formations and walking trails.",
                "Jangsaengpo Whale Culture Village - Learn about Ulsan's whale industry history.",
              ],
            },
            {
              title: "Daegu - Views & Local Life",
              icon: "city",
              emphasis: "A city surrounded by mountains.",
              body: "Best approach: Pair one viewpoint with one food or shopping area.",
              bullets: [
                "Apsan Observatory - Panoramic city views.",
                "Seomun Market - Traditional street food and local shopping.",
                "Dongseongno - Youth culture and shopping district.",
                "83 Tower - Central observation tower for skyline views.",
              ],
            },
            {
              title: "Daejeon - Science & Relaxation",
              icon: "spark",
              emphasis: "Known as Korea's science hub.",
              body: "Best approach: Combine one park with one relaxation activity.",
              bullets: [
                "Hanbat Arboretum - Spacious urban garden.",
                "Expo Science Park - Landmark of Korea's science identity.",
                "Yuseong Hot Springs - Historic hot spring district.",
                "Gyejoksan Red Clay Trail - Unique barefoot forest walking path.",
              ],
            },
            {
              title: "Gwangju - Culture & Modern History",
              icon: "temple",
              emphasis: "A key city in Korea's democratic movement.",
              body: "Best approach: Balance one cultural site with one outdoor walk.",
              bullets: [
                "May 18th National Cemetery - Memorial site of the 1980 uprising.",
                "Asia Culture Center - Modern exhibitions and performances.",
                "Mudeungsan - Easy-access mountain hiking.",
                "Yangdong Market - Traditional market with regional food.",
              ],
            },
            {
              title: "Travel Smart",
              icon: "alert",
              emphasis: "Do not rank cities by \"importance.\"",
              body:
                "There is no universal must-see list. The right city depends on your interests - history, food, nature, or modern culture.",
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "Match the city to your pace, not the hype.",
              body:
                "Choose fewer places, stay longer in each area, and your Korea trip will feel more relaxed and more memorable.",
            },
          ],
        },
        {
          title: "How Much Does It Cost?",
          slug: "how-much-does-it-cost",
          icon: "wallet",
          image: "basics",
          description: "Entrance fees and price ranges.",
          quickAnswer:
            "This page helps you estimate attraction costs without overbudgeting.",
          content: [
            {
              title: "How Much Does It Cost?",
              icon: "wallet",
              emphasis: "Short answer: usually not much.",
              body:
                "Korea is one of the more affordable destinations in East Asia for sightseeing. Many top attractions are free or cost only a small entrance fee. This guide helps you understand where your money really goes.",
            },
            {
              title: "Good News First",
              icon: "spark",
              emphasis: "Tickets are rarely your biggest expense.",
              body:
                "Most palaces and museums charge low fees, and many parks and outdoor areas are completely free. You can enjoy a full day of sightseeing without spending much on entry.",
            },
            {
              title: "What You Typically Pay For",
              icon: "checklist",
              emphasis: "You control how much you spend.",
              body: "Typical ranges:",
              bullets: [
                "Historic palaces and heritage sites - Low entrance fees",
                "Gyeongbokgung - 3,000 KRW",
                "Deoksugung - 1,000 KRW",
                "Museums and cultural centers - Often free",
                "National Museum of Korea - Free",
                "Seoul Museum of History - Free",
                "Nature spots (mountains, parks, rivers) - Usually free",
                "Bukhansan National Park - Free",
                "Hangang River Parks - Free",
                "Theme parks and special experiences - Higher cost, optional",
                "N Seoul Tower Observatory - around 21,000 KRW",
                "Lotte World - around 62,000 KRW",
              ],
            },
            {
              title: "What Actually Affects Your Daily Budget",
              icon: "route",
              emphasis: "Food and transportation matter more than tickets.",
              body: "Your spending depends on:",
              bullets: [
                "Street food vs. sit-down restaurants",
                "Subway and buses vs. taxis",
                "Staying in one city vs. frequent intercity travel",
                "Small daily choices add up faster than entrance fees.",
              ],
            },
            {
              title: "Smart Budget Strategy",
              icon: "spark",
              emphasis: "Think in daily totals, not attraction prices.",
              body: "Ask yourself:",
              bullets: [
                "Is today relaxed or activity-packed?",
                "Am I eating local or choosing premium dining?",
                "Am I walking more or taking taxis?",
                "Planning by day keeps your budget realistic.",
              ],
            },
            {
              title: "Common Money Mistakes",
              icon: "alert",
              emphasis: "Avoid these:",
              body: "Common traps travelers face:",
              bullets: [
                "Overestimating ticket prices",
                "Paying for attractions just because they are famous",
                "Scheduling too many paid experiences in one day",
                "Balance free sights with one paid highlight.",
              ],
            },
            {
              title: "Always Check Official Sources",
              icon: "shield",
              emphasis: "Prices and policies can change.",
              body:
                "Confirm details on official tourism websites or attraction homepages before visiting.",
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "Korea is budget-friendly when you travel with intention.",
              body:
                "Choose experiences that match your interests, manage food and transport wisely, and you can enjoy Korea without overspending.",
            },
          ],
        },
        {
          title: "Discount Passes",
          slug: "discount-passes",
          icon: "card",
          image: "shopping",
          description: "When passes actually save money.",
          quickAnswer:
            "This page helps you decide if discount passes will actually save you money.",
          content: [
            {
              title: "Discount Passes",
              icon: "card",
              emphasis: "Short answer: sometimes worth it.",
              body:
                "Tourist discount passes in Korea can save money - but only if they match your travel style. Most visitors do not automatically need one. Passes work best when your schedule is tight and focused on paid attractions.",
            },
            {
              title: "A Real Example: Discover Seoul Pass",
              icon: "spark",
              emphasis: "One of the most popular options is the Discover Seoul Pass.",
              body:
                "It offers time-based access (24/48/72 hours) to selected attractions such as palaces, museums, and observatories. It makes sense if:",
              bullets: [
                "You plan to visit 3 or more paid attractions in one day",
                "Your itinerary is already planned",
                "You prefer efficient, fast-paced sightseeing",
                "It rewards structure and speed.",
              ],
            },
            {
              title: "When a Pass Does NOT Help",
              icon: "hand",
              emphasis: "If your trip is relaxed, paying individually is often cheaper.",
              body: "Discount passes usually do not save money if:",
              bullets: [
                "You prefer slow mornings and flexible plans",
                "You spend time in parks, markets, and free museums",
                "You change plans based on weather or mood",
              ],
            },
            {
              title: "The Most Common Mistake",
              icon: "alert",
              emphasis: "Buying before planning.",
              body: "Many travelers:",
              bullets: [
                "Purchase \"just in case\"",
                "Feel pressure to use it fully",
                "Rush between attractions and end up tired",
                "A pass should support your plan - not control it.",
              ],
            },
            {
              title: "How to Decide",
              icon: "checklist",
              emphasis: "Ask one question.",
              body: "How many paid attractions will I realistically visit in one day?",
              bullets: [
                "1-2 places -> Skip the pass",
                "3+ places -> Compare total prices carefully",
                "Do the math before you buy.",
              ],
            },
            {
              title: "Final Advice",
              icon: "spark",
              emphasis: "Freedom is often the better deal.",
              body:
                "Discount passes like the Discover Seoul Pass work well for fast, structured trips. For relaxed travel, you will usually spend less - and enjoy more - without one.",
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
        "Focus on 3 essentials first: internet, payments, and safety. In about 5 minutes, you can decide what matters most and avoid common arrival mistakes.",
      children: [
        {
          title: "SIM or eSIM?",
          slug: "sim-or-esim",
          icon: "sim",
          image: "basics",
          description: "Internet options explained simply.",
          quickAnswer:
            "This page helps you choose the simplest internet option for your phone.",
          content: [
            {
              title: "SIM or eSIM?",
              icon: "sim",
              emphasis: "Korea is known for its fast and reliable internet.",
              body:
                "You'll need a good connection for maps, transport, payments, and translations. The key is choosing the option that works best for you.",
            },
            {
              title: "Quick Answer",
              icon: "checklist",
              emphasis: "One choice solves most of it.",
              body: "If your phone supports eSIM, go for eSIM. If not, stick with a physical SIM.",
            },
            {
              title: "What is an eSIM?",
              icon: "sim",
              emphasis: "Digital, simple, and fast.",
              body: "Why travelers like it:",
              bullets: [
                "Set it up before you arrive",
                "No need to visit a shop at the airport",
                "Keep your home SIM active for messages or banking",
              ],
            },
            {
              title: "When a Physical SIM Makes More Sense",
              icon: "card",
              emphasis: "Compatibility and support.",
              body: "A physical SIM is better if:",
              bullets: [
                "Your phone is older",
                "You're unsure about eSIM compatibility",
                "You prefer in-person help",
                "You want to buy at the airport or telecom counters",
              ],
            },
            {
              title: "What You Actually Need",
              icon: "spark",
              emphasis: "Data first.",
              body: "For most travelers:",
              bullets: [
                "Data-only plans are usually enough",
                "Unlimited data is more comfortable",
                "Calling minutes are rarely needed",
              ],
            },
            {
              title: "Pricing Details (SIM & eSIM Plans in Korea)",
              icon: "wallet",
              emphasis: "Typical ranges for travelers.",
              body: "Physical SIM Card and eSIM Plan:",
              bullets: [
                "Physical SIM Card - Price: Around 20,000-30,000 KRW (5GB-10GB data)",
                "Physical SIM Card - Where to buy: Available at airports, major stores, and telecom counters",
                "Physical SIM Card - Providers: SK Telecom, KT, LG U+",
                "eSIM Plan - Price: Around 15,000-25,000 KRW (5GB-10GB data)",
                "eSIM Plan - Where to buy: Set up online before arrival and activate it upon landing",
                "eSIM Plan - Providers: SK Telecom, KT",
              ],
            },
            {
              title: "Common Mistakes to Avoid",
              icon: "alert",
              emphasis: "Check compatibility first.",
              body: "Before purchasing, confirm:",
              bullets: [
                "Your phone model",
                "eSIM support",
                "Network compatibility",
              ],
            },
            {
              title: "Do You Need to Decide Everything Now?",
              icon: "checklist",
              emphasis: "Decide which option works best for you, and confirm details later.",
              body: "Prices and plans can change. Always double-check on:",
              bullets: [
                "Official telecom websites",
                "Airport telecom counters",
                "Authorized sellers",
              ],
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "Either way, staying connected is key.",
              body:
                "Choose eSIM for speed and simplicity. Choose physical SIM for compatibility and in-person support.",
            },
          ],
        },
        {
          title: "How to Pay in Korea",
          slug: "how-to-pay-in-korea",
          icon: "wallet",
          image: "basics",
          description: "Card, cash, and what really works.",
          quickAnswer:
            "This page helps you understand what payment methods actually work in Korea.",
          content: [
            {
              title: "How to Pay in Korea",
              icon: "wallet",
              emphasis: "Cards are widely accepted, but cash is still useful.",
              body:
                "You do not need to worry about payment methods. Paying in Korea is simple: use cards for most things, and keep some cash as a backup.",
            },
            {
              title: "Cards: What Works Best",
              icon: "card",
              emphasis: "Cards are the go-to option.",
              body: "You can use cards for:",
              bullets: [
                "Hotels and accommodations",
                "Restaurants and cafes",
                "Shopping malls and convenience stores",
                "Public transportation (T-money, etc.)",
              ],
            },
            {
              title: "Pro Tip",
              icon: "spark",
              emphasis: "Credit cards tend to be more widely accepted and work smoothly.",
              body: "If you have both, bring both, but expect credit to be your main tool.",
            },
            {
              title: "What Might Surprise You",
              icon: "alert",
              emphasis: "Some places only accept cash.",
              body: "This typically happens at:",
              bullets: [
                "Small local restaurants",
                "Traditional markets",
                "Street food stalls",
              ],
            },
            {
              title: "How Much Cash Do You Really Need?",
              icon: "wallet",
              emphasis: "A small amount is usually enough.",
              body: "Cash is mainly for:",
              bullets: [
                "Street food",
                "Markets",
                "Small shops",
              ],
            },
            {
              title: "Where to Get Cash",
              icon: "pin",
              emphasis: "ATMs are easy to find.",
              body: "You'll find ATMs at:",
              bullets: [
                "Convenience stores",
                "Subway stations",
                "Banks in major city areas",
              ],
            },
            {
              title: "What You Don't Need to Worry About",
              icon: "hand",
              emphasis: "Keep it simple.",
              body: "You do not need:",
              bullets: [
                "Special local bank accounts",
                "Complex payment apps",
                "Large amounts of cash",
              ],
            },
            {
              title: "Common Payment Mistakes to Avoid",
              icon: "alert",
              emphasis: "Balance is key.",
              body: "Many travelers:",
              bullets: [
                "Rely only on cash",
                "Carry more cash than needed",
                "Assume foreign debit cards are accepted everywhere",
              ],
            },
            {
              title: "The Smart, Low-Stress Setup",
              icon: "checklist",
              emphasis: "Card + Small Cash",
              body: "For most travelers:",
              bullets: [
                "Use one international credit card for main payments",
                "Keep a small amount of cash as backup",
              ],
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "If you're not thinking about money, you're doing it right.",
              body:
                "Paying in Korea is easy once you're here. Keep it simple and stress-free!",
            },
          ],
        },
        {
          title: "Is Korea Safe?",
          slug: "is-korea-safe",
          icon: "shield",
          image: "safety",
          description: "What travelers should know.",
          quickAnswer:
            "This page helps you understand real safety expectations for travelers.",
          content: [
            {
              title: "Is Korea Safe?",
              icon: "shield",
              emphasis: "Yes, Korea is generally very safe.",
              body:
                "But \"safe\" doesn't mean you should stop being aware. This guide helps you understand what safety truly means for travelers in Korea.",
            },
            {
              title: "Why Visitors Feel Safe Right Away",
              icon: "spark",
              emphasis: "Comfortable from day one.",
              body: "Many travelers notice:",
              bullets: [
                "People walking alone late at night",
                "Public transport running until late",
                "Streets that are well-lit and busy",
                "Rare violent crime in tourist areas",
              ],
            },
            {
              title: "Where to Stay Aware",
              icon: "alert",
              emphasis: "Crowded places can still be overwhelming.",
              body: "Keep basic awareness in:",
              bullets: [
                "Crowded subways",
                "Busy nightlife districts",
                "Popular tourist shopping streets",
              ],
            },
            {
              title: "Night Travel: What to Expect",
              icon: "route",
              emphasis: "Safe, lively, and reliable.",
              body: "In reality:",
              bullets: [
                "Subways and buses are safe",
                "Taxis are reliable",
                "Late-night food streets are bustling",
                "If you're out late, stick to well-lit areas and stay alert.",
              ],
            },
            {
              title: "Simple Safety Habits",
              icon: "hand",
              emphasis: "Stay comfortable and safe.",
              body: "Simple habits:",
              bullets: [
                "Stick to main streets",
                "Avoid empty alleys at night",
                "Take a taxi if you feel uncertain or tired",
              ],
            },
            {
              title: "Common Worries That Aren't a Problem",
              icon: "spark",
              emphasis: "Cultural differences, not danger.",
              body: "These are perfectly normal in Korea:",
              bullets: [
                "People staring (out of curiosity)",
                "Quietness on public transport",
                "Fewer visible police than you might expect",
              ],
            },
            {
              title: "When to Be Extra Careful",
              icon: "alert",
              emphasis: "Know your limits.",
              body: "Be more aware if you:",
              bullets: [
                "Drink heavily",
                "Stay out very late in nightlife zones",
                "Ignore your surroundings",
              ],
            },
            {
              title: "Emergency Help",
              icon: "shield",
              emphasis: "Rarely needed, but easy to access.",
              body:
                "Emergency services are fast and well-organized. English support is available in many situations.",
            },
            {
              title: "Final Thought",
              icon: "spark",
              emphasis: "Stay aware, but don't stress.",
              body:
                "Korea is so safe that you won't constantly need to worry. A smooth and enjoyable trip starts with feeling relaxed and confident.",
            },
          ],
        },
        {
          title: "Solo Travel Safety",
          slug: "solo-travel-safety",
          icon: "shield",
          image: "safety",
          description: "Tips for traveling alone.",
          quickAnswer:
            "This page helps solo travelers feel confident and prepared in Korea.",
          content: [
            {
              title: "Solo Travel Safety",
              icon: "shield",
              emphasis: "Solo travel in Korea is safe, easy, and comfortable.",
              body:
                "Traveling alone is common here, and many solo travelers find themselves feeling more relaxed than expected after just a few days.",
            },
            {
              title: "Why Korea is Great for Solo Travelers",
              icon: "spark",
              emphasis: "Structured and simple.",
              body: "You'll find:",
              bullets: [
                "Clear public transport",
                "Easy-to-follow streets and stations",
                "Convenience stores everywhere",
                "Dining solo is completely normal",
              ],
            },
            {
              title: "Dining solo is completely normal",
              icon: "bowl",
              emphasis: "In Korea:",
              body: "In Korea:",
              bullets: [
                "Cafes and restaurants are welcoming to solo diners",
                "Convenience store meals are of high quality",
                "BBQ places may prefer groups, but there are plenty of alternatives",
              ],
            },
            {
              title: "Getting Around Alone, Day and Night",
              icon: "route",
              emphasis: "Reliable and safe.",
              body: "During the day:",
              bullets: [
                "Public transport is very safe",
                "Tourist areas are lively and monitored",
                "Walking alone feels comfortable",
              ],
            },
            {
              title: "At night:",
              icon: "spark",
              emphasis: "Main streets stay active.",
              body: "At night:",
              bullets: [
                "Main streets stay active",
                "Taxis are easy to use",
                "Late-night food areas remain safe and bustling",
              ],
            },
            {
              title: "Simple Habits for Extra Comfort",
              icon: "checklist",
              emphasis: "Helpful tips for smooth travel.",
              body: "Small habits help:",
              bullets: [
                "Save your hotel address offline",
                "Carry a portable charger",
                "Know the nearest subway station",
              ],
            },
            {
              title: "What Solo Travelers Sometimes Overthink",
              icon: "hand",
              emphasis: "It's cultural, not personal.",
              body: "You might notice:",
              bullets: [
                "Quiet subways",
                "Fewer smiles from strangers",
                "Less small talk",
              ],
            },
            {
              title: "When to Be Extra Cautious",
              icon: "alert",
              emphasis: "Listen to your energy.",
              body: "Be extra aware if you:",
              bullets: [
                "Drink more than usual",
                "Stay out very late in nightlife areas",
                "Feel tired or disoriented",
              ],
            },
            {
              title: "Why Solo Travel Here is Empowering",
              icon: "spark",
              emphasis: "Confidence builds quickly.",
              body: "Many solo travelers say Korea helps them:",
              bullets: [
                "Travel at their own pace",
                "Navigate confidently",
                "Enjoy quiet moments without pressure",
              ],
            },
            {
              title: "Final Thought",
              icon: "spark",
              emphasis: "Comfort, awareness, and ease.",
              body:
                "If you feel calm exploring on your own, you're doing it right.",
            },
          ],
        },
        {
          title: "In Case of Emergency",
          slug: "in-case-of-emergency",
          icon: "alert",
          image: "safety",
          description: "What to do and who to call.",
          quickAnswer:
            "This page helps you know what to do quickly if something goes wrong.",
          content: [
            {
              title: "In Case of Emergency",
              icon: "alert",
              emphasis: "Stay calm. Know what to do.",
              body:
                "Emergencies are rare in Korea, but being prepared makes everything feel easier and more manageable.",
            },
            {
              title: "First, Take a Breath",
              icon: "shield",
              emphasis: "Help is fast and easy to access.",
              body:
                "Korea's emergency services are organized and used to assisting foreigners. You don't need to worry about speaking perfect Korean.",
            },
            {
              title: "Important Emergency Numbers",
              icon: "alert",
              emphasis: "Save these before you arrive.",
              body: "Save these before you arrive:",
              bullets: [
                "Police: 112",
                "Fire/Medical: 119",
                "These numbers work from mobile, public, and hotel phones.",
              ],
            },
            {
              title: "If You Need Medical Help",
              icon: "shield",
              emphasis: "Call 119 if it's serious.",
              body: "For non-urgent situations:",
              bullets: [
                "Go to a hospital with English-speaking staff",
                "Ask your hotel to help explain symptoms",
                "Visit a pharmacy for minor issues",
              ],
            },
            {
              title: "If You Lose Something",
              icon: "passport",
              emphasis: "Don't panic. It's simple to handle.",
              body: "Follow these steps:",
              bullets: [
                "Visit the nearest police station or ask hotel staff for help",
                "Report the loss (it's a routine process)",
                "Contact your embassy if necessary",
              ],
            },
            {
              title: "If You Feel Unsafe",
              icon: "hand",
              emphasis: "Take simple actions.",
              body: "If something feels off:",
              bullets: [
                "Go to a nearby convenience store or cafe",
                "Take a taxi instead of walking",
                "Call your accommodation for help",
              ],
            },
            {
              title: "Language Help in Emergencies",
              icon: "sim",
              emphasis: "You're not alone.",
              body: "If communication is difficult:",
              bullets: [
                "Use a translation app with voice input",
                "Show your hotel address or booking confirmation",
                "Ask nearby staff for assistance",
              ],
            },
            {
              title: "Common Concerns",
              icon: "spark",
              emphasis: "You won't be judged.",
              body:
                "In emergencies, workers are patient and expect mistakes. Helping you is their job.",
            },
            {
              title: "Quick Preparation, Big Calm",
              icon: "checklist",
              emphasis: "Do this once:",
              body: "Do this once:",
              bullets: [
                "Save emergency numbers",
                "Screenshot your hotel address",
                "Carry travel insurance info",
                "Check hospital costs in Korea before your trip so out-of-pocket risk is clearer.",
              ],
            },
            {
              title: "Final Thought",
              icon: "spark",
              emphasis: "Stay calm. Help is always close.",
              body:
                "In Korea, you're never alone. Whether it's a small issue or an emergency, help is always just a call away.",
            },
          ],
        },
        {
          title: "Do I Need Travel Insurance for South Korea? (2026 Guide)",
          slug: "travel-insurance-for-korea",
          icon: "shield",
          image: "/leaf%20images/travel-insurance-for-korea.webp",
          description:
            "Travel insurance is not legally required for most short-term visitors in 2026, but it is strongly recommended.",
          quickAnswer:
            "Travel insurance is not mandatory under visa-free travel or K-ETA, but most travelers buy a basic plan because medical treatment is not free for tourists.",
          content: [
            {
              title: "Do I Need Travel Insurance for South Korea? (2026 Guide)",
              icon: "shield",
              emphasis:
                "Travel insurance is not legally required for most short-term visitors to South Korea in 2026.",
              body:
                "However, medical treatment is not free for tourists. If something unexpected happens, you must pay the full cost yourself. South Korea has a modern, high-quality healthcare system. Hospitals are clean, efficient, and well equipped. But without insurance, even a simple emergency visit can become expensive. For most international travelers, basic travel insurance is a practical and affordable safety net.",
            },
            {
              title: "Quick Answer",
              icon: "spark",
              emphasis: "Travel insurance is not mandatory for entry.",
              body: "Most travelers still choose to purchase it for financial protection.",
              bullets: [
                "Travel insurance is not mandatory for entry to South Korea under visa-free travel or K-ETA.",
                "However, most travelers choose to purchase it for financial protection.",
                "A basic policy usually costs less than a restaurant meal per day and can prevent large unexpected expenses.",
              ],
            },
            {
              title: "How Much Does Medical Care Cost in South Korea?",
              icon: "wallet",
              emphasis: "Tourists are not covered by Korea's National Health Insurance system.",
              body: "Typical out-of-pocket costs in 2026:",
              bullets: [
                "Outpatient clinic visit: 30-80 USD",
                "Emergency room visit in Seoul: 300-800 USD",
                "Hospital stay (per night): 1,000-3,000+ USD",
                "CT, MRI, blood tests: additional charges",
                "Ambulance service: varies by situation",
                "Private international clinics may charge higher rates than public hospitals.",
                "These are general estimates. Actual costs depend on location, hospital type, and treatment required.",
              ],
            },
            {
              title: "When Is Travel Insurance Required?",
              icon: "passport",
              emphasis:
                "For most short-term tourists, travel insurance is not required to enter South Korea.",
              body: "However, insurance may be required for:",
              bullets: [
                "Certain visa categories",
                "Student or exchange programs",
                "Working holiday visas",
                "Some employer-sponsored stays",
                "Always check the official visa requirements for your nationality before traveling.",
              ],
            },
            {
              title: "When Is Travel Insurance Recommended?",
              icon: "checklist",
              emphasis: "Travel insurance is recommended for most visitors.",
              body: "It is especially useful if:",
              bullets: [
                "You are traveling during winter (icy sidewalks increase injury risk)",
                "You plan hiking, skiing, or outdoor activities",
                "You have connecting or long-haul flights",
                "You want protection against trip cancellation or baggage delays",
                "Even in a safe country like South Korea, unexpected situations can happen.",
              ],
            },
            {
              title: "What Should a Good Policy Cover?",
              icon: "shield",
              emphasis:
                "For travel to South Korea in 2026, a practical insurance plan should include:",
              body: "Look for these essentials:",
              bullets: [
                "Emergency medical coverage (at least 50,000-100,000 USD)",
                "Hospitalization and ambulance coverage",
                "Trip delay or cancellation coverage",
                "Lost, stolen, or delayed baggage coverage",
                "24-hour emergency assistance in English",
                "If you plan adventure activities, make sure your policy includes winter sports or hiking coverage.",
              ],
            },
            {
              title: "What Is Usually Not Covered?",
              icon: "alert",
              emphasis: "Standard travel insurance policies often exclude:",
              body: "Always read policy details carefully before purchasing.",
              bullets: [
                "Pre-existing medical conditions",
                "High-risk sports (unless added separately)",
                "Claims without proper documentation",
                "Non-medical cancellation reasons",
              ],
            },
            {
              title: "Common Situations Travelers Face",
              icon: "spark",
              emphasis: "Most insurance claims are not major emergencies.",
              body: "They typically involve:",
              bullets: [
                "Food poisoning",
                "Slipping on icy streets",
                "Minor traffic accidents",
                "Severe flu or respiratory infections",
                "Lost luggage or delayed flights",
                "These are normal travel issues that can occur anywhere.",
              ],
            },
            {
              title: "How Much Does Travel Insurance for South Korea Cost?",
              icon: "wallet",
              emphasis: "Travel insurance is generally affordable.",
              body: "For healthy travelers aged 20-40:",
              bullets: [
                "1 week: about 15-40 USD",
                "2 weeks: about 30-70 USD",
                "Prices vary depending on age, country of residence, trip length, and coverage level.",
              ],
            },
            {
              title: "Final Thoughts",
              icon: "spark",
              emphasis: "South Korea is a safe and highly developed destination.",
              body:
                "Most travelers never need to use their travel insurance. That is ideal. Travel insurance is simply a way to reduce financial risk. For many visitors, the cost is small compared to the overall trip budget and provides peace of mind from arrival to departure.",
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
      description: "Prepare for arrival, rules, and local customs.",
      children: [
        {
          title: "Basic Korean Etiquette",
          slug: "basic-korean-etiquette",
          icon: "hand",
          image: "/leaf%20images/Basic%20Korean.webp?v=20260209",
          description: "Simple rules to avoid awkward moments.",
          quickAnswer:
            "This page helps you avoid awkward moments with simple local etiquette.",
          content: [
            {
              title: "Basic Korean Etiquette",
              icon: "hand",
              emphasis: "Respect matters more than perfection.",
              body:
                "You don't need to master every detail of Korean culture. Simple, respectful habits will make your interactions smoother and more pleasant.",
            },
            {
              title: "Politeness Matters More Than Perfection",
              icon: "spark",
              emphasis: "A little effort goes a long way.",
              body: "You don't need to:",
              bullets: [
                "Speak fluent Korean",
                "Bow perfectly",
                "Know every custom",
              ],
            },
            {
              title: "Using Two Hands (When It Matters)",
              icon: "hand",
              emphasis: "It's about intention, not technique.",
              body: "Use two hands when:",
              bullets: [
                "Giving or receiving business cards",
                "Handing over money",
                "Offering small items in formal settings",
              ],
            },
            {
              title: "Inside Voices in Public Spaces",
              icon: "alert",
              emphasis: "Koreans appreciate quieter environments.",
              body: "Keep your voice lower in:",
              bullets: [
                "Subways",
                "Buses",
                "Elevators",
              ],
            },
            {
              title: "Shoes Off Means Shoes Off",
              icon: "bag",
              emphasis: "Look for signs to remove your shoes.",
              body: "You may need to take off your shoes in:",
              bullets: [
                "Traditional accommodations",
                "Some restaurants",
                "Certain homes",
              ],
            },
            {
              title: "Personal Space and Touching",
              icon: "hand",
              emphasis: "Respecting personal space is key.",
              body: "Less common behaviors include:",
              bullets: [
                "Casual touching of strangers",
                "Hugging or back-patting people you've just met",
              ],
            },
            {
              title: "Dining Manners",
              icon: "bowl",
              emphasis: "Keep it simple, keep it polite.",
              body: "Remember:",
              bullets: [
                "Wait a moment before starting your meal",
                "Don't stick chopsticks straight into rice",
                "Slurping noodles is okay",
                "Tipping is not expected",
                "\"Thank you\" (감사합니다) is enough",
              ],
            },
            {
              title: "Tipping in Korea",
              icon: "wallet",
              emphasis: "Tipping is not common in Korea.",
              body: "In Korea:",
              bullets: [
                "Service charges are usually included",
                "Staff may feel uncomfortable if you try to tip",
              ],
            },
            {
              title: "What Visitors Often Worry About",
              icon: "spark",
              emphasis: "Calm and polite is better than perfect.",
              body: "Most locals don't expect foreigners to know everything.",
            },
            {
              title: "One Phrase That Always Helps",
              icon: "spark",
              emphasis: "감사합니다 (gam-sa-ham-ni-da) - \"Thank you\" goes a long way.",
              body: "Thank you goes a long way.",
            },
            {
              title: "Final Thought",
              icon: "spark",
              emphasis: "Be considerate, not perfect.",
              body:
                "If you show respect, you're already doing great in Korea.",
            },
          ],
        },
        {
          title: "Immigration Process",
          slug: "immigration-process",
          icon: "passport",
          image: "airport",
          description: "What happens at the airport.",
          quickAnswer:
            "This page helps you know what to expect when arriving at a Korean airport.",
          content: [
            {
              title: "Immigration Process",
              icon: "passport",
              emphasis: "Straightforward and quick.",
              body:
                "Entering Korea is easy and efficient. Knowing the basic steps makes the process feel smooth and predictable.",
            },
            {
              title: "After Landing: Follow the Signs",
              icon: "route",
              emphasis: "Arrival and Immigration.",
              body:
                "Korean airports, like Incheon and Gimpo, have clear English signs. Just follow the crowd, and you'll be on the right track.",
            },
            {
              title: "Step 1: Arrival",
              icon: "route",
              emphasis: "Terminal flow is simple.",
              body:
                "Terminal 1 and Terminal 2 passengers will enter through the boarding gate on the 2nd floor.",
              bullets: [
                "Passengers arriving at the concourse will take the shuttle train to the terminal.",
              ],
            },
            {
              title: "Step 2: Information/Declaration",
              icon: "checklist",
              emphasis: "Submit declaration details.",
              body: "Submit your customs declaration for carry-on items at the customs office.",
            },
            {
              title: "Step 3: Immigration",
              icon: "passport",
              emphasis: "Arrival card rules depend on traveler status.",
              body:
                "Korean citizens and registered foreign nationals do not need to fill out an arrival card.",
              bullets: [
                "Only unregistered foreign nationals need to fill out the card.",
              ],
            },
            {
              title: "Step 4: Baggage Claim",
              icon: "bag",
              emphasis: "Check the belt screen first.",
              body:
                "After clearing immigration, check the baggage belt number on the screen.",
              bullets: [
                "Proceed to the first floor to pick up your luggage.",
              ],
            },
            {
              title: "Step 5: Arrival Hall",
              icon: "shield",
              emphasis: "Most travelers pass quickly.",
              body:
                "After picking up your baggage, exit through the departure hall into the arrival area.",
              bullets: [
                "Most travelers walk through the \"Nothing to Declare\" section. If you're not carrying restricted items or large amounts of cash, it's quick and simple.",
              ],
            },
            {
              title: "What Might Slow Things Down",
              icon: "alert",
              emphasis: "Avoid delays with these tips.",
              body: "Delays can occur if:",
              bullets: [
                "You don't know your hotel's name or address",
                "You're unsure about your travel purpose",
                "Your forms are incomplete",
              ],
            },
            {
              title: "Language Concerns",
              icon: "hand",
              emphasis: "Don't worry, help is available.",
              body:
                "Officers speak basic English and focus on your documents, so no need to stress about language.",
            },
            {
              title: "How Long Does It Take?",
              icon: "calendar",
              emphasis: "Usually under an hour.",
              body: "Typical times:",
              bullets: [
                "Immigration: 10-30 minutes",
                "Baggage and customs: 10-20 minutes",
                "It can take longer during peak times",
              ],
            },
            {
              title: "First Impression Tip",
              icon: "spark",
              emphasis: "Be polite and clear.",
              body:
                "Officers may seem serious, but efficiency is key. Clear, concise answers will keep things moving smoothly.",
            },
            {
              title: "Final Thought",
              icon: "spark",
              emphasis: "Ready documents and simple answers.",
              body:
                "With everything in order and straightforward answers, you'll breeze through the process and be on your way in no time.",
            },
          ],
        },
        {
          title: "What is K-ETA?",
          slug: "what-is-k-eta",
          icon: "passport",
          image: "airport",
          description: "Do you need it or not?",
          quickAnswer:
            "This page helps you decide if you need K-ETA before traveling to Korea.",
          content: [
            {
              title: "What is K-ETA?",
              icon: "passport",
              emphasis: "A simple yes-or-no question for most travelers.",
              body:
                "K-ETA (Korea Electronic Travel Authorization) is an online pre-approval system for travelers from certain countries. This page helps you determine if it applies to you.",
            },
            {
              title: "What K-ETA Actually Is",
              icon: "checklist",
              emphasis: "A digital permission to board your flight.",
              body: "K-ETA is:",
              bullets: [
                "A digital permission to board your flight to Korea",
                "Not a visa",
                "Not required for everyone",
              ],
            },
            {
              title: "Do You Need K-ETA?",
              icon: "spark",
              emphasis: "Check your passport, not your plans.",
              body: "Just ask one question:",
              bullets: [
                "Does my passport require pre-travel authorization for Korea?",
                "Yes -> Apply before your flight.",
                "No -> You don't need K-ETA.",
              ],
            },
            {
              title: "When K-ETA is Usually Required",
              icon: "passport",
              emphasis: "For short-term tourists from listed countries.",
              body: "You'll likely need K-ETA if:",
              bullets: [
                "You're visiting as a tourist.",
                "Your stay is short-term (under 90 days).",
                "Your country is on the K-ETA required list.",
              ],
            },
            {
              title: "When You Might Be Exempt",
              icon: "hand",
              emphasis: "Rules change, so always verify.",
              body: "You may not need K-ETA if:",
              bullets: [
                "You're temporarily exempt.",
                "You hold a long-term visa.",
                "You're entering under a special agreement (e.g., business or official travel).",
              ],
            },
            {
              title: "What Happens If You Need K-ETA and Don't Apply",
              icon: "alert",
              emphasis: "It can stop you before boarding.",
              body: "Without K-ETA (if required):",
              bullets: [
                "Airlines may refuse to let you board.",
                "You may face immigration issues before departure.",
              ],
            },
            {
              title: "What K-ETA does NOT affect",
              icon: "shield",
              emphasis: "It does not guarantee entry.",
              body: "K-ETA does NOT:",
              bullets: [
                "Guarantee entry into Korea.",
                "Replace immigration checks at the airport.",
                "Control the length of your stay.",
              ],
            },
            {
              title: "Common Misunderstandings",
              icon: "alert",
              emphasis: "Many travelers mistakenly think:",
              body: "Many travelers mistakenly think:",
              bullets: [
                "\"I can do it at the airport.\"",
                "\"My friend didn't need it, so I don't either.\"",
                "\"It's the same as a visa.\"",
              ],
            },
            {
              title: "What to Do Next",
              icon: "checklist",
              emphasis: "Keep it simple.",
              body: "Here's what you should do:",
              bullets: [
                "Confirm if your passport needs K-ETA.",
                "Apply only if necessary.",
                "Screenshot your approval if you apply.",
              ],
            },
            {
              title: "Final Thought",
              icon: "spark",
              emphasis: "Check once, decide once.",
              body:
                "K-ETA isn't difficult, but ignoring it can cause travel disruptions. Make sure to check and apply if needed to avoid any issues before your flight.",
            },
          ],
        },
        {
          title: "What Should I Prepare?",
          slug: "what-should-i-prepare",
          icon: "checklist",
          image: "basics",
          description: "A simple pre-trip checklist.",
          quickAnswer:
            "This page helps you pack and prepare without forgetting the essentials.",
          content: [
            {
              title: "What Should I Prepare?",
              icon: "checklist",
              emphasis: "Keep it simple, travel smart.",
              body:
                "Preparing for Korea means packing the essentials and sorting out a few key details before you leave. Here's what you need for a smooth and stress-free trip.",
            },
            {
              title: "Start with the Essentials",
              icon: "passport",
              emphasis: "Three key things to check.",
              body: "Make sure to:",
              bullets: [
                "Ensure your passport is valid for your entire stay.",
                "Check entry requirements (visa or K-ETA if needed).",
                "Confirm your flight and first accommodation.",
              ],
            },
            {
              title: "Get Your Phone Ready",
              icon: "sim",
              emphasis: "Install before you fly.",
              body: "Before you go:",
              bullets: [
                "Enable international payments on your card.",
                "Make sure your phone is unlocked for local SIM cards.",
                "Install a map app and a translation app for convenience.",
              ],
            },
            {
              title: "Money: Keep It Simple",
              icon: "wallet",
              emphasis: "One card, a little cash.",
              body: "Prepare:",
              bullets: [
                "One card that works internationally.",
                "A small amount of cash for emergencies.",
              ],
            },
            {
              title: "Save Important Information Offline",
              icon: "checklist",
              emphasis: "Plan ahead, stay stress-free.",
              body: "Save these offline:",
              bullets: [
                "Your hotel name and address.",
                "Your arrival airport details.",
                "Emergency contact numbers (e.g., embassy, local emergency services).",
              ],
            },
            {
              title: "What You Don't Need to Worry About",
              icon: "hand",
              emphasis: "Pack light, keep it easy.",
              body: "In reality:",
              bullets: [
                "Dress casually and comfortably.",
                "Adapters are easy to find locally.",
              ],
            },
            {
              title: "One Essential Item",
              icon: "bag",
              emphasis: "Portable charger.",
              body:
                "A dead phone battery can be one of the most stressful situations. Make sure to bring a portable charger.",
            },
            {
              title: "Final Mental Check",
              icon: "spark",
              emphasis: "Ask yourself:",
              body: "Ask yourself:",
              bullets: [
                "Do I know where I'm staying the first night?",
                "Can I access my money easily?",
                "Can I navigate if needed?",
              ],
            },
            {
              title: "Final Thought",
              icon: "spark",
              emphasis: "Stay calm and prepared.",
              body:
                "By thinking through these basics, you'll ensure a relaxed, stress-free trip.",
            },
          ],
        },
        {
          title: "From Airport to City",
          slug: "from-airport-to-city",
          icon: "plane",
          image: "airport",
          description: "Getting to your hotel smoothly.",
          quickAnswer:
            "This page helps you choose the easiest way to reach your hotel from the airport.",
          content: [
            {
              title: "From the Airport to the City",
              icon: "plane",
              emphasis: "Choose the option that fits your mood.",
              body:
                "Getting to your hotel is easier than expected. Simply choose between the train, bus, or taxi.",
            },
            {
              title: "First decision: Speed, Comfort, or Simplicity",
              icon: "checklist",
              emphasis: "All options work well.",
              body:
                "Your choice depends on how you feel after your flight, not your travel experience.",
            },
            {
              title: "Airport Rail (AREX)",
              icon: "train",
              emphasis: "The easiest option for most travelers.",
              body: "Why people choose it:",
              bullets: [
                "Clear English signs",
                "Fixed routes",
                "No traffic delays",
                "Predictable and calm",
                "Best for: Travelers looking for a quick, hassle-free trip to central areas like Seoul Station.",
              ],
            },
            {
              title: "Airport Bus",
              icon: "bus",
              emphasis: "Comfort with fewer transfers.",
              body: "Why people like it:",
              bullets: [
                "Direct routes to major neighborhoods and hotels",
                "Comfortable seats and ample luggage storage",
                "Convenient for those with heavy bags",
                "Best for: Those with luggage or looking for a more comfortable ride to popular areas.",
              ],
            },
            {
              title: "Taxi",
              icon: "taxi",
              emphasis: "When you just want to get there fast.",
              body: "Best if:",
              bullets: [
                "You arrive late at night",
                "You're tired or traveling in a group",
                "Comfort matters more than cost",
                "Best for: Travelers who want a door-to-door experience and don't mind the extra cost.",
              ],
            },
            {
              title: "What causes confusion",
              icon: "alert",
              emphasis: "Easy to avoid.",
              body: "The most stress comes from:",
              bullets: [
                "Not knowing your hotel's exact location",
                "Not recognizing the right terminal",
                "Overthinking your choice",
              ],
            },
            {
              title: "You don't need to pre-book anything.",
              icon: "hand",
              emphasis: "Decide when you arrive.",
              body:
                "All options are clearly marked when you land, so you can make your decision calmly.",
            },
            {
              title: "First-time visitor tip",
              icon: "spark",
              emphasis: "Fewer decisions, fewer transfers.",
              body:
                "After a long flight, pick the option that feels most comfortable. The goal is to arrive relaxed.",
            },
            {
              title: "Final thought",
              icon: "spark",
              emphasis: "It's not a test.",
              body:
                "Pick the option that matches your energy. If you reach your hotel calm and rested, you've made the right choice.",
            },
          ],
        },
      ],
    },
    
    {
      title: "Shopping & Deals",
      slug: "shopping-and-deals",
      icon: "bag",
      image: "/Shopping%20%26%20Deals.webp",
      description: "Shop smarter and avoid tourist price traps.",
      children: [
        {
          title: "Shopping in Seoul",
          slug: "shopping-in-seoul",
          icon: "bag",
          image: "shopping",
          description: "Popular shopping areas.",
          quickAnswer:
            "This page helps you choose the right shopping areas in Seoul for your style.",
          content: [
            {
              title: "Shopping in Seoul: Find the Best Areas",
              icon: "bag",
              emphasis: "Seoul offers a wide range of shopping experiences.",
              body:
                "To make the most of your trip, focus on neighborhoods that fit your shopping goals. Visiting every district can lead to exhaustion and unnecessary spending.",
            },
            {
              title: "Myeongdong",
              icon: "tag",
              emphasis: "Easy, popular, and tourist-friendly.",
              body: "Best for:",
              bullets: [
                "Skincare and cosmetics",
                "Quick souvenir shopping",
                "English-speaking staff",
                "Convenient and accessible stores",
              ],
            },
            {
              title: "Hongdae",
              icon: "spark",
              emphasis: "Trendy and creative.",
              body: "Best for:",
              bullets: [
                "Street fashion and independent brands",
                "Fun accessories and unique lifestyle items",
                "A relaxed, artistic vibe",
              ],
            },
            {
              title: "Dongdaemun",
              icon: "bag",
              emphasis: "Vibrant with late-night energy.",
              body: "Best for:",
              bullets: [
                "Large shopping malls and diverse options",
                "Clothing, accessories, and fabrics",
                "Late-night shopping in some districts",
                "Price comparison across multiple stores",
              ],
            },
            {
              title: "Garosugil & Apgujeong",
              icon: "spark",
              emphasis: "Chic and upscale.",
              body: "Best for:",
              bullets: [
                "Korean designer brands and premium fashion",
                "Modern, stylish stores with cafes",
                "A relaxed shopping experience with a focus on quality",
              ],
            },
            {
              title: "Avoid These Common Shopping Regrets",
              icon: "alert",
              emphasis: "Easy to avoid.",
              body: "The most stress comes from:",
              bullets: [
                "Don't buy without comparing prices",
                "Avoid shopping when tired or hungry",
                "Skip rushing through crowded stores",
                "Don't feel the need to shop every day - focus on quality over quantity",
              ],
            },
            {
              title: "Smart Shopping Tips",
              icon: "checklist",
              emphasis: "Great shopping happens when:",
              body: "Good shopping happens when:",
              bullets: [
                "You know exactly what you want",
                "You choose the right area",
                "You leave with fewer, better-quality items",
              ],
            },
            {
              title: "Final Thought",
              icon: "spark",
              emphasis: "Pick one or two areas that suit your style.",
              body:
                "Take your time, and enjoy the shopping experience!",
            },
          ],
        },
        {
          title: "Shopping in Busan",
          slug: "shopping-in-busan",
          icon: "bag",
          image: "shopping",
          description: "Local shopping spots.",
          quickAnswer:
            "This page helps you find relaxed and local shopping spots in Busan.",
          content: [
            {
              title: "Shopping in Busan",
              icon: "bag",
              emphasis: "Local, Relaxed, and Trendy.",
              body:
                "Busan offers a unique mix of traditional markets, trendy spots, and laid-back shopping vibes. Whether you're looking for local goods or the latest fashion trends, this guide will help you shop like a local.",
            },
            {
              title: "Gukje Market",
              icon: "pin",
              emphasis: "Authentic, Local, and Bustling.",
              body:
                "One of Busan's most iconic markets, perfect for a true local experience.",
              bullets: [
                "Affordable clothing, accessories, and household items",
                "Delicious street food",
                "Unique souvenirs you won't find elsewhere",
                "A mix of local life and casual browsing",
                "Tip: Take your time to explore and compare prices before making a purchase.",
              ],
            },
            {
              title: "Jagalchi Market",
              icon: "bowl",
              emphasis: "Seafood and Local Delights.",
              body: "Best for:",
              bullets: [
                "Fresh and dried seafood",
                "Food-related gifts and local snacks",
                "Exploring without feeling pressured to buy",
                "The authentic atmosphere of Busan's iconic fish market",
                "Tip: Head upstairs to enjoy freshly cooked seafood from your selections downstairs.",
              ],
            },
            {
              title: "Seomyeon",
              icon: "city",
              emphasis: "Modern, Convenient, and Central.",
              body: "Best for:",
              bullets: [
                "Department stores like Lotte",
                "Underground shopping malls with trendy items",
                "Korean fashion and beauty products",
                "Easy access to public transport and major attractions",
                "Tip: Ideal for those who want a mix of Seoul-style shopping without leaving Busan.",
              ],
            },
            {
              title: "Haeundae",
              icon: "beach",
              emphasis: "Relaxed, Beachside Shopping.",
              body: "Best for:",
              bullets: [
                "Trendy boutiques and lifestyle stores",
                "Cozy cafes and beachside shopping",
                "Souvenirs with a beachy vibe",
                "Combining relaxation and shopping in one spot",
                "Tip: Prices can be a bit higher than in other districts, but the beachside experience makes up for it.",
              ],
            },
            {
              title: "What Makes Shopping in Busan Special",
              icon: "spark",
              emphasis: "A slower, more enjoyable pace.",
              body: "Busan shopping works best when:",
              bullets: [
                "You explore at your own pace",
                "You focus on one area at a time",
                "You appreciate the local atmosphere and products",
              ],
            },
            {
              title: "Common Mistakes to Avoid",
              icon: "alert",
              emphasis: "Don't rush through the districts.",
              body:
                "Unlike Seoul, Busan's shopping districts are spread out. Pick one or two areas per day and enjoy the experience fully.",
            },
            {
              title: "Final Thought",
              icon: "spark",
              emphasis: "One district, one market, one memorable find.",
              body:
                "Shopping in Busan is all about discovering unique items that match your trip. Take your time, enjoy the atmosphere, and let the local charm guide you.",
            },
          ],
        },
        {
          title: "Tax Refund in Korea",
          slug: "tax-refund-explained",
          icon: "receipt",
          image: "shopping",
          description: "How to get money back.",
          quickAnswer:
            "This page helps you understand how tax refunds work before you shop.",
          content: [
            {
              title: "Tax Refund in Korea",
              icon: "receipt",
              emphasis: "Easy once you understand the steps.",
              body:
                "South Korea offers VAT (Value Added Tax) refunds to eligible foreign visitors. If you follow the correct process, you can legally get part of your shopping money back before departure.",
            },
            {
              title: "Who Can Get a Tax Refund?",
              icon: "passport",
              emphasis: "Most short-term tourists qualify.",
              body: "You are usually eligible if:",
              bullets: [
                "You are a non-resident visitor",
                "You stay in Korea for a limited period",
                "You purchase goods for personal use",
                "You take the items out of Korea within the allowed timeframe",
                "Important: Always present your passport at checkout.",
              ],
            },
            {
              title: "What Items Qualify?",
              icon: "bag",
              emphasis: "Physical goods, not services.",
              body: "Common eligible purchases:",
              bullets: [
                "Cosmetics and skincare",
                "Clothing, shoes, and accessories",
                "Electronics and lifestyle products",
                "Souvenirs and gifts",
                "Usually not eligible: Restaurant meals",
                "Usually not eligible: Hotel stays",
                "Usually not eligible: Transportation services",
                "Most stores require a minimum purchase amount per transaction (commonly around KRW 30,000).",
              ],
            },
            {
              title: "Option 1: Immediate Tax-Free (Most Convenient)",
              icon: "card",
              emphasis: "Pay the reduced price instantly.",
              body: "At participating \"Tax Free\" stores:",
              bullets: [
                "Show your passport",
                "VAT is deducted at checkout",
                "You pay the lower amount immediately",
                "This option is common in department stores and major shopping areas.",
              ],
            },
            {
              title: "Option 2: Refund at the Airport",
              icon: "receipt",
              emphasis: "Pay first, claim later.",
              body: "At \"Tax Refund\" stores:",
              bullets: [
                "Pay the full price",
                "Receive a refund receipt",
                "Claim your refund at the airport before departure",
                "Refund providers often include Global Blue, Global Tax Free, and Cube Refund.",
              ],
            },
            {
              title: "Airport Refund Process",
              icon: "plane",
              emphasis: "Allow extra time before your flight.",
              body: "Typical steps:",
              bullets: [
                "Visit a tax refund kiosk before security",
                "Scan passport and receipts",
                "If required, show purchased items",
                "Receive your refund in cash or by card",
                "Do not pack refundable items in checked luggage before completing validation.",
              ],
            },
            {
              title: "Smart Travel Tip",
              icon: "checklist",
              emphasis: "Keep all receipts together.",
              body: "Store your receipts and refund forms in one envelope. This saves time and prevents lost refunds at the airport.",
            },
            {
              title: "Common Mistakes to Avoid",
              icon: "alert",
              emphasis: "Easy to prevent with planning.",
              body: "Avoid:",
              bullets: [
                "Throwing away refund receipts",
                "Forgetting your passport when shopping",
                "Checking items before validation",
                "Arriving at the airport too late",
              ],
            },
            {
              title: "Final Advice",
              icon: "spark",
              emphasis: "A few minutes of preparation can mean real savings.",
              body:
                "Korea's tax refund system is straightforward when you know the flow. Plan ahead, follow the steps, and leave with extra money in your pocket.",
            },
          ],
        },
        {
          title: "How to Get Discounts",
          slug: "how-to-get-discounts",
          icon: "tag",
          image: "shopping",
          description: "Tourist savings tips.",
          quickAnswer:
            "This page helps you save money without chasing unnecessary deals.",
          content: [
            {
              title: "How to Get Discounts in Korea",
              icon: "tag",
              emphasis: "Smart savings without changing your trip.",
              body:
                "Korea can feel very affordable - or surprisingly expensive. The difference usually comes from knowing which discounts truly reduce your total travel cost.",
            },
            {
              title: "First Rule: Not Every Discount Is Worth It",
              icon: "alert",
              emphasis: "A lower price doesn't always mean better value.",
              body: "Some deals:",
              bullets: [
                "Force you into a tight schedule",
                "Make you visit places you didn't plan",
                "Save money but cost time and energy",
                "If a discount complicates your itinerary, skip it.",
              ],
            },
            {
              title: "Tourist Attraction Passes",
              icon: "card",
              emphasis: "Useful - but only in specific cases.",
              body: "City passes can save money if:",
              bullets: [
                "You visit several paid attractions in 1-2 days",
                "Those attractions are already on your plan",
                "You prefer prepaid budgeting",
                "They are less useful for slow travelers who enjoy markets, neighborhoods, and free cultural sites.",
              ],
            },
            {
              title: "Department Store & Brand Discounts",
              icon: "tag",
              emphasis: "Always ask before paying.",
              body: "Major stores like Lotte and Shinsegae often provide:",
              bullets: [
                "Tourist coupon booklets",
                "Extra discounts with passport",
                "Seasonal sales",
                "Combined tax refund options",
                "Tip: Visit the information desk first. Some stores offer special tourist coupons there.",
                "Best for: Skincare and cosmetics",
                "Best for: Fashion and accessories",
                "Best for: Gifts you planned to buy anyway",
              ],
            },
            {
              title: "Duty-Free Shopping",
              icon: "tag",
              emphasis: "Good for high-value items.",
              body: "Airport and downtown duty-free shops are ideal for:",
              bullets: [
                "Luxury brands",
                "Alcohol and gifts",
                "Premium gifts",
                "Important: Compare prices. Duty-free is not automatically cheaper.",
              ],
            },
            {
              title: "Public Transport Savings",
              icon: "train",
              emphasis: "Small habits create real savings.",
              body: "Easy ways to save:",
              bullets: [
                "Use a rechargeable transit card",
                "Transfer within the allowed time window",
                "Walk short distances when possible",
                "Korea's transport system is already affordable. Smart routing matters more than discounts.",
              ],
            },
            {
              title: "Seasonal Events & Free Entry Days",
              icon: "spark",
              emphasis: "Nice bonus, not essential.",
              body: "Cities sometimes offer:",
              bullets: [
                "Free performances",
                "Free museum entry days",
                "Festival promotions",
                "Check official tourism websites for updated schedules.",
              ],
            },
            {
              title: "Common Discount Mistakes",
              icon: "alert",
              emphasis: "Avoid these common errors:",
              body: "Avoid:",
              bullets: [
                "Buying passes \"just in case\"",
                "Traveling across the city for small savings",
                "Forgetting your passport for tourist discounts",
                "Ignoring refund rules and expiration dates",
              ],
            },
            {
              title: "Where to Find Reliable Deals",
              icon: "shield",
              emphasis: "Always verify official sources.",
              body: "Check:",
              bullets: [
                "Official tourism websites",
                "Department store information desks",
                "Airport travel centers",
                "Hotel concierge services",
                "Avoid relying only on outdated blog posts or social media tips.",
              ],
            },
            {
              title: "Final Advice",
              icon: "spark",
              emphasis: "Plan first. Save second.",
              body:
                "The best discounts fit naturally into your existing travel plan. If saving money feels simple and stress-free, you're doing it right.",
            },
          ],
        },
        {
          title: "Is Shopping Cheap in Korea?",
          slug: "is-shopping-cheap-in-korea",
          icon: "wallet",
          image: "shopping",
          description: "What is actually worth buying.",
          quickAnswer:
            "This page helps you decide what is actually worth buying in Korea.",
          content: [
            {
              title: "Is Shopping Cheap in Korea?",
              icon: "wallet",
              emphasis: "Sometimes yes. Sometimes no.",
              body:
                "Shopping in Korea can feel like a great deal - or surprisingly expensive. It depends on what you buy, where you shop, and whether you compare prices first.",
            },
            {
              title: "What Is Usually Worth Buying",
              icon: "spark",
              emphasis: "Categories that offer good value.",
              body: "Many travelers find strong value in:",
              bullets: [
                "Korean skincare and cosmetics",
                "Local snacks and food gifts",
                "Small lifestyle items like stationery and accessories",
                "Trendy local fashion brands (not global luxury labels)",
                "These items are often priced competitively compared to overseas markets.",
              ],
            },
            {
              title: "What Is Often Not a Bargain",
              icon: "alert",
              emphasis: "Looks tempting, but check carefully.",
              body: "Items that are usually not cheaper:",
              bullets: [
                "Global luxury or international brand clothing",
                "Imported electronics",
                "Large or heavy products that increase luggage costs",
                "Random impulse buys in tourist-heavy areas",
                "Always compare prices before assuming it's a deal.",
              ],
            },
            {
              title: "Smart Shopping Strategy",
              icon: "pin",
              emphasis: "Simple habits make a difference.",
              body: "Simple habits make a difference:",
              bullets: [
                "Compare prices in at least two stores",
                "Check if tax refunds apply",
                "Look for official discount coupons",
                "Avoid rushing purchases late at night",
                "Walking one more street can sometimes mean better prices.",
              ],
            },
            {
              title: "Luxury Shopping",
              icon: "spark",
              emphasis: "Only if it fits your plan.",
              body: "Luxury shopping makes sense if:",
              bullets: [
                "You already planned the purchase",
                "You qualify for tax refunds",
                "Exchange rates are favorable",
                "Never buy luxury items just because they feel \"cheaper than expected.\"",
              ],
            },
            {
              title: "Common Shopping Mistakes",
              icon: "alert",
              emphasis: "Easy to avoid.",
              body: "Avoid:",
              bullets: [
                "Buying bulky items near the end of your trip",
                "Assuming \"Made in Korea\" always means low price",
                "Forgetting to bring your passport for tax refunds",
                "Not checking return or exchange policies",
              ],
            },
            {
              title: "Where to Verify Prices and Rules",
              icon: "shield",
              emphasis: "Use reliable sources.",
              body: "Check:",
              bullets: [
                "Official tourism information centers",
                "Department store information desks",
                "Airport tax refund counters",
                "Official brand websites",
                "Avoid relying only on social media posts or outdated blogs.",
              ],
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis: "Buy the right things, not everything.",
              body:
                "Shopping in Korea is smart when you focus on items that offer real value. If you return home with products you truly use and enjoy, you made the right choices.",
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
      icon: "spark",
      image: "/leaf%20images/korea-now-more.webp",
      description:
        "Discover Gangneung 'Gangneung-Gallae' Tour Pass: discounts, conditions, and transport tips for foreign travelers.",
      quickAnswer:
        "Gangneung's 'Gangneung-Gallae' Tour Pass bundles attractions, experiences, cafes, and stays into one ticket with savings promoted up to 55%.",
      content: [
        {
          title: "Discover Gangneung 'Gangneung-Gallae' Tour Pass",
          icon: "spark",
          emphasis: "Save big in one of Korea's top coastal cities.",
          body:
            "Gangneung City launched a discounted tour pass called 'Gangneung-Gallae.' It bundles major sights, experiences, cafes, and even accommodation into one pass for easier and cheaper trip planning.",
        },
        {
          title: "TL;DR",
          icon: "checklist",
          emphasis: "One pass, multiple benefits, major savings.",
          body:
            "Travelers can access several Gangneung activities in one package and potentially save up to 55% compared with buying each item separately.",
          bullets: [
            "Pay one fare and unlock multiple activities and benefits in one package.",
            "Built to reduce travel costs and simplify planning for visitors.",
            "Includes pass choices by transport style and day type.",
          ],
        },
        {
          title: "Benefits for Korea Travel Visitors",
          icon: "wallet",
          emphasis: "Budget and convenience in one product.",
          body: "This pass is positioned as a high-value option for affordable Korea travel in Gangneung.",
          bullets: [
            "Big savings: up to 55% off combined costs of sights, stays, cafes, and experiences.",
            "Simplified planning: one pass replaces multiple reservations and ticket purchases.",
            "Flexible options: choose based on public transport vs self-drive and weekday vs weekend plans.",
          ],
        },
        {
          title: "Validity of the Offer",
          icon: "calendar",
          emphasis: "Part of the 2026-2027 Visit Gangneung campaign.",
          body:
            "The pass was introduced within Gangneung's 2026-2027 tourism campaign, so it is publicized as active through 2026 and into 2027.",
          bullets: [
            "Campaign window: 2026 to 2027.",
            "Final end date may change as city campaign updates are announced.",
          ],
        },
        {
          title: "Conditions to Use It",
          icon: "passport",
          emphasis: "Simple purchase flow for all visitors.",
          body:
            "Buy the pass on the travel platform Frip by searching 'Gangneung-Gallae.' No Korean residency or special eligibility is required.",
          bullets: [
            "Purchase channel: Frip (search: Gangneung-Gallae).",
            "Open to all travelers, including foreign tourists.",
            "No special status needed beyond a standard purchase.",
            "Frip: https://www.frip.co.kr/",
          ],
        },
        {
          title: "Where This Happens",
          icon: "pin",
          emphasis: "Gangneung City, Gangwon Province, Korea.",
          body:
            "Gangneung is a popular coastal destination known for beaches, culture spots, and local food scenes.",
          bullets: [
            "Location: Gangneung, Gangwon Province, South Korea.",
            "Search 'Gangneung' in major map apps for routing and local planning.",
          ],
        },
        {
          title: "How to Get There from Incheon International Airport",
          icon: "train",
          emphasis: "Common and traveler-friendly route in about 3 hours.",
          body:
            "A practical route is AREX from Incheon Airport to Seoul Station, then transfer to KTX or ITX-Saemaeul to Gangneung.",
          bullets: [
            "Step 1: AREX from Incheon Airport to Seoul Station (about 1 hour).",
            "Step 2: Transfer at Seoul Station to KTX or ITX-Saemaeul to Gangneung (about 2 hours).",
            "Estimated total travel time: about 3 hours depending on connections.",
          ],
        },
        {
          title: "Bottom Line for Affordable Korea Trips",
          icon: "spark",
          emphasis: "Lower cost, lower hassle, better value.",
          body:
            "For foreign travelers planning a budget-friendly Korea itinerary, the Gangneung-Gallae Tour Pass can reduce costs and booking friction while covering key Gangneung experiences.",
          bullets: [
            "Good fit for first-time visitors who want simpler trip logistics.",
            "Good fit for repeat visitors who want better value from bundled travel products.",
          ],
        },
      ],
    },
    {
      title: "This Week in Korea",
      slug: "this-week-in-korea",
      icon: "calendar",
      image: "/leaf%20images/This_Week_in_Korea.webp",
      description:
        "Seollal 2026: A Foreigner's Guide. Key dates, travel patterns, closures, and cultural highlights.",
      quickAnswer:
        "Seollal in 2026 falls on February 17. Experience one of Korea's most meaningful traditional holidays.",
      content: [
        {
          title: "Seollal (Korean Lunar New Year): What Foreign Visitors Should Know",
          icon: "calendar",
          emphasis: "Korea's most important traditional holiday period.",
          body:
            "Seollal is the most significant traditional holiday in Korea. In 2026, Seollal falls on February 17 (Gregorian calendar), which corresponds to Lunar January 1. The holiday period usually lasts three days, including the day before and the day after Seollal. During this time, the pace of daily life across Korea slows noticeably, and that change is exactly what makes Seollal special.",
        },
        {
          title: "What Is Seollal?",
          icon: "checklist",
          emphasis: "A family-centered Korean New Year.",
          body:
            "Seollal marks the Korean New Year and is deeply focused on family. People return to their hometowns, honor their ancestors, and welcome the new year in a calm, reflective atmosphere.",
        },
        {
          title: "What People Do During Seollal",
          icon: "temple",
          emphasis: "Traditions rooted in family and respect.",
          body: "Key Seollal traditions include:",
          bullets: [
            "Charye (ancestral rites): On the morning of Seollal, families gather to pay respect to their ancestors.",
            "Sebae (New Year's bow): Younger family members bow to elders and receive blessings and gift money.",
            "Traditional food: The most important dish is tteokguk (rice cake soup). Eating it symbolically means becoming one year older.",
          ],
        },
        {
          title: "What Travelers Will Notice",
          icon: "alert",
          emphasis: "Plan for high travel demand and temporary closures.",
          body: "Visitors usually experience the following changes:",
          bullets: [
            "Heavy travel traffic: Trains and highways are extremely busy before and after the holiday.",
            "Shop closures: Small restaurants and local shops may close for one or two days.",
            "Tourist attractions remain open: Palaces, folk villages, and museums often operate special Seollal programs.",
          ],
        },
        {
          title: "Why Seollal Is Special for Foreigners",
          icon: "spark",
          emphasis: "One of the best times to see traditional Korea.",
          body:
            "For international visitors, Seollal can be especially meaningful because cultural experiences are often more accessible.",
          bullets: [
            "Many people wear hanbok (traditional clothing).",
            "Visitors can try traditional games such as yutnori.",
            "Many cultural events are designed so foreigners can participate even without speaking Korean.",
          ],
        },
        {
          title: "Best Places to Visit During Seollal",
          icon: "pin",
          emphasis: "Choose locations with visitor-friendly programs.",
          body: "Recommended places include:",
          bullets: [
            "Folk villages and palaces: Well-organized cultural programs for international visitors.",
            "City centers: Quieter than usual, making sightseeing more relaxed.",
            "Seollal festivals: Special events planned for both locals and foreign visitors.",
          ],
        },
        {
          title: "A Simple Travel Tip",
          icon: "route",
          emphasis: "Don't avoid Seollal - prepare for it.",
          body:
            "With a bit of advance planning for meals and transportation, Seollal is not a time you need to avoid. For first-time visitors to Korea, it can be one of the most memorable opportunities to experience a slower, more traditional side of the country that is rarely visible during regular travel seasons.",
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

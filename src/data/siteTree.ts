export type TreeNode = {
  title: string;
  slug: string;
  description?: string;
  quickAnswer?: string;
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
            "This page helps you decide how to spend one week in Korea without rushing or overplanning.",
          content: [
            {
              title: "7 Days in Korea",
              icon: "calendar",
              emphasis: "Seven days is short. That's okay.",
              body:
                "You cannot see all of Korea in one week. A great trip is not about more stops. It is about better choices.",
            },
            {
              title: "The decision that saves your entire trip",
              icon: "spark",
              emphasis: "Choose two places. Not three.",
              body:
                "Pick one main city and one contrast city. More stops mean rushing, packing, and higher costs with less joy.",
            },
            {
              title: "Days 1-4: Seoul (stay in one hotel)",
              icon: "city",
              emphasis: "Stay in one area. Explore by neighborhood.",
              body:
                "Seoul is the easiest first base. Airport access is simple, transit is excellent, and food, culture, shopping, and day trips are all close. Move around the city, not your hotel.",
            },
            {
              title: "Days 5-7: Pick ONE contrast city",
              icon: "route",
              emphasis: "City comfort or nature?",
              body:
                "City + beach + food -> Busan. Nature + driving + wide views -> Jeju. Pick one. Trying to fit both in one week usually backfires.",
            },
            {
              title: "What usually goes wrong (avoid this)",
              icon: "alert",
              emphasis: "Looks good online. Feels bad in real life.",
              body: "These are the usual traps:",
              bullets: [
                "Seoul + Busan + Jeju in 7 days",
                "Changing hotels every 1-2 nights",
                "Planning every hour instead of every day",
                "More plans don't mean a better trip",
              ],
            },
            {
              title: "What you don't need to decide yet",
              icon: "checklist",
              emphasis: "Skip the micro-planning.",
              body:
                "Decide the shape of your trip first. Details can wait.",
              bullets: [
                "Exact attractions",
                "Restaurant lists",
                "Hour-by-hour schedules",
              ],
            },
            {
              title: "Need updated information?",
              icon: "shield",
              emphasis: "Always confirm with official sources.",
              body:
                "Schedules, prices, and seasonal options can change. Use this site to decide, then confirm with official sources.",
              bullets: [
                "Official transport websites",
                "City tourism offices",
                "Airport or government pages",
              ],
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Balanced beats busy.",
              body:
                "A great 7-day trip feels calm and flexible. If you finish relaxed, you planned it right.",
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
              title: "2 Weeks in Korea",
              icon: "calendar",
              emphasis: "Two weeks is the easiest way to enjoy Korea.",
              body:
                "You have time to see more than highlights without feeling rushed or exhausted. This guide helps you choose a smart structure, not fill every day.",
            },
            {
              title: "Why two weeks works so well",
              icon: "spark",
              emphasis: "Structure beats more planning.",
              body: "With two weeks, you can:",
              bullets: [
                "Visit more than one region",
                "Add rest days naturally",
                "Enjoy food and neighborhoods, not just sights",
              ],
            },
            {
              title: "The simple rule for 2 weeks",
              icon: "route",
              emphasis: "Think in three blocks.",
              body:
                "Three regions. One main base per region. No backtracking. That's all you need.",
            },
            {
              title: "First: Seoul (5-6 days)",
              icon: "city",
              emphasis: "Seoul deserves time.",
              body:
                "Transport is easy, neighborhoods are varied, and day trips are simple. Rushing Seoul usually leads to fatigue.",
            },
            {
              title: "Second: Busan (3-4 days)",
              icon: "beach",
              emphasis: "Busan adds contrast.",
              body:
                "Beaches, fresh seafood, slower evenings, and a relaxed coastal vibe. If you’re spending two weeks in Korea, allocating 3–4 days to Busan usually feels just right.",
            },
            {
              title: "Third: One place to slow down (3–4 days)",
              icon: "leaf",
              emphasis: "Keep this part relaxed and flexible.",
              body: "Choose one based on your style:",
              bullets: [
                "Jeju -> nature and driving",
                "Gyeongju -> history and calm walks",
                "Smaller city -> local atmosphere",
              ],
            },
            {
              title: "What often goes wrong",
              icon: "alert",
              emphasis: "More time does not mean more cities.",
              body: "Even with two weeks, travelers still:",
              bullets: [
                "Add too many cities",
                "Change hotels too often",
                "Travel back and forth unnecessarily",
              ],
            },
            {
              title: "What you don't need to decide yet",
              icon: "checklist",
              emphasis: "Decide as you go.",
              body: "Two weeks gives you room to choose later.",
              bullets: [
                "Exact attractions",
                "Restaurant lists",
                "Daily schedules",
              ],
            },
            {
              title: "Need current details?",
              icon: "shield",
              emphasis: "Always confirm with official sources.",
              body:
                "Transport routes, schedules, and prices can change. Use this site to decide, then confirm with official sources.",
              bullets: [
                "Official transport websites",
                "City tourism offices",
                "Airport or government pages",
              ],
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Full, not packed.",
              body:
                "Two weeks feels best when the trip is full, not busy. If you finish relaxed, you planned it right.",
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
          title: "Is Getting Around Hard?",
          slug: "is-getting-around-hard",
          icon: "route",
          image: "transport",
          description: "How easy transportation really is in Korea.",
          quickAnswer:
            "This page helps you understand how easy transportation really is in Korea.",
          content: [
            {
              title: "Is Getting Around Hard?",
              icon: "train",
              emphasis: "For most travelers, it's surprisingly easy.",
              body:
                "South Korea has one of the most efficient public transport systems in Asia. Trains, subways, and buses are clean, reliable, and built for daily use - not just tourists.",
            },
            {
              title: "The Short Answer",
              icon: "spark",
              emphasis: "No. It's very manageable.",
              body: "Most visitors find that:",
              bullets: [
                "Subways are frequent and clearly marked",
                "Major stations include English signage",
                "Fares are affordable",
                "Transfers are simple",
                "In major cities, you don't need a car.",
              ],
            },
            {
              title: "Why Transportation Works So Well",
              icon: "route",
              emphasis: "One connected system.",
              body:
                "Subways, city buses, and regional trains are integrated. A rechargeable T-money card works across most transport nationwide. You use the same system locals use - which keeps it efficient and well-maintained.",
            },
            {
              title: "What First-Time Visitors Worry About",
              icon: "alert",
              emphasis: "These worries are normal - but rarely become real problems.",
              body: "Common concerns include:",
              bullets: [
                "\"What if I get lost?\"",
                "\"What if I can't read Korean?\"",
                "\"What if I take the wrong train?\"",
              ],
            },
            {
              title: "What Actually Happens",
              icon: "shield",
              emphasis: "Mistakes are easy to correct.",
              body: "In practice:",
              bullets: [
                "Stations are numbered and color-coded",
                "Train lines are clearly mapped",
                "English announcements are common in large cities",
                "If you go the wrong direction, you can simply exit and switch",
              ],
            },
            {
              title: "How Most Travelers Get Around",
              icon: "train",
              emphasis: "Using a mix of transport is normal and simple.",
              body: "Most travelers use:",
              bullets: [
                "Subways for longer distances",
                "Buses for neighborhood routes",
                "Taxis late at night or with heavy luggage",
              ],
            },
            {
              title: "What You Don't Need",
              icon: "hand",
              emphasis: "Basic planning and a transit app are enough.",
              body: "You don't need:",
              bullets: [
                "Fluent Korean",
                "Complex route planning",
                "A car rental in big cities",
              ],
            },
            {
              title: "A Common Mistake",
              icon: "alert",
              emphasis: "Overthinking transportation.",
              body:
                "Some visitors rely on taxis too often out of concern. In most cases, public transport is faster and more predictable.",
            },
            {
              title: "Bottom Line",
              icon: "spark",
              emphasis:
                "Getting around Korea is easier than many travelers expect.",
              body:
                "Once you take your first subway ride, the system feels clear and routine - making transportation one of the least stressful parts of your trip.",
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
          description: "Best areas by travel style.",
          quickAnswer:
            "This page helps you choose the best Seoul area based on your travel style.",
          content: [
            {
              title: "Where to Stay in Seoul",
              icon: "city",
              emphasis: "Location matters more than hotel quality.",
              body:
                "Where you stay decides how easy or tiring your days feel. This page helps you pick the right area before you book anything.",
            },
            {
              title: "First, one simple rule",
              icon: "pin",
              emphasis: "A smaller room in the right area wins.",
              body: "If you are within 5 minutes of a subway station, you are already doing well.",
            },
            {
              title: "If you like energy, food, and nightlife",
              icon: "spark",
              emphasis: "Hongdae.",
              body: "Why people choose it:",
              bullets: [
                "Endless restaurants and cafes",
                "Late-night food and music",
                "Easy airport access by train",
                "Best for first-time visitors who like lively streets",
              ],
            },
            {
              title: "If you want shopping and convenience",
              icon: "tag",
              emphasis: "Myeongdong.",
              body: "Why people choose it:",
              bullets: [
                "Walkable shopping streets",
                "Many hotels used to foreign guests",
                "Easy transport in all directions",
                "Best for short stays and simple logistics",
              ],
            },
            {
              title: "If you like culture and calm streets",
              icon: "temple",
              emphasis: "Jongno.",
              body: "Why people choose it:",
              bullets: [
                "Traditional atmosphere",
                "Close to historic sites",
                "Quiet nights compared to other areas",
                "Best for culture-focused travelers who enjoy walking",
              ],
            },
            {
              title: "If you want a balanced, local feel",
              icon: "city",
              emphasis: "Gangnam.",
              body: "Why people choose it:",
              bullets: [
                "Wider streets and newer buildings",
                "Good dining and cafes",
                "Easy subway connections",
                "Best for repeat visitors, business travelers, and longer stays",
              ],
            },
            {
              title: "What usually goes wrong",
              icon: "alert",
              emphasis: "Daily travel time adds up fast.",
              body: "These choices often cause stress:",
              bullets: [
                "Booking far from a subway station",
                "Choosing a cheap hotel that adds long daily travel",
                "Moving hotels inside Seoul",
              ],
            },
            {
              title: "What you don't need to decide yet",
              icon: "hand",
              emphasis: "Pick the area first.",
              body: "You do not need:",
              bullets: [
                "A specific hotel name",
                "A perfect view",
                "The best neighborhood according to blogs",
              ],
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "There is no single best area.",
              body:
                "There is only the best area for how you travel. Pick the area first and the right hotel will follow.",
            },
          ],
        },
        {
          title: "Where to Stay in Busan",
          slug: "where-to-stay-in-busan",
          icon: "beach",
          image: "beach",
          description: "Beach areas vs city areas.",
          quickAnswer:
            "This page helps you decide between beach areas and city areas in Busan.",
          content: [
            {
              title: "Where to Stay in Busan",
              icon: "beach",
              emphasis: "Beach life or city life.",
              body:
                "Busan does not have one best area. Where you stay changes how your trip feels. Make one clear choice and everything gets easier.",
            },
            {
              title: "If you want the beach experience",
              icon: "beach",
              emphasis: "Atmosphere over efficiency.",
              body: "Choose a beach area if you want:",
              bullets: [
                "Morning walks by the sea",
                "Cafes with ocean views",
                "Slower nights and open air",
                "The beach as part of your daily plan",
              ],
            },
            {
              title: "What to expect in beach areas",
              icon: "spark",
              emphasis: "Beautiful views, less central access.",
              body: "Beach areas usually mean:",
              bullets: [
                "Higher prices near the water",
                "Longer rides to other parts of the city",
                "Great mood for slow travel",
              ],
            },
            {
              title: "If you prefer convenience and movement",
              icon: "city",
              emphasis: "Efficiency and access.",
              body: "Choose a city area if you want:",
              bullets: [
                "Easy transport connections",
                "Shopping, food streets, and late dinners",
                "Fast subway access for moving around",
              ],
            },
            {
              title: "What to expect in city areas",
              icon: "route",
              emphasis: "Practical, not scenic.",
              body: "City areas usually mean:",
              bullets: [
                "Faster travel times",
                "More local daily life",
                "Fewer scenic views from your hotel",
              ],
            },
            {
              title: "Which one should you choose?",
              icon: "checklist",
              emphasis: "Ask one question.",
              body: "What do you want to see first when you leave your hotel?",
              bullets: [
                "The ocean -> choose a beach area",
                "A subway entrance or food street -> choose a city area",
              ],
            },
            {
              title: "What you don't need to decide yet",
              icon: "hand",
              emphasis: "Type first, details later.",
              body: "You do not need:",
              bullets: [
                "A specific hotel name",
                "A room view",
                "A perfect neighborhood map",
              ],
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Choose the feeling you want.",
              body:
                "Beach areas give you mood. City areas give you movement. Choose the feeling you want and your Busan trip makes sense from day one.",
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
          description: "Famous places worth your time.",
          quickAnswer:
            "This page helps you focus on the sights that are truly worth your time.",
          content: [
            {
              title: "Must-See for First Timers",
              icon: "spark",
              emphasis: "See a few places that explain Korea well.",
              body:
                "With limited time, the goal is not to see everything. This page helps you choose a few places that are worth your time.",
            },
            {
              title: "What must-see really means",
              icon: "checklist",
              emphasis: "Famous is not enough.",
              body: "A must-see place should:",
              bullets: [
                "Show Korean history or tradition clearly",
                "Explain modern Korean life in one visit",
                "Be easy to access without complicated planning",
              ],
            },
            {
              title: "A simple rule that works",
              icon: "route",
              emphasis: "Pick 2 or 3 highlights per city.",
              body: "Two or three keeps your days relaxed and your memories clear.",
            },
            {
              title: "What usually belongs on a first-timer list",
              icon: "spark",
              emphasis: "Think in types, not exact names.",
              body: "Most first trips work well with:",
              bullets: [
                "One historical site (palace, temple, or traditional village)",
                "One everyday-life area (markets or food alleys)",
                "One viewpoint or evening spot (city view or river walk)",
              ],
            },
            {
              title: "Why skipping some famous places is okay",
              icon: "hand",
              emphasis: "Skipping can be a win.",
              body: "Common reasons to skip:",
              bullets: [
                "Long lines for short visits",
                "Overcrowded photo spots",
                "Too similar to things you will already see",
              ],
            },
            {
              title: "A mistake many first timers make",
              icon: "alert",
              emphasis: "One main area per half-day.",
              body: "Trying to pass by many places in one day leads to rushing and fatigue.",
            },
            {
              title: "How this page is meant to be used",
              icon: "checklist",
              emphasis: "Decide priorities, confirm details later.",
              body:
                "This page helps you decide what kinds of places are worth your time. After you choose priorities, confirm details later using official tourism sites or local maps.",
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Clear and comfortable beats perfect.",
              body:
                "If you end each day feeling curious, not exhausted, you chose the right must-see places.",
            },
          ],
        },
        {
          title: "Good Places Without Crowds",
          slug: "good-places-without-crowds",
          icon: "leaf",
          image: "heritage",
          description: "Nice spots most tourists miss.",
          quickAnswer:
            "This page helps you find calmer places most tourists miss.",
          content: [
            {
              title: "Good Places Without Crowds",
              icon: "leaf",
              emphasis: "Crowds are optional.",
              body:
                "Many of the best moments in Korea happen away from famous photo spots. This page helps you find calmer places without wasting time.",
            },
            {
              title: "Reset the idea of hidden",
              icon: "spark",
              emphasis: "Quiet places are just less promoted.",
              body: "They do not appear in top-10 lists or trend online, and that is why they work.",
            },
            {
              title: "Where calm places usually exist",
              icon: "pin",
              emphasis: "Local, casual, and easy.",
              body: "Good examples include:",
              bullets: [
                "Neighborhood parks and river paths",
                "Small museums or galleries",
                "Traditional streets outside the main tourist zone",
                "Residential cafes and bakeries",
                "Markets that serve locals, not visitors",
              ],
            },
            {
              title: "Timing matters more than location",
              icon: "calendar",
              emphasis: "Avoid peak hours.",
              body: "Simple rules that work:",
              bullets: [
                "Go early in the morning",
                "Visit on weekdays when possible",
                "Avoid weekends near central attractions",
                "Walk one subway stop away from major hubs",
              ],
            },
            {
              title: "How locals choose quiet spots",
              icon: "route",
              emphasis: "Purpose over popularity.",
              body: "Locals look for:",
              bullets: [
                "Places close to home",
                "Places with a single clear purpose",
                "Places busy at lunch, quiet afterward",
              ],
            },
            {
              title: "What usually goes wrong",
              icon: "alert",
              emphasis: "Quiet needs flexibility.",
              body: "Common mistakes:",
              bullets: [
                "Going to quiet spots at peak hours",
                "Trying to visit many hidden places in one day",
                "Expecting silence in central areas on weekends",
                "Treating calm places like checklist items",
              ],
            },
            {
              title: "What this page helps you decide",
              icon: "checklist",
              emphasis: "Approach, not a secret list.",
              body: "You do not need secret names. You need the right approach.",
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Follow timing, walk a little farther.",
              body:
                "Choose the right timing, walk a little farther, and stop chasing highlights. That is where the trip starts to feel like yours.",
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
              emphasis: "Choose fewer places and enjoy them more.",
              body:
                "Every city has a lot to see. This page helps you decide what is worth your limited time, city by city.",
            },
            {
              title: "How to use this page",
              icon: "checklist",
              emphasis: "Pick one main highlight cluster per day.",
              body:
                "Do not try to see everything listed for a city. One clear focus per day saves time, energy, and money.",
            },
            {
              title: "Seoul: history + modern life",
              icon: "city",
              emphasis: "Group by neighborhood.",
              body: "Best highlights to focus on:",
              bullets: [
                "Palaces and traditional streets in the city center",
                "One modern area for shopping or nightlife",
                "One scenic viewpoint or river walk",
              ],
            },
            {
              title: "Busan: coast first, city second",
              icon: "beach",
              emphasis: "Stay near your main beach area.",
              body: "Best highlights to focus on:",
              bullets: [
                "One beach area with a coastal walk",
                "One local market or food street",
                "One viewpoint or cable car experience",
              ],
            },
            {
              title: "Jeju: nature beats landmarks",
              icon: "leaf",
              emphasis: "Choose a direction and slow down.",
              body: "Best highlights to focus on:",
              bullets: [
                "One coast route or scenic drive",
                "One nature experience (trail, cliff, or field)",
                "One relaxed local food stop",
              ],
            },
            {
              title: "Gyeongju: one open-air museum",
              icon: "temple",
              emphasis: "Move slowly to feel the charm.",
              body: "Best highlights to focus on:",
              bullets: [
                "Royal tomb areas and historic parks",
                "One major temple or heritage site",
                "Evening walk in the old town area",
              ],
            },
            {
              title: "Jeonju: food + streets",
              icon: "bowl",
              emphasis: "Evenings are the best.",
              body: "Best highlights to focus on:",
              bullets: [
                "Hanok village streets",
                "Local food experiences",
                "Nighttime walking and cafes",
              ],
            },
            {
              title: "The most common mistake",
              icon: "alert",
              emphasis: "Do not rank cities by importance.",
              body:
                "There is no universal must-see list. There is only what fits your trip style.",
            },
            {
              title: "What this page does and doesn't do",
              icon: "hand",
              emphasis: "Focus, not a full list.",
              body: "This page helps you:",
              bullets: [
                "Decide where to focus in each city",
                "Avoid overpacked sightseeing days",
                "Build a realistic daily rhythm",
                "For updated details, confirm with official sources",
              ],
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Fit your pace, not the hype.",
              body:
                "The best highlights are the ones that match your energy and reason for traveling.",
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
              emphasis: "Short answer: usually, no.",
              body:
                "Most sightseeing in Korea is low-cost or free. This page helps you decide if you need to worry about entrance fees.",
            },
            {
              title: "The good news first",
              icon: "spark",
              emphasis: "Tickets are not the big cost.",
              body:
                "You spend less on tickets and more on food, transport, and small daily choices.",
            },
            {
              title: "Typical entrance fee ranges",
              icon: "checklist",
              emphasis: "Simple guide, no numbers needed.",
              body: "In general:",
              bullets: [
                "Palaces and historical sites: low-cost",
                "Museums and cultural spaces: many are free",
                "Nature spots: almost always free",
                "Special experiences: higher cost but optional",
              ],
            },
            {
              title: "What actually affects your daily budget",
              icon: "route",
              emphasis: "Food and transport matter more.",
              body: "Focus on:",
              bullets: [
                "Food choices (street food vs sit-down)",
                "Transport habits (walking and transit vs frequent taxis)",
                "How many cities you move between",
              ],
            },
            {
              title: "A smart way to think about costs",
              icon: "spark",
              emphasis: "Budget per day, not per attraction.",
              body: "Ask yourself:",
              bullets: [
                "Relaxed day or packed day?",
                "Casual meals or a treat?",
                "Move far or stay local?",
              ],
            },
            {
              title: "Common money mistakes",
              icon: "alert",
              emphasis: "Easy to avoid.",
              body: "Many travelers:",
              bullets: [
                "Overestimate ticket costs and underestimate food spending",
                "Buy paid attractions just because they are famous",
                "Try to do too many things in one day",
              ],
            },
            {
              title: "About prices changing",
              icon: "shield",
              emphasis: "Always confirm official details.",
              body: "Entrance fees and passes can change. For the latest prices, confirm with:",
              bullets: [
                "Official city tourism websites",
                "Museum or attraction homepages",
                "On-site ticket counters",
              ],
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Balanced days mean balanced spending.",
              body:
                "Korea is friendly to your budget when you travel with intention. Choose what adds value to your trip.",
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
              emphasis: "Passes save money only in specific situations.",
              body:
                "Most travelers do not need a discount pass. Passes only work if you already plan to move fast.",
            },
            {
              title: "When a discount pass makes sense",
              icon: "spark",
              emphasis: "Speed and structure.",
              body: "A pass can be worth it if:",
              bullets: [
                "You will visit several paid attractions in a short period",
                "Your days are already full and well-timed",
                "You are comfortable following a fixed schedule",
              ],
            },
            {
              title: "When a discount pass does NOT help",
              icon: "hand",
              emphasis: "Relaxed trips do not benefit.",
              body: "A pass usually does not save money if:",
              bullets: [
                "You prefer relaxed mornings and flexible plans",
                "You enjoy wandering, cafes, and free areas",
                "You change plans based on weather or mood",
              ],
            },
            {
              title: "The most common pass mistake",
              icon: "alert",
              emphasis: "Buying before planning.",
              body: "Many travelers:",
              bullets: [
                "Buy a pass just in case",
                "Feel pressure to use it",
                "Rush between places and end tired",
              ],
            },
            {
              title: "A smarter way to decide",
              icon: "checklist",
              emphasis: "Ask one question.",
              body: "How many paid places will I really visit in one day?",
              bullets: [
                "One or two -> skip the pass",
                "Three or more -> compare prices carefully",
              ],
            },
            {
              title: "About prices and availability",
              icon: "shield",
              emphasis: "Always confirm official details.",
              body: "Pass contents and prices can change. Check:",
              bullets: [
                "Official city tourism websites",
                "The pass's official homepage",
                "Current attraction lists included in the pass",
              ],
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Freedom is often the better deal.",
              body:
                "Passes reward speed and structure and punish slow, flexible travel. If your trip is relaxed, you often save more by skipping a pass.",
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
              emphasis: "Good internet is not optional in Korea.",
              body:
                "Maps, transport, payments, and translation all depend on it. The real question is which option fits you better.",
            },
            {
              title: "First, the short answer",
              icon: "checklist",
              emphasis: "One choice solves most of it.",
              body: "If your phone supports eSIM, choose eSIM. If it doesn't, get a physical SIM.",
            },
            {
              title: "What is an eSIM",
              icon: "sim",
              emphasis: "Digital, simple, and fast.",
              body: "Why travelers like it:",
              bullets: [
                "Set it up before landing",
                "No shop visit at the airport",
                "Keep your home SIM active for messages or banking",
              ],
            },
            {
              title: "When a physical SIM makes more sense",
              icon: "card",
              emphasis: "Compatibility and support.",
              body: "A physical SIM is better if:",
              bullets: [
                "Your phone is older",
                "You are unsure about eSIM compatibility",
                "You prefer in-person help",
                "You want to buy at the airport or telecom counters",
              ],
            },
            {
              title: "What you actually need",
              icon: "spark",
              emphasis: "Data first.",
              body: "For most travelers:",
              bullets: [
                "Data-only is enough",
                "Unlimited data is more comfortable",
                "Calling minutes are rarely necessary",
              ],
            },
            {
              title: "The most common mistake",
              icon: "alert",
              emphasis: "Check compatibility first.",
              body: "Always confirm:",
              bullets: [
                "Your phone model",
                "eSIM support",
                "Network compatibility",
              ],
            },
            {
              title: "Do you need to decide everything now?",
              icon: "hand",
              emphasis: "Decide the type, confirm the details later.",
              body: "Exact prices and plans change often. Always confirm on:",
              bullets: [
                "Official telecom websites",
                "Airport telecom counters",
                "Authorized sellers",
              ],
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Either way, being online makes everything easier.",
              body:
                "Choose eSIM for speed and simplicity. Choose physical SIM for compatibility and support.",
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
              emphasis: "Cards work almost everywhere. Cash is still useful.",
              body:
                "You do not need to stress about money. Paying is easy once you know the simple balance: cards first, cash as backup.",
            },
            {
              title: "Cards: what usually works best",
              icon: "card",
              emphasis: "Cards are the main tool.",
              body: "You can use cards for:",
              bullets: [
                "Hotels and accommodations",
                "Cafes and restaurants",
                "Shopping malls and convenience stores",
                "Transport via transit cards",
              ],
            },
            {
              title: "One important tip",
              icon: "spark",
              emphasis: "Credit cards tend to work more smoothly.",
              body: "If you have both, bring both, but expect credit to be your main tool.",
            },
            {
              title: "What catches visitors off guard",
              icon: "alert",
              emphasis: "Some small places are cash-only.",
              body: "This usually happens at:",
              bullets: [
                "Small local restaurants",
                "Traditional markets",
                "Street food stalls",
              ],
            },
            {
              title: "Cash: how much do you really need?",
              icon: "wallet",
              emphasis: "A small amount is enough.",
              body: "Cash is mainly for:",
              bullets: [
                "Street food",
                "Markets",
                "Very small shops",
              ],
            },
            {
              title: "Where to get cash",
              icon: "pin",
              emphasis: "ATMs are easy to find.",
              body: "ATMs are common at:",
              bullets: [
                "Convenience stores",
                "Subway stations",
                "Banks in city areas",
              ],
            },
            {
              title: "What you don't need to worry about",
              icon: "hand",
              emphasis: "Keep it simple.",
              body: "You do not need:",
              bullets: [
                "Special local bank accounts",
                "Complicated payment apps",
                "Large amounts of cash",
              ],
            },
            {
              title: "Common mistakes to avoid",
              icon: "alert",
              emphasis: "Balance works best.",
              body: "Many travelers:",
              bullets: [
                "Rely only on cash",
                "Carry too much just in case",
                "Assume every place accepts foreign debit cards",
              ],
            },
            {
              title: "A smart, low-stress setup",
              icon: "checklist",
              emphasis: "Card + small cash.",
              body: "For most travelers:",
              bullets: [
                "One international card as main payment",
                "A small amount of cash as backup",
              ],
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "If you are not thinking about money, you are doing it right.",
              body:
                "Paying in Korea feels natural once you arrive. Keep it simple and you will be fine.",
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
              emphasis: "Yes, generally very safe.",
              body:
                "Safe does not mean stop thinking completely. This page explains what that really means for travelers.",
            },
            {
              title: "Why most visitors feel safe right away",
              icon: "spark",
              emphasis: "Comfortable from day one.",
              body: "Many travelers notice:",
              bullets: [
                "People walk alone late at night",
                "Public transport runs very late",
                "Streets are well lit and busy",
                "Violent crime is rare in visitor areas",
              ],
            },
            {
              title: "Where you still need basic awareness",
              icon: "alert",
              emphasis: "Crowds are still crowds.",
              body: "Use normal awareness in:",
              bullets: [
                "Crowded subways",
                "Busy nightlife areas",
                "Tourist-heavy shopping streets",
              ],
            },
            {
              title: "Night travel: what to expect",
              icon: "route",
              emphasis: "Safe, lively, and reliable.",
              body: "In reality:",
              bullets: [
                "Subways and buses are safe",
                "Taxis are reliable",
                "Late-night food streets are lively",
              ],
            },
            {
              title: "If you are alone at night",
              icon: "hand",
              emphasis: "Comfort choices.",
              body: "Simple habits:",
              bullets: [
                "Stick to main streets",
                "Avoid empty alleys late at night",
                "Use taxis if you feel tired or unsure",
              ],
            },
            {
              title: "What often worries travelers but shouldn't",
              icon: "spark",
              emphasis: "Cultural differences, not danger.",
              body: "These are normal:",
              bullets: [
                "People staring out of curiosity",
                "Quiet behavior on public transport",
                "Fewer visible police than expected",
              ],
            },
            {
              title: "When to be a bit more careful",
              icon: "alert",
              emphasis: "Know your limits.",
              body: "Extra awareness helps if you:",
              bullets: [
                "Drink heavily",
                "Stay out very late in nightlife zones",
                "Ignore your surroundings",
              ],
            },
            {
              title: "Emergency help",
              icon: "shield",
              emphasis: "Rarely needed, but organized.",
              body:
                "Emergency services are fast and organized. English support is available in many situations.",
            },
            {
              title: "Final thought",
              icon: "spark",
              emphasis: "Stay aware, not anxious.",
              body:
                "Korea is safe enough that safety rarely becomes part of your daily decisions. That is how a good trip should feel.",
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
              emphasis: "Solo travel in Korea feels calm and manageable.",
              body:
                "Traveling alone is common here. Many solo travelers feel more relaxed after a few days than they expected.",
            },
            {
              title: "Why Korea works well for solo travelers",
              icon: "spark",
              emphasis: "Structured and predictable.",
              body: "You will notice:",
              bullets: [
                "Clear public transport",
                "Well-marked streets and stations",
                "Convenience stores everywhere",
              ],
            },
            {
              title: "Eating alone is completely fine",
              icon: "bowl",
              emphasis: "Solo diners are normal.",
              body: "In Korea:",
              bullets: [
                "Cafes and casual restaurants expect single customers",
                "Convenience store meals are high quality",
                "Some BBQ places prefer groups, but there are many alternatives",
              ],
            },
            {
              title: "Moving around alone, day and night",
              icon: "route",
              emphasis: "Comfortable and reliable.",
              body: "During the day:",
              bullets: [
                "Public transport is very safe",
                "Tourist areas are busy and monitored",
                "Walking alone feels comfortable",
              ],
            },
            {
              title: "At night",
              icon: "spark",
              emphasis: "Main streets stay active.",
              body: "At night:",
              bullets: [
                "Main streets stay lively",
                "Taxis are easy to use",
                "Late-night food areas feel safe and active",
              ],
            },
            {
              title: "Simple habits that increase comfort",
              icon: "checklist",
              emphasis: "Convenience upgrades.",
              body: "Small habits help:",
              bullets: [
                "Save your hotel address offline",
                "Carry a portable charger",
                "Know the nearest subway station name",
              ],
            },
            {
              title: "What solo travelers sometimes overthink",
              icon: "hand",
              emphasis: "Cultural, not personal.",
              body: "You may notice:",
              bullets: [
                "Quiet subways",
                "Fewer smiles from strangers",
                "Less small talk",
              ],
            },
            {
              title: "When to be a little more careful",
              icon: "alert",
              emphasis: "Listen to your energy level.",
              body: "Extra awareness helps if you:",
              bullets: [
                "Drink more than usual",
                "Stay out very late in nightlife districts",
                "Feel exhausted or disoriented",
              ],
            },
            {
              title: "Why solo travel here feels empowering",
              icon: "spark",
              emphasis: "Confidence grows quickly.",
              body: "Many solo travelers say Korea helped them:",
              bullets: [
                "Trust their own pace",
                "Feel confident navigating alone",
                "Enjoy quiet moments without pressure",
              ],
            },
            {
              title: "Final thought",
              icon: "spark",
              emphasis: "Comfort, awareness, and ease.",
              body:
                "If you feel calm walking around on your own, you are doing it right.",
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
              emphasis: "Clarity, not fear.",
              body:
                "Emergencies are rare in Korea, but knowing what to do makes everything feel calmer.",
            },
            {
              title: "First, take a breath",
              icon: "shield",
              emphasis: "Help is fast and reliable.",
              body:
                "Emergency services are organized and used to helping foreigners. You do not need perfect Korean.",
            },
            {
              title: "The most important numbers",
              icon: "alert",
              emphasis: "Save these before you arrive.",
              body: "Emergency numbers:",
              bullets: [
                "Police: 112",
                "Fire and medical emergency: 119",
                "You can call from mobile, public, or hotel phones",
              ],
            },
            {
              title: "If you need medical help",
              icon: "shield",
              emphasis: "Call 119 if it feels serious.",
              body: "For non-life-threatening situations:",
              bullets: [
                "Go to a large hospital with English support",
                "Ask your hotel to help explain symptoms",
                "Use pharmacies for minor issues",
              ],
            },
            {
              title: "If you lose something important",
              icon: "passport",
              emphasis: "Manageable steps.",
              body: "Do this in order:",
              bullets: [
                "Go to the nearest police station or ask hotel staff",
                "Report the loss (routine and common)",
                "Contact your embassy only if necessary",
              ],
            },
            {
              title: "If you feel unsafe",
              icon: "hand",
              emphasis: "Choose comfort.",
              body: "If something feels off:",
              bullets: [
                "Go into a convenience store or cafe",
                "Take a taxi instead of walking",
                "Call your accommodation",
              ],
            },
            {
              title: "Language help in urgent moments",
              icon: "sim",
              emphasis: "You are not expected to solve it alone.",
              body: "If communication is difficult:",
              bullets: [
                "Use a translation app with voice input",
                "Show your hotel address or booking confirmation",
                "Ask nearby staff or shop employees for help",
              ],
            },
            {
              title: "What most travelers worry about",
              icon: "spark",
              emphasis: "You will not be judged for confusion.",
              body: "In reality:",
              bullets: [
                "Emergency workers are patient",
                "Mistakes are expected",
                "Helping you is their job",
              ],
            },
            {
              title: "Prepare once, then forget about it",
              icon: "checklist",
              emphasis: "Small prep, big calm.",
              body: "Do this once:",
              bullets: [
                "Save emergency numbers",
                "Screenshot your hotel address",
                "Carry basic travel insurance info",
              ],
            },
            {
              title: "Final thought",
              icon: "spark",
              emphasis: "Response, not panic.",
              body:
                "If something happens, help is close and you are not alone.",
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
                "You do not need to understand Korean culture perfectly. A few simple habits make daily interactions smoother.",
            },
            {
              title: "Politeness matters more than perfection",
              icon: "spark",
              emphasis: "Small effort goes a long way.",
              body: "You do not need to:",
              bullets: [
                "Speak Korean well",
                "Bow perfectly",
                "Know every custom",
              ],
            },
            {
              title: "Using two hands (when it matters)",
              icon: "hand",
              emphasis: "Intention, not technique.",
              body: "Use two hands when:",
              bullets: [
                "Giving or receiving cards",
                "Handing over money",
                "Offering small items in formal moments",
              ],
            },
            {
              title: "Inside voices in public spaces",
              icon: "alert",
              emphasis: "Quieter than you expect.",
              body: "Keep your voice lower in:",
              bullets: [
                "Subways",
                "Buses",
                "Elevators",
              ],
            },
            {
              title: "Shoes off means shoes off",
              icon: "bag",
              emphasis: "Look at the entrance.",
              body: "You may remove shoes in:",
              bullets: [
                "Traditional accommodations",
                "Some restaurants",
                "Certain homes",
              ],
            },
            {
              title: "Personal space and touching",
              icon: "hand",
              emphasis: "Polite distance feels safest.",
              body: "Less common:",
              bullets: [
                "Casual touching of strangers",
                "Hugging or back-patting people you just met",
              ],
            },
            {
              title: "Dining manners",
              icon: "bowl",
              emphasis: "Keep it simple.",
              body: "Remember:",
              bullets: [
                "Wait a moment before starting",
                "Do not stick chopsticks straight into rice",
                "Slurping noodles is okay",
              ],
            },
            {
              title: "Tipping is not expected",
              icon: "wallet",
              emphasis: "Thank you is enough.",
              body: "In Korea:",
              bullets: [
                "Tipping is not common",
                "Service charges are already included",
                "Staff may feel uncomfortable if you try",
              ],
            },
            {
              title: "What visitors often worry about",
              icon: "spark",
              emphasis: "Calm and polite beats perfect.",
              body: "Most locals do not expect foreigners to know everything.",
            },
            {
              title: "One phrase that always helps",
              icon: "spark",
              emphasis: "감사합니다 (gam-sa-ham-ni-da).",
              body: "Thank you goes a long way.",
            },
            {
              title: "Final thought",
              icon: "spark",
              emphasis: "Be considerate, not perfect.",
              body:
                "If your actions feel respectful, you are already doing well in Korea.",
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
              emphasis: "Structured and predictable.",
              body:
                "Arriving in Korea is smoother than most people expect. If you know the basic flow, there is nothing to worry about.",
            },
            {
              title: "After landing: follow the signs",
              icon: "route",
              emphasis: "Arrival and Immigration.",
              body:
                "Airports like Incheon and Gimpo have clear English signs. Follow the crowd and you are on the right path.",
            },
            {
              title: "Step 1: Immigration check",
              icon: "passport",
              emphasis: "Simple questions, short answers.",
              body: "You will be asked for:",
              bullets: [
                "Passport",
                "Arrival card (if required)",
                "Reason for visit, length of stay, first address",
              ],
            },
            {
              title: "Step 2: Baggage claim",
              icon: "bag",
              emphasis: "Screens show your belt number.",
              body: "Carts are free and staff are nearby if you need help.",
            },
            {
              title: "Step 3: Customs",
              icon: "shield",
              emphasis: "Usually very fast.",
              body:
                "Most travelers walk through Nothing to Declare. Unless you have restricted items or large cash, it takes only seconds.",
            },
            {
              title: "What usually makes things slower",
              icon: "alert",
              emphasis: "Easy to avoid.",
              body: "Delays happen when:",
              bullets: [
                "You do not know your hotel name or address",
                "You cannot explain your travel purpose",
                "Arrival forms are incomplete",
              ],
            },
            {
              title: "Language concerns",
              icon: "hand",
              emphasis: "Do not stress.",
              body: "Officers use simple English and focus on documents.",
            },
            {
              title: "How long does it take?",
              icon: "calendar",
              emphasis: "Usually under an hour.",
              body: "Typical ranges:",
              bullets: [
                "Immigration: 10-30 minutes",
                "Baggage and customs: 10-20 minutes",
                "Longer during peak hours",
              ],
            },
            {
              title: "First impression tip",
              icon: "spark",
              emphasis: "Formal, not unfriendly.",
              body:
                "Officers may not smile much. Efficiency matters more than small talk.",
            },
            {
              title: "Final thought",
              icon: "spark",
              emphasis: "Documents ready, answers simple.",
              body:
                "If your documents are ready and your answers are simple, you will be on your way quickly.",
            },
          ],
        },
        {
          title: "What Is K-ETA?",
          slug: "what-is-k-eta",
          icon: "passport",
          image: "airport",
          description: "Do you need it or not?",
          quickAnswer:
            "This page helps you decide if you need K-ETA before traveling to Korea.",
          content: [
            {
              title: "What Is K-ETA?",
              icon: "passport",
              emphasis: "A quick yes-or-no question for most travelers.",
              body:
                "K-ETA is an online pre-approval system for travelers from certain countries. This page helps you decide if it matters to you.",
            },
            {
              title: "What K-ETA actually is",
              icon: "checklist",
              emphasis: "A digital permission to board.",
              body: "Think of it as:",
              bullets: [
                "A digital permission to board your flight",
                "Not a visa",
                "Not something everyone needs",
              ],
            },
            {
              title: "Do you need K-ETA?",
              icon: "spark",
              emphasis: "Check your passport, not your plan.",
              body: "Ask one question:",
              bullets: [
                "Does my passport require pre-travel authorization for Korea?",
                "Yes -> apply before your flight",
                "No -> skip it completely",
              ],
            },
            {
              title: "When K-ETA is usually required",
              icon: "passport",
              emphasis: "Short-term tourists from listed countries.",
              body: "More likely required if:",
              bullets: [
                "You are visiting as a tourist",
                "Your stay is short-term",
                "Your country is on the K-ETA-required list",
              ],
            },
            {
              title: "When you might be exempt",
              icon: "hand",
              emphasis: "Rules change, so always verify.",
              body: "Less likely required if:",
              bullets: [
                "You have a temporary exemption",
                "You hold a long-term visa",
                "You enter under a special agreement",
              ],
            },
            {
              title: "What happens if you need it and don't apply",
              icon: "alert",
              emphasis: "Usually stops you before boarding.",
              body: "Without K-ETA (if required):",
              bullets: [
                "Airlines may not let you board",
                "Immigration issues can occur before departure",
              ],
            },
            {
              title: "What K-ETA does NOT affect",
              icon: "shield",
              emphasis: "It does not guarantee entry.",
              body: "K-ETA does not:",
              bullets: [
                "Guarantee entry",
                "Replace immigration checks",
                "Control how long you stay",
              ],
            },
            {
              title: "Common misunderstandings",
              icon: "alert",
              emphasis: "Very common.",
              body: "Many travelers think:",
              bullets: [
                "I can do it at the airport",
                "My friend didn't need it, so I don't either",
                "It is the same as a visa",
              ],
            },
            {
              title: "What to do next",
              icon: "checklist",
              emphasis: "Keep it simple.",
              body: "Do this instead:",
              bullets: [
                "Confirm your passport's current requirement",
                "Apply only if needed",
                "Screenshot your approval if you apply",
              ],
            },
            {
              title: "Final thought",
              icon: "spark",
              emphasis: "Check once, decide once.",
              body:
                "K-ETA is not scary, but ignoring it can ruin a trip before it starts.",
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
              emphasis: "Minimum setup, maximum ease.",
              body:
                "Preparing for Korea means packing smarter and deciding a few key things before you leave. This is the minimum setup that makes everything easier.",
            },
            {
              title: "Start with the non-negotiables",
              icon: "passport",
              emphasis: "Three essentials.",
              body: "Make sure these are done:",
              bullets: [
                "Passport valid for your entire stay",
                "Entry requirement checked (visa or K-ETA if needed)",
                "Flight and first accommodation confirmed",
              ],
            },
            {
              title: "Your phone is your most important tool",
              icon: "sim",
              emphasis: "Install before you fly.",
              body: "Before you go:",
              bullets: [
                "Enable international payments on your card",
                "Make sure your phone is unlocked",
                "Install a map app and a translation app",
              ],
            },
            {
              title: "Money: keep it simple",
              icon: "wallet",
              emphasis: "Card + small cash.",
              body: "Prepare:",
              bullets: [
                "One card that works overseas",
                "A small amount of cash for emergencies",
              ],
            },
            {
              title: "What to save offline",
              icon: "checklist",
              emphasis: "Convenience, not paranoia.",
              body: "Save these offline:",
              bullets: [
                "Your hotel name and address",
                "Airport name you arrive at",
                "Emergency numbers",
              ],
            },
            {
              title: "What you probably don't need to worry about",
              icon: "hand",
              emphasis: "Keep it light.",
              body: "In reality:",
              bullets: [
                "Dress casually and comfortably",
                "Adapters are easy to buy locally",
                "Gifts are not expected",
              ],
            },
            {
              title: "One small item that helps a lot",
              icon: "bag",
              emphasis: "Portable charger.",
              body:
                "A dead battery causes more stress than almost anything else. Bring a portable charger.",
            },
            {
              title: "Final mental check",
              icon: "spark",
              emphasis: "If yes, you're ready.",
              body: "Ask yourself:",
              bullets: [
                "Do I know where I'm sleeping the first night?",
                "Can I access my money?",
                "Can I navigate if needed?",
              ],
            },
            {
              title: "Final thought",
              icon: "spark",
              emphasis: "Quiet preparation.",
              body:
                "If you arrive calm and flexible, you prepared exactly the right amount.",
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
              title: "From Airport to City",
              icon: "plane",
              emphasis: "Pick the option that matches your energy.",
              body:
                "Getting to your hotel is usually easier than expected. You only need to choose between rail, bus, or taxi.",
            },
            {
              title: "First decision: speed, comfort, or simplicity",
              icon: "checklist",
              emphasis: "All three work well.",
              body:
                "The best choice depends on how you feel after the flight, not on travel skills.",
            },
            {
              title: "Airport rail",
              icon: "train",
              emphasis: "Easiest for most travelers.",
              body: "Why people choose it:",
              bullets: [
                "Clear English signs",
                "Fixed routes",
                "No traffic delays",
                "Predictable and calm",
              ],
            },
            {
              title: "Airport bus",
              icon: "bus",
              emphasis: "Comfort with fewer transfers.",
              body: "Why people like it:",
              bullets: [
                "Direct to major neighborhoods and hotels",
                "Comfortable seats",
                "Luggage storage underneath",
              ],
            },
            {
              title: "Taxi",
              icon: "taxi",
              emphasis: "When you just want to arrive.",
              body: "Best if:",
              bullets: [
                "You arrive late at night",
                "You are tired or traveling in a group",
                "Cost matters less than comfort",
              ],
            },
            {
              title: "What usually causes confusion",
              icon: "alert",
              emphasis: "Easy to avoid.",
              body: "Most stress comes from:",
              bullets: [
                "Not knowing your hotel’s exact location",
                "Not recognizing the correct terminal",
                "Overthinking which option is best",
              ],
            },
            {
              title: "You don’t need to pre-book everything",
              icon: "hand",
              emphasis: "Decide after you land.",
              body:
                "All options are clearly signed after arrival. You can decide calmly once you land.",
            },
            {
              title: "First-time arrival tip",
              icon: "spark",
              emphasis: "Fewer decisions, fewer transfers.",
              body:
                "After a long flight, choose the method that feels comfortable. The goal is arriving relaxed.",
            },
            {
              title: "Final thought",
              icon: "spark",
              emphasis: "Not a test.",
              body:
                "Pick the option that matches your energy level. If you reach your hotel calm and rested, you chose correctly.",
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
              title: "Shopping in Seoul",
              icon: "bag",
              emphasis: "Go to the right area, not every area.",
              body:
                "Seoul shopping is about matching the neighborhood to your goal. Trying to visit every district leads to tired feet and wasted money.",
            },
            {
              title: "Myeongdong",
              icon: "tag",
              emphasis: "Easy, popular, tourist-friendly.",
              body: "Best for:",
              bullets: [
                "Cosmetics and skincare",
                "Gifts and easy browsing",
                "English-speaking staff",
                "Convenience over hidden deals",
              ],
            },
            {
              title: "Hongdae",
              icon: "spark",
              emphasis: "Trendy and creative.",
              body: "Best for:",
              bullets: [
                "Street fashion",
                "Independent brands",
                "Fun accessories and lifestyle items",
                "Browsing without rushing",
              ],
            },
            {
              title: "Dongdaemun",
              icon: "bag",
              emphasis: "Variety and late-night energy.",
              body: "Best for:",
              bullets: [
                "Massive shopping complexes",
                "Clothing, accessories, fabrics",
                "Late-night shopping in some areas",
                "Comparing before buying",
              ],
            },
            {
              title: "Garosugil and Apgujeong",
              icon: "spark",
              emphasis: "Design and premium style.",
              body: "Best for:",
              bullets: [
                "Korean designer brands",
                "Clean, modern stores",
                "Cafe plus shopping atmosphere",
                "Quality over quantity",
              ],
            },
            {
              title: "What usually causes shopping regret",
              icon: "alert",
              emphasis: "Wait if you are unsure.",
              body: "Most regrets come from:",
              bullets: [
                "Buying immediately without comparing",
                "Shopping tired or hungry",
                "Feeling rushed by crowds",
              ],
            },
            {
              title: "You don’t need to shop every day",
              icon: "hand",
              emphasis: "Fewer, better items.",
              body: "Good shopping happens when:",
              bullets: [
                "You know what you are looking for",
                "You choose the right area",
                "You leave with fewer, better items",
              ],
            },
            {
              title: "Final thought",
              icon: "spark",
              emphasis: "Match the place to your style.",
              body:
                "Choose one or two areas, take your time, and enjoy the process.",
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
              emphasis: "Local, relaxed, and practical.",
              body:
                "Busan shopping is less about trends and more about local life and relaxed browsing. This page helps you shop the Busan way.",
            },
            {
              title: "Gukje Market",
              icon: "pin",
              emphasis: "Local life in one place.",
              body: "Why people come here:",
              bullets: [
                "Local food stalls",
                "Clothing, bags, daily items",
                "Souvenirs locals actually use",
                "Busy but not tourist-only busy",
              ],
            },
            {
              title: "Jagalchi Market area",
              icon: "bowl",
              emphasis: "Food-focused shopping.",
              body: "Best for:",
              bullets: [
                "Seafood products",
                "Dried snacks and ingredients",
                "Food-related gifts",
                "Exploring even if you do not buy fish",
              ],
            },
            {
              title: "Seomyeon",
              icon: "city",
              emphasis: "Practical and central.",
              body: "Best for:",
              bullets: [
                "Department stores",
                "Underground shopping malls",
                "Fashion, cosmetics, cafes",
                "Convenience and indoor shopping",
              ],
            },
            {
              title: "Haeundae",
              icon: "beach",
              emphasis: "Relaxed, tourist-friendly.",
              body: "Best for:",
              bullets: [
                "Souvenir shops",
                "Cafes and lifestyle stores",
                "Small local brands",
                "Easy shopping near the beach",
              ],
            },
            {
              title: "What makes Busan shopping enjoyable",
              icon: "spark",
              emphasis: "Slow and casual.",
              body: "Busan shopping works best when:",
              bullets: [
                "You are not rushing",
                "You browse casually",
                "You focus on experience, not volume",
              ],
            },
            {
              title: "Common mistake to avoid",
              icon: "alert",
              emphasis: "Don't shop Busan like Seoul.",
              body: "Busan rewards slow walking, curiosity, and small discoveries.",
            },
            {
              title: "Final thought",
              icon: "spark",
              emphasis: "One market, one neighborhood, one memory.",
              body:
                "Shopping in Busan is about finding something that fits your trip, not chasing a must-buy list.",
            },
          ],
        },
        {
          title: "Tax Refund Explained",
          slug: "tax-refund-explained",
          icon: "receipt",
          image: "shopping",
          description: "How to get money back.",
          quickAnswer:
            "This page helps you understand how tax refunds work before you shop.",
          content: [
            {
              title: "Tax Refund Explained",
              icon: "receipt",
              emphasis: "Simple once you know the flow.",
              body:
                "Korea offers tax refunds for foreign visitors. If you know how it works, you can leave with money back.",
            },
            {
              title: "Who can get a tax refund?",
              icon: "passport",
              emphasis: "Most tourists qualify.",
              body: "You can usually get a refund if:",
              bullets: [
                "You are a short-term visitor",
                "You stay in Korea less than the allowed period",
                "You buy items for personal use",
              ],
            },
            {
              title: "What kind of shopping qualifies?",
              icon: "bag",
              emphasis: "Shopping items, not daily necessities.",
              body: "Usually applies to:",
              bullets: [
                "Cosmetics and skincare",
                "Clothing and fashion items",
                "Shoes, bags, accessories",
                "Electronics and souvenirs",
              ],
            },
            {
              title: "Immediate tax-free shopping",
              icon: "card",
              emphasis: "Easiest option.",
              body: "At Tax Free stores:",
              bullets: [
                "Show your passport at checkout",
                "Tax is removed immediately",
                "You pay the reduced price",
              ],
            },
            {
              title: "Post-purchase refund",
              icon: "receipt",
              emphasis: "Refund at the airport.",
              body: "At refund-eligible stores:",
              bullets: [
                "Pay full price",
                "Receive a refund receipt",
                "Claim the refund at the airport",
              ],
            },
            {
              title: "What to do at the airport",
              icon: "plane",
              emphasis: "Plan a little extra time.",
              body: "Typical steps:",
              bullets: [
                "Go to the tax refund kiosks",
                "Scan passport and receipts",
                "Sometimes show purchased items",
                "Receive cash or card refund",
              ],
            },
            {
              title: "Small tip that makes a big difference",
              icon: "checklist",
              emphasis: "Keep receipts together.",
              body: "Use a small envelope or pouch to save time and avoid lost refunds.",
            },
            {
              title: "Common mistakes to avoid",
              icon: "alert",
              emphasis: "Easy to prevent.",
              body: "Avoid:",
              bullets: [
                "Throwing receipts away",
                "Packing items in checked luggage before validation",
                "Arriving at the airport too late",
              ],
            },
            {
              title: "Do you need exact rules and limits?",
              icon: "shield",
              emphasis: "Always confirm official details.",
              body: "Refund rules can change. Check:",
              bullets: [
                "Official airport information",
                "Government or tax refund service websites",
                "Store staff at checkout",
              ],
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Preparation pays you back.",
              body:
                "Tax refunds are not complicated once you know the flow. A few minutes of preparation can mean extra cash.",
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
              title: "How to Get Discounts",
              icon: "tag",
              emphasis: "Use discounts that fit your plan.",
              body:
                "Korea can feel affordable or surprisingly expensive. The difference is knowing where discounts actually help.",
            },
            {
              title: "Start with one important truth",
              icon: "alert",
              emphasis: "Not every discount is a good deal.",
              body: "Some offers:",
              bullets: [
                "Require rushing",
                "Lock you into fixed schedules",
                "Cost more in time and stress",
              ],
            },
            {
              title: "Tourist cards",
              icon: "card",
              emphasis: "Useful, but not always.",
              body: "They work best if:",
              bullets: [
                "You visit many paid attractions in a short time",
                "Your days are already busy",
                "You will really use them every day",
              ],
            },
            {
              title: "Department store and brand discounts",
              icon: "bag",
              emphasis: "Ask at checkout.",
              body: "Large stores sometimes offer:",
              bullets: [
                "Tourist discount coupons",
                "Seasonal sales",
                "Card-based promotions",
              ],
            },
            {
              title: "Duty-free shopping",
              icon: "tag",
              emphasis: "Best for items you already wanted.",
              body: "Good for:",
              bullets: [
                "Cosmetics and skincare",
                "Alcohol and gifts",
                "Items you planned to buy anyway",
              ],
            },
            {
              title: "Public transport savings",
              icon: "train",
              emphasis: "Small habits add up.",
              body: "Simple habits:",
              bullets: [
                "Use one transit card",
                "Make transfers instead of separate rides",
                "Walk short distances when possible",
              ],
            },
            {
              title: "Events and seasonal perks",
              icon: "spark",
              emphasis: "Nice bonus, not required.",
              body: "Special events can mean:",
              bullets: [
                "Free shows",
                "Free entry",
                "Bonus experiences",
              ],
            },
            {
              title: "Common discount mistakes",
              icon: "alert",
              emphasis: "If it changes your plan too much, skip it.",
              body: "Avoid:",
              bullets: [
                "Buying passes just in case",
                "Chasing deals far from your route",
                "Forgetting refund or usage conditions",
              ],
            },
            {
              title: "Where to check real, updated deals",
              icon: "shield",
              emphasis: "Always verify.",
              body: "For current promotions, check:",
              bullets: [
                "Official tourism offices",
                "Department store information desks",
                "Airport or city travel centers",
              ],
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Plan first, discounts second.",
              body:
                "If saving money feels easy, you are doing it right.",
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
                "Shopping in Korea is exciting, but not everything is a bargain. The key is knowing what is worth buying here.",
            },
            {
              title: "What is usually worth buying",
              icon: "spark",
              emphasis: "Best value categories.",
              body: "Most travelers feel good about:",
              bullets: [
                "Skincare and cosmetics",
                "Local snacks and food gifts",
                "Small lifestyle items like stationery or accessories",
              ],
            },
            {
              title: "What is often NOT a good deal",
              icon: "alert",
              emphasis: "Tempting but disappointing.",
              body: "Usually not great value:",
              bullets: [
                "Global brand clothing",
                "Electronics with warranty or voltage issues",
                "Large or heavy items that are hard to pack",
              ],
            },
            {
              title: "Street markets and local stalls",
              icon: "pin",
              emphasis: "Compare before buying.",
              body: "Best approach:",
              bullets: [
                "Compare prices casually",
                "Do not buy the first thing you see",
                "Walk one street further",
              ],
            },
            {
              title: "Luxury shopping",
              icon: "spark",
              emphasis: "Only if you planned it anyway.",
              body: "Luxury makes sense only if:",
              bullets: [
                "You planned to buy it anyway",
                "Tax refunds apply",
                "Exchange rates work in your favor",
              ],
            },
            {
              title: "Common shopping mistakes",
              icon: "alert",
              emphasis: "Avoid stress.",
              body: "Avoid:",
              bullets: [
                "Buying bulky items late in the trip",
                "Assuming all Made in Korea items are cheap",
                "Shopping without checking tax refund eligibility",
              ],
            },
            {
              title: "Where to check current prices and rules",
              icon: "shield",
              emphasis: "Always confirm official details.",
              body: "Check:",
              bullets: [
                "Official tourism information centers",
                "Store service desks",
                "Airport tax refund counters",
              ],
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Buy the right things, not everything.",
              body:
                "If you come home with items you actually use, you shopped well.",
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
      description: "Official sources to confirm details that can change.",
      quickAnswer:
        "Use this page as your final checkpoint before booking or moving.",
      content: [
        {
          title: "Latest Travel Updates for Korea",
          icon: "shield",
          emphasis: "Official sources to confirm details that can change.",
          body:
            "Travel information can change faster than any guidebook. This page exists so you can confirm the latest rules, prices, and conditions using official and trusted sources — without searching all over the internet.",
        },
        {
          title: "Final checkpoint",
          icon: "checklist",
          emphasis: "Use this page after you decide where to go and how long to stay.",
          body: "Think of it as the final checkpoint before booking or moving.",
          bullets: [
            "This site helps you decide.",
            "Official sources help you confirm.",
          ],
        },
        {
          title: "Entry & Immigration Updates",
          icon: "passport",
          emphasis:
            "Entry rules and authorization depend on your nationality and can change without notice.",
          body: "Always confirm your entry status before flying.",
          bullets: [
            "K-ETA (Official Authorization System): https://www.k-eta.go.kr",
            "Arrival / Immigration – Incheon Airport: https://www.airport.kr/ap_en/1439/subview.do",
          ],
        },
        {
          title: "Transportation & Airport Information",
          icon: "train",
          emphasis:
            "Train schedules, airport procedures, and transit prices may vary during holidays or peak seasons.",
          body:
            "Train schedules, airport procedures, and transit prices may vary during holidays or peak seasons.",
          bullets: [
            "Incheon International Airport: https://www.airport.kr/sites/ap_en/index.do",
            "Korail (KTX & Trains): https://www.korail.com/global/eng/main",
            "AREX (Airport Railroad): https://www.arex.or.kr/main.do",
            "Seoul Public Transportation: https://english.seoul.go.kr/service/movement/public-transportation/",
            "Busan Public Transportation: https://www.busan.go.kr/eng/public-transportation",
          ],
        },
        {
          title: "Weather & Seasonal Travel Conditions",
          icon: "cloud",
          emphasis:
            "Weather affects travel more than most people expect, especially in summer and winter.",
          body:
            "Weather affects travel more than most people expect, especially in summer and winter.",
          bullets: [
            "Korea Meteorological Administration: https://www.kma.go.kr/neng/index.do",
          ],
        },
        {
          title: "City Tourism Offices (Opening Hours & Closures)",
          icon: "pin",
          emphasis: "Attraction hours, festivals, and closures are updated by each city.",
          body: "Attraction hours, festivals, and closures are updated by each city.",
          bullets: [
            "Korea Tourism Organization: https://english.visitkorea.or.kr/",
            "Seoul Tourism Organization: https://english.visitseoul.net/",
            "Busan Tourism Organization: https://www.visitbusan.net/en/index.do",
            "Jeju Tourism Organization: https://www.visitjeju.net/en",
            "Gyeongju Tourism: https://www.gyeongju.go.kr/tour/index.do",
            "Jeonju Tourism: https://tour.jeonju.go.kr/eng/index.jeonju",
          ],
        },
        {
          title: "Safety, Emergencies & Travel Notices",
          icon: "alert",
          emphasis:
            "Korea is generally very safe, but it’s smart to know where to check official guidance.",
          body: "Save emergency numbers and check official notices if needed.",
          bullets: [
            "Emergency Numbers: Police 112, Fire / Ambulance 119",
            "Ministry of Foreign Affairs – Travel Notices: https://www.mofa.go.kr",
            "Your country’s embassy in Korea: check your official embassy website",
          ],
        },
        {
          title: "Payments, Shopping & Tax Refunds",
          icon: "wallet",
          emphasis: "Tax refund rules and payment methods vary by store and location.",
          body: "Tax refund rules and payment methods vary by store and location.",
          bullets: [
            "Korea Customs Service: https://www.customs.go.kr/english/main.do",
            "Global Tax Free Korea: https://www.global-taxfree.com/?lang=en#1",
          ],
        },
        {
          title: "How to Use This Page",
          icon: "spark",
          emphasis: "Use this page after you decide where to go and how long to stay.",
          body: "Many travelers return to this page just before booking or traveling.",
          bullets: [
            "Decide your trip using our guides.",
            "Come here to confirm what changes.",
            "Book or move with confidence.",
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

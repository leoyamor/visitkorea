export type TreeNode = {
  title: string;
  slug: string;
  description?: string;
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
                "Beaches, seafood, slower evenings, and a relaxed pace. More than four days is usually unnecessary.",
            },
            {
              title: "Third: One slower region (3-4 days)",
              icon: "leaf",
              emphasis: "Keep this part light.",
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
                "Daily life is easy, transport is strong, and neighborhoods feel endless. Two weeks makes the city feel natural, not overwhelming.",
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
              body: "You don't need:",
              bullets: [
                "Daily schedules",
                "Attraction lists",
                "Restaurant plans",
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
                "Safe, even at night",
                "Clean and well-organized",
                "Easy to move around",
                "Full of food and convenience stores",
              ],
            },
            {
              title: "What feels unfamiliar at first",
              icon: "alert",
              emphasis: "Small challenges, not serious ones.",
              body: "The main challenges are:",
              bullets: [
                "Language differences",
                "Knowing which apps to use",
                "Understanding daily routines",
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
                "Cash is still useful in small places",
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
                "Overplanning the first days",
                "Relying only on taxis",
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
          content: [
            {
              title: "Been Here Before?",
              icon: "spark",
              emphasis: "Not more sights. Better days.",
              body:
                "If this isn't your first trip to Korea, you already know the basics. This guide helps you travel differently, with a slower pace and better rhythm.",
            },
            {
              title: "How a second trip should feel",
              icon: "leaf",
              emphasis: "Depth matters more than highlights.",
              body: "A repeat visit works best when you:",
              bullets: [
                "Move less",
                "Stay longer",
                "Slow the pace",
              ],
            },
            {
              title: "The simple shift that changes everything",
              icon: "route",
              emphasis: "Ask how you want your days to feel.",
              body:
                "Instead of asking what you should see, ask how you want your days to feel. That question leads to better choices.",
            },
            {
              title: "What works well on second visits",
              icon: "checklist",
              emphasis: "Less movement. More rhythm.",
              body: "These ideas consistently make trips better:",
              bullets: [
                "Staying 2-3 nights in a smaller city",
                "Exploring neighborhoods, not landmarks",
                "Adding one nature-focused day per week",
                "Spending mornings without a fixed plan",
              ],
            },
            {
              title: "Season matters more than places",
              icon: "calendar",
              emphasis: "Timing beats novelty.",
              body: "Second trips are perfect for:",
              bullets: [
                "Spring flowers",
                "Autumn foliage",
                "Summer coastal cities",
                "Winter food-focused travel",
              ],
            },
            {
              title: "What usually goes wrong",
              icon: "alert",
              emphasis: "Intentional beats different.",
              body: "Even experienced travelers sometimes:",
              bullets: [
                "Repeat the same itinerary",
                "Add too many cities again",
                "Chase hidden spots without slowing down",
              ],
            },
            {
              title: "What you can skip without regret",
              icon: "hand",
              emphasis: "Your trip doesn't need validation.",
              body: "You don't need to:",
              bullets: [
                "Revisit every major attraction",
                "Follow top 10 lists again",
                "Prove you saw more than last time",
              ],
            },
            {
              title: "One quick reminder",
              icon: "shield",
              emphasis: "Always double-check important details.",
              body:
                "Local spots, seasonal events, and regional details can change. Always confirm important information through current or official sources.",
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Calmer and more personal.",
              body:
                "A second trip should feel familiar instead of rushed. If your days feel calm and personal, you planned it right.",
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
          content: [
            {
              title: "Seoul",
              icon: "city",
              emphasis: "The easiest first base for most travelers.",
              body:
                "Seoul brings transport, food, culture, and daily convenience into one system that works for visitors. It feels big, but it is manageable once you see how the city is structured.",
            },
            {
              title: "Why Seoul works so well for travelers",
              icon: "train",
              emphasis: "Built for movement.",
              body:
                "Subways are frequent, signs are bilingual, and neighborhoods are clearly defined. You do not need a car, perfect Korean, or a detailed plan to enjoy Seoul.",
            },
            {
              title: "What Seoul is best for",
              icon: "spark",
              emphasis: "City energy without chaos.",
              body: "Seoul fits travelers who like:",
              bullets: [
                "Easy access to food at all hours",
                "Mixing history and modern life in one day",
                "Shopping, cafes, museums, and neighborhoods",
                "A strong public transport system",
              ],
            },
            {
              title: "How long to stay in Seoul",
              icon: "calendar",
              emphasis: "Seoul rewards slower exploration.",
              body: "Most travelers feel comfortable with:",
              bullets: [
                "3-4 days as part of a short trip",
                "5-6 days if Seoul is your main base",
              ],
            },
            {
              title: "How to use Seoul without burning out",
              icon: "route",
              emphasis: "Think small cities, not one giant attraction.",
              body: "A better approach:",
              bullets: [
                "Stay in one area",
                "Explore one or two nearby neighborhoods per day",
                "Use cafes, parks, and food breaks as part of the plan",
              ],
            },
            {
              title: "Where Seoul really shines",
              icon: "temple",
              emphasis: "Variety, not one landmark.",
              body: "In a single day, you can:",
              bullets: [
                "Walk past royal palaces",
                "Eat in a local market",
                "Ride a subway 10 minutes",
                "End the night in a modern shopping or nightlife area",
              ],
            },
            {
              title: "Common mistakes to avoid",
              icon: "alert",
              emphasis: "Efficient on paper, exhausting in real life.",
              body: "Avoid these:",
              bullets: [
                "Trying to visit too many districts in one day",
                "Changing hotels to save time",
                "Overplanning attractions instead of neighborhoods",
                "Treating Seoul as a checklist instead of a base",
              ],
            },
            {
              title: "What you don't need to decide yet",
              icon: "hand",
              emphasis: "Decide after you see distances.",
              body: "You don't need to pick:",
              bullets: [
                "Exact attractions",
                "Restaurant lists",
                "Daily schedules",
              ],
            },
            {
              title: "About updated information",
              icon: "shield",
              emphasis: "Use official sources to confirm.",
              body:
                "Neighborhood trends, events, and transportation details change over time. For the latest maps, routes, and city updates, always confirm through official city tourism or public transport channels.",
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Stay put. Move smart. Explore slowly.",
              body:
                "Seoul is not overwhelming when you use it correctly. If you finish your stay feeling curious instead of tired, you chose the city and the pace well.",
            },
          ],
        },
        {
          title: "Busan",
          slug: "busan",
          icon: "beach",
          image: "beach",
          description: "Beaches, seafood, and a relaxed vibe.",
          content: [
            {
              title: "Busan",
              icon: "beach",
              emphasis: "Slower, more open, easier to breathe.",
              body:
                "Busan feels different from Seoul in a good way. If Seoul is energy and movement, Busan is space and rhythm.",
            },
            {
              title: "Why Busan works so well on a short trip",
              icon: "spark",
              emphasis: "Choose where to stay. Skip the checklist.",
              body: "Busan is big but simple to enjoy. The city divides into:",
              bullets: [
                "Beach areas",
                "Local food neighborhoods",
                "Easy city hubs",
              ],
            },
            {
              title: "Seafood without overthinking it",
              icon: "bowl",
              emphasis: "Where you eat matters more than a list.",
              body: "Look for places:",
              bullets: [
                "Near the sea",
                "Near local markets",
                "Not inside tourist-only streets",
                "Busy with locals around dinner time",
              ],
            },
            {
              title: "Beach area or city area?",
              icon: "route",
              emphasis: "This choice decides your trip.",
              body: "Ask yourself one question: sea mornings or easy transport?",
              bullets: [
                "Beach areas: slower days, sea walks, calm evenings",
                "City areas: faster transport, more food options, easier transfers",
                "Mixing them too much causes stress",
              ],
            },
            {
              title: "How long is right for Busan?",
              icon: "calendar",
              emphasis: "2 to 4 days works for most travelers.",
              body: "That is enough to:",
              bullets: [
                "Enjoy the coast",
                "Eat well",
                "Rest between travel days",
              ],
            },
            {
              title: "What usually makes Busan disappointing",
              icon: "alert",
              emphasis: "Let the day stretch.",
              body: "Common mistakes include:",
              bullets: [
                "Staying far from the area you want to explore",
                "Planning too many beaches in one day",
                "Treating Busan like a checklist city",
              ],
            },
            {
              title: "When Busan is the perfect choice",
              icon: "spark",
              emphasis: "A balance after Seoul.",
              body: "Busan is ideal if you want:",
              bullets: [
                "A break after Seoul",
                "Ocean views without island logistics",
                "Good food without planning stress",
              ],
            },
            {
              title: "About prices, events, and seasonal details",
              icon: "shield",
              emphasis: "Always confirm current details.",
              body:
                "Beach conditions, festivals, and transport details change by season. Use this page to decide, then confirm dates, prices, and schedules through official city or transport sources.",
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Enjoy what you already chose.",
              body:
                "Busan is not about doing more. If you finish Busan feeling rested, you planned it right.",
            },
          ],
        },
        {
          title: "Jeju",
          slug: "jeju",
          icon: "island",
          image: "island",
          description: "Nature, driving, and island life.",
          content: [
            {
              title: "Jeju",
              icon: "island",
              emphasis: "Slow, wide, and quiet.",
              body:
                "Jeju is not just another city. It feels like a different country inside Korea. This guide helps you decide if you will love it or feel frustrated.",
            },
            {
              title: "What Jeju is really like",
              icon: "leaf",
              emphasis: "Jeju is about space.",
              body: "More sky, more ocean, more distance. It is ideal if you want:",
              bullets: [
                "Nature over nightlife",
                "Scenery over shopping",
                "Calm days over packed schedules",
              ],
            },
            {
              title: "One honest question before you choose Jeju",
              icon: "car",
              emphasis: "Are you comfortable driving?",
              body:
                "Jeju is easiest with a car. Without one, your day follows bus schedules and some spots become stressful or unreachable.",
              bullets: [
                "With a car: choose your pace and reach beaches, trails, and cafes easily",
                "Without a car: you will wait more and see less",
              ],
            },
            {
              title: "How long Jeju actually needs",
              icon: "calendar",
              emphasis: "Jeju works best with time.",
              body: "Recommended stay:",
              bullets: [
                "Minimum: 3 nights",
                "Comfortable: 4-5 nights",
                "One slow arrival day, two full days, one flexible weather day",
              ],
            },
            {
              title: "Where to stay (keep it simple)",
              icon: "bed",
              emphasis: "Choose one base.",
              body: "Jeju is bigger than it looks. Two practical choices:",
              bullets: [
                "Near Jeju City: good for arrivals, food, and short drives",
                "Near Seogwipo: closer to waterfalls, coastlines, and nature",
                "Switching hotels wastes hours on this island",
              ],
            },
            {
              title: "What Jeju is best for",
              icon: "spark",
              emphasis: "Jeju shines when you stop rushing.",
              body: "Perfect for:",
              bullets: [
                "Scenic coastal drives",
                "Easy hikes and nature walks",
                "Cafes with views",
                "Quiet evenings",
              ],
            },
            {
              title: "What Jeju is not ideal for",
              icon: "alert",
              emphasis: "Not built for tight schedules.",
              body: "Less ideal for:",
              bullets: [
                "Nightlife",
                "Dense sightseeing days",
                "Shopping-focused trips",
              ],
            },
            {
              title: "What usually goes wrong",
              icon: "alert",
              emphasis: "Jeju rewards patience, not efficiency.",
              body: "Common mistakes:",
              bullets: [
                "Visiting for only 1-2 nights",
                "Planning too many stops per day",
                "Expecting city-style convenience",
                "Underestimating driving time",
              ],
            },
            {
              title: "What you don't need to plan yet",
              icon: "hand",
              emphasis: "Details come later.",
              body: "You don't need:",
              bullets: [
                "A full driving route",
                "Cafe lists",
                "Exact attraction names",
                "Weather and season will shape the final plan",
              ],
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Jeju fits travelers who want slower days.",
              body:
                "Jeju is not for everyone. If you want space, nature, and calm, it is unforgettable. If you need constant movement and urban energy, choose another city this time.",
            },
          ],
        },
        {
          title: "Gyeongju",
          slug: "gyeongju",
          icon: "temple",
          image: "heritage",
          description: "History everywhere you walk.",
          content: [
            {
              title: "Gyeongju",
              icon: "temple",
              emphasis: "Quiet, spacious, and deeply Korean.",
              body:
                "Gyeongju is not a city you rush through. History is under your feet, beside the road, and across the park. It carries the calm rhythm of Korea's ancient capital.",
            },
            {
              title: "Why Gyeongju works so well for travelers",
              icon: "spark",
              emphasis: "Walk more than you commute.",
              body: "Most major sights are close together, flat, and easy to explore. That means:",
              bullets: [
                "You walk more than you commute",
                "You explore without constant phone-checking",
                "You feel history instead of chasing it",
              ],
            },
            {
              title: "How much time is enough?",
              icon: "calendar",
              emphasis: "Overnight feels right.",
              body: "For most travelers:",
              bullets: [
                "1 full day is the minimum",
                "1 night + 2 days feels ideal",
                "A calm break between Seoul and Busan works best",
              ],
            },
            {
              title: "What makes Gyeongju different",
              icon: "route",
              emphasis: "Not a checklist city.",
              body: "It is about:",
              bullets: [
                "Walking past royal tombs at sunset",
                "Biking between temples and fields",
                "Sitting longer and moving slower",
              ],
            },
            {
              title: "Best way to explore",
              icon: "route",
              emphasis: "Simple transport is the experience.",
              body: "Gyeongju is friendly for:",
              bullets: [
                "Walking",
                "Biking",
                "Short taxi rides",
              ],
            },
            {
              title: "Who will enjoy Gyeongju most?",
              icon: "leaf",
              emphasis: "Great for calm travelers.",
              body: "A great fit if you:",
              bullets: [
                "Enjoy history without crowds",
                "Prefer calm cities over nightlife",
                "Want space between busy destinations",
              ],
            },
            {
              title: "Common mistakes to avoid",
              icon: "alert",
              emphasis: "Staying overnight changes everything.",
              body: "Many visitors:",
              bullets: [
                "Try to squeeze Gyeongju into a half-day",
                "Treat it like a checklist stop",
                "Leave before nightfall",
              ],
            },
            {
              title: "One important thing to remember",
              icon: "hand",
              emphasis: "Not flashy, but unforgettable.",
              body: "If you are looking for clubs, shopping streets, or fast entertainment, this may not be your place. But if you want space, silence, and slow stories, Gyeongju quietly delivers.",
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Where Korea slows down.",
              body:
                "If your trip feels too full, this is the city that restores balance.",
            },
          ],
        },
        {
          title: "Jeonju",
          slug: "jeonju",
          icon: "bowl",
          image: "food",
          description: "Food and traditional streets.",
          content: [
            {
              title: "Jeonju",
              icon: "bowl",
              emphasis: "A city you taste and stroll.",
              body:
                "Jeonju slows you down. It is one of the best places in Korea for traditional streets without pressure or crowds.",
            },
            {
              title: "Why Jeonju works so well in a Korea trip",
              icon: "spark",
              emphasis: "Compact, walkable, calm.",
              body: "Most travelers come for three reasons:",
              bullets: [
                "Food that is easy to love",
                "Traditional streets that feel lived-in, not staged",
                "A slower pace that fits between bigger cities",
              ],
            },
            {
              title: "How much time is enough?",
              icon: "calendar",
              emphasis: "One night feels right.",
              body: "For most travelers:",
              bullets: [
                "One night is ideal",
                "Two days is comfortable",
                "A short break between big cities works best",
              ],
            },
            {
              title: "What Jeonju is best known for",
              icon: "bowl",
              emphasis: "Comfort food, not extreme flavors.",
              body: "You will notice:",
              bullets: [
                "Balanced tastes",
                "Clear ingredients",
                "Comfort food that does not overwhelm",
              ],
            },
            {
              title: "The streets are the experience",
              icon: "route",
              emphasis: "Walk more, plan less.",
              body: "That is why:",
              bullets: [
                "Walking is the main activity",
                "Small cafes and shops matter more than landmarks",
                "The atmosphere changes beautifully from day to night",
              ],
            },
            {
              title: "Who will enjoy Jeonju most?",
              icon: "leaf",
              emphasis: "Great for slow travel.",
              body: "A great choice if you:",
              bullets: [
                "Love food-focused travel",
                "Enjoy traditional settings without crowds",
                "Prefer walking cities over transport-heavy ones",
              ],
            },
            {
              title: "Common mistakes to avoid",
              icon: "alert",
              emphasis: "Staying overnight changes the mood.",
              body: "Many travelers:",
              bullets: [
                "Visit only as a rushed day trip",
                "Focus only on one famous street",
                "Leave before evening",
              ],
            },
            {
              title: "One thing to keep in mind",
              icon: "hand",
              emphasis: "Less, but better.",
              body: "If you want nightclubs, big shopping districts, or constant movement, Jeonju may feel quiet. If you want long walks, good food without stress, and a calm city, Jeonju fits beautifully.",
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Warmth, flavor, and space to breathe.",
              body:
                "Jeonju is where Korea feels comfortable. If your trip needs warmth and a slower pace, this city gives it to you.",
            },
          ],
        },
        {
          title: "Which City Fits You Best?",
          slug: "which-city-fits-you-best",
          icon: "spark",
          image: "planning",
          description: "Pick a city based on your travel style.",
          content: [
            {
              title: "Which City Fits You Best?",
              icon: "spark",
              emphasis: "There is a right city for your style.",
              body:
                "Choosing the right city matters more than choosing the famous one. This guide helps you decide without endless comparisons.",
            },
            {
              title: "Start with how you like to travel",
              icon: "route",
              emphasis: "Think about your days, not city names.",
              body: "Do you prefer:",
              bullets: [
                "Busy streets or quiet walks?",
                "Food-focused days or nature breaks?",
                "Easy transport or open-road freedom?",
              ],
            },
            {
              title: "If you like energy, food, and variety",
              icon: "city",
              emphasis: "Major city base.",
              body: "You enjoy:",
              bullets: [
                "Walking different neighborhoods every day",
                "Trying many foods in one trip",
                "Shopping, cafes, museums, nightlife",
                "Excellent public transport and short-distance plans",
              ],
            },
            {
              title: "If you want contrast and a slower rhythm",
              icon: "beach",
              emphasis: "Change of pace after a big city.",
              body: "You enjoy:",
              bullets: [
                "Scenic walks and open views",
                "Calmer evenings and earlier nights",
                "Nature and city life mixed together",
              ],
            },
            {
              title: "If food is your main reason for traveling",
              icon: "bowl",
              emphasis: "Compact and walkable.",
              body: "You travel to:",
              bullets: [
                "Eat well, not just see sights",
                "Walk between meals",
                "Enjoy atmosphere more than attractions",
              ],
            },
            {
              title: "If history and calm matter most",
              icon: "temple",
              emphasis: "Smaller historical cities.",
              body: "You enjoy:",
              bullets: [
                "Quiet mornings",
                "Walking instead of commuting",
                "Places that feel layered, not flashy",
              ],
            },
            {
              title: "If freedom matters more than convenience",
              icon: "car",
              emphasis: "The journey is part of the trip.",
              body: "You prefer:",
              bullets: [
                "Driving at your own pace",
                "Nature over nightlife",
                "Fewer crowds and looser plans",
              ],
            },
            {
              title: "Common mistake to avoid",
              icon: "alert",
              emphasis: "Ask the right question.",
              body:
                "The question is not which city is best. It is which city fits how you travel. Trying to visit every type in one short trip leads to constant packing and less enjoyment.",
            },
            {
              title: "How to use this page",
              icon: "checklist",
              emphasis: "Narrow, then confirm.",
              body: "Use this page to:",
              bullets: [
                "Narrow your options",
                "Choose a main base",
                "Decide where to slow down",
                "Then use the city pages to confirm details",
              ],
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "The right city makes everything easier.",
              body:
                "There is no perfect city for everyone. But there is a right city for you. Once that choice is clear, the rest of your trip becomes much easier.",
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
          content: [
            {
              title: "Is Getting Around Hard?",
              icon: "train",
              emphasis: "For most travelers, it's easier than expected.",
              body:
                "Korea's transport is modern, reliable, and designed for daily use. Once you know the basics, it becomes one of the least stressful parts of your trip.",
            },
            {
              title: "The short answer",
              icon: "spark",
              emphasis: "No, it is not hard.",
              body: "For visitors:",
              bullets: [
                "Public transport is frequent",
                "Signs are clear and often bilingual",
                "Cities are built around transit, not cars",
              ],
            },
            {
              title: "What actually makes transportation easy",
              icon: "route",
              emphasis: "One system, used by everyone.",
              body:
                "Subways, buses, and transfers are connected, so you do not need to relearn each time. Locals use the same system you do. That is why it works so well.",
            },
            {
              title: "What first-time visitors usually worry about",
              icon: "alert",
              emphasis: "Unfamiliar, not complicated.",
              body: "Common worries:",
              bullets: [
                "Will I get lost?",
                "What if I cannot read Korean?",
                "Is it expensive?",
                "What if I make a mistake?",
              ],
            },
            {
              title: "The reality",
              icon: "shield",
              emphasis: "You are rarely stuck.",
              body: "In practice:",
              bullets: [
                "Getting lost is rare if you follow stations and exits",
                "You do not need to speak Korean to use transport",
                "Public transport is affordable",
                "Mistakes are easy to fix",
              ],
            },
            {
              title: "How people actually get around",
              icon: "train",
              emphasis: "Mix modes naturally.",
              body: "Most travelers use:",
              bullets: [
                "Subways for longer distances",
                "Buses for local routes",
                "Taxis late at night or when tired",
              ],
            },
            {
              title: "What you don't need to overthink",
              icon: "hand",
              emphasis: "Trust the system.",
              body: "You do not need:",
              bullets: [
                "Perfect route planning",
                "Local-level knowledge",
                "Backup plans for every ride",
              ],
            },
            {
              title: "A common mistake to avoid",
              icon: "alert",
              emphasis: "Simple beats complex.",
              body: "Many visitors:",
              bullets: [
                "Assume transport will be confusing",
                "Default to taxis too often",
                "Over-plan routes instead of trusting the system",
              ],
            },
            {
              title: "How this page helps you",
              icon: "checklist",
              emphasis: "Confidence first.",
              body: "Use this page to:",
              bullets: [
                "Feel confident before arrival",
                "Understand the overall ease of movement",
                "Stop transport anxiety from shaping your itinerary",
                "Then read the detailed guides later",
              ],
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Transport works with you.",
              body:
                "Once you trust the system, moving around becomes routine, not a problem to solve.",
            },
          ],
        },
        {
          title: "Using the Subway",
          slug: "using-the-subway",
          icon: "train",
          image: "transport",
          description: "Tickets, cards, and how to pay.",
          content: [
            {
              title: "Using the Subway",
              icon: "train",
              emphasis: "If you can use a subway anywhere, you can use it here.",
              body:
                "Korea's subway is fast, clean, affordable, and designed for everyone. Most travelers feel comfortable after their first ride.",
            },
            {
              title: "The one thing you really need to know",
              icon: "card",
              emphasis: "You do not need single tickets.",
              body:
                "Almost everyone uses a transportation card. You tap in, ride, and tap out. Once you have a card, the subway becomes automatic.",
            },
            {
              title: "How paying actually works",
              icon: "wallet",
              emphasis: "Simple and automatic.",
              body: "Here is the simple version:",
              bullets: [
                "Buy one transportation card",
                "Add some money to it",
                "Use it for every subway ride",
                "You do not need to calculate fares or zones",
              ],
            },
            {
              title: "What stations are like",
              icon: "pin",
              emphasis: "Exit numbers matter most.",
              body: "Stations are:",
              bullets: [
                "Clearly numbered",
                "Well signposted",
                "Often bilingual",
                "Exit numbers save time and walking",
              ],
            },
            {
              title: "What first-time riders worry about",
              icon: "alert",
              emphasis: "Most worries fade quickly.",
              body: "Common worries:",
              bullets: [
                "Reading Korean",
                "Choosing the wrong line",
                "Paying incorrectly",
              ],
            },
            {
              title: "The reality",
              icon: "shield",
              emphasis: "Mistakes are easy to fix.",
              body: "In practice:",
              bullets: [
                "Station names are romanized",
                "Line colors and numbers are consistent",
                "Gates will not let you through if something is wrong",
              ],
            },
            {
              title: "What you don't need to stress about",
              icon: "hand",
              emphasis: "Keep it simple.",
              body: "You do not need:",
              bullets: [
                "A daily subway pass",
                "Perfect route memorization",
                "Local-level knowledge",
              ],
            },
            {
              title: "A common mistake to avoid",
              icon: "alert",
              emphasis: "The subway is almost always better.",
              body: "Some travelers:",
              bullets: [
                "Buy single tickets repeatedly",
                "Avoid the subway out of fear",
                "Use taxis for short distances",
              ],
            },
            {
              title: "How this page helps you",
              icon: "checklist",
              emphasis: "Confidence comes fast.",
              body: "This page answers one question:",
              bullets: [
                "Can I handle the subway in Korea? Yes.",
                "Detailed routes and apps come later",
              ],
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "It works for you.",
              body:
                "Once you start using the subway, you will wonder why you ever hesitated.",
            },
          ],
        },
        {
          title: "Taking the Bus",
          slug: "taking-the-bus",
          icon: "bus",
          image: "transport",
          description: "How buses work and when to use them.",
          content: [
            {
              title: "Taking the Bus",
              icon: "bus",
              emphasis: "Not a backup option.",
              body:
                "Buses are part of the main system, especially for places the subway does not reach. Once you know when to use them, they feel convenient.",
            },
            {
              title: "When buses make the most sense",
              icon: "route",
              emphasis: "Short, direct, local.",
              body: "Use the bus when:",
              bullets: [
                "Your destination is not near a subway station",
                "You want to avoid long underground transfers",
                "You are moving within one neighborhood",
              ],
            },
            {
              title: "How paying on buses actually works",
              icon: "card",
              emphasis: "Same card, simple taps.",
              body: "You use the same transportation card as the subway:",
              bullets: [
                "Tap once when you get on",
                "Tap again when you get off",
                "The system calculates the fare and transfers",
              ],
            },
            {
              title: "What first-time riders usually worry about",
              icon: "alert",
              emphasis: "You are not guessing blindly.",
              body: "Most visitors worry about:",
              bullets: [
                "Getting on the wrong bus",
                "Missing their stop",
                "Not knowing when to get off",
              ],
            },
            {
              title: "The reality",
              icon: "shield",
              emphasis: "Clear and trackable.",
              body: "In practice:",
              bullets: [
                "Bus numbers are clearly displayed",
                "Stops are announced and shown on screens",
                "Map apps show your progress in real time",
              ],
            },
            {
              title: "What makes buses feel different",
              icon: "pin",
              emphasis: "You see the city.",
              body: "Buses:",
              bullets: [
                "Follow street routes",
                "Stop more frequently",
                "Give you a better sense of where you are",
              ],
            },
            {
              title: "One common mistake to avoid",
              icon: "alert",
              emphasis: "Do not default to taxis.",
              body: "Some travelers:",
              bullets: [
                "Avoid buses completely",
                "Use taxis instead for short trips",
                "Overuse the subway even when it is inefficient",
              ],
            },
            {
              title: "What you don't need to master in advance",
              icon: "hand",
              emphasis: "The logic becomes clear fast.",
              body: "You do not need:",
              bullets: [
                "To memorize bus routes",
                "To understand the color system deeply",
                "To speak Korean",
              ],
            },
            {
              title: "How this page helps you",
              icon: "checklist",
              emphasis: "Use buses as a tool.",
              body: "This page answers one question:",
              bullets: [
                "Should I use the bus? If the subway feels indirect, usually yes.",
                "Use buses when they save time and steps",
              ],
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Practical and predictable.",
              body:
                "Buses in Korea are easy to use. If the subway gets you close, the bus often gets you exactly there.",
            },
          ],
        },
        {
          title: "Using Taxis",
          slug: "using-taxis",
          icon: "taxi",
          image: "transport",
          description: "Costs, apps, and payment tips.",
          content: [
            {
              title: "Using Taxis",
              icon: "taxi",
              emphasis: "Simple if you use them the right way.",
              body:
                "Taxis in Korea are safe, regulated, and easy. The key is knowing when to use them and when not to.",
            },
            {
              title: "First, the honest truth about taxis",
              icon: "alert",
              emphasis: "Helper, not habit.",
              body: "Use taxis:",
              bullets: [
                "Late at night",
                "When you are tired",
                "When public transport feels inconvenient",
                "Not for every short trip or during heavy traffic",
              ],
            },
            {
              title: "How expensive are taxis, really?",
              icon: "wallet",
              emphasis: "Short rides are fine. Long rides add up.",
              body:
                "Compared to many countries, taxis in Korea are cheaper than Europe and similar to big U.S. cities. If a subway or bus can do the job easily, it is usually better.",
            },
            {
              title: "Apps make taxis stress-free",
              icon: "sim",
              emphasis: "You do not need to speak Korean.",
              body: "Apps help with:",
              bullets: [
                "Pickup location",
                "Destination input",
                "Basic communication",
                "Clear pricing expectations",
              ],
            },
            {
              title: "Payment: what actually works",
              icon: "card",
              emphasis: "Card is common, cash is backup.",
              body: "Most taxis accept:",
              bullets: [
                "Credit cards",
                "Transit cards",
                "Mobile payments",
                "Keep a small amount of cash just in case",
              ],
            },
            {
              title: "When taxis are the best choice",
              icon: "spark",
              emphasis: "Save time and energy.",
              body: "Taxis shine for:",
              bullets: [
                "Late-night returns",
                "Traveling with luggage",
                "Bad weather days",
                "Places far from subway stations",
              ],
            },
            {
              title: "Common taxi mistakes to avoid",
              icon: "alert",
              emphasis: "Avoid these and taxis stay pleasant.",
              body: "These cause most bad experiences:",
              bullets: [
                "Using taxis for every short ride",
                "Taking taxis during rush hour traffic",
                "Not checking your pickup point carefully",
                "Assuming all taxis accept foreign cards without backup",
              ],
            },
            {
              title: "What this page helps you decide",
              icon: "checklist",
              emphasis: "Clarity, not details.",
              body: "After reading this page, you should know:",
              bullets: [
                "If a taxi makes sense right now",
                "If public transport is the smarter choice",
                "How to avoid taxi stress completely",
              ],
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Use wisely.",
              body:
                "Used wisely, taxis make your trip easier. Used carelessly, they drain your budget.",
            },
          ],
        },
        {
          title: "Transportation Cards",
          slug: "transportation-cards",
          icon: "card",
          image: "transport",
          description: "What card to buy and how to use it.",
          content: [
            {
              title: "Transportation Cards",
              icon: "card",
              emphasis: "One small decision that makes travel easy.",
              body:
                "Get a transportation card early and almost everything becomes simpler. You do not need to overthink brands or versions.",
            },
            {
              title: "What a transportation card actually does",
              icon: "train",
              emphasis: "Saves time and small daily costs.",
              body: "A card lets you:",
              bullets: [
                "Ride subways and buses without buying tickets each time",
                "Transfer between bus and subway without paying twice",
                "Move faster through stations and bus doors",
              ],
            },
            {
              title: "What card should you buy?",
              icon: "wallet",
              emphasis: "Any standard card works.",
              body: "Buy any standard transit card you see at:",
              bullets: [
                "Convenience stores",
                "Subway station kiosks",
                "If it works on buses and subways, it works for you",
              ],
            },
            {
              title: "How it works in real life",
              icon: "card",
              emphasis: "Tap in. Tap out.",
              body: "Using the card is simple:",
              bullets: [
                "Tap when you enter",
                "Tap when you exit",
                "The system calculates the fare automatically",
                "If you forget to tap out, you may pay the maximum fare",
              ],
            },
            {
              title: "How much money should you load?",
              icon: "receipt",
              emphasis: "Start small and top up easily.",
              body: "Load enough for one or two days. You can top up at:",
              bullets: [
                "Convenience stores",
                "Station machines",
                "There is no benefit to loading a large amount at once",
              ],
            },
            {
              title: "One habit that saves money",
              icon: "transfer",
              emphasis: "Always use the same card.",
              body:
                "Transfers only apply if you keep using the same card within the time window. This is how locals pay less without thinking about it.",
            },
            {
              title: "What this card does NOT do",
              icon: "tag",
              emphasis: "It is a movement tool.",
              body: "A transportation card is not:",
              bullets: [
                "A sightseeing pass",
                "A discount card for attractions",
                "A travel package",
              ],
            },
            {
              title: "Common mistakes to avoid",
              icon: "alert",
              emphasis: "Small issues, easy fixes.",
              body: "Avoid these:",
              bullets: [
                "Waiting until day two to buy a card",
                "Carrying multiple cards and mixing them",
                "Forgetting to tap out when exiting",
              ],
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Less thinking. Less stopping. Less stress.",
              body:
                "A transportation card removes friction from your trip. If moving around Korea feels easy, you chose the right card.",
            },
          ],
        },
        {
          title: "Saving on Transport",
          slug: "saving-on-transport",
          icon: "wallet",
          image: "transport",
          description: "How to pay less for daily travel.",
          content: [
            {
              title: "Saving on Transport",
              icon: "wallet",
              emphasis: "Small choices make a big difference.",
              body:
                "Most travelers spend more than they need to because they do not know how the system works. The good news is that simple habits lower costs.",
            },
            {
              title: "First, understand the real secret",
              icon: "spark",
              emphasis: "The system rewards habits, not planning tricks.",
              body:
                "You do not save money by hunting for cheap tickets. You save money by using the system the way locals do.",
            },
            {
              title: "The single biggest saver: one card, always",
              icon: "card",
              emphasis: "Use the same transportation card for everything.",
              body: "Why this matters:",
              bullets: [
                "Transfers are discounted automatically",
                "You avoid paying full fares again and again",
                "You move faster with less stress",
              ],
            },
            {
              title: "Think in routes, not rides",
              icon: "route",
              emphasis: "Connect smoothly instead of paying twice.",
              body: "This mindset saves money because:",
              bullets: [
                "Transfers within the time window cost less",
                "Short walks between stops replace paid rides",
                "One longer route is cheaper than multiple short trips",
              ],
            },
            {
              title: "The hidden money leak: short taxis",
              icon: "taxi",
              emphasis: "Small rides add up fast.",
              body: "A smarter rule:",
              bullets: [
                "Use taxis late at night",
                "Use taxis when public transport is finished",
                "Avoid taxis for short daytime distances",
              ],
            },
            {
              title: "What you don't need to buy",
              icon: "tag",
              emphasis: "Pay for what you actually use.",
              body: "You do not need:",
              bullets: [
                "Daily transport passes for most trips",
                "Special tourist-only cards",
                "Unlimited ride options just in case",
              ],
            },
            {
              title: "Simple habits that lower costs",
              icon: "checklist",
              emphasis: "Boring habits, big savings.",
              body: "These habits work:",
              bullets: [
                "Walk between close stations",
                "Group nearby places in one area",
                "Avoid crossing the city multiple times a day",
                "Start days earlier to avoid peak crowds",
              ],
            },
            {
              title: "What this page helps you do",
              icon: "shield",
              emphasis: "Focus on habits, not prices.",
              body: "This page helps you:",
              bullets: [
                "Build cheaper travel habits",
                "Avoid common money leaks",
                "Move like someone who knows the system",
                "Always double-check official sources for updated fares",
              ],
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Awareness saves money.",
              body:
                "Saving money on transport is not about being strict. When your day flows smoothly, your costs usually follow.",
            },
          ],
        },
        {
          title: "Transfers Explained",
          slug: "transfers-explained",
          icon: "transfer",
          image: "transport",
          description: "How switching lines and buses works.",
          content: [
            {
              title: "Transfers Explained",
              icon: "transfer",
              emphasis: "Transfers make travel cheaper and easier.",
              body:
                "Transfers in Korea are simple once you know the basic rule. The system is designed for daily commuters, not tourists.",
            },
            {
              title: "The one rule that matters most",
              icon: "route",
              emphasis: "Transfers work by time, not distance.",
              body:
                "If you tap out and tap in again within the time window, you usually do not pay a full new fare.",
              bullets: [
                "Subway to subway",
                "Bus to bus",
                "Subway to bus",
              ],
            },
            {
              title: "What makes transfers easy in Korea",
              icon: "spark",
              emphasis: "Follow the system and it rarely surprises you.",
              body: "That means:",
              bullets: [
                "Clear signs and colors",
                "Numbered subway lines",
                "Announcements in English",
                "Logical station layouts",
              ],
            },
            {
              title: "How to transfer smoothly",
              icon: "checklist",
              emphasis: "Three simple habits.",
              body: "Do these and transfers stay simple:",
              bullets: [
                "Always tap your card when you enter and exit",
                "Follow numbers more than names",
                "Check direction before boarding",
              ],
            },
            {
              title: "Common transfer mistakes",
              icon: "alert",
              emphasis: "Easy to avoid.",
              body: "First-timers often lose time or money by:",
              bullets: [
                "Waiting too long between rides",
                "Forgetting to tap out",
                "Panicking inside large stations",
              ],
            },
            {
              title: "What you don't need to worry about",
              icon: "hand",
              emphasis: "Keep it simple.",
              body: "You do not need to:",
              bullets: [
                "Memorize station layouts",
                "Plan every transfer in advance",
                "Speak Korean to transfer correctly",
              ],
            },
            {
              title: "When transfers save you money",
              icon: "wallet",
              emphasis: "Small rides add up fast.",
              body: "Transfers help most when:",
              bullets: [
                "You combine short rides",
                "You switch from subway to bus",
                "You travel across multiple neighborhoods in one day",
              ],
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Transfers are designed to help you.",
              body:
                "Tap correctly, move within time, and follow the numbers. If your trip feels smooth and affordable, your transfers are working.",
            },
          ],
        },
        {
          title: "Renting a Car",
          slug: "renting-a-car",
          icon: "car",
          image: "transport",
          description: "When it makes sense (and when it does not).",
          content: [
            {
              title: "Renting a Car in Korea",
              icon: "car",
              emphasis: "A tool, not a default choice.",
              body:
                "For many trips a car is unnecessary. For a few specific trips it is extremely useful. This page helps you decide which one you are planning.",
            },
            {
              title: "First, the honest truth",
              icon: "alert",
              emphasis: "Public transport is excellent in cities.",
              body:
                "Traffic, parking, and navigation can feel stressful if you are not used to the system. That is why most visitors do not need a car in big cities.",
            },
            {
              title: "When renting a car makes sense",
              icon: "spark",
              emphasis: "Best for Jeju and rural areas.",
              body: "A car is a good idea if:",
              bullets: [
                "You are traveling in Jeju",
                "You want to visit rural or coastal areas",
                "You plan to stop at multiple places in one day",
                "You are staying outside major cities",
              ],
            },
            {
              title: "When renting a car does NOT make sense",
              icon: "alert",
              emphasis: "City-focused trips are better without a car.",
              body: "A car is usually a bad idea if:",
              bullets: [
                "You are staying mainly in Seoul",
                "You plan to move between major cities by train",
                "You stay near subway lines",
                "You want a relaxed, low-effort trip",
              ],
            },
            {
              title: "The biggest mistake first-time visitors make",
              icon: "hand",
              emphasis: "Renting a car just in case.",
              body: "This often leads to:",
              bullets: [
                "Stress from traffic and parking",
                "Higher costs than expected",
                "Less walking and exploring",
              ],
            },
            {
              title: "What you actually need to rent a car",
              icon: "passport",
              emphasis: "Have these ready.",
              body: "Before you decide, check these basics:",
              bullets: [
                "An International Driving Permit (IDP)",
                "Your home country driver’s license",
                "A passport",
                "A credit card for deposit",
              ],
            },
            {
              title: "You don't need to decide on day one",
              icon: "checklist",
              emphasis: "Start with public transport first.",
              body: "You can:",
              bullets: [
                "Start your trip with public transport",
                "See how comfortable you feel",
                "Decide later if a car adds value",
              ],
            },
            {
              title: "Confirming details before you book",
              icon: "shield",
              emphasis: "Always confirm official details.",
              body: "Rental rules and requirements can change. Always confirm on:",
              bullets: [
                "Official rental company websites",
                "Airport rental desks",
                "Government or tourism authority pages",
              ],
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Freedom if it fits, stress if it doesn't.",
              body:
                "Renting a car is a tool, not a rule. If it gives you freedom, use it. If it adds stress, skip it.",
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
          content: [
            {
              title: "What Should I Try First?",
              icon: "bowl",
              emphasis: "Start simple and feel comfortable.",
              body:
                "You do not need the most famous dish on day one. A good first meal should feel easy and make you want to try more tomorrow.",
            },
            {
              title: "The best first dishes to start with",
              icon: "spark",
              emphasis: "Beginner-friendly and rarely too spicy.",
              body: "Great starter dishes:",
              bullets: [
                "Bibimbap: rice bowl with sauce on the side",
                "Bulgogi: sweet grilled beef with familiar flavor",
                "Korean fried chicken: soy-garlic or plain",
                "Mandu: steamed or fried dumplings",
              ],
            },
            {
              title: "About spicy food",
              icon: "chili",
              emphasis: "Not all Korean food is spicy.",
              body: "If you want to be safe, you can say:",
              bullets: [
                "Not spicy, please.",
                "Many red dishes are mild, not extreme",
              ],
            },
            {
              title: "What you don't need to decide yet",
              icon: "hand",
              emphasis: "Your taste will adjust naturally.",
              body: "You do not need to:",
              bullets: [
                "Know every dish name",
                "Plan restaurant lists in advance",
                "Order the most authentic food on day one",
              ],
            },
            {
              title: "How to pick a good place to eat",
              icon: "pin",
              emphasis: "Small menus and local customers.",
              body: "A simple rule that works:",
              bullets: [
                "Small menu",
                "Local customers",
                "Busy during lunch or dinner",
              ],
            },
            {
              title: "Common beginner mistakes",
              icon: "alert",
              emphasis: "No rush.",
              body: "Avoid these:",
              bullets: [
                "Ordering too many dishes at once",
                "Choosing the spiciest option out of curiosity",
                "Feeling pressured to eat foods you are unsure about",
              ],
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Start easy and build confidence.",
              body:
                "Your first Korean meals should feel enjoyable. Start with familiar flavors and let curiosity come naturally.",
            },
          ],
        },
        {
          title: "Food for First-Timers",
          slug: "food-for-first-timers",
          icon: "leaf",
          image: "food",
          description: "Mild dishes most visitors like.",
          content: [
            {
              title: "Food for First-Timers",
              icon: "leaf",
              emphasis: "Start with comfort, not courage.",
              body:
                "Not everything is spicy or unfamiliar. Many Korean dishes are warm, balanced, and gentle, especially the ones locals suggest for first-time visitors.",
            },
            {
              title: "Mild dishes most visitors enjoy",
              icon: "bowl",
              emphasis: "Safe, familiar, still very Korean.",
              body: "Great starter dishes:",
              bullets: [
                "Bulgogi: sweet grilled beef, soft flavor",
                "Galbi: marinated ribs, rich but not spicy",
                "Samgyetang: ginseng chicken soup, light and comforting",
                "Gyeran-jjim: steamed egg, soft and warm",
                "Kimbap: ask for simple fillings to keep it mild",
              ],
            },
            {
              title: "About spice levels",
              icon: "chili",
              emphasis: "You can ask for less spice.",
              body: "In many restaurants:",
              bullets: [
                "Not spicy usually means mild, not flavorless",
                "Chili paste is often added separately",
                "It is okay to ask: Is this spicy?",
              ],
            },
            {
              title: "What to take slowly at first",
              icon: "hand",
              emphasis: "No rush.",
              body: "You might want to wait before trying:",
              bullets: [
                "Extra-spicy rice cakes",
                "Strong fermented flavors",
                "Raw seafood dishes",
              ],
            },
            {
              title: "A common beginner mistake",
              icon: "alert",
              emphasis: "One or two dishes is enough.",
              body: "Many visitors:",
              bullets: [
                "Order too many dishes at once",
                "Mix spicy and non-spicy foods in one meal",
                "Feel pressured to try everything",
              ],
            },
            {
              title: "How this page helps you",
              icon: "checklist",
              emphasis: "Confidence comes quickly.",
              body: "This page helps you answer:",
              bullets: [
                "What should I eat first?",
                "Once you enjoy a few meals, new dishes feel easier",
              ],
            },
            {
              title: "Bottom line",
              icon: "spark",
              emphasis: "Start mild and build confidence.",
              body:
                "Korean food does not need to be intense to be authentic. Start mild and let the rest come later.",
            },
          ],
        },
        {
          title: "Finding Good Restaurants",
          slug: "finding-good-restaurants",
          icon: "pin",
          image: "food",
          description: "How locals choose places to eat.",
          content: [
            {
              title: "Quick summary",
              body:
                "Locals follow lines, small menus, and busy lunch crowds. Simple places are often best.",
            },
            {
              title: "Key moves",
              body: "Choose with confidence.",
              bullets: [
                "Pick places with focused menus",
                "Eat where the lunch crowd goes",
              ],
            },
            {
              title: "Common mistakes",
              body: "Relying only on tourist areas can mean lower quality.",
            },
          ],
        },
        {
          title: "Food to Be Careful With",
          slug: "food-to-be-careful-with",
          icon: "chili",
          image: "food",
          description: "Very spicy or unfamiliar dishes.",
          content: [
            {
              title: "Quick summary",
              body:
                "Some dishes are very spicy or have strong flavors. Try a small portion first.",
            },
            {
              title: "Use caution with",
              body: "These can surprise new visitors.",
              bullets: [
                "Extra spicy tteokbokki",
                "Raw seafood dishes",
              ],
            },
            {
              title: "Common mistakes",
              body: "Ordering the spiciest level can ruin the meal.",
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
          content: [
            {
              title: "Quick summary",
              body:
                "Mid-range hotels and serviced residences offer the best value for most travelers.",
            },
            {
              title: "Key moves",
              body: "Look for clean rooms and strong transit access.",
              bullets: [
                "Pick a subway station within 5 minutes",
                "Check room size before booking",
              ],
            },
            {
              title: "Common mistakes",
              body: "Overpaying for a luxury view you barely use.",
            },
          ],
        },
        {
          title: "Budget Stays",
          slug: "budget-stays",
          icon: "wallet",
          image: "stay",
          description: "Clean and affordable options.",
          content: [
            {
              title: "Quick summary",
              body:
                "Guesthouses and budget hotels can be clean and safe if you read recent reviews.",
            },
            {
              title: "Key moves",
              body: "Save without sacrificing basics.",
              bullets: [
                "Check noise and bathroom details",
                "Choose locations near transit",
              ],
            },
            {
              title: "Common mistakes",
              body: "Booking far from transit to save a little money.",
            },
          ],
        },
        {
          title: "Luxury Hotels",
          slug: "luxury-hotels",
          icon: "spark",
          image: "stay",
          description: "When paying more is worth it.",
          content: [
            {
              title: "Quick summary",
              body:
                "Luxury stays are worth it for special occasions or when you want premium service and views.",
            },
            {
              title: "Key moves",
              body: "Spend where it adds comfort.",
              bullets: [
                "Pick one splurge night",
                "Choose views you will actually enjoy",
              ],
            },
            {
              title: "Common mistakes",
              body: "Staying luxury the entire trip limits experiences elsewhere.",
            },
          ],
        },
        {
          title: "Where to Stay in Seoul",
          slug: "where-to-stay-in-seoul",
          icon: "city",
          image: "city",
          description: "Best areas by travel style.",
          content: [
            {
              title: "Quick summary",
              body:
                "Choose by your style: lively nightlife, shopping, or calm neighborhoods.",
            },
            {
              title: "Popular areas",
              body: "Each area has a clear vibe.",
              bullets: [
                "Hongdae for nightlife",
                "Myeongdong for shopping",
                "Jongno for culture",
              ],
            },
            {
              title: "Common mistakes",
              body: "Staying too far from a subway line makes daily travel harder.",
            },
          ],
        },
        {
          title: "Where to Stay in Busan",
          slug: "where-to-stay-in-busan",
          icon: "beach",
          image: "beach",
          description: "Beach areas vs city areas.",
          content: [
            {
              title: "Quick summary",
              body:
                "Busan offers beach neighborhoods and city hubs. Choose based on your focus.",
            },
            {
              title: "Area tips",
              body: "Pick the best base for your trip.",
              bullets: [
                "Haeundae for beach time",
                "Seomyeon for city access",
              ],
            },
            {
              title: "Common mistakes",
              body: "Switching hotels too often wastes time.",
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
          content: [
            {
              title: "Quick summary",
              body:
                "Focus on a few iconic sites each city to avoid rushing. These are worth seeing once.",
            },
            {
              title: "Starter list",
              body: "Pick 2-3 per city.",
              bullets: [
                "Palaces and traditional villages",
                "Night markets and food streets",
                "A scenic viewpoint",
              ],
            },
            {
              title: "Common mistakes",
              body: "Trying to see everything in one day is too much.",
            },
          ],
        },
        {
          title: "Good Places Without Crowds",
          slug: "good-places-without-crowds",
          icon: "leaf",
          image: "heritage",
          description: "Nice spots most tourists miss.",
          content: [
            {
              title: "Quick summary",
              body:
                "Look for local parks, river paths, and smaller museums for a calmer day.",
            },
            {
              title: "Key moves",
              body: "Visit early or on weekdays for the best experience.",
              bullets: [
                "Neighborhood markets",
                "Riverside walks",
              ],
            },
            {
              title: "Common mistakes",
              body: "Ignoring smaller attractions can make trips feel generic.",
            },
          ],
        },
        {
          title: "Top Places by City",
          slug: "top-places-by-city",
          icon: "pin",
          image: "city",
          description: "Highlights for each city.",
          content: [
            {
              title: "Quick summary",
              body:
                "Each city has a few standout areas. Plan your day around one main cluster at a time.",
            },
            {
              title: "Key moves",
              body: "Group sights by neighborhood.",
              bullets: [
                "Seoul: palaces + nearby districts",
                "Busan: beach + market",
              ],
            },
            {
              title: "Common mistakes",
              body: "Cross-city travel in one day is tiring.",
            },
          ],
        },
        {
          title: "How Much Does It Cost?",
          slug: "how-much-does-it-cost",
          icon: "wallet",
          image: "basics",
          description: "Entrance fees and price ranges.",
          content: [
            {
              title: "Quick summary",
              body:
                "Many attractions are low cost or free. Museums and palaces are usually affordable.",
            },
            {
              title: "Key moves",
              body: "Budget by day instead of per attraction.",
              bullets: [
                "Many sites under a small entry fee",
                "Food and transport are often bigger costs",
              ],
            },
            {
              title: "Common mistakes",
              body: "Overbudgeting for tickets and underbudgeting for food.",
            },
          ],
        },
        {
          title: "Discount Passes",
          slug: "discount-passes",
          icon: "card",
          image: "shopping",
          description: "When passes actually save money.",
          content: [
            {
              title: "Quick summary",
              body:
                "Passes are useful if you plan multiple paid attractions in a short time.",
            },
            {
              title: "Key moves",
              body: "Check your planned sites before buying.",
              bullets: [
                "Calculate total price vs pass price",
                "Use passes only if you will be busy",
              ],
            },
            {
              title: "Common mistakes",
              body: "Buying a pass and then moving too slowly to use it.",
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
          content: [
            {
              title: "Quick summary",
              body:
                "Both SIM and eSIM work well. eSIM is easier if your phone supports it.",
            },
            {
              title: "Key moves",
              body: "Choose what fits your phone.",
              bullets: [
                "eSIM for easy setup",
                "Physical SIM for older phones",
              ],
            },
            {
              title: "Common mistakes",
              body: "Buying a SIM before confirming phone compatibility.",
            },
          ],
        },
        {
          title: "How to Pay in Korea",
          slug: "how-to-pay-in-korea",
          icon: "wallet",
          image: "basics",
          description: "Card, cash, and what really works.",
          content: [
            {
              title: "Quick summary",
              body:
                "Cards are accepted almost everywhere. Carry some cash for small shops and street food.",
            },
            {
              title: "Key moves",
              body: "Keep payment simple.",
              bullets: [
                "Use a foreign card with no fees",
                "Carry small bills for markets",
              ],
            },
            {
              title: "Common mistakes",
              body: "Relying only on cash makes travel harder.",
            },
          ],
        },
        {
          title: "Is Korea Safe?",
          slug: "is-korea-safe",
          icon: "shield",
          image: "safety",
          description: "What travelers should know.",
          content: [
            {
              title: "Quick summary",
              body:
                "Korea is generally very safe, even at night. Still, normal travel awareness is important.",
            },
            {
              title: "Key moves",
              body: "Stay confident and practical.",
              bullets: [
                "Keep valuables close",
                "Stick to well-lit areas at night",
              ],
            },
            {
              title: "Common mistakes",
              body: "Assuming nothing can ever go wrong.",
            },
          ],
        },
        {
          title: "Solo Travel Safety",
          slug: "solo-travel-safety",
          icon: "shield",
          image: "safety",
          description: "Tips for traveling alone.",
          content: [
            {
              title: "Quick summary",
              body:
                "Solo travelers do well in Korea. Plan your transit and keep family updated.",
            },
            {
              title: "Key moves",
              body: "Small habits help a lot.",
              bullets: [
                "Share your nightly location",
                "Use main streets late at night",
              ],
            },
            {
              title: "Common mistakes",
              body: "Not having offline access to your map or address.",
            },
          ],
        },
        {
          title: "In Case of Emergency",
          slug: "in-case-of-emergency",
          icon: "alert",
          image: "safety",
          description: "What to do and who to call.",
          content: [
            {
              title: "Quick summary",
              body:
                "Emergency services are fast and reliable. Save the key numbers before your trip.",
            },
            {
              title: "Key moves",
              body: "Be prepared just in case.",
              bullets: [
                "Keep your hotel address handy",
                "Use translation apps for quick help",
              ],
            },
            {
              title: "Common mistakes",
              body: "Waiting too long to ask for help.",
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
          image: "basics",
          description: "Simple rules to avoid awkward moments.",
          content: [
            {
              title: "Quick summary",
              body:
                "Politeness matters. Small gestures like saying hello and using two hands for items are appreciated.",
            },
            {
              title: "Key moves",
              body: "Keep it simple and respectful.",
              bullets: [
                "Use two hands for cards or gifts",
                "Keep your voice down on public transit",
              ],
            },
            {
              title: "Common mistakes",
              body: "Speaking loudly on the subway stands out.",
            },
          ],
        },
        {
          title: "Immigration Process",
          slug: "immigration-process",
          icon: "passport",
          image: "airport",
          description: "What happens at the airport.",
          content: [
            {
              title: "Quick summary",
              body:
                "The process is straightforward: documents, fingerprints, then pick up your bags.",
            },
            {
              title: "Key moves",
              body: "Speed through with these steps.",
              bullets: [
                "Prepare your arrival card",
                "Keep your hotel address ready",
              ],
            },
            {
              title: "Common mistakes",
              body: "Not knowing your first stay address can slow things down.",
            },
          ],
        },
        {
          title: "What Is K-ETA?",
          slug: "what-is-k-eta",
          icon: "passport",
          image: "airport",
          description: "Do you need it or not?",
          content: [
            {
              title: "Quick summary",
              body:
                "K-ETA is an online travel authorization for some nationalities. Check if your passport requires it.",
            },
            {
              title: "Key moves",
              body: "Confirm before you fly.",
              bullets: [
                "Apply online if required",
                "Use the same passport you applied with",
              ],
            },
            {
              title: "Common mistakes",
              body: "Waiting until the day before departure.",
            },
          ],
        },
        {
          title: "What Should I Prepare?",
          slug: "what-should-i-prepare",
          icon: "checklist",
          image: "basics",
          description: "A simple pre-trip checklist.",
          content: [
            {
              title: "Quick summary",
              body:
                "A few essentials make the trip smooth: documents, phone setup, and basic apps.",
            },
            {
              title: "Checklist",
              body: "Keep this short and focused.",
              bullets: [
                "Passport and entry documents",
                "Travel card and some cash",
                "Transit and map apps",
              ],
            },
            {
              title: "Common mistakes",
              body: "Forgetting a portable charger can be a hassle.",
            },
          ],
        },
        {
          title: "From Airport to City",
          slug: "from-airport-to-city",
          icon: "plane",
          image: "airport",
          description: "Getting to your hotel smoothly.",
          content: [
            {
              title: "Quick summary",
              body:
                "You can reach the city by train, bus, or taxi. Most travelers use airport rail or bus.",
            },
            {
              title: "Key moves",
              body: "Choose based on budget and luggage.",
              bullets: [
                "Rail for speed and simplicity",
                "Bus for direct routes to neighborhoods",
              ],
            },
            {
              title: "Common mistakes",
              body: "Choosing the wrong terminal or bus stop.",
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
          content: [
            {
              title: "Quick summary",
              body:
                "Seoul has everything from street fashion to global brands. Each area has a clear style.",
            },
            {
              title: "Key moves",
              body: "Match your style to the area.",
              bullets: [
                "Myeongdong for cosmetics",
                "Hongdae for street fashion",
              ],
            },
            {
              title: "Common mistakes",
              body: "Trying to visit every shopping area in one day.",
            },
          ],
        },
        {
          title: "Shopping in Busan",
          slug: "shopping-in-busan",
          icon: "bag",
          image: "shopping",
          description: "Local shopping spots.",
          content: [
            {
              title: "Quick summary",
              body:
                "Busan shopping is more relaxed. Markets and malls are easy to combine with beach time.",
            },
            {
              title: "Key moves",
              body: "Mix local markets with modern malls.",
              bullets: [
                "Jagalchi for local goods",
                "Centum City for brands",
              ],
            },
            {
              title: "Common mistakes",
              body: "Ignoring local markets can mean missing the best deals.",
            },
          ],
        },
        {
          title: "Tax Refund Explained",
          slug: "tax-refund-explained",
          icon: "receipt",
          image: "shopping",
          description: "How to get money back.",
          content: [
            {
              title: "Quick summary",
              body:
                "Tax refunds are available at certain stores with a minimum spend. Keep receipts and your passport.",
            },
            {
              title: "Key moves",
              body: "Make the refund easy.",
              bullets: [
                "Shop at tax-free stores",
                "Keep receipts in one place",
              ],
            },
            {
              title: "Common mistakes",
              body: "Throwing away receipts before airport processing.",
            },
          ],
        },
        {
          title: "How to Get Discounts",
          slug: "how-to-get-discounts",
          icon: "tag",
          image: "shopping",
          description: "Tourist savings tips.",
          content: [
            {
              title: "Quick summary",
              body:
                "Tourist cards, store promotions, and duty-free purchases can save money if you plan ahead.",
            },
            {
              title: "Key moves",
              body: "Stack savings the smart way.",
              bullets: [
                "Use tourist passes only if you will use them",
                "Check for card promotions in stores",
              ],
            },
            {
              title: "Common mistakes",
              body: "Buying discount passes without checking the included places.",
            },
          ],
        },
        {
          title: "Is Shopping Cheap in Korea?",
          slug: "is-shopping-cheap-in-korea",
          icon: "wallet",
          image: "shopping",
          description: "What is actually worth buying.",
          content: [
            {
              title: "Quick summary",
              body:
                "Some items are cheaper, but not everything is a bargain. Focus on local specialties.",
            },
            {
              title: "Worth it",
              body: "Look for items with a good price-quality ratio.",
              bullets: [
                "Skincare and cosmetics",
                "Local snacks and gifts",
              ],
            },
            {
              title: "Common mistakes",
              body: "Buying bulky items that are expensive to pack.",
            },
          ],
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

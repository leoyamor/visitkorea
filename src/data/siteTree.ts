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
              title: "Quick summary",
              body:
                "Korea is safe, efficient, and traveler-friendly. The biggest challenges are language details and knowing which apps to use.",
            },
            {
              title: "Key moves",
              body: "Prepare the essentials before your flight.",
              bullets: [
                "Install map and transit apps",
                "Bring a bank card that works overseas",
                "Carry a small amount of cash",
              ],
            },
            {
              title: "Common mistakes",
              body:
                "Skipping transport cards and relying only on taxis will raise your costs.",
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
              title: "Quick summary",
              body:
                "Second visits are great for local neighborhoods, seasonal festivals, and regional cities.",
            },
            {
              title: "Key moves",
              body: "Swap famous spots for slower, local experiences.",
              bullets: [
                "Stay in a smaller city for 2-3 nights",
                "Plan one nature day each week",
              ],
            },
            {
              title: "Common mistakes",
              body:
                "Repeating the same itinerary is safe but misses new experiences.",
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
              title: "Quick summary",
              body:
                "Seoul is the best base for first timers: transport is easy, neighborhoods are walkable, and there is endless food and shopping.",
            },
            {
              title: "Best for",
              body: "City explorers, food lovers, and museum fans.",
              bullets: [
                "3-6 days recommended",
                "Stay near subway lines 2 or 4",
              ],
            },
            {
              title: "Common mistakes",
              body: "Trying to see all districts in one day will exhaust you.",
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
              title: "Quick summary",
              body:
                "Busan mixes beach views with city convenience. It is a great contrast after Seoul.",
            },
            {
              title: "Best for",
              body: "Seafood, coastal walks, and slower evenings.",
              bullets: [
                "2-4 days recommended",
                "Pick a beach area or city area",
              ],
            },
            {
              title: "Common mistakes",
              body: "Staying too far from your main beach spot wastes time.",
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
              title: "Quick summary",
              body:
                "Jeju is Korea's island getaway. Renting a car makes the island much easier.",
            },
            {
              title: "Best for",
              body: "Hiking, ocean views, and road trips.",
              bullets: [
                "3-5 days recommended",
                "Consider a car for flexibility",
              ],
            },
            {
              title: "Common mistakes",
              body: "Trying to rely only on buses can limit your day plans.",
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
              title: "Quick summary",
              body:
                "Gyeongju is a compact historical city with tombs, temples, and bike-friendly paths.",
            },
            {
              title: "Best for",
              body: "History lovers and calm day trips.",
              bullets: [
                "1-2 days recommended",
                "Rent a bike for easy touring",
              ],
            },
            {
              title: "Common mistakes",
              body: "Visiting in a single afternoon is too rushed.",
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
              title: "Quick summary",
              body:
                "Jeonju is famous for food and the hanok village. It works well as a relaxed overnight stop.",
            },
            {
              title: "Best for",
              body: "Food-focused travelers and traditional scenery.",
              bullets: [
                "1-2 days recommended",
                "Try a hanok stay for one night",
              ],
            },
            {
              title: "Common mistakes",
              body: "Arriving too late leaves no time for the night market vibe.",
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
              title: "Quick summary",
              body:
                "Choose based on your priority: city energy, nature, history, or food.",
            },
            {
              title: "Quick picks",
              body: "Match your style to a city.",
              bullets: [
                "City + shopping: Seoul",
                "Sea + seafood: Busan",
                "Nature + driving: Jeju",
              ],
            },
            {
              title: "Common mistakes",
              body: "Trying to visit all cities on a short trip reduces quality.",
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
              title: "Quick summary",
              body:
                "Korea is one of the easiest countries to navigate. Signs are clear and public transport is frequent.",
            },
            {
              title: "What helps most",
              body: "Two tools make travel simple.",
              bullets: [
                "Use a transit card for every ride",
                "Use local map apps for directions",
              ],
            },
            {
              title: "Common mistakes",
              body: "Using only taxis can become expensive and slower in traffic.",
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
              title: "Quick summary",
              body:
                "Subways are fast, cheap, and bilingual. The hardest part is choosing the right exit.",
            },
            {
              title: "Key moves",
              body: "Make every ride smooth.",
              bullets: [
                "Tap in and out with a transit card",
                "Use exit numbers for navigation",
              ],
            },
            {
              title: "Common mistakes",
              body: "Skipping the exit number often adds 10 minutes of walking.",
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
              title: "Quick summary",
              body:
                "Buses fill the gaps where subways do not go. They are reliable but require the right stop.",
            },
            {
              title: "Key moves",
              body: "Use bus rides efficiently.",
              bullets: [
                "Use a map app to find the correct stop",
                "Tap when boarding and exiting",
              ],
            },
            {
              title: "Common mistakes",
              body: "Boarding the wrong direction is a common first-timer issue.",
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
              title: "Quick summary",
              body:
                "Taxis are safe and easy to use, especially late at night. Apps help with language barriers.",
            },
            {
              title: "Key moves",
              body: "Keep it simple and fair.",
              bullets: [
                "Use apps for pickup and translation",
                "Check if card payment is accepted",
              ],
            },
            {
              title: "Common mistakes",
              body: "Assuming every taxi accepts foreign cards can cause delays.",
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
              title: "Quick summary",
              body:
                "A transit card works on subways and buses nationwide. It saves time and keeps fares lower.",
            },
            {
              title: "Key moves",
              body: "Buy once, use everywhere.",
              bullets: [
                "Purchase at convenience stores",
                "Top up in small amounts often",
              ],
            },
            {
              title: "Common mistakes",
              body: "Forgetting to tap out can charge the max fare.",
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
              title: "Quick summary",
              body:
                "Transit cards offer automatic fare discounts and free transfers within time limits.",
            },
            {
              title: "Key moves",
              body: "Small habits can cut costs.",
              bullets: [
                "Use transfers instead of separate rides",
                "Walk short distances between nearby stops",
              ],
            },
            {
              title: "Common mistakes",
              body: "Taking short taxi rides adds up quickly.",
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
              title: "Quick summary",
              body:
                "Transfers are simple: stay within the time window and you will not pay twice.",
            },
            {
              title: "Key moves",
              body: "Make transfers smooth.",
              bullets: [
                "Always tap when leaving and boarding",
                "Follow station color lines and numbers",
              ],
            },
            {
              title: "Common mistakes",
              body: "Missing the transfer window restarts the fare.",
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
              title: "Quick summary",
              body:
                "Car rental is useful for Jeju or rural areas, but not for Seoul traffic.",
            },
            {
              title: "Key moves",
              body: "Know when driving is smart.",
              bullets: [
                "Best for islands and countryside",
                "Avoid central city driving",
              ],
            },
            {
              title: "Common mistakes",
              body: "Parking costs and traffic can outweigh convenience.",
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
              title: "Quick summary",
              body:
                "Start with familiar flavors like grilled meats, dumplings, and mild soups.",
            },
            {
              title: "Starter picks",
              body: "These are easy for most visitors.",
              bullets: [
                "Bibimbap or bulgogi",
                "Korean fried chicken",
                "Mandu dumplings",
              ],
            },
            {
              title: "Common mistakes",
              body: "Ordering too much at once can be overwhelming.",
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
              title: "Quick summary",
              body:
                "Many Korean meals are mild and comforting. You can ask for less spice in most restaurants.",
            },
            {
              title: "Good choices",
              body: "Look for these keywords.",
              bullets: [
                "Galbi (sweet grilled ribs)",
                "Samgyetang (ginseng chicken soup)",
              ],
            },
            {
              title: "Common mistakes",
              body: "Assuming all food is spicy is a myth.",
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

import { SITE_URL } from "./site";

export const siteUrl = SITE_URL;

export type CategorySlug =
  | 'itinerary'
  | 'cities'
  | 'transportation'
  | 'accommodation'
  | 'food'
  | 'attractions'
  | 'practical-info'
  | 'immigration'
  | 'shopping';

export interface TocItem {
  id: string;
  title: string;
}

export interface Section {
  id: string;
  title: string;
  bullets: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PageData {
  path: string;
  title: string;
  description: string;
  category?: CategorySlug;
  slug?: string;
  toc: TocItem[];
  sections: Section[];
  faq: FaqItem[];
  related: string[];
  lastUpdated: string;
}

export const categories = [
  {
    slug: 'itinerary',
    title: 'Plan Your Trip',
    description: 'Plan your days realistically, without overpacking your schedule.',
    image: '/Plan%20Your%20Trip.webp'
  },
  {
    slug: 'cities',
    title: 'Choose a City',
    description: 'Choose the city that fits how you like to travel.',
    image: '/Choose%20a%20City.webp'
  },
  {
    slug: 'transportation',
    title: 'Getting Around Korea',
    description: 'Learn how to use buses, subways, and taxis with confidence.',
    image: '/Getting%20Around%20Korea.webp'
  },
  {
    slug: 'accommodation',
    title: 'Where to Stay',
    description: 'Find the right area and hotel for your budget.',
    image: '/Where%20to%20Stay.webp'
  },
  {
    slug: 'food',
    title: 'What to Eat',
    description: 'Know what to try first — and what to skip.',
    image: '/What%20to%20Eat.webp'
  },
  {
    slug: 'attractions',
    title: 'Things to Do',
    description: 'See what’s truly worth your time and money.',
    image: '/Things%20to%20Do.webp'
  },
  {
    slug: 'practical-info',
    title: 'Travel Basics',
    description: 'Handle internet, money, and safety with less stress.',
    image: '/Travel%20Basics.webp'
  },
  {
    slug: 'immigration',
    title: 'Before You Go',
    description: 'Prepare for arrival, rules, and local customs.',
    image: '/Before%20You%20Go.webp'
  },
  {
    slug: 'shopping',
    title: 'Shopping & Deals',
    description: 'Shop smarter and avoid tourist price traps.',
    image: '/Shopping%20%26%20Deals.webp'
  }
] as const;

const categoryTemplates: Record<CategorySlug, string[]> = {
  itinerary: [
    'Best pace for this trip length',
    'Day-by-day rhythm',
    'Must-book items',
    'Flex days and backups'
  ],
  cities: ['City vibe', 'Top neighborhoods', 'Best time to visit', 'Easy day trips'],
  transportation: ['How it works', 'Tickets and passes', 'Rules and etiquette', 'Money savers'],
  accommodation: ['Area choices', 'What to expect', 'Booking tips', 'Check-in tips'],
  food: ['What to try first', 'How to order', 'Diet notes', 'Budget tips'],
  attractions: ['Top picks', 'Time planning', 'Tickets and waits', 'Worth-it tips'],
  'practical-info': ['Stay connected', 'Payments', 'Safety basics', 'Before you go'],
  immigration: ['Before arrival', 'At the airport', 'After landing', 'Common mistakes'],
  shopping: ['Best areas', 'Tax refund basics', 'Budget tips', 'Souvenir picks']
};

const categoryBullets: Record<CategorySlug, string[][]> = {
  itinerary: [
    ['Choose 2 to 3 bases so travel days stay light.', 'Keep one slow morning every three days.', 'Plan for early closures in smaller towns.'],
    ['Aim for one big sight and one small stop per day.', 'Put long transit legs before dinner time.', 'Use evenings for markets or easy walks.'],
    ['Book popular trains and palaces early on weekends.', 'Confirm attraction hours two days ahead.', 'Reserve one special meal spot.'],
    ['Add a half-day buffer for weather shifts.', 'Have a rainy-day cafe list ready.', 'Keep one "free choice" evening open.']
  ],
  cities: [
    ['Think about pace: fast and flashy or calm and coastal.', 'Match the city to your trip length.', 'Mix one big city with one chill city.'],
    ['Stay near transit lines to save walking time.', 'Look for food streets within 10 minutes.', 'Pick one scenic neighborhood for sunsets.'],
    ['Spring and fall are the easiest for walking.', 'Summer needs more indoor backup plans.', 'Winter favors markets and hot springs.'],
    ['Plan one nearby town for a change of scenery.', 'Pick trips under 90 minutes for comfort.', 'Book long-distance tickets early.']
  ],
  transportation: [
    ['Subway is best for city hops.', 'Buses fill the gaps in neighborhoods.', 'Taxis are easy with a pickup pin.'],
    ['Transit cards save time at gates.', 'Top up before long rides.', 'Some cards work across cities.'],
    ['Stand right, walk left on escalators.', 'Keep your bag close in crowded lines.', 'Offer seats to elderly riders.'],
    ['Avoid peak commute if possible.', 'Use transfer discounts with the same card.', 'Walk short trips to save fare.']
  ],
  accommodation: [
    ['Stay near main stations for easy arrivals.', 'Choose quieter streets for light sleepers.', 'Check late-night food options nearby.'],
    ['Budget stays are small but clean.', 'Guesthouses are social and friendly.', 'Hotels usually have strong Wi-Fi.'],
    ['Book refundable rates for flexibility.', 'Compare total price with taxes included.', 'Read recent reviews for noise notes.'],
    ['Know check-in cutoffs for small stays.', 'Ask about luggage storage.', 'Keep a screenshot of the address.']
  ],
  food: [
    ['Start with barbecue, bibimbap, and noodles.', 'Try a market snack each day.', 'Balance spicy meals with soups.'],
    ['Pointing is fine at most casual spots.', 'Many places use self-order kiosks.', 'Water is usually self-serve.'],
    ['Learn a few allergy phrases.', 'Vegetarian options exist but may vary.', 'Ask about broth ingredients.'],
    ['Lunch sets are often cheaper.', 'Markets beat tourist strips.', 'Share dishes to taste more.']
  ],
  attractions: [
    ['Pick 2 to 3 signature sights per city.', 'Mix indoor and outdoor stops.', 'Start early for popular spots.'],
    ['Give museums at least 90 minutes.', 'Cluster nearby spots to save transit.', 'Add a cafe break in the middle.'],
    ['Some tickets sell out on weekends.', 'Check last entry times.', 'Combo passes can save money.'],
    ['Do the big-ticket view once.', 'Skip anything too far for one photo.', 'Use night views when crowds drop.']
  ],
  'practical-info': [
    ['eSIM is fastest if your phone supports it.', 'Pocket Wi-Fi is good for groups.', 'SIM pickup is easy at airports.'],
    ['Cards are widely accepted in cities.', 'Carry cash for markets and buses.', 'ATMs in convenience stores are easy.'],
    ['Korea is generally safe for travelers.', 'Keep passport copies separate.', 'Know your embassy contact.'],
    ['Check weather and holidays before booking.', 'Download a translation app.', 'Save the emergency number (112).']
  ],
  immigration: [
    ['Confirm visa or K-ETA rules early.', 'Bring proof of onward travel.', 'Keep hotel addresses handy.'],
    ['Follow signs for foreign passport lanes.', 'Fingerprints and photo are standard.', 'Answer questions calmly and clearly.'],
    ['Pick up your SIM or transit card after baggage.', 'Use the right bus or rail for your city.', 'Keep customs items declared.'],
    ['Don’t pack restricted foods.', 'Avoid missing K-ETA approval times.', 'Keep printed copies of key docs.']
  ],
  shopping: [
    ['Department stores for brands and gifts.', 'Markets for snacks and souvenirs.', 'Outlet malls for deals.'],
    ['Keep receipts for tax refund.', 'Use airport kiosks early.', 'Ask for tax-free tags.'],
    ['Set a daily budget cap.', 'Bundle purchases for discounts.', 'Compare prices across districts.'],
    ['Skincare, stationery, and snacks are easy wins.', 'Look for local crafts.', 'Check baggage limits before buying.']
  ]
};

const subpages = [
  { category: 'itinerary', slug: '7-days-in-korea', title: '7 Days in Korea', description: 'A one-week travel plan that actually works.' },
  { category: 'itinerary', slug: '2-weeks-in-korea', title: '2 Weeks in Korea', description: 'A two-week trip with time for islands and slower mornings.' },
  { category: 'itinerary', slug: '1-month-in-korea', title: '1 Month in Korea', description: 'A relaxed month with regional variety and rest days.' },

  { category: 'cities', slug: 'seoul', title: 'Seoul', description: 'Fast, modern, and full of easy day trips.' },
  { category: 'cities', slug: 'busan', title: 'Busan', description: 'Beachy energy with markets and coastal walks.' },
  { category: 'cities', slug: 'jeju', title: 'Jeju', description: 'Island drives, lava landscapes, and fresh air.' },
  { category: 'cities', slug: 'gyeongju', title: 'Gyeongju', description: 'History-rich stays with temples and royal tombs.' },
  { category: 'cities', slug: 'jeonju', title: 'Jeonju', description: 'Hanok lanes, food streets, and calm vibes.' },
  { category: 'cities', slug: 'which-city-fits-you-best', title: 'Which City Fits You Best?', description: 'Match your travel style to the right destination.' },

  { category: 'transportation', slug: 'using-the-subway', title: 'Using the Subway', description: 'Tickets, transportation cards, fares, and what first-time riders should expect.' },
  { category: 'transportation', slug: 'taking-the-bus', title: 'Taking the Bus', description: 'How buses work, how to pay, and when they are the better choice for daily travel.' },
  { category: 'transportation', slug: 'using-taxis', title: 'Using Taxis', description: 'Costs, when to use them, taxi apps, and practical payment tips for visitors.' },
  { category: 'transportation', slug: 'transportation-cards', title: 'Transportation Cards', description: 'Which transit card to buy and how to top up.' },
  { category: 'transportation', slug: 'save-on-transport', title: 'Save on Transport', description: 'Small habits that lower your daily travel cost.' },
  { category: 'transportation', slug: 'renting-a-car', title: 'Renting a Car', description: 'When it makes sense (and when it does not).' },

  { category: 'accommodation', slug: 'budget-stays', title: 'Budget Stays', description: 'Clean, simple stays that keep your budget happy.' },
  { category: 'accommodation', slug: 'best-value-hotels', title: 'Best-Value Hotels', description: 'Comfortable hotels with good locations and fair prices.' },
  { category: 'accommodation', slug: 'luxury-hotels', title: 'Luxury Hotels', description: 'Upscale stays for a special trip or anniversary.' },
  { category: 'accommodation', slug: 'hotel-or-guesthouse', title: 'Hotel or Guesthouse?', description: 'Pick the stay type that fits your pace.' },

  { category: 'food', slug: 'korean-food-for-beginners', title: 'Korean Food for Beginners', description: 'Start with easy favorites that are not too spicy.' },
  { category: 'food', slug: 'must-try-dishes', title: 'Must-Try Dishes', description: 'Classic meals to try on your first trip.' },
  { category: 'food', slug: 'finding-good-restaurants', title: 'Finding Good & Affordable Restaurants in Korea', description: 'Practical methods to choose well, avoid common mistakes, and understand real value when eating out in Korea.' },
  { category: 'food', slug: 'street-food-guide', title: 'Street Food Guide', description: 'What to eat at markets and night streets.' },
  { category: 'food', slug: 'foods-to-be-careful-with', title: 'Food to Be Careful With', description: 'Very spicy or unfamiliar dishes — what to delay, why it matters, and how to try them safely later.' },
  { category: 'food', slug: 'city-food-guides', title: 'City Food Guides', description: 'Quick food themes by city.' },

  { category: 'attractions', slug: 'top-places-in-korea', title: 'Top Places in Korea', description: 'Big highlights that most travelers enjoy.' },
  { category: 'attractions', slug: 'first-timer-favorites', title: 'First-Timer Favorites', description: 'Easy wins for your first visit.' },
  { category: 'attractions', slug: 'for-repeat-visitors', title: 'For Repeat Visitors', description: 'Fresh ideas if you have been before.' },
  { category: 'attractions', slug: 'entrance-fees', title: 'Entrance Fees', description: 'What to expect and when it is free.' },
  { category: 'attractions', slug: 'attraction-passes-discounts', title: 'Korea Attraction Passes & Discounts', description: 'Official attraction passes, regional discount cards, and when they genuinely reduce your travel costs in Korea.' },
  { category: 'attractions', slug: 'is-it-worth-it', title: 'Is It Worth It?', description: 'How to decide before you go.' },

  { category: 'practical-info', slug: 'sim-vs-esim-vs-wifi', title: 'SIM vs eSIM vs Wi-Fi', description: 'Pick the best option for your phone and budget.' },
  { category: 'practical-info', slug: 'cheapest-sim-options', title: 'Cheapest SIM Options', description: 'Low-cost plans that still work well.' },
  { category: 'practical-info', slug: 'how-to-pay', title: 'How to Pay', description: 'Cards, cash, and payment apps explained.' },
  { category: 'practical-info', slug: 'card-or-cash', title: 'Card or Cash?', description: 'When you need each one.' },
  { category: 'practical-info', slug: 'korea-travel-safety', title: 'Is Korea Safe?', description: 'Quick safety overview for travelers.' },
  { category: 'practical-info', slug: 'emergency-numbers', title: 'Emergency Numbers', description: 'The key numbers you should save.' },
  { category: 'practical-info', slug: 'travel-insurance-for-korea', title: 'Travel Insurance for Korea', description: 'Not required - but highly recommended.' },

  { category: 'immigration', slug: 'korea-entry-requirements', title: 'K-ETA & Immigration Process', description: 'Official 2026 entry guidance: K-ETA, e-Arrival Card, and airport procedure.' },
  { category: 'immigration', slug: 'do-you-need-a-visa', title: 'Do You Need a Visa?', description: 'How to check if a visa is required for you.' },
  { category: 'immigration', slug: 'documents-to-prepare', title: 'Documents to Prepare', description: 'Keep these ready to speed up entry.' },
  { category: 'shopping', slug: 'duty-free-shopping', title: 'Duty-Free Shopping', description: 'How to use airport and downtown duty-free stores.' },
  { category: 'shopping', slug: 'tax-refund-guide', title: 'Tax Refund Guide', description: 'Simple steps to get your refund.' },
  { category: 'shopping', slug: 'is-korea-cheap-to-shop', title: 'Is Korea Cheap to Shop?', description: 'What is worth buying and what is not.' }
] as const;

const legalPages: { path: string; title: string; description: string }[] = [];

const formatDate = (date: string) => date;

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

const buildSections = (category: CategorySlug): Section[] => {
  const headings = categoryTemplates[category];
  const bullets = categoryBullets[category];

  return headings.map((heading, index) => ({
    id: slugify(heading),
    title: heading,
    bullets: bullets[index]
  }));
};

const buildFaq = (title: string): FaqItem[] => [
  {
    question: `Is ${title.toLowerCase()} good for first-timers?`,
    answer: 'Yes. Start with the basics and add optional extras if you have time.'
  },
  {
    question: 'How much time should I plan?',
    answer: 'Most travelers are happy with 1 to 3 core activities per day.'
  },
  {
    question: 'What should I book early?',
    answer: 'Popular trains, key attractions, and weekend stays sell out first.'
  }
];

const buildCategoryPage = (category: CategorySlug): PageData => {
  const meta = categories.find((item) => item.slug === category);
  const sections = buildSections(category);
  const toc = sections.map((section) => ({ id: section.id, title: section.title }));
  const subPagePaths = subpages.filter((page) => page.category === category).map((page) => `/${category}/${page.slug}`);

  return {
    path: `/${category}`,
    title: meta?.title ?? category,
    description: meta?.description ?? '',
    category,
    toc,
    sections,
    faq: buildFaq(meta?.title ?? category),
    related: subPagePaths.slice(0, 8),
    lastUpdated: formatDate('Feb 3, 2026')
  };
};

const buildSubPage = (page: (typeof subpages)[number]): PageData => {
  const sections = buildSections(page.category);
  const toc = sections.map((section) => ({ id: section.id, title: section.title }));
  const siblings = subpages
    .filter((item) => item.category === page.category && item.slug !== page.slug)
    .map((item) => `/${item.category}/${item.slug}`);
  const cross = subpages
    .filter((item) => item.category !== page.category)
    .slice(0, 3)
    .map((item) => `/${item.category}/${item.slug}`);

  return {
    path: `/${page.category}/${page.slug}`,
    title: page.title,
    description: page.description,
    category: page.category,
    slug: page.slug,
    toc,
    sections,
    faq: buildFaq(page.title),
    related: [...siblings.slice(0, 6), ...cross].slice(0, 9),
    lastUpdated: formatDate('Feb 3, 2026')
  };
};

const buildLegalPage = (page: (typeof legalPages)[number]): PageData => {
  const sections: Section[] = [
    {
      id: 'why-this-page',
      title: 'Why this page exists',
      bullets: ['Short, clear info so you know what to expect.', 'We keep language simple and practical.', 'We update when policies change.']
    },
    {
      id: 'what-we-collect',
      title: 'What we collect',
      bullets: ['No personal data required to read the guide.', 'Anonymous analytics may be used later.', 'No account is needed.']
    },
    {
      id: 'your-choice',
      title: 'Your choice',
      bullets: ['Use the site freely for trip planning.', 'Contact us for corrections.', 'Check official sources for final rules.']
    },
    {
      id: 'updates',
      title: 'Updates',
      bullets: ['We refresh content as travel guidance changes.', 'Dates and rules can change quickly.', 'Keep your booking emails handy.']
    }
  ];

  const toc = sections.map((section) => ({ id: section.id, title: section.title }));

  return {
    path: page.path,
    title: page.title,
    description: page.description,
    toc,
    sections,
    faq: buildFaq(page.title),
    related: categories.map((category) => `/${category.slug}`).slice(0, 8),
    lastUpdated: formatDate('Feb 3, 2026')
  };
};

export const categoryPages = categories.map((category) => buildCategoryPage(category.slug));
export const subPageData = subpages.map((page) => buildSubPage(page));
export const legalPageData = legalPages.map((page) => buildLegalPage(page));

export const allPages: PageData[] = [
  ...categoryPages,
  ...subPageData,
  ...legalPageData,
  {
    path: '/',
    title: 'Traveling to Korea? Start Here',
    description: 'Simple travel tips for foreigners visiting Korea.',
    toc: [
      { id: 'how-long', title: 'How long will you stay?' },
      { id: 'choose-city', title: 'Choose a city' },
      { id: 'quick-guides', title: 'Quick Guides' },
      { id: 'start-basics', title: 'Start with the basics' }
    ],
    sections: [
      {
        id: 'how-long',
        title: 'How long will you stay?',
        bullets: ['Pick a trip length first to shape your pace.', 'Use the cards below to compare options.', 'Save one free day for weather changes.']
      },
      {
        id: 'choose-city',
        title: 'Choose a city',
        bullets: ['Choose one major base and one smaller city.', 'Balance shopping with nature breaks.', 'Plan city swaps around train schedules.']
      },
      {
        id: 'quick-guides',
        title: 'Quick Guides',
        bullets: ['Each category keeps info short and mobile-friendly.', 'Tap a card to jump in.', 'Bookmark the ones you need most.']
      },
      {
        id: 'start-basics',
        title: 'Start with the basics',
        bullets: ['Check entry rules and airport steps early.', 'Plan how you will pay and stay connected.', 'Save the emergency numbers just in case.']
      }
    ],
    faq: buildFaq('your first Korea trip'),
    related: categories.map((category) => `/${category.slug}`),
    lastUpdated: formatDate('Feb 3, 2026')
  }
];

export const getPageByPath = (path: string) => allPages.find((page) => page.path === path);

export const getCategoryBySlug = (slug: string) => categories.find((category) => category.slug === slug);

export const getSubPagesByCategory = (slug: CategorySlug) =>
  subPageData.filter((page) => page.category === slug);

export const getAllRoutes = () => allPages.map((page) => page.path);

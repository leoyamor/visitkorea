import AdSlot from '../components/AdSlot';
import Breadcrumbs from '../components/Breadcrumbs';
import Card from '../components/Card';
import RelatedLinks from '../components/RelatedLinks';
import Toc from '../components/Toc';
import { allPages, getSubPagesByCategory, categories } from '../lib/pages';
import styles from './home.module.css';

const home = allPages.find((page) => page.path === '/');

export const metadata = {
  title: 'Traveling to Korea? Start Here',
  description: 'Simple travel tips for foreigners visiting Korea.',
  alternates: {
    canonical: 'https://visitkorea.pages.dev/'
  },
  openGraph: {
    title: 'Traveling to Korea? Start Here',
    description: 'Simple travel tips for foreigners visiting Korea.',
    url: 'https://visitkorea.pages.dev/',
    type: 'website'
  }
};

export default function HomePage() {
  if (!home) return null;

  const itineraryCards = getSubPagesByCategory('itinerary');
  const cityCards = getSubPagesByCategory('cities');

  return (
    <div className={`${styles.wrapper} page--home`}>
      <Breadcrumbs items={[{ label: 'Home' }]} />

      <div className={styles.hero}>
        <h1 className="t-h1">Your Simple Guide to Traveling in Korea</h1>
        <p className="t-subheading">
          No overload, no confusion.
          <br />
          Just clear answers to help you plan, get around, eat well, and enjoy Korea.
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.main}>
          <div className={styles.intro}>
            <p>Short, friendly tips you can read on the go.</p>
            <p>Jump to a section and keep planning simple.</p>
          </div>

          <AdSlot variant="leaderboard" />

          <section id="how-long" className={styles.section}>
            <h2 className="t-section">How long will you stay?</h2>
            <p>Pick a trip length so your plan feels light and doable.</p>
            <div className={styles.cardGrid}>
              {itineraryCards.map((card) => (
                <Card
                  key={card.path}
                  href={card.path}
                  title={card.title}
                  description={card.description}
                  kicker="Itinerary"
                />
              ))}
            </div>
          </section>

          <section id="choose-city" className={styles.section}>
            <h2 className="t-section">Choose a city</h2>
            <p>Each city has a different vibe. Pick the one that fits you best.</p>
            <div className={styles.cardGrid}>
              {cityCards.map((card) => (
                <Card
                  key={card.path}
                  href={card.path}
                  title={card.title}
                  description={card.description}
                  kicker="City"
                />
              ))}
            </div>
          </section>

          <AdSlot variant="in-article" />

          <section id="quick-guides" className={styles.section}>
            <h2 className="t-section">Quick Guides</h2>
            <p>Fast, mobile-friendly answers for every part of your trip.</p>
            <div className={styles.cardGrid}>
              {categories.map((category) => (
                <Card
                  key={category.slug}
                  href={`/${category.slug}`}
                  title={category.title}
                  description={category.description}
                  imageSrc={category.image}
                  imageAlt={`${category.title} guide`}
                  kicker="Guide"
                />
              ))}
            </div>
          </section>

          <section id="start-basics" className={styles.section}>
            <h2 className="t-section">Start with the basics</h2>
            <p>Take care of the essentials before you dive into details.</p>
            <ul className={styles.bullets}>
              <li>Double-check entry rules and airport steps.</li>
              <li>Plan how you will pay and stay connected.</li>
              <li>Save the emergency numbers just in case.</li>
            </ul>
          </section>

          <AdSlot variant="footer" />

          <RelatedLinks links={home.related} />

          <section className={styles.faq}>
            <h3 className="t-section">FAQ</h3>
            {home.faq.map((item) => (
              <div key={item.question} className={styles.faqItem}>
                <h4 className="t-card-title">{item.question}</h4>
                <p>{item.answer}</p>
              </div>
            ))}
          </section>

          <p className={styles.updated}>Last updated: {home.lastUpdated}</p>
        </div>

        <aside className={styles.sidebar}>
          <Toc headings={home.toc} />
        </aside>
      </div>
    </div>
  );
}

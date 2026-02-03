import { notFound } from 'next/navigation';
import AdSlot from '../../components/AdSlot';
import Breadcrumbs from '../../components/Breadcrumbs';
import Card from '../../components/Card';
import RelatedLinks from '../../components/RelatedLinks';
import Toc from '../../components/Toc';
import {
  categories,
  categoryPages,
  getCategoryBySlug,
  getSubPagesByCategory,
  siteUrl
} from '../../lib/pages';
import styles from './category.module.css';

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }) {
  const meta = getCategoryBySlug(params.category);
  if (!meta) return {};

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${siteUrl}/${meta.slug}/`
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${siteUrl}/${meta.slug}/`
    }
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const meta = getCategoryBySlug(params.category);
  if (!meta) return notFound();

  const page = categoryPages.find((item) => item.path === `/${meta.slug}`);
  if (!page) return notFound();

  const cards = getSubPagesByCategory(meta.slug).slice(0, 9);

  return (
    <div className={styles.wrapper}>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: meta.title }]} />

      <div className={styles.header}>
        <h1>{meta.title}</h1>
        <p>{meta.description}</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.main}>
          <div className={styles.intro}>
            <p>Short notes first, deeper tips later.</p>
            <p>Save this page and open the guides you need most.</p>
          </div>

          <AdSlot variant="leaderboard" />

          <section id="category-cards" className={styles.section}>
            <h2>Start here</h2>
            <p>Tap a guide to get quick, mobile-friendly answers.</p>
            <div className={styles.cardGrid}>
              {cards.map((card) => (
                <Card key={card.path} href={card.path} title={card.title} description={card.description} />
              ))}
            </div>
          </section>

          {page.sections.map((section, index) => (
            <section key={section.id} id={section.id} className={styles.section}>
              <h2>{section.title}</h2>
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {index === 1 ? <AdSlot variant="in-article" /> : null}
            </section>
          ))}

          <AdSlot variant="footer" />

          <RelatedLinks links={page.related} />

          <section className={styles.faq}>
            <h3>FAQ</h3>
            {page.faq.map((item) => (
              <div key={item.question} className={styles.faqItem}>
                <h4>{item.question}</h4>
                <p>{item.answer}</p>
              </div>
            ))}
          </section>

          <p className={styles.updated}>Last updated: {page.lastUpdated}</p>
        </div>

        <aside className={styles.sidebar}>
          <Toc headings={[{ id: 'category-cards', title: 'Start here' }, ...page.toc]} />
        </aside>
      </div>
    </div>
  );
}

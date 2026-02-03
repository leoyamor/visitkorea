import AdSlot from './AdSlot';
import Breadcrumbs, { Crumb } from './Breadcrumbs';
import Toc, { TocItem } from './Toc';
import RelatedLinks from './RelatedLinks';
import styles from './PageLayout.module.css';

interface Section {
  id: string;
  title: string;
  bullets: string[];
}

interface FaqItem {
  question: string;
  answer: string;
}

interface PageLayoutProps {
  title: string;
  description: string;
  crumbs: Crumb[];
  toc: TocItem[];
  sections: Section[];
  related: string[];
  faq: FaqItem[];
  lastUpdated: string;
}

export default function PageLayout({
  title,
  description,
  crumbs,
  toc,
  sections,
  related,
  faq,
  lastUpdated
}: PageLayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Breadcrumbs items={crumbs} />
      <div className={styles.header}>
        <h1>{title}</h1>
        <p className={styles.subtitle}>{description}</p>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.main}>
          <div className={styles.intro}>
            <p>Quick, friendly notes so you can plan without stress.</p>
            <p>Pick the sections you need and save the rest for later.</p>
          </div>

          <AdSlot variant="leaderboard" />

          {sections.map((section, index) => (
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

          <RelatedLinks links={related} />

          <div className={styles.faq}>
            <h3>FAQ</h3>
            {faq.map((item) => (
              <div key={item.question} className={styles.faqItem}>
                <h4>{item.question}</h4>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>

          <p className={styles.updated}>Last updated: {lastUpdated}</p>
        </div>

        <aside className={styles.sidebar}>
          <Toc headings={toc} />
        </aside>
      </div>
    </div>
  );
}

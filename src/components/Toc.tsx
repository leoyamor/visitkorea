import styles from './Toc.module.css';

export interface TocItem {
  id: string;
  title: string;
}

export default function Toc({ headings }: { headings: TocItem[] }) {
  return (
    <div className={styles.toc}>
      <p className={styles.title}>On this page</p>
      <ul className={styles.list}>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`} className={styles.link}>
              {heading.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

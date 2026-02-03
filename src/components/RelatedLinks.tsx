import Link from 'next/link';
import styles from './RelatedLinks.module.css';
import { getPageByPath } from '../lib/pages';

export default function RelatedLinks({ links }: { links: string[] }) {
  return (
    <div className={styles.related}>
      <h3 className={styles.title}>Related</h3>
      <div className={styles.grid}>
        {links.map((path) => {
          const page = getPageByPath(path);
          if (!page) return null;
          return (
            <Link key={path} href={path} className={styles.card}>
              <p className={styles.cardTitle}>{page.title}</p>
              <p className={styles.cardDesc}>{page.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

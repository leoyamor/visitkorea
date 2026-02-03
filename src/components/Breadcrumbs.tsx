import Link from 'next/link';
import styles from './Breadcrumbs.module.css';

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className={styles.crumb}>
          {item.href ? (
            <Link href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ) : (
            <span className={styles.current}>{item.label}</span>
          )}
          {index < items.length - 1 ? <span className={styles.sep}>/</span> : null}
        </span>
      ))}
    </nav>
  );
}

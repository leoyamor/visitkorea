import Link from 'next/link';
import { categories } from '../lib/pages';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.logo} href="/">Korea Guide</Link>

        <nav className={styles.nav}>
          {categories.map((category) => (
            <Link key={category.slug} href={`/${category.slug}`} className={styles.navLink}>
              {category.title}
            </Link>
          ))}
        </nav>

        <details className={styles.mobileMenu}>
          <summary className={styles.menuButton} aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
          </summary>
          <div className={styles.menuPanel}>
            {categories.map((category) => (
              <Link key={category.slug} href={`/${category.slug}`} className={styles.menuLink}>
                {category.title}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}

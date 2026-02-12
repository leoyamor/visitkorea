import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <p className={styles.title}>Korea Travel Guide</p>
          <p className={styles.subtitle}>Short, friendly tips for first-time travelers.</p>
        </div>
        <div className={styles.links}></div>
      </div>
    </footer>
  );
}

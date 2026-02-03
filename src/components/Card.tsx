import Link from 'next/link';
import styles from './Card.module.css';

interface CardProps {
  href: string;
  title: string;
  description: string;
  kicker?: string;
}

export default function Card({ href, title, description, kicker }: CardProps) {
  return (
    <Link href={href} className={styles.card}>
      {kicker ? <span className={styles.kicker}>{kicker}</span> : null}
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}

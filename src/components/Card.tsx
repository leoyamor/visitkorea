import Link from 'next/link';
import styles from './Card.module.css';

interface CardProps {
  href: string;
  title: string;
  description: string;
  kicker?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Card({ href, title, description, kicker, imageSrc, imageAlt }: CardProps) {
  return (
    <Link href={href} className={styles.card}>
      {imageSrc ? (
        <div className={styles.imageWrap}>
          <img src={imageSrc} alt={imageAlt ?? title} loading="lazy" />
        </div>
      ) : null}
      {kicker ? <span className={styles.kicker}>{kicker}</span> : null}
      <h3 className="t-card-title">{title}</h3>
      <p className="t-card-desc">{description}</p>
    </Link>
  );
}

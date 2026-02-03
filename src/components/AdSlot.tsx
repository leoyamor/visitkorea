import styles from './AdSlot.module.css';

type AdVariant = 'leaderboard' | 'in-article' | 'footer';

const labelMap: Record<AdVariant, string> = {
  leaderboard: 'Leaderboard Ad',
  'in-article': 'In-Article Ad',
  footer: 'Footer Ad'
};

export default function AdSlot({ variant }: { variant: AdVariant }) {
  return (
    <div className={`${styles.adSlot} ${styles[variant]}`}>
      {/* TODO: Replace this placeholder with the AdSense script/slot for ${variant}. */}
      <span>{labelMap[variant]}</span>
    </div>
  );
}

import type { ProgressPercent } from '../types';
import styles from '../QrmPage.module.css';

/** Quarters fill upper left, upper right, lower left, lower right, like the whiteboard. */
const quarterPaths = [
  'M50,50 L10,50 A40,40 0 0,1 50,10 Z',
  'M50,50 L50,10 A40,40 0 0,1 90,50 Z',
  'M50,50 L50,90 A40,40 0 0,1 10,50 Z',
  'M50,50 L90,50 A40,40 0 0,1 50,90 Z',
];

interface ProgressCircleProps {
  percent: ProgressPercent;
  showLabel: boolean;
}

export function ProgressCircle({ percent, showLabel }: ProgressCircleProps) {
  const filledQuarters = percent / 25;

  return (
    <span className={styles.qrmCircleWrap}>
      <svg className={styles.qrmCircle} viewBox="0 0 100 100" aria-hidden="true">
        {quarterPaths.map((path, index) => (
          <path
            key={path}
            className={index < filledQuarters ? `${styles.qrmQuarter} ${styles.filled}` : styles.qrmQuarter}
            d={path}
          />
        ))}
        <circle cx="50" cy="50" r="40" className={styles.qrmOutline} />
        <line x1="10" y1="50" x2="90" y2="50" className={styles.qrmCrosshair} />
        <line x1="50" y1="10" x2="50" y2="90" className={styles.qrmCrosshair} />
      </svg>

      {showLabel ? <span className={styles.qrmCircleValue}>{percent}</span> : null}
    </span>
  );
}

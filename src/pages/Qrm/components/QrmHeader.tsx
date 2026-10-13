import { ProgressCircle } from '../tables/ProgressCircle';
import type { ProgressPercent } from '../tables/types';
import styles from '../QrmPage.module.css';

interface QrmHeaderProps {
  year: number;
  saveState: string;
  legendSteps: ProgressPercent[];
}

export function QrmHeader({ year, saveState, legendSteps }: QrmHeaderProps) {
  return (
    <header className={styles.qrmHeader}>
      <h1 className={styles.qrmTitle}>QRM</h1>
      <span className={styles.qrmYear}>{year}</span>

      <div className={styles.qrmLegend}>
        {legendSteps.map((step) => (
          <div key={step} className={styles.qrmLegendItem}>
            <span className={styles.qrmLegendLabel}>{step} %</span>
            <ProgressCircle percent={step} size="legend" />
          </div>
        ))}
      </div>

      <div className={styles.qrmToolbar}>
        <span className={styles.qrmSaveState}>{saveState}</span>
      </div>
    </header>
  );
}

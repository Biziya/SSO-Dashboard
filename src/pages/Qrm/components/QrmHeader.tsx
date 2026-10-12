import type { ProgressPercent } from '../types';
import styles from '../QrmPage.module.css';
import { ProgressCircle } from './ProgressCircle';

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
            <ProgressCircle percent={step} showLabel={false} />
          </div>
        ))}
      </div>

      <div className={styles.qrmToolbar}>
        <span className={styles.qrmSaveState}>{saveState}</span>
      </div>
    </header>
  );
}

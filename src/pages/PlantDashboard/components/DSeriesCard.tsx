import { cx } from '../../../utils/cx';
import type { DSeriesItem } from '../types';
import styles from '../PlantDashboardPage.module.css';

interface DSeriesCardProps {
  items: DSeriesItem[];
}

export function DSeriesCard({ items }: DSeriesCardProps) {
  return (
    <div className={cx(styles.card, styles.dSeriesCard)}>
      {items.map((item) => (
        <div key={item.code} className={styles.dSeriesItem}>
          <strong>{item.code}</strong>

          <div className={cx(styles.statusTile, item.showArrow && styles.hasArrow)}>
            <span className={styles.valueText}>{item.value}</span>
            {item.showArrow ? <span className={styles.arrowSymbol}>▼</span> : null}
          </div>
        </div>
      ))}
    </div>
  );
}

import { cx } from '../../../utils/cx';
import type { DSeriesItem } from '../types';
import styles from '../OperatorDashboardPage.module.css';

export function DSeriesCard({ items }: { items: DSeriesItem[] }) {
  return (
    <div className={cx(styles.card, styles.dSeriesCard)}>
      {items.map((item) => (
        <div key={item.code} className={styles.dSeriesItem}>
          <strong>{item.code}</strong>
          <div className={styles.statusTile}>
            <span className={styles.valueText}>{item.value}</span>
            {item.showArrow ? <span className={styles.arrowSymbol}>▼</span> : null}
          </div>
        </div>
      ))}
    </div>
  );
}

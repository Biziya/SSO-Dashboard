import { cx } from '../../../utils/cx';
import type { DSeriesItem } from '../types';
import styles from '../EditPlantDashboardPage.module.css';

/**
 * Column buttons. In Blazor pressing the active column moved the arrow
 * through the series; that sequence is not reproduced, so the buttons only
 * show their enabled and disabled states.
 */
export function DSeriesCard({ items }: { items: DSeriesItem[] }) {
  return (
    <div className={cx(styles.card, styles.dSeriesCard)}>
      {items.map((item) => (
        <div key={item.code} className={styles.dSeriesItem}>
          <div>
            <strong>{item.code}</strong>
          </div>
          <button type="button" className={cx(styles.dSeriesBtn, item.showArrow && styles.arrow)} disabled={!item.isClickable}>
            <div className={styles.statusTile}>
              <span className={styles.valueText}>{item.value}</span>
              {item.showArrow ? <span className={styles.arrowSymbol}>▼</span> : null}
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}

import { cx } from '../../../utils/cx';
import type { FrontEndMetric } from './types';
import styles from './PlantTables.module.css';
import { MetricValue } from './MetricValue';

interface FrontEndTableProps {
  metrics: FrontEndMetric[];
}

export function FrontEndTable({ metrics }: FrontEndTableProps) {
  const pumpCount = metrics.filter((metric) => metric.isPump).length;
  const firstPumpIndex = metrics.findIndex((metric) => metric.isPump);

  return (
    <div className={styles.tableFrame}>
      <h2 className={styles.resinTitle}>FRONT-END UNIT 100</h2>

      <table className={cx(styles.sectionValueTable, styles.frontEndTable)}>
        <colgroup>
          <col className={styles.frontEndLabelCol} />
          <col className={styles.frontEndNameCol} />
          <col className={styles.frontEndValueCol} />
        </colgroup>
        <tbody>
          {metrics.map((metric, index) =>
            metric.isPump ? (
              <tr key={metric.name}>
                {index === firstPumpIndex ? (
                  <td rowSpan={pumpCount}>
                    <strong className={styles.smallLabel}>DEBIT</strong>
                  </td>
                ) : null}
                <td className={cx(styles.center, styles.infoText, styles.pumpName)}>{metric.name}</td>
                <td className={styles.infoText}>
                  <MetricValue value={metric.value} unit={metric.measurement} />
                </td>
              </tr>
            ) : (
              <tr key={metric.name}>
                <td>
                  <strong className={styles.smallLabel}>{metric.name}</strong>
                </td>
                <td className={styles.infoText} colSpan={2}>
                  <MetricValue value={metric.value} unit={metric.measurement} />
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
}

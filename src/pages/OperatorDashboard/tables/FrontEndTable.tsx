import { cx } from '../../../utils/cx';
import type { FrontEndMetric } from './types';
import styles from './OperatorTables.module.css';

export function FrontEndTable({ metrics }: { metrics: FrontEndMetric[] }) {
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
          {metrics.map((metric, index) => (
            <tr key={metric.name}>
              {metric.isPump && index === firstPumpIndex ? (
                <td rowSpan={pumpCount}>
                  <strong className={styles.smallLabel}>DEBIT</strong>
                </td>
              ) : null}
              <td>
                <strong className={styles.smallLabel}>{metric.name}</strong>
              </td>
              <td className={styles.infoText} colSpan={metric.isPump ? 1 : 2}>
                <div className={styles.metricValueWrapper}>
                 <strong className={styles.metricValueInput}>{metric.value}</strong>
                 {metric.measurement !== '' ? <span className={styles.metricMeasurement}>{metric.measurement}</span> : null}
               </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

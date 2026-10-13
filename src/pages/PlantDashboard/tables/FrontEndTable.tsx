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
          {metrics.map((metric, index) => (
           <tr key={metric.name}>
             {metric.isPump && index === firstPumpIndex ? (
               <td rowSpan={pumpCount}>
                 <strong className={styles.smallLabel}>DEBIT</strong>
               </td>
             ) : null}
             <td className={metric.isPump ? cx(styles.center, styles.infoText, styles.pumpName) : undefined}>
               {metric.isPump ? metric.name : <strong className={styles.smallLabel}>{metric.name}</strong>}
             </td>
             <td className={styles.infoText} colSpan={metric.isPump ? undefined : 2}>
               <MetricValue value={metric.value} unit={metric.measurement} />
             </td>
           </tr>
         ))}
        </tbody>
      </table>
    </div>
  );
}

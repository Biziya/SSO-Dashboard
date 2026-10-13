import { cx } from '../../../utils/cx';
import type { LabRow } from './types';
import styles from './EditPlantTables.module.css';

export function LabTable({ rows, comment }: { rows: LabRow[]; comment: string }) {
  return (
    <div className={cx(styles.tableFrame, styles.samplesCard)}>
      <table className={styles.labTable}>
        <thead>
          <tr>
            <th className={styles.resinTitle}>Lab</th>
            <th className={styles.resinTitle}>Samples</th>
            <th className={styles.resinTitle}>ANA</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.period}>
              <td>{row.period}</td>
              <td className={cx(styles.editableCell, styles.infoText, styles.center)}>
                <input className={styles.editInput} aria-label={`${row.period} samples`} defaultValue={row.samples} />
              </td>
              <td className={cx(styles.editableCell, styles.infoText, styles.center)}>
                <input className={styles.editInput} aria-label={`${row.period} ANA`} defaultValue={row.ana} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.labEventsContainer}>
        <table className={styles.labEventsTable}>
          <tbody>
            <tr>
              <td className={styles.labEventsLabel}>Lab Events:</td>
              <td className={styles.labEventsValue}>
                <textarea className={cx(styles.editInput, styles.labEventsTextarea)} aria-label="Lab comment" defaultValue={comment} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

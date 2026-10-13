import { cx } from '../../../utils/cx';
import type { LabRow } from './types';
import styles from './PlantTables.module.css';

interface LabTableProps {
  rows: LabRow[];
  comment: string;
}

export function LabTable({ rows, comment }: LabTableProps) {
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
              <td className={cx(styles.infoText, styles.center)}>{row.samples}</td>
              <td className={cx(styles.infoText, styles.center)}>{row.ana}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.labEventsContainer}>
        <table className={styles.labEventsTable}>
          <tbody>
            <tr>
              <td className={styles.labEventsLabel}>
                <span className={styles.labEventsLabelText}>Lab Events:</span>
              </td>
              <td className={cx(styles.labEventsValue, styles.mediumComment)}>
                <textarea className={cx(styles.editInput, styles.labEventsTextarea)} aria-label="Lab comment" value={comment} readOnly />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

import { cx } from '../../../utils/cx';
import type { LabRow } from '../types';
import styles from '../OperatorDashboardPage.module.css';

export function LabCard({ rows, comment }: { rows: LabRow[]; comment: string }) {
  return (
    <div className={cx(styles.card, styles.samplesCard)}>
      <table>
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
              <td className={styles.infoText}>{row.samples}</td>
              <td className={styles.infoText}>{row.ana}</td>
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

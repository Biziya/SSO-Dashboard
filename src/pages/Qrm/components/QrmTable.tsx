import type { QrmRow } from '../types';
import styles from '../QrmPage.module.css';
import { ProgressCircle } from './ProgressCircle';

interface QrmTableProps {
  rows: QrmRow[];
}

/**
 * The task board. Cells can be typed into for review, but nothing is saved,
 * and the status circles do not advance (that updated stored data).
 */
export function QrmTable({ rows }: QrmTableProps) {
  return (
    <table className={styles.qrmTable}>
      <thead>
        <tr>
          <th className={styles.colNumber} rowSpan={2}></th>
          <th className={styles.colTask} rowSpan={2}>
            High-Priority Tasks
          </th>
          <th className={styles.colWho} rowSpan={2}>
            Responsible
          </th>
          <th className={styles.colDate} colSpan={2}>
            Date
          </th>
          <th className={styles.colStatus} rowSpan={2}>
            Status
          </th>
        </tr>
        <tr>
          <th className={styles.colDate}>Start</th>
          <th className={styles.colDate}>Finish</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.number}>
            <td className={styles.colNumber}>{row.number}</td>
            <td className={styles.colTask}>
              <textarea
                className={`${styles.qrmInput} ${styles.qrmTaskInput}`}
                rows={2}
                aria-label={`Task ${row.number}`}
                defaultValue={row.task}
              />
            </td>
            <td className={styles.colWho}>
              <input
                className={`${styles.qrmInput} ${styles.center}`}
                aria-label={`Responsible for task ${row.number}`}
                defaultValue={row.responsible}
              />
            </td>
            <td className={styles.colDate}>
              <input
                className={`${styles.qrmInput} ${styles.center}`}
                aria-label={`Start date for task ${row.number}`}
                defaultValue={row.startDate}
              />
            </td>
            <td className={styles.colDate}>
              <input
                className={`${styles.qrmInput} ${styles.center}`}
                aria-label={`Finish date for task ${row.number}`}
                defaultValue={row.finishDate}
              />
            </td>
            <td className={styles.colStatus}>
              <button
                type="button"
                className={styles.qrmStatusButton}
                title={`${row.progressPercent}% complete`}
                aria-label={`Progress for task ${row.number}, ${row.progressPercent} percent`}
              >
                <ProgressCircle percent={row.progressPercent} showLabel />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

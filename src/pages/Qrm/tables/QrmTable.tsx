import { cx } from '../../../utils/cx';
import { ProgressCircle } from './ProgressCircle';
import type { QrmRow } from './types';
import styles from './QrmTable.module.css';

interface QrmTableProps {
  rows: QrmRow[];
}

/**
 * The task board. Cells can be typed into for review, but nothing is saved,
 * and the status circles do not advance (that updated stored data).
 */
export function QrmTable({ rows }: QrmTableProps) {
  return (
    <div className={styles.tableFrame}>
      <table className={styles.qrmTable}>
        <colgroup>
          <col className={styles.colNumber} />
          <col className={styles.colTask} />
          <col className={styles.colWho} />
          <col className={styles.colDate} />
          <col className={styles.colDate} />
          <col className={styles.colStatus} />
        </colgroup>
        <thead>
          <tr>
            <th rowSpan={2}></th>
            <th rowSpan={2}>High-Priority Tasks</th>
            <th rowSpan={2}>Responsible</th>
            <th colSpan={2}>Date</th>
            <th rowSpan={2}>Status</th>
          </tr>
          <tr>
            <th>Start</th>
            <th>Finish</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.number}>
              <td className={styles.numberCell}>{row.number}</td>
              <td>
                <textarea
                  className={cx(styles.qrmInput, styles.qrmTaskInput)}
                  rows={2}
                  aria-label={`Task ${row.number}`}
                  defaultValue={row.task}
                />
              </td>
              <td>
                <input
                  className={cx(styles.qrmInput, styles.center)}
                  aria-label={`Responsible for task ${row.number}`}
                  defaultValue={row.responsible}
                />
              </td>
              <td>
                <input
                  className={cx(styles.qrmInput, styles.center)}
                  aria-label={`Start date for task ${row.number}`}
                  defaultValue={row.startDate}
                />
              </td>
              <td>
                <input
                  className={cx(styles.qrmInput, styles.center)}
                  aria-label={`Finish date for task ${row.number}`}
                  defaultValue={row.finishDate}
                />
              </td>
              <td className={styles.statusCell}>
                <button
                  type="button"
                  className={styles.qrmStatusButton}
                  title={`${row.progressPercent}% complete`}
                  aria-label={`Progress for task ${row.number}, ${row.progressPercent} percent`}
                >
                  <ProgressCircle percent={row.progressPercent} size="row" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

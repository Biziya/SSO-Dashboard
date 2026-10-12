import { cx } from '../../../utils/cx';
import type { StorageRow, StorageStatus } from '../types';
import styles from '../OperatorDashboardPage.module.css';
import { MetricValue } from './MetricValue';

const statusIndicator: Record<StorageStatus, { symbol: string; className: string | undefined }> = {
  OK: { symbol: '●', className: styles.statusOk },
  NOK: { symbol: '●', className: styles.statusNok },
  '': { symbol: '◌', className: styles.statusEmpty },
};

export function StorageTable({ rows }: { rows: StorageRow[] }) {
  return (
    <table className={styles.storageTable}>
      <thead>
        <tr>
          <th className={cx(styles.titleBgColor, styles.width15)}></th>
          <th className={cx(styles.titleBgColor, styles.width15)}>Storage status</th>
          <th className={cx(styles.titleBgColor, styles.width15)}>
            Rem.Qty (m<sup>3</sup>)
          </th>
          <th className={cx(styles.titleBgColor, styles.width15)}>Spec.Weight (t)</th>
          <th className={cx(styles.titleBgColor, styles.width40)}>Comment</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          const indicator = statusIndicator[row.status];

          return (
            <tr key={row.name}>
              <td>
                <strong>{row.name}</strong>
              </td>
              <td>
                <span className={cx(styles.okIndicator, indicator.className)}>{indicator.symbol}</span> {row.status}
              </td>
              <td className={styles.infoText}>
                <MetricValue value={row.quantity} />
              </td>
              <td className={styles.infoText}>
                <MetricValue value={row.weight} />
              </td>
              <td>{row.comment}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

import { cx } from '../../../utils/cx';
import type { StorageRow, StorageStatus } from './types';
import styles from './EditPlantTables.module.css';

const statusIndicator: Record<StorageStatus, { symbol: string; className: string | undefined }> = {
  OK: { symbol: '●', className: styles.statusOk },
  NOK: { symbol: '●', className: styles.statusNok },
  '': { symbol: '◌', className: styles.statusEmpty },
};

export function StorageTable({ rows }: { rows: StorageRow[] }) {
  return (
    <div className={cx(styles.tableFrame, styles.storageFrame)}>
      <table className={styles.storageTable}>
        <thead>
          <tr>
            <th className={cx(styles.titleBgColor, styles.width15)}></th>
            <th className={cx(styles.titleBgColor, styles.width15)}>Storage status</th>
            <th className={cx(styles.titleBgColor, styles.width15)}>
              Qty (m<sup>3</sup>)
            </th>
            <th className={cx(styles.titleBgColor, styles.width15)}>Weight (t)</th>
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
                <td className={cx(styles.editableCell, styles.statusEditCell)}>
                  <span className={cx(styles.okIndicator, indicator.className)}>{indicator.symbol}</span>
                  <select className={cx(styles.editInput, styles.storageStatusInput)} aria-label={`${row.name} status`} defaultValue={row.status}>
                    <option value="">-</option>
                    <option value="OK">OK</option>
                    <option value="NOK">NOK</option>
                  </select>
                </td>
                <td className={cx(styles.editableCell, styles.infoText, styles.center)}>
                  <input className={cx(styles.editInput, styles.metricValueInput)} aria-label={`${row.name} remaining`} defaultValue={row.quantity} />
                </td>
                <td className={cx(styles.editableCell, styles.infoText, styles.center)}>
                  <input className={cx(styles.editInput, styles.metricValueInput)} aria-label={`${row.name} weight`} defaultValue={row.weight} />
                </td>
                <td className={styles.editableCell}>
                  <textarea className={styles.editInput} aria-label={`${row.name} comment`} defaultValue={row.comment} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

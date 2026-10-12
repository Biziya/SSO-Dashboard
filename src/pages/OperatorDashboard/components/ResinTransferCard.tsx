import { cx } from '../../../utils/cx';
import type { ResinTransferRow } from '../types';
import styles from '../OperatorDashboardPage.module.css';

export function ResinTransferCard({ rows }: { rows: ResinTransferRow[] }) {
  return (
    <div className={cx(styles.card, styles.resinCard)}>
      <table className={styles.resinTransferTable}>
        <colgroup>
          <col className={styles.resinNumberCol} />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th colSpan={4}>
              <h2 className={styles.resinTitle}>CHARGED (1) &amp; REGENERATED (2) RESIN TRANSFER UNIT 200</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className={styles.valueHeading}></th>
            <th className={styles.transferHeading}>START</th>
            <th className={styles.transferHeading}>END</th>
            <th className={styles.transferHeading}>DURATION</th>
          </tr>
          {rows.map((row) => (
            <tr key={row.number}>
              <th>{row.number}</th>
              <td className={styles.center}>{row.startTime}</td>
              <td className={styles.center}>{row.endTime}</td>
              <td className={cx(styles.infoText, styles.center)}>{row.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

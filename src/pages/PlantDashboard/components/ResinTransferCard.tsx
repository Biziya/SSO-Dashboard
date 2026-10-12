import { cx } from '../../../utils/cx';
import type { ResinTransferRow } from '../types';
import styles from '../PlantDashboardPage.module.css';

interface ResinTransferCardProps {
  rows: ResinTransferRow[];
}

export function ResinTransferCard({ rows }: ResinTransferCardProps) {
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
              <h2 className={styles.resinTitle}>
                CHARGED (1) &amp; REGENERATED (2) <span className={styles.resinUnit}>RESIN.TRANS UNIT 200</span>
              </h2>
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
              <td className={styles.center}>{row.start}</td>
              <td className={styles.center}>{row.end}</td>
              <td className={cx(styles.infoText, styles.center)}>{row.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

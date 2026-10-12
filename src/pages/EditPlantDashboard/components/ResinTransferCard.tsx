import { MudTextPicker } from '../../../components/Mud/MudPickerField';
import { cx } from '../../../utils/cx';
import type { ResinTransferRow } from '../types';
import styles from '../EditPlantDashboardPage.module.css';

function PickerCell({ kind, value }: { kind: 'date' | 'time'; value: string }) {
  return (
    <td className={cx(styles.editableCell, styles.resinDateTimeCell)}>
      <MudTextPicker kind={kind} value={value} placeholder={kind === 'date' ? 'MM/DD' : undefined} />
    </td>
  );
}

export function ResinTransferCard({ rows }: { rows: ResinTransferRow[] }) {
  return (
    <div className={cx(styles.card, styles.resinCard)}>
      <table className={styles.resinTransferTable}>
        <colgroup>
          <col className={styles.resinNumberCol} />
          <col />
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th colSpan={6}>
              <h2 className={styles.resinTitle}>CHARGED (1) &amp; REGENERATED (2) RESIN TRANSFER UNIT 200</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className={styles.valueHeading} rowSpan={2}></th>
            <th className={styles.transferHeading} colSpan={2}>
              Start
            </th>
            <th className={styles.transferHeading} colSpan={2}>
              End
            </th>
            <th className={styles.transferHeading} rowSpan={2}>
              DURATION
            </th>
          </tr>
          <tr>
            <th className={styles.transferHeading}>Date</th>
            <th className={styles.transferHeading}>Time</th>
            <th className={styles.transferHeading}>Date</th>
            <th className={styles.transferHeading}>Time</th>
          </tr>
          {rows.map((row) => (
            <tr key={row.number}>
              <td>{row.number}</td>
              <PickerCell kind="date" value={row.startDate} />
              <PickerCell kind="time" value={row.startTime} />
              <PickerCell kind="date" value={row.endDate} />
              <PickerCell kind="time" value={row.endTime} />
              <td className={cx(styles.center, styles.infoText)}>{row.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

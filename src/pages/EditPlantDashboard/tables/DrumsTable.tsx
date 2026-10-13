import { cx } from '../../../utils/cx';
import type { DrumRow } from './types';
import styles from './EditPlantTables.module.css';

function DrumCell({ row, value, column }: { row: DrumRow; value: string; column: string }) {
  if (row.isCalculated) {
    return (
      <td className={cx(styles.calculatedCell, styles.center)}>
        <div className={styles.metricValueWrapper}>{value}</div>
      </td>
    );
  }

  return (
    <td className={cx(styles.editableCell, styles.infoText, styles.center)}>
      <div className={styles.metricValueWrapper}>
        <input className={cx(styles.editInput, styles.metricValueInput)} aria-label={`${row.name} ${column}`} defaultValue={value} />
      </div>
    </td>
  );
}

/** The Net row is tinted: it was calculated from gross and tare, not typed. */
export function DrumsTable({ rows }: { rows: DrumRow[] }) {
  return (
    <div className={cx(styles.tableFrame, styles.samplesCard)}>
      <table>
        <thead>
          <tr>
            <th className={styles.resinTitle}>YC DRUMS</th>
            <th className={styles.resinTitle}>ON THE SCALES</th>
            <th className={styles.resinTitle}>ON THE TFA</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <DrumCell row={row} value={row.scale} column="on the scales" />
              <DrumCell row={row} value={row.tfa} column="on the TFA" />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

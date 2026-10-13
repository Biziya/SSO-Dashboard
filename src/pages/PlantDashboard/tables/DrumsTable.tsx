import { cx } from '../../../utils/cx';
import type { DrumRow } from './types';
import styles from './PlantTables.module.css';
import { MetricValue } from './MetricValue';

interface DrumsTableProps {
  rows: DrumRow[];
}

export function DrumsTable({ rows }: DrumsTableProps) {
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
              <td className={styles.infoText}>
                <MetricValue value={row.scale} />
              </td>
              <td className={styles.infoText}>
                <MetricValue value={row.tfa} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

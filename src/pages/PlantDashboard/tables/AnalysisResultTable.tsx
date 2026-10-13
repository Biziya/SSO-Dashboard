import type { AnalysisSample, TextTone } from './types';
import styles from './PlantTables.module.css';
import { MetricValue } from './MetricValue';

const toneClass: Record<TextTone, string | undefined> = {
  default: undefined,
  info: styles.infoText,
  danger: styles.dangerText,
};

interface AnalysisResultTableProps {
  samples: AnalysisSample[];
}

export function AnalysisResultTable({ samples }: AnalysisResultTableProps) {
  return (
    <div className={styles.tableFrame}>
      <table>
        <thead>
          <tr>
            <th colSpan={samples.length + 1} className={styles.resinTitle}>
              ANALYSIS RESULT (-1 day) UNITS 100 &amp; 200
            </th>
          </tr>
          <tr>
            <th></th>
            {samples.map((sample) => (
              <th key={sample.name}>{sample.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className={styles.infoText}>
              U<sup>+</sup>
            </th>
            {samples.map((sample) => (
              <td key={sample.name} className={toneClass[sample.uPlusTone]}>
                <MetricValue value={sample.uPlus} unit="mg/L" />
              </td>
            ))}
          </tr>
          <tr>
            <th className={styles.infoText}>pH</th>
            {samples.map((sample) => (
              <td key={sample.name}>
                <MetricValue value={sample.ph} />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

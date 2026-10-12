import { cx } from '../../../utils/cx';
import type { AnalysisSample } from '../types';
import styles from '../OperatorDashboardPage.module.css';
import { toneClass } from './textTone';

/** U+ and pH can be typed in, and the U+ colour picked (B = blue, R = red). Nothing is saved. */
export function AnalysisResultCard({ samples }: { samples: AnalysisSample[] }) {
  return (
    <div className={styles.card}>
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
              <td key={sample.name} className={cx(styles.editableCell, toneClass[sample.uPlusTone])}>
                <div className={styles.metricValueWrapper}>
                  <input
                    className={cx(styles.editInput, styles.metricValueInput)}
                    type="text"
                    aria-label={`${sample.name} U+`}
                    defaultValue={sample.uPlus}
                  />
                  <select
                    className={toneClass[sample.uPlusTone]}
                    aria-label={`${sample.name} U+ text color`}
                    title="Text color"
                    defaultValue={sample.uPlusTone}
                  >
                    <option value="">-</option>
                    <option value="info-text">B</option>
                    <option value="danger-text">R</option>
                  </select>
                </div>
              </td>
            ))}
          </tr>
          <tr>
            <th className={styles.infoText}>pH</th>
            {samples.map((sample) => (
              <td key={sample.name} className={styles.editableCell}>
                <input className={styles.editInput} type="text" aria-label={`${sample.name} pH`} defaultValue={sample.ph} />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

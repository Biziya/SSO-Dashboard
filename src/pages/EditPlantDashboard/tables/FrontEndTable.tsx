import { cx } from '../../../utils/cx';
import type { FrontEndMetric, PumpMetric, ValueMetric } from './types';
import styles from './EditPlantTables.module.css';
import { ValueInput } from './ValueInput';

interface PumpRowProps {
  metric: PumpMetric;
  pumpOptions: string[];
  debitRowSpan: number | null;
}

function PumpRow({ metric, pumpOptions, debitRowSpan }: PumpRowProps) {
  return (
    <tr>
      {debitRowSpan === null ? null : (
        <td rowSpan={debitRowSpan}>
          <strong>DEBIT</strong>
        </td>
      )}
      <td>
        <strong>
          <select className={styles.pumpSelect} aria-label={metric.name} defaultValue={metric.name}>
            <option value="">-</option>
            {pumpOptions.map((pump) => (
              <option key={pump} value={pump} disabled={metric.unavailablePumps.includes(pump)}>
                {pump}
              </option>
            ))}
          </select>
        </strong>
      </td>
      <td className={cx(styles.editableCell, styles.infoText)}>
        <ValueInput label={metric.name} value={metric.value} unit={metric.measurement} />
      </td>
    </tr>
  );
}

function ValueRow({ metric }: { metric: ValueMetric }) {
  return (
    <tr>
      <td>
        <strong>{metric.name}</strong>
      </td>
      <td className={cx(styles.editableCell, styles.infoText)} colSpan={2}>
        <ValueInput
          label={metric.name}
          value={metric.value}
          unit={metric.measurement}
          inputClassName={metric.isDanger ? styles.dangerText : undefined}
        />
      </td>
    </tr>
  );
}

interface FrontEndTableProps {
  metrics: FrontEndMetric[];
  pumpOptions: string[];
}

export function FrontEndTable({ metrics, pumpOptions }: FrontEndTableProps) {
  const pumpCount = metrics.filter((metric) => metric.kind === 'pump').length;
  const firstPumpIndex = metrics.findIndex((metric) => metric.kind === 'pump');

  return (
    <div className={styles.tableFrame}>
      <h2 className={styles.resinTitle}>FRONT-END UNIT 100</h2>
      <table className={cx(styles.sectionValueTable, styles.frontEndTable)}>
        <colgroup>
          <col className={styles.frontEndLabelCol} />
          <col className={styles.frontEndNameCol} />
          <col className={styles.frontEndValueCol} />
        </colgroup>
        <tbody>
          {metrics.map((metric, index) =>
            metric.kind === 'pump' ? (
              <PumpRow
                key={metric.name}
                metric={metric}
                pumpOptions={pumpOptions}
                debitRowSpan={index === firstPumpIndex ? pumpCount : null}
              />
            ) : (
              <ValueRow key={metric.name} metric={metric} />
            ),
          )}
        </tbody>
      </table>
    </div>
  );
}

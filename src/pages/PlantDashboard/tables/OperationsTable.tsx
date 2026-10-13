import { Fragment } from 'react';
import { cx } from '../../../utils/cx';
import type { OperationGroup } from './types';
import styles from './PlantTables.module.css';
import { MetricValue } from './MetricValue';

interface OperationsTableProps {
  groups: OperationGroup[];
}

export function OperationsTable({ groups }: OperationsTableProps) {
  return (
    <div className={cx(styles.tableFrame, styles.tableCard)}>
      <table className={styles.operationsTable}>
        <thead>
          <tr>
            <th rowSpan={2} className={cx(styles.resinTitle, styles.processColumn)}>
              Processes
            </th>
            <th colSpan={4} className={styles.resinTitle}>
              Time
            </th>
            <th rowSpan={2} className={styles.resinTitle}>
              Flowrate
              <br />U pulp V
            </th>
            <th rowSpan={2} className={styles.resinTitle}>
              SUM/Yield
            </th>
          </tr>
          <tr>
            <th className={styles.resinTitle}>Date</th>
            <th className={styles.resinTitle}>Start</th>
            <th className={styles.resinTitle}>End</th>
            <th className={styles.resinTitle}>Duration</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) =>
            group.rows.map((row, index) => (
              <tr key={`${group.nameLines.join(' ')}-${index}`} className={styles.operationRow}>
                {index === 0 ? (
                  <td rowSpan={group.rows.length}>
                    <strong className={styles.processName}>
                      {group.nameLines.map((line, lineIndex) => (
                        <Fragment key={line}>
                          {lineIndex > 0 ? <br /> : null}
                          {line}
                        </Fragment>
                      ))}
                    </strong>
                  </td>
                ) : null}
                <td className={styles.center}>{row.date}</td>
                <td className={styles.center}>{row.start}</td>
                <td className={styles.center}>{row.end}</td>
                <td className={cx(styles.infoText, styles.center)}>{row.duration}</td>
                <td className={styles.successText}>
                  <MetricValue value={row.flowRate} unit={row.flowRateUnit} />
                </td>
                <td className={styles.infoText}>
                  <MetricValue value={row.sum} unit={row.sumUnit} />
                </td>
              </tr>
            )),
          )}
        </tbody>
      </table>
    </div>
  );
}

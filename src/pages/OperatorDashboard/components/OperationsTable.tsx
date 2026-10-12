import { Fragment } from 'react';
import { cx } from '../../../utils/cx';
import type { OperationGroup } from '../types';
import styles from '../OperatorDashboardPage.module.css';
import { MetricValue } from './MetricValue';

export function OperationsTable({ groups }: { groups: OperationGroup[] }) {
  return (
    <div className={cx(styles.card, styles.tableCard)}>
      <table className={styles.operationsTable}>
        <thead>
          <tr>
            <th rowSpan={2} className={cx(styles.titleBgColor, styles.processColumn)}>
              Processes
              <br /> &amp; Operations
            </th>
            <th colSpan={4} className={styles.titleBgColor}>
              Time
            </th>
            <th rowSpan={2} className={styles.titleBgColor}>
              Flowrate
              <br />U pulp V
            </th>
            <th rowSpan={2} className={styles.titleBgColor}>
              SUM/Yield
            </th>
          </tr>
          <tr>
            <th className={styles.titleBgColor}>Date</th>
            <th className={styles.titleBgColor}>Start</th>
            <th className={styles.titleBgColor}>End</th>
            <th className={styles.titleBgColor}>Duration</th>
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
                <td className={styles.infoText}>
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

import { Fragment } from 'react';
import { MudTextPicker } from '../../../components/Mud/MudPickerField';
import { cx } from '../../../utils/cx';
import type { OperationGroup } from './types';
import styles from './EditPlantTables.module.css';
import { ValueInput } from './ValueInput';

export function OperationsTable({ groups }: { groups: OperationGroup[] }) {
  return (
    <div className={cx(styles.tableFrame, styles.tableCard, styles.operationsCard)}>
      <table className={styles.operationsTable}>
        <thead>
          <tr>
            <th rowSpan={2} className={cx(styles.titleBgColor, styles.processColumn)}>
              Processes
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
          {groups.map((group) => {
            const groupName = group.nameLines.join(' ');

            return group.rows.map((row, index) => (
              <tr key={`${groupName}-${index}`} className={styles.operationRow}>
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
                <td className={styles.editableCell}>
                  <MudTextPicker kind="date" value={row.date} className={styles.resinDateTimeCell} />
                </td>
                <td className={styles.editableCell}>
                  <MudTextPicker kind="time" value={row.start} className={styles.resinDateTimeCell} />
                </td>
                <td className={cx(styles.editableCell, styles.resinDateTimeCell)}>
                  <MudTextPicker kind="time" value={row.end} />
                </td>
                <td className={cx(styles.editableCell, styles.center)}>
                  <input
                    className={cx(styles.editInput, styles.infoText)}
                    aria-label={`${groupName} duration ${index + 1}`}
                    defaultValue={row.duration}
                  />
                </td>
                <td className={cx(styles.editableCell, styles.successText)}>
                  <ValueInput label={`${groupName} flowrate ${index + 1}`} value={row.flowRate} unit={row.flowRateUnit} hideUnitWhenEmpty />
                </td>
                <td className={cx(styles.editableCell, styles.infoText)}>
                  <ValueInput label={`${groupName} sum ${index + 1}`} value={row.sum} unit={row.sumUnit} hideUnitWhenEmpty />
                </td>
              </tr>
            ));
          })}
        </tbody>
      </table>
    </div>
  );
}

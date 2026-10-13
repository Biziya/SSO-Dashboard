import { cx } from '../../../utils/cx';
import type { TankGroup } from './types';
import styles from './PlantTables.module.css';

interface TankLevelTableProps {
  groups: [TankGroup, TankGroup];
}

export function TankLevelTable({ groups }: TankLevelTableProps) {
  return (
    <div className={cx(styles.tableFrame, styles.tankLevelFrame)}>
      <table className={cx(styles.sectionValueTable, styles.tankLevelTable)}>
        <colgroup>
          <col className={styles.groupTitleColumn} />
          <col />
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th className={styles.whiteCell}></th>
            <th className={styles.resinTitle}>Tank ref.</th>
            <th className={styles.resinTitle}>Volume (L)</th>
            <th className={styles.resinTitle}>
              Cl<sup>-</sup> (g/L)
            </th>
            <th className={styles.resinTitle}>
              H<sup>+</sup> (g/L)
            </th>
            <th className={styles.resinTitle}>Sampler</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) =>
            group.tanks.map((tank, index) => (
              <tr key={tank.name}>
                {index === 0 ? (
                  <td rowSpan={group.tanks.length} className={cx(styles.groupTitleCell, styles.resinTitle)}>
                    <div className={styles.groupTitleText}>
                      <strong>
                        <span>{group.titleLines[0]}</span>
                        <span>{group.titleLines[1]}</span>
                      </strong>
                    </div>
                  </td>
                ) : null}
                <td>{tank.name}</td>
                <td className={cx(styles.center, styles.infoText)}>{tank.volume}</td>
                <td className={cx(styles.center, styles.infoText)}>{tank.chloride}</td>
                <td className={cx(styles.center, styles.infoText)}>{tank.hPlus}</td>
                <td>{tank.sampler}</td>
              </tr>
            )),
          )}
        </tbody>
      </table>
    </div>
  );
}

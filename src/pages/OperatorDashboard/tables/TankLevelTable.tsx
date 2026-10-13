import { cx } from '../../../utils/cx';
import type { TankGroup, TankLevel } from './types';
import styles from './OperatorTables.module.css';

function SamplerCell({ tank }: { tank: TankLevel }) {
  const cell = tank.samplerCell;

  switch (cell.kind) {
    case 'select':
      return (
        <td className={styles.editableCell}>
          <select aria-label={`Sampler for tank ${tank.name}`} defaultValue={tank.sampler}>
            {cell.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </td>
      );
    case 'merged':
      return <td rowSpan={cell.rowSpan}>{tank.sampler}</td>;
    case 'covered':
      return null;
    case 'text':
      return <td>{tank.sampler}</td>;
  }
}

function LevelInput({ label, value }: { label: string; value: string }) {
  return (
    <td className={cx(styles.editableCell, styles.infoText)}>
      <input className={styles.editInput} aria-label={label} defaultValue={value} />
    </td>
  );
}

/** Tank levels and concentrations are typed in here; nothing is saved. */
export function TankLevelTable({ groups }: { groups: [TankGroup, TankGroup] }) {
  return (
    <div className={cx(styles.tableFrame, styles.tankLevelFrame)}>
      <table className={cx(styles.sectionValueTable, styles.tankLevelTable)}>
        <thead>
          <tr>
            <th className={styles.groupTitleHeader}></th>
            <th className={styles.resinTitle}>Tank ref.</th>
            <th className={styles.resinTitle}>Volume L</th>
            <th className={styles.resinTitle}>
              Cl<sup>-</sup> g/L
            </th>
            <th className={styles.resinTitle}>
              H<sup>+</sup> g/L
            </th>
            <th className={styles.resinTitle}>Sampler</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group, groupIndex) =>
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
                <td className={groupIndex === 0 ? styles.tankNameCell : undefined}>{tank.name}</td>
                <LevelInput label={`${tank.name} volume`} value={tank.volume} />
                <LevelInput label={`${tank.name} chloride`} value={tank.chloride} />
                <LevelInput label={`${tank.name} free acid`} value={tank.hPlus} />
                <SamplerCell tank={tank} />
              </tr>
            )),
          )}
        </tbody>
      </table>
    </div>
  );
}

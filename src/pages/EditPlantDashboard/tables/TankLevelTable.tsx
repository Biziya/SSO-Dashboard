import { cx } from '../../../utils/cx';
import type { TankGroup, TankLevel } from './types';
import styles from './EditPlantTables.module.css';

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

function LevelInput({ label, value, centered }: { label: string; value: string; centered: boolean }) {
  return (
    <td className={cx(styles.editableCell, styles.infoText, centered && styles.center)}>
      <input className={styles.editInput} aria-label={label} defaultValue={value} />
    </td>
  );
}

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
          {groups.map((group, groupIndex) => {
            // The first group's cells were centred in the Blazor markup; the second's were not.
            const isFirstGroup = groupIndex === 0;

            return group.tanks.map((tank, index) => (
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
                <td className={isFirstGroup ? styles.tankNameCell : undefined}>{tank.name}</td>
                <LevelInput label={`${tank.name} volume`} value={tank.volume} centered={isFirstGroup} />
                <LevelInput label={`${tank.name} chloride`} value={tank.chloride} centered={isFirstGroup} />
                <LevelInput label={`${tank.name} free acid`} value={tank.hPlus} centered={isFirstGroup} />
                <SamplerCell tank={tank} />
              </tr>
            ));
          })}
        </tbody>
      </table>
    </div>
  );
}

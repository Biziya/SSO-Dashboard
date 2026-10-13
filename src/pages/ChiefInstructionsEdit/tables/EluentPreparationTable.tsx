import type { EluentInstruction, SolutionPreparation } from './types';
import styles from './EluentPreparationTable.module.css';

interface EluentPreparationTableProps {
  data: EluentInstruction;
}

interface NumberCellProps {
  label: string;
  value: string;
}

/** An entered value. Typing is local to the field; nothing is recalculated or saved. */
function NumberCell({ label, value }: NumberCellProps) {
  return (
    <td className={styles.editableCell}>
      <input
        className={styles.editInput}
        type="number"
        step="any"
        aria-label={label}
        defaultValue={value}
      />
    </td>
  );
}

interface PreparationTableProps {
  preparation: SolutionPreparation;
}

function PreparationTable({ preparation }: PreparationTableProps) {
  return (
    <section className={styles.subSection}>
      <h3>{preparation.title}</h3>
      <div className={styles.tableFrame}>
        <table>
          <thead>
            <tr>
              <th className={styles.blank}></th>
              <th>Volume (L)</th>
              <th>Concentration (g/L)</th>
              <th>Water need (L)</th>
              <th>{preparation.chemicalLabel}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className={`${styles.sideLabel} ${styles.tgt}`}>Target</th>
              <NumberCell label={`${preparation.title} target volume`} value={preparation.targetVolumeLiters} />
              <NumberCell
                label={`${preparation.title} target concentration`}
                value={preparation.targetConcentration}
              />
              <td className={styles.calculatedCell}>{preparation.targetWaterNeedLiters}</td>
              <td className={styles.calculatedCell}>{preparation.targetChemicalNeed}</td>
            </tr>
            <tr>
              <th className={styles.sideLabel}>ADD</th>
              <td></td>
              <td></td>
              <td className={styles.calculatedCell}>{preparation.addWaterNeedLiters}</td>
              <td className={styles.calculatedCell}>{preparation.addChemicalNeed}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

/**
 * Eluent preparation tables on the Chiefs page. Kept separate from the
 * Seniors page and the edit drawer so each can change on its own.
 */
export function EluentPreparationTable({ data }: EluentPreparationTableProps) {
  const { tanks, target, addition } = data;

  return (
    <section className={styles.column}>
      <div className={styles.eluentPage}>
        <h2>Eluent preparation UNIT 422</h2>

        <div className={styles.tableFrame}>
          <table className={styles.mainTable}>
            <thead>
              <tr>
                <th className={styles.blank}></th>
                <th>Tanks</th>
                {tanks.map((tank) => (
                  <th key={tank.tankName} className={styles.tank}>
                    <strong>{tank.tankName}</strong>
                  </th>
                ))}
                <th></th>
              </tr>
              <tr>
                <th className={styles.blank}></th>
                <th>Sampler</th>
                {tanks.map((tank) => (
                  <th key={tank.tankName}>{tank.sampler}</th>
                ))}
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className={styles.sideLabel} rowSpan={6}>Remaining</th>
                <th>V<sub>total</sub></th>
                {tanks.map((tank) => (
                  <NumberCell key={tank.tankName} label={`${tank.tankName} total volume`} value={tank.volumeLiters} />
                ))}
                <th>(L)</th>
              </tr>
              <tr>
                <th>Cl<sup>-</sup></th>
                {tanks.map((tank) => (
                  <NumberCell key={tank.tankName} label={`${tank.tankName} chloride`} value={tank.chlorideGramPerLiter} />
                ))}
                <th>(g/L)</th>
              </tr>
              <tr>
                <th>NaCl</th>
                {tanks.map((tank) => (
                  <td key={tank.tankName} className={styles.calculatedCell}>{tank.naClKilogram}</td>
                ))}
                <th>(kg)</th>
              </tr>
              <tr>
                <th>H<sup>+</sup></th>
                {tanks.map((tank) => (
                  <NumberCell key={tank.tankName} label={`${tank.tankName} free acid`} value={tank.hPlusGramPerLiter} />
                ))}
                <th>(g/L)</th>
              </tr>
              <tr>
                <th>93% H<sub>2</sub>SO<sub>4</sub></th>
                {tanks.map((tank) => (
                  <td key={tank.tankName} className={styles.calculatedCell}>{tank.h2so4Liters}</td>
                ))}
                <th>(L)</th>
              </tr>
              <tr>
                <th>Water</th>
                {tanks.map((tank) => (
                  <td key={tank.tankName} className={styles.calculatedCell}>{tank.waterLiters}</td>
                ))}
                <th>(L)</th>
              </tr>

              <tr>
                <th className={styles.sideLabel} rowSpan={3}>
                  ADD
                </th>
                <th>NaCl</th>
                <td className={styles.calculatedCell}>{addition.naClLiters}</td>
                <td colSpan={3}>from 422-TK-4200</td>
                <th>(L)</th>
              </tr>
              <tr>
                <th>Acid solution</th>
                <td className={styles.calculatedCell}>{addition.acidSolutionLiters}</td>
                <td colSpan={3}>from 422-TK-3000</td>
                <th>(L)</th>
              </tr>
              <tr>
                <th>Water</th>
                <td className={styles.calculatedCell}>{addition.waterLiters}</td>
                <td colSpan={3}></td>
                <th>(L)</th>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.tableFrame}>
          <table>
            <tbody>
              <tr>
                <th className={`${styles.sideLabel} ${styles.tgt}`} rowSpan={3}>
                  Target
                </th>
                <th>
                  V<sub>total</sub>
                </th>
                <NumberCell label="Target total volume" value={target.totalVolumeLiters} />
                <th>(L)</th>
              </tr>
              <tr>
                <th>
                  Cl<sup>-</sup>
                </th>
                <NumberCell label="Target chloride" value={target.chlorideGramPerLiter} />
                <th>(g/L)</th>
              </tr>
              <tr>
                <th>
                  H<sup>+</sup>
                </th>
                <NumberCell label="Target free acid" value={target.hPlusGramPerLiter} />
                <th>(g/L)</th>
              </tr>
            </tbody>
          </table>
        </div>

        <PreparationTable preparation={data.brine} />
        <PreparationTable preparation={data.acidSolution} />

        <section>
          <h3>Note</h3>
          <div className={styles.noteFrame}>
            <textarea
              className={`${styles.editInput} ${styles.noteInput}`}
              rows={3}
              aria-label="Preparation note"
              defaultValue={data.note}
            />
          </div>
        </section>
      </div>
    </section>
  );
}

import { Fragment, type ReactNode } from 'react';
import type { EluentInstruction, EluentTableContext, EluentTank, SolutionPreparation } from './types';
import styles from './EluentPreparationTable.module.css';

interface EluentPreparationTableProps {
  data: EluentInstruction;
  context: EluentTableContext;
  readOnly?: boolean;
}

interface NumberCellProps {
  label: string;
  value: string;
  readOnly: boolean;
}

/** An entered value. Typing is local to the field; nothing is recalculated or saved. */
function NumberCell({ label, value, readOnly }: NumberCellProps) {
  return (
    <td className={styles.editableCell}>
      <input
        className={styles.editInput}
        type="number"
        step="any"
        aria-label={label}
        readOnly={readOnly}
        defaultValue={value}
      />
    </td>
  );
}

function CalculatedCell({ value }: { value: string }) {
  return <td className={styles.calculatedCell}>{value}</td>;
}

interface TankRowProps {
  label: ReactNode;
  unit: string;
  tanks: EluentTank[];
  renderCell: (tank: EluentTank) => ReactNode;
  sideLabel?: ReactNode;
}

function TankRow({ label, unit, tanks, renderCell, sideLabel }: TankRowProps) {
  return (
    <tr>
      {sideLabel}
      <th>{label}</th>
      {tanks.map((tank) => (
        <Fragment key={tank.tankName}>{renderCell(tank)}</Fragment>
      ))}
      <th>{unit}</th>
    </tr>
  );
}

interface PreparationTableProps {
  preparation: SolutionPreparation;
  readOnly: boolean;
}

function PreparationTable({ preparation, readOnly }: PreparationTableProps) {
  return (
    <section className={styles.subSection}>
      <h3>{preparation.title}</h3>
      <table className={styles.subTable}>
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
            <NumberCell label={`${preparation.title} target volume`} value={preparation.targetVolumeLiters} readOnly={readOnly} />
            <NumberCell
              label={`${preparation.title} target concentration`}
              value={preparation.targetConcentration}
              readOnly={readOnly}
            />
            <CalculatedCell value={preparation.targetWaterNeedLiters} />
            <CalculatedCell value={preparation.targetChemicalNeed} />
          </tr>
          <tr>
            <th className={styles.sideLabel}>ADD</th>
            <td></td>
            <td></td>
            <CalculatedCell value={preparation.addWaterNeedLiters} />
            <CalculatedCell value={preparation.addChemicalNeed} />
          </tr>
        </tbody>
      </table>
    </section>
  );
}

/** Shared by the Seniors page, the Chiefs page and the edit dashboard drawer. */
export function EluentPreparationTable({ data, context, readOnly = false }: EluentPreparationTableProps) {
  const { tanks, target, addition } = data;
  const sectionClass = context === 'page' ? styles.hostedInPage : undefined;
  const remainingLabel = (
    <th className={styles.sideLabel} rowSpan={6}>
      Remaining
    </th>
  );

  return (
    <section className={sectionClass}>
      <div className={styles.eluentPage}>
        <h2>Eluent preparation UNIT 422</h2>

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
            <TankRow
              sideLabel={remainingLabel}
              label={
                <>
                  V<sub>total</sub>
                </>
              }
              unit="(L)"
              tanks={tanks}
              renderCell={(tank) => (
                <NumberCell label={`${tank.tankName} total volume`} value={tank.volumeLiters} readOnly={readOnly} />
              )}
            />
            <TankRow
              label={
                <>
                  Cl<sup>-</sup>
                </>
              }
              unit="(g/L)"
              tanks={tanks}
              renderCell={(tank) => (
                <NumberCell label={`${tank.tankName} chloride`} value={tank.chlorideGramPerLiter} readOnly={readOnly} />
              )}
            />
            <TankRow
              label="NaCl"
              unit="(kg)"
              tanks={tanks}
              renderCell={(tank) => <CalculatedCell value={tank.naClKilogram} />}
            />
            <TankRow
              label={
                <>
                  H<sup>+</sup>
                </>
              }
              unit="(g/L)"
              tanks={tanks}
              renderCell={(tank) => (
                <NumberCell label={`${tank.tankName} free acid`} value={tank.hPlusGramPerLiter} readOnly={readOnly} />
              )}
            />
            <TankRow
              label={
                <>
                  93% H<sub>2</sub>SO<sub>4</sub>
                </>
              }
              unit="(L)"
              tanks={tanks}
              renderCell={(tank) => <CalculatedCell value={tank.h2so4Liters} />}
            />
            <TankRow
              label="Water"
              unit="(L)"
              tanks={tanks}
              renderCell={(tank) => <CalculatedCell value={tank.waterLiters} />}
            />

            <tr>
              <th className={styles.sideLabel} rowSpan={3}>
                ADD
              </th>
              <th>NaCl</th>
              <CalculatedCell value={addition.naClLiters} />
              <td colSpan={3}>from 422-TK-4200</td>
              <th>(L)</th>
            </tr>
            <tr>
              <th>Acid solution</th>
              <CalculatedCell value={addition.acidSolutionLiters} />
              <td colSpan={3}>from 422-TK-3000</td>
              <th>(L)</th>
            </tr>
            <tr>
              <th>Water</th>
              <CalculatedCell value={addition.waterLiters} />
              <td colSpan={3}></td>
              <th>(L)</th>
            </tr>
          </tbody>
        </table>

        <table className={styles.targetTable}>
          <tbody>
            <tr>
              <th className={`${styles.sideLabel} ${styles.tgt}`} rowSpan={3}>
                Target
              </th>
              <th>
                V<sub>total</sub>
              </th>
              <NumberCell label="Target total volume" value={target.totalVolumeLiters} readOnly={readOnly} />
              <th>(L)</th>
            </tr>
            <tr>
              <th>
                Cl<sup>-</sup>
              </th>
              <NumberCell label="Target chloride" value={target.chlorideGramPerLiter} readOnly={readOnly} />
              <th>(g/L)</th>
            </tr>
            <tr>
              <th>
                H<sup>+</sup>
              </th>
              <NumberCell label="Target free acid" value={target.hPlusGramPerLiter} readOnly={readOnly} />
              <th>(g/L)</th>
            </tr>
          </tbody>
        </table>

        <PreparationTable preparation={data.brine} readOnly={readOnly} />
        <PreparationTable preparation={data.acidSolution} readOnly={readOnly} />

        <section>
          <h3>Note</h3>
          <textarea
            className={`${styles.editInput} ${styles.noteInput}`}
            rows={3}
            aria-label="Preparation note"
            readOnly={readOnly}
            defaultValue={data.note}
          />
        </section>
      </div>
    </section>
  );
}

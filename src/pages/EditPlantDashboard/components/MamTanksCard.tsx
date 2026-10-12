import type { MamTank } from '../types';
import styles from '../EditPlantDashboardPage.module.css';

/**
 * Tank letter per position. Blazor rotated every letter when one changed;
 * here each select changes on its own and nothing is saved.
 */
export function MamTanksCard({ tanks, letters }: { tanks: MamTank[]; letters: string[] }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.resinTitle}>MAM tanks position UNIT 422</h2>
      <div className={styles.tankPositionGrid}>
        {tanks.map((tank) => (
          <div key={tank.position} className={styles.tankPositionItem}>
            <select className={styles.tankLetterSelect} aria-label={`Tank letter for position ${tank.position}`} defaultValue={tank.letter}>
              {letters.map((letter) => (
                <option key={letter} value={letter}>
                  {letter}
                </option>
              ))}
            </select>
            <div className={styles.tankFixedPosition}>{tank.position}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

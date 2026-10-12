import type { MamTank } from '../types';
import styles from '../OperatorDashboardPage.module.css';

export function MamTanksCard({ tanks, notes }: { tanks: MamTank[]; notes: string[] }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.resinTitle}>MAM tanks position UNIT 422</h2>
      <div className={styles.tankPositionGrid}>
        {tanks.map((tank) => (
          <div key={tank.position} className={styles.tankPositionItem}>
            <div className={styles.tankLetter}>{tank.letter}</div>
            <small>{tank.position}</small>
          </div>
        ))}
      </div>
      <div className={styles.tankNotes}>
        {notes.map((note, index) => (
          <span key={index}>{note}</span>
        ))}
      </div>
    </div>
  );
}

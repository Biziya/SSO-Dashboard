import { cx } from '../../../utils/cx';
import type { DashboardHeaderData, ShiftCode } from '../types';
import styles from '../PlantDashboardPage.module.css';

const shiftClass: Record<ShiftCode, string> = {
  DS: styles.shiftDs ?? '',
  NS: styles.shiftNs ?? '',
  '': '',
};

interface DashboardHeaderProps {
  header: DashboardHeaderData;
}

/**
 * Title, team, shift, update stamp and LTI counter. The historical "View at"
 * picker and the Capture button are shown but not wired: snapshots and
 * screenshots need the backend.
 */
export function DashboardHeader({ header }: DashboardHeaderProps) {
  return (
    <header>
      <div className={styles.headerRow}>
        <h2>
          Plant Control Dashboard (PCD){' '}
          <span className={styles.titleTimes}>at 06:00, 09:00, 11:30, 14:00, 16:00, 18:00 &amp; 20:00</span>
        </h2>

        <div className={styles.dateTimeCard}>
          <h4>
            TEAM : {header.team} <span className={cx(shiftClass[header.shift])}>{header.shift}</span>
          </h4>
          <h4>UPDATE : {header.lastUpdated}</h4>
          <h4>
            LTI FREE DAYS : <span className={styles.ltiDays}>{header.ltiFreeDays}</span>
          </h4>

          <label className={styles.snapshotPicker}>
            <span>VIEW AT :</span>
            <input type="datetime-local" aria-label="Show the dashboard as it stood at this time" />
          </label>

          <button type="button" className={styles.captureButton} title="Save a PNG of this page">
            Capture
          </button>
        </div>
      </div>
    </header>
  );
}

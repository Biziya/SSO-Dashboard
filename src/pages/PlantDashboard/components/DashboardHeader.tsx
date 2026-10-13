import { useState } from 'react';
import { cx } from '../../../utils/cx';
import type { DashboardHeaderData, ShiftCode, ViewAtMoment } from '../types';
import styles from '../PlantDashboardPage.module.css';
import { ViewAtPicker } from './ViewAtPicker';

const shiftClass: Record<ShiftCode, string> = {
  DS: styles.shiftDs ?? '',
  NS: styles.shiftNs ?? '',
  '': '',
};

interface DashboardHeaderProps {
  header: DashboardHeaderData;
}

/**
 * Title, team, shift, update stamp, LTI counter and the "View at" picker.
 * The confirmed moment is only shown: loading a past snapshot needs the
 * backend. The Capture button is hidden.
 */
export function DashboardHeader({ header }: DashboardHeaderProps) {
  const [viewAt, setViewAt] = useState<ViewAtMoment | null>(null);

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

          <ViewAtPicker value={viewAt} onConfirm={setViewAt} onReturnToLive={() => setViewAt(null)} />
        </div>
      </div>
    </header>
  );
}

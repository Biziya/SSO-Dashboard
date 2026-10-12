import type { OperatorDashboardData } from '../types';
import styles from '../OperatorDashboardPage.module.css';
import { AnalysisResultCard } from './AnalysisResultCard';
import { DSeriesCard } from './DSeriesCard';
import { FrontEndCard } from './FrontEndCard';
import { MamTanksCard } from './MamTanksCard';
import { ResinTransferCard } from './ResinTransferCard';
import { TankLevelTable } from './TankLevelTable';

export function OverviewPanel({ data }: { data: OperatorDashboardData }) {
  return (
    <section className={styles.dashboardColumn}>
      <div className={styles.topLeftGrid}>
        <DSeriesCard items={data.dSeries} />
        <ResinTransferCard rows={data.resinTransfers} />
      </div>
      <AnalysisResultCard samples={data.analysisSamples} />
      <div className={`${styles.splitGrid} ${styles.tankGrid}`}>
        <FrontEndCard metrics={data.frontEnd} />
        <MamTanksCard tanks={data.mamTanks} notes={data.mamTankNotes} />
      </div>
      <TankLevelTable groups={data.tankGroups} />
    </section>
  );
}

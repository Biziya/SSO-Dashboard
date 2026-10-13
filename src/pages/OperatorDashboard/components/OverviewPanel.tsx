import type { OperatorDashboardData } from '../types';
import styles from '../OperatorDashboardPage.module.css';
import { AnalysisResultTable } from '../tables/AnalysisResultTable';
import { DSeriesCard } from './DSeriesCard';
import { FrontEndTable } from '../tables/FrontEndTable';
import { MamTanksCard } from './MamTanksCard';
import { ResinTransferTable } from '../tables/ResinTransferTable';
import { TankLevelTable } from '../tables/TankLevelTable';

export function OverviewPanel({ data }: { data: OperatorDashboardData }) {
  return (
    <section className={styles.dashboardColumn}>
      <div className={styles.topLeftGrid}>
        <DSeriesCard items={data.dSeries} />
        <ResinTransferTable rows={data.resinTransfers} />
      </div>
      <AnalysisResultTable samples={data.analysisSamples} />
      <div className={`${styles.splitGrid} ${styles.tankGrid}`}>
        <FrontEndTable metrics={data.frontEnd} />
        <MamTanksCard tanks={data.mamTanks} notes={data.mamTankNotes} />
      </div>
      <TankLevelTable groups={data.tankGroups} />
    </section>
  );
}

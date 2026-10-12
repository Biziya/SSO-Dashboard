import { usePageTitle } from '../../hooks/usePageTitle';
import { DashboardHeader } from './components/DashboardHeader';
import { OperationsPanel } from './components/OperationsPanel';
import { PlantOverview } from './components/PlantOverview';
import { plantDashboardMock } from './mockData';
import styles from './PlantDashboardPage.module.css';

/** Route "/": the read-only Plant Control Dashboard shown on the wall display. */
export function PlantDashboardPage() {
  usePageTitle('Plant Operations Dashboard');
  const data = plantDashboardMock;

  return (
    <div className={styles.captureRoot}>
      <DashboardHeader header={data.header} />

      <div className={styles.dashboardShell}>
        <main className={styles.dashboardGrid}>
          <PlantOverview data={data} />
          <OperationsPanel data={data} />
        </main>
      </div>
    </div>
  );
}

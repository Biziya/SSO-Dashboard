import { usePageTitle } from '../../hooks/usePageTitle';
import { OperationsPanel } from './components/OperationsPanel';
import { OverviewPanel } from './components/OverviewPanel';
import { PrepDrawer } from './components/PrepDrawer';
import { editPlantDashboardMock } from './mockData';
import styles from './EditPlantDashboardPage.module.css';

/** Route "/edit-plant-control-dashboard": the full Chief & Senior operators section. */
export function EditPlantDashboardPage() {
  usePageTitle('Chief & Senior operators section');
  const data = editPlantDashboardMock;

  return (
    <>
      <header>
        <div className={styles.headerRow}>
          <h2>
            Plant Control Dashboard (PCD){' '}
            <span className={styles.titleTimes}>at 06:00, 09:00, 11:30, 14:00, 16:00, 18:00 &amp; 20:00</span>
          </h2>
        </div>
      </header>

      <div className={styles.dashboardShell}>
        <main className={styles.dashboardGrid}>
          <OverviewPanel data={data} />
          <OperationsPanel data={data} />
        </main>
      </div>

      <PrepDrawer instruction={data.instruction} />
    </>
  );
}

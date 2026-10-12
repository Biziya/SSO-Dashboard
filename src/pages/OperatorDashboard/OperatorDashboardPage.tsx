import { usePageTitle } from '../../hooks/usePageTitle';
import { OperationsPanel } from './components/OperationsPanel';
import { OverviewPanel } from './components/OverviewPanel';
import { operatorDashboardMock } from './mockData';
import styles from './OperatorDashboardPage.module.css';

/** Route "/operator": the limited Chief & Senior operators section. */
export function OperatorDashboardPage() {
  usePageTitle('Chief & Senior operators section');
  const data = operatorDashboardMock;

  return (
    <>
      <header>
        <div className={styles.headerRow}>
          <h2>Plant Control Dashboard (PCD) at 06:00, 09:00, 11:30, 14:00, 16:00, 18:00 &amp; 20:00</h2>
        </div>
      </header>

      <div className={styles.dashboardShell}>
        <main className={styles.dashboardGrid}>
          <OverviewPanel data={data} />
          <OperationsPanel data={data} />
        </main>
      </div>
    </>
  );
}

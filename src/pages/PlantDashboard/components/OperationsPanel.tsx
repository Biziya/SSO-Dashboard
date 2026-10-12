import type { PlantDashboardData } from '../types';
import styles from '../PlantDashboardPage.module.css';
import { DrumsCard } from './DrumsCard';
import { HighlightsCard } from './HighlightsCard';
import { LabCard } from './LabCard';
import { OperationsTable } from './OperationsTable';
import { StorageTable } from './StorageTable';

interface OperationsPanelProps {
  data: PlantDashboardData;
}

/** Right column: process timings, storage, drums, lab and highlights. */
export function OperationsPanel({ data }: OperationsPanelProps) {
  return (
    <section className={styles.dashboardColumn}>
      <OperationsTable groups={data.operations} />

      <div className={`${styles.card} ${styles.tableCard} ${styles.storageRow}`}>
        <StorageTable rows={data.storage} />
        <DrumsCard rows={data.drums} />
        <LabCard rows={data.lab} comment={data.labComment} />
      </div>

      <HighlightsCard lines={data.highlights} />
    </section>
  );
}

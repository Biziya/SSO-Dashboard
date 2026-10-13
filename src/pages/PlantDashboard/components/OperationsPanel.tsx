import type { PlantDashboardData } from '../types';
import styles from '../PlantDashboardPage.module.css';
import { DrumsTable } from '../tables/DrumsTable';
import { HighlightsCard } from './HighlightsCard';
import { LabTable } from '../tables/LabTable';
import { OperationsTable } from '../tables/OperationsTable';
import { StorageTable } from '../tables/StorageTable';

interface OperationsPanelProps {
  data: PlantDashboardData;
}

/** Right column: process timings, storage, drums, lab and highlights. */
export function OperationsPanel({ data }: OperationsPanelProps) {
  return (
    <section className={styles.dashboardColumn}>
      <OperationsTable groups={data.operations} />

      <div className={styles.storageRow}>
        <StorageTable rows={data.storage} />
        <DrumsTable rows={data.drums} />
        <LabTable rows={data.lab} comment={data.labComment} />
      </div>

      <HighlightsCard lines={data.highlights} />
    </section>
  );
}

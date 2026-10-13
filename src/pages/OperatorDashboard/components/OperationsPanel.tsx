import type { OperatorDashboardData } from '../types';
import styles from '../OperatorDashboardPage.module.css';
import { DrumsTable } from '../tables/DrumsTable';
import { HighlightsCard } from './HighlightsCard';
import { LabTable } from '../tables/LabTable';
import { OperationsTable } from '../tables/OperationsTable';
import { StorageTable } from '../tables/StorageTable';
import { TeamShiftRow } from './TeamShiftRow';

export function OperationsPanel({ data }: { data: OperatorDashboardData }) {
  return (
    <section className={styles.dashboardColumn}>
      <OperationsTable groups={data.operations} />
      <div className={styles.storageRow}>
        <StorageTable rows={data.storage} />
        <DrumsTable rows={data.drums} />
        <LabTable rows={data.lab} comment={data.labComment} />
      </div>
      <HighlightsCard lines={data.highlights} />
      <TeamShiftRow fields={data.teamShift} />
    </section>
  );
}

import type { OperatorDashboardData } from '../types';
import styles from '../OperatorDashboardPage.module.css';
import { DrumsCard } from './DrumsCard';
import { HighlightsCard } from './HighlightsCard';
import { LabCard } from './LabCard';
import { OperationsTable } from './OperationsTable';
import { StorageTable } from './StorageTable';
import { TeamShiftRow } from './TeamShiftRow';

export function OperationsPanel({ data }: { data: OperatorDashboardData }) {
  return (
    <section className={styles.dashboardColumn}>
      <OperationsTable groups={data.operations} />
      <div className={`${styles.card} ${styles.tableCard} ${styles.storageRow}`}>
        <StorageTable rows={data.storage} />
        <DrumsCard rows={data.drums} />
        <LabCard rows={data.lab} comment={data.labComment} />
      </div>
      <HighlightsCard lines={data.highlights} />
      <TeamShiftRow fields={data.teamShift} />
    </section>
  );
}

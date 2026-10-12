import type { EditPlantDashboardData } from '../types';
import styles from '../EditPlantDashboardPage.module.css';
import { DrumsCard } from './DrumsCard';
import { HighlightsEditor } from './HighlightsEditor';
import { LabCard } from './LabCard';
import { OperationsTable } from './OperationsTable';
import { StorageTable } from './StorageTable';
import { TeamShiftRow } from './TeamShiftRow';

export function OperationsPanel({ data }: { data: EditPlantDashboardData }) {
  return (
    <section className={styles.dashboardColumn}>
      <OperationsTable groups={data.operations} />
      <div className={`${styles.card} ${styles.tableCard} ${styles.storageRow}`}>
        <StorageTable rows={data.storage} />
        <DrumsCard rows={data.drums} />
        <LabCard rows={data.lab} comment={data.labComment} />
      </div>
      <HighlightsEditor lines={data.highlights} />
      <TeamShiftRow fields={data.teamShift} />
    </section>
  );
}

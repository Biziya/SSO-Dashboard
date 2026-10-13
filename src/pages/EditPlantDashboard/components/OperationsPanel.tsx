import type { EditPlantDashboardData } from '../types';
import styles from '../EditPlantDashboardPage.module.css';
import { DrumsTable } from '../tables/DrumsTable';
import { HighlightsEditor } from './HighlightsEditor';
import { LabTable } from '../tables/LabTable';
import { OperationsTable } from '../tables/OperationsTable';
import { StorageTable } from '../tables/StorageTable';
import { TeamShiftRow } from './TeamShiftRow';

export function OperationsPanel({ data }: { data: EditPlantDashboardData }) {
  return (
    <section className={styles.dashboardColumn}>
      <OperationsTable groups={data.operations} />
      <div className={styles.storageRow}>
        <StorageTable rows={data.storage} />
        <DrumsTable rows={data.drums} />
        <LabTable rows={data.lab} comment={data.labComment} />
      </div>
      <HighlightsEditor lines={data.highlights} />
      <TeamShiftRow fields={data.teamShift} />
    </section>
  );
}

import { EluentPreparationTable } from './tables/EluentPreparationTable';
import { UpdateButton } from '../../components/UpdateButton/UpdateButton';
import { usePageTitle } from '../../hooks/usePageTitle';
import { InstructionUpdatedAlert } from './components/InstructionUpdatedAlert';
import { seniorInstructionMock } from './mockData';
import styles from './ChiefInstructionsViewPage.module.css';

const pageTitle = 'Eluent, brine & acid solution preparation (Seniors)';

/** Route "/view-chief-operators-instructions": the seniors' copy of the preparation instruction. */
export function ChiefInstructionsViewPage() {
  usePageTitle(pageTitle);
  const { instruction, isAcknowledged, lastUpdated } = seniorInstructionMock;

  return (
    <>
      <header>
        <div className={styles.headerRow}>
          <h2>{pageTitle}</h2>
        </div>
      </header>

      {isAcknowledged ? null : <InstructionUpdatedAlert lastUpdated={lastUpdated} />}

      <div className={styles.dashboardShell}>
        <main className={styles.dashboardGrid}>
          <EluentPreparationTable data={instruction} />
        </main>
        <div className={styles.buttonContainer}>
          <UpdateButton>Update</UpdateButton>
        </div>
      </div>
    </>
  );
}

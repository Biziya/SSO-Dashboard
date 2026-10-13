import { EluentPreparationTable } from './tables/EluentPreparationTable';
import { MudButton } from '../../components/Mud/MudButton';
import { MudChip } from '../../components/Mud/MudChip';
import { usePageTitle } from '../../hooks/usePageTitle';
import { chiefInstructionMock } from './mockData';
import styles from './ChiefInstructionsEditPage.module.css';

const pageTitle = 'Eluent, brine & acid solution preparation (Chiefs)';

/** Route "/chief-operator-instructions": where chiefs prepare and publish the instruction. */
export function ChiefInstructionsEditPage() {
  usePageTitle(pageTitle);
  const { instruction, isAcknowledged } = chiefInstructionMock;

  return (
    <>
      <header>
        <div className={styles.headerRow}>
          <h2>{pageTitle}</h2>
          {isAcknowledged ? (
            <MudChip color="success">Acknowledged</MudChip>
          ) : (
            <MudChip color="warning">Pending acknowledgement</MudChip>
          )}
        </div>
      </header>

      <div className={styles.dashboardShell}>
        <main className={styles.dashboardGrid}>
          <EluentPreparationTable data={instruction} />
        </main>
        <div className={styles.buttonContainer}>
          <MudButton color="info">Update</MudButton>
        </div>
      </div>
    </>
  );
}

import { useState } from 'react';
import { EluentPreparationTable } from '../../../components/EluentPreparationTable/EluentPreparationTable';
import type { EluentInstruction } from '../../../components/EluentPreparationTable/types';
import { Icon } from '../../../components/Icon/Icon';
import { MudButton } from '../../../components/Mud/MudButton';
import { cx } from '../../../utils/cx';
import styles from '../EditPlantDashboardPage.module.css';

/** The eluent preparation table in a right-hand drawer, opened by an edge tab. */
export function PrepDrawer({ instruction }: { instruction: EluentInstruction }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={cx(styles.prepEdgeToggle, isOpen ? styles.prepEdgeToggleOpen : styles.prepEdgeToggleClosed)}
        title={isOpen ? 'Hide preparation' : 'Show eluent preparation'}
        aria-expanded={isOpen}
        aria-controls="prep-drawer"
        onClick={() => setIsOpen((open) => !open)}
      >
        <Icon name={isOpen ? 'keyboardArrowRight' : 'keyboardArrowLeft'} />
      </button>

      <aside id="prep-drawer" className={cx(styles.prepDrawer, !isOpen && styles.prepDrawerHidden)} aria-label="Eluent preparation">
        <header className={styles.prepDrawerHeader}>
          <h2>Eluent, brine &amp; acid solution preparation (Seniors)</h2>
        </header>
        <div className={styles.prepDrawerBody}>
          <EluentPreparationTable data={instruction} context="drawer" />
        </div>
        <footer className={styles.prepDrawerFooter}>
          <MudButton color="info">Update preparation</MudButton>
        </footer>
      </aside>
    </>
  );
}

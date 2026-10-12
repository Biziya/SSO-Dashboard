import { usePageTitle } from '../../hooks/usePageTitle';
import { QrmHeader } from './components/QrmHeader';
import { QrmTable } from './components/QrmTable';
import { legendSteps, qrmBoardMock } from './mockData';
import styles from './QrmPage.module.css';

/** Route "/qrm": the Quick Response Manufacturing task board. */
export function QrmPage() {
  usePageTitle('QRM');
  const board = qrmBoardMock;

  return (
    <div className={styles.qrmPage}>
      <QrmHeader year={board.year} saveState={board.saveState} legendSteps={legendSteps} />
      <QrmTable rows={board.rows} />
    </div>
  );
}

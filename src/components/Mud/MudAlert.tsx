import type { ReactNode } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './Mud.module.css';

interface MudAlertProps {
  children: ReactNode;
  dense?: boolean;
}

/** Filled warning MudAlert look-alike (the only alert shown with mock data). */
export function MudWarningAlert({ children, dense = false }: MudAlertProps) {
  const classes = dense ? `${styles.alert} ${styles.alertDense}` : styles.alert;

  return (
    <div className={classes} role="alert">
      <Icon name="reportProblem" className={styles.alertIcon} />
      <div className={styles.alertMessage}>{children}</div>
    </div>
  );
}

import type { ReactNode } from 'react';
import styles from './UpdateButton.module.css';

interface UpdateButtonProps {
  children: ReactNode;
  disabled?: boolean;
}

/**
 * The one style for every Update button in the app (the dashboards'
 * UPDATE, the eluent pages' Update and the drawer's Update preparation).
 * Saving is not implemented in this static frontend, so it has no action.
 */
export function UpdateButton({ children, disabled = false }: UpdateButtonProps) {
  return (
    <button type="button" className={styles.updateButton} disabled={disabled}>
      {children}
    </button>
  );
}

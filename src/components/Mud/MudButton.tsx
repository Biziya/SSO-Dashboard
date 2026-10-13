import type { ReactNode } from 'react';
import styles from './Mud.module.css';

interface MudButtonProps {
  /** Only the success (green) variant is still used, by Acknowledge. Update buttons use UpdateButton. */
  color: 'success';
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

/**
 * Filled MudButton look-alike. Actions are not implemented in this static
 * frontend, so the button has no click handler.
 */
export function MudButton({ children, className, disabled = false }: MudButtonProps) {
  const classes = [styles.button, styles.buttonSuccess, className].filter(Boolean).join(' ');

  return (
    <button type="button" className={classes} disabled={disabled}>
      {children}
    </button>
  );
}

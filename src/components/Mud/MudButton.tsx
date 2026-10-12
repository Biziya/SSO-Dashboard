import type { ReactNode } from 'react';
import styles from './Mud.module.css';

type ButtonColor = 'info' | 'success';

interface MudButtonProps {
  color: ButtonColor;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

/**
 * Filled MudButton look-alike. Actions are not implemented in this static
 * frontend, so the button has no click handler.
 */
export function MudButton({ color, children, className, disabled = false }: MudButtonProps) {
  const colorClass = color === 'info' ? styles.buttonInfo : styles.buttonSuccess;
  const classes = [styles.button, colorClass, className].filter(Boolean).join(' ');

  return (
    <button type="button" className={classes} disabled={disabled}>
      {children}
    </button>
  );
}

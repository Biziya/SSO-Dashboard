import type { ReactNode } from 'react';
import styles from './Mud.module.css';

interface MudChipProps {
  color: 'success' | 'warning';
  children: ReactNode;
}

/** Filled MudChip look-alike. */
export function MudChip({ color, children }: MudChipProps) {
  const colorClass = color === 'success' ? styles.chipSuccess : styles.chipWarning;

  return <span className={`${styles.chip} ${colorClass}`}>{children}</span>;
}

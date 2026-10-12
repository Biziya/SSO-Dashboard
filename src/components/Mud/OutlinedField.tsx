import type { ReactNode } from 'react';
import type { FieldSize } from './fieldSize';
import styles from './Mud.module.css';

interface OutlinedFieldProps {
  label: string;
  hasValue: boolean;
  size: FieldSize;
  children: ReactNode;
  adornment?: ReactNode;
  isFocused?: boolean;
}

/** The outlined MudBlazor input frame: border, floating label and end adornment. */
export function OutlinedField({ label, hasValue, size, children, adornment, isFocused = false }: OutlinedFieldProps) {
  const isShrunk = hasValue || isFocused;
  const classes = [
    styles.outlined,
    size === 'compact' ? styles.outlinedCompact : '',
    isShrunk ? styles.outlinedShrunk : '',
    isFocused ? styles.outlinedFocused : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      <label className={styles.outlinedLabel}>{label}</label>
      <div className={styles.outlinedSlot}>{children}</div>
      {adornment ? <div className={styles.adornment}>{adornment}</div> : null}
      <fieldset className={styles.outlinedBorder} aria-hidden="true">
        <legend className={styles.outlinedLegend}>
          <span>{label}</span>
        </legend>
      </fieldset>
    </div>
  );
}

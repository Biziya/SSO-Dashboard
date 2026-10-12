import { useState } from 'react';
import type { FieldSize } from './fieldSize';
import { OutlinedField } from './OutlinedField';
import styles from './Mud.module.css';

interface MudTextFieldProps {
  label: string;
  defaultValue: string;
  size?: FieldSize;
}

/** Outlined MudTextField look-alike. Typing is local only. */
export function MudTextField({ label, defaultValue, size = 'dense' }: MudTextFieldProps) {
  const [value, setValue] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <OutlinedField label={label} hasValue={value !== ''} size={size} isFocused={isFocused}>
      <input
        className={styles.outlinedInput}
        aria-label={label}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </OutlinedField>
  );
}

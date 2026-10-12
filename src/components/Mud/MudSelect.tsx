import { useEffect, useRef, useState } from 'react';
import { Icon } from '../Icon/Icon';
import type { FieldSize } from './fieldSize';
import { OutlinedField } from './OutlinedField';
import styles from './Mud.module.css';

interface MudSelectProps {
  label: string;
  options: readonly string[];
  defaultValue: string;
  size?: FieldSize;
}

/**
 * Outlined, clearable MudSelect look-alike. The menu opens and the chosen
 * value is shown, but nothing is saved.
 */
export function MudSelect({ label, options, defaultValue, size = 'dense' }: MudSelectProps) {
  const [value, setValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (rootRef.current && event.target instanceof Node && !rootRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', closeOnOutsideClick);
    return () => document.removeEventListener('mousedown', closeOnOutsideClick);
  }, [isOpen]);

  const choose = (option: string) => {
    setValue(option);
    setIsOpen(false);
  };

  const adornment = (
    <>
      {value !== '' ? (
        <button type="button" className={styles.iconButton} aria-label="Clear" onClick={() => setValue('')}>
          <Icon name="clear" className={styles.smallIcon} />
        </button>
      ) : null}
      <Icon name="arrowDropDown" className={isOpen ? `${styles.selectArrow} ${styles.selectArrowOpen}` : styles.selectArrow} />
    </>
  );

  return (
    <div className={styles.selectRoot} ref={rootRef}>
      <OutlinedField label={label} hasValue={value !== ''} size={size} adornment={adornment} isFocused={isOpen}>
        <button
          type="button"
          className={styles.selectButton}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-label={label}
          onClick={() => setIsOpen((open) => !open)}
        >
          {value}
        </button>
      </OutlinedField>

      {isOpen ? (
        <ul className={styles.selectMenu} role="listbox" aria-label={label}>
          {options.map((option) => (
            <li key={option} role="option" aria-selected={option === value}>
              <button
                type="button"
                className={option === value ? `${styles.selectItem} ${styles.selectItemSelected}` : styles.selectItem}
                onClick={() => choose(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

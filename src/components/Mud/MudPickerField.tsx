import { Icon } from '../Icon/Icon';
import type { FieldSize } from './fieldSize';
import { OutlinedField } from './OutlinedField';
import styles from './Mud.module.css';

type PickerKind = 'date' | 'time';

interface TextPickerProps {
  kind: PickerKind;
  value: string;
  placeholder?: string;
  /** Hide the calendar/clock and clear icons until the cell is hovered or focused. */
  revealIconsOnHover?: boolean;
  className?: string;
}

const pickerIcon = { date: 'event', time: 'accessTime' } as const;

/**
 * Text-variant MudDatePicker / MudTimePicker look-alike, as used inside the
 * dashboard table cells. The picker popup is not reproduced: the value is
 * displayed read-only, which is how MudBlazor renders a non-editable picker.
 */
export function MudTextPicker({ kind, value, placeholder, revealIconsOnHover = true, className }: TextPickerProps) {
  const rootClass = [styles.textPicker, revealIconsOnHover ? styles.textPickerHoverIcons : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClass}>
      <input
        className={styles.textPickerInput}
        value={value}
        placeholder={placeholder}
        readOnly
        aria-label={kind === 'date' ? 'Date' : 'Time'}
      />
      <span className={styles.textPickerIcons}>
        {value !== '' ? <Icon name="clear" className={styles.pickerClearIcon} /> : null}
        <Icon name={pickerIcon[kind]} className={styles.pickerIcon} />
      </span>
    </div>
  );
}

interface OutlinedDatePickerProps {
  label: string;
  value: string;
  size?: FieldSize;
}

/** Outlined MudDatePicker look-alike (Last LTI date). */
export function MudOutlinedDatePicker({ label, value, size = 'dense' }: OutlinedDatePickerProps) {
  const adornment = <Icon name="event" className={styles.outlinedPickerIcon} />;

  return (
    <OutlinedField label={label} hasValue={value !== ''} size={size} adornment={adornment}>
      <input className={styles.outlinedInput} value={value} readOnly aria-label={label} />
    </OutlinedField>
  );
}

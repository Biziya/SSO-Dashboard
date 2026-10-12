import { cx } from '../../../utils/cx';
import styles from '../EditPlantDashboardPage.module.css';

interface ValueInputProps {
  label: string;
  value: string;
  unit?: string;
  /** Show the unit only once a value is present (the flow-rate and SUM columns). */
  hideUnitWhenEmpty?: boolean;
  inputClassName?: string;
}

/** An input with its unit, inside the right-aligned value wrapper. Typing is local only. */
export function ValueInput({ label, value, unit, hideUnitWhenEmpty = false, inputClassName }: ValueInputProps) {
  const showUnit = Boolean(unit) && !(hideUnitWhenEmpty && value === '');

  return (
    <div className={styles.metricValueWrapper}>
      <input className={cx(styles.editInput, styles.metricValueInput, inputClassName)} aria-label={label} defaultValue={value} />
      {showUnit ? <span className={styles.metricMeasurement}>{unit}</span> : null}
    </div>
  );
}

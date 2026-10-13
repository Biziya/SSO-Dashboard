import styles from './PlantTables.module.css';

interface MetricValueProps {
  value: string;
  unit?: string;
}

/** A value with its unit in small type; the unit is hidden when there is no value. */
export function MetricValue({ value, unit }: MetricValueProps) {
  return (
    <div className={styles.metricValueWrapper}>
      {value}
      {value !== '' && unit ? <span className={styles.metricMeasurement}>{unit}</span> : null}
    </div>
  );
}

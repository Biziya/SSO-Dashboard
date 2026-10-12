import styles from '../OperatorDashboardPage.module.css';

interface MetricValueProps {
  value: string;
  unit?: string;
}

export function MetricValue({ value, unit }: MetricValueProps) {
  return (
    <div className={styles.metricValueWrapper}>
      {value}
      {value !== '' && unit ? <span className={styles.metricMeasurement}>{unit}</span> : null}
    </div>
  );
}

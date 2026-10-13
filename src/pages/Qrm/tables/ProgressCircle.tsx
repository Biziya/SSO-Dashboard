import { cx } from '../../../utils/cx';
import type { ProgressPercent } from './types';
import { center, progressWedge, quarterMarks, radius } from './progressArc';
import styles from './QrmTable.module.css';

/** Digits rise about 0.62-0.7em above the baseline (Baloo 2, Arial); dropping it by half centres them. */
const digitHalfHeight = '0.3em';

interface ProgressCircleProps {
  percent: ProgressPercent;
  /** "row": status cell with the percentage inside; "legend": small key in the header. */
  size: 'row' | 'legend';
}

/** Status circle filled clockwise from 7:30, with the percentage centred inside. */
export function ProgressCircle({ percent, size }: ProgressCircleProps) {
  const wedge = progressWedge(percent);
  const showLabel = size === 'row';

  return (
    <svg className={cx(styles.qrmCircle, size === 'legend' && styles.legendCircle)} viewBox="0 0 100 100" aria-hidden="true">
      {wedge === 'full' ? <circle cx={center} cy={center} r={radius} className={styles.qrmFill} /> : null}
      {wedge !== null && wedge !== 'full' ? <path d={wedge} className={styles.qrmFill} /> : null}

      <circle cx={center} cy={center} r={radius} className={styles.qrmOutline} />
      {quarterMarks.map(([from, to]) => (
        <line key={`${from.x}-${from.y}`} x1={from.x} y1={from.y} x2={to.x} y2={to.y} className={styles.qrmCrosshair} />
      ))}

      {showLabel ? (
        <text x={center} y={center} dy={digitHalfHeight} className={styles.qrmCircleValue}>
          {percent}
        </text>
      ) : null}
    </svg>
  );
}

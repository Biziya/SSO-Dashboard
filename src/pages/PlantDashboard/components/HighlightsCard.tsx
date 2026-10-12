import { cx } from '../../../utils/cx';
import type { HighlightLine } from '../types';
import styles from '../PlantDashboardPage.module.css';

interface HighlightsCardProps {
  lines: HighlightLine[];
}

/** The operators' free-text highlights, shown read-only. */
export function HighlightsCard({ lines }: HighlightsCardProps) {
  return (
    <div className={styles.commentUpdateSection}>
      <div className={cx(styles.card, styles.commentCard, styles.richCommentCard)}>
        <div className={styles.verticalLabelWrapper}>
          <span className={styles.verticalText}>Highlights</span>
        </div>

        <div className={styles.commentValue}>
          {lines.map((line, lineIndex) => (
            <div key={lineIndex}>
              {line.map((segment, segmentIndex) => (
                <span key={segmentIndex} style={segment.color ? { color: segment.color } : undefined}>
                  {segment.text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

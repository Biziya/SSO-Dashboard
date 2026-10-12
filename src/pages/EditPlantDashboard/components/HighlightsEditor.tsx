import type { HighlightLine } from '../types';
import styles from '../EditPlantDashboardPage.module.css';

const toolbarButtons = [
  { label: 'B', className: undefined },
  { label: 'I', className: undefined },
  { label: 'U', className: undefined },
  { label: 'Blue', className: styles.colorBlue },
  { label: 'Red', className: styles.colorRed },
  { label: 'Black', className: undefined },
  { label: 'Clear', className: undefined },
];

/**
 * The Highlights rich-text field. The text can be edited for review; the
 * formatting buttons are shown but not wired, and nothing is saved.
 */
export function HighlightsEditor({ lines }: { lines: HighlightLine[] }) {
  return (
    <div className={styles.commentUpdateSection}>
      <div className={`${styles.commentCard} ${styles.richCommentCard}`}>
        <div className={styles.verticalLabelWrapper}>
          <label htmlFor="dashboard-comment" className={styles.verticalText}>
            Highlights
          </label>
        </div>

        <div className={styles.richEditorContainer}>
          <div className={styles.richToolbar}>
            {toolbarButtons.map((button) => (
              <button
                key={button.label}
                type="button"
                className={button.className ? `${styles.richToolbarButton} ${button.className}` : styles.richToolbarButton}
              >
                {button.label}
              </button>
            ))}
          </div>

          <div id="dashboard-comment" className={styles.richTextEditor} contentEditable suppressContentEditableWarning>
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
    </div>
  );
}

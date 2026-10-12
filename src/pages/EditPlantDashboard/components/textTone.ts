import type { TextTone } from '../types';
import styles from '../EditPlantDashboardPage.module.css';

export const toneClass: Record<TextTone, string | undefined> = {
  '': undefined,
  'info-text': styles.infoText,
  'danger-text': styles.dangerText,
};

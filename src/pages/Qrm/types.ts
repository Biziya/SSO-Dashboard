import type { QrmRow } from './tables/types';

export interface QrmBoard {
  year: number;
  /** Text shown where the Save button used to be (the board auto-saved). */
  saveState: string;
  rows: QrmRow[];
}

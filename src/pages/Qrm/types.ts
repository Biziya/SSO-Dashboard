/** Progress is shown as a quartered circle: 0, 25, 50, 75 or 100 percent. */
export type ProgressPercent = 0 | 25 | 50 | 75 | 100;

export interface QrmRow {
  number: number;
  task: string;
  responsible: string;
  startDate: string;
  finishDate: string;
  progressPercent: ProgressPercent;
}

export interface QrmBoard {
  year: number;
  /** Text shown where the Save button used to be (the board auto-saved). */
  saveState: string;
  rows: QrmRow[];
}

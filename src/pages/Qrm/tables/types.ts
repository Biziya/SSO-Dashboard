/** Progress of a task, in percent. The board uses steps of 25. */
export type ProgressPercent = 0 | 25 | 50 | 75 | 100;

export interface QrmRow {
  number: number;
  task: string;
  responsible: string;
  startDate: string;
  finishDate: string;
  progressPercent: ProgressPercent;
}

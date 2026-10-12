import type { ProgressPercent, QrmBoard, QrmRow } from './types';

export const legendSteps: ProgressPercent[] = [25, 50, 75, 100];

const tasks: Array<Omit<QrmRow, 'number'>> = [
  { task: 'Replace filter cloths on 460 filter press', responsible: 'Maintenance', startDate: '2026-09-14', finishDate: '2026-09-25', progressPercent: 75 },
  { task: 'Calibrate pH probes on unit 200 sampling points', responsible: 'Lab', startDate: '2026-09-15', finishDate: '2026-09-22', progressPercent: 100 },
  { task: 'Inspect 422-TK-4200 brine tank strainer', responsible: 'Chief T1', startDate: '2026-09-18', finishDate: '2026-09-30', progressPercent: 50 },
  { task: 'Update eluent preparation procedure after EP sheet V4.1 review', responsible: 'Process', startDate: '2026-09-10', finishDate: '2026-10-05', progressPercent: 25 },
  { task: 'Repair leaking valve on NH₃ storage line', responsible: 'Maintenance', startDate: '2026-09-20', finishDate: '2026-09-27', progressPercent: 25 },
  { task: 'Train new senior operators on resin transfer sequence', responsible: 'Chief T2', startDate: '2026-09-01', finishDate: '2026-10-15', progressPercent: 50 },
  { task: 'Order spare 100PU1030 pump seal kit', responsible: 'Procurement', startDate: '2026-09-21', finishDate: '2026-10-10', progressPercent: 0 },
  { task: 'Review LTI board and safety walk findings', responsible: 'HSE', startDate: '2026-09-16', finishDate: '2026-09-23', progressPercent: 100 },
];

const emptyRowCount = 12;

/** Twenty numbered rows, as on the plant whiteboard; the last ones are still blank. */
export const qrmBoardMock: QrmBoard = {
  year: 2026,
  saveState: 'Saved 18:42:07',
  rows: [
    ...tasks.map((task, index) => ({ ...task, number: index + 1 })),
    ...Array.from({ length: emptyRowCount }, (_, index) => ({
      number: tasks.length + index + 1,
      task: '',
      responsible: '',
      startDate: '',
      finishDate: '',
      progressPercent: 0 as const,
    })),
  ],
};

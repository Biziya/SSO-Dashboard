/**
 * Plant Control Dashboard (read-only display).
 *
 * Every value is a display-ready string: number formatting, durations,
 * derived weights and the LTI counter were calculated by the Blazor
 * backend and are not reproduced here.
 */

export type TextTone = 'default' | 'info' | 'danger';

export type StorageStatus = 'OK' | 'NOK' | '';

export type ShiftCode = 'DS' | 'NS' | '';

export interface DashboardHeaderData {
  team: string;
  shift: ShiftCode;
  lastUpdated: string;
  ltiFreeDays: string;
}

export interface DSeriesItem {
  code: string;
  value: number;
  showArrow: boolean;
}

export interface ResinTransferRow {
  number: number;
  /** "MM-dd HH:mm" */
  start: string;
  end: string;
  duration: string;
}

export interface AnalysisSample {
  name: string;
  uPlus: string;
  uPlusTone: TextTone;
  ph: string;
}

export interface FrontEndMetric {
  name: string;
  value: string;
  measurement: string;
  /** Pump rows are grouped under the DEBIT label. */
  isPump: boolean;
}

export interface MamTank {
  letter: string;
  position: string;
}

export interface TankLevel {
  name: string;
  volume: string;
  chloride: string;
  hPlus: string;
  sampler: string;
}

export interface TankGroup {
  titleLines: [string, string];
  tanks: TankLevel[];
}

export interface OperationRow {
  date: string;
  start: string;
  end: string;
  duration: string;
  flowRate: string;
  flowRateUnit: string;
  sum: string;
  sumUnit: string;
}

export interface OperationGroup {
  /** Shown on separate lines in the Processes column. */
  nameLines: string[];
  rows: OperationRow[];
}

export interface StorageRow {
  name: string;
  status: StorageStatus;
  quantity: string;
  weight: string;
  comment: string;
}

export interface DrumRow {
  name: string;
  scale: string;
  tfa: string;
}

export interface LabRow {
  period: string;
  samples: string;
  ana: string;
}

export interface HighlightSegment {
  text: string;
  color?: string;
}

/** One line of the Highlights rich-text comment. */
export type HighlightLine = HighlightSegment[];

export interface PlantDashboardData {
  header: DashboardHeaderData;
  dSeries: DSeriesItem[];
  resinTransfers: ResinTransferRow[];
  analysisSamples: AnalysisSample[];
  frontEnd: FrontEndMetric[];
  mamTanks: MamTank[];
  mamTankNotes: string[];
  tankGroups: [TankGroup, TankGroup];
  operations: OperationGroup[];
  storage: StorageRow[];
  drums: DrumRow[];
  lab: LabRow[];
  labComment: string;
  highlights: HighlightLine[];
}

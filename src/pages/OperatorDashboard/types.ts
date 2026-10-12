/**
 * Chief & Senior operators section, limited version (route /operator).
 *
 * Only the analysis results, the tank readings, the drums and lab panel and
 * the team/shift fields were editable here; the rest is shown read-only.
 * Input fields hold raw values; read-only cells hold display text.
 */

export type TextTone = '' | 'info-text' | 'danger-text';

export type StorageStatus = 'OK' | 'NOK' | '';

export interface DSeriesItem {
  code: string;
  value: number;
  showArrow: boolean;
}

export interface ResinTransferRow {
  number: number;
  startTime: string;
  endTime: string;
  duration: string;
}

export interface AnalysisSample {
  name: string;
  uPlus: string;
  /** Operator-chosen colour of the U+ value. */
  uPlusTone: TextTone;
  ph: string;
}

export interface FrontEndMetric {
  name: string;
  value: string;
  measurement: string;
  isPump: boolean;
}

export interface MamTank {
  letter: string;
  position: string;
}

/** How the Sampler cell of a tank row is drawn. */
export type SamplerCell =
  | { kind: 'text' }
  | { kind: 'select'; options: string[] }
  | { kind: 'merged'; rowSpan: number }
  | { kind: 'covered' };

export interface TankLevel {
  name: string;
  volume: string;
  chloride: string;
  hPlus: string;
  sampler: string;
  samplerCell: SamplerCell;
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

export type HighlightLine = HighlightSegment[];

export interface TeamShiftFields {
  team: string;
  shift: string;
  ltiFreeDays: string;
  teamOptions: string[];
  shiftOptions: string[];
}

export interface OperatorDashboardData {
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
  teamShift: TeamShiftFields;
}

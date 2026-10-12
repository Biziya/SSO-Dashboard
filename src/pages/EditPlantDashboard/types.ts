import type { EluentInstruction } from '../../components/EluentPreparationTable/types';

/**
 * Chief & Senior operators section (route /edit-plant-control-dashboard):
 * the editable Plant Control Dashboard with the eluent preparation drawer.
 *
 * Inputs hold raw values. Derived cells (durations, SUM, weights, drum net
 * weight, LTI count) arrive pre-computed because the calculations are not
 * part of this frontend.
 */

export type TextTone = '' | 'info-text' | 'danger-text';

export type StorageStatus = 'OK' | 'NOK' | '';

export interface DSeriesItem {
  code: string;
  value: number;
  showArrow: boolean;
  /** Only the column that may move next can be pressed. */
  isClickable: boolean;
}

export interface ResinTransferRow {
  number: number;
  /** "MM/dd" */
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  duration: string;
}

export interface AnalysisSample {
  name: string;
  uPlus: string;
  uPlusTone: TextTone;
  ph: string;
}

export interface PumpMetric {
  kind: 'pump';
  name: string;
  value: string;
  measurement: string;
  /** Pumps already chosen on another row cannot be chosen again. */
  unavailablePumps: string[];
}

export interface ValueMetric {
  kind: 'value';
  name: string;
  value: string;
  measurement: string;
  isDanger: boolean;
}

export type FrontEndMetric = PumpMetric | ValueMetric;

export interface MamTank {
  letter: string;
  position: string;
}

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
  /** "MM/dd" */
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
  /** The Net row is calculated (gross minus tare), not typed. */
  isCalculated: boolean;
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
  lastLtiDate: string;
  ltiFreeDays: string;
  teamOptions: string[];
  shiftOptions: string[];
}

export interface EditPlantDashboardData {
  dSeries: DSeriesItem[];
  resinTransfers: ResinTransferRow[];
  analysisSamples: AnalysisSample[];
  frontEnd: FrontEndMetric[];
  pumpOptions: string[];
  mamTanks: MamTank[];
  tankLetters: string[];
  tankGroups: [TankGroup, TankGroup];
  operations: OperationGroup[];
  storage: StorageRow[];
  drums: DrumRow[];
  lab: LabRow[];
  labComment: string;
  highlights: HighlightLine[];
  teamShift: TeamShiftFields;
  instruction: EluentInstruction;
}

/**
 * Row types for the limited operators section tables. Inputs hold raw
 * values; read-only cells hold display text.
 */

export type TextTone = '' | 'info-text' | 'danger-text';

export type StorageStatus = 'OK' | 'NOK' | '';

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

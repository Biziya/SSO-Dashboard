/**
 * Row types for the wall dashboard tables. Values are display-ready strings;
 * formatting and derived figures came from the Blazor backend.
 */

export type TextTone = 'default' | 'info' | 'danger';

export type StorageStatus = 'OK' | 'NOK' | '';

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

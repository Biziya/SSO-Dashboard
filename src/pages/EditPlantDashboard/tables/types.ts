/**
 * Row types for the edit dashboard tables. Inputs hold raw values; derived
 * cells (durations, SUM, weights, drum net weight) arrive pre-computed.
 */

export type TextTone = '' | 'info-text' | 'danger-text';

export type StorageStatus = 'OK' | 'NOK' | '';

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

/* --- Eluent preparation drawer --- */

export interface EluentTank {
  tankName: string;
  sampler: string;
  volumeLiters: string;
  chlorideGramPerLiter: string;
  hPlusGramPerLiter: string;
  /** Calculated, kg. */
  naClKilogram: string;
  /** Calculated, L of 93% H2SO4. */
  h2so4Liters: string;
  /** Calculated, L. */
  waterLiters: string;
}

export interface EluentAddition {
  naClLiters: string;
  acidSolutionLiters: string;
  waterLiters: string;
}

export interface EluentTarget {
  totalVolumeLiters: string;
  chlorideGramPerLiter: string;
  hPlusGramPerLiter: string;
}

export interface SolutionPreparation {
  title: string;
  chemicalLabel: string;
  targetVolumeLiters: string;
  targetConcentration: string;
  targetWaterNeedLiters: string;
  targetChemicalNeed: string;
  addWaterNeedLiters: string;
  addChemicalNeed: string;
}

export interface EluentInstruction {
  tanks: EluentTank[];
  target: EluentTarget;
  addition: EluentAddition;
  brine: SolutionPreparation;
  acidSolution: SolutionPreparation;
  note: string;
}

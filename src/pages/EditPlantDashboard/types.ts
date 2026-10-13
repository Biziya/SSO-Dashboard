import type { EluentInstruction } from './tables/types';
import type { AnalysisSample, DrumRow, FrontEndMetric, LabRow, OperationGroup, ResinTransferRow, StorageRow, TankGroup } from './tables/types';

/**
 * Chief & Senior operators section (route /edit-plant-control-dashboard):
 * the editable Plant Control Dashboard with the eluent preparation drawer.
 *
 * Inputs hold raw values. Derived cells (durations, SUM, weights, drum net
 * weight, LTI count) arrive pre-computed because the calculations are not
 * part of this frontend.
 */

export interface DSeriesItem {
  code: string;
  value: number;
  showArrow: boolean;
  /** Only the column that may move next can be pressed. */
  isClickable: boolean;
}

export interface MamTank {
  letter: string;
  position: string;
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

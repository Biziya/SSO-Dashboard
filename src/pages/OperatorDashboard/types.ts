import type { AnalysisSample, DrumRow, FrontEndMetric, LabRow, OperationGroup, ResinTransferRow, StorageRow, TankGroup } from './tables/types';

/**
 * Chief & Senior operators section, limited version (route /operator).
 *
 * Only the analysis results, the tank readings, the drums and lab panel and
 * the team/shift fields were editable here; the rest is shown read-only.
 * Input fields hold raw values; read-only cells hold display text.
 */

export interface DSeriesItem {
  code: string;
  value: number;
  showArrow: boolean;
}

export interface MamTank {
  letter: string;
  position: string;
}

/** How the Sampler cell of a tank row is drawn. */

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

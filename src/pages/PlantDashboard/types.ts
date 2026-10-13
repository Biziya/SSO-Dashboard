import type { AnalysisSample, DrumRow, FrontEndMetric, LabRow, OperationGroup, ResinTransferRow, StorageRow, TankGroup } from './tables/types';

/**
 * Plant Control Dashboard (read-only display).
 *
 * Every value is a display-ready string: number formatting, durations,
 * derived weights and the LTI counter were calculated by the Blazor
 * backend and are not reproduced here.
 */

/** A moment chosen in the "View at" picker: "yyyy-MM-dd" and "HH:mm". */
export interface ViewAtMoment {
  date: string;
  time: string;
}

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

export interface MamTank {
  letter: string;
  position: string;
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

/**
 * Eluent, brine and acid solution preparation (EP sheet).
 *
 * Entered values are shown in inputs; calculated values arrive already
 * formatted, because the calculations are not part of this frontend.
 */
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

/**
 * "page": hosted inside a dashboard page, whose table rules (14px cells,
 * full-width tables, light header fill) also reached this table in Blazor.
 * "drawer": shown in the right-hand drawer, where only its own styles apply.
 */
export type EluentTableContext = 'page' | 'drawer';

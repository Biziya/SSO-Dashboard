import type { SeniorInstructionView } from './types';

/** Based on ChiefInstructionData_20260921_165331.json, calculated cells pre-formatted. */
export const seniorInstructionMock: SeniorInstructionView = {
  isAcknowledged: false,
  lastUpdated: '2026/09/21 16:53',
  instruction: {
    tanks: [
      { tankName: '422-TK-4200', sampler: '422PE10', volumeLiters: '736', chlorideGramPerLiter: '94.77', hPlusGramPerLiter: '', naClKilogram: '69.75', h2so4Liters: '', waterLiters: '704' },
      { tankName: '422-TK-4100', sampler: '422PE11', volumeLiters: '412', chlorideGramPerLiter: '35', hPlusGramPerLiter: '13', naClKilogram: '14.42', h2so4Liters: '3', waterLiters: '404' },
      { tankName: '422-TK-4000', sampler: '422PE12', volumeLiters: '350', chlorideGramPerLiter: '15', hPlusGramPerLiter: '13', naClKilogram: '5.25', h2so4Liters: '3', waterLiters: '346' },
      { tankName: '422-TK-3000', sampler: '422PE13', volumeLiters: '900', chlorideGramPerLiter: '', hPlusGramPerLiter: '39', naClKilogram: '', h2so4Liters: '21', waterLiters: '889' },
    ],
    target: { totalVolumeLiters: '6000', chlorideGramPerLiter: '35', hPlusGramPerLiter: '10' },
    addition: { naClLiters: '2,008', acidSolutionLiters: '1,284', waterLiters: '1,945' },
    brine: {
      title: 'Brine solution preparation 422-TK-4200',
      chemicalLabel: 'Salt need',
      targetVolumeLiters: '2300',
      targetConcentration: '37',
      targetWaterNeedLiters: '2,261',
      targetChemicalNeed: '85.10',
      addWaterNeedLiters: '1,564',
      addChemicalNeed: '25.82',
    },
    acidSolution: {
      title: 'Acid solution preparation 422-TK-3000',
      chemicalLabel: '93% H2SO4 need',
      targetVolumeLiters: '1500',
      targetConcentration: '400',
      targetWaterNeedLiters: '1,307',
      targetChemicalNeed: '352.55',
      addWaterNeedLiters: '268',
      addChemicalNeed: '331.92',
    },
    note: 'Prepare brine in 422-TK-4200 before the 14:00 elution. Check the 422CM2000A strainer first.',
  },
};

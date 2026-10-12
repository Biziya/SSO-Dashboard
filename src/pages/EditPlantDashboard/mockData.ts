import type { EditPlantDashboardData } from './types';

/** The saved snapshot as the edit screen opened it, with the drawer synced from the tank readings. */
export const editPlantDashboardMock: EditPlantDashboardData = {
  dSeries: [
    { code: 'D201', value: 1, showArrow: false, isClickable: true },
    { code: 'D202', value: 2, showArrow: false, isClickable: false },
    { code: 'D203', value: 3, showArrow: false, isClickable: false },
    { code: 'D204', value: 4, showArrow: true, isClickable: false },
  ],
  resinTransfers: [
    { number: 1, startDate: '09/21', startTime: '09:10', endDate: '09/21', endTime: '10:25', duration: '01:15' },
    { number: 2, startDate: '09/21', startTime: '10:25', endDate: '09/21', endTime: '11:40', duration: '01:15' },
  ],
  analysisSamples: [
    { name: '200PE4 Cumul', uPlus: '15.33', uPlusTone: 'danger-text', ph: '1.75' },
    { name: '200PE5', uPlus: '17.90', uPlusTone: 'danger-text', ph: '1.62' },
    { name: '200PE6', uPlus: '<5', uPlusTone: '', ph: '1.80' },
    { name: '200PE7', uPlus: '<5', uPlusTone: '', ph: '1.53' },
    { name: '200PE8', uPlus: '<5', uPlusTone: '', ph: '1.57' },
    { name: '200PE9 Cumul', uPlus: '<5', uPlusTone: '', ph: '1.65' },
    { name: '200PE4', uPlus: '4.82', uPlusTone: 'info-text', ph: '1.80' },
    { name: '200PE2', uPlus: '', uPlusTone: '', ph: '' },
  ],
  frontEnd: [
    { kind: 'pump', name: '100PU1010', value: '17', measurement: 'm³/h', unavailablePumps: ['100PU1020'] },
    { kind: 'pump', name: '100PU1020', value: '7', measurement: 'm³/h', unavailablePumps: ['100PU1010'] },
    { kind: 'value', name: 'Pressure', value: '3.1', measurement: 'bar', isDanger: false },
    { kind: 'value', name: 'Concent.', value: '0', measurement: 'g/L', isDanger: false },
  ],
  pumpOptions: ['100PU1010', '100PU1020', '100PU1030', '100PU1040'],
  mamTanks: [
    { letter: 'C', position: 'E₀' },
    { letter: 'D', position: 'E₁' },
    { letter: 'E', position: 'E₂' },
    { letter: 'F', position: 'E₃' },
    { letter: 'B', position: 'T₁' },
    { letter: 'A', position: 'T₂' },
  ],
  tankLetters: ['A', 'B', 'C', 'D', 'E', 'F'],
  tankGroups: [
    {
      titleLines: ['ELUENT PREPARATION', 'UNIT 422'],
      tanks: [
        { name: '422-TK-4200', volume: '2400', chloride: '94.77', hPlus: '', sampler: '422PE10', samplerCell: { kind: 'text' } },
        { name: '422-TK-4100', volume: '1380', chloride: '35', hPlus: '13', sampler: '422PE11', samplerCell: { kind: 'text' } },
        { name: '422-TK-4000', volume: '1500', chloride: '34.59', hPlus: '10.82', sampler: '422PE12', samplerCell: { kind: 'text' } },
        { name: '422-TK-3000', volume: '3607', chloride: '', hPlus: '39', sampler: '422PE13', samplerCell: { kind: 'text' } },
      ],
    },
    {
      titleLines: ['ELUENT, PULP &', 'EFFLUENT UNIT 450'],
      tanks: [
        { name: '450-TK-1000', volume: '2950', chloride: '27.5', hPlus: '8.66', sampler: '450PE15', samplerCell: { kind: 'select', options: ['450PE15', '450PE15B'] } },
        { name: '450-TK-3100', volume: '298', chloride: '', hPlus: '', sampler: '450PE16', samplerCell: { kind: 'text' } },
        { name: '450-TK-3200A', volume: '100', chloride: '25.07', hPlus: '', sampler: '450PE26', samplerCell: { kind: 'merged', rowSpan: 3 } },
        { name: '450-TK-3200B_C', volume: '120', chloride: '25.07', hPlus: '', sampler: '450PE26', samplerCell: { kind: 'covered' } },
      ],
    },
  ],
  operations: [
    {
      nameLines: ['Elution UNIT 422'],
      rows: [
        { date: '09/21', start: '12:45', end: '', duration: '', flowRate: '750', flowRateUnit: 'L/h', sum: '', sumUnit: 'L' },
        { date: '', start: '', end: '', duration: '', flowRate: '750', flowRateUnit: 'L/h', sum: '', sumUnit: 'L' },
      ],
    },
    {
      nameLines: ['Regen.+', 'Rinsing'],
      rows: [
        { date: '', start: '', end: '', duration: '', flowRate: '375', flowRateUnit: 'L/h', sum: '', sumUnit: 'L' },
        { date: '', start: '', end: '', duration: '', flowRate: '375', flowRateUnit: 'L/h', sum: '', sumUnit: 'L' },
      ],
    },
    {
      nameLines: ['Precip UNIT 450'],
      rows: [
        { date: '09/15', start: '23:46', end: '10:48', duration: '11:02', flowRate: '500', flowRateUnit: 'L/h', sum: '5,517', sumUnit: 'L' },
        { date: '09/17', start: '20:35', end: '06:17', duration: '09:42', flowRate: '500', flowRateUnit: 'L/h', sum: '4,850', sumUnit: 'L' },
      ],
    },
    {
      nameLines: ['Filter press UNIT 460'],
      rows: [
        { date: '09/18', start: '14:05', end: '15:09', duration: '01:04', flowRate: '95', flowRateUnit: 'L', sum: '42.5', sumUnit: 'kg' },
        { date: '09/19', start: '15:40', end: '17:10', duration: '01:30', flowRate: '96', flowRateUnit: 'L', sum: '43.7', sumUnit: 'kg' },
        { date: '', start: '', end: '', duration: '', flowRate: '', flowRateUnit: 'L', sum: '', sumUnit: 'kg' },
        { date: '', start: '', end: '', duration: '', flowRate: '', flowRateUnit: 'L', sum: '', sumUnit: 'kg' },
      ],
    },
  ],
  storage: [
    { name: 'H₂SO₄', status: 'OK', quantity: '42.06', weight: '76.97', comment: '' },
    { name: 'NH₃', status: 'OK', quantity: '16.99', weight: '15.38', comment: 'Delivery expected 09-24' },
  ],
  drums: [
    { name: 'Batch No', scale: 'RE1:2', tfa: 'RE1:2', isCalculated: false },
    { name: 'Drum No', scale: '7', tfa: '6', isCalculated: false },
    { name: 'Tare (kg)', scale: '15.9', tfa: '16.3', isCalculated: false },
    { name: 'Gross (kg)', scale: '', tfa: '317.8', isCalculated: false },
    { name: 'Net (kg)', scale: '', tfa: '301.50', isCalculated: true },
  ],
  lab: [
    { period: 'Today', samples: '20', ana: '14' },
    { period: 'Yesterday', samples: '6', ana: '6' },
  ],
  labComment: 'XRF calibration 10:00-11:00.',
  highlights: [
    [{ text: 'Acid, Аммиакын агуулах, Торлолын цооногууд хэвийн, Front end хэсгийн даралт ундрага хэвийн' }],
    [{ text: '09:00 цагт D204 багана цуваанаас гаргав 09:10 цагт D204 баганаас T2 байрлалд MAMF танкруу юүлж эхлэв' }],
    [{ text: 'U+ давирхайн дээж авав 10:25 цагт юүлж дуусав' }],
    [{ text: '10:25-11:40 цагт T1 байрлал MAMA танкнаас D204 баганаруу U- давирхай юүлэв' }],
    [{ text: '11:45 цагт D204 багана цуваанд оруулав. ' }, { text: '12:45д элюц эхэлсэн.', color: '#0087bd' }],
    [
      { text: '14:00д ТК4200д давс найруулсан. (1570л усанд 250кг давс). ' },
      { text: '422СМ 2000А танкны шүүр шалгаж 1 шүүр солив.', color: '#df2028' },
    ],
  ],
  teamShift: {
    team: 'T1',
    shift: 'DS',
    lastLtiDate: '2020-07-04',
    ltiFreeDays: '2291',
    teamOptions: ['T1', 'T2', 'T3', 'T4'],
    shiftOptions: ['DS', 'NS'],
  },
  instruction: {
    tanks: [
      { tankName: '422-TK-4200', sampler: '422PE10', volumeLiters: '2400', chlorideGramPerLiter: '94.77', hPlusGramPerLiter: '', naClKilogram: '227.45', h2so4Liters: '', waterLiters: '2,295' },
      { tankName: '422-TK-4100', sampler: '422PE11', volumeLiters: '1380', chlorideGramPerLiter: '35', hPlusGramPerLiter: '13', naClKilogram: '48.30', h2so4Liters: '11', waterLiters: '1,352' },
      { tankName: '422-TK-4000', sampler: '422PE12', volumeLiters: '1500', chlorideGramPerLiter: '34.59', hPlusGramPerLiter: '13', naClKilogram: '51.89', h2so4Liters: '11', waterLiters: '1,470' },
      { tankName: '422-TK-3000', sampler: '422PE13', volumeLiters: '3607', chlorideGramPerLiter: '', hPlusGramPerLiter: '39', naClKilogram: '', h2so4Liters: '83', waterLiters: '3,562' },
    ],
    target: { totalVolumeLiters: '6000', chlorideGramPerLiter: '35', hPlusGramPerLiter: '10' },
    addition: { naClLiters: '1,159', acidSolutionLiters: '578', waterLiters: '1,383' },
    brine: {
      title: 'Brine solution preparation 422-TK-4200',
      chemicalLabel: 'Salt need',
      targetVolumeLiters: '2300',
      targetConcentration: '37',
      targetWaterNeedLiters: '2,261',
      targetChemicalNeed: '85.10',
      addWaterNeedLiters: '-100',
      addChemicalNeed: '-239.44',
    },
    acidSolution: {
      title: 'Acid solution preparation 422-TK-3000',
      chemicalLabel: '93% H2SO4 need',
      targetVolumeLiters: '1500',
      targetConcentration: '400',
      targetWaterNeedLiters: '1,307',
      targetChemicalNeed: '352.55',
      addWaterNeedLiters: '-2,377',
      addChemicalNeed: '269.89',
    },
    note: 'Prepare brine in 422-TK-4200 before the 14:00 elution. Check the 422CM2000A strainer first.',
  },
};

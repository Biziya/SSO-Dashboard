import type { PlantDashboardData } from './types';

/**
 * Based on the saved snapshot PlantDashboardData_20260921_185322.json,
 * with display formatting already applied.
 */
export const plantDashboardMock: PlantDashboardData = {
  header: {
    team: 'T1',
    shift: 'DS',
    lastUpdated: '2026-09-21 18:53:22',
    ltiFreeDays: '2291',
  },
  dSeries: [
    { code: 'D201', value: 1, showArrow: false },
    { code: 'D202', value: 2, showArrow: false },
    { code: 'D203', value: 3, showArrow: false },
    { code: 'D204', value: 4, showArrow: true },
  ],
  resinTransfers: [
    { number: 1, start: '09-21 09:10', end: '09-21 10:25', duration: '01:15' },
    { number: 2, start: '09-21 10:25', end: '09-21 11:40', duration: '01:15' },
  ],
  analysisSamples: [
    { name: '200PE4 Cumul', uPlus: '15.33', uPlusTone: 'danger', ph: '1.75' },
    { name: '200PE5', uPlus: '17.90', uPlusTone: 'danger', ph: '1.62' },
    { name: '200PE6', uPlus: '<5', uPlusTone: 'default', ph: '1.80' },
    { name: '200PE7', uPlus: '<5', uPlusTone: 'default', ph: '1.53' },
    { name: '200PE8', uPlus: '<5', uPlusTone: 'default', ph: '1.57' },
    { name: '200PE9 Cumul', uPlus: '<5', uPlusTone: 'default', ph: '1.65' },
    { name: '200PE4', uPlus: '4.82', uPlusTone: 'info', ph: '1.80' },
    { name: '200PE2', uPlus: '', uPlusTone: 'default', ph: '' },
  ],
  frontEnd: [
    { name: '100PU1010', value: '17', measurement: 'm³/h', isPump: true },
    { name: '100PU1020', value: '7', measurement: 'm³/h', isPump: true },
    { name: 'Pressure', value: '3.1', measurement: 'bar', isPump: false },
    { name: 'Concent.', value: '0', measurement: 'g/L', isPump: false },
  ],
  mamTanks: [
    { letter: 'C', position: 'E₀' },
    { letter: 'D', position: 'E₁' },
    { letter: 'E', position: 'E₂' },
    { letter: 'F', position: 'E₃' },
    { letter: 'B', position: 'T₁' },
    { letter: 'A', position: 'T₂' },
  ],
  mamTankNotes: ['', ''],
  tankGroups: [
    {
      titleLines: ['ELUENT PREPARATION', 'UNIT 422'],
      tanks: [
        { name: '422-TK-4200', volume: '2,400', chloride: '94.77', hPlus: '', sampler: '422PE10' },
        { name: '422-TK-4100', volume: '1,380', chloride: '35.00', hPlus: '13.00', sampler: '422PE11' },
        { name: '422-TK-4000', volume: '1,500', chloride: '34.59', hPlus: '10.82', sampler: '422PE12' },
        { name: '422-TK-3000', volume: '3,607', chloride: '', hPlus: '39.00', sampler: '422PE13' },
      ],
    },
    {
      titleLines: ['ELUATE, PULP &', 'EFFLUENT UNIT 450'],
      tanks: [
        { name: '450-TK-1000', volume: '2,950', chloride: '27.50', hPlus: '8.66', sampler: '450PE15' },
        { name: '450-TK-3100', volume: '298', chloride: '', hPlus: '', sampler: '450PE16' },
        { name: '450-TK-3200A', volume: '100', chloride: '25.07', hPlus: '', sampler: '450PE26' },
        { name: '450-TK-3200B_C', volume: '240', chloride: '25.07', hPlus: '', sampler: '450PE26' },
      ],
    },
  ],
  operations: [
    {
      nameLines: ['Elution', 'UNIT 422'],
      rows: [
        { date: '09-21', start: '12:45', end: '', duration: '', flowRate: '750', flowRateUnit: 'L/h', sum: '6,687', sumUnit: 'L' },
        { date: '', start: '', end: '', duration: '', flowRate: '750', flowRateUnit: 'L/h', sum: '6,562', sumUnit: 'L' },
      ],
    },
    {
      nameLines: ['Regen.+', 'Rinsing'],
      rows: [
        { date: '', start: '', end: '', duration: '', flowRate: '375', flowRateUnit: 'L/h', sum: '3,062', sumUnit: 'L' },
        { date: '', start: '', end: '', duration: '', flowRate: '375', flowRateUnit: 'L/h', sum: '3,281', sumUnit: 'L' },
      ],
    },
    {
      nameLines: ['Precip UNIT 450'],
      rows: [
        { date: '09-15', start: '23:46', end: '10:48', duration: '11:02', flowRate: '500', flowRateUnit: 'L/h', sum: '5,517', sumUnit: 'L' },
        { date: '09-17', start: '20:35', end: '06:17', duration: '09:42', flowRate: '500', flowRateUnit: 'L/h', sum: '4,850', sumUnit: 'L' },
      ],
    },
    {
      nameLines: ['Filter press', 'UNIT 460'],
      rows: [
        { date: '09-18', start: '14:05', end: '15:09', duration: '01:04', flowRate: '95', flowRateUnit: 'L', sum: '42.50', sumUnit: 'kg' },
        { date: '09-19', start: '15:40', end: '17:10', duration: '01:30', flowRate: '96', flowRateUnit: 'L', sum: '43.70', sumUnit: 'kg' },
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
    { name: 'Batch No', scale: 'RE1:2', tfa: 'RE1:2' },
    { name: 'Drum No', scale: '7', tfa: '6' },
    { name: 'Tare (kg)', scale: '15.9', tfa: '16.3' },
    { name: 'Gross (kg)', scale: '', tfa: '317.8' },
    { name: 'Net (kg)', scale: '', tfa: '301.50' },
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
};

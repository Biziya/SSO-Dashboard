/** Date helpers for the "View at" picker. Dates are local "yyyy-MM-dd" strings. */

export interface CalendarMonth {
  year: number;
  /** 0 = January */
  month: number;
}

export interface CalendarDay {
  isoDate: string;
  day: number;
}

export const weekdayLabels = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const pad = (value: number) => String(value).padStart(2, '0');

export function toIsoDate(year: number, month: number, day: number): string {
  return `${year}-${pad(month + 1)}-${pad(day)}`;
}

export function todayIsoDate(): string {
  const now = new Date();
  return toIsoDate(now.getFullYear(), now.getMonth(), now.getDate());
}

/** The month containing an ISO date, or the current month when there is none. */
export function monthOf(isoDate: string | null): CalendarMonth {
  if (isoDate) {
    const [year, month] = isoDate.split('-').map(Number);
    if (year !== undefined && month !== undefined) {
      return { year, month: month - 1 };
    }
  }

  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() };
}

export function shiftMonth({ year, month }: CalendarMonth, offset: number): CalendarMonth {
  const date = new Date(year, month + offset, 1);
  return { year: date.getFullYear(), month: date.getMonth() };
}

export function monthLabel({ year, month }: CalendarMonth): string {
  return new Date(year, month, 1).toLocaleString('en-GB', { month: 'long', year: 'numeric' });
}

/** Weeks of the month, Monday first; null fills the days outside the month. */
export function monthWeeks({ year, month }: CalendarMonth): Array<Array<CalendarDay | null>> {
  const leadingBlanks = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: Array<CalendarDay | null> = Array.from({ length: leadingBlanks }, () => null);

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push({ isoDate: toIsoDate(year, month, day), day });
  }

  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  const weeks: Array<Array<CalendarDay | null>> = [];
  for (let index = 0; index < cells.length; index += 7) {
    weeks.push(cells.slice(index, index + 7));
  }

  return weeks;
}

import { useEffect, useRef, useState } from 'react';
import { Icon } from '../../../components/Icon/Icon';
import { cx } from '../../../utils/cx';
import type { ViewAtMoment } from '../types';
import { monthLabel, monthOf, monthWeeks, shiftMonth, todayIsoDate, weekdayLabels } from './viewAtCalendar';
import type { CalendarMonth } from './viewAtCalendar';
import styles from './ViewAtPicker.module.css';

const defaultTime = '12:00';

/** 24-hour clock, as on the dashboard. A native time input would follow the browser locale (AM/PM). */
const hourOptions = Array.from({ length: 24 }, (_, hour) => String(hour).padStart(2, '0'));
const minuteOptions = Array.from({ length: 60 }, (_, minute) => String(minute).padStart(2, '0'));

interface ViewAtPickerProps {
  /** The confirmed moment, or null while the dashboard is live. */
  value: ViewAtMoment | null;
  onConfirm: (moment: ViewAtMoment) => void;
  onReturnToLive: () => void;
}

interface Draft {
  date: string | null;
  time: string;
}

/**
 * "VIEW AT" date and time picker. Choices made in the popup are only a
 * draft: the value changes when OK is pressed. Cancel, Escape or a click
 * outside close the popup and keep the previously confirmed moment.
 */
export function ViewAtPicker({ value, onConfirm, onReturnToLive }: ViewAtPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState<Draft>({ date: null, time: defaultTime });
  const [visibleMonth, setVisibleMonth] = useState<CalendarMonth>(() => monthOf(null));
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const open = () => {
    // Always start from the confirmed value, never from a discarded draft.
    setDraft({ date: value?.date ?? null, time: value?.time ?? defaultTime });
    setVisibleMonth(monthOf(value?.date ?? null));
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const confirm = () => {
    if (draft.date === null) {
      return;
    }

    onConfirm({ date: draft.date, time: draft.time });
    close();
  };

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (rootRef.current && event.target instanceof Node && !rootRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  const today = todayIsoDate();
  const [draftHour = '12', draftMinute = '00'] = draft.time.split(':');

  return (
    <div className={styles.viewAt} ref={rootRef}>
      <span>VIEW AT :</span>

      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label="Show the dashboard as it stood at this time"
        onClick={() => (isOpen ? close() : open())}
      >
        <span className={value ? undefined : styles.placeholder}>
          {value ? `${value.date} ${value.time}` : 'yyyy-mm-dd --:--'}
        </span>
        <Icon name="event" className={styles.triggerIcon} />
      </button>

      {value ? (
        <button type="button" className={styles.liveButton} title="Return to the live dashboard" onClick={onReturnToLive}>
          Live
        </button>
      ) : null}

      {isOpen ? (
        <div className={styles.popup} role="dialog" aria-label="Choose the date and time to view">
          <div className={styles.monthBar}>
            <button
              type="button"
              className={styles.monthButton}
              aria-label="Previous month"
              onClick={() => setVisibleMonth((month) => shiftMonth(month, -1))}
            >
              <Icon name="keyboardArrowLeft" />
            </button>
            <span className={styles.monthLabel} aria-live="polite">
              {monthLabel(visibleMonth)}
            </span>
            <button
              type="button"
              className={styles.monthButton}
              aria-label="Next month"
              onClick={() => setVisibleMonth((month) => shiftMonth(month, 1))}
            >
              <Icon name="keyboardArrowRight" />
            </button>
          </div>

          <table className={styles.calendar}>
            <thead>
              <tr>
                {weekdayLabels.map((label) => (
                  <th key={label} scope="col">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {monthWeeks(visibleMonth).map((week, weekIndex) => (
                <tr key={weekIndex}>
                  {week.map((day, dayIndex) => (
                    <td key={day?.isoDate ?? `blank-${dayIndex}`}>
                      {day ? (
                        <button
                          type="button"
                          className={cx(
                            styles.day,
                            day.isoDate === today && styles.today,
                            day.isoDate === draft.date && styles.selected,
                          )}
                          aria-label={day.isoDate}
                          aria-pressed={day.isoDate === draft.date}
                          onClick={() => setDraft((current) => ({ ...current, date: day.isoDate }))}
                        >
                          {day.day}
                        </button>
                      ) : null}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.timeRow}>
            <span>Time</span>
            <span className={styles.timeFields}>
              <select
                className={styles.timeSelect}
                aria-label="Hour"
                value={draftHour}
                onChange={(event) => setDraft((current) => ({ ...current, time: `${event.target.value}:${draftMinute}` }))}
              >
                {hourOptions.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
              :
              <select
                className={styles.timeSelect}
                aria-label="Minute"
                value={draftMinute}
                onChange={(event) => setDraft((current) => ({ ...current, time: `${draftHour}:${event.target.value}` }))}
              >
                {minuteOptions.map((minute) => (
                  <option key={minute} value={minute}>
                    {minute}
                  </option>
                ))}
              </select>
            </span>
          </div>

          <div className={styles.actions}>
            <span className={styles.draftValue}>{draft.date ? `${draft.date} ${draft.time}` : 'Select a date'}</span>
            <button type="button" className={styles.cancelButton} onClick={close}>
              Cancel
            </button>
            <button type="button" className={styles.okButton} disabled={draft.date === null} onClick={confirm}>
              OK
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

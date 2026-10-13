import { MudOutlinedDatePicker } from '../../../components/Mud/MudPickerField';
import { UpdateButton } from '../../../components/UpdateButton/UpdateButton';
import { MudSelect } from '../../../components/Mud/MudSelect';
import type { TeamShiftFields } from '../types';
import styles from '../EditPlantDashboardPage.module.css';

/** Team, shift and last LTI date, with the UPDATE button. Saving is not implemented. */
export function TeamShiftRow({ fields }: { fields: TeamShiftFields }) {
  return (
    <div className={styles.teamShiftLtiRow}>
      <div className={styles.smallField}>
        <MudSelect label="Team" options={fields.teamOptions} defaultValue={fields.team} size="compact" />
      </div>
      <div className={styles.smallField}>
        <MudSelect label="Shift" options={fields.shiftOptions} defaultValue={fields.shift} size="compact" />
      </div>
      <div className={styles.smallField}>
        <MudOutlinedDatePicker label="Last LTI date" value={fields.lastLtiDate} size="compact" />
        <p className={styles.ltiDerived}>{fields.ltiFreeDays} LTI free days</p>
      </div>
      <div className={styles.buttonContainer}>
        <UpdateButton>UPDATE</UpdateButton>
      </div>
    </div>
  );
}

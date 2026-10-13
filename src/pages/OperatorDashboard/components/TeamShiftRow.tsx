import { UpdateButton } from '../../../components/UpdateButton/UpdateButton';
import { MudSelect } from '../../../components/Mud/MudSelect';
import { MudTextField } from '../../../components/Mud/MudTextField';
import type { TeamShiftFields } from '../types';

/** Team, shift and LTI fields with the UPDATE button. Saving is not implemented. */
export function TeamShiftRow({ fields }: { fields: TeamShiftFields }) {
  return (
    <div>
      <div>
        <MudSelect label="Team" options={fields.teamOptions} defaultValue={fields.team} />
      </div>
      <div>
        <MudSelect label="Shift" options={fields.shiftOptions} defaultValue={fields.shift} />
      </div>
      <div>
        <MudTextField label="LTI Free Days" defaultValue={fields.ltiFreeDays} />
      </div>
      <div>
        <UpdateButton>UPDATE</UpdateButton>
      </div>
    </div>
  );
}

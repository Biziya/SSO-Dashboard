import { MudButton } from '../../../components/Mud/MudButton';
import { MudWarningAlert } from '../../../components/Mud/MudAlert';

interface InstructionUpdatedAlertProps {
  lastUpdated: string;
}

/** Shown while a chief's update is waiting for the seniors to acknowledge it. */
export function InstructionUpdatedAlert({ lastUpdated }: InstructionUpdatedAlertProps) {
  return (
    <MudWarningAlert dense>
      <div>
        <div>
          <strong>Instruction has been updated.</strong> <span>Please review and acknowledge.</span>{' '}
          <span>Last updated: {lastUpdated}</span>
        </div>
        <MudButton color="success">Acknowledge</MudButton>
      </div>
    </MudWarningAlert>
  );
}

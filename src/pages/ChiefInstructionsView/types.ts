import type { EluentInstruction } from '../../components/EluentPreparationTable/types';

export interface SeniorInstructionView {
  instruction: EluentInstruction;
  /** False while a chief's update is waiting to be acknowledged. */
  isAcknowledged: boolean;
  /** "yyyy/MM/dd HH:mm" */
  lastUpdated: string;
}

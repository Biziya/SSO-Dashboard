import type { EluentInstruction } from '../../components/EluentPreparationTable/types';

export interface ChiefInstructionEdit {
  instruction: EluentInstruction;
  /** Acknowledgement state of the last published instruction. */
  isAcknowledged: boolean;
}

import type { EluentInstruction } from './tables/types';

export interface ChiefInstructionEdit {
  instruction: EluentInstruction;
  /** Acknowledgement state of the last published instruction. */
  isAcknowledged: boolean;
}

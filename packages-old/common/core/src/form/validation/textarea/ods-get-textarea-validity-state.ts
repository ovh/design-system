import { OdsCreateTextAreaValidityState } from './ods-create-textarea-validity-state';
import { OdsTextAreaUsedValidityState } from './ods-used-textarea-validity-state';

/**
 * enumerate used property of ValidityState in an object.
 * (all properties of ValidityState are not enumerable)
 * @param validityState - vanilla validity state to copy
 */
export function OdsTextAreaGetValidityState(validityState?: ValidityState): OdsTextAreaUsedValidityState {
  if (!validityState) {
    return OdsCreateTextAreaValidityState();
  } else {
    return {
      valid: validityState.valid,
      valueMissing: validityState.valueMissing,
      customError: validityState.customError,
    };
  }
}

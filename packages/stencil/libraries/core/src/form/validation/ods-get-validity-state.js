import { OdsCreateDefaultValidityState } from './ods-create-default-validity-state';
/**
 * enumerate used property of ValidityState in an object.
 * (all properties of ValidityState are not enumerable)
 * @param validityState - vanilla validity state to copy
 */
export function OdsGetValidityState(validityState) {
  if (!validityState) {
    return OdsCreateDefaultValidityState();
  }
  else {
    return {
      valid: validityState.valid,
      stepMismatch: validityState.stepMismatch,
      valueMissing: validityState.valueMissing,
      customError: validityState.customError
    };
  }
}

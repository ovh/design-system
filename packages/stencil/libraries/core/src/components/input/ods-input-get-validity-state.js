import { OdsCreateDefaultValidityState } from '../../form/validation/ods-create-default-validity-state';
/**
 * enumerate used property of ValidityState in an input.
 * (all properties of ValidityState are not enumerable)
 * @param validityState - vanilla validity state to copy
 */
export function OdsInputGetValidityState(validityState, forbiddenValue = false) {
  if (!validityState) {
    return Object.assign(Object.assign({}, OdsCreateDefaultValidityState()), { forbiddenValue, invalid: false });
  }
  else {
    return {
      valid: validityState.valid,
      stepMismatch: validityState.stepMismatch,
      valueMissing: validityState.valueMissing,
      customError: validityState.customError,
      badInput: validityState.badInput,
      patternMismatch: validityState.patternMismatch,
      rangeOverflow: validityState.rangeOverflow,
      rangeUnderflow: validityState.rangeUnderflow,
      tooLong: validityState.tooLong,
      tooShort: validityState.tooShort,
      typeMismatch: validityState.typeMismatch,
      forbiddenValue,
      invalid: !validityState.valid
    };
  }
}

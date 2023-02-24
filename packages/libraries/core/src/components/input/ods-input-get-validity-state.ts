import { OdsCreateDefaultValidityState } from '../../form/validation/ods-create-default-validity-state';
import { OdsInputValidityState } from './ods-input-validity-state';
/**
 * enumerate used property of ValidityState in an input.
 * (all properties of ValidityState are not enumerable)
 * @param validityState - vanilla validity state to copy
 */
 export function OdsInputGetValidityState(validityState?: ValidityState, forbiddenValue = false): OdsInputValidityState {
    if (!validityState) {
      return {
          ...OdsCreateDefaultValidityState(),
          forbiddenValue,
          invalid: false
      };
    } else {
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
  
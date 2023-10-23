import {OdsUsedValidityState} from './ods-used-validity-state';

/**
 * get a default vanilla `ValidityState` used in ODS
 */
export function OdsCreateDefaultValidityState(): OdsUsedValidityState {
  return {
    valid: true,
    stepMismatch: false,
    valueMissing: false,
    customError: false,
  };
}

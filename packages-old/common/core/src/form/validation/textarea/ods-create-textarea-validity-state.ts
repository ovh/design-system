import { OdsTextAreaUsedValidityState } from './ods-used-textarea-validity-state';

/**
 * get a default vanilla `ValidityState` used in ODS
 */
export function OdsCreateTextAreaValidityState(): OdsTextAreaUsedValidityState {
  return {
    valid: true,
    valueMissing: false,
    customError: false,
  };
}

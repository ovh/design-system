import { OdsCreateDefaultValidityState } from './ods-create-default-validity-state';
import { OdsValidityState } from './ods-validity-state';

/**
 * get a default `OdsValidityState`
 */
export function OdsCreateDefaultOdsValidityState(): OdsValidityState {
  const defaultOne = OdsCreateDefaultValidityState();
  return {
    ...defaultOne,
    invalid: !defaultOne.valid,
    forbiddenValue: false
  }
}

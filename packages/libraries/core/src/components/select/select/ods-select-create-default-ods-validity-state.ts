import { OdsCreateDefaultOdsValidityState } from '../../../form/validation/ods-create-default-ods-validity-state';
import { OdsSelectValidityState } from './ods-select-validity-state';

/**
 * get a default `OdsValidityState`
 */
export function OdsSelectCreateDefaultOdsValidityState(): OdsSelectValidityState {
  const defaultOne = OdsCreateDefaultOdsValidityState();
  return {
    ...defaultOne
  }
}

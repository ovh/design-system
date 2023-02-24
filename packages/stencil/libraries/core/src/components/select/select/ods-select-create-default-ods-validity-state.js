import { OdsCreateDefaultOdsValidityState } from '../../../form/validation/ods-create-default-ods-validity-state';
/**
 * get a default `OdsValidityState`
 */
export function OdsSelectCreateDefaultOdsValidityState() {
  const defaultOne = OdsCreateDefaultOdsValidityState();
  return Object.assign({}, defaultOne);
}

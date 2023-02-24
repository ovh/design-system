import { OdsCreateDefaultValidityState } from './ods-create-default-validity-state';
/**
 * get a default `OdsValidityState`
 */
export function OdsCreateDefaultOdsValidityState() {
  const defaultOne = OdsCreateDefaultValidityState();
  return Object.assign(Object.assign({}, defaultOne), { invalid: !defaultOne.valid, forbiddenValue: false });
}

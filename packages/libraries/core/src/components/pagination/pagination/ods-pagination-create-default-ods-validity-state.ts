import { OdsCreateDefaultOdsValidityState } from '../../../form/validation/ods-create-default-ods-validity-state';
import { OdsPaginationValidityState } from './ods-pagination-validity-state';

/**
 * get a default `OdsValidityState`
 */
export function OdsPaginationCreateDefaultOdsValidityState(): OdsPaginationValidityState {
  const defaultOne = OdsCreateDefaultOdsValidityState();
  return {
    ...defaultOne,
  };
}

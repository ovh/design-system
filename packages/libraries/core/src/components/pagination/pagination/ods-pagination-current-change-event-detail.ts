import { OdsValidityState } from '../../../form/validation/ods-validity-state';

export interface OdsPaginationCurrentChangeEventDetail {
  current: number;
  oldCurrent?: number;
  validity: OdsValidityState;
}

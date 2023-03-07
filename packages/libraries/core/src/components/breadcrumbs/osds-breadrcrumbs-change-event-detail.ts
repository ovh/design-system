import { OdsValidityState } from '../../form/validation/ods-validity-state';

export interface OdsBreadcrumbsCurrentChangeEventDetail {
  current: number;
  oldCurrent?: number;
  validity: OdsValidityState;
}

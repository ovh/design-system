import { OdsValidityState } from '../../form/validation/ods-validity-state';

export interface OdsBreadcrumbItemCurrentChangeEventDetail {
  current: number;
  oldCurrent?: number;
  validity: OdsValidityState;
}

import { OdsValidityState } from '../../form/validation/ods-validity-state';

export interface OdsInputValueChangeEventDetail {
  validity: OdsValidityState;
  value: string | undefined | null;
  oldValue?: string | undefined | null;
}

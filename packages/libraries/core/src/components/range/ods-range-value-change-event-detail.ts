import { OdsRangeValue } from './ods-range-value';
import { OdsValidityState } from '../../form/validation/ods-validity-state';

export interface OdsRangeValueChangeEventDetail {
  validity: OdsValidityState;
  value?: OdsRangeValue;
  oldValue?: OdsRangeValue;
}

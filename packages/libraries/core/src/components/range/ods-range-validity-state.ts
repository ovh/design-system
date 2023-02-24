import { OdsValidityState } from '../../form/validation/ods-validity-state';

export interface OdsRangeValidityState extends OdsValidityState {
  /**
   * is the value forbidden
   */
  forbiddenValue: boolean;
}

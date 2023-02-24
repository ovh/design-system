import { OdsValidityState } from '../../form/validation/ods-validity-state';

export interface OdsInputValidityState extends OdsValidityState {
  /**
   * is the value is forbidden
   */
  forbiddenValue: boolean;
  badInput?: boolean;
  patternMismatch?: boolean;
  rangeOverflow?: boolean;
  rangeUnderflow?: boolean;
  tooLong?: boolean;
  tooShort?: boolean;
  typeMismatch?: boolean;
}

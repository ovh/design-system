import type { ODS_COMMON_FIELD_SIZE } from '../constants/ods-common-field-size';
import type { ODS_COMMON_INPUT_TYPE } from '../constants/ods-common-input-type';
import type { OdsFormControl } from '../control/ods-form-control';
import type { OdsErrorStateControl } from '../error/ods-error-state-control';
import type { OdsInputValue } from '../ods-input-value';
import type { OdsFormForbiddenValues, OdsValidityState } from '../validation/public-api';
import type { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

interface OdsCommonFieldValidityState extends OdsValidityState {
  badInput?: boolean;
  patternMismatch?: boolean;
  rangeOverflow?: boolean;
  rangeUnderflow?: boolean;
  tooLong?: boolean;
  tooShort?: boolean;
  typeMismatch?: boolean;
}

interface OdsCommonFieldAttribute {
  /**
   * @see HTMLElement.ariaLabel
   */
  ariaLabel?: HTMLElement['ariaLabel'];
  /** ID of the element that labels the input */
  ariaLabelledby?: string;
  /** Ability to clear the input value */
  clearable?: boolean;
  /** Main color of the input: see component principles */
  color?: ODS_THEME_COLOR_INTENT;
  /** Indicates if the input is disabled or not: see component principles */
  disabled?: boolean;
  /** Indicates if the input shows error or not */
  error?: boolean;
  /** Controls the error state of the input */
  errorStateControl?: OdsErrorStateControl;
  /** List of forbidden values for the input */
  forbiddenValues?: OdsFormForbiddenValues;
  /** Control object of the form the input belongs to */
  formControl?: OdsFormControl<OdsCommonFieldValidityState>;
  /** Label of the input field */
  label?:string;
  /** Indicates if the input is in loading state or not */
  loading?: boolean;
  /** Indicates if the input is masked or not */
  masked?: boolean;
  /** Name of the input field */
  name?: string;
  /** Placeholder text for the input */
  placeholder?: string;
  /** Text before the input value */
  prefixValue?: string;
  /** Indicates if the input is read-only or not */
  readOnly?: boolean;
  /** Indicates if the input is required or not */
  required?: boolean;
  /** Size of the input: see component principles */
  size?: ODS_COMMON_FIELD_SIZE;
  /** Step value for the input */
  step?: number;
  /** Tabindex for the input */
  tabindex?: number;
  /** Type of the input field */
  type?: ODS_COMMON_INPUT_TYPE;
  /** Type of the input field */
  value?: OdsInputValue;
}

export type {
  OdsCommonFieldAttribute,
  OdsCommonFieldValidityState,
};

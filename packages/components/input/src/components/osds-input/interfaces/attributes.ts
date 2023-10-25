import type { ODS_INPUT_SIZE } from '../constants/input-size';
import type { ODS_INPUT_TYPE } from '../constants/input-type';
import type { OdsErrorStateControl, OdsFormControl, OdsFormForbiddenValues, OdsInputValue, OdsValidityState } from '@ovhcloud/ods-common-core';
import type { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import type { ODS_ICON_NAME } from '@ovhcloud/ods-component-icon';


interface OdsInputValidityState extends OdsValidityState {
  badInput?: boolean;
  patternMismatch?: boolean;
  rangeOverflow?: boolean;
  rangeUnderflow?: boolean;
  tooLong?: boolean;
  tooShort?: boolean;
  typeMismatch?: boolean;
}

interface OdsInputAttribute {
  /**
   * @see HTMLElement.ariaLabel
   */
  ariaLabel: HTMLElement['ariaLabel'];
  /** ID of the element that labels the input */
  ariaLabelledby?:string;
  /** Ability to clear the input value */
  clearable?: boolean;
  /** Main color of the input: see component principles */
  color?: ODS_THEME_COLOR_INTENT;
  /** Indicates if the input is contrasted or not: see component principles */
  contrasted?: boolean;
  /** Default value of the input */
  defaultValue: OdsInputValue;
  /** Indicates if the input is disabled or not: see component principles */
  disabled?: boolean;
  /** Indicates if the input shows error or not */
  error?: boolean;
  /** Controls the error state of the input */
  errorStateControl?: OdsErrorStateControl;
  /** List of forbidden values for the input */
  forbiddenValues: OdsFormForbiddenValues;
  /** Control object of the form the input belongs to */
  formControl?: OdsFormControl<OdsInputValidityState>;
  /** Icon to be used in the input field */
  icon?: ODS_ICON_NAME;
  /** Indicates if the input is inline or not: see component principles */
  inline?: boolean;
  /** Label of the input field */
  label?:string;
  /** Indicates if the input is in loading state or not */
  loading?: boolean;
  /** Indicates if the input is masked or not */
  masked?: boolean;
  /** Maximum value for the input (type number) */
  max?: number;
  /** Minimum value for the input (type number) */
  min?: number;
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
  size?: ODS_INPUT_SIZE;
  /** Step value for the input */
  step?: number;
  /** Type of the input field */
  type: ODS_INPUT_TYPE;
  /** Current value of the input */
  value: OdsInputValue;
}

export {
  OdsInputAttribute,
  OdsInputValidityState,
};

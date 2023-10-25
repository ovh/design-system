import type { OdsFormForbiddenValues } from '@ovhcloud/ods-common-core';
import type { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import type { ODS_INPUT_SIZE } from '@ovhcloud/ods-component-input';

interface OdsPasswordAttribute {
  /** ariaLabel of the password */
  ariaLabel: HTMLElement['ariaLabel'];
  /** ID of the element that labels the password */
  ariaLabelledby?:string;
  /** Ability to clear the password value */
  clearable?: boolean;
  /** Main color of the password: see component principles */
  color?: ODS_THEME_COLOR_INTENT;
  /** Indicates if the password is contrasted or not: see component principles */
  contrasted?: boolean;
  /** Indicates if the password is disabled or not: see component principles */
  disabled?: boolean;
  /** Indicates if the password shows error or not */
  error?: boolean;
  /** List of forbidden values for the password */
  forbiddenValues: OdsFormForbiddenValues;
  /** Indicates if the password is inline or not */
  inline?: boolean;
  /** Label of the password field */
  label?:string;
  /** Indicates if the password is in loading state or not */
  loading?: boolean;
  /** Indicates if the password is masked or not */
  masked?: boolean;
  /** Name of the password field */
  name?: string;
  /** Placeholder text for the password */
  placeholder?: string;
  /** Indicates if the password is read-only or not */
  readOnly?: boolean;
  /** Indicates if the password is required or not */
  required?: boolean;
  /** Size of the password: see component principles */
  size?: ODS_INPUT_SIZE;
  /** Current value of the password */
  value: string;
}

export {
  OdsPasswordAttribute,
};

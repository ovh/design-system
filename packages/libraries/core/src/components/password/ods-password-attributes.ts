import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsInputSize } from '../input/ods-input-size';
import { OdsFormForbiddenValues } from '../../form/validation/ods-form-forbidden-values';
import { OdsComponentAttributes } from '../ods-component-attributes';
import { OdsInputValue } from '../input/ods-input-value';

export interface OdsPasswordAttributes extends OdsComponentAttributes {
  /** ariaLabel of the password */
  ariaLabel: HTMLElement['ariaLabel'];
  /** ID of the element that labels the password */
  ariaLabelledby?:string;
  /** Ability to clear the password value */
  clearable?: boolean;
  /** Main color of the password: see component principles */
  color?: OdsThemeColorIntent;
  /** Indicates if the password is contrasted or not: see component principles */
  contrasted?: boolean;
  /** Indicates if the password is disabled or not: see component principles */
  disabled?: boolean;
  /** Indicates if the password shows error or not */
  flex?: boolean;
  /** List of forbidden values for the password */
  forbiddenValues: OdsFormForbiddenValues;
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
  size?: OdsInputSize;
  /** Current value of the password */
  value: OdsInputValue;
}

import type { ODS_ICON_NAME } from '@ovhcloud/ods-component-icon';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsInputSize } from './ods-input-size';
import { OdsInputType } from './ods-input-type';
import { OdsInputValue } from './ods-input-value';
import { OdsFormControl } from '../../form/control/ods-form-control';
import { OdsErrorStateControl } from '../../form/error/ods-error-state-control';
import { OdsInputValidityState } from './ods-input-validity-state';
import { OdsFormForbiddenValues } from '../../form/validation/ods-form-forbidden-values';
import { OdsComponentAttributes } from '../ods-component-attributes';

export interface OdsInputAttributes extends OdsComponentAttributes {
  /**
   * @see HTMLElement.ariaLabel
   */
  ariaLabel: HTMLElement['ariaLabel'];
  /** ID of the element that labels the input */
  ariaLabelledby?:string;
  /** Ability to clear the input value */
  clearable?: boolean;
  /** Main color of the input: see component principles */
  color?: OdsThemeColorIntent;
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
  /** Indicates if the input is full width or not: see component principles */
  flex?: boolean;
  /** List of forbidden values for the input */
  forbiddenValues: OdsFormForbiddenValues;
  /** Control object of the form the input belongs to */
  formControl?: OdsFormControl<OdsInputValidityState>;
  /** Icon to be used in the input field */
  icon?: ODS_ICON_NAME;
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
  /** Indicates if the input is read-only or not */
  readOnly?: boolean;
  /** Indicates if the input is required or not */
  required?: boolean;
  /** Size of the input: see component principles */
  size?: OdsInputSize;
  /** Step value for the input */
  step?: number;
  /** Type of the input field */
  type: OdsInputType;
  /** Current value of the input */
  value: OdsInputValue;
}

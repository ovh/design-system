import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsInputSize } from './ods-input-size';
import { OdsInputType } from './ods-input-type';
import { OdsInputValue } from './ods-input-value';
import { OdsFormControl } from '../../form/control/ods-form-control';
import { OdsErrorStateControl } from '../../form/error/ods-error-state-control';
import { OdsInputValidityState } from './ods-input-validity-state';
import { OdsFormForbiddenValues } from '../../form/validation/ods-form-forbidden-values';
import { OdsComponentAttributes } from '../ods-component-attributes';
import { OdsIconName } from '../icon/ods-icon-size';

export interface OdsInputAttributes extends OdsComponentAttributes {
  /**
   * @see HTMLElement.ariaLabel
   */
  ariaLabel: HTMLElement['ariaLabel'];
  ariaLabelledby?:string;
  clearable?: boolean;
  color?: OdsThemeColorIntent;
  contrasted?: boolean;
  defaultValue: OdsInputValue;
  disabled?: boolean;
  error?: boolean;
  errorStateControl?: OdsErrorStateControl;
  flex?: boolean;
  forbiddenValues: OdsFormForbiddenValues;
  formControl?: OdsFormControl<OdsInputValidityState>;
  hideable?: boolean;
  icon?: OdsIconName;
  label?:string;
  loading?: boolean;
  masked?: boolean;
  max?: number;
  min?: number;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  size?: OdsInputSize;
  step?: number;
  type: OdsInputType;
  value: OdsInputValue;
}

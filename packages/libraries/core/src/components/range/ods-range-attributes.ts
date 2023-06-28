import { OdsComponentAttributes } from '../ods-component-attributes';
import { OdsErrorStateControl } from '../../form/error/ods-error-state-control';
import { OdsFormControl } from '../../form/control/ods-form-control';
import { OdsFormForbiddenValues } from '../../form/validation/ods-form-forbidden-values';
import { OdsRangeValidityState } from './ods-range-validity-state';
import { OdsRangeValue } from './ods-range-value';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

export interface OdsRangeAttributes extends OdsComponentAttributes {
  /**
   * Range color theme
   */
  color?: OdsThemeColorIntent;
  /**
   * Indicate if the range is entirely disabled.
   * It means no interaction is possible (hover, click, focus, etc)
   */
  disabled?: boolean;
  /**
   * If the range is in error or not
   */
  error?: boolean;
  /**
   * Check range error state
   */
  errorStateControl?: OdsErrorStateControl;
  /**
   * inline or not
   */
  inline?: boolean;
  /**
   * The range id
   */
  id?: string;
  /**
   * The range maximum value
   */
  max?: number;
  /**
   * The range minimum value
   */
  min?: number;
  /**
   * The range step value
   */
  step?: number;
  /**
   * The range value
   */
  value: OdsRangeValue;
  /**
   * The range forbidden values
   */
  forbiddenValues: OdsFormForbiddenValues;
  /**
   * The form control for range
   */
  formControl?: OdsFormControl<OdsRangeValidityState>;
}

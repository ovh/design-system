import type { OdsValidityState, OdsErrorStateControl, OdsFormControl, OdsFormForbiddenValues } from '@ovhcloud/ods-common-core';
import type { OdsRangeValue } from './value'
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

interface OdsRangeAttribute {
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
   * inline unit for range width
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
  formControl?: OdsFormControl<OdsValidityState>;
}

export { OdsRangeAttribute }

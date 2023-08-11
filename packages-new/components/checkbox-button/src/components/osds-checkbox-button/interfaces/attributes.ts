import type { ODS_CHECKBOX_BUTTON_SIZE } from '../constants/ods-checkbox-button-size';
import type { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

export interface OdsCheckboxButtonAttribute {
  /**
   * The checked status of the checkbox button
   */
  checked?: boolean,
  checking?: boolean,
  /**
   * The color theme
   */
  color?: OdsThemeColorIntent,
  /**
   * Prevent the user from clicking on the radio button
   */
  disabled?: boolean,
  /**
   * Display a focus style (only if interactive)
   */
  hasFocus?: boolean,
  /**
   * The indeterminate status of the checkbox button (override checked status)
   */
  indeterminate?: boolean,
  /**
   * Display an interactive style when clicking or hovering the radio button
   */
  interactive?: boolean,
  /**
   * Size of the radio button
   */
  size?: ODS_CHECKBOX_BUTTON_SIZE,
}

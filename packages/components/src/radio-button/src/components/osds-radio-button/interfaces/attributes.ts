import type { ODS_RADIO_BUTTON_SIZE } from '../constants/radio-button-size';
import type { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';


interface OdsRadioButtonAttribute {
  /**
   * The checked status of the radio button
   */
  checked?: boolean,
  checking?: boolean,
  /**
   * The color theme
   */
  color?: ODS_THEME_COLOR_INTENT,
  /**
   * Prevent the user from clicking on the radio button
   */
  disabled?: boolean,
  /**
   * Display a focus style (only if interactive)
   */
  hasFocus?: boolean,
  /**
   * Display an interactive style when clicking or hovering the radio button
   */
  interactive?: boolean,
  /**
   * Size of the radio button
   */
  size?: ODS_RADIO_BUTTON_SIZE,
}

export {
  OdsRadioButtonAttribute,
};

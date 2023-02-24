import { OdsComponentAttributes } from '../ods-component-attributes';
import { OdsRadioButtonSize } from './ods-radio-button-size';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

export interface OdsRadioButtonAttributes extends OdsComponentAttributes {
  /**
   * The checked status of the radio button
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
   * Display an interactive style when clicking or hovering the radio button
   */
  interactive?: boolean,
  /**
   * Size of the radio button
   */
  size?: OdsRadioButtonSize,
}

import { OdsComponentAttributes } from '../ods-component-attributes';
import { OdsCheckboxButtonSize } from './ods-checkbox-button-size';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

export interface OdsCheckboxButtonAttributes extends OdsComponentAttributes {
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
  size?: OdsCheckboxButtonSize,
}

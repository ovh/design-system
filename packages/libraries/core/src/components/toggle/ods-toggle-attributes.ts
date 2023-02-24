import { OdsComponentAttributes } from '../ods-component-attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

export interface OdsToggleAttributes extends OdsComponentAttributes {
  /**
   * Toggle is in contrasted mode or not
   */
  contrasted?: boolean
  /**
   * Toggle is checked or not
   */
  checked?: boolean
  /**
   * Awaiting a change of checked state
   */
  checking?: boolean
  /**
   * Toggle color theme
   */
  color?: OdsThemeColorIntent
  /**
   * Toggle is disabled or not
   */
  disabled?: boolean
  /**
   * If the toggle can have interactive pseudo-classes or not
   */
  interactive?: boolean
  }

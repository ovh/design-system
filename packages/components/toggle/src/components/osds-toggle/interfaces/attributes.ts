import type {ODS_THEME_COLOR_INTENT} from '@ovhcloud/ods-common-theming';

interface OdsToggleAttribute {
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
  color?: ODS_THEME_COLOR_INTENT
  /**
   * Toggle is disabled or not
   */
  disabled?: boolean
  /**
   * If the toggle can have interactive pseudo-classes or not
   */
  interactive?: boolean
  }

export {
  OdsToggleAttribute,
};

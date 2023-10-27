import type { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import type { ODS_ICON_NAME } from '@ovhcloud/ods-component-icon';

interface OdsAutocompleteAttribute {
  /**
   * Defines if the Autocomplete should be clearable or not (displays a clear button)
   */
  clearable?: boolean;
    /**
   * Defines the Autocomplete's color (see component principles)
   */
  color?: ODS_THEME_COLOR_INTENT;
  /**
   * Defines if the Autocomplete should be disabled or not (lower opacity and not interactable)
   */
  disabled?: boolean;
  /**
   * Defines if the Autocomplete should display an error state
   */
  error?: boolean;
  /**
   * Defines if the Autocomplete should display an icon in the input field
   */
  icon?: ODS_ICON_NAME;
  /**
   * Indicates if the Autocomplete is full width or not: see component principles
   */
  inline?: boolean;
  /**
   * Defines the Autocomplete's minimum number of characters to open the dropdown
   */
  minimumNumberOfCharacters?: number;
  /**
   * Defines if the Autocomplete should display a placeholder message
   */
  placeholder?: string;
  /**
   * Defines the Autocomplete's value
   */
  value?: string;
}

export {
  OdsAutocompleteAttribute,
};

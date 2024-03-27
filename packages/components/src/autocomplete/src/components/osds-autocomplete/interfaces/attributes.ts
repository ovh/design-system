import type { ODS_ICON_NAME } from '../../../../../icon/src';

interface OdsAutocompleteAttribute {
  /**
   * The corresponding aria-label describing its content
   */
  ariaLabel: HTMLElement['ariaLabel'];
  /**
   * The ID to an external description
   */
  ariaLabelledby: string;
  /**
   * Defines if the Autocomplete should be clearable or not (displays a clear button)
   */
  clearable: boolean;
  /**
   * Default value of the Autocomplete
   */
  defaultValue: string;
  /**
   * Defines if the Autocomplete should be disabled or not (lower opacity and not interactable)
   */
  disabled: boolean;
  /**
   * Defines if the Autocomplete should display an error state
   */
  error: boolean;
  /**
   * Defines if the Autocomplete should display an icon in the input field
   */
  icon?: ODS_ICON_NAME;
  /**
   * Indicates if the Autocomplete is full width or not: see component principles
   */
  inline: boolean;
  /**
   * Defines the Autocomplete's minimum number of characters to open the dropdown
   */
  minimumNumberOfCharacters: number;
  /**
   * Name of the Autocomplete field
   */
  name?: string;
  /**
   * Defines if the Autocomplete dropdown is opened or not
   */
  opened: boolean;
  /**
   * Defines if the Autocomplete should display a placeholder message
   */
  placeholder?: string;
  /**
   * Defines if a value has to be selected or not
   */
  required: boolean;
  /**
   * Defines the Autocomplete's value
   */
  value: string;
}

export type {
  OdsAutocompleteAttribute,
};

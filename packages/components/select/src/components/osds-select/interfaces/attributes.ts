import type { ODS_SELECT_SIZE } from '../constants/select-size';
import type { OdsInputValue } from '@ovhcloud/ods-common-core';
import type { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';


interface OdsSelectAttribute {
  /**
   * The corresponding aria-label describing its content
   */
  ariaLabel: HTMLElement['ariaLabel'];
  /**
   * The id to an external description
   */
  ariaLabelledby: string;
  /** the primary color of the theme */
  color: ODS_THEME_COLOR_INTENT;
  /**
   * Its corresponding default value. It needs to match with one option so the option will be selected
   */
  defaultValue: OdsInputValue;
  /**
   * indicates if the select is entirely disabled.
   * it means no interactions (hover, click, focus, etc)
   */
  disabled: boolean;
  /**
   * indicates if the select has an error.
   */
  error?: boolean;
  /** full width or not: see component principles */
  inline: boolean;
  /** opened or not */
  opened?: boolean;
  /**
   * indicates if a value has to be selected
   */
  required: boolean;
  /** size: see component principles */
  size: ODS_SELECT_SIZE;
  /**
   * Its corresponding value. It needs to correspond to the value of the option
   */
  value: OdsInputValue;
}

export {
  OdsSelectAttribute,
};

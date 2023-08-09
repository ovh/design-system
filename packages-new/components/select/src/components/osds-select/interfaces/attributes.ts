import type { OdsInputValue } from '@ovhcloud/ods-common-core';
import type { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import type { ODS_SELECT_SIZE } from '../constants/select-size';

interface OdsSelectAttribute {
  /**
   * The corresponding aria-label describing its content
   */
  ariaLabel: HTMLElement['ariaLabel'];
  /**
   * The id to an external description
   */
  ariaLabelledby: string;
  /**
   * indicates if a value has to be selected
   */
  required: boolean;
  /**
   * indicates if the select is entirely disabled.
   * it means no interactions (hover, click, focus, etc)
   */
  disabled: boolean;
  /**
   * Its corresponding default value. It needs to match with one option so the option will be selected
   */
  defaultValue: OdsInputValue;
  /**
   * Its corresponding value. It needs to correspond to the value of the option
   */
  value: OdsInputValue;
  /** full width or not: see component principles */
  inline: boolean;
  /** size: see component principles */
  size: ODS_SELECT_SIZE;
  /*
   * color of the select input and his icon arrow.
   * color is not yet customizable trough his attribute.
   * for now, it is forced to primary color (internally)
   * @experimental
   */
  /** the primary color of the theme */
  color: OdsThemeColorIntent;
  /** opened or not */
  opened?: boolean;
}

export {
  OdsSelectAttribute,
};

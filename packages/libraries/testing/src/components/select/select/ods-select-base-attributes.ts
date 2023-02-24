import { OdsSelectAttributes, OdsSelectSize } from '@ovhcloud/ods-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * base attributes value of input
 */
export const odsSelectBaseAttributes: OdsSelectAttributes = {
  ariaLabel: '',
  ariaLabelledby: '',

  required: false,
  disabled: false,

  defaultValue: '',
  value: '',

  flex: false,
  size: OdsSelectSize.md,
  color: OdsThemeColorIntent.primary,
};

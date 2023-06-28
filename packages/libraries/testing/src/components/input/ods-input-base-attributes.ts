import { OdsInputAttributes, OdsInputSize, OdsInputType } from '@ovhcloud/ods-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * base attributes value of input
 */
export const odsInputBaseAttributes: OdsInputAttributes = {
  ariaLabel: null,
  color: OdsThemeColorIntent.default,
  contrasted: false,
  defaultValue: '',
  disabled: false,
  error: false,
  inline: false,
  forbiddenValues: [],
  max: undefined,
  min: undefined,
  name: undefined,
  placeholder: undefined,
  readOnly: false,
  required: false,
  size: OdsInputSize.md,
  step: undefined,
  type: OdsInputType.number,
  value: '',
};

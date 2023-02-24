import { OdsCheckboxButtonAttributes } from './ods-checkbox-button-attributes';
import { OdsCheckboxButtonSize } from './ods-checkbox-button-size';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * default attribute values of checkbox button
 */
export const odsCheckboxButtonDefaultAttributesDoc: OdsCheckboxButtonAttributes = {
  checked: false,
  checking: false,
  color: OdsThemeColorIntent.default,
  disabled: false,
  hasFocus: false,
  indeterminate: false,
  interactive: false,
  size: OdsCheckboxButtonSize.md,
} as const;

export const odsCheckboxButtonDefaultAttributes = odsCheckboxButtonDefaultAttributesDoc as OdsCheckboxButtonAttributes;

import { OdsCheckboxButtonSize } from './ods-checkbox-button-size';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
/**
 * default attribute values of checkbox button
 */
export const odsCheckboxButtonDefaultAttributesDoc = {
  checked: false,
  checking: false,
  color: OdsThemeColorIntent.default,
  disabled: false,
  hasFocus: false,
  indeterminate: false,
  interactive: false,
  size: OdsCheckboxButtonSize.md,
};
export const odsCheckboxButtonDefaultAttributes = odsCheckboxButtonDefaultAttributesDoc;

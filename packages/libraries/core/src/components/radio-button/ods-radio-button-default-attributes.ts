import { OdsRadioButtonAttributes } from './ods-radio-button-attributes';
import { OdsRadioButtonSize } from './ods-radio-button-size';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * default attribute values of radio button
 */
export const odsRadioButtonDefaultAttributesDoc = {
  checked: false,
  checking: false,
  color: OdsThemeColorIntent.default,
  disabled: false,
  hasFocus: false,
  interactive: false,
  size: OdsRadioButtonSize.md,
} as const;

export const odsRadioButtonDefaultAttributes = odsRadioButtonDefaultAttributesDoc as OdsRadioButtonAttributes;

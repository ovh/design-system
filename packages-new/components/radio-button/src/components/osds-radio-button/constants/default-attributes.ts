import type { OdsRadioButtonAttribute } from '../interfaces/attributes';
import { ODS_RADIO_BUTTON_SIZE } from '../constants/radio-button-size';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

const DEFAULT_ATTRIBUTE: OdsRadioButtonAttribute = Object.freeze({
  checked: false,
  checking: false,
  color: OdsThemeColorIntent.default,
  disabled: false,
  hasFocus: false,
  interactive: false,
  size: ODS_RADIO_BUTTON_SIZE.md,
});

export {
  DEFAULT_ATTRIBUTE,
};

import type {OdsRadioButtonAttribute} from '../interfaces/attributes';
import {ODS_RADIO_BUTTON_SIZE} from './radio-button-size';
import {ODS_THEME_COLOR_INTENT} from '@ovhcloud/ods-common-theming';

const DEFAULT_ATTRIBUTE: OdsRadioButtonAttribute = Object.freeze({
  checked: false,
  checking: false,
  color: ODS_THEME_COLOR_INTENT.default,
  disabled: false,
  hasFocus: false,
  interactive: false,
  size: ODS_RADIO_BUTTON_SIZE.md,
});

export {
  DEFAULT_ATTRIBUTE,
};

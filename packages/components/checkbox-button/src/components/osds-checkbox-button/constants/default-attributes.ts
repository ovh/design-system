import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

import { ODS_CHECKBOX_BUTTON_SIZE } from './ods-checkbox-button-size';
import type { OdsCheckboxButtonAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsCheckboxButtonAttribute = Object.freeze({
  checked: false,
  checking: false,
  color: ODS_THEME_COLOR_INTENT.default,
  disabled: false,
  hasFocus: false,
  indeterminate: false,
  interactive: false,
  size: ODS_CHECKBOX_BUTTON_SIZE.md,
});

export {
  DEFAULT_ATTRIBUTE,
};

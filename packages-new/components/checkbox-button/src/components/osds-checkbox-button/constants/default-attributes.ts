import type { OdsCheckboxButtonAttribute } from '../interfaces/attributes';
import { ODS_CHECKBOX_BUTTON_SIZE } from './ods-checkbox-button-size';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

const DEFAULT_ATTRIBUTE: OdsCheckboxButtonAttribute = Object.freeze({
  checked: false,
  checking: false,
  color: OdsThemeColorIntent.default,
  disabled: false,
  hasFocus: false,
  indeterminate: false,
  interactive: false,
  size: ODS_CHECKBOX_BUTTON_SIZE.md,
});

export {
  DEFAULT_ATTRIBUTE,
}

import type { OdsCheckboxButtonAttribute } from '../interfaces/attributes';
import { OdsCheckboxButtonSize } from './ods-checkbox-button-size';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

const DEFAULT_ATTRIBUTE: OdsCheckboxButtonAttribute = Object.freeze({
  checked: false,
  checking: false,
  color: OdsThemeColorIntent.default,
  disabled: false,
  hasFocus: false,
  indeterminate: false,
  interactive: false,
  size: OdsCheckboxButtonSize.md,
});

export {
  DEFAULT_ATTRIBUTE,
}

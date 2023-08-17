import type { OdsToggleAttribute } from '../interfaces/attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

const DEFAULT_ATTRIBUTE: OdsToggleAttribute = Object.freeze({
  contrasted: false,
  checked: false,
  checking: false,
  color: OdsThemeColorIntent.primary,
  disabled: false,
  interactive: true
});

export {
  DEFAULT_ATTRIBUTE,
}

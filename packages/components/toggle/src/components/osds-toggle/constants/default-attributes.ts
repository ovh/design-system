import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

import type { OdsToggleAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsToggleAttribute = Object.freeze({
  contrasted: false,
  checked: false,
  checking: false,
  color: ODS_THEME_COLOR_INTENT.primary,
  disabled: false,
  interactive: true,
});

export {
  DEFAULT_ATTRIBUTE,
};

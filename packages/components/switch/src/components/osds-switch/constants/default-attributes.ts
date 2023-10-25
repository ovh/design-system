import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

import { ODS_SWITCH_SIZE } from './switch-size';
import type { OdsSwitchAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsSwitchAttribute = Object.freeze({
  color: ODS_THEME_COLOR_INTENT.default,
  contrasted: false,
  disabled: false,
  size: ODS_SWITCH_SIZE.md,
  variant: undefined,
});

export {
  DEFAULT_ATTRIBUTE,
};

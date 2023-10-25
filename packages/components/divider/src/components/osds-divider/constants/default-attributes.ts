import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

import { ODS_DIVIDER_SIZE } from './divider-size';
import type { OdsDividerAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsDividerAttribute = Object.freeze({
  color: ODS_THEME_COLOR_INTENT.default,
  contrasted: false,
  separator: false,
  size: ODS_DIVIDER_SIZE.six,
});

export {
  DEFAULT_ATTRIBUTE,
};

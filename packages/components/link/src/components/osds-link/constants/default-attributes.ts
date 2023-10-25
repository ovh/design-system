import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

import type { OdsLinkAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsLinkAttribute = Object.freeze({
  color: ODS_THEME_COLOR_INTENT.default,
  contrasted: false,
  disabled: false,
  download: undefined,
  href: undefined,
  referrerpolicy: undefined,
  rel: undefined,
  target: undefined,
  type: undefined,
});

export {
  DEFAULT_ATTRIBUTE,
};

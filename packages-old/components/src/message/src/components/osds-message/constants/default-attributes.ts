import type { OdsMessageAttribute } from '../interfaces/attributes';

import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';


const DEFAULT_ATTRIBUTE: OdsMessageAttribute = Object.freeze({
  color: ODS_THEME_COLOR_INTENT.default,
  contrasted: false,
  icon: undefined,
  inline: false,
  removable: false,
  type: undefined,
});

export {
  DEFAULT_ATTRIBUTE,
};

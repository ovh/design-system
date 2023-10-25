import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

import type { OdsModalAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsModalAttribute = Object.freeze({
  color: ODS_THEME_COLOR_INTENT.info,
  dismissible: true,
  headline: '',
  masked: false,
});

export {
  DEFAULT_ATTRIBUTE,
};

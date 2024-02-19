import type { OdsCodeAttribute } from '../interfaces/attributes';

import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

import { ODS_CODE_SIZE } from './code-size';

const DEFAULT_ATTRIBUTE: OdsCodeAttribute = Object.freeze({
  color: ODS_THEME_COLOR_INTENT.default,
  contrasted: false,
  size: ODS_CODE_SIZE.md,
});

export {
  DEFAULT_ATTRIBUTE,
};

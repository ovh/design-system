import type { OdsIconAttribute } from '../interfaces/attributes';
import { ODS_ICON_SIZE } from './icon-size';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

const DEFAULT_ATTRIBUTE: OdsIconAttribute = Object.freeze({
  ariaName: '',
  color: ODS_THEME_COLOR_INTENT.default,
  contrasted: false,
  hoverable: false,
  name: undefined,
  size: ODS_ICON_SIZE.md,
});

export {
  DEFAULT_ATTRIBUTE,
};

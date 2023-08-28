import type { OdsTextAttribute } from '../interfaces/attributes';
import { ODS_THEME_COLOR_HUE, ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_TEXT_LEVEL } from './text-level';
import { ODS_TEXT_SIZE } from './text-size';

const DEFAULT_ATTRIBUTE: OdsTextAttribute = Object.freeze({
  breakSpaces: false,
  color: ODS_THEME_COLOR_INTENT.default,
  contrasted: false,
  level: ODS_TEXT_LEVEL.body,
  size: ODS_TEXT_SIZE._100,
  hue: ODS_THEME_COLOR_HUE._500,
});

export {
  DEFAULT_ATTRIBUTE,
};

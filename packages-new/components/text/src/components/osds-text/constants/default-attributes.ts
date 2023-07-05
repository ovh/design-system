import type { OdsTextAttribute } from '../interfaces/attributes';
import { OdsThemeColorIntent, OdsThemeColorHue } from '@ovhcloud/ods-theming';
import { ODS_TEXT_LEVEL } from './text-level';
import { ODS_TEXT_SIZE } from './text-size';

const DEFAULT_ATTRIBUTE: OdsTextAttribute = Object.freeze({
  breakSpaces: false,
  color: OdsThemeColorIntent.default,
  contrasted: false,
  level: ODS_TEXT_LEVEL.body,
  size: ODS_TEXT_SIZE._100,
  hue: OdsThemeColorHue._500,
});

export {
  DEFAULT_ATTRIBUTE,
};

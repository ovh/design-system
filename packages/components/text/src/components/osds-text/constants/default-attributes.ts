import type { OdsTextAttribute } from '../interfaces/attributes';

import { ODS_TEXT_COLOR_HUE, ODS_TEXT_COLOR_INTENT } from './text-color';
import { ODS_TEXT_LEVEL } from './text-level';
import { ODS_TEXT_SIZE } from './text-size';

const DEFAULT_ATTRIBUTE: OdsTextAttribute = Object.freeze({
  breakSpaces: false,
  color: ODS_TEXT_COLOR_INTENT.default,
  contrasted: false,
  hue: ODS_TEXT_COLOR_HUE._500,
  level: ODS_TEXT_LEVEL.body,
  size: ODS_TEXT_SIZE._100,
});

export {
  DEFAULT_ATTRIBUTE,
};

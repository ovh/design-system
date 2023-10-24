import type { OdsTileAttribute } from '../interfaces/attributes';
import { ODS_TILE_SIZE } from './tile-size';
import { ODS_TILE_VARIANT } from './tile-variant';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

const DEFAULT_ATTRIBUTE: OdsTileAttribute = Object.freeze({
  checked: false,
  checking: false,
  color: ODS_THEME_COLOR_INTENT.default,
  disabled: false,
  inline: false,
  hoverable: false,
  hasFocus: false,
  loading: false,
  rounded: true,
  size: ODS_TILE_SIZE.md,
  variant: ODS_TILE_VARIANT.stroked,
});

export {
  DEFAULT_ATTRIBUTE,
};

import type { OdsTileAttribute } from '../interfaces/attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_TILE_SIZE } from './tile-size';
import { ODS_TILE_VARIANT } from './tile-variant';

const DEFAULT_ATTRIBUTE: OdsTileAttribute = Object.freeze({
  checked: false,
  checking: false,
  color: OdsThemeColorIntent.default,
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

import { OdsTileAttributes, OdsTileSize, OdsTileVariant } from '@ovhcloud/ods-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * base attributes value of tile
 */
export const odsTileBaseAttributes: OdsTileAttributes = {
  checked: false,
  checking: false,
  color: OdsThemeColorIntent.default,
  disabled: false,
  interactive: false,
  loading: false,
  rounded: true,
  size: OdsTileSize.md,
  variant: OdsTileVariant.stroked,
  hasFocus: false
};

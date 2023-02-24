import { OdsLocationTileAttributes, OdsTileSize, OdsLocationTileVariant } from '@ovhcloud/ods-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * base attributes value of tile
 */
export const odsLocationTileBaseAttributes: OdsLocationTileAttributes = {
  checked: false,
  checking: false,
  color: OdsThemeColorIntent.default,
  disabled: false,
  flex: false,
  interactive: false,
  iso: undefined,
  size: OdsTileSize.md,
  variant: OdsLocationTileVariant.vertical,
  hasFocus: false
};

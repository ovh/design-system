import { OdsLocationTileAttributes, OdsLocationTileVariant } from '@ovhcloud/ods-core';
import { ODS_TILE_SIZE } from '@ovhcloud/ods-component-tile';
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
  size: ODS_TILE_SIZE.md,
  variant: OdsLocationTileVariant.vertical,
  hasFocus: false
};

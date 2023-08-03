import { OdsLocationTileAttributes } from './ods-location-tile-attributes';
import { OdsLocationTileVariant } from './ods-location-tile-variant';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_TILE_SIZE } from '@ovhcloud/ods-component-tile';

export const odsLocationTileDefaultAttributesDoc = {
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
} as const;

export const odsLocationTileDefaultAttributes = odsLocationTileDefaultAttributesDoc as OdsLocationTileAttributes;

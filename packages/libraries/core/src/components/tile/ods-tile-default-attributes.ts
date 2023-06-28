import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsTileAttributes } from './ods-tile-attributes';
import { OdsTileSize } from './ods-tile-size';
import { OdsTileVariant } from './ods-tile-variant';

export const odsTileDefaultAttributesDoc = {
  checked: false,
  checking: false,
  color: OdsThemeColorIntent.default,
  disabled: false,
  inline: false,
  hoverable: false,
  hasFocus: false,
  loading: false,
  rounded: true,
  size: OdsTileSize.md,
  variant: OdsTileVariant.stroked,
} as const;

export const odsTileDefaultAttributes = odsTileDefaultAttributesDoc as OdsTileAttributes;

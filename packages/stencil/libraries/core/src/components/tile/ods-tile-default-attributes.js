import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsTileSize } from './ods-tile-size';
import { OdsTileVariant } from './ods-tile-variant';
export const odsTileDefaultAttributesDoc = {
  checked: false,
  checking: false,
  color: OdsThemeColorIntent.default,
  disabled: false,
  flex: false,
  interactive: false,
  hasFocus: false,
  loading: false,
  rounded: true,
  size: OdsTileSize.md,
  variant: OdsTileVariant.stroked,
};
export const odsTileDefaultAttributes = odsTileDefaultAttributesDoc;

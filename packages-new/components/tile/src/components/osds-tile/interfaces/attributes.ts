import type { ODS_TILE_SIZE } from '../constants/tile-size';
import type { ODS_TILE_VARIANT } from '../constants/tile-variant';
import type { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import type { OdsCheckboxable, OdsRadioizable } from '@ovhcloud/ods-common-core';

interface OdsTileAttribute extends OdsRadioizable, OdsCheckboxable {
  /** If the tile is selected or not */
  checked?: boolean;
  /** awaiting a change of checked state */
  checking?: boolean;
  /** Tile color theme */
  color?: OdsThemeColorIntent;
  /** disabled or not: see component principles */
  disabled?: boolean;
  /** inline or not: see component principles */
  inline?: boolean;
  /** If the tile can have hoverable pseudo-classes or not */
  hoverable?: boolean;
  /** indicate if the tile has to be displayed in focused state */
  hasFocus?: boolean;
  /** loading content state */
  loading?: boolean;
  /** If the tile is rounded or not */
  rounded?: boolean;
  /** Tile size */
  size?: ODS_TILE_SIZE;
  /** Tile variant */
  variant?: ODS_TILE_VARIANT;
}

export {
  OdsTileAttribute,
};

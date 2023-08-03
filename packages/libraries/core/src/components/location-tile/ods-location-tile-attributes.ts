import { ODS_COUNTRY_ISO_CODE } from '../../i18n/ods-country-iso-codes.types';
import { OdsLocationTileVariant } from './ods-location-tile-variant';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_TILE_SIZE } from '@ovhcloud/ods-component-tile';
import { OdsRadioizable } from '../../utils/radio/ods-radioizable';
import { OdsCheckboxable } from '../../utils/checkbox/ods-checkboxable';
import { OdsComponentAttributes } from '../ods-component-attributes';

export interface OdsLocationTileAttributes extends OdsRadioizable, OdsCheckboxable, OdsComponentAttributes {
  /**
   * If the tile is checked or not
   */
  checked: boolean;
  /**
   * awaiting a change of checked state
   */
  checking: boolean;
  /**
   * Tile color theme
   */
  color?: OdsThemeColorIntent;
  /**
   * Tile color theme
   */
  disabled: boolean;
  /**
   * Tile as flex
   */
  flex?: boolean;
  /**
   * If the tile can be checked or not
   */
  interactive?: boolean;
  /**
   * indicate if the location tile has to be displayed in focused state
   */
  hasFocus: boolean;
  /**
   * Tile country iso code
   */
  iso?: ODS_COUNTRY_ISO_CODE;
  /**
   * Tile size
   */
  size?: ODS_TILE_SIZE;
  /**
   * Tile variant
   */
  variant?: OdsLocationTileVariant;
}

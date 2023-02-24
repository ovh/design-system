import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsTileSize } from './ods-tile-size';
import { OdsTileVariant } from './ods-tile-variant';
import { OdsRadioizable } from '../../utils/radio/ods-radioizable';
import { OdsCheckboxable } from '../../utils/checkbox/ods-checkboxable';
import { OdsComponentAttributes } from '../ods-component-attributes';

export interface OdsTileAttributes extends OdsRadioizable, OdsCheckboxable, OdsComponentAttributes {
  /**
   * If the tile is selected or not
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
  disabled: boolean;
  flex?: boolean;
  /**
   * If the tile can be have interactive pseudo-classes or not
   */
  interactive?: boolean;
  /**
   * indicate if the tile has to be displayed in focused state
   */
  hasFocus: boolean;
  /**
   * loading content state
   */
  loading: boolean;
  /**
   * If the tile is rounded or not
   */
  rounded?: boolean;
  /**
   * Tile size
   */
  size?: OdsTileSize;
  /**
   * Tile variant
   */
  variant?: OdsTileVariant;
}

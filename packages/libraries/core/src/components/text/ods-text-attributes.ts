import { OdsThemeColorHue, OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsTextSize } from './ods-text-size';
import { OdsTextLevel } from './ods-text-level';
import { OdsComponentAttributes } from '../ods-component-attributes';

export interface OdsTextAttributes extends OdsComponentAttributes {
  /**
   * If text handles break spaces or not
   */
  breakSpaces?: boolean
  /**
   * Text contrasted theme
   */
  color?: OdsThemeColorIntent
  /**
   * Text design as contrasted version
   */
  contrasted?: boolean
  /**
   * Text level
   */
  level?: OdsTextLevel
  /**
   * Text size
   */
  size?: OdsTextSize
  /**
   * Text hue
   */
  hue?: OdsThemeColorHue
}

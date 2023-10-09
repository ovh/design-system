import type { ODS_TEXT_COLOR_HUE, ODS_TEXT_COLOR_INTENT } from '../constants/text-color';
import type { ODS_TEXT_LEVEL } from '../constants/text-level';
import type { ODS_TEXT_SIZE } from '../constants/text-size';

interface OdsTextAttribute {
  /**
   * If text handles break spaces or not
   */
  breakSpaces?: boolean
  /**
   * Text contrasted theme
   */
  color?: ODS_TEXT_COLOR_INTENT
  /**
   * Text design as contrasted version
   */
  contrasted?: boolean
  /**
   * Text level
   */
  level?: ODS_TEXT_LEVEL
  /**
   * Text size
   */
  size?: ODS_TEXT_SIZE
  /**
   * Text hue
   */
  hue?: ODS_TEXT_COLOR_HUE
}

export {
  OdsTextAttribute,
};

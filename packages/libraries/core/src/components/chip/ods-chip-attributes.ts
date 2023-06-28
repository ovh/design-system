import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsChipSize } from './ods-chip-size';
import { OdsChipVariant } from './ods-chip-variant';
import { OdsComponentAttributes } from '../ods-component-attributes';

export interface OdsChipAttributes extends OdsComponentAttributes {
  /**
   * Chip color theme
   */
  color?: OdsThemeColorIntent
  /**
   * Chip is in contrasterd mode or not
   */
  contrasted?: boolean
  /**
   * Chip is disabled or not
   */
  disabled?: boolean
  /**
   * Chip as inline
   */
  inline?: boolean
  /**
   * If the chip can be removed or not
   */
  removable?: boolean
  /**
   * If the chip can be selected or not
   */
  selectable?: boolean
  /**
   * Chip size
   */
  size?: OdsChipSize
  /**
   * Chip variant
   */
  variant?: OdsChipVariant
}

import type { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import type { ODS_CHIP_SIZE } from '../constants/chip-size';
import type { ODS_CHIP_VARIANT } from '../constants/chip-variant';

interface OdsChipAttribute {
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
  size?: ODS_CHIP_SIZE
  /**
   * Chip variant
   */
  variant?: ODS_CHIP_VARIANT
}

export {
  OdsChipAttribute,
};

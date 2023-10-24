import type { OsdsChip } from '../osds-chip';
import { ODS_CHIP_SIZE } from '../constants/chip-size';
import { ODS_CHIP_VARIANT } from '../constants/chip-variant';
import { OdsLogger, OdsWarnComponentAttribute } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

class OdsChipController {
  private component: OsdsChip;
  private readonly logger = new OdsLogger('OdsChipController');

  constructor(component: OsdsChip) {
    this.component = component;
  }

  /**
   * validating that the color, the size and the variant have correct values
   * and warn the user if not
   */
  validateAttributes(): void {
    const logger = this.logger;
    OdsWarnComponentAttribute<ODS_THEME_COLOR_INTENT, OsdsChip>({
      logger,
      attributeValues: ODS_THEME_COLOR_INTENT as Record<string, unknown>,
      attributeName: 'color',
      attribute: this.component.color,
    });
    OdsWarnComponentAttribute<ODS_CHIP_SIZE, OsdsChip>({
      logger,
      attributeValues: ODS_CHIP_SIZE as Record<string, unknown>,
      attributeName: 'size',
      attribute: this.component.size,
    });
    OdsWarnComponentAttribute<ODS_CHIP_VARIANT, OsdsChip>({
      logger,
      attributeValues: ODS_CHIP_VARIANT as Record<string, unknown>,
      attributeName: 'variant',
      attribute: this.component.variant,
    });
  }
}

export {
  OdsChipController,
};

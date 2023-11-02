import type { OsdsIcon } from '../osds-icon';
import { OdsLogger, OdsWarnComponentAttribute } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_ICON_SIZE } from '../constants/icon-size';

/**
 * common controller logic for icon component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsIconController {
  private readonly logger = new OdsLogger('OdsIconLogger');
  protected component: OsdsIcon;

  constructor(component: OsdsIcon) {
    this.component = component;
  }

  validateAriaName(ariaName?: string): void {
    if (!ariaName) {
      this.logger.warn('The aria-name attribute must have a value');
    }
  }

  /**
   * validating that the color and the size have correct values
   * and warn the user if not
   */
  validateAttributes(): void {
    const logger = this.logger;

    OdsWarnComponentAttribute<ODS_THEME_COLOR_INTENT, OsdsIcon>({
      attribute: this.component.color,
      attributeName: 'color',
      attributeValues: ODS_THEME_COLOR_INTENT,
      logger,
    });
    OdsWarnComponentAttribute<ODS_ICON_SIZE, OsdsIcon>({
      attribute: this.component.size,
      attributeName: 'size',
      attributeValues: ODS_ICON_SIZE,
      logger,
    });
  }
}

export {
  OdsIconController,
};

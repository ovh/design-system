
import type { OsdsToggle } from '../osds-toggle';

import { OdsLogger, OdsWarnComponentAttribute } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';


/**
 * common controller logic for toggle component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsToggleController {
  private readonly logger = new OdsLogger('OdsToggleController');
  protected component: OsdsToggle;

  constructor(component: OsdsToggle) {
    this.component = component;
  }

  /**
   * validating that the color has correct value
   * and warn the user if not
   */
  validateAttributes(): void {
    OdsWarnComponentAttribute<ODS_THEME_COLOR_INTENT, OsdsToggle>({
      logger: this.logger,
      attributeValues: ODS_THEME_COLOR_INTENT as Record<string, unknown>,
      attributeName: 'color',
      attribute: this.component.color,
    });
  }
}

export { OdsToggleController };

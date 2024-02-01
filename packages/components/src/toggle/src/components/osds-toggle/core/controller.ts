import type { OsdsToggle } from '../osds-toggle';
import { OdsWarnComponentAttribute } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

class OdsToggleController {
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
      attributeValues: ODS_THEME_COLOR_INTENT as Record<string, unknown>,
      attributeName: 'color',
      attribute: this.component.color,
    });
  }
}

export { OdsToggleController };

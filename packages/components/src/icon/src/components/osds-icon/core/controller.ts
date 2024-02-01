import type { OsdsIcon } from '../osds-icon';
import { OdsWarnComponentAttribute } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_ICON_SIZE } from '../constants/icon-size';

class OdsIconController {
  protected component: OsdsIcon;

  constructor(component: OsdsIcon) {
    this.component = component;
  }

  validateAriaName(ariaName?: string): void {
    if (!ariaName) {
      console.warn('The aria-name attribute must have a value');
    }
  }

  /**
   * validating that the color and the size have correct values
   * and warn the user if not
   */
  validateAttributes(): void {
    OdsWarnComponentAttribute<ODS_THEME_COLOR_INTENT, OsdsIcon>({
      attribute: this.component.color,
      attributeName: 'color',
      attributeValues: ODS_THEME_COLOR_INTENT,
    });
    OdsWarnComponentAttribute<ODS_ICON_SIZE, OsdsIcon>({
      attribute: this.component.size,
      attributeName: 'size',
      attributeValues: ODS_ICON_SIZE,
    });
  }
}

export {
  OdsIconController,
};

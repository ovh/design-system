import { OdsLogger, OdsWarnComponentAttribute } from "@ovhcloud/ods-common-core";
import { ODS_THEME_COLOR_INTENT } from "@ovhcloud/ods-common-theming";
import { ODS_ICON_SIZE } from "../constants/icon-size";
/**
 * common controller logic for icon component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsIconController {
  constructor(component) {
    this.logger = new OdsLogger('OdsIconLogger');
    this.component = component;
  }
  validateAriaName(ariaName) {
    if (!ariaName) {
      this.logger.warn('The aria-name attribute must have a value');
    }
  }
  /**
   * validating that the color and the size have correct values
   * and warn the user if not
   */
  validateAttributes() {
    const logger = this.logger;
    OdsWarnComponentAttribute({
      attribute: this.component.color,
      attributeName: 'color',
      attributeValues: ODS_THEME_COLOR_INTENT,
      logger,
    });
    OdsWarnComponentAttribute({
      attribute: this.component.size,
      attributeName: 'size',
      attributeValues: ODS_ICON_SIZE,
      logger,
    });
  }
}
export { OdsIconController, };

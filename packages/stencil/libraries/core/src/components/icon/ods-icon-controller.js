import { OdsComponentController } from '../ods-component-controller';
import { OdsIconSize } from './ods-icon-size';
import { OdsLogger } from './../../logger/ods-logger';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsWarnComponentAttribute } from '../../logger/ods-warn-logger';
/**
 * common controller logic for icon component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsIconController extends OdsComponentController {
  constructor(component) {
    super(component);
    this.logger = new OdsLogger('OdsIconLogger');
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
      logger,
      attributeValues: OdsThemeColorIntent,
      attributeName: 'color',
      attribute: this.component.color
    });
    OdsWarnComponentAttribute({
      logger,
      attributeValues: OdsIconSize,
      attributeName: 'size',
      attribute: this.component.size
    });
  }
}

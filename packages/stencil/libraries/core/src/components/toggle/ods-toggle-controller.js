import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from './../../logger/ods-logger';
import { OdsThemeColorIntent } from '@ods/theming';
import { OdsWarnComponentAttribute } from '../../logger/ods-warn-logger';
/**
 * common controller logic for toggle component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsToggleController extends OdsComponentController {
  constructor(component) {
    super(component);
    this.logger = new OdsLogger('OdsToggleController');
  }
  /**
   * validating that the color has correct value
   * and warn the user if not
   */
  validateAttributes() {
    OdsWarnComponentAttribute({
      logger: this.logger,
      attributeValues: OdsThemeColorIntent,
      attributeName: 'color',
      attribute: this.component.color
    });
  }
}

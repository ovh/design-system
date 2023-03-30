import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from './../../logger/ods-logger';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsWarnComponentAttribute } from '../../logger/ods-warn-logger';
/**
 * common controller logic for location-tile component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsLocationTileController extends OdsComponentController {
  constructor(component) {
    super(component);
    this.logger = new OdsLogger('OdsLocationTileController');
  }
  validateAttributes() {
    const logger = this.logger;
    OdsWarnComponentAttribute({
      logger,
      attributeValues: OdsThemeColorIntent,
      attributeName: 'color',
      attribute: this.component.color
    });
  }
}

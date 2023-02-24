import { OdsComponentController } from '../ods-component-controller';
import { OdsLocationTile } from './ods-location-tile';
import { OdsLogger } from './../../logger/ods-logger';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsWarnComponentAttribute } from '../../logger/ods-warn-logger';

/**
 * common controller logic for location-tile component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsLocationTileController extends OdsComponentController<OdsLocationTile> {
  private readonly logger = new OdsLogger('OdsLocationTileController');

  constructor(component: OdsLocationTile) {
    super(component);
  }

  validateAttributes(): void {
    const logger = this.logger;
    OdsWarnComponentAttribute<OdsThemeColorIntent, OdsLocationTile>({
      logger,
      attributeValues: OdsThemeColorIntent as Record<string, unknown>,
      attributeName: 'color',
      attribute: this.component.color
    });
  }
}

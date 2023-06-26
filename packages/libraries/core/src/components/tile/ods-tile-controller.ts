import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from './../../logger/ods-logger';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsTile } from './ods-tile';
import { OdsTileSize } from './ods-tile-size';
import { OdsTileVariant } from './ods-tile-variant';
import { OdsWarnComponentAttribute } from '../../logger/ods-warn-logger';

/**
 * common controller logic for tile component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsTileController extends OdsComponentController<OdsTile> {
  private readonly logger = new OdsLogger('OdsTileControler');

  constructor(component: OdsTile) {
    super(component);
  }

  /**
   * validating that the color, the size and the variant have correct values
   * and warn the user if not
   */
  validateAttributes(): void {
    const logger = this.logger;
    OdsWarnComponentAttribute<OdsThemeColorIntent, OdsTile>({
      logger,
      attributeValues: OdsThemeColorIntent as Record<string, unknown>,
      attributeName: 'color',
      attribute: this.component.color
    });
    OdsWarnComponentAttribute<OdsTileSize, OdsTile>({
      logger,
      attributeValues: OdsTileSize as Record<string, unknown>,
      attributeName: 'size',
      attribute: this.component.size
    });
    OdsWarnComponentAttribute<OdsTileVariant, OdsTile>({
      logger,
      attributeValues: OdsTileVariant as Record<string, unknown>,
      attributeName: 'variant',
      attribute: this.component.variant
    });
  }

  handleClick(): void {
    // todo make a animation onclick
    this.logger.log('[tile]', 'clicked');
  }
}

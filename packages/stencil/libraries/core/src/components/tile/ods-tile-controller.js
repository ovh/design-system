import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from './../../logger/ods-logger';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsTileSize } from './ods-tile-size';
import { OdsTileVariant } from './ods-tile-variant';
import { OdsWarnComponentAttribute } from '../../logger/ods-warn-logger';
/**
 * common controller logic for tile component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsTileController extends OdsComponentController {
  constructor(component) {
    super(component);
    this.logger = new OdsLogger('OdsTileControler');
  }
  /**
   * validating that the color, the size and the variant have correct values
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
      attributeValues: OdsTileSize,
      attributeName: 'size',
      attribute: this.component.size
    });
    OdsWarnComponentAttribute({
      logger,
      attributeValues: OdsTileVariant,
      attributeName: 'variant',
      attribute: this.component.variant
    });
  }
  getTabIndex() {
    if (!this.component.disabled && this.component.interactive) {
      return 0;
    }
    return -1;
  }
  handleClick() {
    // todo make a animation onclick
    this.logger.log('[tile]', 'clicked');
  }
}

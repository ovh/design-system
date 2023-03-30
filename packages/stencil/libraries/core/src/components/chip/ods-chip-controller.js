import { OdsChipSize } from './ods-chip-size';
import { OdsChipVariant } from './ods-chip-variant';
import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from '../../logger/ods-logger';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsWarnComponentAttribute } from '../../logger/ods-warn-logger';
/**
 * common controller logic for chip component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsChipController extends OdsComponentController {
  constructor(component) {
    super(component);
    this.logger = new OdsLogger('OdsChipController');
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
      attributeValues: OdsChipSize,
      attributeName: 'size',
      attribute: this.component.size
    });
    OdsWarnComponentAttribute({
      logger,
      attributeValues: OdsChipVariant,
      attributeName: 'variant',
      attribute: this.component.variant
    });
  }
}

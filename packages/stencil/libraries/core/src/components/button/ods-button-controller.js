import { OdsButtonSize } from './ods-button-size';
import { OdsButtonVariant } from './ods-button-variant';
import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from './../../logger/ods-logger';
import { OdsThemeColorIntent } from '@ods/theming';
import { OdsWarnComponentAttribute } from '../../logger/ods-warn-logger';
/**
 * common controller logic for button component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsButtonController extends OdsComponentController {
  constructor(component) {
    super(component);
    this.logger = new OdsLogger('OdsButtonControler');
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
      attributeValues: OdsButtonSize,
      attributeName: 'size',
      attribute: this.component.size
    });
    OdsWarnComponentAttribute({
      logger,
      attributeValues: OdsButtonVariant,
      attributeName: 'variant',
      attribute: this.component.variant
    });
  }
}

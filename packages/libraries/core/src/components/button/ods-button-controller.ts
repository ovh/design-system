import { OdsButton } from './ods-button';
import { OdsButtonSize } from './ods-button-size';
import { OdsButtonVariant } from './ods-button-variant';
import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from './../../logger/ods-logger';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsWarnComponentAttribute } from '../../logger/ods-warn-logger';

/**
 * common controller logic for button component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsButtonController extends OdsComponentController<OdsButton> {
  private readonly logger = new OdsLogger('OdsButtonControler');

  constructor(component: OdsButton) {
    super(component);
  }

  /**
   * validating that the color, the size and the variant have correct values
   * and warn the user if not
   */
  validateAttributes(): void {
    const logger = this.logger;
    OdsWarnComponentAttribute<OdsThemeColorIntent, OdsButton>({
      logger,
      attributeValues: OdsThemeColorIntent as Record<string, unknown>,
      attributeName: 'color',
      attribute: this.component.color
    });
    OdsWarnComponentAttribute<OdsButtonSize, OdsButton>({
      logger,
      attributeValues: OdsButtonSize as Record<string, unknown>,
      attributeName: 'size',
      attribute: this.component.size
    });
    OdsWarnComponentAttribute<OdsButtonVariant, OdsButton>({
      logger,
      attributeValues: OdsButtonVariant as Record<string, unknown>,
      attributeName: 'variant',
      attribute: this.component.variant
    });
  }
}
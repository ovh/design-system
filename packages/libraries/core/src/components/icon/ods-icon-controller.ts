import { OdsComponentController } from '../ods-component-controller';
import { OdsIcon } from './ods-icon';
import { OdsIconSize } from './ods-icon-size';
import { OdsLogger } from './../../logger/ods-logger';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsWarnComponentAttribute } from '../../logger/ods-warn-logger';

/**
 * common controller logic for icon component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsIconController extends OdsComponentController<OdsIcon> {
  private readonly logger = new OdsLogger('OdsIconLogger');

  constructor(component: OdsIcon) {
    super(component);
  }

  validateAriaName(ariaName?: string): void {
    if (!ariaName) {
      this.logger.warn('The aria-name attribute must have a value');
    }
  }

  /**
   * validating that the color and the size have correct values
   * and warn the user if not
   */
  validateAttributes(): void {
    const logger = this.logger;
    OdsWarnComponentAttribute<OdsThemeColorIntent, OdsIcon>({
      logger,
      attributeValues: OdsThemeColorIntent as Record<string, unknown>,
      attributeName: 'color',
      attribute: this.component.color
    });
    OdsWarnComponentAttribute<OdsIconSize, OdsIcon>({
      logger,
      attributeValues: OdsIconSize as Record<string, unknown>,
      attributeName: 'size',
      attribute: this.component.size
    });
  }
}

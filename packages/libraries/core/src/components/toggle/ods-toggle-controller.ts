import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from './../../logger/ods-logger';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsToggle } from './ods-toggle';
import { OdsWarnComponentAttribute } from '../../logger/ods-warn-logger';

/**
 * common controller logic for toggle component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsToggleController extends OdsComponentController<OdsToggle> {
  private readonly logger = new OdsLogger('OdsToggleController');

  constructor(component: OdsToggle) {
    super(component);
  }

  /**
   * validating that the color has correct value
   * and warn the user if not
   */
  validateAttributes(): void {
    OdsWarnComponentAttribute<OdsThemeColorIntent, OdsToggle>({
      logger: this.logger,
      attributeValues: OdsThemeColorIntent as Record<string, unknown>,
      attributeName: 'color',
      attribute: this.component.color
    });
  }
}

import { OdsSwitchItem } from './ods-switch-item';
import { OdsComponentController } from '../ods-component-controller';

/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsSwitchItemController extends OdsComponentController<OdsSwitchItem> {
  // private readonly logger = new OdsLogger('OdsSwitchController');

  constructor(component: OdsSwitchItem) {
    super(component);
  }

  /**
   * Attributes validation documentation
   */
  validateAttributes(): void {
      return;
  }
}

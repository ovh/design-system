import { OdsSwitch } from './ods-switch';
import { OdsComponentController } from '../ods-component-controller';

/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsSwitchController extends OdsComponentController<OdsSwitch> {
  // private readonly logger = new OdsLogger('OdsSwitchController');

  constructor(component: OdsSwitch) {
    super(component);
  }

  /**
   * Attributes validation documentation
   */
  validateAttributes(): void {
      return;
  }
}

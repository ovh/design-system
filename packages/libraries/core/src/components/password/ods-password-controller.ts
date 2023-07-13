import { OdsPassword } from './ods-password';
import { OdsComponentController } from '../ods-component-controller';

/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsPasswordController extends OdsComponentController<OdsPassword> {
  // private readonly logger = new OdsLogger('OdsPasswordController');

  constructor(component: OdsPassword) {
    super(component);
  }

  /**
   * Attributes validation documentation
   */
  validateAttributes(): void {
    return;
  }
}

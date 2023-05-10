import { OdsSpinner } from './ods-spinner';
import { OdsComponentController } from '../ods-component-controller';

/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsSpinnerController extends OdsComponentController<OdsSpinner> {
  // private readonly logger = new OdsLogger('OdsSpinnerController');

  constructor(component: OdsSpinner) {
    super(component);
  }

  /**
   * Attributes validation documentation
   */
  validateAttributes(): void {
      return;
  }
}

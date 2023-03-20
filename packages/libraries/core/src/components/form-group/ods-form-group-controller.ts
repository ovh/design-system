import { OdsFormGroup } from './ods-form-group';
import { OdsComponentController } from '../ods-component-controller';

/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsFormGroupController extends OdsComponentController<OdsFormGroup> {
  // private readonly logger = new OdsLogger('OdsFormGroupController');

  constructor(component: OdsFormGroup) {
    super(component);
  }

  /**
   * Attributes validation documentation
   */
  validateAttributes(): void {
      return;
  }
}

import { OdsCollapsible } from './ods-collapsible';
import { OdsComponentController } from '../ods-component-controller';

/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsCollapsibleController extends OdsComponentController<OdsCollapsible> {
  // private readonly logger = new OdsLogger('OdsCollapsibleController');

  constructor(component: OdsCollapsible) {
    super(component);
  }

  /**
   * Attributes validation documentation
   */
  validateAttributes(): void {
      return;
  }
}

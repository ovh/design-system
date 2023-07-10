import { OdsSearchBar } from './ods-search-bar';
import { OdsComponentController } from '../ods-component-controller';

/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsSearchBarController extends OdsComponentController<OdsSearchBar> {
  // private readonly logger = new OdsLogger('OdsSearchBarController');

  constructor(component: OdsSearchBar) {
    super(component);
  }

  /**
   * Attributes validation documentation
   */
  validateAttributes(): void {
      return;
  }
}

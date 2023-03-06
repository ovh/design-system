import { Ods<%= componentName %> } from './<%= componentFileNamePrefix %>';
import { OdsComponentController } from '../ods-component-controller';

/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class Ods<%= componentName %>Controller extends OdsComponentController<Ods<%= componentName %>> {
  // private readonly logger = new OdsLogger('Ods<%= componentName %>Controller');

  constructor(component: Ods<%= componentName %>) {
    super(component);
  }

  /**
   * Attributes validation documentation
   */
  validateAttributes(): void {
      return;
  }
}

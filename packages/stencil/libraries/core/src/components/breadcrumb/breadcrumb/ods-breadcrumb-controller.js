import { OdsComponentController } from '../../ods-component-controller';
/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsBreadcrumbController extends OdsComponentController {
  // private readonly logger = new OdsLogger('OdsBreadcrumbController');
  constructor(component) {
    super(component);
  }
  /**
   * Attributes validation documentation
   */
  validateAttributes() {
    return;
  }
}

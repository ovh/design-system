import { OdsBreadcrumb } from './ods-breadcrumb';
import { OdsComponentController } from '../../ods-component-controller';

/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsBreadcrumbController extends OdsComponentController<OdsBreadcrumb> {
  // private readonly logger = new OdsLogger('OdsBreadcrumbController');

  constructor(component: OdsBreadcrumb) {
    super(component);
  }

  /**
   * Attributes validation documentation
   */
  validateAttributes(): void {
    return;
  }
}

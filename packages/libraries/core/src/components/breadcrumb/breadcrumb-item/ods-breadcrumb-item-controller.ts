import { OdsBreadcrumbItem } from './ods-breadcrumb-item';
import { OdsComponentController } from '../../ods-component-controller';

/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsBreadcrumbItemController extends OdsComponentController<OdsBreadcrumbItem> {
  // private readonly logger = new OdsLogger('OdsBreadcrumbController');

  constructor(component: OdsBreadcrumbItem) {
    super(component);
  }

  /**
   * Attributes validation documentation
   */
  validateAttributes(): void {
    return;
  }
}

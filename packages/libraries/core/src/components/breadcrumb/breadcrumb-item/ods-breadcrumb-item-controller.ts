import { OdsBreadcrumbItem } from './ods-breadcrumb-item';
import { OdsComponentController } from '../../ods-component-controller';

/**
 * common controller logic for component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsBreadcrumbItemController extends OdsComponentController<OdsBreadcrumbItem> {
  constructor(component: OdsBreadcrumbItem) {
    super(component);
  }
}

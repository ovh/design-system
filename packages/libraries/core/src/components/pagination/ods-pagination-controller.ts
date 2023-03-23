import { OdsComponentController } from '../ods-component-controller';
import { OdsPagination } from './ods-pagination';

/**
 * common controller logic for select component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsPaginationController extends OdsComponentController<OdsPagination> {
  constructor(component: OdsPagination) {
    super(component);
  }
}

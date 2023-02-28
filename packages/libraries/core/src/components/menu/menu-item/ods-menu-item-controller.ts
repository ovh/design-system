import { OdsComponentController } from '../../ods-component-controller';
import { OdsMenuItem } from './ods-menu-item';

/**
 * common controller logic for link component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsMenuItemController extends OdsComponentController<OdsMenuItem> {

  constructor(component: OdsMenuItem) {
    super(component);
  }
}

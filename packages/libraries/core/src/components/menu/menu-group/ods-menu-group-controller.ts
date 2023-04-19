import { OdsComponentController } from '../../ods-component-controller';
import { OdsMenuGroup } from './ods-menu-group';

/**
 * common controller logic for link component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsMenuGroupController extends OdsComponentController<OdsMenuGroup> {

  constructor(component: OdsMenuGroup) {
    super(component);
  }
}

import { OsdsMenuGroup } from '../osds-menu-group';

/**
 * common controller logic for menu group component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsMenuGroupController {
  protected component: OsdsMenuGroup;
  constructor(component: OsdsMenuGroup) {
    this.component = component;
  }
}

export { OdsMenuGroupController }

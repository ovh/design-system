import { OsdsMenuItem } from '../osds-menu-item';

/**
 * common controller logic for menu item component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsMenuItemController {
  protected component: OsdsMenuItem;
  constructor(component: OsdsMenuItem) {
    this.component = component;
  }
}

export { OdsMenuItemController }

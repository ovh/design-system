import type {OsdsCollapsible} from '../osds-collapsible';

/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsCollapsibleController {
  private component: OsdsCollapsible;

  constructor(component: OsdsCollapsible) {
    this.component = component;
  }

  onToggle(): void {
    this.component.emitToggle(this.component.opened || false);
  }
}

export {
  OdsCollapsibleController,
};

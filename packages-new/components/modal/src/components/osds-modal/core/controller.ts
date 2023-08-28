import { OsdsModal } from '../osds-modal';

/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsModalController {

  protected component: OsdsModal;

  constructor(component: OsdsModal) {
    this.component = component;
  }

  close() {
    this.component.masked = true;
  }

  open() {
    this.component.masked = false;
  }

  /**
   * Attributes validation documentation
   */
  validateAttributes(): void {
    return;
  }
}

export {
  OdsModalController
};

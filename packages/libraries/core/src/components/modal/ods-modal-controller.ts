import { OdsModal } from './ods-modal';
import { OdsComponentController } from '../ods-component-controller';

/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsModalController extends OdsComponentController<OdsModal> {

  constructor(component: OdsModal) {
    super(component);
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

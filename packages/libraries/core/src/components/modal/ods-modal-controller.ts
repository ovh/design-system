import { OdsModal } from './ods-modal';
import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from '../../logger/ods-logger';

/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsModalController extends OdsComponentController<OdsModal> {
  private readonly logger = new OdsLogger('OdsInputController');

  constructor(component: OdsModal) {
    super(component);
  }

  close() {
    this.logger.debug('close');
    this.component.masked = true;
  }

  open() {
    this.logger.debug('open');
    this.component.masked = false;
  }

  /**
   * Attributes validation documentation
   */
  validateAttributes(): void {
      return;
  }
}

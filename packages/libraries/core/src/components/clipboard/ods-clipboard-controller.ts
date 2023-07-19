import { OdsClipboard } from './ods-clipboard';
import { OdsComponentController } from '../ods-component-controller';

/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsClipboardController extends OdsComponentController<OdsClipboard> {
  // private readonly logger = new OdsLogger('OdsClipboardController');

  constructor(component: OdsClipboard) {
    super(component);
  }

  /**
   * Attributes validation documentation
   */
  validateAttributes(): void {
      return;
  }
}

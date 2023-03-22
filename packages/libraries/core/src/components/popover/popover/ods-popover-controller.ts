import { OdsPopover } from './ods-popover';
import { OdsComponentController } from '../../ods-component-controller';

/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsPopoverController extends OdsComponentController<OdsPopover> {
  // private readonly logger = new OdsLogger('OdsPopoverController');

  constructor(component: OdsPopover) {
    super(component);
  }

  /**
   * Attributes validation documentation
   */
  validateAttributes(): void {
      return;
  }
}

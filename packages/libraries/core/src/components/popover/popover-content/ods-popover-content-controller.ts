import { OdsPopoverContent } from './ods-popover-content';
import { OdsComponentController } from '../../ods-component-controller';

/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsPopoverContentController extends OdsComponentController<OdsPopoverContent> {
  // private readonly logger = new OdsLogger('OdsPopoverContentController');
  constructor(component: OdsPopoverContent) {
    super(component);
  }
}

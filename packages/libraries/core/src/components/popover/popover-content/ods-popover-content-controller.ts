import { OdsComponentController } from '../../ods-component-controller';
import { OdsPopoverContent } from './ods-popover-content';

/**
 * common controller logic for popover component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsPopoverContentController extends OdsComponentController<OdsPopoverContent> {

  constructor(component: OdsPopoverContent) {
    super(component);
  }
}

import { OdsTooltipContent } from './ods-tooltip-content';
import { OdsComponentController } from '../../ods-component-controller';

/**
 * common controller logic for component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsTooltipContentController extends OdsComponentController<OdsTooltipContent> {
  constructor(component: OdsTooltipContent) {
    super(component);
  }
}

import { OdsTooltip } from './ods-tooltip';
import { OdsComponentController } from '../ods-component-controller';

/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsTooltipController extends OdsComponentController<OdsTooltip> {
  // private readonly logger = new OdsLogger('OdsTooltipController');

  constructor(component: OdsTooltip) {
    super(component);
  }

  /**
   * Attributes validation documentation
   */
  validateAttributes(): void {
      return;
  }
}

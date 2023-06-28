import { OdsProgressBar } from './ods-progress-bar';
import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from '../../logger/ods-logger';

/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsProgressBarController extends OdsComponentController<OdsProgressBar> {
  private readonly logger = new OdsLogger('OdsProgressBarController');

  constructor(component: OdsProgressBar) {
    super(component);
  }

  /**
   * Attributes validation documentation
   */
  validateAttributes(): void {
      if (this.component.max && (this.component.max < 0 || this.component.max > 100)) {
        this.logger.warn(`max must be between 0 and 100`);
      }

      if (this.component.value && (this.component.value < 0 || this.component.value > 100)) {
        this.logger.warn(`progress must be between 0 and 100`);
      }
  }
}

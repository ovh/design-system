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
      if (this.component.min && (this.component.min < 0 || this.component.min > 100)) {
        this.logger.warn(`min must be between 0 and 100`);
      } else if (this.component.max && (this.component.max < 0 || this.component.max > 100)) {
        this.logger.warn(`max must be between 0 and 100`);
      } else if (this.component.progress && (this.component.progress < 0 || this.component.progress > 100)) {
        this.logger.warn(`progress must be between 0 and 100`);
      } else if (this.component.min && this.component.max && (this.component.min > this.component.max)) {
        this.logger.warn(`min must be lower than max`);
      }
  }

  defineProgressCssValue(value: OdsProgressBar['progress']) {
    if (value === undefined || value === null || value < 0) {
      return;
    } else if (this.component.min && (value < this.component.min)) {
      return
    } else if (this.component.max && (value > this.component.max)) {
      return
    }

    (this.component.el as unknown as (HTMLElement)).style.setProperty("--progress", `${value}%`);
  }
}

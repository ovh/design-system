import type { OsdsProgressBar } from '../osds-progress-bar';
import { OdsLogger } from '@ovhcloud/ods-common-core';

/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsProgressBarController {
  private readonly logger = new OdsLogger('OdsProgressBarController');
  protected component: OsdsProgressBar;

  constructor(component: OsdsProgressBar) {
    this.component = component;
  }

  /**
   * Attributes validation documentation
   */
  validateAttributes(): void {
    if (this.component.max && (this.component.max < 0 || this.component.max > 100)) {
      this.logger.warn('max must be between 0 and 100');
    }

    if (this.component.value && (this.component.value < 0 || this.component.value > 100)) {
      this.logger.warn('progress must be between 0 and 100');
    }
  }
}

export {
  OdsProgressBarController,
};

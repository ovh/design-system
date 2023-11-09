import type { OsdsMedium } from '../osds-medium';
import { OdsLogger } from '@ovhcloud/ods-common-core';

/**
 * common controller logic for chip component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsMediumController {
  private readonly logger = new OdsLogger('OsdsMediumController');
  protected component: OsdsMedium;

  constructor(component: OsdsMedium) {
    this.component = component;
  }

  /**
   * Warn user if the alt attribute is not set
   * @param alt - alternative description of the medium
   */
  validateAlt(alt: string): void {
    if (alt.length === 0) {
      this.logger.warn('The alt attribute must be set');
    }
  }

  /**
   * Warn user if the src attribute is not set
   * @param src - url of the medium
   */
  validateSrc(src: string): void {
    if (src.length === 0) {
      this.logger.warn('The src attribute must be set');
    }
  }

  /**
   * Warn user if the height attribute is wrong
   * @param height - height of the medium
   */
  validateHeight(height?: number): void {
    if (height && !Number.isInteger(height)) {
      this.logger.warn('The height attribute value must be an integer');
    }

    if (height && height < 1) {
      this.logger.warn('The height attribute must have a positive value');
    }
  }

  /**
   * Warn user if the width attribute is wrong
   * @param width - width of the mediuma
   */
  validateWidth(width?: number): void {
    if (width && !Number.isInteger(width)) {
      this.logger.warn('The width attribute value must be an integer');
    }

    if (width && width < 1) {
      this.logger.warn('The width attribute must have a positive value');
    }
  }
}

export {
  OdsMediumController,
};

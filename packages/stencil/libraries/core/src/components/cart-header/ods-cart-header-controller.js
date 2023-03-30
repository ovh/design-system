import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from '../../logger/ods-logger';
/**
 * common controller logic for cart-header component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsCartHeaderController extends OdsComponentController {
  constructor(component) {
    super(component);
    this.logger = new OdsLogger('OdsCartHeaderController');
  }
  /**
   * Init cart from cart container
   */
  initCart() {
    this.component.cart = this.component.el.closest('osds-cart');
    if (!this.component.cart) {
      this.logger.warn('A cart is mandatory.');
    }
  }
  /**
   * Header title validation
   */
  validateHeaderTitle() {
    if (!this.component.headerTitle) {
      throw new Error('[OsdsCartHeader] header-title attribute is mandatory');
    }
  }
}

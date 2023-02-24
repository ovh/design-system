import { OdsCartHeader } from './ods-cart-header';
import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from '../../logger/ods-logger';

/**
 * common controller logic for cart-header component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsCartHeaderController extends OdsComponentController<OdsCartHeader> {
  private readonly logger = new OdsLogger('OdsCartHeaderController');

  constructor(component: OdsCartHeader) {
    super(component);
  }

  /**
   * Init cart from cart container
   */
  initCart(): void {
    this.component.cart = this.component.el.closest('osds-cart');
    if (!this.component.cart) {
      this.logger.warn('A cart is mandatory.');
    }
  }

  /**
   * Header title validation
   */
  validateHeaderTitle(): void {
    if (!this.component.headerTitle) {
      throw new Error('[OsdsCartHeader] header-title attribute is mandatory');
    }
  }
}

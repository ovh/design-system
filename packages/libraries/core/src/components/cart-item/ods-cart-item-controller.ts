import { OdsCartItem } from './ods-cart-item';
import { OdsComponentController } from '../ods-component-controller';

/**
 * common controller logic for cart-item component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsCartItemController extends OdsComponentController<OdsCartItem> {

  constructor(component: OdsCartItem) {
    super(component);
  }

  /**
   * Init component cart with cart parent and re-render
   */
  async initCart(): Promise<void> {
    this.component.cart = this.component.el?.closest('osds-cart');
    await this.refreshCart();
  }

  /**
   * Re-render component cart 
   */
  async refreshCart(): Promise<void> {
    if (this.component.cart) {
      await this.component.cart.refresh();
    }
  }
}

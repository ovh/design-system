import { OdsCart } from './ods-cart';
import { OdsComponentController } from '../ods-component-controller';

/**
 * common controller logic for cart component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsCartController extends OdsComponentController<OdsCart> {
  constructor(component: OdsCart) {
    super(component);
  }

  /**
   * Get OdsCartItem quantity
   */
  computeItemQuantity(): number {
    const cartItems = this.component.el?.querySelectorAll('osds-cart-item') || [];
    return cartItems.length;
  }

  /**
   * Set cartHeader component 
   * Refresh cartHeader to re-render
   */
  async updateCartHeaderState() {
    await customElements.whenDefined('osds-cart-header');
    this.component.cartHeader = this.component.el?.querySelector('osds-cart-header');
    await this.component.cartHeader?.refresh();
  }
}

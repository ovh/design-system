import { OdsComponentController } from '../ods-component-controller';
/**
 * common controller logic for cart component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsCartController extends OdsComponentController {
  constructor(component) {
    super(component);
  }
  /**
   * Get OdsCartItem quantity
   */
  computeItemQuantity() {
    var _a;
    const cartItems = ((_a = this.component.el) === null || _a === void 0 ? void 0 : _a.querySelectorAll('osds-cart-item')) || [];
    return cartItems.length;
  }
  /**
   * Set cartHeader component
   * Refresh cartHeader to re-render
   */
  async updateCartHeaderState() {
    var _a, _b;
    await customElements.whenDefined('osds-cart-header');
    this.component.cartHeader = (_a = this.component.el) === null || _a === void 0 ? void 0 : _a.querySelector('osds-cart-header');
    await ((_b = this.component.cartHeader) === null || _b === void 0 ? void 0 : _b.refresh());
  }
}

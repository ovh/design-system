import { OdsComponentController } from '../ods-component-controller';
/**
 * common controller logic for cart-item component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsCartItemController extends OdsComponentController {
  constructor(component) {
    super(component);
  }
  /**
   * Init component cart with cart parent and re-render
   */
  async initCart() {
    var _a;
    this.component.cart = (_a = this.component.el) === null || _a === void 0 ? void 0 : _a.closest('osds-cart');
    await this.refreshCart();
  }
  /**
   * Re-render component cart
   */
  async refreshCart() {
    if (this.component.cart) {
      await this.component.cart.refresh();
    }
  }
}

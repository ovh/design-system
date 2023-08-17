import type { OsdsCartItem } from '../osds-cart-item';
import { HTMLStencilElement } from '@stencil/core/internal';
import { OsdsCart } from '../../osds-cart/osds-cart';

class OdsCartItemController {
  private component: OsdsCartItem;

  constructor(component: OsdsCartItem) {
    this.component = component;
  }

  /**
   * Init component cart with cart parent and re-render
   */
  async initCart(): Promise<void> {
    this.component.cart = this.component.el?.closest('osds-cart') as (HTMLStencilElement & OsdsCart);
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

export {
  OdsCartItemController,
};

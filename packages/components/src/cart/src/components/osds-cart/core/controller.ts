import type { OsdsCart } from '../osds-cart';

import { HTMLStencilElement } from '@stencil/core/internal';

import { OsdsCartHeader } from '../../osds-cart-header/osds-cart-header';

class OdsCartController {
  private component: OsdsCart;

  constructor(component: OsdsCart) {
    this.component = component;
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
    this.component.cartHeader = this.component.el?.querySelector('osds-cart-header') as (HTMLStencilElement & OsdsCartHeader);
    await this.component.cartHeader?.refresh();
  }
}

export {
  OdsCartController,
};

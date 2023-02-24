import { Component, Element, Host, h } from '@stencil/core';
import { OdsCart, OdsCartItem, OdsCartItemController, OdsCartItemEvents, OdsCartItemMethods } from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

import { HTMLStencilElement } from '@stencil/core/internal';

@Component({
  tag: 'osds-cart-item',
  styleUrl: 'osds-cart-item.scss',
  shadow: true,
})
export class OsdsCartItem implements OdsCartItem<OdsStencilMethods<OdsCartItemMethods>, OdsStencilEvents<OdsCartItemEvents>> {
  controller: OdsCartItemController = new OdsCartItemController(this);
  cart: (HTMLStencilElement & OdsCart) | null = null;

  @Element() el!: HTMLElement;

  /**
   * on connected, find the cart and force the refresh of it.
   * (the cart inspecting how many item are instanced)
   */
  async connectedCallback() {
    await this.beforeInit();
  }

  /**
   * tell the cart to refresh in order to see what are the items gone
   */
  async disconnectedCallback() {
    await this.onDestroy();
  }

  /**
   * @see OdsCartIteamBehavior.beforeInit
   */
  async beforeInit(): Promise<void> {
    this.controller.initCart();
  }

  /**
   * @see OdsCartIteamBehavior.onDestroy
   */
   async onDestroy(): Promise<void> {
    this.controller.refreshCart();
  }

  render() {
    return (
      <Host>
        <slot name={'subhead'}></slot>
        <slot name={'title'}></slot>
        <slot name={'price'}></slot>
        <slot name={'extra'}></slot>
      </Host>
    );
  }
}

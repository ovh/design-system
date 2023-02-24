import { Component, Element, Host, Method, Prop, State, Watch, forceUpdate, h } from '@stencil/core';
import {
  OdsCart,
  OdsCartHeader,
  OdsCartHeaderController,
  OdsCartHeaderEvents,
  OdsCartHeaderMethods,
  odsCartHeaderDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

import { HTMLStencilElement } from '@stencil/core/internal';

@Component({
  tag: 'osds-cart-header',
  styleUrl: 'osds-cart-header.scss',
  shadow: true,
})
export class OsdsCartHeader implements OdsCartHeader<OdsStencilMethods<OdsCartHeaderMethods>, OdsStencilEvents<OdsCartHeaderEvents>> {
  controller: OdsCartHeaderController = new OdsCartHeaderController(this);
  @State() cart: (HTMLStencilElement & OdsCart) | null = null;

  @Element() el!: HTMLStencilElement;

  /** @see OdsCartHeaderAttributes.headerTitle */
  @Prop({ reflect: true }) headerTitle?: string = odsCartHeaderDefaultAttributes.headerTitle;

  @Watch('headerTitle')
  validateHeaderTitle(): void {
    this.controller.validateHeaderTitle();
  }

  /**
   * @see OdsCartHeaderMethods.refresh
   */
  @Method()
  async refresh(): Promise<void>  {
    forceUpdate(this.el);
  }

  /**
   * @see OdsCartHeaderBehavior.beforeInit
   */
   beforeInit(): void {
    this.controller.initCart();
  }

  connectedCallback(): void {
    this.beforeInit();
  }

  render() {
    const cartMobileHandle = (
      <div class="cart-mobile-handle">
        <hr></hr>
      </div>
    );

    return (
      <Host>
        {this.cart?.collapsible ? cartMobileHandle : undefined}
        <slot></slot>
      </Host>
    );
  }
}

import type { HTMLStencilElement } from '@stencil/core/internal';
import type { OdsCartHeaderAttribute } from './interfaces/attributes';
import type { OdsCartHeaderMethod } from './interfaces/methods';
import type { OsdsCart } from '../osds-cart/osds-cart';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsCartHeaderController } from './core/controller';
import { Component, Element, Host, Method, Prop, State, Watch, forceUpdate, h } from '@stencil/core';

@Component({
  tag: 'osds-cart-header',
  styleUrl: 'osds-cart-header.scss',
  shadow: true,
})
export class OsdsCartHeader implements OdsCartHeaderAttribute, OdsCartHeaderMethod {
  controller: OdsCartHeaderController = new OdsCartHeaderController(this);
  @State() cart: (HTMLStencilElement & OsdsCart) | null = null;

  @Element() el!: HTMLStencilElement;

  /** @see OdsCartHeaderAttributes.headerTitle */
  @Prop({ reflect: true }) headerTitle?: string = DEFAULT_ATTRIBUTE.headerTitle;

  @Watch('headerTitle')
  validateHeaderTitle(): void {
    this.controller.validateHeaderTitle();
  }

  /**
   * @see OdsCartHeaderMethods.refresh
   */
  @Method()
  async refresh(): Promise<void> {
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

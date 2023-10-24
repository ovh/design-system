import type { HTMLStencilElement } from '@stencil/core/internal';
import type { ODS_CART_ROUNDED } from './constants/cart-rounded';
import type { ODS_CART_SIZE } from './constants/cart-size';
import type { OdsCartAttribute } from './interfaces/attributes';
import type { OdsCartMethod } from './interfaces/methods';
import type { OsdsCartHeader } from '../osds-cart-header/osds-cart-header';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsCartController } from './core/controller';
import { Component, Element, Host, Method, Prop, State, Watch, forceUpdate, h } from '@stencil/core';
import { OdsLogger } from '@ovhcloud/ods-common-core';

@Component({
  tag: 'osds-cart',
  styleUrl: 'osds-cart.scss',
  shadow: true,
})
export class OsdsCart implements OdsCartAttribute, OdsCartMethod {
  private logger = new OdsLogger('OsdsCart');
  controller: OdsCartController = new OdsCartController(this);
  @Element() el!: HTMLStencilElement;

  @State() cartHeader: (HTMLStencilElement & OsdsCartHeader) | null = null;

  /** @see OdsCartAttributes.size */
  @Prop({ reflect: true }) public size?: ODS_CART_SIZE = DEFAULT_ATTRIBUTE.size;

  /** @see OdsCartAttributes.inline */
  @Prop({ reflect: true }) public inline?: boolean = DEFAULT_ATTRIBUTE.inline;

  /** @see OdsCartAttributes.rounded */
  @Prop({ reflect: true }) public rounded?: ODS_CART_ROUNDED = DEFAULT_ATTRIBUTE.rounded;

  /** @see OdsCartAttributes.collapsed */
  @Prop({ reflect: true }) public collapsed?: boolean = DEFAULT_ATTRIBUTE.collapsed;

  /** @see OdsCartAttributes.collapsible */
  @Prop({ reflect: true }) public collapsible?: boolean = DEFAULT_ATTRIBUTE.collapsible;

  @Watch('collapsible')
  async collapsibleChanged(collapsible: boolean) {
    this.logger.log('[cart-collapsible]', 'value changed', { collapsible });
    await this.controller.updateCartHeaderState();
  }

  /**
   * @see OdsCartMethods.getItemQuantity
   */
  @Method()
  async getItemQuantity(): Promise<number> {
    return this.controller.computeItemQuantity();
  }

  /**
   * @see OdsCartMethods.refresh
   */
  @Method()
  async refresh(): Promise<void> {
    forceUpdate(this.el);
  }

  render() {
    return (
      <Host>
        <slot name={'header'}></slot>
        {/*
        conditional slot workaround: wrap it with an element.
        else the slot stay rendered in the dom even if the condition is not satisfied
        https://github.com/ionic-team/stencil/issues/399
        https://github.com/ionic-team/stencil/issues/2257#issuecomment-750443442
        */}
        <span class={'container'}>
          <slot></slot>
          {
            this.controller.computeItemQuantity()
              ? undefined
              : <span>
                <slot name={'empty'}></slot>
              </span>
          }
        </span>
        <slot name={'footer'}></slot>
      </Host>
    );
  }
}

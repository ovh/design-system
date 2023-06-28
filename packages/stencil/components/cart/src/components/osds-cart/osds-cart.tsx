import { Component, Element, Host, Method, Prop, State, Watch, forceUpdate, h } from '@stencil/core';
import {
  OdsCart,
  OdsCartController,
  OdsCartEvents,
  OdsCartHeader,
  OdsCartMethods,
  OdsCartRounded,
  OdsCartSize,
  OdsLogger,
  odsCartDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

import { HTMLStencilElement } from '@stencil/core/internal';

@Component({
  tag: 'osds-cart',
  styleUrl: 'osds-cart.scss',
  shadow: true,
})
export class OsdsCart implements OdsCart<OdsStencilMethods<OdsCartMethods>, OdsStencilEvents<OdsCartEvents>> {
  private logger = new OdsLogger('OsdsCart');
  controller: OdsCartController = new OdsCartController(this);
  @Element() el!: HTMLStencilElement;

  @State() cartHeader: (HTMLStencilElement & OdsCartHeader) | null = null;

  /** @see OdsCartAttributes.size */
  @Prop({ reflect: true }) public size?: OdsCartSize = odsCartDefaultAttributes.size;

  /** @see OdsCartAttributes.inline */
  @Prop({ reflect: true }) public inline?: boolean = odsCartDefaultAttributes.inline;

  /** @see OdsCartAttributes.rounded */
  @Prop({ reflect: true }) public rounded?: OdsCartRounded = odsCartDefaultAttributes.rounded;

  /** @see OdsCartAttributes.collapsed */
  @Prop({ reflect: true }) public collapsed?: boolean = odsCartDefaultAttributes.collapsed;

  /** @see OdsCartAttributes.collapsible */
  @Prop({ reflect: true }) public collapsible?: boolean = odsCartDefaultAttributes.collapsible;

  @Watch('collapsible')
  async collapsibleChanged(collapsible: boolean) {
    this.logger.log(`[cart-collapsible]`, 'value changed', { collapsible });
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
            this.controller.computeItemQuantity() ?
              undefined :
              <span>
                <slot name={'empty'}></slot>
              </span>
          }
        </span>
        <slot name={'footer'}></slot>
      </Host>
    )
  }
}

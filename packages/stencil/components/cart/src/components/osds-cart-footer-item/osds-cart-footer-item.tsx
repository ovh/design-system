import { Component, Element, Host, h } from '@stencil/core';
import {
  OdsCartFooterItem,
  OdsCartFooterItemController,
  OdsCartFooterItemEvents,
  OdsCartFooterItemMethods
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

@Component({
  tag: 'osds-cart-footer-item',
  styleUrl: 'osds-cart-footer-item.scss',
  shadow: true,
})
export class OsdsCartFooterItem implements OdsCartFooterItem<OdsStencilMethods<OdsCartFooterItemMethods>, OdsStencilEvents<OdsCartFooterItemEvents>> {
  controller: OdsCartFooterItemController = new OdsCartFooterItemController(this);

  @Element() el!: HTMLElement;

  render() {
    return (
      <Host>
        <div class={'cell-subhead-title'}>
          <slot name={'subhead'}></slot>
          <slot name={'title'}></slot>
        </div>
        <div class={'cell-price-extra'}>
          <slot name={'price'}></slot>
          <slot name={'extra'}></slot>
        </div>
      </Host>
    );
  }
}

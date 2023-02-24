import { Component, Element, Host, h } from '@stencil/core';
import { OdsCartTotal, OdsCartTotalController, OdsCartTotalEvents, OdsCartTotalMethods } from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

@Component({
  tag: 'osds-cart-total',
  styleUrl: 'osds-cart-total.scss',
  shadow: true,
})
export class OsdsCartTotal implements OdsCartTotal<OdsStencilMethods<OdsCartTotalMethods>, OdsStencilEvents<OdsCartTotalEvents>> {
  controller: OdsCartTotalController = new OdsCartTotalController(this);

  @Element() el!: HTMLElement;

  render() {
    return (
      <Host>
        <slot name={'total'}></slot>
        <slot name={'info'}></slot>
        <slot name={'price'}></slot>
        <slot name={'extra'}></slot>
      </Host>
    );
  }
}

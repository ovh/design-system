import { Component, Host, h } from '@stencil/core';
import {
  OdsCartItemOption,
  OdsCartItemOptionController,
  OdsCartItemOptionEvents,
  OdsCartItemOptionMethods
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 *
 */
@Component({
  tag: 'osds-cart-item-option',
  styleUrl: 'osds-cart-item-option.scss',
  shadow: true,
})
export class OsdsCartItemOption implements OdsCartItemOption<OdsStencilMethods<OdsCartItemOptionMethods>>, OdsStencilEvents<OdsCartItemOptionEvents> {
  controller: OdsCartItemOptionController = new OdsCartItemOptionController(this);

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

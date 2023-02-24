import { Component, Host, h } from '@stencil/core';
import { OdsCartFooter, OdsCartFooterController, OdsCartFooterEvents, OdsCartFooterMethods } from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

@Component({
  tag: 'osds-cart-footer',
  styleUrl: 'osds-cart-footer.scss',
  shadow: true,
})
export class OsdsCartFooter implements OdsCartFooter<OdsStencilMethods<OdsCartFooterMethods>, OdsStencilEvents<OdsCartFooterEvents>> {
  controller: OdsCartFooterController = new OdsCartFooterController(this);

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

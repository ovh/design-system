import { Component, Host, h } from '@stencil/core';
import { OdsCartSection, OdsCartSectionController, OdsCartSectionEvents, OdsCartSectionMethods } from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

@Component({
  tag: 'osds-cart-section',
  styleUrl: 'osds-cart-section.scss',
  shadow: true,
})
export class OsdsCartSection implements OdsCartSection<OdsStencilMethods<OdsCartSectionMethods>, OdsStencilEvents<OdsCartSectionEvents>> {
  controller: OdsCartSectionController = new OdsCartSectionController(this);

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}

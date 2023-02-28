import { Component, h, Host } from '@stencil/core';
import {
  OdsMenuItem,
  OdsMenuItemController,
  OdsMenuItemEvents,
  OdsMenuItemMethods,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';


@Component({
  tag: 'osds-menu-item',
  styleUrl: 'osds-menu-item.scss',
  shadow: true,
})
export class OsdsMenuItem implements OdsMenuItem<OdsStencilMethods<OdsMenuItemMethods>, OdsStencilEvents<OdsMenuItemEvents>> {
  controller: OdsMenuItemController = new OdsMenuItemController(this);

  render() {
    return (
      <Host>
        <slot/>
      </Host>
    );
  }
}

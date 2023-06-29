import { Component, Element, h, Host } from '@stencil/core';
import {
  OdsMenuItem,
  OdsMenuItemController,
  OdsMenuItemEvents,
  OdsMenuItemMethods,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { HTMLStencilElement } from '@stencil/core/internal';


@Component({
  tag: 'osds-menu-item',
  styleUrl: 'osds-menu-item.scss',
  shadow: true,
})
export class OsdsMenuItem implements OdsMenuItem<OdsStencilMethods<OdsMenuItemMethods>, OdsStencilEvents<OdsMenuItemEvents>> {
  controller: OdsMenuItemController = new OdsMenuItemController(this);

  @Element() el!: HTMLStencilElement;

  render() {
    return (
      <Host>
        <slot/>
      </Host>
    );
  }
}

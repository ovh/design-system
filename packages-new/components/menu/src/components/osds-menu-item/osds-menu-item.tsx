import { Component, Element, h, Host } from '@stencil/core';
import { OdsMenuItemController } from './core/controller'

import { HTMLStencilElement } from '@stencil/core/internal';
@Component({
  tag: 'osds-menu-item',
  styleUrl: 'osds-menu-item.scss',
  shadow: true,
})
export class OsdsMenuItem {
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

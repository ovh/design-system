import type { HTMLStencilElement } from '@stencil/core/internal';
import { Component, Element, h, Host } from '@stencil/core';

@Component({
  tag: 'osds-menu-item',
  styleUrl: 'osds-menu-item.scss',
  shadow: true,
})
export class OsdsMenuItem {
  @Element() el!: HTMLStencilElement;

  render() {
    return (
      <Host>
        <slot/>
      </Host>
    );
  }
}

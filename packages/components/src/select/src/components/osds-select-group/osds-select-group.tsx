import type { HTMLStencilElement } from '@stencil/core/internal';
import { Component, Element, Host, h } from '@stencil/core';

@Component({
  shadow: true,
  styleUrl: 'osds-select-group.scss',
  tag: 'osds-select-group',
})
export class OsdsSelectGroup {
  @Element() el!: HTMLStencilElement;

  render() {
    return (
      <Host
        aria-labelledby={ this.el.innerText }
        size="md">
        <slot></slot>
      </Host>
    );
  }
}

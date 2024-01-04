import type { HTMLStencilElement } from '@stencil/core/internal';
import { Component, Element, Host, h } from '@stencil/core';

@Component({
  tag: 'osds-select-group',
  styleUrl: 'osds-select-group.scss',
  shadow: true,
})
export class OsdsSelectGroup {

  @Element() el!: HTMLStencilElement;

  render() {
    return (
      <Host {...{
        'aria-labelledby': this.el.innerText,
        size: 'md',
      }}
      >
        <slot></slot>
      </Host>
    );
  }

}

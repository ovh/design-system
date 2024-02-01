import type { OsdsSelect } from '../osds-select/osds-select';
import type { HTMLStencilElement } from '@stencil/core/internal';
import { Component, Element, Host, State, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from '../osds-select/constants/default-attributes';

@Component({
  tag: 'osds-select-group',
  styleUrl: 'osds-select-group.scss',
  shadow: true,
})
export class OsdsSelectGroup {
  private selectParent: (HTMLStencilElement & OsdsSelect) | null = null;

  @Element() el!: HTMLStencilElement;

  @State() size = DEFAULT_ATTRIBUTE.size;

  componentWillLoad() {
    this.selectParent = this.el.closest('osds-select') as (HTMLStencilElement & OsdsSelect) | null;
    if (this.selectParent) {
      this.size = this.selectParent.size;
    }
  }

  render() {
    const { size } = this;

    return (
      <Host {...{
        'aria-labelledby': this.el.innerText,
        size,
      }}
      >
        <slot></slot>
      </Host>
    );
  }

}

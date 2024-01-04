import type { OsdsSelect } from '../osds-select/osds-select';
import type { HTMLStencilElement } from '@stencil/core/internal';
import type { ODS_SELECT_SIZE } from '../osds-select/constants/select-size';
import { Component, Element, Host, State, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from '../osds-select/constants/default-attributes';


/**
 * @slot (unnamed) - Select group content
 */
@Component({
  tag: 'osds-select-group',
  styleUrl: 'osds-select-group.scss',
  shadow: true,
})
export class OsdsSelectGroup {
  private selectParent: (HTMLStencilElement & OsdsSelect) | null = null;

  @Element() el!: HTMLStencilElement;

  /**
   * The size of the select option
   * @internal
   */
  @State() size: ODS_SELECT_SIZE = DEFAULT_ATTRIBUTE.size;

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

import { Component, Element, Host, h, State } from '@stencil/core';
import {
  odsSelectDefaultAttributes,
  OdsSelectGroup,
  OdsSelectGroupController,
  OdsSelectGroupEvents,
  OdsSelectGroupMethods,
} from '@ovhcloud/ods-core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { OsdsSelect } from '../osds-select/osds-select';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * @slot (unnamed) - Select group content
 */
@Component({
  tag: 'osds-select-group',
  styleUrl: 'osds-select-group.scss',
  shadow: true,
})
export class OsdsSelectGroup implements OdsSelectGroup<OdsStencilMethods<OdsSelectGroupMethods>, OdsStencilEvents<OdsSelectGroupEvents>> {
  controller: OdsSelectGroupController = new OdsSelectGroupController(this);
  private selectParent: (HTMLStencilElement & OsdsSelect) | null = null;

  @Element() el!: HTMLStencilElement;

  /**
   * The size of the select option
   * @internal
   */
  @State() size = odsSelectDefaultAttributes.size;

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

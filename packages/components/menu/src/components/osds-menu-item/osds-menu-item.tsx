import {Component, Host, h} from '@stencil/core';

@Component({
  tag: 'osds-menu-item',
  styleUrl: 'osds-menu-item.scss',
  shadow: true,
})
export class OsdsMenuItem {
  render() {
    return (
      <Host>
        <slot/>
      </Host>
    );
  }
}

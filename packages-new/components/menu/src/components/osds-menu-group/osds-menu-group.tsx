import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'osds-menu-group',
  styleUrl: 'osds-menu-group.scss',
  shadow: true,
})
export class OsdsMenuGroup {
  render() {
    return (
      <Host>
        <slot/>
      </Host>
    );
  }
}

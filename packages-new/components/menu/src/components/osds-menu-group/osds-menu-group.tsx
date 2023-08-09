import { Component, h, Host } from '@stencil/core';
import { OdsMenuGroupController } from './core/controller'

@Component({
  tag: 'osds-menu-group',
  styleUrl: 'osds-menu-group.scss',
  shadow: true,
})
export class OsdsMenuGroup {
  controller: OdsMenuGroupController = new OdsMenuGroupController(this);

  render() {
    return (
      <Host>
        <slot/>
      </Host>
    );
  }
}

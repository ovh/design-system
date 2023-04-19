import { Component, h, Host } from '@stencil/core';
import {
  OdsMenuGroup,
  OdsMenuGroupController,
  OdsMenuGroupEvents,
  OdsMenuGroupMethods,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';


@Component({
  tag: 'osds-menu-group',
  styleUrl: 'osds-menu-group.scss',
  shadow: true,
})
export class OsdsMenuGroup implements OdsMenuGroup<OdsStencilMethods<OdsMenuGroupMethods>, OdsStencilEvents<OdsMenuGroupEvents>> {
  controller: OdsMenuGroupController = new OdsMenuGroupController(this);

  render() {
    return (
      <Host>
        <slot/>
      </Host>
    );
  }
}

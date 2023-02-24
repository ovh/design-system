import { Component, Element, Host, h } from '@stencil/core';
import { OdsContentAddon, OdsContentAddonController, OdsContentAddonEvents, OdsContentAddonMethods } from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

@Component({
  tag: 'osds-content-addon',
  styleUrl: 'osds-content-addon.scss',
  shadow: true,
})
export class OsdsContentAddon implements OdsContentAddon<OdsStencilMethods<OdsContentAddonMethods>, OdsStencilEvents<OdsContentAddonEvents>> {
  controller: OdsContentAddonController = new OdsContentAddonController(this);

  @Element() el!: HTMLElement;

  render() {
    return (
      <Host>
        <span class="osds-content-addon">
          <slot name={'top'}></slot>
          <span class={'inset-grid'}>
            <slot name={'start'}></slot>
            <slot name={'main'}></slot>
            <slot name={'end'}></slot>
          </span>
          <slot name={'bottom'}></slot>

        </span>
      </Host>
    );
  }
}

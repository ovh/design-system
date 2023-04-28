import { Component, Element, h, Host } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { OdsTabBar, OdsTabBarController, OdsTabBarEvents, OdsTabBarMethods } from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * assemble different item in a bar
 */
@Component({
  tag: 'osds-tab-bar',
  styleUrl: 'osds-tab-bar.scss',
  shadow: true,
})
export class OsdsTabBar implements OdsTabBar<OdsStencilMethods<OdsTabBarMethods>, OdsStencilEvents<OdsTabBarEvents>> {
  /** @see OdsComponent.controller */
  controller: OdsTabBarController = new OdsTabBarController(this as OdsTabBar);

  /** @see OdsTabBarBehavior.el */
  @Element() el!: HTMLStencilElement;

  render() {
    return (
      <Host {...{
        role: 'tablist',
      }}>
        <slot />
      </Host>
    );
  }
}

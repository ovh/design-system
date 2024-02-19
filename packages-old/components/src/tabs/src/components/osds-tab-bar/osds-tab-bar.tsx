import type { OdsTabBarAttribute } from './interfaces/attributes';
import type { HTMLStencilElement } from '@stencil/core/internal';

import { Component, Element, Host, Prop, h } from '@stencil/core';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_TABS_SIZE } from '../osds-tabs/constants/tabs-size';

/**
 * assemble different item in a bar
 */
@Component({
  tag: 'osds-tab-bar',
  styleUrl: 'osds-tab-bar.scss',
  shadow: true,
})
export class OsdsTabBar implements OdsTabBarAttribute {

  /** @see OdsTabBarBehavior.el */
  @Element() el!: HTMLStencilElement;

  /** @see OdsTabsAttributes.size */
  @Prop({ reflect: true }) size?: ODS_TABS_SIZE = DEFAULT_ATTRIBUTE.size;

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

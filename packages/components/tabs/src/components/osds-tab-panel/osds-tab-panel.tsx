import type { HTMLStencilElement } from '@stencil/core/internal';
import type { OdsTabPanelAttribute } from './interfaces/attributes';
import { Component, Element, Host, Prop, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

/**
 * Panel with content that has to be displayed when active
 */
@Component({
  tag: 'osds-tab-panel',
  styleUrl: 'osds-tab-panel.scss',
  shadow: true,
})
export class OsdsTabsPanel implements OdsTabPanelAttribute {

  @Element() el!: HTMLStencilElement;

  /** @see OdsTabPanelAttributes.active */
  @Prop({ reflect: true }) active: boolean = DEFAULT_ATTRIBUTE.active;

  /** @see OdsTabPanelAttributes.name */
  @Prop({ reflect: true }) name: string = DEFAULT_ATTRIBUTE.name;

  render() {
    return (
      <Host
        {...{
          role: 'tabpanel',
        }}>
        <slot></slot>
      </Host>
    );
  }
}

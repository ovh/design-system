import { Component, Element, h, Host, Prop } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import {
  OdsTabPanel,
  OdsTabPanelController,
  odsTabPanelDefaultAttributes,
  OdsTabPanelEvents,
  OdsTabPanelMethods,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';


/**
 * Panel with content that has to be displayed when active
 */
@Component({
  tag: 'osds-tab-panel',
  styleUrl: 'osds-tab-panel.scss',
  shadow: true,
})
export class OsdsTabsPanel implements OdsTabPanel<OdsStencilMethods<OdsTabPanelMethods>, OdsStencilEvents<OdsTabPanelEvents>> {

  /** @see OdsComponent.controller */
  controller: OdsTabPanelController = new OdsTabPanelController(this as OdsTabPanel);

  @Element() el!: HTMLStencilElement;

  /** @see OdsTabPanelAttributes.active */
  @Prop({ reflect: true }) active: boolean = odsTabPanelDefaultAttributes.active;

  /** @see OdsTabPanelAttributes.name */
  @Prop({ reflect: true }) name: string = odsTabPanelDefaultAttributes.name;

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

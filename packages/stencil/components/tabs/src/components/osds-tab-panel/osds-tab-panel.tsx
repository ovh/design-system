import { Component, h, Prop, Element, Host, } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { OdsTabPanel, OdsTabsSize, OdsTabPanelEvents, OdsTabPanelMethods, OdsTabPanelController, odsTabPanelDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * 
 * @slot start - Fixed start Tab panel content
 * @slot (unnamed) - Tab panel content
 * @slot end - Fixed end Tab panel content
 */
@Component({
  tag: 'osds-tab-panel',
  styleUrl: 'osds-tab-panel.scss',
  shadow: true,
})
export class OsdsTabsPanel implements OdsTabPanel<OdsStencilMethods<OdsTabPanelMethods>, OdsStencilEvents<OdsTabPanelEvents>> {
  /** @see OdsComponent.controller */
  controller: OdsTabPanelController = new OdsTabPanelController(this as OdsTabPanel);

  /** @see OdsTabPanelBehavior.hostElement */
  @Element() hostElement!: HTMLStencilElement;

  /** @see OdsTabPanelAttributes.value */
  @Prop({ reflect: true, mutable: true }) public value?: string | number = odsTabPanelDefaultAttributes.value;
  /** @see OdsTabPanelAttributes.children */
  @Prop({ reflect: true }) public child?: Node = odsTabPanelDefaultAttributes.child;
  /** @see OdsTabPanelAttributes.classes */
  @Prop({ reflect: true }) public classes?: object = odsTabPanelDefaultAttributes.classes;
  /** @see OdsSelectAttributes.size */
  @Prop({ reflect: true }) size?: OdsTabsSize = odsTabPanelDefaultAttributes.size;

  /** @see OdsButtonBehavior.beforeRender */
  beforeRender(): void {
    //this.controller.vadivdateAttributes();
  }

  afterInit() {
    this.controller.afterInit();
  }

  componentDidLoad() {
    (async () => {
      this.afterInit();
    })();
  }

  render() {
    const {
      value,
    } = this;


    console.info('value : ', value)
    console.info('name : ', name)
    return (
        <Host {...{
          tabIndex: 2,
        }}>
            <div class="tabs-panel">
                <slot></slot>
            </div>
        </Host>
    );
  }
}

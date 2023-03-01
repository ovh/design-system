import { Component, h, Prop, Element, Host, } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { OdsTabsPanel, OdsTabsSize, OdsTabsPanelEvents, OdsTabsPanelMethods, OdsTabsPanelController, odsTabsPanelDefaultAttributes, } from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * @slot start - Fixed start Tabs panel content
 * @slot (unnamed) - Tabs panel content
 * @slot end - Fixed end Tabs panel content
 */
@Component({
  tag: 'osds-tabs-panel',
  styleUrl: 'osds-tabs-panel.scss',
  shadow: true,
})
export class OsdsTabsPanel implements OdsTabsPanel<OdsStencilMethods<OdsTabsPanelMethods>, OdsStencilEvents<OdsTabsPanelEvents>> {
  /** @see OdsComponent.controller */
  controller: OdsTabsPanelController = new OdsTabsPanelController(this as OdsTabsPanel);

  /** @see OdsTabsPanelBehavior.hostElement */
  @Element() hostElement!: HTMLStencilElement;

  /** @see OdsTabsPanelAttributes.value */
  @Prop({ reflect: true, mutable: true }) public value?: string | number = odsTabsPanelDefaultAttributes.value;
  /** @see OdsTabsPanelAttributes.children */
  @Prop({ reflect: true }) public child?: Node = odsTabsPanelDefaultAttributes.child;
  /** @see OdsTabsPanelAttributes.classes */
  @Prop({ reflect: true }) public classes?: object = odsTabsPanelDefaultAttributes.classes;
  /** @see OdsSelectAttributes.size */
  @Prop({ reflect: true }) size?: OdsTabsSize = odsTabsPanelDefaultAttributes.size;

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

    return (
        <Host {...{
          tabIndex: 2,
        }}>
            <div class="tabs-panel">
                <slot></slot> value : {value}
            </div>
        </Host>
    );
  }
}

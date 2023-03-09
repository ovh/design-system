import { Component, h, Prop, Element, State, Listen,  } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { OdsTabPanel, OdsTabsSize, OdsTabPanelEvents, OdsTabPanelClickEvent, OdsTabPanelMethods, OdsTabPanelController, odsTabPanelDefaultAttributes } from '@ovhcloud/ods-core';
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
  @Prop({ reflect: true, mutable: true }) public name?: string = odsTabPanelDefaultAttributes.name;
  /** @see OdsTabPanelAttributes.children */
  @Prop({ reflect: true }) public child?: Node = odsTabPanelDefaultAttributes.child;
  /** @see OdsTabPanelAttributes.classes */
  @Prop({ reflect: true }) public classes?: object = odsTabPanelDefaultAttributes.classes;
  /** @see OdsSelectAttributes.size */
  @Prop({ reflect: true }) size?: OdsTabsSize = odsTabPanelDefaultAttributes.size;

  @State() panelNameIndex2: any = '';

  @Listen('odsTabItemClickEvent', { target: 'document' })
  async todoCompletedHandler(event: CustomEvent<OdsTabPanelClickEvent>) {
    if (event.detail.value) {
      this.panelNameIndex2 = event.detail.value;
    }
  }

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
    const { name, panelNameIndex2 } = this;

    return (
      <div>
        { (name === panelNameIndex2) ? (
          <div class="tab-panel">
            <slot></slot>
          </div>
        ) : '' }
      </div>
    );
  }
}

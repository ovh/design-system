import { Component, h, Prop, Element, State, Listen,
  // Watch,
} from '@stencil/core';
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

  /** @see OdsTabPanelAttributes.name */
  @Prop({ reflect: true, mutable: true }) public name?: string = odsTabPanelDefaultAttributes.name;
  /** @see OdsSelectAttributes.size */
  @Prop({ reflect: true }) size?: OdsTabsSize = odsTabPanelDefaultAttributes.size;

  @State() panelNameIndex: any = '';
  @State() tabsId: any = '';

  @Listen('odsTabPanelClickEvent', { target: 'body', capture: true, })
  async todoCompletedHandler(event: CustomEvent<OdsTabPanelClickEvent>) {
    if (event.detail.value && event.detail.id && (event.detail.id === this.tabsId)) {
      this.panelNameIndex = event.detail.value;
    }
  }

  /** @see OdsButtonBehavior.beforeRender */
  beforeRender(): void {
    //this.controller.validateAttributes();
  }

  afterInit() {
    this.controller.afterInit();
  }

  componentDidLoad() {
    (async () => {
      this.afterInit();
    })();
  }

  componentWillLoad() {
    this.tabsId = this.hostElement.parentElement?.getAttribute('tabs-id')
  }

  render() {
    const { name, panelNameIndex,} = this;

    return (
      <div>
        { (name === panelNameIndex) ? (
          <div class="tab-panel">
            <slot></slot>
          </div>
        ) : '' }
      </div>
    );
  }
}

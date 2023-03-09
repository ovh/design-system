import { Component, h, Prop, Element, Host, Listen, State, Event, EventEmitter, Watch } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { OdsTabs, OdsTabsEvents, OdsTabPanelClickEvent, OdsTabItemClickEvent, OdsTabsSize, OdsTabsMethods, OdsTabsController, odsTabsDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

//import { HTMLStencilElement } from '@stencil/core/internal';
//import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * @slot start - Fixed start Tabs content
 * @slot (unnamed) - Tabs content
 * @slot end - Fixed end Tabs content
 */
@Component({
  tag: 'osds-tabs',
  styleUrl: 'osds-tabs.scss',
  shadow: true,
})
export class OsdsTabs implements OdsTabs<OdsStencilMethods<OdsTabsMethods>, OdsStencilEvents<OdsTabsEvents>> {
  /** @see OdsComponent.controller */
  controller: OdsTabsController = new OdsTabsController(this as OdsTabs);

  /** @see OdsTabsBehavior.hostElement */
  @Element() hostElement!: HTMLStencilElement;

  /** @see OdsTabsAttributes.center */
  @Prop({ reflect: true }) public center?: boolean = odsTabsDefaultAttributes.center;
  /** @see OdsTabsAttributes.activeKey */
  @Prop({ reflect: true, mutable: true }) public activeKey?: string = odsTabsDefaultAttributes.defaultActiveKey;
  /** @see OdsTabsAttributes.defaultActiveKey */
  @Prop({ reflect: true, mutable: true }) public defaultActiveKey?: string = odsTabsDefaultAttributes.defaultActiveKey;
  /** @see OdsTabsAttributes.items */
  @Prop({ reflect: true }) public items?: any = odsTabsDefaultAttributes.items;
  /** @see OdsSelectAttributes.size */
  @Prop({ reflect: true }) size?: OdsTabsSize = odsTabsDefaultAttributes.size;

  /** @see OdsTabsEvents.odsValueChange */
  @Event({
    eventName: 'odsTabPanelClickEvent',
  })
  odsTabPanelClickEvent!: EventEmitter<OdsTabPanelClickEvent>;

  private emitChange(value: any) {
    this.odsTabPanelClickEvent.emit({ value });
  }

  /**
   * The tabindex of the radio button.
   * @internal
   */
  @State() panelNameIndex: any = '';

  @Listen('odsTabItemClickEvent')
  handleValueChange(event: CustomEvent<OdsTabItemClickEvent>) {
    if (event.detail.value) {
      this.panelNameIndex = event.detail.value;
    }
  }

  @Watch('panelNameIndex')
  handleWatchPanelNameIndex(value: CustomEvent<OdsTabPanelClickEvent>) {
    this.emitChange(value);
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
    return (
      <Host
        {...{
          tabIndex: this.activeKey,
        }}
      >
        <div class="tabs">
          <div class="tabs-nav-wrap">
            <slot />
          </div>
          <slot />
        </div>
      </Host>
    );
  }
}

import { Component, h, Prop, Element, Host, Listen, Method, State, Event, EventEmitter, Watch } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { OdsTabs, OdsTabsEvents, OdsTabPanelClickEvent, OdsTabItemClickEvent, OdsTabsSize, OdsTabsMethods, OdsTabsController, odsTabsDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

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

  /** @see OdsTabsAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted?: boolean | undefined = odsTabsDefaultAttributes.contrasted;
  /** @see OdsTabsAttributes.panelActive */
  @Prop({ reflect: true }) public panelActive?: string = odsTabsDefaultAttributes.panelActive;
  /** @see OdsTabsAttributes.OdsTabsSize */
  @Prop({ reflect: true }) size?: OdsTabsSize = odsTabsDefaultAttributes.size;
  /** @see OdsTabsAttributes.tabsIds */
  @Prop({ reflect: true }) tabsId?: string = odsTabsDefaultAttributes.tabsId;

  /** @see OdsTabsEvents.odsTabPanelClickEvent */
  @Event({
    bubbles: false,
    composed: false,
  }) private odsTabPanelClickEvent!: EventEmitter<OdsTabPanelClickEvent>;
  
  private emitChange(value: any) {
    const event = this.odsTabPanelClickEvent.emit({ value, id: this.tabsId });
    event.preventDefault()
    event.stopPropagation()
  }

  /**
   * The tabindex of the radio button.
   * @internal
   */
  @State() panelNameIndex: any = '';

  /**
   * @internal
   * @see OdsSelectMethods.setInputTabindex
   */
  @Method()
  async setPanelNameIndex(value: string) {
    this.panelNameIndex = value;
  }

  @Listen('odsTabItemClickEvent')
  handleValueChange(event: CustomEvent<OdsTabItemClickEvent>) {
    if (event.detail.value) {
      this.panelNameIndex = event.detail.value;
    }
  }

  @Watch('panelNameIndex')
  handleWatchPanelNameIndex(value: CustomEvent<OdsTabPanelClickEvent>) {
    this.emitChange(value)
  }

  @Watch('panelActive')
  handleWatchPanelActive(value: string) {
    this.emitChange(value)
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
      if (this.panelActive) {
        this.emitChange(this.panelActive)
      }
    })();
  }

  render() {
    const { contrasted, } = this;
    return (
      <Host {...{
        onClick: (event : any) => {
          if (event.target?.panel && !event.target?.disabled) {
            this.emitChange(event.target?.panel)
          }
        }
      }}>
        <div class={`tabs ${contrasted ? `tabs-contrasted` : ``}`}>
          <div class="tabs-nav-wrap">
            <slot name="top" />
          </div>
          <slot/>
        </div>
      </Host>
    );
  }
}

import { Component, h, Prop, Element, State, Host, Method, Event, EventEmitter, Listen, } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import {
  OdsTabBarItem,
  OdsPanelValue,
  OdsTabPanelClickEvent,
  OdsTabItemClickEvent,
  OdsTabBarItemEvents,
  OdsTabsSize,
  OdsTabBarItemMethods,
  OdsTabBarItemController,
  OdsTabBarItemDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

// import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * @slot start - Fixed start Tabs content
 * @slot (unnamed) - Tabs content
 * @slot end - Fixed end Tabs content
 */
@Component({
  tag: 'osds-tab-bar-item',
  styleUrl: 'osds-tab-bar-item.scss',
  shadow: true,
})
export class OsdsTabBarItem implements OdsTabBarItem<OdsStencilMethods<OdsTabBarItemMethods>, OdsStencilEvents<OdsTabBarItemEvents>> {
  /** @see OdsTabBarItemComponent.controller */
  controller: OdsTabBarItemController = new OdsTabBarItemController(this as OdsTabBarItem);
  //controller: OdsTabBarItemController = new OdsTabBarItemController(this);
  tabitemizedComponent:  (HTMLStencilElement & OdsTabBarItemizable) | null = null;
  /** @see OdsTabBarItemBeha  vior.hostElement */
  @Element() hostElement!: HTMLStencilElement;

  @Prop({ reflect: true }) public panel?: any = OdsTabBarItemDefaultAttributes.panel;
  /** @see OdsTabsItemAttributes.size */
  @Prop({ reflect: true }) size?: OdsTabsSize = OdsTabBarItemDefaultAttributes.size;
  /** @see OdsTabsItemAttributes.checked */
  @Prop({ reflect: true, mutable: true }) checked: boolean = OdsTabBarItemDefaultAttributes.checked;

  /** @see OdsTabsEvents.odsValueChange */
  @Event() odsTabItemClickEvent!: EventEmitter<OdsTabItemClickEvent>;

  private emitChange(value: OdsPanelValue) {
    console.info('OsdsTabBarItem OdsTabItemClickEvent emitChange !')
    this.odsTabItemClickEvent.emit({value});
  }

  /**
   * The tabindex of the radio button.
   * @internal
   */
  @State() panelNameIndex: any = '';

  /**
   * The tabindex of the radio button.
   * @internal
   */
  @State() panelNameIndex2: any = '';

  @Listen('odsTabPanelClickEvent', { target: 'document' })
  handleValueChange(event: CustomEvent<OdsTabPanelClickEvent>) {
    if (event.detail.value) {
      this.panelNameIndex2 = event.detail.value;
    }
  }   
  /** 
   */
  @Method()
  async setPanelName(name: any) {
    this.panelNameIndex = name
    this.emitChange(name)
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

  onKeyPress = (event: any, panel: any) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      this.setPanelName(panel)
    }
  };

  render() {
    const {
      panel,
      panelNameIndex2,
    } = this
    return (
      <Host {...{
        onClick: () => this.setPanelName(panel)
      }}>
        <div 
          onKeyDown={event => this.onKeyPress(event, panel)}
          class={`tabs-tab ${panel === panelNameIndex2 ? `tabs-tab-active` : ``}`}
        >
          <div role="tab" tabIndex={panel}>
             <slot/>
          </div>
        </div>
      </Host>
    );
  }
}

interface OdsTabBarItemizable {
  checked: boolean;
}
  

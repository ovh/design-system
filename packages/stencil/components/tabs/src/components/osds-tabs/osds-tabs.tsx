import { Component, Element, Event, EventEmitter, h, Host, Listen, Prop, Watch } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import {
  OdsLogger,
  OdsTabBarItem,
  OdsTabItemSelectEventDetail,
  OdsTabPanel,
  OdsTabs,
  OdsTabsChangeEventDetail,
  OdsTabsController,
  odsTabsDefaultAttributes,
  OdsTabsEvents,
  OdsTabsMethods,
  OdsTabsSize,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * Main tabs component
 */
@Component({
  tag: 'osds-tabs',
  styleUrl: 'osds-tabs.scss',
  shadow: true,
})
export class OsdsTabs implements OdsTabs<OdsStencilMethods<OdsTabsMethods>, OdsStencilEvents<OdsTabsEvents>> {
  private logger = new OdsLogger('OsdsTabs');

  /** @see OdsComponent.controller */
  controller: OdsTabsController = new OdsTabsController(this as OdsTabs);

  /** @see OdsTabsBehavior.el */
  @Element() el!: HTMLStencilElement;

  /** @see OdsTabsAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted: boolean = odsTabsDefaultAttributes.contrasted;

  /** @see OdsTabsAttributes.panel */
  @Prop({ reflect: true, mutable: true }) public panel = odsTabsDefaultAttributes.panel;

  /** @see OdsTabsAttributes.size */
  @Prop({ reflect: true }) size: OdsTabsSize = odsTabsDefaultAttributes.size;

  /** @see OdsTabsEvents.odsTabsChanged */
  @Event() odsTabsChanged!: EventEmitter<OdsTabsChangeEventDetail>;

  /**
   * @see OdsTabsBehavior.handleTabItemSelection
   */
  @Listen('odsTabItemSelectEvent')
  handleTabItemSelection(event: CustomEvent<OdsTabItemSelectEventDetail>) {
    this.logger.log('[handleTabItemSelection]', { event });
    this.controller.changeActivePanel(event.detail.panel);
  }

  /**
   * send stencil event for ODS integrator
   * @see OdsTabsBehavior.emitChanged
   * @see OdsTabsController.changeActivePanel
   */
  emitChanged() {
    this.odsTabsChanged.emit({ panel: this.panel });
  }

  /**
   * retrieve tab items from the light DOM
   * @see OdsTabsBehavior.getTabItems
   * @see OdsTabsController.changeActivePanel
   */
  getTabItems() {
    return Array.from(this.el.querySelectorAll<OdsTabBarItem & HTMLElement>('osds-tab-bar-item'));
  }

  /**
   * retrieve tab panels from the light DOM
   * @see OdsTabsBehavior.getTabPanels
   * @see OdsTabsController.changeActivePanel
   */
  getTabPanels() {
    return Array.from(this.el.querySelectorAll<OdsTabPanel & HTMLElement>('osds-tab-panel'));
  }

  /**
   * when panel property changes, it will change the active panel
   */
  @Watch('panel')
  onPanelPropChange(panel: string) {
    this.controller.changeActivePanel(panel);
  }

  afterInit() {
    this.controller.afterInit();
  }

  componentDidLoad() {
    this.afterInit();
  }

  render() {
    return (
      <Host>
        <div class="tabs-nav-wrap">
          <slot name='top' />
        </div>
        <slot />
      </Host>
    );
  }
}

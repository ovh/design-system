import type { ODS_TABS_SIZE } from './constants/tabs-size';
import type { OsdsTabBarItem } from '../osds-tab-bar-item/osds-tab-bar-item';
import type { OdsTabsAttribute } from './interfaces/attributes';
import type { OdsTabsChangeEventDetail, OdsTabsEvent } from './interfaces/events';
import type { OdsTabItemSelectEventDetail } from '../osds-tab-bar-item/interfaces/events';
import type { EventEmitter } from '@stencil/core';
import type { HTMLStencilElement } from '@stencil/core/internal';
import { OdsLogger } from '@ovhcloud/ods-common-core';
import { Component, Element, Event, Host, Listen, Prop, Watch, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsTabsController } from './core/controller';
import { OsdsTabsPanel } from '../osds-tab-panel/osds-tab-panel';

/**
 * Main tabs component
 */
@Component({
  shadow: true,
  styleUrl: 'osds-tabs.scss',
  tag: 'osds-tabs',
})
export class OsdsTabs implements OdsTabsAttribute, OdsTabsEvent {
  private logger = new OdsLogger('OsdsTabs');

  /** @see OdsComponent.controller */
  controller: OdsTabsController = new OdsTabsController(this as OsdsTabs);

  /** @see OdsTabsBehavior.el */
  @Element() el!: HTMLStencilElement;

  /** @see OdsTabsAttributes.contrasted */
  @Prop({ reflect: true }) contrasted: boolean = DEFAULT_ATTRIBUTE.contrasted;

  /** @see OdsTabsAttributes.panel */
  @Prop({ mutable: true, reflect: true }) panel: string = DEFAULT_ATTRIBUTE.panel;

  /** @see OdsTabsAttributes.size */
  @Prop({ reflect: true }) size: ODS_TABS_SIZE = DEFAULT_ATTRIBUTE.size;

  /** @see OdsTabsEvents.odsTabsChanged */
  @Event() odsTabsChanged!: EventEmitter<OdsTabsChangeEventDetail>;

  /**
   * @see OdsTabsBehavior.handleTabItemSelection
   */
  @Listen('odsTabItemSelectEvent')
  handleTabItemSelection(event: CustomEvent<OdsTabItemSelectEventDetail>):void {
    this.logger.log('[handleTabItemSelection]', { event });
    this.controller.changeActivePanel(event.detail.panel);
  }

  /**
   * send stencil event for ODS integrator
   * @see OdsTabsBehavior.emitChanged
   * @see OdsTabsController.changeActivePanel
   */
  emitChanged(): void {
    this.odsTabsChanged.emit({ panel: this.panel });
  }

  /**
   * retrieve tab items from the light DOM
   * @see OdsTabsBehavior.getTabItems
   * @see OdsTabsController.changeActivePanel
   */
  getTabItems(): (Array<OsdsTabBarItem & HTMLElement>) {
    return Array.from(this.el.querySelectorAll<OsdsTabBarItem & HTMLElement>('osds-tab-bar-item'));
  }

  setTabItems(): void {
    this.controller.tabItems = this.getTabItems();
  }

  /**
   * retrieve tab panels from the light DOM
   * @see OdsTabsBehavior.getTabPanels
   * @see OdsTabsController.changeActivePanel
   */
  getTabPanels(): (Array<OsdsTabsPanel & HTMLElement>) {
    return Array.from(this.el.querySelectorAll<OsdsTabsPanel & HTMLElement>('osds-tab-panel'));
  }

  setTabPanels(): void {
    this.controller.tabPanels = this.getTabPanels();
  }

  handleArrowKey(event: KeyboardEvent): void {
    if (event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
      event.stopPropagation();
      this.controller.handleArrowKey(event);
    }
  }

  async handleSlotChange(): Promise<void> {
    this.setTabItems();
    this.setTabPanels();
  }

  /**
   * when panel property changes, it will change the active panel
   * @see OdsTabsBehavior.onPanelPropChange
   */
  @Watch('panel')
  onPanelPropChange(panel: string): void {
    this.controller.changeActivePanel(panel);
  }

  @Watch('contrasted')
  onContrastedPropChange(contrasted: boolean): void {
    this.controller.propagateContrastedToItems(contrasted);
  }

  beforeInit(): void {
    this.controller.beforeInit();
  }

  componentWillLoad(): void {
    this.beforeInit();
  }

  componentDidLoad(): void {
    this.controller.changeActivePanel(this.panel);
    this.setTabItems();
    this.setTabPanels();
  }

  render(): JSX.Element {
    return (
      <Host>
        <div class="tabs-nav-wrap"
             onKeyDown={ this.handleArrowKey.bind(this) }>
          <slot name='top'/>
        </div>
        <slot onSlotchange={(): Promise<void> => this.handleSlotChange() }/>
      </Host>
    );
  }
}

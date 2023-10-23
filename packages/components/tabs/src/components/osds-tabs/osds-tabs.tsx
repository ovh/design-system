import type {HTMLStencilElement} from '@stencil/core/internal';
import type {EventEmitter} from '@stencil/core';
import type {OdsTabsAttribute} from './interfaces/attributes';
import type {OdsTabsChangeEventDetail, OdsTabsEvent} from './interfaces/events';
import type {OdsTabItemSelectEventDetail} from '../osds-tab-bar-item/interfaces/events';
import {Component, Element, Event, Host, Listen, Prop, Watch, h} from '@stencil/core';
import {OdsLogger} from '@ovhcloud/ods-common-core';
import {DEFAULT_ATTRIBUTE} from './constants/default-attributes';
import {ODS_TABS_SIZE} from './constants/tabs-size';
import {OdsTabsController} from './core/controller';

/**
 * Main tabs component
 */
@Component({
  tag: 'osds-tabs',
  styleUrl: 'osds-tabs.scss',
  shadow: true,
})
export class OsdsTabs implements OdsTabsAttribute, OdsTabsEvent {
  private logger = new OdsLogger('OsdsTabs');

  /** @see OdsComponent.controller */
  controller: OdsTabsController = new OdsTabsController(this as OsdsTabs);

  /** @see OdsTabsBehavior.el */
  @Element() el!: HTMLStencilElement;

  /** @see OdsTabsAttributes.contrasted */
  @Prop({reflect: true}) contrasted: boolean = DEFAULT_ATTRIBUTE.contrasted;

  /** @see OdsTabsAttributes.panel */
  @Prop({reflect: true, mutable: true}) panel: string = DEFAULT_ATTRIBUTE.panel;

  /** @see OdsTabsAttributes.size */
  @Prop({reflect: true}) size: ODS_TABS_SIZE = DEFAULT_ATTRIBUTE.size;

  /** @see OdsTabsEvents.odsTabsChanged */
  @Event() odsTabsChanged!: EventEmitter<OdsTabsChangeEventDetail>;

  /**
   * @see OdsTabsBehavior.handleTabItemSelection
   */
  @Listen('odsTabItemSelectEvent')
  handleTabItemSelection(event: CustomEvent<OdsTabItemSelectEventDetail>) {
    this.logger.log('[handleTabItemSelection]', {event});
    this.controller.changeActivePanel(event.detail.panel);
  }

  /**
   * send stencil event for ODS integrator
   * @see OdsTabsBehavior.emitChanged
   * @see OdsTabsController.changeActivePanel
   */
  emitChanged() {
    this.odsTabsChanged.emit({panel: this.panel});
  }

  /**
   * retrieve tab items from the light DOM
   * @see OdsTabsBehavior.getTabItems
   * @see OdsTabsController.changeActivePanel
   */
  getTabItems() {
    return this.controller.getTabItems('osds-tab-bar-item');
  }

  /**
   * retrieve tab panels from the light DOM
   * @see OdsTabsBehavior.getTabPanels
   * @see OdsTabsController.changeActivePanel
   */
  getTabPanels() {
    return this.controller.getTabPanels('osds-tab-panel');
  }

  /**
   * when panel property changes, it will change the active panel
   * @see OdsTabsBehavior.onPanelPropChange
   */
  @Watch('panel')
  onPanelPropChange(panel: string) {
    this.controller.changeActivePanel(panel);
  }

  @Watch('contrasted')
  onContrastedPropChange(contrasted: boolean) {
    this.controller.propagateContrastedToItems(contrasted);
  }

  beforeInit() {
    this.controller.beforeInit();
  }

  componentWillLoad() {
    this.beforeInit();
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

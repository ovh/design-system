import type {HTMLStencilElement} from '@stencil/core/internal';
import type {EventEmitter} from '@stencil/core';
import type {OdsTabBarItemAttribute} from './interfaces/attributes';
import type {OdsTabBarItemEvent, OdsTabItemSelectEventDetail} from './interfaces/events';
import {Component, Element, Event, Host, Listen, Method, Prop, h} from '@stencil/core';
import {OdsLogger} from '@ovhcloud/ods-common-core';
import {DEFAULT_ATTRIBUTE} from './constants/default-attributes';
import {OdsTabBarItemController} from './core/controller';

/**
 * An Item that is part of the tab bar
 */
@Component({
  tag: 'osds-tab-bar-item',
  styleUrl: 'osds-tab-bar-item.scss',
  shadow: true,
})
export class OsdsTabBarItem implements OdsTabBarItemAttribute, OdsTabBarItemEvent {
  private logger = new OdsLogger('OsdsTabBarItem');

  /** @see OdsComponent.controller */
  controller: OdsTabBarItemController = new OdsTabBarItemController(this as OsdsTabBarItem);

  /** @see OdsTabBarItemBehavior.el */
  @Element() el!: HTMLStencilElement;

  /** @see OdsTabBarItemAttributes.active */
  @Prop({reflect: true}) active: boolean = DEFAULT_ATTRIBUTE.active;

  /** @see OdsTabBarItemAttributes.contrasted */
  @Prop({reflect: true, mutable: true}) contrasted: boolean = DEFAULT_ATTRIBUTE.contrasted;

  /** @see OdsTabBarItemAttributes.disabled */
  @Prop({reflect: true}) disabled: boolean = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsTabBarItemAttributes.panel */
  @Prop({reflect: true}) panel: string = DEFAULT_ATTRIBUTE.panel;

  /** @see OdsTabBarItemEvents.odsTabItemSelectEvent */
  @Event() odsTabItemSelectEvent!: EventEmitter<OdsTabItemSelectEventDetail>;


  /** @see OdsTabBarItemBehavior.handleClick */
  @Listen('click')
  handleClick() {
    if (!this.disabled) {
      this.logger.log('[handleClick]', {name: this.panel});
      this.select();
    }
  }

  /** @see OdsTabBarItemBehavior.handlePanelKeyEvent */
  handlePanelKeyEvent(event: KeyboardEvent) {
    this.logger.log('[handlePanelKeyEvent]', {event});
    this.controller.handlePanelKeyEvent(event);
  }

  /**
   * select the panel by emitting
   * @see OdsTabBarItemBehavior.select
   */
  @Method()
  async select() {
    this.odsTabItemSelectEvent.emit({panel: this.panel, tabItem: this});
  }

  beforeInit() {
    const tabs = this.el.closest('osds-tabs');
    if (tabs && tabs.hasAttribute('contrasted')) {
      this.contrasted = true;
    }
  }

  componentWillLoad() {
    this.beforeInit();
  }

  getTabIndex() {
    return this.controller.getTabIndex(this.el.getAttribute('tabindex') || 0);
  }

  render() {
    return (
      <Host
        {...{
          role: 'tab',
          tabIndex: this.getTabIndex(),
          active: this.active,
          onKeyDown: (event: KeyboardEvent) => this.handlePanelKeyEvent(event),
        }}>
        <slot />
      </Host>
    );
  }
}

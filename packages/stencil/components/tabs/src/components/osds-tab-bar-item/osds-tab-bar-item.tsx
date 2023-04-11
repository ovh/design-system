import { Component, Element, Event, EventEmitter, h, Host, Listen, Method, Prop } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import {
  OdsLogger,
  OdsTabBarItem,
  OdsTabBarItemController,
  odsTabBarItemDefaultAttributes,
  OdsTabBarItemEvents,
  OdsTabBarItemMethods,
  OdsTabItemSelectEventDetail,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * An Item that is part of the tab bar
 */
@Component({
  tag: 'osds-tab-bar-item',
  styleUrl: 'osds-tab-bar-item.scss',
  shadow: true,
})
export class OsdsTabBarItem implements OdsTabBarItem<OdsStencilMethods<OdsTabBarItemMethods>, OdsStencilEvents<OdsTabBarItemEvents>> {
  private logger = new OdsLogger('OsdsTabBarItem');

  /** @see OdsComponent.controller */
  controller: OdsTabBarItemController = new OdsTabBarItemController(this as OdsTabBarItem);

  /** @see OdsTabBarItemBehavior.el */
  @Element() el!: HTMLStencilElement;

  /** @see OdsTabBarItemAttributes.panel */
  @Prop({ reflect: true }) panel: string = odsTabBarItemDefaultAttributes.panel;

  /** @see OdsTabBarItemAttributes.active */
  @Prop({ reflect: true }) active: boolean = odsTabBarItemDefaultAttributes.active;

  /** @see OdsTabBarItemAttributes.disabled */
  @Prop({ reflect: true }) disabled: boolean = odsTabBarItemDefaultAttributes.disabled;

  /** @see OdsTabBarItemAttributes.contrasted */
  @Prop({ reflect: true, mutable: true }) contrasted = false;

  /** @see OdsTabBarItemEvents.odsTabItemSelectEvent */
  @Event() odsTabItemSelectEvent!: EventEmitter<OdsTabItemSelectEventDetail>;


  /** @see OdsTabBarItemBehavior.handleClick */
  @Listen('click')
  handleClick() {
    if (!this.disabled) {
      this.logger.log('[handleClick]', { name: this.panel });
      this.select();
    }
  }

  /** @see OdsTabBarItemBehavior.handlePanelKeyEvent */
  handlePanelKeyEvent(event: KeyboardEvent) {
    this.logger.log('[handlePanelKeyEvent]', { event });
    this.controller.handlePanelKeyEvent(event);
  }

  /**
   * select the panel by emitting
   * @see OdsTabBarItemBehavior.select
   */
  @Method()
  select() {
    this.odsTabItemSelectEvent.emit({ panel: this.panel, tabItem: this });
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

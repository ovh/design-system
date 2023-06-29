import { Component, Prop, h, Host, Watch, Element, Listen, State } from '@stencil/core';
import {
  OdsMenu,
  OdsMenuController,
  OdsMenuEvents,
  OdsMenuItem,
  OdsMenuMethods,
  odsMenuDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { ocdkDefineCustomElements, ocdkIsSurface, OcdkSurface, } from '@ovhcloud/ods-cdk';
import { HTMLStencilElement } from '@stencil/core/internal';

ocdkDefineCustomElements();

@Component({
  tag: 'osds-menu',
  styleUrl: 'osds-menu.scss',
  shadow: true,
})
export class OsdsMenu implements OdsMenu<OdsStencilMethods<OdsMenuMethods>, OdsStencilEvents<OdsMenuEvents>> {
  controller: OdsMenuController = new OdsMenuController(this as OdsMenu);
  title: HTMLElement | null = null;
  anchor!: HTMLDivElement;
  surface: OcdkSurface | undefined = undefined;

  @Element() el!: HTMLStencilElement;

  @Prop({ reflect: true }) public disabled: boolean | undefined = odsMenuDefaultAttributes.disabled;

  @State() tabindex = 0;

  @Watch('disabled')
  propagateDisabledToChild(disabled: boolean | undefined): void {
    this.controller.propagateDisabledToChild(disabled);
  }

  @Listen('click', { target: 'window' })
  checkForClickOutside(event: any) {
    this.controller.checkForClickOutside(event);
  }

  handleKeyDown(event: KeyboardEvent): void {
    event.stopPropagation();
    this.controller.handleKeyDown(event);
  }

  componentDidRender() {
    this.title = this.el.querySelector('[slot=menu-title]');
  }

  handleTriggerClick() {
    this.controller.handleTriggerClick();
  }

  syncReferences() {
    this.controller.syncReferences()
  }

  afterInit() {
    this.controller.afterInit();
  }

  async componentDidLoad() {
    this.setMenuItemsButtons();
    this.afterInit();
  }

  setMenuItemsButtons() {
    this.controller.menuItems = this.getMenuItemButtonList();
  }

  getMenuItemButtonList(): (HTMLElement & OdsMenuItem)[] {
    return Array.from(this.el.querySelectorAll<OdsMenuItem & HTMLElement>('osds-menu-item > osds-button'));
  }

  render() {
    return (
      <Host>
        <div class="trigger"
             onClick={this.handleTriggerClick.bind(this)}
             onKeyDown={this.handleKeyDown.bind(this)}
             ref={(el?: HTMLElement | null) => {
          this.anchor = el as HTMLDivElement;
          this.syncReferences()
        }}>
            <slot name={'menu-title'} />
        </div>
        <ocdk-surface
          onKeyDown={this.handleKeyDown.bind(this)}
          ref={(el: HTMLElement) => {
          if (ocdkIsSurface(el)) {
            this.surface = el as OcdkSurface;
            this.syncReferences()
          }
        }}>
          <slot/>
        </ocdk-surface>
      </Host>
    )
  }
}

import type { HTMLStencilElement } from '@stencil/core/internal';
import type { OdsMenuAttribute } from './interfaces/attributes';
import type { OsdsMenuItem } from '../osds-menu-item/osds-menu-item';
import { ocdkDefineCustomElements, ocdkIsSurface, OcdkSurface, } from '@ovhcloud/ods-cdk';
import { Component, Listen, Prop, h, Host, Element, Watch } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsMenuController } from './core/controller';

ocdkDefineCustomElements();

@Component({
  tag: 'osds-menu',
  styleUrl: 'osds-menu.scss',
  shadow: true,
})
export class OsdsMenu implements OdsMenuAttribute {
  anchor!: HTMLDivElement;
  controller: OdsMenuController = new OdsMenuController(this);
  surface: OcdkSurface | undefined = undefined;

  @Element() el!: HTMLStencilElement;

  @Prop({ reflect: true }) public disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;

  get title(): HTMLElement | null {
    return this.el.querySelector('[slot=menu-title]')
  }

  componentDidLoad() {
    this.setMenuItemsButtons();
    this.controller.afterInit();
  }

  @Watch('disabled')
  propagateDisabledToChild(disabled: boolean | undefined): void {
    this.controller.propagateDisabledToChild(disabled);
  }

  @Listen('click', { target: 'window' })
  checkForClickOutside(event: any) {
    this.controller.checkForClickOutside(event);
  }

  getMenuItemButtonList(): (HTMLElement & OsdsMenuItem)[] {
    return Array.from(this.el.querySelectorAll<OsdsMenuItem & HTMLElement>('osds-menu-item > osds-button'));
  }

  handleKeyDown(event: KeyboardEvent): void {
    event.stopPropagation();
    this.controller.handleKeyDown(event);
  }

  handleTriggerClick() {
    this.controller.handleTriggerClick();
  }

  setMenuItemsButtons() {
    this.controller.menuItems = this.getMenuItemButtonList();
  }

  syncReferences() {
    this.controller.syncReferences()
  }

  render() {
    return (
      <Host>
        <div class="trigger"
             onClick={ this.handleTriggerClick.bind(this) }
             onKeyDown={ this.handleKeyDown.bind(this) }
             ref={ (el?: HTMLElement | null) => {
               this.anchor = el as HTMLDivElement;
               this.syncReferences()
             }}>
          <slot name={'menu-title'} />
        </div>

        <ocdk-surface onKeyDown={ this.handleKeyDown.bind(this) }
                      ref={ (el: HTMLElement) => {
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

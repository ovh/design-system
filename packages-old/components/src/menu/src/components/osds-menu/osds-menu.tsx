import type { OdsMenuAttribute } from './interfaces/attributes';
import type { OsdsMenuItem } from '../osds-menu-item/osds-menu-item';
import type { OcdkSurface } from '@ovhcloud/ods-cdk';
import type { HTMLStencilElement } from '@stencil/core/internal';
import { ocdkDefineCustomElements, ocdkIsSurface } from '@ovhcloud/ods-cdk';
import { Component, Element, Host, Listen, Prop, Watch, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsMenuController } from './core/controller';

ocdkDefineCustomElements();

@Component({
  shadow: true,
  styleUrl: 'osds-menu.scss',
  tag: 'osds-menu',
})
export class OsdsMenu implements OdsMenuAttribute {
  anchor!: HTMLDivElement;
  controller: OdsMenuController = new OdsMenuController(this);
  surface: OcdkSurface | undefined = undefined;

  @Element() el!: HTMLStencilElement;

  @Prop({ reflect: true }) public disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;

  get title(): HTMLElement | null {
    return this.el.querySelector('[slot=menu-title]');
  }

  componentDidLoad(): void {
    this.setMenuItemsButtons();
    this.controller.afterInit();
  }

  @Watch('disabled')
  propagateDisabledToChild(disabled: boolean | undefined): void {
    this.controller.propagateDisabledToChild(disabled);
  }

  @Listen('click', { target: 'window' })
  checkForClickOutside(event: Event): void {
    this.controller.checkForClickOutside(event);
  }

  getMenuItemButtonList(): (HTMLElement & OsdsMenuItem)[] {
    return Array.from(this.el.querySelectorAll<OsdsMenuItem & HTMLElement>('osds-menu-item > osds-button'));
  }

  handleKeyDown(event: KeyboardEvent): void {
    event.stopPropagation();
    if(['Enter','NumpadEnter','Space'].indexOf(event.code) > -1) {
      event.preventDefault();
    }
    this.controller.handleKeyDown(event);
  }

  handleTriggerClick(): void {
    this.controller.handleTriggerClick();
  }

  setMenuItemsButtons(): void {
    this.controller.menuItems = this.getMenuItemButtonList();
  }

  syncReferences(): void {
    this.controller.syncReferences();
  }

  render(): JSX.Element {
    return (
      <Host>
        <div class="trigger"
          onClick={ this.handleTriggerClick.bind(this) }
          onKeyDown={ this.handleKeyDown.bind(this) }
          ref={ (el?: HTMLElement | null): void => {
            this.anchor = el as HTMLDivElement;
            this.syncReferences();
          }}>
          <slot name={'menu-title'} />
        </div>

        <ocdk-surface onKeyDown={ this.handleKeyDown.bind(this) }
          ref={ (el: HTMLElement): void => {
            if (ocdkIsSurface(el)) {
              this.surface = el as OcdkSurface;
              this.syncReferences();
            }
          }}>
          <slot/>
        </ocdk-surface>
      </Host>
    );
  }
}

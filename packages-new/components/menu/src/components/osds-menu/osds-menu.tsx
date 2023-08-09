import { Component, Prop, h, Host, Watch, Element, Listen, State } from '@stencil/core';
import { OdsMenuController } from './core/controller';
import { OdsMenuAttributes } from './interfaces/attributes';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OsdsMenuItem } from '../osds-menu-item/osds-menu-item'
import { ocdkDefineCustomElements, ocdkIsSurface, OcdkSurface, } from '@ovhcloud/ods-cdk';
import { HTMLStencilElement } from '@stencil/core/internal';

ocdkDefineCustomElements();

@Component({
  tag: 'osds-menu',
  styleUrl: 'osds-menu.scss',
  shadow: true,
})
export class OsdsMenu implements OdsMenuAttributes {
  controller: OdsMenuController = new OdsMenuController(this);
  title: HTMLElement | null = null;
  anchor!: HTMLDivElement;
  surface: OcdkSurface | undefined = undefined;

  @Element() el!: HTMLStencilElement;

  @Prop({ reflect: true }) public disabled: boolean | undefined = DEFAULT_ATTRIBUTE.disabled;

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

  getMenuItemButtonList(): (HTMLElement & OsdsMenuItem)[] {
    return Array.from(this.el.querySelectorAll<OsdsMenuItem & HTMLElement>('osds-menu-item > osds-button'));
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

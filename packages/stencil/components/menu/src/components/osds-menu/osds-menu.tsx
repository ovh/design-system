import { Component, Prop, h, Host, Watch, Element, Listen } from '@stencil/core';
import {
  OdsMenu,
  OdsMenuController,
  OdsMenuEvents,
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

  @Watch('disabled')
  propagateDisabledToChild(disabled: boolean | undefined): void {
    this.controller.propagateDisabledToChild(disabled);
  }

  @Listen('click', { target: 'window' })
  checkForClickOutside(event: any) {
    this.controller.checkForClickOutside(event);
  }

  componentDidRender() {
    this.title = this.el.querySelector('[slot=menu-title]');
  }

  handleTriggerClick() {
    this.controller.handleTriggerClick();
  }

  handleTriggerKey(event: KeyboardEvent) {
    this.controller.handleTriggerKey(event);
  }

  handleSurfaceKey(event: KeyboardEvent) {
    this.controller.handleSurfaceKey(event);
  }

  syncReferences() {
    this.controller.syncReferences()
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
        <div class="trigger"
             onClick={this.handleTriggerClick.bind(this)}
             onKeyUp={this.handleTriggerKey.bind(this)}
             ref={(el?: HTMLElement | null) => {
          this.anchor = el as HTMLDivElement;
          this.syncReferences()
        }}>
            <slot name={'menu-title'} />
        </div>
        <ocdk-surface
          onKeyUp={this.handleSurfaceKey.bind(this)}
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

import { Component, h, Host, Element, Listen } from '@stencil/core';
import {
  OdsPopover,
  OdsPopoverController,
  OdsPopoverEvents,
  OdsPopoverMethods,
  odsPopoverDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { ocdkDefineCustomElements, ocdkIsSurface, OcdkSurface, } from '@ovhcloud/ods-cdk';
import { HTMLStencilElement } from '@stencil/core/internal';

ocdkDefineCustomElements();

@Component({
  tag: 'osds-popover',
  styleUrl: 'osds-popover.scss',
  shadow: true,
})
export class OsdsPopover implements OdsPopover<OdsStencilMethods<OdsPopoverMethods>, OdsStencilEvents<OdsPopoverEvents>> {
  controller: OdsPopoverController = new OdsPopoverController(this as OdsPopover);
  title: HTMLElement | null = null;
  anchor!: HTMLDivElement;
  surface: OcdkSurface | undefined = undefined;

  @Element() el!: HTMLStencilElement;

  @Listen('click', { target: 'window' })
  checkForClickOutside(event: any) {
    this.controller.checkForClickOutside(event);
  }

  componentDidRender() {
    this.title = this.el.querySelector('[slot=popover-trigger]');
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
        <div className="trigger"
             onClick={this.handleTriggerClick.bind(this)}
             onKeyUp={this.handleTriggerKey.bind(this)}
             ref={(el?: HTMLElement | null) => {
               this.anchor = el as HTMLDivElement;
               this.syncReferences()
             }}>
          <slot name={'popover-trigger'} />
        </div>
        <ocdk-surface
          onKeyUp={this.handleSurfaceKey.bind(this)}
          ref={(el: HTMLElement) => {
            if (ocdkIsSurface(el)) {
              this.surface = el as OcdkSurface;
              this.syncReferences()
            }
          }}>
          <slot />
        </ocdk-surface>
      </Host>
    )
  }
}

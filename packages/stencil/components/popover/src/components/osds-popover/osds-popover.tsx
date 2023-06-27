import { Component, Element, Host, h, Listen, Method } from '@stencil/core';
import {
  OdsPopover,
  OdsPopoverController,
  OdsPopoverEvents,
  OdsPopoverMethods,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { ocdkDefineCustomElements, ocdkIsSurface, OcdkSurface, } from '@ovhcloud/ods-cdk';

ocdkDefineCustomElements();

/**
 * @slot (unnamed) - Popover content
 */
@Component({
  tag: 'osds-popover',
  styleUrl: 'osds-popover.scss',
  shadow: true
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

  /**
   * @internal
   * @see OdsPopoverMethods.closeSurface
   */
  @Method()
  async closeSurface() {
    this.controller.closeSurface();
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

  render() {
    return (
      <Host role='dialog'>
        <div class="trigger"
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

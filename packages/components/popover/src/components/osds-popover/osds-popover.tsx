import { OcdkSurface, ocdkDefineCustomElements, ocdkIsSurface } from '@ovhcloud/ods-cdk';
import { Component, Element, Host, Listen, Method, h } from '@stencil/core';
import type { HTMLStencilElement } from '@stencil/core/internal';

import { OdsPopoverController } from './core/controller';
import type { OdsPopoverMethod } from './interfaces/methods';

ocdkDefineCustomElements();

/**
 * @slot (unnamed) - Popover content
 */
@Component({
  tag: 'osds-popover',
  styleUrl: 'osds-popover.scss',
  shadow: true,
})
export class OsdsPopover implements OdsPopoverMethod {
  anchor!: HTMLDivElement;
  controller: OdsPopoverController = new OdsPopoverController(this);
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
    this.controller.syncReferences();
  }

  render() {
    return (
      <Host role='dialog'>
        <div class="trigger"
          onClick={this.handleTriggerClick.bind(this)}
          onKeyUp={this.handleTriggerKey.bind(this)}
          ref={(el?: HTMLElement | null) => {
            this.anchor = el as HTMLDivElement;
            this.syncReferences();
          }}>
          <slot name={'popover-trigger'} />
        </div>
        <ocdk-surface
          onKeyUp={this.handleSurfaceKey.bind(this)}
          ref={(el: HTMLElement) => {
            if (ocdkIsSurface(el)) {
              this.surface = el as OcdkSurface;
              this.syncReferences();
            }
          }}>
          <slot />
        </ocdk-surface>
      </Host>
    );
  }
}

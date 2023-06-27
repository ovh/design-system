import { Component, Element, Host, h } from '@stencil/core';
import {
  OdsPopoverContent,
  OdsPopoverContentController,
  OdsPopoverContentEvents,
  OdsPopoverContentMethods,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * @slot (unnamed) - PopoverContent content
 */
@Component({
  tag: 'osds-popover-content',
  styleUrl: 'osds-popover-content.scss',
  shadow: true
})
export class OsdsPopoverContent implements OdsPopoverContent<OdsStencilMethods<OdsPopoverContentMethods>, OdsStencilEvents<OdsPopoverContentEvents>> {
  controller: OdsPopoverContentController = new OdsPopoverContentController(this);
  @Element() el!: HTMLElement;

  render() {

    return (
      <Host>
        <div>
          <slot name={'popover-header'} />
        </div>
        <div>
          <slot />
        </div>
        <div>
          <slot name={'popover-footer'} />
        </div>
      </Host>
    );
  }
}

import { Component, Host, h } from '@stencil/core';

/**
 * @slot (unnamed) - PopoverContent content
 */
@Component({
  tag: 'osds-popover-content',
  styleUrl: 'osds-popover-content.scss',
  shadow: true,
})
export class OsdsPopoverContent {
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

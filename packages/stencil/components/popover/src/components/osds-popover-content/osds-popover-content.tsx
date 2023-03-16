import { Component, Prop, h, Host, Watch, Element, Listen } from '@stencil/core';
import {
  OdsPopoverContent,
  OdsPopoverContentController,
  OdsPopoverContentEvents,
  OdsPopoverContentMethods,
  odsPopoverContentDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { ocdkDefineCustomElements, ocdkIsSurface, OcdkSurface, } from '@ovhcloud/ods-cdk';
import { HTMLStencilElement } from '@stencil/core/internal';

ocdkDefineCustomElements();

@Component({
  tag: 'osds-popover-content',
  styleUrl: 'osds-popover-content.scss',
  shadow: true,
})
export class OsdsPopover implements OdsPopoverContent<OdsStencilMethods<OdsPopoverContentMethods>, OdsStencilEvents<OdsPopoverContentEvents>> {
  controller: OdsPopoverContentController = new OdsPopoverContentController(this as OdsPopoverContent);

  @Element() el!: HTMLStencilElement;

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
    )
  }
}

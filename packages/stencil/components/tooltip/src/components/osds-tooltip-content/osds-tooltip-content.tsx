import { Component, Element, Host, h } from '@stencil/core';
import {
  OdsTooltipContent,
  OdsTooltipContentController,
  OdsTooltipContentEvents,
  OdsTooltipContentMethods,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * @slot (tooltip-content) - The Tooltip content
 */
@Component({
  tag: 'osds-tooltip-content',
  styleUrl: 'osds-tooltip-content.scss',
  shadow: true
})
export class OsdsTooltipContent implements OdsTooltipContent<OdsStencilMethods<OdsTooltipContentMethods>, OdsStencilEvents<OdsTooltipContentEvents>> {
  controller: OdsTooltipContentController = new OdsTooltipContentController(this);
  @Element() el!: HTMLElement;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}

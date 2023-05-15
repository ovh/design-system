import { Component, Element, Host, h } from '@stencil/core';
import {
  OdsTooltipContent,
  OdsTooltipContentController,
  OdsTooltipContentEvents,
  OdsTooltipContentMethods,
  // odsTooltipContentDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * @slot (unnamed) - TooltipContent content
 */
@Component({
  tag: 'osds-tooltip-content',
  styleUrl: 'osds-tooltip-content.scss',
  shadow: true
})
export class OsdsTooltipContent implements OdsTooltipContent<OdsStencilMethods<OdsTooltipContentMethods>, OdsStencilEvents<OdsTooltipContentEvents>> {
  controller: OdsTooltipContentController = new OdsTooltipContentController(this);
  @Element() el!: HTMLElement;

  // Component properties as @Prop
  // ex: @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsTooltipContentDefaultAttributes.color;

  /**
   * @see OdsTooltipContentBehavior.beforeRender
   */
  beforeRender(): void {

  }

  componentWillRender(): void {

  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}

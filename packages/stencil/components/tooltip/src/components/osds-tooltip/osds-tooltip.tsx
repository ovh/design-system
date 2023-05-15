import { Component, Element, Host, h } from '@stencil/core';
import {
  OdsTooltip,
  OdsTooltipController,
  OdsTooltipEvents,
  OdsTooltipMethods,
  // odsTooltipDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * @slot (unnamed) - Tooltip content
 */
@Component({
  tag: 'osds-tooltip',
  styleUrl: 'osds-tooltip.scss',
  shadow: true
})
export class OsdsTooltip implements OdsTooltip<OdsStencilMethods<OdsTooltipMethods>, OdsStencilEvents<OdsTooltipEvents>> {
  controller: OdsTooltipController = new OdsTooltipController(this);
  @Element() el!: HTMLElement;

  // Component properties as @Prop
  // ex: @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsTooltipDefaultAttributes.color;

  /**
   * @see OdsTooltipBehavior.beforeRender
   */
  beforeRender(): void {

  }

  componentWillRender(): void {

  }

  render() {

    return (
      <Host>

        {/* UI template */}

      </Host>
    );
  }
}

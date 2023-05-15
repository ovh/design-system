import { Component, Element, Host, h } from '@stencil/core';
import {
  OdsTooltip,
  OdsTooltipController,
  OdsTooltipEvents,
  OdsTooltipMethods,
  // odsTooltipDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { ocdkIsSurface, OcdkSurface } from '@ovhcloud/ods-cdk';

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

  private anchor!: HTMLElement;
  private surface?: OcdkSurface = undefined;

  // Component properties as @Prop
  // ex: @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsTooltipDefaultAttributes.color;

  /**
   * @see OdsTooltipBehavior.beforeRender
   */
  beforeRender(): void {

  }

  componentWillRender(): void {

  }

  private syncReferences(): void {
    if (this.surface && this.anchor) {
      this.surface.setAnchorElement(this.anchor);
    }
  }

  render() {
    return (
      <Host role="tooltip"
            ref={(el: HTMLElement | null) => {
              this.anchor = el as HTMLElement;
              this.syncReferences()
            }}>
        <slot />
        <ocdk-surface ref={(el: HTMLElement) => {
          if (ocdkIsSurface(el)) {
            this.surface = el as OcdkSurface;
            this.syncReferences()
          }
        }}>
        </ocdk-surface>
      </Host>
    );
  }
}

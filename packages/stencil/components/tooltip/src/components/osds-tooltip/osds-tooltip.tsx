import { Component, Element, Host, h, Listen } from '@stencil/core';
import {
  odsDebounce,
  OdsTooltip,
  OdsTooltipController,
  odsTooltipDefaultAttributes,
  OdsTooltipEvents,
  OdsTooltipMethods,
  OdsTooltipVariant,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { ocdkDefineCustomElements, ocdkIsSurface, OcdkSurface } from '@ovhcloud/ods-cdk';
import { HTMLStencilElement, Method, Prop } from '@stencil/core/internal';

// define custom elements from CDK
ocdkDefineCustomElements()

/**
 * @slot (unnamed) - Tooltip content
 */
@Component({
  tag: 'osds-tooltip',
  styleUrl: 'osds-tooltip.scss',
  shadow: true,
})
export class OsdsTooltip implements OdsTooltip<OdsStencilMethods<OdsTooltipMethods>, OdsStencilEvents<OdsTooltipEvents>> {
  anchor!: HTMLDivElement;
  controller: OdsTooltipController = new OdsTooltipController(this);
  surface: OcdkSurface | undefined = undefined;

  @Element() el!: HTMLStencilElement;

  /** @see OdsTooltipAttributes.variant */
  @Prop({ reflect: true }) public variant?: OdsTooltipVariant = odsTooltipDefaultAttributes.variant;

  private debouncedHandleMouseEnter = odsDebounce(this.handleMouseEnter)
  private debouncedHandleMouseLeave = odsDebounce(this.handleMouseLeave)
  private debouncedHandleTriggerFocus = odsDebounce(this.handleTriggerFocus)

  @Listen('click', { target: 'window' })
  checkForClickOutside(event: any) {
    this.controller.checkForClickOutside(event);
  }

  /**
   * @internal
   * @see OdsTooltipMethods.closeSurface
   */
  @Method()
  async closeSurface() {
    this.controller.closeSurface();
  }

  componentWillRender(): void {
    this.controller.validateAttributes();
  }

  handleMouseEnter(): void {
    this.controller.handleMouseEnter()
  }

  handleMouseLeave(): void {
    this.controller.handleMouseLeave()
  }

  handleTriggerClick() {
    this.controller.handleTriggerClick();
  }

  handleTriggerFocus(): void {
    this.controller.handleTriggerFocus()
  }

  syncReferences() {
    this.controller.syncReferences()
  }

  render() {
    return (
      <Host role="tooltip">
        <div class="tooltip-trigger"
             ref={(el?: HTMLElement) => {
          this.anchor = el as HTMLDivElement;
          this.syncReferences()
        }}
             onClick={ () => this.handleTriggerClick() }
             onFocus={ () => this.debouncedHandleTriggerFocus() }
             onMouseEnter={ () => this.debouncedHandleMouseEnter() }
             onMouseLeave={ () => this.debouncedHandleMouseLeave() }>
          <slot></slot>
        </div>

        <ocdk-surface ref={(el: HTMLElement) => {
          if (ocdkIsSurface(el)) {
            this.surface = el as OcdkSurface;
            this.syncReferences()
          }
        }}>
          <div class="tooltip-content">
            <slot name={'tooltip-content'}></slot>
          </div>
        </ocdk-surface>
      </Host>
    );
  }
}

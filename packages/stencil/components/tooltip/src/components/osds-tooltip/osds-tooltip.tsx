import { Component, Element, Host, h, Listen, State } from '@stencil/core';
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
  
  @State() hasSlotTooltipContent: boolean = false;

  @Element() el!: HTMLStencilElement;

  /**
   * The tabindex of the tooltip anchor.
   * @internal
   */
  @State() tabindex = 0;

  /** @see OdsTooltipAttributes.variant */
  @Prop({ reflect: true }) public variant?: OdsTooltipVariant = odsTooltipDefaultAttributes.variant;

  private debouncedHandleMouseEnter = odsDebounce(this.handleMouseEnter)
  private debouncedHandleMouseLeave = odsDebounce(this.handleMouseLeave)

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

  /**
   * @internal
   * @see OdsTooltipMethods.setTabindex
   */
  @Method()
  async setTabindex(value: number) {
    this.tabindex = value;
  }

  componentWillRender(): void {
    this.controller.validateAttributes();
  }

  componentWillLoad() {
    this.setSlotTooltipContent()
  }

  setSlotTooltipContent() {
    this.hasSlotTooltipContent = Boolean(this.el.querySelector('osds-tooltip-content'));
  }

  handleMouseEnter(): void {
    this.controller.handleMouseEnter();
  }

  handleMouseLeave(): void {
    this.controller.handleMouseLeave();
  }

  handleTriggerBlur(): void {
    this.controller.handleTriggerBlur();
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
      <Host role="tooltip"
            ref={(el: HTMLElement | null) => {
              this.anchor = el as HTMLDivElement;
              this.syncReferences()
            }}
            onBlur={ () => this.handleTriggerBlur() }
            onClick={ () => this.handleTriggerClick() }
            onFocus={ () => this.handleTriggerFocus() }
            onMouseEnter={ () => this.debouncedHandleMouseEnter() }
            onMouseLeave={ () => this.debouncedHandleMouseLeave() }
            tabindex={ this.tabindex }>
        <slot></slot>

        { this.hasSlotTooltipContent && 
          <ocdk-surface ref={(el: HTMLElement) => {
            if (ocdkIsSurface(el)) {
              this.surface = el as OcdkSurface;
              this.syncReferences()
            }
          }}>
            <div class="tooltip-content">
              <slot onSlotchange={ () => this.setSlotTooltipContent() } name="tooltip-content"></slot>
            </div>
          </ocdk-surface>
          // here for trigger the event slotchange
          || <slot onSlotchange={ () => this.setSlotTooltipContent() } name="tooltip-content"></slot> }
      </Host>
    );
  }
}

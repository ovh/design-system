import { OcdkSurface, ocdkDefineCustomElements, ocdkIsSurface } from '@ovhcloud/ods-cdk';
import { odsDebounce } from '@ovhcloud/ods-common-core';
import { Component, Element, Host, Listen, State, h } from '@stencil/core';
import type { HTMLStencilElement } from '@stencil/core/internal';
import { Method, Prop } from '@stencil/core/internal';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import type { ODS_TOOLTIP_VARIANT } from './constants/tooltip-variant';
import { OdsTooltipController } from './core/controller';
import type { OdsTooltipAttribute } from './interfaces/attributes';
import type { OdsTooltipMethod } from './interfaces/methods';


// define custom elements from CDK
ocdkDefineCustomElements();

/**
 * @slot (unnamed) - Tooltip content
 */
@Component({
  tag: 'osds-tooltip',
  styleUrl: 'osds-tooltip.scss',
  shadow: true,
})
export class OsdsTooltip implements OdsTooltipAttribute, OdsTooltipMethod {
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
  @Prop({ reflect: true }) public variant?: ODS_TOOLTIP_VARIANT = DEFAULT_ATTRIBUTE.variant;

  private debouncedHandleMouseEnter = odsDebounce(this.handleMouseEnter);
  private debouncedHandleMouseLeave = odsDebounce(this.handleMouseLeave);

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
    this.setSlotTooltipContent();
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
    this.controller.handleTriggerFocus();
  }

  syncReferences() {
    this.controller.syncReferences();
  }

  render() {
    return (
      <Host role="tooltip"
        ref={(el: HTMLElement | null) => {
          this.anchor = el as HTMLDivElement;
          this.syncReferences();
        }}
        onBlur={ () => this.handleTriggerBlur() }
        onClick={ () => this.handleTriggerClick() }
        onFocus={ () => this.handleTriggerFocus() }
        onMouseEnter={ () => this.debouncedHandleMouseEnter() }
        onMouseLeave={ () => this.debouncedHandleMouseLeave() }
        tabindex={ this.tabindex }>
        <slot></slot>

        { this.hasSlotTooltipContent
          && <ocdk-surface ref={(el: HTMLElement) => {
            if (ocdkIsSurface(el)) {
              this.surface = el as OcdkSurface;
              this.syncReferences();
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

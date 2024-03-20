import { Component, Element, type FunctionalComponent, Host, Method, Prop, h } from '@stencil/core';
import { ODS_TOOLTIP_POSITION, type OdsTooltipPosition } from '../../constants/tooltip-position';
import { hideTooltip, showTooltip } from '../../controller/ods-tooltip';

@Component({
  shadow: true,
  styleUrl: 'ods-tooltip.scss',
  tag: 'ods-tooltip',
})
export class OdsTooltip {
  private arrowElement!: HTMLElement;
  private triggerElement?: HTMLElement | null;
  private cleanUpCallback: () => void = () => {};

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) public position: OdsTooltipPosition = ODS_TOOLTIP_POSITION.top;
  @Prop({ reflect: true }) public triggerId!: string;
  @Prop({ reflect: true }) public withArrow?: boolean;

  connectedCallback(): void {
    this.triggerElement = document.querySelector<HTMLElement>(`#${this.triggerId}`);

    if (!this.triggerElement) {
      console.warn(`[ods-tooltip] Unable to find trigger DOM element with id: ${this.triggerId}`);
    } else {
      this.triggerElement.addEventListener('blur', () => this.hide());
      this.triggerElement.addEventListener('focus', () => this.show());
      this.triggerElement.addEventListener('mouseenter', () => this.show());
      this.triggerElement.addEventListener('mouseleave', () => this.hide());
    }
  }

  disconnectedCallback() : void {
    this.triggerElement?.removeEventListener('blur', () => this.hide());
    this.triggerElement?.removeEventListener('focus', () => this.show());
    this.triggerElement?.removeEventListener('mouseenter', () => this.show());
    this.triggerElement?.removeEventListener('mouseleave', () => this.hide());
  }

  @Method()
  async hide(): Promise<void> {
    hideTooltip(this.el, this.cleanUpCallback);
  }

  @Method()
  async show(): Promise<void> {
    this.cleanUpCallback = showTooltip(this.position, {
      arrow: this.arrowElement,
      popper: this.el,
      trigger: this.triggerElement,
    });
  }

  render(): FunctionalComponent {
    return (
      <Host class="ods-tooltip">
        <slot></slot>

        <div
          class={{
            'ods-tooltip__arrow': true,
            'ods-tooltip__arrow--hidden': !this.withArrow,
          }}
          ref={ (el?: HTMLElement) => el && (this.arrowElement = el) }>
        </div>
      </Host>
    );
  }
}

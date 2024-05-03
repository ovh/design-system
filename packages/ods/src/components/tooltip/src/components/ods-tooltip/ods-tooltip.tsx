import { Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, h } from '@stencil/core';
import { ODS_TOOLTIP_POSITION, type OdsTooltipPosition } from '../../constants/tooltip-position';
import { findTriggerElement, hideTooltip, showTooltip } from '../../controller/ods-tooltip';

@Component({
  shadow: true,
  styleUrl: 'ods-tooltip.scss',
  tag: 'ods-tooltip',
})
export class OdsTooltip {
  private arrowElement!: HTMLElement;
  private triggerElement?: HTMLElement | null;
  private cleanUpCallback: () => void = () => {};
  private boundHide = this.hide.bind(this);
  private boundShow = this.show.bind(this);

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) public position: OdsTooltipPosition = ODS_TOOLTIP_POSITION.top;
  @Prop({ reflect: true }) public shadowDomTriggerId?: string;
  @Prop({ reflect: true }) public triggerId!: string;
  @Prop({ reflect: true }) public withArrow: boolean = false;

  @Event() odsTooltipHide!: EventEmitter<string>;
  @Event() odsTooltipShow!: EventEmitter<string>;

  connectedCallback(): void {
    this.triggerElement = findTriggerElement(this.triggerId, this.shadowDomTriggerId);

    this.triggerElement?.addEventListener('blur', this.boundHide);
    this.triggerElement?.addEventListener('focus', this.boundShow);
    this.triggerElement?.addEventListener('mouseenter', this.boundShow);
    this.triggerElement?.addEventListener('mouseleave', this.boundHide);
  }

  disconnectedCallback() : void {
    this.triggerElement?.removeEventListener('blur', this.boundHide);
    this.triggerElement?.removeEventListener('focus', this.boundShow);
    this.triggerElement?.removeEventListener('mouseenter', this.boundShow);
    this.triggerElement?.removeEventListener('mouseleave', this.boundHide);
  }

  @Method()
  async hide(): Promise<void> {
    hideTooltip(this.el, this.cleanUpCallback);

    this.odsTooltipHide.emit();
  }

  @Method()
  async show(): Promise<void> {
    this.cleanUpCallback = showTooltip(this.position, {
      arrow: this.arrowElement,
      popper: this.el,
      trigger: this.triggerElement,
    });

    this.odsTooltipShow.emit();
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

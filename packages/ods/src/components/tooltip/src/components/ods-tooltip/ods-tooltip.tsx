import { Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, h } from '@stencil/core';
import { findTriggerElement, hideOverlay, showOverlay } from '../../../../../utils/overlay';
import { ODS_TOOLTIP_POSITION, type OdsTooltipPosition } from '../../constants/tooltip-position';
import { ODS_TOOLTIP_STRATEGY, type OdsTooltipStrategy } from '../../constants/tooltip-strategy';

@Component({
  shadow: true,
  styleUrl: 'ods-tooltip.scss',
  tag: 'ods-tooltip',
})
export class OdsTooltip {
  private arrowElement?: HTMLElement;
  private triggerElement?: HTMLElement | null;
  private isTooltipHover: boolean = false;
  private timer?: NodeJS.Timeout;
  private cleanUpCallback: () => void = () => {};
  private boundHide = this.hide.bind(this);
  private boundShow = this.show.bind(this);
  private boundShowOnTooltip = this.showOnElEnter.bind(this);
  private boundHideOnTooltip = this.hideOnElLeave.bind(this);
  private boundLeaveTrigger = this.leaveTrigger.bind(this);

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) public position: OdsTooltipPosition = ODS_TOOLTIP_POSITION.top;
  @Prop({ reflect: true }) public shadowDomTriggerId?: string;
  @Prop({ reflect: true }) public strategy: OdsTooltipStrategy = ODS_TOOLTIP_STRATEGY.absolute;
  @Prop({ reflect: true }) public triggerId!: string;
  @Prop({ reflect: true }) public withArrow: boolean = false;

  @Event() odsHide!: EventEmitter<void>;
  @Event() odsShow!: EventEmitter<void>;

  @Method()
  public async hide(): Promise<void> {
    hideOverlay(this.el, this.cleanUpCallback);

    this.odsHide.emit();
  }

  @Method()
  public async show(): Promise<void> {
    clearTimeout(this.timer);
    this.cleanUpCallback = showOverlay(this.position, {
      arrow: this.arrowElement,
      popper: this.el,
      trigger: this.triggerElement,
    }, {
      offset: 8,
      shift: { padding: 5 },
      strategy: this.strategy,
    });

    this.odsShow.emit();
  }

  connectedCallback(): void {
    this.triggerElement = findTriggerElement(this.triggerId, this.shadowDomTriggerId);

    this.triggerElement?.addEventListener('blur', this.boundHide);
    this.triggerElement?.addEventListener('focus', this.boundShow);
    this.triggerElement?.addEventListener('mouseenter', this.boundShow);
    this.triggerElement?.addEventListener('mouseleave', this.boundLeaveTrigger);
    this.el.addEventListener('mouseenter', this.boundShowOnTooltip);
    this.el.addEventListener('mouseleave', this.boundHideOnTooltip);
  }

  disconnectedCallback() : void {
    this.triggerElement?.removeEventListener('blur', this.boundHide);
    this.triggerElement?.removeEventListener('focus', this.boundShow);
    this.triggerElement?.removeEventListener('mouseenter', this.boundShow);
    this.triggerElement?.removeEventListener('mouseleave', this.boundLeaveTrigger);
    this.el.removeEventListener('mouseenter', this.boundShowOnTooltip);
    this.el.removeEventListener('mouseleave', this.boundHideOnTooltip);
  }

  private leaveTrigger(): void {
    setTimeout(() => this.hideByTooltipHover(), 50);
  }

  private showOnElEnter(): Promise<void> {
    this.isTooltipHover = true;
    return this.boundShow();
  }

  private hideOnElLeave(): void {
    this.isTooltipHover = false;
    this.timer = setTimeout(() => this.hideByTooltipHover(), 50);
  }

  private async hideByTooltipHover(): Promise<void> {
    if (this.isTooltipHover) {
      return;
    }
    return this.hide();
  }

  render(): FunctionalComponent {
    return (
      <Host
        id={ this.el.id }
        class={ `ods-tooltip ods-tooltip--${this.strategy}` }
        role="tooltip">
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

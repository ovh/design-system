import { Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, h } from '@stencil/core';
import { findTriggerElement, hideOverlay, showOverlay } from '../../../../../utils/overlay';
import { ODS_TOOLTIP_POSITION, type OdsTooltipPosition } from '../../constants/tooltip-position';
import { ODS_TOOLTIP_STRATEGY, type OdsTooltipStrategy } from '../../constants/tooltip-strategy';

const TIME_OUT_HIDE_TOOLTIP = 50;

@Component({
  shadow: true,
  styleUrl: 'ods-tooltip.scss',
  tag: 'ods-tooltip',
})
export class OdsTooltip {
  private arrowElement?: HTMLElement;
  private cleanUpCallback: () => void = () => {};
  private isTooltipHover: boolean = false;
  private timer?: ReturnType<typeof setTimeout>;
  private triggerElement?: HTMLElement | null;

  private boundHide = this.hide.bind(this);
  private boundHideOnElLeave = this.hideOnElLeave.bind(this);
  private boundHideByTooltipHover = this.hideByTooltipHover.bind(this);
  private boundShow = this.show.bind(this);
  private boundShowOnElEnter = this.showOnElEnter.bind(this);

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
    this.triggerElement?.addEventListener('mouseleave', this.boundHideByTooltipHover);
    this.el.addEventListener('mouseenter', this.boundShowOnElEnter);
    this.el.addEventListener('mouseleave', this.boundHideOnElLeave);
  }

  disconnectedCallback() : void {
    this.triggerElement?.removeEventListener('blur', this.boundHide);
    this.triggerElement?.removeEventListener('focus', this.boundShow);
    this.triggerElement?.removeEventListener('mouseenter', this.boundShow);
    this.triggerElement?.removeEventListener('mouseleave', this.boundHideByTooltipHover);
    this.el.removeEventListener('mouseenter', this.boundShowOnElEnter);
    this.el.removeEventListener('mouseleave', this.boundHideOnElLeave);
  }

  private hideByTooltipHover(): ReturnType<typeof setTimeout> {
    return setTimeout(() => {
      if (this.isTooltipHover) {
        return;
      }
      return this.hide();
    }, TIME_OUT_HIDE_TOOLTIP);
  }

  private hideOnElLeave(): void {
    this.isTooltipHover = false;
    this.timer = this.hideByTooltipHover();
  }

  private showOnElEnter(): Promise<void> {
    this.isTooltipHover = true;
    return this.boundShow();
  }

  render(): FunctionalComponent {
    return (
      <Host
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

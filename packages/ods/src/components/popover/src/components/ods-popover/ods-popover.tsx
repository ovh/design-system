import { Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Listen, Method, Prop, h } from '@stencil/core';
import { isTargetInElement } from '../../../../../utils/dom';
import { findTriggerElement, hideOverlay, showOverlay } from '../../../../../utils/overlay';
import { ODS_POPOVER_POSITION, type OdsPopoverPosition } from '../../constants/popover-position';
import { ODS_POPOVER_STRATEGY, type OdsPopoverStrategy } from '../../constants/popover-strategy';

@Component({
  shadow: true,
  styleUrl: 'ods-popover.scss',
  tag: 'ods-popover',
})
export class OdsPopover {
  private arrowElement?: HTMLElement;
  private isOpen = false;
  private triggerElement?: HTMLElement | null;
  private boundOnKeydown = this.onKeydown.bind(this);
  private boundToggle = this.toggle.bind(this);
  private cleanUpCallback: () => void = () => {};

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) public position: OdsPopoverPosition = ODS_POPOVER_POSITION.top;
  @Prop({ reflect: true }) public shadowDomTriggerId?: string;
  @Prop({ reflect: true }) public strategy: OdsPopoverStrategy = ODS_POPOVER_STRATEGY.absolute;
  @Prop({ reflect: true }) public triggerId!: string;
  @Prop({ reflect: true }) public withArrow: boolean = false;

  @Event() odsHide!: EventEmitter<void>;
  @Event() odsShow!: EventEmitter<void>;

  @Listen('click', { target: 'document' })
  onDocumentClick(event: MouseEvent): void {
    if (this.isOpen &&
      !isTargetInElement(event, this.el) &&
      !isTargetInElement(event, this.triggerElement)
    ) {
      this.hide();
    }
  }

  @Listen('focusin', { target: 'document' })
  onDocumentFocusin(event: FocusEvent): void {
    if (this.isOpen &&
      !isTargetInElement(event, this.el) &&
      !isTargetInElement(event, this.triggerElement)
    ) {
      this.hide();
    }
  }

  @Listen('keydown', { target: 'document' })
  onDocumentKeydown(event: KeyboardEvent): void {
    if (this.isOpen && event.key === 'Escape') {
      this.hide();
    }
  }

  @Method()
  public async hide(): Promise<void> {
    hideOverlay(this.el, this.cleanUpCallback);

    this.isOpen = false;
    this.odsHide.emit();
  }

  @Method()
  public async show(): Promise<void> {
    this.cleanUpCallback = showOverlay(this.position, {
      arrow: this.arrowElement,
      popper: this.el,
      trigger: this.triggerElement,
    }, {
      offset: 8,
      shift: { padding: 5 },
      strategy: this.strategy,
    });

    this.isOpen = true;
    this.odsShow.emit();
  }

  connectedCallback(): void {
    this.triggerElement = findTriggerElement(this.triggerId, this.shadowDomTriggerId);

    this.triggerElement?.addEventListener('keydown', this.boundOnKeydown);
    this.triggerElement?.addEventListener('mousedown', this.boundToggle);
  }

  disconnectedCallback() : void {
    this.triggerElement?.removeEventListener('keydown', this.boundOnKeydown);
    this.triggerElement?.removeEventListener('mousedown', this.boundToggle);
  }

  private onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggle();
    }
  }

  private toggle(): void {
    if (this.isOpen) {
      this.hide();
    } else {
      this.show();
    }
  }

  render(): FunctionalComponent {
    return (
      <Host class={ `ods-popover ods-popover--${this.strategy}` }>
        <slot></slot>

        <div
          class={{
            'ods-popover__arrow': true,
            'ods-popover__arrow--hidden': !this.withArrow,
          }}
          ref={ (el?: HTMLElement) => el && (this.arrowElement = el) }>
        </div>
      </Host>
    );
  }
}

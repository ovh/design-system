import { Component, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, h } from '@stencil/core';
import { ODS_ICON_NAME } from '../../../../icon/src';
import { type OdsAccordionToggleEventDetail } from '../../interfaces/events';

@Component({
  shadow: true,
  styleUrl: 'ods-accordion.scss',
  tag: 'ods-accordion',
})
export class OdsAccordion {
  private detailsElement?: HTMLDetailsElement;
  private observer?: MutationObserver;

  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ mutable: true, reflect: true }) public isOpen: boolean = false;

  @Event() odsToggle!: EventEmitter<OdsAccordionToggleEventDetail>;

  @Method()
  public async close(): Promise<void> {
    if (this.isDisabled) {
      return;
    }

    this.detailsElement?.removeAttribute('open');
  }

  @Method()
  public async open(): Promise<void> {
    if (this.isDisabled) {
      return;
    }

    this.detailsElement?.setAttribute('open', '');
  }

  @Method()
  public async toggle(): Promise<void> {
    if (this.isDisabled) {
      return;
    }

    if (this.isDetailsOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  componentWillLoad(): void {
    this.observer = new MutationObserver((mutations: MutationRecord[]) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'open') {
          this.isOpen = this.isDetailsOpen();
          this.odsToggle.emit({ isOpen: this.isOpen });
        }
      }
    });
  }

  componentDidLoad(): void {
    if (this.detailsElement) {
      this.observer?.observe(this.detailsElement, {
        attributeFilter: ['open'],
      });
    }
  }

  disconnectedCallback(): void {
    this.observer?.disconnect();
  }

  private isDetailsOpen(): boolean {
    return this.detailsElement?.hasAttribute('open') ?? false;
  }

  private preventToggle(event: Event): void {
    // This block open detail when disabled
    if (this.isDisabled) {
      event.preventDefault();
    }
  }

  render(): FunctionalComponent {
    return (
      <Host class="ods-accordion">
        <details
          class={{
            'ods-accordion__details': true,
            'ods-accordion__details--disabled': this.isDisabled,
          }}
          onClick={ (e: Event) => this.preventToggle(e) }
          open={ this.isOpen }
          part="accordion"
          ref={ (el) => this.detailsElement = el as HTMLDetailsElement }>
          <summary
            class="ods-accordion__details__summary"
            part="summary"
            tabindex={ this.isDisabled ? -1 : 0 }>
            <div class="ods-accordion__details__summary__slot">
              <slot name="summary"></slot>
            </div>

            <ods-icon
              class="ods-accordion__details__summary__icon"
              name={ this.isOpen ? ODS_ICON_NAME.chevronUp : ODS_ICON_NAME.chevronDown }>
            </ods-icon>
          </summary>

          <div
            class="ods-accordion__details__content"
            part="content">
            <slot></slot>
          </div>
        </details>
      </Host>
    );
  }
}

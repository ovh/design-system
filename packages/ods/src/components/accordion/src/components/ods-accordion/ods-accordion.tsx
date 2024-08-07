import { Component, Event, type EventEmitter, type FunctionalComponent, Host, Prop, Watch, h } from '@stencil/core';
import { ODS_ICON_NAME } from '../../../../icon/src';

@Component({
  shadow: true,
  styleUrl: 'ods-accordion.scss',
  tag: 'ods-accordion',
})
export class OdsAccordion {
  private detailsElement?: HTMLDetailsElement;

  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ mutable: true, reflect: true }) public isOpen: boolean = false;

  @Event() odsToggle!: EventEmitter<boolean>;

  handleToggle(event: Event): void {
    if (this.isDisabled) {
      return event.preventDefault();
    }

    if (this.isOpen) {
      this.isOpen = false;
    } else {
      this.isOpen = true;
    }

    this.odsToggle.emit();
  }

  @Watch('isOpen')
  onOpenChange(): void {
    if (this.isOpen) {
      this.detailsElement?.setAttribute('open', '');
    } else {
      this.detailsElement?.removeAttribute('open');
    }
  }

  componentDidLoad(): void {
    this.onOpenChange();
  }

  handleClick(event: MouseEvent): void {
    this.handleToggle(event);
  }

  handleKeyUp(event: KeyboardEvent): void {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this.handleToggle(event);
    }
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === ' ') {
      event.preventDefault();
    }
  }

  render(): FunctionalComponent {
    return (
      <Host class="ods-accordion">
        <details
          class={{
            'ods-accordion__wrapper': true,
            'ods-accordion__wrapper--is-disabled': this.isDisabled,
            'ods-accordion__wrapper--is-open': this.isOpen,
          }}
          tabIndex={ this.isDisabled ? -1 : 0 }
          onClick={ (event) => this.handleClick(event) }
          onKeyUp={ (event) => this.handleKeyUp(event) }
          onKeyDown={ (event) => this.handleKeyDown(event)}
          part="accordion"
          ref={ (el) => this.detailsElement = el as HTMLDetailsElement }>
          <summary
            class={{
              'ods-accordion__wrapper__summary': true,
              'ods-accordion__wrapper__summary--is-disabled': this.isDisabled,
              'ods-accordion__wrapper__summary--is-open': this.isOpen,
            }}
            onClick={ (event) => event.preventDefault() }
            part="summary"
            tabindex="-1">
            <div class="ods-accordion__wrapper__summary__slot">
              <slot name="summary"></slot>
            </div>

            <ods-icon
              class="ods-accordion__wrapper__summary__icon"
              name={ this.isOpen ? ODS_ICON_NAME.chevronUp : ODS_ICON_NAME.chevronDown }>
            </ods-icon>
          </summary>

          <div
            class="ods-accordion__wrapper__content"
            part="content">
            <slot></slot>
          </div>
        </details>
      </Host>
    );
  }
}

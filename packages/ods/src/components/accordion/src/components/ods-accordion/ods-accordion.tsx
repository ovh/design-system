import type { FunctionalComponent } from '@stencil/core';
import { Component, Event, type EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
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

  @Event() odsAccordionToggle!: EventEmitter<boolean>;

  onToggle(event: Event): void {
    if (this.isDisabled) {
      event.preventDefault();
      event.stopPropagation();
      this.detailsElement?.removeAttribute('open');
      return;
    }

    this.isOpen = this.detailsElement?.getAttribute('open') === '' ? true : false;
    this.odsAccordionToggle.emit();
  }

  @Watch('isOpen')
  onOpenChange(): void{
    if (this.isOpen) {
      this.detailsElement?.setAttribute('open', '');
    } else {
      this.detailsElement?.removeAttribute('open');
    }
  }

  componentDidLoad(): void {
    this.onOpenChange();
  }

  render(): FunctionalComponent {
    return (
      <Host class='ods-accordion'>
        <details
          class={{
            'ods-accordion__wrapper': true,
            'ods-accordion__wrapper--is-disabled': this.isDisabled,
            'ods-accordion__wrapper--is-open': this.isOpen,
          }}
          onClick={(e) => {
            this.isDisabled && e.preventDefault();
          }}
          onToggle={(e) => this.onToggle(e)}
          part='accordion'
          ref={(el) => this.detailsElement = el as HTMLDetailsElement}
        >
          <summary
            tabIndex={this.isDisabled ? -1 : 0}
            class={{
              'ods-accordion__wrapper__summary': true,
              'ods-accordion__wrapper__summary--is-disabled': this.isDisabled,
              'ods-accordion__wrapper__summary--is-open': this.isOpen,
            }}
          >
            <div class='ods-accordion__wrapper__summary__slot'>
              <slot name='summary'></slot>
            </div>
            <ods-icon name={this.isOpen ? ODS_ICON_NAME.chevronUp : ODS_ICON_NAME.chevronDown}></ods-icon>
          </summary>
          <div class='ods-accordion__wrapper__content'>
            <slot></slot>
          </div>
        </details>
      </Host>
    );
  }
}

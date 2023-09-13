import type { EventEmitter } from '@stencil/core';
import type { OdsDatepickerAttribute } from './interfaces/attributes';
import type { OdsDatepickerEvent, OdsDatepickerValueChangeEventDetail } from './interfaces/events';
import { Component, Element, Event, Host, h, Listen, Prop, State, Watch } from '@stencil/core';
import { ODS_INPUT_TYPE } from '@ovhcloud/ods-component-input';
import { ODS_ICON_NAME } from '@ovhcloud/ods-component-icon';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { Datepicker } from 'vanillajs-datepicker'
import { OdsDatepickerController } from './core/controller';

/**
 * @slot (unnamed) - Datepicker content
 */
@Component({
  tag: 'osds-datepicker',
  styleUrl: 'osds-datepicker.scss',
  shadow: true
})
export class OsdsDatepicker implements OdsDatepickerAttribute, OdsDatepickerEvent {
  controller: OdsDatepickerController = new OdsDatepickerController(this);

  @Element() el!: HTMLElement;

  @State() hasFocus = false;

  /** @see OdsDatepickerAttribute.clearable */
  @Prop({ reflect: true }) clearable?: boolean = DEFAULT_ATTRIBUTE.clearable;

  /** @see OdsDatepickerAttribute.disabled */
  @Prop({ reflect: true }) disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsDatepickerAttribute.error */
  @Prop({ reflect: true }) error?: string = DEFAULT_ATTRIBUTE.error;

  /** @see OdsDatepickerAttribute.format */
  @Prop({ reflect: true }) format?: string = DEFAULT_ATTRIBUTE.format;

  /** @see OdsDatepickerAttribute.placeholder */
  @Prop({ reflect: true }) placeholder?: string = DEFAULT_ATTRIBUTE.placeholder;

  /** @see OdsDatepickerAttribute.value */
  @Prop({ reflect: true, mutable: true }) value?: Date = DEFAULT_ATTRIBUTE.value;

  /** @see OdsDatepickerEvents.odsValueChange */
  @Event() odsValueChange!: EventEmitter<OdsDatepickerValueChangeEventDetail>;

  /** @see OdsDatepickerEvents.odsDatepickerBlur */
  @Event() odsDatepickerBlur!: EventEmitter<void>;

  /** @see OdsDatepickerEvents.odsDatepickerFocus */
  @Event() odsDatepickerFocus!: EventEmitter<void>;

  @Watch('value')
  onValueChange(value: Date, oldValue?: Date) {
    this.controller.onValueChange(value, oldValue);
  }

  @Listen('odsValueChange', { target: 'body' })
  handleInputValueChange(event: CustomEvent) {
    if (this.format && event.detail.value.length === this.format.length) {
      this.onChange(new Date(Datepicker.parseDate(event.detail.value, this.format)))
    } else if (event.detail.value.length === 0) {
      this.onChange(undefined)
    }
  }

  /**
   * @see OdsDatepickerBehavior.emitBlur
   */
  emitBlur(): void {
    this.odsDatepickerBlur.emit();
  }

  /**
   * @see OdsDatepickerBehavior.emitFocus
   */
  emitFocus(): void {
    this.odsDatepickerFocus.emit();
  }

  /**
   * @see OdsDatepickerBehavior.onBlur
   */
  onBlur(): void {
    this.controller.onBlur();
  }

  /**
   * @see OdsDatepickerBehavior.onChange
   */
  onChange(newValue: Date | undefined): void {
    this.controller.onChange(newValue, this.value);
  }

  /**
   * @see OdsDatepickerBehavior.onFocus
   */
  onFocus(): void {
    this.controller.onFocus();
  }

  componentDidLoad() {
    if(!this.el.shadowRoot) {
      return;
    }

    const datepickerElement = this.el.shadowRoot.querySelector('.osds-datepicker__hidden-input') as HTMLInputElement;

    if (!datepickerElement.getAttribute('initialized')) {
      new Datepicker(datepickerElement, {
        format: this.format,
      });

      datepickerElement.addEventListener('changeDate', (e: Event) => {
        const customEvent = e as CustomEvent;
        this.onChange(customEvent.detail.date);
      });

      datepickerElement.setAttribute('initialized', 'true');
    }
  }

  formatDate(date?: Date | undefined) {
    if (this.format && date) {
      return Datepicker.formatDate(date, this.format);
    } else {
      return '';
    }
  }

  render() {
    const {
      clearable,
      disabled,
      error,
      hasFocus,
      placeholder,
      value,
    } = this;

    return (
      <Host {...{
        hasFocus,
        onBlur: () => this.onBlur(),
        onFocus: () => this.onFocus(),
      }}>
        <osds-input
          type={ODS_INPUT_TYPE.text}
          clearable={clearable}
          disabled={disabled}
          error={error}
          icon={ODS_ICON_NAME.CALENDAR}
          placeholder={placeholder}
          value={this.formatDate(value)}
        ></osds-input>
        <input tabindex={-1} class="osds-datepicker__hidden-input"></input>
      </Host>
    );
  }
}

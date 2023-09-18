import type { EventEmitter } from '@stencil/core';
import type { OdsDatepickerAttribute } from './interfaces/attributes';
import type { OdsDatepickerEvent, OdsDatepickerValueChangeEventDetail } from './interfaces/events';
import { Component, Element, Event, Host, h, Listen, Prop, State } from '@stencil/core';
import { ODS_INPUT_TYPE } from '@ovhcloud/ods-component-input';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
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
  @State() datepickerInstance: Datepicker | undefined = undefined;

  /** Attributes */

  /** @see OdsDatepickerAttribute.clearable */
  @Prop({ reflect: true }) clearable?: boolean = DEFAULT_ATTRIBUTE.clearable;

  /** @see OdsDatepickerAttribute.disabled */
  @Prop({ reflect: true }) disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsDatepickerAttribute.error */
  @Prop({ reflect: true }) error?: boolean = DEFAULT_ATTRIBUTE.error;

  /** @see OdsDatepickerAttribute.format */
  @Prop({ reflect: true }) format?: string = DEFAULT_ATTRIBUTE.format;

  /** @see OdsDatepickerAttribute.placeholder */
  @Prop({ reflect: true }) placeholder?: string = DEFAULT_ATTRIBUTE.placeholder;

  /** @see OdsDatepickerAttribute.value */
  @Prop({ reflect: true, mutable: true }) value?: Date | undefined | null = DEFAULT_ATTRIBUTE.value;

  /** Events */

  /** @see OdsDatepickerEvent.odsDatepickerBlur */
  @Event() odsDatepickerBlur!: EventEmitter<void>;

  /** @see OdsDatepickerEvent.odsDatepickerFocus */
  @Event() odsDatepickerFocus!: EventEmitter<void>;

  /** @see OdsDatepickerEvent.odsDatepickerValueChange */
  @Event() odsDatepickerValueChange!: EventEmitter<OdsDatepickerValueChangeEventDetail>;

  /** Listening to user's manual input */
  @Listen('odsValueChange')
  handleInputValueChange(event: CustomEvent) {
    if (this.format && event.detail.value.length === this.format.length) {
      this.onChange(new Date(Datepicker.parseDate(event.detail.value, this.format)))
    } else if (event.detail.value.length === 0) {
      this.onChange(null)
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
   * @see OdsDatepickerBehavior.emitValueChange
   */
  emitValueChange(newValue: Date | undefined | null, oldValue?: Date | undefined | null): void {
    this.odsDatepickerValueChange.emit({ value: newValue, oldValue: oldValue });
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
  onChange(newValue: Date | undefined | null): void {
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

    const hiddenInput = this.el.shadowRoot.querySelector('#hidden-input') as HTMLInputElement;

    if (!hiddenInput.getAttribute('initialized')) {
      this.datepickerInstance = new Datepicker(hiddenInput, {
        format: this.format,
        nextArrow: `<osds-icon name="triangle-right" size="sm" color="${ODS_THEME_COLOR_INTENT.primary}"></osds-icon>`,
        prevArrow: `<osds-icon name="triangle-left" size="sm" color="${ODS_THEME_COLOR_INTENT.primary}"></osds-icon>`,
        maxView: 2,
      });

      hiddenInput.addEventListener('changeDate', (e: Event) => {
        const customEvent = e as CustomEvent;
        this.onChange(customEvent.detail.date);
      });

      hiddenInput.setAttribute('initialized', 'true');
    }
  }

  formatDate(date?: Date | undefined | null) {
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
        class: 'osds-datepicker',
        disabled,
        error,
        hasFocus,
        onBlur: () => this.onBlur(),
        onFocus: () => this.onFocus(),
      }}>
        <osds-input
          clearable={clearable}
          error={error}
          icon={ODS_ICON_NAME.CALENDAR}
          placeholder={placeholder}
          type={ODS_INPUT_TYPE.text}
          value={this.formatDate(value)}
        ></osds-input>
        <input tabindex={-1} id="hidden-input" class="osds-datepicker__hidden-input"></input>
      </Host>
    );
  }
}

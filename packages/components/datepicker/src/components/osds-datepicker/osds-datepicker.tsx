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

  /** @see OdsDatepickerAttribute.clearable */
  @Prop({ reflect: true }) clearable?: boolean = DEFAULT_ATTRIBUTE.clearable;

  /** @see OdsDatepickerAttribute.color */
  @Prop({ reflect: true }) color?: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;

  /** @see OdsDatepickerAttribute.disabled */
  @Prop({ reflect: true }) disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsDatepickerAttribute.error */
  @Prop({ reflect: true }) error?: string = DEFAULT_ATTRIBUTE.error;

  /** @see OdsDatepickerAttribute.format */
  @Prop({ reflect: true }) format?: string = DEFAULT_ATTRIBUTE.format;

  /** @see OdsDatepickerAttribute.inline */
  @Prop({ reflect: true }) inline?: boolean = DEFAULT_ATTRIBUTE.inline;

  /** @see OdsDatepickerAttribute.placeholder */
  @Prop({ reflect: true }) placeholder?: string = DEFAULT_ATTRIBUTE.placeholder;

  /** @see OdsDatepickerAttribute.value */
  @Prop({ reflect: true, mutable: true }) value?: Date = DEFAULT_ATTRIBUTE.value;

  /** @see OdsDatepickerEvent.odsDatepickerBlur */
  @Event() odsDatepickerBlur!: EventEmitter<void>;

  /** @see OdsDatepickerEvent.odsDatepickerFocus */
  @Event() odsDatepickerFocus!: EventEmitter<void>;

  /** @see OdsDatepickerEvent.odsDatepickerValueChange */
  @Event() odsDatepickerValueChange!: EventEmitter<OdsDatepickerValueChangeEventDetail>;

  @Watch('value')
  onValueChange(value: Date, oldValue?: Date) {
    this.controller.onValueChange(value, oldValue);
  }

  @Listen('odsValueChange')
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

    const hiddenInput = this.el.shadowRoot.querySelector('.osds-datepicker__hidden-input') as HTMLInputElement;

    if (!hiddenInput.getAttribute('initialized')) {
      this.datepickerInstance = new Datepicker(hiddenInput, {
        format: this.format,
        nextArrow: `<osds-icon name="triangle-right" size="sm" color=${this.color}></osds-icon>`,
        prevArrow: `<osds-icon name="triangle-left" size="sm" color=${this.color}></osds-icon>`,
        maxView: 2,
      });

      const datepickerElement = this.el.shadowRoot.querySelector('.datepicker-picker') as HTMLElement;

      hiddenInput.addEventListener('changeDate', (e: Event) => {
        const customEvent = e as CustomEvent;
        this.onChange(customEvent.detail.date);
      });

      hiddenInput.setAttribute('initialized', 'true');

      const allElements = datepickerElement.querySelectorAll('*');
      allElements.forEach(element => {
        element.removeAttribute('tabindex');
      });

      const dayNames = this.el.shadowRoot.querySelectorAll('.dow');
      dayNames.forEach(day => {
        if (day.textContent) {
          day.textContent = day.textContent.trim().charAt(0);
        }
      });

      const viewSwitch = this.el.shadowRoot.querySelector('.view-switch') as HTMLElement;
      const chevron = document.createElement('osds-icon');
      chevron.setAttribute('name', 'chevron-down');
      chevron.setAttribute('color', `${this.color}`);
      chevron.setAttribute('size', 'xs');
      viewSwitch.appendChild(chevron);

      const spans = this.el.shadowRoot.querySelectorAll('.datepicker-grid span');
      spans.forEach(span => {
        const button = document.createElement('button');
        button.setAttribute('class', span.getAttribute('class') as string);
        button.setAttribute('data-date', span.getAttribute('data-date') as string);
        button.innerHTML = span.innerHTML;
        span.replaceWith(button);
      });

      hiddenInput.addEventListener('changeView', (e: Event) => {
        const customEvent = e as CustomEvent;
        if(this.el.shadowRoot) {
          const spans = this.el.shadowRoot.querySelectorAll('.datepicker-grid span');
          spans.forEach(span => {
            const button = document.createElement('button');
            button.setAttribute('class', span.getAttribute('class') as string);
            if (customEvent.detail.viewId === 0) {
              button.setAttribute('data-date', span.getAttribute('data-date') as string);
            } else if (customEvent.detail.viewId === 1) {
              button.setAttribute('data-month', span.getAttribute('data-month') as string);
            } else if (customEvent.detail.viewId === 2) {
              button.setAttribute('data-year', span.getAttribute('data-year') as string);
            }
            button.innerHTML = span.innerHTML;
            span.replaceWith(button);
          });
        }
      });

      ['changeView', 'changeMonth', 'changeYear'].forEach(event => {
        hiddenInput.addEventListener(event, (e: Event) => {
          const customEvent = e as CustomEvent;
          if (customEvent.detail.viewId < 2) {
            viewSwitch.appendChild(chevron);
          }
        });
      });
    }
  }

  formatDate(date?: Date | undefined) {
    if (this.format && date && this.el.shadowRoot) {
      return Datepicker.formatDate(date, this.format);
    } else {
      return '';
    }
  }

  render() {
    const {
      clearable,
      color,
      disabled,
      error,
      hasFocus,
      inline,
      placeholder,
      value,
    } = this;

    return (
      <Host {...{
        disabled,
        hasFocus,
        inline,
        onBlur: () => this.onBlur(),
        onFocus: () => this.onFocus(),
      }}>
        <osds-input
          clearable={clearable}
          color={color}
          error={error && error.length > 0 ? true : false }
          icon={ODS_ICON_NAME.CALENDAR}
          placeholder={placeholder}
          type={ODS_INPUT_TYPE.text}
          value={this.formatDate(value)}
        ></osds-input>
        <input tabindex={-1} class="osds-datepicker__hidden-input"></input>
        {
          error
          && error.length > 0
          && <osds-text color={ODS_THEME_COLOR_INTENT.error}>{error}</osds-text>
        }
      </Host>
    );
  }
}
import type { EventEmitter } from '@stencil/core';
import type { OdsDatepickerAttribute } from './interfaces/attributes';
import type { OdsDatepickerEvent, OdsDatepickerValueChangeEventDetail } from './interfaces/events';
import { Component, Element, Event, Host, h, Listen, Prop, State, Watch } from '@stencil/core';
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
  @State() hiddenInput: HTMLInputElement | undefined = undefined;

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
  @Prop({ reflect: true, mutable: true }) value?: Date | null = DEFAULT_ATTRIBUTE.value;

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

  emitBlur(): void {
    this.odsDatepickerBlur.emit();
  }

  emitFocus(): void {
    this.odsDatepickerFocus.emit();
  }

  emitValueChange(newValue: Date | undefined | null, oldValue?: Date | undefined | null): void {
    this.odsDatepickerValueChange.emit({ value: newValue, oldValue: oldValue });
  }

  onBlur(): void {
    this.controller.onBlur();
  }

  onChange(newValue: Date | undefined | null): void {
    this.controller.onChange(newValue, this.value);
  }

  onFocus(): void {
    this.controller.onFocus();
  }

  componentDidLoad() {
    if(!this.el.shadowRoot) {
      return;
    }

    if (this.hiddenInput && !this.hiddenInput.getAttribute('initialized')) {
      this.datepickerInstance = new Datepicker(this.hiddenInput, {
        format: this.format,
        nextArrow: `<osds-icon name="triangle-right" size="sm" color="${ODS_THEME_COLOR_INTENT.primary}"></osds-icon>`,
        prevArrow: `<osds-icon name="triangle-left" size="sm" color="${ODS_THEME_COLOR_INTENT.primary}"></osds-icon>`,
        maxView: 2,
      });

      this.hiddenInput.addEventListener('changeDate', (e: Event) => {
        const customEvent = e as CustomEvent;
        this.onChange(customEvent.detail.date);
      });

      this.hiddenInput.setAttribute('initialized', 'true');
    }
  }

  private formatDate(date?: Date | undefined | null) {
    if (this.format && date) {
      return Datepicker.formatDate(date, this.format);
    }
    return '';
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
          disabled={disabled}
          icon={ODS_ICON_NAME.CALENDAR}
          placeholder={placeholder}
          type={ODS_INPUT_TYPE.text}
          value={this.formatDate(value)}
        ></osds-input>
        <input
          tabindex={-1}
          class="osds-datepicker__hidden-input"
          ref={(el?: HTMLInputElement) => this.hiddenInput = el || this.hiddenInput}
        ></input>
      </Host>
    );
  }
}

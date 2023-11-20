import type { ODS_DATEPICKER_DAY } from './constants/datepicker-day';
import type { ODS_DATEPICKER_LOCALE } from './constants/datepicker-locale';
import type { OdsDatepickerAttribute } from './interfaces/attributes';
import type { OdsDatepickerEvent, OdsDatepickerValueChangeEventDetail } from './interfaces/events';
import type { EventEmitter } from '@stencil/core';

import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_ICON_NAME } from '@ovhcloud/ods-component-icon';
import { ODS_INPUT_TYPE } from '@ovhcloud/ods-component-input';
import { Component, Element, Event, Host, Listen, Prop, State, Watch, h } from '@stencil/core';
import { Datepicker } from 'vanillajs-datepicker';
// @ts-ignore
import de from 'vanillajs-datepicker/js/i18n/locales/de';
// @ts-ignore
import es from 'vanillajs-datepicker/js/i18n/locales/es';
// @ts-ignore
import fr from 'vanillajs-datepicker/js/i18n/locales/fr';
// @ts-ignore
import it from 'vanillajs-datepicker/js/i18n/locales/it';
// @ts-ignore
import nl from 'vanillajs-datepicker/js/i18n/locales/nl';
// @ts-ignore
import pl from 'vanillajs-datepicker/js/i18n/locales/pl';
// @ts-ignore
import pt from 'vanillajs-datepicker/js/i18n/locales/pt';


import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsDatepickerController } from './core/controller';


Object.assign(Datepicker.locales, de);
Object.assign(Datepicker.locales, es);
Object.assign(Datepicker.locales, fr);
Object.assign(Datepicker.locales, it);
Object.assign(Datepicker.locales, nl);
Object.assign(Datepicker.locales, pl);
Object.assign(Datepicker.locales, pt);

/**
 * @slot (unnamed) - Datepicker content
 */
@Component({
  tag: 'osds-datepicker',
  styleUrl: 'osds-datepicker.scss',
  shadow: true,
})
export class OsdsDatepicker implements OdsDatepickerAttribute, OdsDatepickerEvent {
  controller: OdsDatepickerController = new OdsDatepickerController(this);

  @Element() el!: HTMLElement;

  @State() hasFocus = false;

  private datepickerInstance: Datepicker | undefined = undefined;
  get datepickerInstanceAccessor(): Datepicker | undefined {
    return this.datepickerInstance;
  }

  private hiddenInput: HTMLInputElement | undefined = undefined;
  private datepickerElement: HTMLElement | undefined = undefined;

  /** @see OdsDatepickerAttribute.clearable */
  @Prop({ reflect: true }) clearable?: boolean = DEFAULT_ATTRIBUTE.clearable;

  /** @see OdsDatepickerAttribute.color */
  @Prop({ reflect: true }) color?: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;

  /** @see OdsDatepickerAttribute.datesDisabled */
  @Prop({ reflect: true }) datesDisabled?: Date[] = DEFAULT_ATTRIBUTE.datesDisabled;

  /** @see OdsDatepickerAttribute.daysOfWeekDisabled */
  @Prop({ reflect: true }) daysOfWeekDisabled?: ODS_DATEPICKER_DAY[] = DEFAULT_ATTRIBUTE.daysOfWeekDisabled;

  /** @see OdsDatepickerAttribute.disabled */
  @Prop({ reflect: true }) disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsDatepickerAttribute.error */
  @Prop({ reflect: true }) error?: boolean = DEFAULT_ATTRIBUTE.error;

  /** @see OdsDatepickerAttribute.format */
  @Prop({ reflect: true }) format?: string = DEFAULT_ATTRIBUTE.format;

  /** @see OdsDatepickerAttribute.inline */
  @Prop({ reflect: true }) inline?: boolean = DEFAULT_ATTRIBUTE.inline;

  /** @see OdsDatepickerAttribute.locale */
  @Prop({ reflect: true }) locale?: ODS_DATEPICKER_LOCALE = DEFAULT_ATTRIBUTE.locale;

  /** @see OdsDatepickerAttribute.maxDate */
  @Prop({ reflect: true }) maxDate?: Date | null = DEFAULT_ATTRIBUTE.maxDate;

  /** @see OdsDatepickerAttribute.minDate */
  @Prop({ reflect: true }) minDate?: Date | null = DEFAULT_ATTRIBUTE.minDate;

  /** @see OdsDatepickerAttribute.placeholder */
  @Prop({ reflect: true }) placeholder?: string = DEFAULT_ATTRIBUTE.placeholder;

  @Prop({ reflect: true }) showSiblingsMonthDays?: boolean = DEFAULT_ATTRIBUTE.showSiblingsMonthDays;

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
      this.onChange(new Date(Datepicker.parseDate(event.detail.value, this.format)));
    } else if (event.detail.value.length === 0) {
      this.onChange(null);
    }
  }

  @Watch('datesDisabled')
  @Watch('daysOfWeekDisabled')
  @Watch('format')
  @Watch('locale')
  @Watch('maxDate')
  @Watch('minDate')
  updateDatepicker() {
    if (!this.datepickerInstance) {
      return;
    }

    this.datepickerInstance.setOptions({
      datesDisabled: this.datesDisabled
        ? this.datesDisabled.map((date) => Datepicker.formatDate(date, 'dd/mm/yyyy'))
        : undefined,
      daysOfWeekDisabled: this.daysOfWeekDisabled,
      format: this.format,
      language: this.locale,
      maxDate: this.maxDate
        ? this.maxDate
        : undefined,
      minDate: this.minDate
        ? this.minDate
        : undefined,
    });
    this.updateSiblingsMonthDaysVisibility();
  }

  emitBlur(): void {
    this.odsDatepickerBlur.emit();
  }

  emitFocus(): void {
    this.odsDatepickerFocus.emit();
  }

  emitDatepickerValueChange(newValue: Date | undefined | null, oldValue?: Date | undefined | null): void {
    this.odsDatepickerValueChange.emit({ value: newValue, oldValue: oldValue, formattedValue: newValue && this.format ? Datepicker.formatDate(newValue, this.format) : undefined });
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

  onClick(): void {
    this.controller.onClick();
  }

  componentDidLoad(): void {
    this.initializeDatepicker();
  }

  initializeDatepicker(): void {
    if(!this.el.shadowRoot || this.datepickerInstance) {
      return;
    }

    if (!this.hiddenInput || this.hiddenInput.getAttribute('initialized')) {
      return;
    }

    this.datepickerInstance = new Datepicker(this.hiddenInput, {
      datesDisabled: this.datesDisabled
        ? this.datesDisabled.map((date) => Datepicker.formatDate(date, 'dd/mm/yyyy'))
        : undefined,
      daysOfWeekDisabled: this.daysOfWeekDisabled,
      format: this.format,
      language: this.locale,
      maxDate: this.maxDate
        ? this.maxDate
        : undefined,
      maxView: 2,
      minDate: this.minDate
        ? this.minDate
        : undefined,
      nextArrow: `<osds-icon name="triangle-right" size="sm" color=${this.color}></osds-icon>`,
      prevArrow: `<osds-icon name="triangle-left" size="sm" color=${this.color}></osds-icon>`,
    });

    this.datepickerElement = this.el.shadowRoot.querySelector('.datepicker-picker') as HTMLElement;

    this.hiddenInput.addEventListener('changeDate', (e: Event) => {
      const customEvent = e as CustomEvent;
      this.onChange(customEvent.detail.date);
    });

    this.hiddenInput.setAttribute('initialized', 'true');

    const datepickerButtons = this.datepickerElement.querySelectorAll('button');
    datepickerButtons.forEach((element) => {
      element.removeAttribute('tabindex');
    });

    const datepickerDayNames = this.el.shadowRoot.querySelectorAll('.dow');
    datepickerDayNames.forEach((day) => {
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

    const datepickerSpanElements = this.el.shadowRoot.querySelectorAll('.datepicker-grid span');
    datepickerSpanElements.forEach((span) => {
      const button = document.createElement('button');
      button.setAttribute('class', span.getAttribute('class') as string);
      button.setAttribute('data-date', span.getAttribute('data-date') as string);
      button.innerHTML = span.innerHTML;
      span.replaceWith(button);
    });
    this.updateSiblingsMonthDaysVisibility();

    this.hiddenInput.addEventListener('changeView', (e: Event) => {
      const customEvent = e as CustomEvent;
      if (this.el.shadowRoot) {
        const datepickerSpanElements = this.el.shadowRoot.querySelectorAll('.datepicker-grid span');
        datepickerSpanElements.forEach((span) => {
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

    ['changeView', 'changeMonth', 'changeYear'].forEach((event) => {
      if (this.hiddenInput) {
        this.hiddenInput.addEventListener(event, (e: Event) => {
          this.updateSiblingsMonthDaysVisibility();
          const customEvent = e as CustomEvent;
          if (customEvent.detail.viewId < 2) {
            viewSwitch.appendChild(chevron);
          }
        });
      }
    });
  }

  @Watch('showSiblingsMonthDays')
  updateSiblingsMonthDaysVisibility(): void {
    const datepickerDay = this.el.shadowRoot?.querySelectorAll('.datepicker-grid .day');
    datepickerDay?.forEach((day) => {
      day.removeAttribute('disabled');
      return day.classList.remove('no-displayed');
    });

    if (!this.showSiblingsMonthDays) {
      const datepickerNextMonthDays = this.el.shadowRoot?.querySelectorAll('.datepicker-grid .day.next');
      datepickerNextMonthDays?.forEach((day) => {
        day.setAttribute('disabled', '');
        return day.classList.add('no-displayed');
      });
      const datepickerPrevMonthDays = this.el.shadowRoot?.querySelectorAll('.datepicker-grid .day.prev');
      datepickerPrevMonthDays?.forEach((day) => {
        day.setAttribute('disabled', '');
        return day.classList.add('no-displayed');
      });
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
        error,
        disabled,
        hasFocus,
        inline,
        onBlur: () => this.onBlur(),
        onFocus: () => this.onFocus(),
      }}>
        <osds-input
          onClick={ () => this.onClick() }
          clearable={clearable}
          color={color}
          disabled={disabled}
          error={error}
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

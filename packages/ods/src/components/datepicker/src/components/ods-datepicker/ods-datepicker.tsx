import {
  AttachInternals,
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { ODS_DATEPICKER_DAY } from '../../constants/datepicker-day';
import { ODS_DATEPICKER_LOCALE } from '../../constants/datepicker-locale';
import { setFormValue } from '../../controller/ods-datepicker';
import { OdsDatepickerEventValueChangeDetail } from '../../interfaces/events';
import { ODS_INPUT_TYPE, OdsInput } from '../../../../input/src';
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

Object.assign(Datepicker.locales, de);
Object.assign(Datepicker.locales, es);
Object.assign(Datepicker.locales, fr);
Object.assign(Datepicker.locales, it);
Object.assign(Datepicker.locales, nl);
Object.assign(Datepicker.locales, pl);
Object.assign(Datepicker.locales, pt);

@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'ods-datepicker.scss',
  tag: 'ods-datepicker',
})
export class OdsDatepicker {
  private datepickerInstance: Datepicker | undefined = undefined;
  private hiddenInput: HTMLInputElement | undefined = undefined;
  private datepickerElement: HTMLElement | undefined = undefined;
  private odsInput?: OdsInput;

  get datepickerInstanceAccessor(): Datepicker | undefined {
    return this.datepickerInstance;
  }

  @Element() el!: HTMLElement;

  @AttachInternals() internals!: ElementInternals;

  @State() hasFocus = false;

  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  @Prop({ reflect: true }) public datesDisabled: Date[] = [];
  @Prop({ reflect: true }) public daysOfWeekDisabled: ODS_DATEPICKER_DAY[] = [];
  @Prop({ reflect: true }) public defaultValue?: string;
  @Prop({ reflect: true }) public format: string = 'dd/mm/yyyy';
  @Prop({ reflect: true }) public hasError: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isReadonly: boolean = false;
  @Prop({ reflect: true }) public isRequired: boolean = false;
  @Prop({ reflect: true }) public locale: ODS_DATEPICKER_LOCALE = ODS_DATEPICKER_LOCALE.EN;
  @Prop({ reflect: true }) public max?: Date;
  @Prop({ reflect: true }) public min?: Date;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ reflect: true }) public placeholder?: string;
  @Prop({ reflect: true }) public showSiblingsMonthDays: boolean = true;
  @Prop({ reflect: true, mutable: true }) public value?: Date | null = null;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsDatepickerEventValueChangeDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;

  @Method()
  async clear(): Promise<void> {
    return this.odsInput?.clear();
  }

  @Method()
  async getValidity(): Promise<ValidityState | undefined> {
    return this.odsInput?.getValidity();
  }

  @Method()
  async reset(): Promise<void> {
    return this.odsInput?.reset();
  }

  @Listen('odsChange')
  handleInputValueChange(event: CustomEvent) {
    if (this.format && (event.detail.value && event.detail.value.length === this.format.length)) {
       this.onChange(new Date(Datepicker.parseDate(event.detail.value, this.format)));
    } else if (event.detail.value && event.detail.value.length === 0) {
      this.onChange(null);
    }
  }

  @Listen('odsReset')
  handleInputValueReset() {
    this.value = this.defaultValue ? new Date(this.defaultValue) : null;
  }

  @Listen('odsClear')
  handleInputValueClear() {
    this.value = null;
  }

  @Watch('datesDisabled')
  @Watch('daysOfWeekDisabled')
  @Watch('format')
  @Watch('locale')
  @Watch('max')
  @Watch('min')
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
      maxDate: this.max
        ? this.max
        : undefined,
      minDate: this.min
        ? this.min
        : undefined,
    });
    this.updateSiblingsMonthDaysVisibility();
  }

  @Watch('value')
  checkValueFormat() {
    if(this.odsInput && this.value?.toString().length !== this.format.length) {
      this.odsInput.value = this.formatDate(this.value);
    }
  }

  componentWillLoad(): void {
    // Those components are used in some string templates, not JSX,
    // thus Stencil does not detect them correctly and they're not embedded in the build,
    // so we have to manually declare their usage here
    h('osds-icon');

    if (!this.value) {
      this.value = this.defaultValue ? new Date(this.defaultValue) : null;
    }
    setFormValue(this.internals ,this.formatDate(this.value) ?? null);
  }

  formResetCallback(): void {
    this.value = this.defaultValue ? new Date(this.defaultValue) : null;
  }

  onChange(newValue: Date | undefined | null): void {
    if(!this.isDisabled) {
      if (!this.validateValue(newValue)) {
        this.value = null;
        this.datepickerInstanceAccessor?.setDate({ clear: true });
        setFormValue(this.internals, '');
      } else {
        this.value = newValue;
        this.datepickerInstanceAccessor?.setDate(newValue);
        setFormValue(this.internals, this.formatDate(newValue) ?? '');
      }
      this.hasFocus = false;
    }
  }

  onFocus(): void {
    if (!this.isDisabled) {
      this.hasFocus = true;
    }
  }

  private validateValue(value?: Date | null | undefined): boolean {
    if (!value || value === null || isNaN(value.getTime())) {
      return false;
    }

    const midnightValue = this.getMidnightDate(value).getTime();

    if (this.datesDisabled && this.datesDisabled.some((d) => this.getMidnightDate(d).getTime() === midnightValue)) {
      return false;
    }

    if (this.daysOfWeekDisabled && this.daysOfWeekDisabled.includes(value.getDay())) {
      return false;
    }

    if (this.max && midnightValue > this.getMidnightDate(this.max).getTime()) {
      return false;
    }

    if (this.min && midnightValue < this.getMidnightDate(this.min).getTime()) {
      return false;
    }

    return true;
  }

  private getMidnightDate(date: Date): Date {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
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
      maxDate: this.max
        ? this.max
        : undefined,
      maxView: 2,
      minDate: this.min
        ? this.min
        : undefined,
      nextArrow: `<ods-icon name="chevron-right" size="sm"></ods-icon>`,
      prevArrow: `<ods-icon name="chevron-left" size="sm"></ods-icon>`,
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

    const viewSwitch = this.el.shadowRoot.querySelector('.view-switch') as HTMLElement;
    const chevron = document.createElement('osds-icon');
    chevron.setAttribute('name', 'chevron-down');
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

  formatDate(date?: Date | undefined | null): string {
    if (this.format && date) {
      return Datepicker.formatDate(date, this.format);
    } else {
      return '';
    }
  }

  render() {
    return (
      <Host
        class="ods-datepicker"
        error={ this.hasError }
        disabled={ this.isDisabled }
        hasFocus={ this.hasFocus }
        onFocus={ ():void => this.onFocus() }
        onFocusout={ () => this.hasFocus = false }
      >
        <ods-input
          ariaLabel={ this.ariaLabel }
          ariaLabelledby= { this.ariaLabelledby }
          class="ods-datepicker__input"
          defaultValue={ this.defaultValue }
          exportparts="input"
          hasError={ this.hasError }
          isDatepicker={true}
          isDisabled={ this.isDisabled }
          isReadonly={ this.isReadonly }
          isRequired={ this.isRequired }
          onClick={ () => this.hasFocus = true }
          max={ this.max?.toString() }
          min={ this.min?.toString() }
          name={ this.name }
          placeholder={ this.placeholder }
          ref={ (el?: unknown) => this.odsInput = el as OdsInput }
          type={ODS_INPUT_TYPE.text}
          value={this.formatDate(this.value)}
        ></ods-input>
        <input
          tabindex={-1}
          class="ods-datepicker__hidden-input"
          ref={(el?: HTMLInputElement) => this.hiddenInput = el || this.hiddenInput}
        ></input>
      </Host>
    );
  }
}

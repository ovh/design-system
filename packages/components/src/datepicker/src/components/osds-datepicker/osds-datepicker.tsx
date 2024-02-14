import type { ODS_DATEPICKER_DAY } from './constants/datepicker-day';
import type { ODS_DATEPICKER_LOCALE } from './constants/datepicker-locale';
import type { OdsDatepickerAttribute } from './interfaces/attributes';
import type { OdsDatepickerEvent, OdsDatepickerValueChangeEventDetail } from './interfaces/events';
import type { OdsDatepickerMethod } from './interfaces/methods';
import type { OdsInputValueChangeEvent, OsdsInput } from '../../../../input/src';
import type { OdsCommonFieldValidityState } from '@ovhcloud/ods-common-core';
import type { EventEmitter,FunctionalComponent } from '@stencil/core';
import { AttachInternals, Component, Element, Event, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import { Datepicker } from 'vanillajs-datepicker';
// @ts-ignore no declaration file
import de from 'vanillajs-datepicker/js/i18n/locales/de'; // eslint-disable-line import/no-unresolved
// @ts-ignore no declaration file
import es from 'vanillajs-datepicker/js/i18n/locales/es'; // eslint-disable-line import/no-unresolved
// @ts-ignore no declaration file
import fr from 'vanillajs-datepicker/js/i18n/locales/fr'; // eslint-disable-line import/no-unresolved
// @ts-ignore no declaration file
import it from 'vanillajs-datepicker/js/i18n/locales/it'; // eslint-disable-line import/no-unresolved
// @ts-ignore no declaration file
import nl from 'vanillajs-datepicker/js/i18n/locales/nl'; // eslint-disable-line import/no-unresolved
// @ts-ignore no declaration file
import pl from 'vanillajs-datepicker/js/i18n/locales/pl'; // eslint-disable-line import/no-unresolved
// @ts-ignore no declaration file
import pt from 'vanillajs-datepicker/js/i18n/locales/pt'; // eslint-disable-line import/no-unresolved
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsDatepickerController } from './core/controller';
import { ODS_ICON_NAME } from '../../../../icon/src';
import { ODS_INPUT_TYPE } from '../../../../input/src';

Object.assign(Datepicker.locales, de);
Object.assign(Datepicker.locales, es);
Object.assign(Datepicker.locales, fr);
Object.assign(Datepicker.locales, it);
Object.assign(Datepicker.locales, nl);
Object.assign(Datepicker.locales, pl);
Object.assign(Datepicker.locales, pt);

// TODO prevent onBlur when tabbing from input to datepicker? => quid clearable?
// TODO test on ods-form
//  - issue with required
//  - issue with reset => OK with form / OK with osds-form
// TODO test on react example => OK
// TODO shall we trigger value event when value is not a valid date? => see pattern
@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'osds-datepicker.scss',
  tag: 'osds-datepicker',
})
export class OsdsDatepicker implements OdsDatepickerAttribute, OdsDatepickerEvent, OdsDatepickerMethod {
  controller = new OdsDatepickerController<OsdsDatepicker>(this);
  private datepickerElement: HTMLElement | undefined = undefined;
  private datepickerInstance: Datepicker | undefined = undefined;
  private hiddenInput: HTMLInputElement | undefined = undefined;
  private osdsInput?: OsdsInput;

  get datepickerInstanceAccessor(): Datepicker | undefined {
    return this.datepickerInstance;
  }

  @Element() el!: HTMLElement;

  @AttachInternals() internals!: ElementInternals;

  @State() hasFocus = false;

  @Prop({ reflect: true }) ariaLabel: HTMLElement['ariaLabel'] = DEFAULT_ATTRIBUTE.ariaLabel;
  @Prop() ariaLabelledby?: string;
  @Prop({ reflect: true }) clearable?: boolean = DEFAULT_ATTRIBUTE.clearable;
  @Prop({ reflect: true }) datesDisabled?: Date[];
  @Prop({ reflect: true }) daysOfWeekDisabled?: ODS_DATEPICKER_DAY[];
  @Prop({ reflect: true }) defaultValue: Date | null = DEFAULT_ATTRIBUTE.value;
  @Prop({ reflect: true }) disabled: boolean = DEFAULT_ATTRIBUTE.disabled;
  @Prop({ reflect: true }) error: boolean = DEFAULT_ATTRIBUTE.error;
  @Prop({ reflect: true }) format?: string = DEFAULT_ATTRIBUTE.format;
  @Prop({ reflect: true }) inline?: boolean = DEFAULT_ATTRIBUTE.inline;
  @Prop({ reflect: true }) locale?: ODS_DATEPICKER_LOCALE = DEFAULT_ATTRIBUTE.locale;
  @Prop({ reflect: true }) maxDate?: Date;
  @Prop({ reflect: true }) minDate?: Date;
  @Prop({ reflect: true }) name: string = DEFAULT_ATTRIBUTE.name;
  @Prop({ reflect: true }) placeholder?: string;
  @Prop({ reflect: true }) readOnly?: boolean;
  @Prop({ reflect: true }) required?: boolean;
  @Prop({ reflect: true }) showSiblingsMonthDays?: boolean = DEFAULT_ATTRIBUTE.showSiblingsMonthDays;
  @Prop({ mutable: true, reflect: true }) value: Date | null = DEFAULT_ATTRIBUTE.value;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;
  @Event() odsValueChange!: EventEmitter<OdsDatepickerValueChangeEventDetail>;

  @Method()
  async clear(): Promise<void> {
    this.hasFocus = false;
    return this.controller.clear();
  }

  @Method()
  async getValidity(): Promise<OdsCommonFieldValidityState | undefined> {
    return this.osdsInput?.getValidity();
  }

  @Method()
  async reset(): Promise<void> {
    await this.controller.reset();
    this.controller.onChange(this.value);
  }

  @Method()
  async setFocus(): Promise<void> {
    if (!this.disabled) {
      this.hasFocus = true;
      return this.osdsInput?.setFocus();
    }
  }

  @Watch('datesDisabled')
  @Watch('daysOfWeekDisabled')
  @Watch('format')
  @Watch('locale')
  @Watch('maxDate')
  @Watch('minDate')
  updateDatepicker(): void {
    if (!this.datepickerInstance) {
      return;
    }

    this.datepickerInstance.setOptions({
      datesDisabled: this.controller.formatDates(this.datesDisabled, this.format),
      daysOfWeekDisabled: this.daysOfWeekDisabled,
      format: this.format,
      language: this.locale,
      maxDate: this.maxDate ? this.maxDate : undefined,
      minDate: this.minDate ? this.minDate : undefined,
    });
    this.updateSiblingsMonthDaysVisibility();
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

  componentDidLoad(): void {
    this.initializeDatepicker();
  }

  componentWillLoad(): void {
    // Those components are used in some string templates, not JSX,
    // thus Stencil does not detect them correctly and they're not embedded in the build,
    // so we have to manually declare their usage here
    h('osds-icon');

    this.controller.beforeInit();
  }

  formResetCallback(): Promise<void> {
    return this.reset();
  }

  initializeDatepicker(): void {
    if(!this.el.shadowRoot || this.datepickerInstance) {
      return;
    }

    if (!this.hiddenInput || this.hiddenInput.getAttribute('initialized')) {
      return;
    }

    this.datepickerInstance = new Datepicker(this.hiddenInput, {
      datesDisabled: this.controller.formatDates(this.datesDisabled, this.format),
      daysOfWeekDisabled: this.daysOfWeekDisabled,
      format: this.format,
      language: this.locale,
      maxDate: this.maxDate ? this.maxDate : undefined,
      maxView: 2,
      minDate: this.minDate ? this.minDate : undefined,
      nextArrow: '<osds-icon name="triangle-right" size="sm" color="primary"></osds-icon>',
      prevArrow: '<osds-icon name="triangle-left" size="sm" color="primary"></osds-icon>',
    });

    this.datepickerElement = this.el.shadowRoot.querySelector('.datepicker-picker') as HTMLElement;

    this.hiddenInput.addEventListener('changeDate', (e: Event) => {
      const customEvent = e as CustomEvent;
      // Avoid calling the onChange on date clear
      if (customEvent.detail.date) {
        this.controller.onChange(customEvent.detail.date);
      }
    });

    this.hiddenInput.setAttribute('initialized', 'true');

    const datepickerButtons = this.datepickerElement.querySelectorAll('button');
    datepickerButtons.forEach((element) => {
      element.removeAttribute('tabindex');
    });

    const viewSwitch = this.el.shadowRoot.querySelector('.view-switch') as HTMLElement;
    const chevron = document.createElement('osds-icon');
    chevron.setAttribute('name', 'chevron-down');
    chevron.setAttribute('color', 'primary');
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

  onBlur(): void {
    this.hasFocus = false;
  }

  onChange(newValue: Date | null): void {
    this.controller.onChange(newValue);
    this.osdsInput?.setFocus(); // needed to focus the input when selecting using keyboard
  }

  onInputClick(): void {
    this.hasFocus = true;
  }

  onOdsValueChange(event: OdsInputValueChangeEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if ('formattedValue' in event.detail) {
      return;
    }
    this.controller.onOdsValueChange(event.detail);
  }

  render(): FunctionalComponent {
    return (
      <Host
        hasFocus={ this.hasFocus }
        onBlur={ (): void => this.onBlur() }
        onFocus={ (): Promise<void> => this.setFocus() }
      >
        <osds-input
          ariaLabel={ this.ariaLabel }
          ariaLabelledby={ this.ariaLabelledby }
          clearable={ this.clearable }
          disabled={ this.disabled }
          error={ this.error }
          icon={ ODS_ICON_NAME.CALENDAR }
          name={ this.name }
          onClick={ (): void => this.onInputClick() }
          onOdsValueChange={ (event: OdsInputValueChangeEvent): void => this.onOdsValueChange(event) }
          placeholder={ this.placeholder }
          readOnly={ this.readOnly }
          ref={ (el?: HTMLElement): OsdsInput => this.osdsInput = el as OsdsInput & HTMLElement }
          required={ this.required }
          type={ ODS_INPUT_TYPE.text }
          value={ this.controller.formatDate(this.value, this.format) }
        ></osds-input>
        <input
          class="osds-datepicker__hidden-input"
          ref={ (el?: HTMLInputElement): HTMLInputElement | undefined => this.hiddenInput = el || this.hiddenInput }
          tabindex={ -1 }
          value={ this.controller.formatDate(this.defaultValue || this.value, this.format) }
        ></input>
      </Host>
    );
  }
}

import type { ODS_DATEPICKER_DAY } from './constants/datepicker-day';
import type { ODS_DATEPICKER_LOCALE } from './constants/datepicker-locale';
import type { OdsDatepickerAttribute } from './interfaces/attributes';
import type { OdsDatepickerEvent, OdsDatepickerValueChangeEventDetail } from './interfaces/events';
import type { OdsInputValue } from '@ovhcloud/ods-common-core';
import type { EventEmitter,FunctionalComponent } from '@stencil/core';
import { AttachInternals, Component, Element, Event, Host, Listen, Prop, State, Watch, h } from '@stencil/core';
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

@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'osds-datepicker.scss',
  tag: 'osds-datepicker',
})
export class OsdsDatepicker implements OdsDatepickerAttribute, OdsDatepickerEvent {
  controller: OdsDatepickerController = new OdsDatepickerController(this);
  private datepickerInstance: Datepicker | undefined = undefined;
  private hiddenInput: HTMLInputElement | undefined = undefined;
  private datepickerElement: HTMLElement | undefined = undefined;

  get datepickerInstanceAccessor(): Datepicker | undefined {
    return this.datepickerInstance;
  }

  @Element() el!: HTMLElement;

  @AttachInternals() internals!: ElementInternals;

  @State() hasFocus = false;

  @Prop({ reflect: true }) ariaLabel: HTMLElement['ariaLabel'] = DEFAULT_ATTRIBUTE.ariaLabel;
  @Prop({ reflect: true }) clearable?: boolean = DEFAULT_ATTRIBUTE.clearable;
  @Prop({ reflect: true }) datesDisabled?: Date[] = DEFAULT_ATTRIBUTE.datesDisabled;
  @Prop({ reflect: true }) daysOfWeekDisabled?: ODS_DATEPICKER_DAY[] = DEFAULT_ATTRIBUTE.daysOfWeekDisabled;
  @Prop({ reflect: true }) defaultValue: OdsInputValue = DEFAULT_ATTRIBUTE.value;
  @Prop({ reflect: true }) disabled: boolean = DEFAULT_ATTRIBUTE.disabled;
  @Prop({ reflect: true }) error: boolean = DEFAULT_ATTRIBUTE.error;
  @Prop({ reflect: true }) format?: string = DEFAULT_ATTRIBUTE.format;
  @Prop({ reflect: true }) inline?: boolean = DEFAULT_ATTRIBUTE.inline;
  @Prop({ reflect: true }) locale?: ODS_DATEPICKER_LOCALE = DEFAULT_ATTRIBUTE.locale;
  @Prop({ reflect: true }) maxDate?: Date | null = DEFAULT_ATTRIBUTE.maxDate;
  @Prop({ reflect: true }) minDate?: Date | null = DEFAULT_ATTRIBUTE.minDate;
  @Prop({ reflect: true }) name: string = DEFAULT_ATTRIBUTE.name;
  @Prop({ reflect: true }) placeholder?: string = DEFAULT_ATTRIBUTE.placeholder;
  @Prop({ reflect: true }) showSiblingsMonthDays?: boolean = DEFAULT_ATTRIBUTE.showSiblingsMonthDays;
  @Prop({ mutable: true, reflect: true }) value: OdsInputValue = DEFAULT_ATTRIBUTE.value;

  @Event() odsDatepickerBlur!: EventEmitter<void>;
  @Event() odsDatepickerFocus!: EventEmitter<void>;
  @Event() odsDatepickerValueChange!: EventEmitter<OdsDatepickerValueChangeEventDetail>;

  @Listen('odsValueChange')
  handleInputValueChange(event: CustomEvent): void {
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
  updateDatepicker(): void {
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

  componentWillLoad(): void {
    // Those components are used in some string templates, not JSX,
    // thus Stencil does not detect them correctly and they're not embedded in the build,
    // so we have to manually declare their usage here
    h('osds-icon');

    this.controller.beforeInit();
  }

  formResetCallback(): void {
    this.value = this.defaultValue;
  }

  emitBlur(): void {
    this.odsDatepickerBlur.emit();
  }

  emitFocus(): void {
    this.odsDatepickerFocus.emit();
  }

  emitDatepickerValueChange(newValue: Date | undefined | null, oldValue?: Date | undefined | null): void {
    this.odsDatepickerValueChange.emit({
      formattedValue: newValue && this.format ? Datepicker.formatDate(newValue, this.format) : undefined,
      name: this.name,
      oldValue: oldValue,
      value: newValue,
    });
  }

  onBlur(): void {
    this.controller.onBlur();
  }

  onChange(newValue: Date | undefined | null): void {
    this.controller.onChange(newValue, this.value as Date);
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
      nextArrow: '<osds-icon name="triangle-right" size="sm" color="primary"></osds-icon>',
      prevArrow: '<osds-icon name="triangle-left" size="sm" color="primary"></osds-icon>',
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

  formatDate(date?: OdsInputValue): string {
    if (this.format && date && date instanceof Date) {
      return Datepicker.formatDate(date, this.format);
    } else {
      return '';
    }
  }

  render(): FunctionalComponent {
    return (
      <Host
        disabled={ this.disabled }
        error={ this.error }
        hasFocus={ this.hasFocus }
        inline={ this.inline }
        onBlur={ (): void => this.onBlur() }
        onFocus={ (): void => this.onFocus() }
      >
        <osds-input
          clearable={ this.clearable }
          disabled={ this.disabled }
          error={ this.error }
          icon={ODS_ICON_NAME.CALENDAR}
          onClick={ (): void => this.onClick() }
          placeholder={ this.placeholder }
          type={ODS_INPUT_TYPE.text}
          value={ this.formatDate(this.value) }
        ></osds-input>
        <input
          tabindex={ -1 }
          class="osds-datepicker__hidden-input"
          ref={ (el?: HTMLInputElement): HTMLInputElement | undefined => this.hiddenInput = el || this.hiddenInput }
        ></input>
      </Host>
    );
  }
}

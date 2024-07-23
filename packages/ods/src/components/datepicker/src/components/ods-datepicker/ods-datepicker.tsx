import { AttachInternals, Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, Watch, h } from '@stencil/core';
import { Datepicker } from 'vanillajs-datepicker';
// @ts-ignore no existing declaration
import de from 'vanillajs-datepicker/js/i18n/locales/de'; // eslint-disable-line import/no-unresolved
// @ts-ignore no existing declaration
import es from 'vanillajs-datepicker/js/i18n/locales/es'; // eslint-disable-line import/no-unresolved
// @ts-ignore no existing declaration
import fr from 'vanillajs-datepicker/js/i18n/locales/fr'; // eslint-disable-line import/no-unresolved
// @ts-ignore no existing declaration
import it from 'vanillajs-datepicker/js/i18n/locales/it'; // eslint-disable-line import/no-unresolved
// @ts-ignore no existing declaration
import nl from 'vanillajs-datepicker/js/i18n/locales/nl'; // eslint-disable-line import/no-unresolved
// @ts-ignore no existing declaration
import pl from 'vanillajs-datepicker/js/i18n/locales/pl'; // eslint-disable-line import/no-unresolved
// @ts-ignore no existing declaration
import pt from 'vanillajs-datepicker/js/i18n/locales/pt'; // eslint-disable-line import/no-unresolved
import { ODS_ICON_NAME } from '../../../../icon/src';
import { ODS_SPINNER_COLOR } from '../../../../spinner/src';
import { type OdsDatepickerDay } from '../../constants/datepicker-day';
import { ODS_DATEPICKER_LOCALE, type OdsDatepickerLocale } from '../../constants/datepicker-locale';
import { formatDate, setFormValue } from '../../controller/ods-datepicker';
import { type OdsDatepickerChangeEventDetail } from '../../interfaces/events';

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
  private datepickerInstance?: Datepicker;
  private inputElement?: HTMLInputElement;

  @Element() el!: HTMLElement;

  @AttachInternals() internals!: ElementInternals;

  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  @Prop({ reflect: true }) public datesDisabled: Date[] = [];
  /** @docType OdsDatepickerDay[] */
  @Prop({ reflect: true }) public daysOfWeekDisabled: OdsDatepickerDay[] = [];
  @Prop({ reflect: true }) public defaultValue?: Date;
  @Prop({ reflect: true }) public format: string = 'dd/mm/yyyy';
  @Prop({ reflect: true }) public hasError: boolean = false;
  @Prop({ reflect: true }) public isClearable: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isLoading: boolean = false;
  @Prop({ reflect: true }) public isReadonly: boolean = false;
  @Prop({ reflect: true }) public isRequired: boolean = false;
  /** @docType OdsDatepickerLocale */
  @Prop({ reflect: true }) public locale: OdsDatepickerLocale = ODS_DATEPICKER_LOCALE.en;
  @Prop({ reflect: true }) public max?: Date;
  @Prop({ reflect: true }) public min?: Date;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ reflect: true }) public placeholder?: string;
  @Prop({ mutable: true, reflect: true }) public value: Date | null = null;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsDatepickerChangeEventDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;

  @Method()
  async clear(): Promise<void> {
    this.odsClear.emit();
    // This will trigger the "changeDate" event that will take care of updating value, internals and emit change
    this.datepickerInstance?.setDate({ clear: true });
    this.inputElement?.focus();
  }

  @Method()
  async close(): Promise<void> {
    this.datepickerInstance?.hide();
  }

  @Method()
  async getValidity(): Promise<ValidityState | undefined> {
    return this.inputElement?.validity;
  }

  @Method()
  async open(): Promise<void> {
    this.datepickerInstance?.show();
  }

  @Method()
  async reset(): Promise<void> {
    this.odsReset.emit();

    // Those will trigger the "changeDate" event that will take care of updating value, internals and emit change
    if (this.defaultValue) {
      this.datepickerInstance?.setDate(this.defaultValue);
    } else {
      this.datepickerInstance?.setDate({ clear: true });
    }
  }

  @Watch('datesDisabled')
  onDatesDisabledChange(): void {
    this.datepickerInstance?.setOptions({ datesDisabled: this.datesDisabled?.map((date) => Datepicker.formatDate(date, this.format)) });
  }

  @Watch('daysOfWeekDisabled')
  onDaysOfWeekDisabledChange(): void {
    this.datepickerInstance?.setOptions({ daysOfWeekDisabled: this.daysOfWeekDisabled });
  }

  @Watch('format')
  onFormatChange(): void {
    this.datepickerInstance?.setOptions({ format: this.format });
  }

  @Watch('locale')
  onLocaleChange(): void {
    this.datepickerInstance?.setOptions({ language: this.locale });
  }

  @Watch('max')
  onMaxChange(): void {
    this.datepickerInstance?.setOptions({ maxDate: this.max });
  }

  @Watch('min')
  onMinChange(): void {
    this.datepickerInstance?.setOptions({ minDate: this.min });
  }

  componentWillLoad(): void {
    // Those components are used in some string templates, not JSX,
    // thus Stencil does not detect them correctly and they're not embedded in the build,
    // so we have to manually declare their usage here
    h('ods-icon');

    if (!this.value) {
      this.value = this.defaultValue ? new Date(this.defaultValue) : null;
    }
    setFormValue(this.internals, formatDate(this.value, this.format));
  }

  componentDidLoad(): void {
    if (!this.datepickerInstance && this.inputElement) {
      this.datepickerInstance = new Datepicker(this.inputElement, {
        autohide: true,
        datesDisabled: this.datesDisabled.map((date) => Datepicker.formatDate(date, this.format)),
        daysOfWeekDisabled: this.daysOfWeekDisabled.map((day) => parseInt(day, 10)),
        enableOnReadonly: false,
        format: this.format,
        language: this.locale,
        maxDate: this.max,
        maxView: 2,
        minDate: this.min,
        nextArrow: `<ods-icon name="${ODS_ICON_NAME.chevronRight}"></ods-icon>`,
        prevArrow: `<ods-icon name="${ODS_ICON_NAME.chevronLeft}"></ods-icon>`,
        showOnClick: true,
        showOnFocus: true,
        todayHighlight: true,
        updateOnBlur: true,
      });
      // Apply initial DOM changes on the picker
      this.updateViewSwitch();

      // We need to reapply the dom customization on every picker changes
      ['changeView', 'changeMonth', 'changeYear'].forEach((event) => {
        this.inputElement?.addEventListener(event, (e: Event) => {
          // We add the chevron on switch only if we didn't reached the last view
          if ((e as CustomEvent).detail.viewId < 2) {
            this.updateViewSwitch();
          }
        });
      });

      // Manage the component value change
      // Triggered either by user selection or `setDate` instance method call
      this.inputElement.addEventListener('changeDate', (event: Event) => {
        const newDate: Date = (event as CustomEvent).detail.date;
        const formattedNewDate = formatDate(newDate, this.format);

        const previousValue = this.value;
        this.value = newDate ?? null;
        setFormValue(this.internals, formattedNewDate);

        this.odsChange.emit({
          formattedValue: formattedNewDate,
          name: this.name,
          previousValue,
          validity: this.inputElement?.validity,
          value: this.value,
        });
      });
    }
  }

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private onClearButtonKeyUp(event: KeyboardEvent): void {
    event.preventDefault();

    if(event.key === ' ' && !this.isDisabled) {
      this.clear();
    }
  }

  private updateViewSwitch(): void {
    const viewSwitch = this.el.shadowRoot?.querySelector<HTMLElement>('.view-switch');

    if (viewSwitch && viewSwitch.childElementCount < 1) {
      const chevron = document.createElement('ods-icon');
      chevron.setAttribute('name', ODS_ICON_NAME.chevronDown);
      viewSwitch.appendChild(chevron);
    }
  }

  render(): FunctionalComponent {
    const hasClearableAction = this.isClearable && !this.isLoading && !!this.value;

    return (
      <Host class="ods-datepicker">
        <input
          aria-label={ this.ariaLabel }
          aria-labelledby={ this.ariaLabelledby }
          class={{
            'ods-datepicker__input': true,
            'ods-datepicker__input--clearable': hasClearableAction,
            'ods-datepicker__input--error': this.hasError,
            'ods-datepicker__input--loading': this.isLoading,
          }}
          disabled={ this.isDisabled }
          name={ this.name }
          placeholder={ this.placeholder }
          readonly={ this.isReadonly }
          ref={ (el): HTMLInputElement => this.inputElement = el as HTMLInputElement }
          required={ this.isRequired }
          type="text"
          value={ formatDate(this.value, this.format) }>
        </input>

        <div class="ods-datepicker__actions">
          {
            this.isLoading &&
            <ods-spinner
              class="ods-datepicker__actions__spinner"
              color={ this.isDisabled ? ODS_SPINNER_COLOR.neutral : ODS_SPINNER_COLOR.primary }>
            </ods-spinner>
          }

          {
            hasClearableAction &&
            <button
              class="ods-datepicker__actions__clearable"
              disabled={ this.isDisabled || this.isReadonly }
              onClick={ () => this.clear() }
              onKeyUp={ (e: KeyboardEvent): void => this.onClearButtonKeyUp(e) }>
              <ods-icon name={ ODS_ICON_NAME.xmark }>
              </ods-icon>
            </button>
          }

          <ods-icon
            class={{
              'ods-datepicker__actions__icon': true,
              'ods-datepicker__actions__icon--disabled': this.isDisabled,
            }}
            name={ ODS_ICON_NAME.calendar }>
          </ods-icon>
        </div>
      </Host>
    );
  }
}

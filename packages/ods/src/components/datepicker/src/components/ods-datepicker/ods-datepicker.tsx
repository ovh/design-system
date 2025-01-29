import { AttachInternals, Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
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
import { type OdsFormElement } from '../../../../../types';
import { isDate } from '../../../../../utils/type';
import { ODS_BUTTON_COLOR, ODS_BUTTON_SIZE, ODS_BUTTON_VARIANT } from '../../../../button/src';
import { ODS_ICON_NAME } from '../../../../icon/src';
import { ODS_SPINNER_COLOR } from '../../../../spinner/src';
import { type OdsDatepickerDay } from '../../constants/datepicker-day';
import { ODS_DATEPICKER_LOCALE, type OdsDatepickerLocale } from '../../constants/datepicker-locale';
import { ODS_DATEPICKER_STRATEGY, type OdsDatepickerStrategy } from '../../constants/datepicker-strategy';
import { VALUE_DEFAULT_VALUE, formatDate, getInitialValue, updateInternals } from '../../controller/ods-datepicker';
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
  shadow: {
    delegatesFocus: true,
  },
  styleUrl: 'ods-datepicker.scss',
  tag: 'ods-datepicker',
})
export class OdsDatepicker implements OdsFormElement {
  private datepickerInstance?: Datepicker;
  private inputElement?: HTMLInputElement;
  private observer?: MutationObserver;
  private shouldUpdateIsInvalidState: boolean = false;

  @Element() el!: HTMLElement;

  @AttachInternals() internals!: ElementInternals;

  @State() private isInvalid: boolean | undefined;
  @State() private showClearable: boolean = false;

  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  @Prop({ reflect: true }) public datesDisabled: Date[] = [];
  @Prop({ reflect: true }) public daysOfWeekDisabled: OdsDatepickerDay[] = [];
  @Prop({ reflect: true }) public defaultValue?: Date | string;
  @Prop({ reflect: true }) public format: string = 'dd/mm/yyyy';
  @Prop({ reflect: true }) public hasError: boolean = false;
  @Prop({ reflect: true }) public isClearable: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isLoading: boolean = false;
  @Prop({ reflect: true }) public isReadonly: boolean = false;
  @Prop({ reflect: true }) public isRequired: boolean = false;
  @Prop({ reflect: true }) public locale: OdsDatepickerLocale = ODS_DATEPICKER_LOCALE.en;
  @Prop({ reflect: true }) public max?: Date | string;
  @Prop({ reflect: true }) public min?: Date | string;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ reflect: true }) public placeholder?: string;
  @Prop({ reflect: true }) public strategy: OdsDatepickerStrategy = ODS_DATEPICKER_STRATEGY.absolute;
  @Prop({ mutable: true, reflect: true }) public value: Date | null = VALUE_DEFAULT_VALUE;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsDatepickerChangeEventDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsInvalid!: EventEmitter<{ isInvalid: boolean }>;
  @Event() odsReset!: EventEmitter<void>;

  @Listen('invalid')
  onInvalidEvent(event: Event): void {
    // Remove the native validation message popup
    event.preventDefault();

    // Enforce the state here as we may still be in pristine state (if the form is submitted before any changes occurs)
    this.isInvalid = true;
  }

  @Method()
  async checkValidity(): Promise<boolean> {
    this.isInvalid = !this.internals.validity.valid;
    return this.internals.checkValidity();
  }

  @Method()
  public async clear(): Promise<void> {
    this.odsClear.emit();

    // Element internal validityState is not yet updated, so we set the flag
    // to update our internal state when it will be up-to-date
    this.shouldUpdateIsInvalidState = true;

    // This will trigger the "changeDate" event that will take care of updating value, internals and emit change
    this.datepickerInstance?.setDate({ clear: true });
    this.inputElement?.focus();
  }

  @Method()
  public async close(): Promise<void> {
    this.datepickerInstance?.hide();
  }

  @Method()
  public async getValidationMessage(): Promise<string> {
    return this.internals.validationMessage;
  }

  @Method()
  public async getValidity(): Promise<ValidityState | undefined> {
    return this.internals.validity;
  }

  @Method()
  public async reportValidity(): Promise<boolean> {
    this.isInvalid = !this.internals.validity.valid;
    return this.internals.reportValidity();
  }

  @Method()
  public async open(): Promise<void> {
    this.datepickerInstance?.show();
  }

  @Method()
  public async reset(): Promise<void> {
    this.odsReset.emit();

    // Element internal validityState is not yet updated, so we set the flag
    // to update our internal state when it will be up-to-date
    this.shouldUpdateIsInvalidState = true;

    // Those will trigger the "changeDate" event that will take care of updating value, internals and emit change
    if (this.defaultValue) {
      const defaultValue = new Date(Datepicker.parseDate(this.defaultValue, this.format));
      this.datepickerInstance?.setDate(defaultValue);
    } else {
      this.datepickerInstance?.setDate({ clear: true });
    }
  }

  @Method()
  async willValidate(): Promise<boolean> {
    return this.internals.willValidate;
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

  @Watch('isInvalid')
  onIsInvalidChange(): void {
    this.odsInvalid.emit({ isInvalid: !!this.isInvalid });
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

  @Watch('value')
  onValueChangeFromJs(): void {
    if (this.value && isDate(this.value)) {
      this.datepickerInstance?.setDate(new Date(this.value.toDateString()));
    }
  }

  componentWillLoad(): void {
    // Those components are used in some string templates, not JSX,
    // thus Stencil does not detect them correctly and they're not embedded in the build,
    // so we have to manually declare their usage here
    h('ods-icon');

    // We set the value before the observer starts to avoid calling the mutation callback twice
    // as it will be called on componentDidLoad (when native element validity is up-to-date)
    this.value = getInitialValue(this.value, this.format, this.defaultValue);

    this.observer = new MutationObserver((mutations: MutationRecord[]) => {
      for (const mutation of mutations) {
        // When observing is-required, the inner element validity is not yet up-to-date
        // so we observe the element required attribute instead
        if (mutation.attributeName === 'required') {
          updateInternals(this.internals, formatDate(this.value, this.format), this.inputElement);
          this.isInvalid = !this.internals.validity.valid;
        }
      }
    });
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
        this.onValueChange(formattedNewDate, previousValue);
        if (formattedNewDate) {
          this.showClearable = true;
        } else {
          this.showClearable = false;
        }
      });
    }

    // Init the internals correctly as native element validity is now up-to-date
    this.onValueChange(formatDate(this.value, this.format));

    if (this.inputElement) {
      this.observer?.observe(this.inputElement, {
        attributeFilter: ['required'],
        attributeOldValue: false,
      });
    }
  }

  disconnectedCallback(): void {
    this.observer?.disconnect();
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

  private onBlur(): void {
    this.isInvalid = !this.internals.validity.valid;
    this.shouldUpdateIsInvalidState = true;
    this.odsBlur.emit();
  }

  private onValueChange(formattedValue: string, previousValue?: Date | null): void {
    updateInternals(this.internals, formattedValue, this.inputElement);

    // In case the value gets updated from an other source than a blur event
    // we may have to perform an internal validity state update
    if (this.shouldUpdateIsInvalidState) {
      this.isInvalid = !this.internals.validity.valid;
      this.shouldUpdateIsInvalidState = false;
    }

    this.odsChange.emit({
      formattedValue,
      name: this.name,
      previousValue,
      validity: this.internals.validity,
      value: this.value,
    });
  }

  private onInput(event: InputEvent): void {
    this.showClearable = !(event.target as HTMLInputElement).value;
  }

  render(): FunctionalComponent {
    const hasClearableAction = this.isClearable && !this.isLoading && (this.showClearable || !!this.value);

    return (
      <Host class={ `ods-datepicker ods-datepicker--${this.strategy}` }
        disabled={ this.isDisabled }
        readonly={ this.isReadonly }>
        <input
          aria-label={ this.ariaLabel }
          aria-labelledby={ this.ariaLabelledby }
          class={{
            'ods-datepicker__input': true,
            'ods-datepicker__input--clearable': hasClearableAction,
            'ods-datepicker__input--error': this.hasError || !!this.isInvalid,
            'ods-datepicker__input--loading': this.isLoading,
          }}
          disabled={ this.isDisabled }
          name={ this.name }
          onBlur={ () => this.onBlur() }
          onFocus={ () => this.odsFocus.emit() }
          onInput={ (event) => this.onInput(event) }
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
            <ods-button
              color={ ODS_BUTTON_COLOR.neutral }
              icon={ ODS_ICON_NAME.xmark }
              isDisabled={ this.isDisabled || this.isReadonly }
              label=""
              onClick={ () => this.clear() }
              onKeyUp={ (e: KeyboardEvent): void => this.onClearButtonKeyUp(e) }
              size={ ODS_BUTTON_SIZE.xs }
              variant={ ODS_BUTTON_VARIANT.ghost }>
            </ods-button>
          }

          <ods-icon
            class={{
              'ods-datepicker__actions__icon': true,
              'ods-datepicker__actions__icon--disabled': this.isDisabled,
              'ods-datepicker__actions__icon--readonly': this.isReadonly,
            }}
            name={ ODS_ICON_NAME.calendar }
            onClick={ () => this.open() }>
          </ods-icon>
        </div>
      </Host>
    );
  }
}

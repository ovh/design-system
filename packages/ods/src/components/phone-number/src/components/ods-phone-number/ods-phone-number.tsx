import { AttachInternals, Component, Event, type EventEmitter, type FunctionalComponent, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { submitFormOnEnter } from '../../../../../utils/dom';
import { type OdsInput, type OdsInputChangeEvent } from '../../../../input/src';
import { type OdsSelectChangeEvent, type OdsSelectCustomRendererData } from '../../../../select/src';
import { type OdsPhoneNumberCountryIsoCode } from '../../constants/phone-number-country-iso-code';
import { type OdsPhoneNumberCountryPreset } from '../../constants/phone-number-country-preset';
import { type OdsPhoneNumberLocale } from '../../constants/phone-number-locale';
import {
  type TranslatedCountryMap,
  formatPhoneNumber,
  getCurrentIsoCode,
  getCurrentLocale,
  getNationalPhoneNumberExample,
  getTranslatedCountryMap,
  getValidityMessage,
  getValidityState,
  isValidPhoneNumber,
  parseCountries,
  sortCountriesByName,
  updateInternals,
} from '../../controller/ods-phone-number';
import { type OdsPhoneNumberChangeEventDetail } from '../../interfaces/events';

const VALUE_DEFAULT_VALUE = null;

@Component({
  formAssociated: true,
  shadow: {
    delegatesFocus: true,
  },
  styleUrl: 'ods-phone-number.scss',
  tag: 'ods-phone-number',
})
export class OdsPhoneNumber {
  private hasCountries: boolean = false;
  private i18nCountriesMap?: TranslatedCountryMap;
  private inputElement?: HTMLElement & OdsInput;
  private isInitialLoadDone: boolean = false;
  private parsedCountryCodes: OdsPhoneNumberCountryIsoCode[] = [];
  private phoneUtils = PhoneNumberUtil.getInstance();
  private shouldUpdateIsInvalidState: boolean = false;

  @AttachInternals() private internals!: ElementInternals;

  @State() isInvalid: boolean = false;

  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  @Prop({ reflect: true }) public countries?: OdsPhoneNumberCountryIsoCode[] | OdsPhoneNumberCountryPreset | string;
  @Prop({ reflect: true }) public defaultValue?: string;
  @Prop({ mutable: true, reflect: true }) public hasError: boolean = false;
  @Prop({ reflect: true }) public isClearable: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isLoading: boolean = false;
  @Prop({ reflect: true }) public isReadonly: boolean = false;
  @Prop({ reflect: true }) public isRequired: boolean = false;
  @Prop({ mutable: true, reflect: true }) public isoCode?: OdsPhoneNumberCountryIsoCode;
  @Prop({ mutable: true, reflect: true }) public locale?: OdsPhoneNumberLocale;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ reflect: true }) public pattern?: string;
  @Prop({ mutable: true, reflect: true }) public value: string | null = VALUE_DEFAULT_VALUE;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsPhoneNumberChangeEventDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;

  @Listen('invalid')
  onInvalidEvent(event: Event): void {
    // Remove the native validation message popup
    event.preventDefault();

    // Enforce the state here as we may still be in pristine state (if the form is submitted before any changes occurs)
    this.isInvalid = true;
  }

  @Method()
  public async checkValidity(): Promise<boolean> {
    return this.internals.checkValidity();
  }

  @Method()
  public async clear(): Promise<void> {
    await this.inputElement?.clear();
    this.shouldUpdateIsInvalidState = true;
  }

  @Method()
  public async getValidationMessage(): Promise<string> {
    return this.internals.validationMessage;
  }

  @Method()
  public async getValidity(): Promise<ValidityState | undefined> {
    return getValidityState(this.isInvalid, this.internals.validity);
  }

  @Method()
  public async reportValidity(): Promise<boolean> {
    return this.internals.reportValidity();
  }

  @Method()
  public async reset(): Promise<void> {
    await this.inputElement?.reset();
    this.shouldUpdateIsInvalidState = true;
  }

  @Method()
  public async willValidate(): Promise<boolean> {
    return this.internals.willValidate;
  }

  @Watch('countries')
  onCountriesChange(): void {
    this.parsedCountryCodes = parseCountries(this.countries, this.phoneUtils) || [];
    this.hasCountries = !!this.parsedCountryCodes?.length;
  }

  @Watch('isoCode')
  onIsoCodeChange(): void {
    if (this.isInitialLoadDone) {
      this.value = '';
      this.shouldUpdateIsInvalidState = true;
    }
  }

  @Watch('locale')
  onLocaleChange(locale: OdsPhoneNumberLocale): void {
    this.i18nCountriesMap = getTranslatedCountryMap(locale, this.phoneUtils);
    this.parsedCountryCodes = sortCountriesByName(this.parsedCountryCodes, this.i18nCountriesMap);
  }

  componentWillLoad(): void {
    this.onCountriesChange();
    this.isoCode = getCurrentIsoCode(this.isoCode, this.parsedCountryCodes[0]);
    const currentLocale = getCurrentLocale(this.locale);

    if (currentLocale === this.locale) { // in that case the watcher is not triggered so we explicitly call it
      this.onLocaleChange(this.locale);
    } else { // but if the value is different, it will trigger the watcher automatically
      this.locale = currentLocale;
    }

    if (!this.value && (this.value !== VALUE_DEFAULT_VALUE || this.defaultValue)) {
      this.onInputChange(new CustomEvent('', {
        detail: {
          name: this.name,
          value: this.value,
        },
      }));
    }

    // Watcher get called on will load, so we need to prevent value reset
    this.isInitialLoadDone = true;
  }

  async componentDidLoad(): Promise<void> {
    const formattedValue = formatPhoneNumber(this.value, this.isoCode, this.phoneUtils);
    const inputValidity = await this.inputElement?.getValidity?.();
    const validityState = getValidityState(this.isInvalid, inputValidity);
    await updateInternals(this.internals, formattedValue, validityState, this.inputElement);
  }

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private getIsInvalid(): boolean {
    return !isValidPhoneNumber(this.value, this.isoCode, this.phoneUtils) || !this.internals.validity.valid;
  }

  private getPlaceholder(): string {
    return getNationalPhoneNumberExample(this.isoCode, this.phoneUtils);
  }

  private onBlur(): void {
    this.isInvalid = this.getIsInvalid();
  }

  private async onInputChange(event: OdsInputChangeEvent): Promise<void> {
    event.stopImmediatePropagation();

    this.value = event.detail.value?.toString() ?? null;
    const formattedValue = formatPhoneNumber(this.value, this.isoCode, this.phoneUtils);

    const validityState = await this.updateValidity(formattedValue);

    this.odsChange.emit({
      isoCode: this.isoCode,
      name: this.name,
      previousValue: event.detail.previousValue?.toString() ?? null,
      validity: validityState,
      value: formattedValue,
    });
  }

  private onSelectChange(event: OdsSelectChangeEvent): void {
    this.isoCode = event.detail.value as OdsPhoneNumberCountryIsoCode;
  }

  private async updateValidity(formattedValue: string | null): Promise<ValidityState> {
    const inputValidityState = await this.inputElement?.getValidity();
    const isNotValidPhoneNumber = !isValidPhoneNumber(this.value, this.isoCode, this.phoneUtils);
    const validityMessage = getValidityMessage(isNotValidPhoneNumber);
    const validityState = getValidityState(isNotValidPhoneNumber, inputValidityState);

    await updateInternals(this.internals, formattedValue, validityState, this.inputElement, validityMessage);
    // update here after update internals
    if (this.shouldUpdateIsInvalidState) {
      this.isInvalid = this.getIsInvalid();
      this.shouldUpdateIsInvalidState = false;
    }
    return validityState;
  }

  render(): FunctionalComponent {
    return (
      <Host class="ods-phone-number"
        disabled={ this.isDisabled }
        readonly={ this.isReadonly }>
        {
          this.hasCountries &&
          <ods-select
            borderRounded="left"
            class={{
              'ods-phone-number__iso-codes': true,
              'ods-phone-number__iso-codes--is-disabled': this.isDisabled,
            }}
            customRenderer={{
              item: (data: OdsSelectCustomRendererData) => `<span part="flag flag-${data.value}"></span>`,
              option: (data: OdsSelectCustomRendererData) => `
<div style="display: grid; grid-template-columns: max-content 1fr; column-gap: 8px; white-space: nowrap;">
  <span part="flag flag-${data.value}"></span>
  <span>${data.name} (+${data.phoneCode})</span>
</div>
`,
            }}
            dropdownWidth="auto"
            hasError={ this.hasError || this.isInvalid }
            isDisabled={ this.isDisabled }
            isReadonly={ this.isReadonly }
            name="iso-code"
            onOdsChange={ (e: OdsSelectChangeEvent) => this.onSelectChange(e) }
            part="select"
            value={ this.isoCode }>
            {
              this.parsedCountryCodes.map((isoCode) => {
                const i18nCountry = this.i18nCountriesMap?.get(isoCode);
                return (
                  <option
                    data-name={ i18nCountry?.name }
                    data-phone-code={ i18nCountry?.phoneCode }
                    value={ isoCode }>
                  </option>
                );
              })
            }
          </ods-select>
        }

        <ods-input
          ariaLabel={ this.ariaLabel }
          ariaLabelledby={ this.ariaLabelledby }
          class={{
            'ods-phone-number__input': true,
            'ods-phone-number__input--sibling': this.hasCountries,
          }}
          defaultValue={ this.defaultValue }
          hasError={ this.hasError || this.isInvalid }
          isClearable={ this.isClearable }
          isDisabled={ this.isDisabled }
          isLoading={ this.isLoading }
          isReadonly={ this.isReadonly }
          isRequired={ this.isRequired }
          name={ this.name }
          onKeyUp={ (event: KeyboardEvent): void => submitFormOnEnter(event, this.internals.form) }
          onOdsBlur={ () => this.onBlur() }
          onOdsChange={ (e: OdsInputChangeEvent) => this.onInputChange(e) }
          exportparts="input"
          pattern={ this.pattern }
          placeholder={ this.getPlaceholder() }
          ref={ (el?: unknown): OdsInput => this.inputElement = el as HTMLElement & OdsInput }
          value={ this.value }>
        </ods-input>
      </Host>
    );
  }
}

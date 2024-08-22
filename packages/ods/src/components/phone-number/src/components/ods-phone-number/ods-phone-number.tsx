import { AttachInternals, Component, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, Watch, h } from '@stencil/core';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { submitFormOnEnter } from '../../../../../utils/dom';
import { type OdsInput, type OdsInputChangeEvent } from '../../../../input/src';
import { type OdsSelectChangeEvent, type OdsSelectCustomRendererData } from '../../../../select/src';
import { type OdsPhoneNumberCountryIsoCode } from '../../constants/phone-number-country-iso-code';
import { type OdsPhoneNumberCountryPreset } from '../../constants/phone-number-country-preset';
import { type OdsPhoneNumberLocale } from '../../constants/phone-number-locale';
import { type TranslatedCountryMap, formatPhoneNumber, getCurrentIsoCode, getCurrentLocale, getNationalPhoneNumberExample, getTranslatedCountryMap, getValidityState, isValidPhoneNumber, parseCountries, setFormValue, sortCountriesByName } from '../../controller/ods-phone-number';
import { type OdsPhoneNumberChangeEventDetail } from '../../interfaces/events';

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
  private inputElement?: OdsInput;
  private isInitialLoadDone: boolean = false;
  private parsedCountryCodes: OdsPhoneNumberCountryIsoCode[] = [];
  private phoneUtils = PhoneNumberUtil.getInstance();

  @AttachInternals() private internals!: ElementInternals;

  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  /** @docType OdsPhoneNumberCountryIsoCode[] | OdsPhoneNumberCountryPreset | string */
  @Prop({ reflect: true }) public countries?: OdsPhoneNumberCountryIsoCode[] | OdsPhoneNumberCountryPreset | string;
  @Prop({ reflect: true }) public defaultValue?: string;
  @Prop({ mutable: true, reflect: true }) public hasError: boolean = false;
  @Prop({ reflect: true }) public isClearable: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isLoading: boolean = false;
  @Prop({ reflect: true }) public isReadonly: boolean = false;
  @Prop({ reflect: true }) public isRequired: boolean = false;
  /** @docType OdsPhoneNumberCountryIsoCode */
  @Prop({ mutable: true, reflect: true }) public isoCode?: OdsPhoneNumberCountryIsoCode;
  /** @docType OdsPhoneNumberLocale */
  @Prop({ mutable: true, reflect: true }) public locale?: OdsPhoneNumberLocale;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ reflect: true }) public pattern?: string;
  @Prop({ mutable: true, reflect: true }) public value: string | null = null;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsPhoneNumberChangeEventDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;

  @Method()
  async clear(): Promise<void> {
    return this.inputElement?.clear();
  }

  @Method()
  async getValidity(): Promise<ValidityState | undefined> {
    const inputValidity = await this.inputElement?.getValidity();
    return getValidityState(this.hasError, inputValidity);
  }

  @Method()
  async reset(): Promise<void> {
    return this.inputElement?.reset();
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
      this.hasError = false;
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

    if (this.value) {
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

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private getPlaceholder(): string {
    return getNationalPhoneNumberExample(this.isoCode, this.phoneUtils);
  }

  private onInputChange(event: OdsInputChangeEvent): void {
    event.stopImmediatePropagation();

    this.value = event.detail.value?.toString() ?? null;
    this.hasError = !isValidPhoneNumber(this.value, this.isoCode, this.phoneUtils);

    const formattedValue = formatPhoneNumber(this.value, this.hasError, this.isoCode, this.phoneUtils);
    setFormValue(this.internals, formattedValue);

    this.odsChange.emit({
      isoCode: this.isoCode,
      name: this.name,
      previousValue: event.detail.previousValue?.toString() ?? null,
      validity: getValidityState(this.hasError, event.detail.validity),
      value: formattedValue,
    });
  }

  private onSelectChange(event: OdsSelectChangeEvent): void {
    this.isoCode = event.detail.value as OdsPhoneNumberCountryIsoCode;
  }

  render(): FunctionalComponent {
    return (
      <Host class="ods-phone-number">
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
            hasError={ this.hasError }
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
          hasError={ this.hasError }
          isClearable={ this.isClearable }
          isDisabled={ this.isDisabled }
          isLoading={ this.isLoading }
          isReadonly={ this.isReadonly }
          isRequired={ this.isRequired }
          name={ this.name }
          onKeyUp={ (event: KeyboardEvent): void => submitFormOnEnter(event, this.internals.form) }
          onOdsChange={ (e: OdsInputChangeEvent) => this.onInputChange(e) }
          exportparts="input"
          pattern={ this.pattern }
          placeholder={ this.getPlaceholder() }
          ref={ (el?: unknown): OdsInput => this.inputElement = el as OdsInput }
          value={ this.value }>
        </ods-input>
      </Host>
    );
  }
}

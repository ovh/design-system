import type { OdsPhoneNumberAttribute } from './interfaces/attributes';
import type { OdsInputPhoneNumberValueChangeEventDetail, OdsPhoneNumberEvent } from './interfaces/events';
import { OdsLogger, ODS_COUNTRY_ISO_CODE, ODS_LOCALE } from '@ovhcloud/ods-common-core';
import { Component, Host, h, Prop, State, Watch, Event, EventEmitter, Listen } from '@stencil/core';
import { OdsInputValueChangeEventDetail, ODS_INPUT_TYPE } from '@ovhcloud/ods-component-input';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsPhoneNumberController } from './core/controller';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_PHONE_NUMBER_COUNTRY_PRESET } from './constants/phone-number-countries';
import { PhoneNumberUtil } from 'google-libphonenumber';

/**
 * @slot (unnamed) - Phone Number content
 */
@Component({
  tag: 'osds-phone-number',
  styleUrl: 'osds-phone-number.scss',
  shadow: true,
})
export class OsdsPhoneNumber implements OdsPhoneNumberAttribute, OdsPhoneNumberEvent {
  private logger = new OdsLogger('OsdsPhoneNumber');

  controller = new OdsPhoneNumberController(this);
  parsedCountries: ODS_COUNTRY_ISO_CODE[] = [];

  phoneUtils = PhoneNumberUtil.getInstance();

  /** @see OdsPhoneNumberAttribute.clearable */
  @Prop({ reflect: true }) clearable?: boolean = DEFAULT_ATTRIBUTE.clearable;

  /** @see OdsPhoneNumberAttribute.countries */
  @Prop({ reflect: true, mutable: true }) countries?: ODS_COUNTRY_ISO_CODE[] | ODS_PHONE_NUMBER_COUNTRY_PRESET | string = DEFAULT_ATTRIBUTE.countries;

  /** @see OdsPhoneNumberAttribute.disabled */
  @Prop({ reflect: true }) disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsPhoneNumberAttribute.error */
  @Prop({ reflect: true, mutable: true }) error?: boolean = DEFAULT_ATTRIBUTE.error;

  /** @see OdsPhoneNumberAttribute.isoCode */
  @Prop({ reflect: true, mutable: true }) isoCode?: ODS_COUNTRY_ISO_CODE = DEFAULT_ATTRIBUTE.isoCode;

  /** @see OdsPhoneNumberAttribute.locale */
  @Prop({ reflect: true, mutable: true }) locale?: ODS_LOCALE = DEFAULT_ATTRIBUTE.locale;

  /** @see OdsPhoneNumberAttribute.value */
  @Prop({ reflect: true, mutable: true }) value = DEFAULT_ATTRIBUTE.value;

  /** @see OdsPhoneNumberEvent.odsValueChange */
  @Event() odsValueChange!: EventEmitter<OdsInputPhoneNumberValueChangeEventDetail>;

  @State() i18nCountriesMap!: Map<string, { isoCode: string , name: string }>;

  @State() hasCountries: boolean = false;

  componentWillLoad(): void {
    // order matter
    this.handlerCountries();
    this.isoCode = this.controller.getDefaultIsoCode();
    // const number = this.phoneUtils.parseAndKeepRawInput('0642664231', 'fr');
    // console.log('number', number)
    // console.log('this.isValidNumberForRegion', this.phoneUtils.isValidNumberForRegion(number, 'fr'))
    this.locale = this.controller.getDefaultLocale();
    this.handlerLocale(this.locale);
  }

  @Watch('locale')
  handlerLocale(locale: ODS_LOCALE): void {
    const translationFile = this.controller.loadTranslationFileByLocale(locale);
    this.i18nCountriesMap = translationFile.reduce((acc, country) => {
      acc.set(country.isoCode, country);
      return acc;
    }, new Map());
  }

  @Watch('countries')
  handlerCountries(): void {
    const countriesList = this.controller.getCountriesList();
    this.parseCountries(countriesList);
    this.hasCountries = !!this.parsedCountries?.length;
  }

  private parseCountries(countries: readonly ODS_COUNTRY_ISO_CODE[] | string) {
    if (typeof countries === 'string') {
      try {
        this.parsedCountries = JSON.parse(countries);
      } catch (err) {
        this.logger.warn('[OsdsPhoneNumber] countries string could not be parsed.');
        this.parsedCountries = [];
      }
    } else {
      this.parsedCountries = [...countries];
    }
  }

  @Listen('odsValueChange')
  handlerInputEventChange(event: CustomEvent<OdsInputValueChangeEventDetail>): void {
    event.preventDefault();
    this.error = this.isValidInput();
    console.log('this.error', this.error)
    if(this.error) {
      return;
    }
    this.odsValueChange.emit({
      ...event.detail,
      isoCode: this.isoCode,
    })
  }

  isValidInput(): boolean {
    const number = this.phoneUtils.parse(this.value ?? '', this.isoCode);
    console.log('number', number);
    console.log('this.phoneUtils.isPossibleNumber(number)', this.phoneUtils.isPossibleNumber(number));
    console.log('this.phoneUtils.isValidNumberForRegion(number, this.isoCode)', this.phoneUtils.isValidNumberForRegion(number, this.isoCode))
    return this.phoneUtils.isPossibleNumber(number) && this.phoneUtils.isValidNumberForRegion(number, this.isoCode);
  }

  getPlaceholder(): string | undefined {
    return `+ ${this.phoneUtils.getExampleNumber('fr').getCountryCode()?.toString()}`;
  }

  render() {
    return (
      <Host class="phone-number">
        {
          this.hasCountries && <osds-select
            tabindex="0"
            class="phone-number__select"
            disabled={this.disabled}
            error={this.error}
            value={this.isoCode}>
            { this.parsedCountries?.map((country) => <osds-select-option value={ country }>
              <div class="phone-number__select__option">
                <osds-flag iso={country} class="phone-number__select__option__flag"></osds-flag>
                <osds-text>{ this.i18nCountriesMap?.get(country)?.name }</osds-text>
              </div>
            </osds-select-option>) }
          </osds-select>
        }
        
        <osds-input
          tabindex="1"
          class={{ 
            'phone-number__input': true,
            'phone-number__input--not-first': this.hasCountries,
          }}
          placeholder={this.getPlaceholder()}
          color={ODS_THEME_COLOR_INTENT.primary}
          type={ODS_INPUT_TYPE.tel}
          clearable={this.clearable}
          disabled={this.disabled}
          error={this.error}
          value={this.value}
        >
        </osds-input>
      </Host>
    );
  }
}

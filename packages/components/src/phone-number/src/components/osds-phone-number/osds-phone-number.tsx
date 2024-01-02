import type { OdsPhoneNumberAttribute } from './interfaces/attributes';
import type { OdsPhoneNumberEvent, OdsPhoneNumberValueChangeEventDetail } from './interfaces/events';
import type { OdsInputValueChangeEventDetail } from '../../../../input/src';
import type { OdsSelectValueChangeEventDetail } from '../../../../select/src';
import { ODS_COUNTRY_ISO_CODE, ODS_COUNTRY_ISO_CODES, ODS_LOCALE, OdsLogger, OdsCommonFieldValidityState } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_TEXT_LEVEL, ODS_TEXT_SIZE } from '../../../../text/src';
import { Component, Event, EventEmitter, Host, Listen, Prop, State, Watch, h } from '@stencil/core';
import { PhoneNumber, PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_PHONE_NUMBER_COUNTRY_PRESET } from './constants/phone-number-countries';
import { OdsPhoneNumberController } from './core/controller';
import { ODS_INPUT_TYPE } from '../../../../input/src';

/**
 * @slot (unnamed) - Phone Number content
 */
@Component({
  tag: 'osds-phone-number',
  styleUrl: 'osds-phone-number.scss',
  shadow: true,
})
export class OsdsPhoneNumber implements OdsPhoneNumberAttribute, OdsPhoneNumberEvent {
  logger = new OdsLogger('OsdsPhoneNumber');

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
  @Event() odsValueChange!: EventEmitter<OdsPhoneNumberValueChangeEventDetail>;

  @State() i18nCountriesMap!: Map<string, { isoCode: string , name: string, countryCode?: number }>;

  @State() hasCountries: boolean = false;

  @State() slotSelectedLabel?: HTMLSpanElement;

  componentWillLoad(): void {
    // order matter
    this.handlerCountries();
    this.isoCode = this.controller.getDefaultIsoCode();
    this.locale = this.controller.getDefaultLocale();
    this.handlerLocale(this.locale);
    if (this.value) {
      this.handlerInputEvent({ value: this.value, validity: {} as OdsCommonFieldValidityState , name: '' })
    }
  }

  @Watch('locale')
  handlerLocale(locale: ODS_LOCALE): void {
    const translationFile = this.controller.loadTranslationFileByLocale(locale);
    this.i18nCountriesMap = translationFile.reduce((acc, country) => {
      const exampleNumber = this.phoneUtils.getExampleNumber(country.isoCode);
      acc.set(country.isoCode, { ...country, countryCode: exampleNumber?.getCountryCode() });
      return acc;
    }, new Map());
    this.parsedCountries.sort((a, b) => this.sortCountriesByName(a, b));
  }

  @Watch('countries')
  handlerCountries(): void {
    const countriesList = this.controller.getCountriesList();
    this.parsedCountries = this.controller.parseCountries(countriesList).filter((country) => this.phoneUtils.getCountryCodeForRegion(country));
    this.hasCountries = !!this.parsedCountries?.length;
  }

  @Watch('isoCode')
  @Watch('slotSelectedLabel')
  onIsoCodeChange(): void {
    if (!this.slotSelectedLabel || !this.isoCode) {
      return;
    }
    this.slotSelectedLabel.innerHTML = `<osds-flag lazy iso=${this.isoCode}></osds-flag>`;
  }

  @Listen('odsValueChange')
  handlerOdsValueChange(event: CustomEvent<OdsInputValueChangeEventDetail | OdsPhoneNumberValueChangeEventDetail | OdsSelectValueChangeEventDetail>): void {
    if ('isoCode' in event.detail) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    if ('selection' in event.detail) {
      this.isoCode = ODS_COUNTRY_ISO_CODES.find((countryIsoCode) => countryIsoCode === event.detail.value);
      this.value = '';
      this.error = false;
      return;
    }
    return this.handlerInputEvent(event.detail);
  }

  private handlerInputEvent(event: OdsInputValueChangeEventDetail) {
    this.value = (event.value || '') as string;
    this.error = !this.isValidValue(this.value);
    const number = this.controller.parseNumber(this.value);
    const oldNumber = this.controller.parseNumber(event.oldValue as string);
    this.odsValueChange.emit({
      ...event,
      value: this.formatValue(number, this.value) ?? '',
      oldValue: this.formatValue(oldNumber, event.oldValue as string),
      isoCode: this.isoCode,
      validity: {
        ...event.validity!,
        valid: !this.error,
      },
    });
  }

  private formatValue(number: PhoneNumber | null, defaultValue?: string | null): string | undefined {
    if (this.error || !number) {
      return defaultValue ?? undefined;
    }
    return this.phoneUtils.format(number, PhoneNumberFormat.E164);
  }

  @Watch('value')
  validateValue(): void {
    this.error = !this.isValidValue(this.value);
  }

  private isValidValue(value: string | null): boolean {
    if (!value) {
      return true;
    }
    const number = this.controller.parseNumber(value);
    if (!number) {
      return false;
    }
    return this.phoneUtils.isPossibleNumber(number) && this.phoneUtils.isValidNumberForRegion(number, this.isoCode);
  }

  getPlaceholder(): string {
    const exampleNumber = this.getExampleNumberByIsoCode();
    return exampleNumber && this.phoneUtils.format(exampleNumber, PhoneNumberFormat.NATIONAL) || '';
  }

  getPrefix(): string {
    const countryCode = this.getExampleNumberByIsoCode()?.getCountryCode();
    return countryCode && `(+${countryCode})` || '';
  }

  private getExampleNumberByIsoCode(): PhoneNumber | undefined {
    return this.isoCode && this.phoneUtils.getExampleNumber(this.isoCode);
  }

  private sortCountriesByName(countryA: string, countryB: string): number {
    const aName = this.i18nCountriesMap?.has(countryA) && this.i18nCountriesMap.get(countryA)!.name;
    const bName = this.i18nCountriesMap?.has(countryB) && this.i18nCountriesMap.get(countryB)!.name;
    if (aName < bName) {
      return -1;
    }
    if (aName > bName) {
      return 1;
    }
    return 0;
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
            <span ref={ (el?: HTMLSpanElement) => {
              if (!el) {
                return;
              }
              setTimeout(() => this.slotSelectedLabel = el, 0);
            }}
            slot="selectedLabel"
            class="phone-number__select-label" />
            { this.parsedCountries.map((country) => {
              const i18nCountry = this.i18nCountriesMap?.get(country);
              return <osds-select-option value={ country } key={ country }>
                <div class="phone-number__select__option">
                  <osds-flag lazy iso={country} class="phone-number__select__option__flag"></osds-flag>
                  <osds-text
                    color={ODS_THEME_COLOR_INTENT.text}
                    size={ODS_TEXT_SIZE._400}
                    level={ODS_TEXT_LEVEL.body}>
                    { i18nCountry?.name } (+{ i18nCountry?.countryCode })
                  </osds-text>
                </div>
              </osds-select-option>;
            }) }
          </osds-select>
        }

        <osds-input
          tabindex="1"
          class={{
            'phone-number__input': true,
            'phone-number__input--not-first': this.hasCountries,
          }}
          prefix-value={this.getPrefix()}
          placeholder={this.getPlaceholder()}
          color={ODS_THEME_COLOR_INTENT.primary}
          type={ODS_INPUT_TYPE.tel}
          clearable={this.clearable}
          disabled={this.disabled}
          error={this.error}
          value={this.value}
          onOdsValueChange={(event: CustomEvent<OdsInputValueChangeEventDetail>) => this.handlerOdsValueChange(event)}
        >
        </osds-input>
      </Host>
    );
  }
}

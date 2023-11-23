import type { ODS_PHONE_NUMBER_COUNTRY_PRESET } from './constants/phone-number-countries';
import type { OdsPhoneNumberAttribute } from './interfaces/attributes';
import type { OdsPhoneNumberEvent, OdsPhoneNumberValueChangeEventDetail } from './interfaces/events';
import type { OdsPhoneNumberMethod } from './interfaces/methods';
import type { ODS_ICON_NAME } from '../../../../icon/src';
import type { OdsInputValueChangeEventDetail, OsdsInput } from '../../../../input/src';
import type { OdsSelectValueChangeEventDetail } from '../../../../select/src';
import type { ODS_COUNTRY_ISO_CODE, ODS_LOCALE, OdsCommonFieldValidityState, OdsInputValue } from '@ovhcloud/ods-common-core';
import type { EventEmitter, FunctionalComponent } from '@stencil/core';
import type { PhoneNumber } from 'google-libphonenumber';
import { ODS_COUNTRY_ISO_CODES } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { AttachInternals, Component, Element, Event, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import { PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsPhoneNumberController } from './core/controller';
import { ODS_INPUT_TYPE } from '../../../../input/src';
import { ODS_TEXT_LEVEL, ODS_TEXT_SIZE } from '../../../../text/src';

@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'osds-phone-number.scss',
  tag: 'osds-phone-number',
})
export class OsdsPhoneNumber implements OdsPhoneNumberAttribute, OdsPhoneNumberMethod, OdsPhoneNumberEvent {
  controller = new OdsPhoneNumberController<OsdsPhoneNumber>(this);
  parsedCountries: ODS_COUNTRY_ISO_CODE[] = [];
  osdsInput?: OsdsInput;
  phoneUtils = PhoneNumberUtil.getInstance();

  @Element() el!: HTMLElement;

  @AttachInternals() internals!: ElementInternals;

  @State() hasCountries: boolean = false;
  @State() i18nCountriesMap!: Map<string, { isoCode: string , name: string, countryCode?: number }>;

  @Prop() ariaLabel = DEFAULT_ATTRIBUTE.ariaLabel;
  @Prop() ariaLabelledby?: string;
  @Prop({ reflect: true }) clearable?: boolean = DEFAULT_ATTRIBUTE.clearable;
  @Prop({ mutable: true, reflect: true }) countries?: ODS_COUNTRY_ISO_CODE[] | ODS_PHONE_NUMBER_COUNTRY_PRESET | string = DEFAULT_ATTRIBUTE.countries;
  @Prop({ reflect: true }) defaultValue = DEFAULT_ATTRIBUTE.defaultValue;
  @Prop({ reflect: true }) disabled: boolean = DEFAULT_ATTRIBUTE.disabled;
  @Prop({ mutable: true, reflect: true }) error: boolean = DEFAULT_ATTRIBUTE.error;
  @Prop({ reflect: true }) forbiddenValues?: OdsInputValue[];
  @Prop({ reflect: true }) icon?: ODS_ICON_NAME;
  @Prop({ reflect: true }) label?: string;
  @Prop({ reflect: true }) loading?: boolean;
  @Prop({ mutable: true, reflect: true }) isoCode?: ODS_COUNTRY_ISO_CODE = DEFAULT_ATTRIBUTE.isoCode;
  @Prop({ mutable: true, reflect: true }) locale?: ODS_LOCALE = DEFAULT_ATTRIBUTE.locale;
  @Prop({ reflect: true }) name: string = DEFAULT_ATTRIBUTE.name;
  @Prop({ reflect: true }) placeholder?: string;
  @Prop({ reflect: true }) prefixValue?: string;
  @Prop({ reflect: true }) readOnly?: boolean;
  @Prop({ reflect: true }) required?: boolean;
  @Prop({ mutable: true, reflect: true }) value = DEFAULT_ATTRIBUTE.value;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsHide!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;
  @Event() odsValueChange!: EventEmitter<OdsPhoneNumberValueChangeEventDetail>;

  @Method()
  async clear(): Promise<void> {
    return this.controller.clear();
  }

  @Method()
  async setFocus(): Promise<void> {
    return this.osdsInput?.setFocus();
  }

  @Method()
  async getValidity(): Promise<OdsCommonFieldValidityState | undefined> {
    const inputEl = await this.osdsInput?.getInputEl();
    if (inputEl) {
      return this.controller.getValidity(inputEl);
    }
    return undefined;
  }

  @Method()
  async reset(): Promise<void> {
    return this.controller.reset();
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

  @Watch('value')
  onValueChange(): void {
    this.controller.validateValue();
  }

  componentWillLoad(): void {
    this.controller.beforeInit();
  }

  formResetCallback(): void {
    this.reset();
  }

  handlerOdsValueChange(event: CustomEvent<OdsInputValueChangeEventDetail | OdsPhoneNumberValueChangeEventDetail | OdsSelectValueChangeEventDetail>): void {
    if ('isoCode' in event.detail) {
      return;
    }
    if ('selection' in event.detail) {
      this.isoCode = ODS_COUNTRY_ISO_CODES.find((countryIsoCode) => countryIsoCode === event.detail.value);
      this.value = '';
      this.error = false;
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    return this.handlerInputEvent(event.detail);
  }

  private formatValue(number: PhoneNumber | null, defaultValue?: string | null): string | undefined {
    if (this.error || !number) {
      return defaultValue ?? undefined;
    }
    return this.phoneUtils.format(number, PhoneNumberFormat.E164);
  }

  private getExampleNumberByIsoCode(): PhoneNumber | undefined {
    return this.isoCode && this.phoneUtils.getExampleNumber(this.isoCode);
  }

  getPlaceholder(): string {
    if (this.placeholder) {
      return this.placeholder;
    }
    const exampleNumber = this.getExampleNumberByIsoCode();
    return exampleNumber && this.phoneUtils.format(exampleNumber, PhoneNumberFormat.NATIONAL) || '';
  }

  getPrefix(): string {
    if (this.prefixValue) {
      return this.prefixValue;
    }
    const countryCode = this.getExampleNumberByIsoCode()?.getCountryCode();
    return countryCode && `(+${countryCode})` || '';
  }

  private handlerInputEvent(event: OdsInputValueChangeEventDetail): void {
    this.value = (event.value || '') as string;
    this.controller.setFormValue(this.value);
    this.error = !event.validity?.valid || !this.controller.isValidValue(this.value);
    const number = this.controller.parseNumber(this.value);
    const oldNumber = this.controller.parseNumber(event.oldValue as string);
    this.odsValueChange.emit({
      ...event,
      isoCode: this.isoCode,
      name: this.name,
      oldValue: this.formatValue(oldNumber, event.oldValue as string),
      validity: {
        ...event.validity!,
        valid: !this.error,
      },
      value: this.formatValue(number, this.value) ?? '',
    });
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

  render(): FunctionalComponent {
    return (
      <Host
        class="phone-number">
        {
          this.hasCountries && <osds-select
            class="phone-number__select"
            disabled={ this.disabled }
            error={ this.error }
            onOdsValueChange={ (event: CustomEvent<OdsSelectValueChangeEventDetail>): void => this.handlerOdsValueChange(event) }
            tabindex="1"
            value={ this.isoCode }>
            <span
              slot="selectedLabel"
              class="phone-number__select-label">
              <osds-flag lazy iso={this.isoCode}></osds-flag>
            </span>
            { this.parsedCountries.map((country) => {
              const i18nCountry = this.i18nCountriesMap?.get(country);
              return <osds-select-option value={ country } key={ country }>
                <div class="phone-number__select__option">
                  <osds-flag lazy iso={ country } class="phone-number__select__option__flag"></osds-flag>
                  <osds-text
                    color={ ODS_THEME_COLOR_INTENT.text }
                    size={ ODS_TEXT_SIZE._400 }
                    level={ ODS_TEXT_LEVEL.body }>
                    { i18nCountry?.name } (+{ i18nCountry?.countryCode })
                  </osds-text>
                </div>
              </osds-select-option>;
            }) }
          </osds-select>
        }

        <osds-input
          class={{
            'phone-number__input': true,
            'phone-number__input--not-first': this.hasCountries,
          }}
          clearable={ this.clearable }
          defaultValue={ this.defaultValue }
          disabled={ this.disabled }
          error={ this.error }
          forbiddenValues={ this.forbiddenValues }
          icon={ this.icon }
          name={ this.name }
          label={ this.label }
          loading={ this.loading }
          onOdsValueChange={ (event: CustomEvent<OdsInputValueChangeEventDetail>): void => this.handlerOdsValueChange(event) }
          placeholder={ this.getPlaceholder() }
          prefix-value={ this.getPrefix() }
          readOnly={ this.readOnly }
          required={ this.required }
          ref={ (el?: HTMLElement): HTMLElement & OsdsInput => this.osdsInput = el as HTMLElement & OsdsInput }
          tabindex="2"
          type={ ODS_INPUT_TYPE.tel }
          value={ this.value }>
        </osds-input>
      </Host>
    );
  }
}

import { Component, Host, h, Prop, State, Watch } from '@stencil/core';
import { ODS_INPUT_TYPE } from '@ovhcloud/ods-component-input';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsPhoneNumberAttribute } from './interfaces/attributes';
import { ODS_COUNTRY_ISO_CODE } from '@ovhcloud/ods-common-core';
import { OdsPhoneNumberController } from './core/controller';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { default as translateEn } from '@ovhcloud/ods-common-core/src/i18n/countries/en.json';

/**
 * @slot (unnamed) - Phone Number content
 */
@Component({
  tag: 'osds-phone-number',
  styleUrl: 'osds-phone-number.scss',
  shadow: true,
})
export class OsdsPhoneNumber implements OdsPhoneNumberAttribute {
  controller = new OdsPhoneNumberController(this);

  /** @see OdsPhoneNumberAttribute.clearable */
  @Prop({ reflect: true }) clearable?: boolean = DEFAULT_ATTRIBUTE.clearable;

  /** @see OdsPhoneNumberAttribute.countries */
  @Prop({ reflect: true }) countries?: ODS_COUNTRY_ISO_CODE[] | 'all' = DEFAULT_ATTRIBUTE.countries;

  /** @see OdsPhoneNumberAttribute.disabled */
  @Prop({ reflect: true }) disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsPhoneNumberAttribute.error */
  @Prop({ reflect: true }) error?: boolean = DEFAULT_ATTRIBUTE.error;

  /** @see OdsPhoneNumberAttribute.isoCode */
  @Prop({ reflect: true, mutable: true }) isoCode?: ODS_COUNTRY_ISO_CODE = DEFAULT_ATTRIBUTE.isoCode;

  /** @see OdsPhoneNumberAttribute.locale */
  @Prop({ reflect: true, mutable: true }) locale?: ODS_COUNTRY_ISO_CODE = DEFAULT_ATTRIBUTE.locale;

  /** @see OdsPhoneNumberAttribute.value */
  @Prop({ reflect: true, mutable: true }) value = DEFAULT_ATTRIBUTE.value;

  @State() i18nCountries: Map<string, { isoCode: string , name: string }> = translateEn.reduce((acc, country) => {
    acc.set(country.isoCode, country);
    return acc;
  }, new Map());

  @State() countriesList: ODS_COUNTRY_ISO_CODE[] = [];
  @State() hasCountries: boolean = false;

  componentWillLoad(): void {
    this.isoCode = this.controller.setDefaultIsoCode();
    this.locale = this.controller.setDefaultLocale();
    this.handlerCountries();
  }

  @Watch('countries')
  handlerCountries(): void {
    this.hasCountries = Boolean(this.countries?.length);
    this.countriesList = this.controller.getCountriesList();
  }

  render() {
    return (
      <Host class="phone-number">
        {
          this.hasCountries && <osds-select
            tabindex="0"
            disabled={this.disabled}
            error={this.error}
            value={this.isoCode}>
            { this.countriesList?.map((country) => <osds-select-option value={ country }>
              <div class="phone-number--select-option">
                <osds-flag iso={country}></osds-flag>
                <span>{ this.i18nCountries?.get(country)?.name }</span>
              </div>
            </osds-select-option>) }
          </osds-select>
        }
        
        <osds-input
          tabindex="1"
          class={{ 'first': !this.hasCountries }}
          color={ODS_THEME_COLOR_INTENT.primary}
          type={ODS_INPUT_TYPE.tel}
          clearable={this.clearable}
          disabled={this.disabled}
          error={this.error}
          value={this.value}
        ></osds-input>
      </Host>
    );
  }
}

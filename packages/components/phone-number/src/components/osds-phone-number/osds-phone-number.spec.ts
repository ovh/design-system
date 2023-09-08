import type { SpecPage } from '@stencil/core/testing';
import type { OdsPhoneNumberAttribute } from './interfaces/attributes';
import { newSpecPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute, OdsUnitTestAttributeType } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OsdsPhoneNumber } from './osds-phone-number';
import { ODS_COUNTRY_ISO_CODE, ODS_COUNTRY_ISO_CODES, ODS_LOCALE } from '@ovhcloud/ods-common-core';
import { ODS_PHONE_NUMBER_COUTRIE } from './constants/phone-number-countries';
import { OdsPhoneNumberController } from './core/controller';

describe('spec:osds-phone-number', () => {
  const baseAttribute = { ariaLabel: '', forbiddenValues: [], value: '' };
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsPhoneNumber;
  let controller: OdsPhoneNumberController;
  let select: HTMLElement;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsPhoneNumberAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsPhoneNumberAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);
    page = await newSpecPage({
      components: [OsdsPhoneNumber],
      html: `<osds-phone-number ${odsStringAttributes2Str(stringAttributes)}></osds-phone-number>`,
    });

    root = page.root;
    instance = page.rootInstance;

    select = root.shadowRoot.querySelector('osds-select');
  }

  it('should render', async () => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('clearable', () => {
      odsUnitTestAttribute<OdsPhoneNumberAttribute, 'clearable'>({
        name: 'clearable',
        defaultValue: DEFAULT_ATTRIBUTE.clearable,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['clearable']: value } }),
        ...config,
      });
    });

    describe('countries', () => {
      odsUnitTestAttribute<OdsPhoneNumberAttribute, 'countries'>({
        name: 'countries',
        defaultValue: DEFAULT_ATTRIBUTE.countries,
        newValue: [ODS_COUNTRY_ISO_CODE.FR, ODS_COUNTRY_ISO_CODE.GB],
        value: ODS_PHONE_NUMBER_COUTRIE.All,
        setup: (countries) => setup({ attributes: { countries } }),
        ...config,
        exclude: [OdsUnitTestAttributeType.REFLECTED, OdsUnitTestAttributeType.MUTABLE],
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsPhoneNumberAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        ...config,
      });
    });

    describe('error', () => {
      odsUnitTestAttribute<OdsPhoneNumberAttribute, 'error'>({
        name: 'error',
        defaultValue: DEFAULT_ATTRIBUTE.error,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['error']: value } }),
        ...config,
      });
    });

    describe('isoCode', () => {
      odsUnitTestAttribute<OdsPhoneNumberAttribute, 'isoCode'>({
        name: 'isoCode',
        defaultValue: DEFAULT_ATTRIBUTE.isoCode,
        newValue: ODS_COUNTRY_ISO_CODE.FR,
        value:  ODS_COUNTRY_ISO_CODE.GB,
        setup: (isoCode) => setup({ attributes: { isoCode } }),
        ...config,
        exclude: [OdsUnitTestAttributeType.DEFAULT],
      });
    });

    describe('locale', () => {
      odsUnitTestAttribute<OdsPhoneNumberAttribute, 'locale'>({
        name: 'locale',
        defaultValue: DEFAULT_ATTRIBUTE.locale,
        newValue: ODS_LOCALE.FR,
        value:  ODS_LOCALE.EN,
        setup: (locale) => setup({ attributes: { locale } }),
        ...config,
        exclude: [OdsUnitTestAttributeType.DEFAULT],
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsPhoneNumberAttribute, 'value'>({
        name: 'value',
        defaultValue: DEFAULT_ATTRIBUTE.value,
        newValue: 'new value',
        value: null,
        setup: (value) => setup({ attributes: { value } }),
        ...config,
      });
    });
  });

  describe('methods', () => {
    describe('methods:handlerCountries', () => {
      it('should get countries list with default value & not display select', async () => {
        await setup();
        instance.handlerCountries();
        expect(instance.countriesList).toEqual([]);
        expect(select).toBe(null);
      });

      it('should get countries list with all', async () => {
        await setup({ attributes: { countries: ODS_PHONE_NUMBER_COUTRIE.All} });
        instance.handlerCountries();
        expect(instance.countriesList).toEqual(ODS_COUNTRY_ISO_CODES);
        expect(select).toBeDefined();
      });

      it('should get countries list with set value', async () => {
        const countries = [ODS_COUNTRY_ISO_CODE.FR];
        await setup({ });
        instance.countries = countries;
        instance.handlerCountries();
        expect(instance.countriesList).toEqual(countries);
        expect(select).toBeDefined();
      });
    });
    
    describe('methods:handlerLocale', () => {
      it('should get i18nCountriesMap by locale EN', async () => {
        await setup();
        instance.handlerLocale(ODS_LOCALE.EN);
        expect(instance.i18nCountriesMap).toBeInstanceOf(Map);
        expect(instance.i18nCountriesMap.get('fr')).toEqual({ isoCode: "fr", name: "France" });
        expect(instance.i18nCountriesMap.get('gb')).toEqual({ isoCode: "gb", name: "United Kingdom of Great Britain and Northern Ireland" },);
      });

      it('should get i18nCountriesMap by locale FR', async () => {
        await setup();
        instance.handlerLocale(ODS_LOCALE.FR);
        expect(instance.i18nCountriesMap).toBeInstanceOf(Map);
        expect(instance.i18nCountriesMap.get('fr')).toEqual({ isoCode: "fr", name: "France" });
        expect(instance.i18nCountriesMap.get('gb')).toEqual({ isoCode: "gb", name: "Royaume-Uni" },);
      });
    });
  });
});

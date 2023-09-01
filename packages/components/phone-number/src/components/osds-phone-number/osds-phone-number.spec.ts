import type { SpecPage } from '@stencil/core/testing';
import type { OdsPhoneNumberAttribute } from './interfaces/attributes';
import { newSpecPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute, OdsUnitTestAttributeType } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OsdsPhoneNumber } from './osds-phone-number';
import { ODS_COUNTRY_ISO_CODE, ODS_COUNTRY_ISO_CODES } from '@ovhcloud/ods-common-core';

describe('spec:osds-phone-number', () => {
  const baseAttribute = { ariaLabel: '', forbiddenValues: [], value: '' };
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsPhoneNumber;
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
        value: 'all',
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
        newValue: ODS_COUNTRY_ISO_CODE.FR,
        value:  ODS_COUNTRY_ISO_CODE.GB,
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
        await setup({ attributes: { countries: 'all'} });
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

    describe('methods:componentWillLoad', () => {
      
    });
  });
});

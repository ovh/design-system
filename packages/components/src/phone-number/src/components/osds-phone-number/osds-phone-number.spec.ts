import type { OdsPhoneNumberAttribute } from './interfaces/attributes';
import type { OdsInputValueChangeEventDetail } from '../../../../input/src';
import type { OdsSelectValueChangeEventDetail } from '../../../../select/src';
import type { SpecPage } from '@stencil/core/testing';
import { ODS_COUNTRY_ISO_CODE, ODS_COUNTRY_ISO_CODES, ODS_LOCALE } from '@ovhcloud/ods-common-core';
import { OdsUnitTestAttributeType, odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_PHONE_NUMBER_COUNTRY_PRESET } from './constants/phone-number-countries';
import { OdsPhoneNumberController } from './core/controller';
import { OsdsPhoneNumber } from './osds-phone-number';

describe('spec:osds-phone-number', () => {
  const baseAttribute = {
    ariaLabel: '',
    defaultValue: '',
    disabled: false,
    error: false,
    name: 'OsdsPhoneNumber',
    value: '',
  };
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsPhoneNumber;
  let select: HTMLElement | undefined | null;
  const phoneUtils = PhoneNumberUtil.getInstance();

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsPhoneNumberAttribute> } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsPhoneNumberAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    jest.spyOn(OdsPhoneNumberController.prototype, 'setFormValue').mockReturnValue();

    page = await newSpecPage({
      components: [OsdsPhoneNumber],
      html: `<osds-phone-number ${odsStringAttributes2Str(stringAttributes)}></osds-phone-number>`,
    });

    root = page.root;
    instance = page.rootInstance;
    select = root?.shadowRoot?.querySelector('osds-select');
  }

  it('should render', async() => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: (): OsdsPhoneNumber => instance,
      page: (): SpecPage => page,
      root: (): SpecPage['root'] => page.root,
      wait: (): Promise<void> => page.waitForChanges(),
    };

    describe('clearable', () => {
      odsUnitTestAttribute<OdsPhoneNumberAttribute, 'clearable'>({
        defaultValue: DEFAULT_ATTRIBUTE.clearable,
        name: 'clearable',
        newValue: true,
        setup: (value) => setup({ attributes: { ['clearable']: value } }),
        value: false,
        ...config,
      });
    });

    describe('countries', () => {
      odsUnitTestAttribute<OdsPhoneNumberAttribute, 'countries'>({
        defaultValue: DEFAULT_ATTRIBUTE.countries,
        name: 'countries',
        newValue: [ODS_COUNTRY_ISO_CODE.FR, ODS_COUNTRY_ISO_CODE.GB],
        setup: (countries) => setup({ attributes: { countries } }),
        value: ODS_PHONE_NUMBER_COUNTRY_PRESET.All,
        ...config,
        exclude: [OdsUnitTestAttributeType.REFLECTED, OdsUnitTestAttributeType.MUTABLE],
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsPhoneNumberAttribute, 'disabled'>({
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        name: 'disabled',
        newValue: false,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        value: true,
        ...config,
      });
    });

    describe('error', () => {
      odsUnitTestAttribute<OdsPhoneNumberAttribute, 'error'>({
        defaultValue: DEFAULT_ATTRIBUTE.error,
        exclude: [OdsUnitTestAttributeType.PROPERTY, OdsUnitTestAttributeType.MUTABLE],
        name: 'error',
        newValue: false,
        setup: (value) => setup({ attributes: { ['error']: value } }),
        value: true,
        ...config,
      });
    });

    describe('isoCode', () => {
      odsUnitTestAttribute<OdsPhoneNumberAttribute, 'isoCode'>({
        defaultValue: DEFAULT_ATTRIBUTE.isoCode,
        exclude: [OdsUnitTestAttributeType.DEFAULT],
        name: 'isoCode',
        newValue: ODS_COUNTRY_ISO_CODE.FR,
        setup: (isoCode) => setup({ attributes: { isoCode } }),
        value:  ODS_COUNTRY_ISO_CODE.GB,
        ...config,
      });
    });

    describe('locale', () => {
      odsUnitTestAttribute<OdsPhoneNumberAttribute, 'locale'>({
        defaultValue: DEFAULT_ATTRIBUTE.locale,
        exclude: [OdsUnitTestAttributeType.DEFAULT],
        name: 'locale',
        newValue: ODS_LOCALE.FR,
        setup: (locale) => setup({ attributes: { locale } }),
        value:  ODS_LOCALE.EN,
        ...config,
      });
    });

    describe('isoCode', () => {
      odsUnitTestAttribute<OdsPhoneNumberAttribute, 'isoCode'>({
        defaultValue: DEFAULT_ATTRIBUTE.isoCode,
        exclude: [OdsUnitTestAttributeType.DEFAULT],
        name: 'isoCode',
        newValue: ODS_COUNTRY_ISO_CODE.FR,
        setup: (isoCode) => setup({ attributes: { isoCode } }),
        value:  ODS_COUNTRY_ISO_CODE.GB,
        ...config,
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsPhoneNumberAttribute, 'value'>({
        defaultValue: DEFAULT_ATTRIBUTE.value,
        name: 'value',
        newValue: 'new value',
        setup: (value) => setup({ attributes: { value } }),
        value: '',
        ...config,
      });
    });
  });

  describe('methods', () => {
    describe('methods:handlerCountries', () => {
      it('should get countries list with default value & not display select', async() => {
        await setup();
        instance.handlerCountries();
        expect(instance.parsedCountries).toEqual([]);
        expect(select).toBe(null);
      });

      it('should get countries list with all', async() => {
        await setup({ attributes: { countries: ODS_PHONE_NUMBER_COUNTRY_PRESET.All } });
        instance.handlerCountries();
        expect(instance.parsedCountries).toEqual(ODS_COUNTRY_ISO_CODES.filter((country) => phoneUtils.getCountryCodeForRegion(country)));
        expect(select).toBeDefined();
      });

      it('should get countries list with set value', async() => {
        const countries = [ODS_COUNTRY_ISO_CODE.FR];
        await setup({ });
        instance.countries = countries;
        instance.handlerCountries();
        expect(instance.parsedCountries).toEqual(countries);
        expect(select).toBeDefined();
      });

      it('should parsed string coutries', async() => {
        await setup();
        instance.countries = JSON.stringify(['fr', 'gb']);
        instance.handlerCountries();
        expect(instance.parsedCountries).toEqual([ODS_COUNTRY_ISO_CODE.FR, ODS_COUNTRY_ISO_CODE.GB]);
        expect(select).toBeDefined();
      });
    });

    describe('methods:handlerLocale', () => {
      it('should get i18nCountriesMap by locale FR', async() => {
        await setup();
        instance.handlerLocale(ODS_LOCALE.FR);
        expect(instance.i18nCountriesMap).toBeInstanceOf(Map);
        expect(instance.i18nCountriesMap.get('fr')).toEqual({ countryCode: 33, isoCode: 'fr', name: 'France' });
        expect(instance.i18nCountriesMap.get('gb')).toEqual({ countryCode: 44, isoCode: 'gb', name: 'Royaume-Uni' });
      });
    });

    describe('methods:getPlaceholder', () => {
      it('should get placeholder without isoCode', async() => {
        await setup();
        const placeholder = instance.getPlaceholder();
        expect(placeholder).toBe('');
      });

      it('should get placeholder with isoCode', async() => {
        await setup({ attributes: { isoCode: ODS_COUNTRY_ISO_CODE.FR } });
        const placeholder = instance.getPlaceholder();
        expect(placeholder).toBe('01 23 45 67 89');
      });
    });

    describe('methods:handlerOdsValueChange', () => {
      it('should handler the select change value', async() => {
        await setup();
        const detail = {
          selection: document.createElement('osds-select-option'),
          validity: true,
          value: 'gb',
        } as unknown as OdsSelectValueChangeEventDetail;
        const spyEmitOdsValueChange = jest.spyOn(instance.odsValueChange, 'emit');
        instance.handlerOdsValueChange(new CustomEvent('odsValueChange', { detail }));
        expect(instance.value).toBe('');
        expect(instance.error).toBe(false);
        expect(instance.isoCode).toBe(ODS_COUNTRY_ISO_CODE.GB);
        expect(spyEmitOdsValueChange).toHaveBeenCalledTimes(0);
      });

      it('should handler the input change value with valid value', async() => {
        await setup({ attributes: { isoCode: ODS_COUNTRY_ISO_CODE.FR } });
        const detail = { validity: { valid: true }, value: '0653535353' } as OdsInputValueChangeEventDetail;
        const spyEmitOdsValueChange = jest.spyOn(instance.odsValueChange, 'emit');
        instance.handlerOdsValueChange(new CustomEvent('odsValueChange', { detail }));
        expect(instance.value).toBe(detail.value);
        expect(instance.error).toBe(false);
        expect(spyEmitOdsValueChange).toHaveBeenCalledTimes(1);
        expect(spyEmitOdsValueChange).toHaveBeenCalledWith({
          isoCode: 'fr',
          name: 'OsdsPhoneNumber',
          oldValue: undefined,
          validity: {
            valid: true,
          },
          value: '+33653535353',
        });
      });

      it('should handler the input change value with invalid value', async() => {
        await setup({ attributes: { isoCode: ODS_COUNTRY_ISO_CODE.FR } });
        const detail = { validity: { valid: true }, value: '065353qsd5353' } as OdsInputValueChangeEventDetail;
        const spyEmitOdsValueChange = jest.spyOn(instance.odsValueChange, 'emit');
        instance.handlerOdsValueChange(new CustomEvent('odsValueChange', { detail }));
        expect(instance.value).toBe(detail.value);
        expect(instance.error).toBe(true);
        expect(spyEmitOdsValueChange).toHaveBeenCalledTimes(1);
        expect(spyEmitOdsValueChange).toHaveBeenCalledWith({
          isoCode: 'fr',
          name: 'OsdsPhoneNumber',
          oldValue: undefined,
          validity: {
            valid: false,
          },
          value: '065353qsd5353',
        });
      });

      it('should handler the input change value with empty value', async() => {
        await setup({ attributes: { isoCode: ODS_COUNTRY_ISO_CODE.FR } });
        const detail = { validity: { valid: true }, value: '' } as OdsInputValueChangeEventDetail;
        const spyEmitOdsValueChange = jest.spyOn(instance.odsValueChange, 'emit');
        instance.handlerOdsValueChange(new CustomEvent('odsValueChange', { detail }));
        expect(instance.value).toBe(detail.value);
        expect(instance.error).toBe(false);
        expect(spyEmitOdsValueChange).toHaveBeenCalledTimes(1);
        expect(spyEmitOdsValueChange).toHaveBeenCalledWith({
          isoCode: 'fr',
          name: 'OsdsPhoneNumber',
          oldValue: undefined,
          validity: {
            valid: true,
          },
          value: '',
        });
      });

      it('should emit an event with old value', async() => {
        await setup({ attributes: { isoCode: ODS_COUNTRY_ISO_CODE.FR } });
        const detail = { oldValue: '0612345', validity: { valid: true }, value: '0653535353' } as OdsInputValueChangeEventDetail;
        const spyEmitOdsValueChange = jest.spyOn(instance.odsValueChange, 'emit');
        instance.handlerOdsValueChange(new CustomEvent('odsValueChange', { detail }));
        expect(spyEmitOdsValueChange).toHaveBeenCalledTimes(1);
        expect(spyEmitOdsValueChange).toHaveBeenCalledWith({
          isoCode: 'fr',
          name: 'OsdsPhoneNumber',
          oldValue: '+330612345',
          validity: {
            valid: true,
          },
          value: '+33653535353',
        });
      });
    });
  });
});

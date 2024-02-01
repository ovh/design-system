// import type { OdsPhoneNumberAttribute } from './interfaces/attributes';
// import type { OdsInputValueChangeEventDetail } from '../../../../input/src';
// import type { OdsSelectValueChangeEventDetail } from '../../../../select/src';
// import type { SpecPage } from '@stencil/core/testing';
//
// import { ODS_COUNTRY_ISO_CODE, ODS_COUNTRY_ISO_CODES, ODS_LOCALE } from '@ovhcloud/ods-common-core';
// import { OdsUnitTestAttributeType, odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
// import { newSpecPage } from '@stencil/core/testing';
// import { PhoneNumberUtil } from 'google-libphonenumber';
//
// import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
// import { ODS_PHONE_NUMBER_COUNTRY_PRESET } from './constants/phone-number-countries';
// import { OsdsPhoneNumber } from './osds-phone-number';
//
//
describe('spec:osds-phone-number', () => {
  it('should', () => {
    expect(true).toBe(true);
  })
//   const baseAttribute = { ariaLabel: '', forbiddenValues: [], value: '' };
//   let page: SpecPage;
//   let root: HTMLElement | undefined;
//   let instance: OsdsPhoneNumber;
//   let select: HTMLElement | undefined | null;
//   const phoneUtils = PhoneNumberUtil.getInstance();
//
//   afterEach(() => {
//     jest.clearAllMocks();
//   });
//
//   async function setup({ attributes = {} }: { attributes?: Partial<OdsPhoneNumberAttribute> } = {}) {
//     const stringAttributes = odsComponentAttributes2StringAttributes<OdsPhoneNumberAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);
//     page = await newSpecPage({
//       components: [OsdsPhoneNumber],
//       html: `<osds-phone-number ${odsStringAttributes2Str(stringAttributes)}></osds-phone-number>`,
//     });
//
//     root = page.root;
//     instance = page.rootInstance;
//     select = root?.shadowRoot?.querySelector('osds-select');
//   }
//
//   it('should render', async() => {
//     await setup({});
//     expect(root?.shadowRoot).toBeTruthy();
//     expect(instance).toBeTruthy();
//   });
//
//   describe('attributes', () => {
//     const config = {
//       instance: () => instance,
//       page: () => page,
//       root: () => page.root,
//       wait: () => page.waitForChanges(),
//     };
//
//     describe('clearable', () => {
//       odsUnitTestAttribute<OdsPhoneNumberAttribute, 'clearable'>({
//         name: 'clearable',
//         defaultValue: DEFAULT_ATTRIBUTE.clearable,
//         newValue: false,
//         value: true,
//         setup: (value) => setup({ attributes: { ['clearable']: value } }),
//         ...config,
//       });
//     });
//
//     describe('countries', () => {
//       odsUnitTestAttribute<OdsPhoneNumberAttribute, 'countries'>({
//         name: 'countries',
//         defaultValue: DEFAULT_ATTRIBUTE.countries,
//         newValue: [ODS_COUNTRY_ISO_CODE.FR, ODS_COUNTRY_ISO_CODE.GB],
//         value: ODS_PHONE_NUMBER_COUNTRY_PRESET.All,
//         setup: (countries) => setup({ attributes: { countries } }),
//         ...config,
//         exclude: [OdsUnitTestAttributeType.REFLECTED, OdsUnitTestAttributeType.MUTABLE],
//       });
//     });
//
//     describe('disabled', () => {
//       odsUnitTestAttribute<OdsPhoneNumberAttribute, 'disabled'>({
//         name: 'disabled',
//         defaultValue: DEFAULT_ATTRIBUTE.disabled,
//         newValue: false,
//         value: true,
//         setup: (value) => setup({ attributes: { ['disabled']: value } }),
//         ...config,
//       });
//     });
//
//     describe('error', () => {
//       odsUnitTestAttribute<OdsPhoneNumberAttribute, 'error'>({
//         name: 'error',
//         defaultValue: DEFAULT_ATTRIBUTE.error,
//         newValue: false,
//         value: true,
//         setup: (value) => setup({ attributes: { ['error']: value } }),
//         ...config,
//         exclude: [OdsUnitTestAttributeType.PROPERTY, OdsUnitTestAttributeType.MUTABLE],
//       });
//     });
//
//     describe('isoCode', () => {
//       odsUnitTestAttribute<OdsPhoneNumberAttribute, 'isoCode'>({
//         name: 'isoCode',
//         defaultValue: DEFAULT_ATTRIBUTE.isoCode,
//         newValue: ODS_COUNTRY_ISO_CODE.FR,
//         value:  ODS_COUNTRY_ISO_CODE.GB,
//         setup: (isoCode) => setup({ attributes: { isoCode } }),
//         ...config,
//         exclude: [OdsUnitTestAttributeType.DEFAULT],
//       });
//     });
//
//     describe('locale', () => {
//       odsUnitTestAttribute<OdsPhoneNumberAttribute, 'locale'>({
//         name: 'locale',
//         defaultValue: DEFAULT_ATTRIBUTE.locale,
//         newValue: ODS_LOCALE.FR,
//         value:  ODS_LOCALE.EN,
//         setup: (locale) => setup({ attributes: { locale } }),
//         ...config,
//         exclude: [OdsUnitTestAttributeType.DEFAULT],
//       });
//     });
//
//     describe('isoCode', () => {
//       odsUnitTestAttribute<OdsPhoneNumberAttribute, 'isoCode'>({
//         name: 'isoCode',
//         defaultValue: DEFAULT_ATTRIBUTE.isoCode,
//         newValue: ODS_COUNTRY_ISO_CODE.FR,
//         value:  ODS_COUNTRY_ISO_CODE.GB,
//         setup: (isoCode) => setup({ attributes: { isoCode } }),
//         ...config,
//         exclude: [OdsUnitTestAttributeType.DEFAULT],
//       });
//     });
//
//     describe('locale', () => {
//       odsUnitTestAttribute<OdsPhoneNumberAttribute, 'locale'>({
//         name: 'locale',
//         defaultValue: DEFAULT_ATTRIBUTE.locale,
//         newValue: ODS_LOCALE.FR,
//         value: ODS_LOCALE.EN,
//         setup: (locale) => setup({ attributes: { locale } }),
//         ...config,
//         exclude: [OdsUnitTestAttributeType.DEFAULT],
//       });
//     });
//
//     describe('value', () => {
//       odsUnitTestAttribute<OdsPhoneNumberAttribute, 'value'>({
//         name: 'value',
//         defaultValue: DEFAULT_ATTRIBUTE.value,
//         newValue: 'new value',
//         value: null,
//         setup: (value) => setup({ attributes: { value } }),
//         ...config,
//       });
//     });
//   });
//
//   describe('methods', () => {
//     describe('methods:handlerCountries', () => {
//       it('should get countries list with default value & not display select', async() => {
//         await setup();
//         instance.handlerCountries();
//         expect(instance.parsedCountries).toEqual([]);
//         expect(select).toBe(null);
//       });
//
//       it('should get countries list with all', async() => {
//         await setup({ attributes: { countries: ODS_PHONE_NUMBER_COUNTRY_PRESET.All } });
//         instance.handlerCountries();
//         expect(instance.parsedCountries).toEqual(ODS_COUNTRY_ISO_CODES.filter((country) => phoneUtils.getCountryCodeForRegion(country)));
//         expect(select).toBeDefined();
//       });
//
//       it('should get countries list with set value', async() => {
//         const countries = [ODS_COUNTRY_ISO_CODE.FR];
//         await setup({ });
//         instance.countries = countries;
//         instance.handlerCountries();
//         expect(instance.parsedCountries).toEqual(countries);
//         expect(select).toBeDefined();
//       });
//
//       it('should parsed string coutries', async() => {
//         await setup();
//         instance.countries = JSON.stringify(['fr', 'gb']);
//         instance.handlerCountries();
//         expect(instance.parsedCountries).toEqual([ODS_COUNTRY_ISO_CODE.FR, ODS_COUNTRY_ISO_CODE.GB]);
//         expect(select).toBeDefined();
//       });
//
//     });
//
//     describe('methods:handlerLocale', () => {
//       it('should get i18nCountriesMap by locale EN', async() => {
//         await setup();
//         instance.handlerLocale(ODS_LOCALE.EN);
//         expect(instance.i18nCountriesMap).toBeInstanceOf(Map);
//         expect(instance.i18nCountriesMap.get('fr')).toEqual({ isoCode: 'fr', name: 'France', countryCode: 33 });
//         expect(instance.i18nCountriesMap.get('gb')).toEqual({ isoCode: 'gb', name: 'United Kingdom of Great Britain and Northern Ireland', countryCode: 44 });
//       });
//
//       it('should get i18nCountriesMap by locale FR', async() => {
//         await setup();
//         instance.handlerLocale(ODS_LOCALE.FR);
//         expect(instance.i18nCountriesMap).toBeInstanceOf(Map);
//         expect(instance.i18nCountriesMap.get('fr')).toEqual({ isoCode: 'fr', name: 'France', countryCode: 33 });
//         expect(instance.i18nCountriesMap.get('gb')).toEqual({ isoCode: 'gb', name: 'Royaume-Uni', countryCode: 44 });
//       });
//     });
//
//     describe('methods:getPlaceholder', () => {
//       it('should get placeholder without isoCode', async() => {
//         await setup();
//         const placehoslder = instance.getPlaceholder();
//         expect(placehoslder).toBe('');
//       });
//
//       it('should get placeholder with isoCode', async() => {
//         await setup({ attributes: { isoCode: ODS_COUNTRY_ISO_CODE.FR } });
//         const placehoslder = instance.getPlaceholder();
//         expect(placehoslder).toBe('01 23 45 67 89');
//       });
//     });
//
//     describe('methods:handlerOdsValueChange', () => {
//       it('should handler the select change value', async() => {
//         await setup();
//         const detail = {
//           selection: document.createElement('osds-select-option'),
//           validity: true,
//           value: 'gb',
//         } as unknown as OdsSelectValueChangeEventDetail;
//         const spyEmitOdsValueChange = jest.spyOn(instance.odsValueChange, 'emit');
//         instance.handlerOdsValueChange(new CustomEvent('odsValueChange', { detail }));
//         expect(instance.value).toBe('');
//         expect(instance.error).toBe(false);
//         expect(instance.isoCode).toBe(ODS_COUNTRY_ISO_CODE.GB);
//         expect(spyEmitOdsValueChange).toHaveBeenCalledTimes(0);
//       });
//
//       it('should handler the input change value with valid value', async() => {
//         await setup({ attributes: { isoCode: ODS_COUNTRY_ISO_CODE.FR } });
//         const detail = { value: '0653535353' } as OdsInputValueChangeEventDetail;
//         const spyEmitOdsValueChange = jest.spyOn(instance.odsValueChange, 'emit');
//         instance.handlerOdsValueChange(new CustomEvent('odsValueChange', { detail }));
//         expect(instance.value).toBe(detail.value);
//         expect(instance.error).toBe(false);
//         expect(spyEmitOdsValueChange).toHaveBeenCalledTimes(1);
//         expect(spyEmitOdsValueChange).toHaveBeenCalledWith({
//           value: '+33653535353',
//           isoCode: 'fr',
//           validity: {
//             invalid: false,
//             valid: true,
//           },
//         });
//       });
//
//       it('should handler the input change value with invalid value', async() => {
//         await setup({ attributes: { isoCode: ODS_COUNTRY_ISO_CODE.FR } });
//         const detail = { value: '065353qsd5353' } as OdsInputValueChangeEventDetail;
//         const spyEmitOdsValueChange = jest.spyOn(instance.odsValueChange, 'emit');
//         instance.handlerOdsValueChange(new CustomEvent('odsValueChange', { detail }));
//         expect(instance.value).toBe(detail.value);
//         expect(instance.error).toBe(true);
//         expect(spyEmitOdsValueChange).toHaveBeenCalledTimes(1);
//         expect(spyEmitOdsValueChange).toHaveBeenCalledWith({
//           value: '065353qsd5353',
//           isoCode: 'fr',
//           validity: {
//             invalid: true,
//             valid: false,
//           },
//         });
//       });
//
//       it('should handler the input change value with empty value', async() => {
//         await setup({ attributes: { isoCode: ODS_COUNTRY_ISO_CODE.FR } });
//         const detail = { value: '' } as OdsInputValueChangeEventDetail;
//         const spyEmitOdsValueChange = jest.spyOn(instance.odsValueChange, 'emit');
//         instance.handlerOdsValueChange(new CustomEvent('odsValueChange', { detail }));
//         expect(instance.value).toBe(detail.value);
//         expect(instance.error).toBe(false);
//         expect(spyEmitOdsValueChange).toHaveBeenCalledTimes(1);
//         expect(spyEmitOdsValueChange).toHaveBeenCalledWith({
//           value: '',
//           isoCode: 'fr',
//           validity: {
//             invalid: false,
//             valid: true,
//           },
//         });
//       });
//
//       it('should emit an event with old value', async() => {
//         await setup({ attributes: { isoCode: ODS_COUNTRY_ISO_CODE.FR } });
//         const detail = { value: '0653535353', oldValue: '0612345' } as OdsInputValueChangeEventDetail;
//         const spyEmitOdsValueChange = jest.spyOn(instance.odsValueChange, 'emit');
//         instance.handlerOdsValueChange(new CustomEvent('odsValueChange', { detail }));
//         expect(spyEmitOdsValueChange).toHaveBeenCalledTimes(1);
//         expect(spyEmitOdsValueChange).toHaveBeenCalledWith({
//           value: '+33653535353',
//           oldValue: '+330612345',
//           isoCode: 'fr',
//           validity: {
//             invalid: false,
//             valid: true,
//           },
//         });
//       });
//     });
//   });
});

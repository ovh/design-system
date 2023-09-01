import type { OdsPhoneNumberAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { HTTPRequest as pRequest } from 'puppeteer';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_COUNTRY_ISO_CODE } from '@ovhcloud/ods-common-core';
import { odsSetE2eInterceptRequest } from '@ovhcloud/ods-common-stencil';
import { ODS_PHONE_NUMBER_COUNTRY_PRESET } from './constants/phone-number-countries';

describe('e2e:osds-phone-number', () => {
  const baseAttribute = { value: '' };
  let page: E2EPage;
  let el: E2EElement;
  let select: E2EElement;
  let input: E2EElement;
  let myCbk: (request: pRequest) => void;

  async function setup({ attributes, cbkInterceptorRequest }: { attributes: Partial<OdsPhoneNumberAttribute>, cbkInterceptorRequest?: (request: pRequest) => void }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsPhoneNumberAttribute>({ ...baseAttribute, ...attributes, countries: undefined }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    
    page.setRequestInterception(true);
    cbkInterceptorRequest && odsSetE2eInterceptRequest(page, cbkInterceptorRequest);
    
    await page.setContent(`<osds-phone-number ${odsStringAttributes2Str(stringAttributes)}></osds-phone-number>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    await page.waitForChanges();

    el = await page.find('osds-phone-number');
    el.setProperty('countries', attributes.countries ?? []);
    await page.waitForChanges();

    select = await page.find('osds-phone-number >>> osds-select');
    input = await page.find('osds-phone-number >>> osds-input');

    await page.waitForChanges();
  }

  beforeEach( async () => {
    myCbk = (request) => {
      if (request.url().includes('.svg') || request.url().includes('.json')) {
        request.respond({
          headers: { "Access-Control-Allow-Origin": "*" },
          body: 'myContent',
        });
      } else {
        request.continue();
      }
    };
  });

  it('should render', async () => {
    await setup({ attributes: {}, cbkInterceptorRequest: myCbk });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
    
    expect(input).not.toBeNull();
    expect(input).toHaveClass('hydrated');
  });

  it('should get default attributes', async () => {
    await setup({ attributes: {}, cbkInterceptorRequest: myCbk });
    expect(await el.getProperty('clearable')).toBe(DEFAULT_ATTRIBUTE.clearable);
    expect(await el.getProperty('countries')).toEqual(DEFAULT_ATTRIBUTE.countries);
    expect(await el.getProperty('disabled')).toBe(DEFAULT_ATTRIBUTE.disabled);
    expect(await el.getProperty('error')).toBe(DEFAULT_ATTRIBUTE.error);
    expect(await el.getProperty('value')).toBe(DEFAULT_ATTRIBUTE.value);
  });

  it('should display select because of countries', async () => {
    const countries = [ODS_COUNTRY_ISO_CODE.AD, ODS_COUNTRY_ISO_CODE.FR];
    await setup({ attributes: { countries }, cbkInterceptorRequest: myCbk });

    expect(select).not.toBeNull();
    expect(select).toHaveClass('hydrated');
    
    expect(input).not.toBeNull();
    expect(input).toHaveClass('hydrated');
  });

  it('should display select because of countries all', async () => {
    await setup({ attributes: { countries: ODS_PHONE_NUMBER_COUNTRY_PRESET.All }, cbkInterceptorRequest: myCbk });
    
    expect(select).not.toBeNull();
    expect(select).toHaveClass('hydrated');
    
    expect(input).not.toBeNull();
    expect(input).toHaveClass('hydrated');
  });

  it('should not display select because of no countries', async () => {
    await setup({ attributes: { }, cbkInterceptorRequest: myCbk });
    
    expect(select).toBeNull();

    expect(input).not.toBeNull();
    expect(input).toHaveClass('hydrated');
  });

  it('should get an error on load component', async () => {
    await setup({ attributes: { value: '0612345678902', isoCode: ODS_COUNTRY_ISO_CODE.FR}, cbkInterceptorRequest: myCbk });
    
    expect(await el.getProperty('error')).toBe(true);
  });

  it('should not parse the value as a number', async () => {
    await setup({ attributes: { value: '06123456dfsdf2', isoCode: ODS_COUNTRY_ISO_CODE.FR}, cbkInterceptorRequest: myCbk });
    
    expect(await el.getProperty('error')).toBe(true);
  });

  it('should reset the input with a change isoCode', async () => {
    const countries = [ODS_COUNTRY_ISO_CODE.AD, ODS_COUNTRY_ISO_CODE.FR];
    await setup({ attributes: { countries }, cbkInterceptorRequest: myCbk });

    await select.click();
    const optionElement = await page.findAll('osds-phone-number >>> osds-select > osds-select-option');
    await optionElement[1].click();

    await page.waitForChanges();
    expect(await el.getProperty('error')).toBe(false);
    expect(await el.getProperty('value')).toBe('');
    expect(await el.getProperty('isoCode')).toBe(ODS_COUNTRY_ISO_CODE.FR);
  });

  describe('Event', () => {
    it('should receive event odsValueChange with isoCode', async () => {
      await setup({ attributes: { isoCode: ODS_COUNTRY_ISO_CODE.FR }, cbkInterceptorRequest: myCbk });
  
      const spyOdsValueChange = await page.spyOnEvent('odsValueChange');
  
      const value = '0655998866';
      await input.setProperty('value', value);
      await page.waitForChanges();
      expect(spyOdsValueChange).toHaveReceivedEventTimes(1);
      expect(spyOdsValueChange).toHaveReceivedEventDetail({
        isoCode: 'fr',
        value: '+33655998866',
        validity: {
          customError: false,
          forbiddenValue: false,
          invalid: false,
          stepMismatch: false,
          valid: true,
          valueMissing: false,
        },
      });
    });

    it('should receive event odsValueChange with options selected', async () => {
      const countries = [ODS_COUNTRY_ISO_CODE.AD, ODS_COUNTRY_ISO_CODE.FR];
      await setup({ attributes: { countries }, cbkInterceptorRequest: myCbk });
      const odsValueChange = await el.spyOnEvent('odsValueChange');

      await select.click();
      
      const optionElement = await page.findAll('osds-phone-number >>> osds-select > osds-select-option');
      await optionElement[1].click();

      await page.waitForChanges();
      expect(odsValueChange).toHaveReceivedEventTimes(1);
    });
  });
});

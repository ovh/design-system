import type { OdsPhoneNumberAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { HTTPRequest as pRequest } from 'puppeteer';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_COUNTRY_ISO_CODE } from '@ovhcloud/ods-common-core';
import { odsSetE2eInterceptRequest } from '@ovhcloud/ods-common-stencil';

describe('e2e:osds-phone-number', () => {
  const baseAttribute = { value: '' };
  let page: E2EPage;
  let el: E2EElement;
  let select: E2EElement;
  let input: E2EElement;
  let url: string;
  let myCbk: (request: pRequest) => void;

  async function setup({ attributes, cbkInterceptorRequest }: { attributes: Partial<OdsPhoneNumberAttribute>, cbkInterceptorRequest?: (request: pRequest) => void }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsPhoneNumberAttribute>({ ...baseAttribute, ...attributes, countries: undefined }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
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
    url = '';
    myCbk = (request) => {
      if (request.url().includes('.svg')) {
        request.respond({
          headers: { "Access-Control-Allow-Origin": "*" },
          body: 'myContent',
        });
        url = request.url();
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
    await setup({ attributes: { countries: 'all' }, cbkInterceptorRequest: myCbk });
    
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

  describe('Event', () => {
    it('should receive event odsValueChange', async () => {
      await setup({ attributes: { }, cbkInterceptorRequest: myCbk });
  
      const odsValueChange = await el.spyOnEvent('odsValueChange');
  
      await input.setProperty('value', '+33655998866');
      await page.waitForChanges();
      expect(odsValueChange).toHaveReceivedEventTimes(1);
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

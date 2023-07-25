import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { HTTPRequest as pRequest } from 'puppeteer';
import type { OdsFlagAttribute } from './interfaces/attributes';
import { Ods, ODS_COUNTRY_ISO_CODE, OdsWindow, odsSetup } from '@ovhcloud/ods-common-core';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { odsSetE2eInterceptRequest } from '@ovhcloud/ods-common-stencil';
import { Build } from '@stencil/core';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes'

// eslint-disable-next-line no-var
declare var window: OdsWindow;

describe('e2e:osds-flag', () => {
  const baseAttribute = { iso: ODS_COUNTRY_ISO_CODE.FR, lazy: false };
  let page: E2EPage;
  let el: E2EElement;
  let isoProperty: ODS_COUNTRY_ISO_CODE;
  let url: string;
  let myCbk: (request: pRequest) => void;
  let spaceBefore = ``;

  async function setup({ attributes = {}, cbkInterceptorRequest, outsideViewport }: { attributes: Partial<OdsFlagAttribute>, html?: string, cbkInterceptorRequest?: (request: pRequest) => void, outsideViewport?: boolean }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsFlagAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    cbkInterceptorRequest && odsSetE2eInterceptRequest(page, cbkInterceptorRequest);

    if (outsideViewport) {
      spaceBefore = `<div style="width: 1000px; height: 1000px"></div>`;
    }

    await page.setContent(`
      ${spaceBefore}
      <osds-flag ${odsStringAttributes2Str(stringAttributes)}></osds-flag>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-flag');
  }

  beforeEach( async () => {
    const winB = window;
    // console.log('ici winB', (winB as any));
    // console.log('ici winB', (winB as any).gg);
    (winB as any).gg = 'winB';
    // console.log('ici winB', (winB as any).gg);
    odsSetup();
    url = '';
    myCbk = (request) => {
      if (request.url().includes('fr.svg')) {
        request.respond({
          headers: { "Access-Control-Allow-Origin": "*" },
          body: 'myContent',
        });
        // console.log('request.url()', request.url());
        // console.log('test myCbk window?.ods.config?.asset in myCbk', window?.ods?.config?.asset);
        url = request.url();
      } else {
        request.continue();
      }
    };
  });

  afterEach(() => {
    Build.isBrowser = false;
    jest.clearAllMocks();
  });

  async function updateReferences() {
    isoProperty = await el.getProperty('iso');
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
  });

  it('should fallback to default when iso code does not exist', async () => {
    await setup({ attributes: { iso: 'wrongIso' as ODS_COUNTRY_ISO_CODE } });
    await updateReferences();
    expect(isoProperty).toBe(undefined);
  });

  describe('path', () => {
    it('should load default path', async () => {
      await setup({ attributes: {}, cbkInterceptorRequest: myCbk });
      const pattern = /^https?:\/\/localhost(:\d+)?(\/.*)?\/fr\.svg$/;
      expect(url).toMatch(pattern);
      expect(url).toMatch(pattern);
    });

    xit('should load with ODS path', async () => {
      // Ods.instance().assetPath('../flags-custom-path/');
      // !window.ods && (window.ods = { config: { logging: { active: true }, asset: {path: '../flags-custom-path/' } } });

      // console.log('test window?', window);
      // console.log('test window?.ods', window?.ods);
      // console.log('test window?.ods.config?.asset', window?.ods?.config?.asset);
      Ods.instance().assetPath('../flags-custom-path/');
      // console.log('test Ods.instance().getConfig().asset', Ods.instance().getConfig().asset.path);
      // window?.ods?.latest?.assetPath('../flags-custom-path/');
      await setup({ attributes: {}, cbkInterceptorRequest: myCbk });
      await page.waitForChanges();
      const pattern = /https?:\/\/localhost(:\d+)?\/[\w\/]+flags-custom-path\/fr\.svg/;
      expect(url).toBe(pattern);
    });

    it('should load with custom path', async () => {
      await setup({ attributes: { iso: ODS_COUNTRY_ISO_CODE.FR ,assetPath: '../flags-custom-path/' }, cbkInterceptorRequest: myCbk});
      const pattern = /^https?:\/\/localhost(:\d+)?\/[\w\/]*flags-custom-path\/fr\.svg/;
      expect(url).toMatch(pattern);
    });

    it('should load custom src', async () => {
      myCbk = (request) => {
        if (request.url().includes('it.svg')) {
          request.respond({
            headers: { "Access-Control-Allow-Origin": "*" },
            body: 'myContent'
          });
          url = request.url();
        } else {
          request.continue();
        }
      };
      await setup({ attributes: { iso: ODS_COUNTRY_ISO_CODE.FR, src: '../flags-custom-src-path/it.svg' }, cbkInterceptorRequest: myCbk });
      const pattern = /^https?:\/\/localhost(:\d+)?\/flags-custom-src-path\/it.svg/;
      expect(url).toMatch(pattern);
    });
  });

  describe('lazy', () => {
    it('should load if visible', async () => {
      await setup({ attributes: { iso: ODS_COUNTRY_ISO_CODE.FR, lazy: true }, cbkInterceptorRequest: myCbk });
      const pattern = /^https?:\/\/localhost(:\d+)?(\/.*)?\/fr\.svg$/;
      expect(url).toMatch(pattern);
    });
    it('should not load if hidden', async () => {
      await setup({ attributes: { iso: ODS_COUNTRY_ISO_CODE.FR, lazy: true }, cbkInterceptorRequest: myCbk, outsideViewport: true });
      expect(url).toBe('');
    });
  });


  it('should have flag svg content in dom', async () => {
    const old = Build.isBrowser;
    Build.isBrowser = true;
    myCbk = (request) => {
      if (request.url().includes('fr.svg')) {
        request.respond({
          headers: { "Access-Control-Allow-Origin": "*" },
          body: '<svg></svg>'
        });
        url = request.url();
      } else {
        request.continue();
      }
    };
    await setup({ attributes: {}, cbkInterceptorRequest: myCbk });
    await page.waitForChanges();
    const svgContent = el.shadowRoot.querySelector('.svg-inner')?.innerHTML;
    expect(svgContent).toEqual('<svg></svg>');
    Build.isBrowser = old;
  });
});

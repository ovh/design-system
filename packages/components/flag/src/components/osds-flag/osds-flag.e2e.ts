import type { ODS_FLAG_ISO_CODE_UNION } from './constants/flag-iso-code';
import type { OdsFlagAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { HTTPRequest as pRequest } from 'puppeteer';
import { odsSetE2eInterceptRequest } from '@ovhcloud/ods-common-stencil';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { Build } from '@stencil/core';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_FLAG_ISO_CODE } from './constants/flag-iso-code';

describe('e2e:osds-flag', () => {
  const baseAttribute = { iso: ODS_FLAG_ISO_CODE.FR, lazy: false };
  let page: E2EPage;
  let el: E2EElement;
  let isoProperty: string;
  let url: string;
  let myCbk: (request: pRequest) => void;

  async function setup({ attributes = {}, cbkInterceptorRequest, outsideViewport }: { attributes: Partial<OdsFlagAttribute>, cbkInterceptorRequest?: (request: pRequest) => void, outsideViewport?: boolean }): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsFlagAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);
    let spaceBefore = '';

    page = await newE2EPage();
    cbkInterceptorRequest && odsSetE2eInterceptRequest(page, cbkInterceptorRequest);

    if (outsideViewport) {
      spaceBefore = '<div style="width: 1000px; height: 1000px"></div>';
    }

    await page.setContent(`
      ${spaceBefore}
      <osds-flag ${odsStringAttributes2Str(stringAttributes)}></osds-flag>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-flag');
  }

  beforeEach(async() => {
    url = '';

    myCbk = (request): void => {
      if (request.url().includes('fr.svg')) {
        request.respond({
          body: 'myContent',
          headers: { 'Access-Control-Allow-Origin': '*' },
        });
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

  async function updateReferences(): Promise<void> {
    isoProperty = await el.getProperty('iso');
  }

  it('should render', async() => {
    await setup({ attributes: {} });

    expect(el).not.toBeNull();
  });

  it('should fallback to default when iso code does not exist', async() => {
    await setup({ attributes: { iso: 'wrongIso' as unknown as ODS_FLAG_ISO_CODE_UNION } });
    await updateReferences();

    expect(isoProperty).toBe(undefined);
  });

  describe('path', () => {
    it('should load default path', async() => {
      await setup({ attributes: {}, cbkInterceptorRequest: myCbk });
      const pattern = /^https?:\/\/localhost(:\d+)?(\/.*)?\/fr\.svg$/;

      expect(url).toMatch(pattern);
    });

    it('should load with custom path', async() => {
      await setup({ attributes: { assetPath: '../flags-custom-path/', iso: ODS_FLAG_ISO_CODE.FR }, cbkInterceptorRequest: myCbk });
      const pattern = /^https?:\/\/localhost(:\d+)?[\w/]*flags-custom-path\/fr\.svg/;

      expect(url).toMatch(pattern);
    });

    it('should load custom src', async() => {
      myCbk = (request): void => {
        if (request.url().includes('it.svg')) {
          request.respond({
            body: 'myContent',
            headers: { 'Access-Control-Allow-Origin': '*' },
          });
          url = request.url();
        } else {
          request.continue();
        }
      };
      await setup({ attributes: { iso: ODS_FLAG_ISO_CODE.FR, src: '../flags-custom-src-path/it.svg' }, cbkInterceptorRequest: myCbk });
      const pattern = /^https?:\/\/localhost(:\d+)?\/flags-custom-src-path\/it.svg/;

      expect(url).toMatch(pattern);
    });
  });

  describe('lazy', () => {
    it('should load if visible', async() => {
      await setup({ attributes: { iso: ODS_FLAG_ISO_CODE.FR, lazy: true }, cbkInterceptorRequest: myCbk });
      const pattern = /^https?:\/\/localhost(:\d+)?(\/.*)?\/fr\.svg$/;

      expect(url).toMatch(pattern);
    });

    it('should not load if hidden', async() => {
      await setup({ attributes: { iso: ODS_FLAG_ISO_CODE.FR, lazy: true }, cbkInterceptorRequest: myCbk, outsideViewport: true });

      expect(url).toBe('');
    });
  });

  it('should have flag svg content in dom', async() => {
    const old = Build.isBrowser;
    Build.isBrowser = true;
    myCbk = (request): void => {
      if (request.url().includes('fr.svg')) {
        request.respond({
          body: '<svg></svg>',
          headers: { 'Access-Control-Allow-Origin': '*' },
        });
        url = request.url();
      } else {
        request.continue();
      }
    };
    await setup({ attributes: {}, cbkInterceptorRequest: myCbk });
    await page.waitForChanges();
    const svgContent = el.shadowRoot.querySelector('.flag__svg')?.innerHTML;

    expect(svgContent).toBe('<svg></svg>');
    Build.isBrowser = old;
  });
});

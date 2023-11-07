import type { OdsMediumAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-medium', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, onPage }: { attributes?: Partial<OdsMediumAttribute>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsMediumAttribute>(attributes, DEFAULT_ATTRIBUTE);
    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`<osds-medium ${odsStringAttributes2Str(stringAttributes)}></osds-medium>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '4px'));

    el = await page.find('osds-medium');
  }

  describe('defaults', () => {
    beforeEach(async() => {
      await setup();
    });

    it('should render', async() => {
      expect(el).not.toBeNull();
      expect(el).toHaveClass('hydrated');
    });
  });

  describe('mandatory properties', () => {
    it('should have a url in src', async() => {
      await setup({ attributes: { src: 'https://corporate.ovhcloud.com/sites/default/files/2022-03/ovhcloud-logo2.png' } });
      expect(await el.getProperty('src')).toBe('https://corporate.ovhcloud.com/sites/default/files/2022-03/ovhcloud-logo2.png');
    });

    it('should have an alt description', async() => {
      await setup({ attributes: { alt: 'OVHcloud logo' } });
      expect(await el.getProperty('alt')).toBe('OVHcloud logo');
    });
  });
});

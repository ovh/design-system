import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsAccordionAttribute } from './interfaces/attributes';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';

describe('e2e:osds-accordion', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsAccordionAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsAccordionAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
      <osds-accordion ${odsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-accordion>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '4px'));
    el = await page.find('osds-accordion');
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

  describe('toggle', () => {
    it('should sync opened property and details open attribute', async() => {
      let componentOpened: boolean,
        details: HTMLDetailsElement | null;
      await setup({ attributes: { opened: false } });

      details = el.shadowRoot.querySelector('details');
      componentOpened = await el.getProperty('opened');
      expect(details?.getAttribute('open')).toBe(null);
      expect(componentOpened).toBe(false);

      el.setProperty('opened', true);
      await page.waitForChanges();

      details = el.shadowRoot.querySelector('details');
      componentOpened = await el.getProperty('opened');
      expect(details?.getAttribute('open')).toBe('');
      expect(componentOpened).toBe(true);
    });
  });
});

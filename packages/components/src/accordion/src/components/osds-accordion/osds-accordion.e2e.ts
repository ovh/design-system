import type { OdsAccordionAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';

import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';


describe('e2e:osds-accordion', () => {
  let page: E2EPage;
  let el: E2EElement;
  let summarySlot : E2EElement;

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
    summarySlot = await page.find('osds-accordion >>> summary');
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

    it('should not opened if disabled', async() => {
      const content = `
        <span slot='summary'>Lorem ipsum</span>
        Lorem ipsum
       `
      await setup({
        attributes: { opened: false, disabled: true },
        html : content
      });
      await page.waitForChanges();

      await summarySlot.focus();
      await page.waitForChanges();

      await page.keyboard.press('Space');
      await page.waitForChanges();

      const componentOpened = await el.getProperty('opened');

      expect(componentOpened).toBe(false);
    });
  });
});

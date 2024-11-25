import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-toggle navigation', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function isFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      return document.activeElement?.tagName === 'ODS-TOGGLE';
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-toggle');
  }

  beforeEach(jest.clearAllMocks);

  describe('focus', () => {
    it('should be focusable', async() => {
      await setup('<ods-toggle></ods-toggle>');
      const odsFocusSpy = await page.spyOnEvent('odsFocus');

      await page.keyboard.press('Tab');

      expect(await isFocused()).toBe(true);
      expect(odsFocusSpy).toHaveReceivedEventTimes(1);
    });

    it('should not be focusable with disabled', async() => {
      await setup('<ods-toggle is-disabled></ods-toggle>');
      const odsFocusSpy = await page.spyOnEvent('odsFocus');

      await page.keyboard.press('Tab');

      expect(await isFocused()).toBe(false);
      expect(odsFocusSpy).not.toHaveReceivedEvent();
    });

    it('should be focused on associated label click', async() => {
      await setup('<label for="ods-toggle">Dummy label</label><ods-toggle id="ods-toggle"></ods-toggle>');
      const labelElement = await page.find('label');

      expect(await isFocused()).toBe(false);

      await labelElement.click();
      await page.waitForChanges();

      expect(await isFocused()).toBe(true);
    });
  });

  describe('key navigation', () => {
    it('should not toggle value with Enter', async() => {
      await setup('<ods-toggle></ods-toggle>');
      expect(await el.getProperty('value')).toBeNull();

      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      expect(await el.getProperty('value')).toBeNull();
    });

    it('should toggle value with Space', async() => {
      await setup('<ods-toggle></ods-toggle>');
      expect(await el.getProperty('value')).toBeNull();

      await page.keyboard.press('Tab');
      await page.keyboard.press('Space');
      expect(await el.getProperty('value')).toBe(true);
    });
  });
});

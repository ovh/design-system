import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-range rendering', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function isInErrorState(): Promise<boolean | undefined> {
    return page.evaluate(() => {
      return document.querySelector('ods-range')?.shadowRoot?.querySelector('.ods-range__range')?.classList.contains('ods-range__range--error');
    });
  }

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-range');
  }

  it('should render the web component', async() => {
    await setup('<ods-range></ods-range>');

    expect(el.shadowRoot).not.toBeNull();
  });

  describe('defaultValue', () => {
    it('get defaultValue with props', async() => {
      const defaultValue = 40;
      await setup(`<ods-range default-value="${defaultValue}"></ods-range>`);

      expect(await el.getProperty('value')).toBe(defaultValue);
    });

    it('get defaultValue with midpoint max and min', async() => {
      await setup('<ods-range min="0" max="50"></ods-range>');

      expect(await el.getProperty('value')).toBe(25);
    });

    it('get defaultValue 0 with props', async() => {
      await setup('<ods-range default-value="0"></ods-range>');

      expect(await el.getProperty('value')).toBe(0);
    });

    it('get value 0 with props', async() => {
      await setup('<ods-range value="0"></ods-range>');

      expect(await el.getProperty('value')).toBe(0);
    });
  });

  describe('error state', () => {
    it('should not render in error on form submit, before of native default value', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-range is-required></ods-range></form>');

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(false);
    });

    it('should toggle the error state on value change', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-range is-required></ods-range></form>');

      await el.click();
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(false);

      await el.callMethod('clear');
      await page.click('body', { offset: { x: 200, y: 200 } }); // Blur
      await page.waitForChanges();

      await page.waitForChanges();
      expect(await isInErrorState()).toBe(true);
    });

    it('should enforce the error state if has-error is set even on valid range', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-range is-required has-error value="dummy"></ods-range></form>');
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(true);

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(true);
    });
  });
});

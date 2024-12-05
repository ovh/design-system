import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-toggle rendering', () => {
  let el: E2EElement;
  let input: E2EElement;
  let label: E2EElement;
  let page: E2EPage;
  let slider: E2EElement;

  async function getBorderColor(): Promise<string> {
    return await page.evaluate(() => {
      const slider = document.querySelector('ods-toggle')?.shadowRoot?.querySelector('.ods-toggle__container__slider');
      return slider ? window.getComputedStyle(slider).borderColor : '';
    });
  }

  async function isInErrorState(): Promise<boolean | undefined> {
    return await page.evaluate(() => {
      return document.querySelector('ods-toggle')?.shadowRoot?.querySelector('.ods-toggle__container__slider')?.classList.contains('ods-toggle__container__slider--error');
    });
  }

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-toggle');
    input = await page.find('ods-toggle >>> input');
    label = await page.find('ods-toggle >>> .ods-toggle__container__slider__label');
    slider = await page.find('ods-toggle >>> .ods-toggle__container__slider');
  }

  it('should render the web component', async() => {
    await setup('<ods-toggle></ods-toggle>');

    expect(el.shadowRoot).not.toBeNull();
    const inputStyle = await input.getComputedStyle();
    expect(inputStyle.height).toBe('0px');
    expect(inputStyle.width).toBe('0px');
    expect(inputStyle.opacity).toBe('0');
  });

  describe('disabled', () => {
    it('should render the web component disabled', async() => {
      await setup('<ods-toggle is-disabled></ods-toggle>');

      expect(input.getAttribute('disabled')).toBe('');
      expect(slider.classList.contains('ods-toggle__container__slider--disabled')).toBe(true);
    });
  });

  describe('withLabel', () => {
    it('should render the web component with label', async() => {
      await setup('<ods-toggle with-label></ods-toggle>');

      expect(label).toEqualText('OFF');
      await el.click();
      await page.waitForChanges();
      const text = await page.evaluate(() => {
        const label = document.querySelector('ods-toggle')?.shadowRoot?.querySelector('.ods-toggle__container__slider__label');
        return label?.innerHTML;
      });
      expect(text).toEqualText('ON');
    });
  });

  describe('error state', () => {
    it('should render in error on form submit, before any changes, if invalid', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-toggle is-required></ods-toggle></form>');

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(true);
    });

    it('should toggle the error state on value change', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-toggle is-required></ods-toggle></form>');

      await el.click();
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(false);

      await el.callMethod('clear');
      await page.click('body', { offset: { x: 200, y: 200 } }); // Blur
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(true);
    });

    it('should enforce the error state if has-error is set even on valid input', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-toggle is-required has-error value="true"></ods-toggle></form>');
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(true);

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(true);
    });

    it('should hide error style if checked', async() => {
      await setup('<ods-toggle has-error></ods-toggle>');
      const errorBorderColor = await getBorderColor();

      await el.click();
      await page.waitForChanges();

      expect(await getBorderColor()).not.toBe(errorBorderColor);
    });
  });
});

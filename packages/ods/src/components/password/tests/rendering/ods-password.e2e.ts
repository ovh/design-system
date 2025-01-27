import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-password rendering', () => {
  let buttonClearable: E2EElement;
  let el: E2EElement;
  let page: E2EPage;
  let part: E2EElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-password');
    part = await page.find('ods-password >>> [exportparts="input"]');
    buttonClearable = await page.find('ods-password >>> ods-button[icon="xmark"]');
  }

  describe('part', () => {
    it('should render with custom style applied', async() => {
      await setup('<ods-password></ods-password>', 'ods-password::part(input) { width: 100px }');
      const partStyle = await part.getComputedStyle();
      expect(partStyle.getPropertyValue('width')).toBe('100px');
    });
  });

  describe('isClearable', () => {
    it('should render a clearable button', async() => {
      await setup('<ods-password is-clearable value="clearable"></ods-password>');

      expect(buttonClearable).not.toBeNull();
    });

    it('should render a disabled clearable button when password is disabled', async() => {
      await setup('<ods-password is-disabled is-clearable value="clearable"></ods-password>');

      expect(buttonClearable.getAttribute('is-disabled')).toBe('');
    });

    it('should render a disabled clearable button when password is readonly', async() => {
      await setup('<ods-password is-readonly is-clearable value="clearable"></ods-password>');

      expect(buttonClearable.getAttribute('is-disabled')).toBe('');
    });
  });

  describe('error state', () => {
    it('should render in error on form submit, before any changes, if invalid', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-password is-required></ods-password></form>');

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      const hasErrorClass = await page.evaluate(() => {
        return document.querySelector('ods-password')?.shadowRoot?.querySelector('ods-input')?.shadowRoot?.querySelector('input')?.classList.contains('ods-input__input--error');
      });
      expect(hasErrorClass).toBe(true);
    });

    it('should toggle the error state on value change', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-password is-required></ods-password></form>');

      await el.type('abcd');
      await page.waitForChanges();

      const hasErrorClass = await page.evaluate(() => {
        return document.querySelector('ods-password')?.shadowRoot?.querySelector('ods-input')?.shadowRoot?.querySelector('input')?.classList.contains('ods-input__input--error');
      });
      expect(hasErrorClass).toBe(false);

      await el.callMethod('clear');
      await page.click('body', { offset: { x: 200, y: 200 } }); // Blur
      await page.waitForChanges();

      const hasErrorClass2 = await page.evaluate(() => {
        return document.querySelector('ods-password')?.shadowRoot?.querySelector('ods-input')?.shadowRoot?.querySelector('input')?.classList.contains('ods-input__input--error');
      });
      await page.waitForChanges();
      expect(hasErrorClass2).toBe(true);
    });

    it('should enforce the error state if has-error is set even on valid password', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-password is-required has-error value="dummy"></ods-password></form>');
      await page.waitForChanges();

      const hasErrorClass = await page.evaluate(() => {
        return document.querySelector('ods-password')?.shadowRoot?.querySelector('ods-input')?.shadowRoot?.querySelector('input')?.classList.contains('ods-input__input--error');
      });
      expect(hasErrorClass).toBe(true);

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      const hasErrorClass2 = await page.evaluate(() => {
        return document.querySelector('ods-password')?.shadowRoot?.querySelector('ods-input')?.shadowRoot?.querySelector('input')?.classList.contains('ods-input__input--error');
      });
      expect(hasErrorClass2).toBe(true);
    });
  });
});

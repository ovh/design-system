import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-textarea rendering', () => {
  let el: E2EElement;
  let page: E2EPage;
  let textarea: E2EElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-textarea');
    textarea = await page.find('ods-textarea >>> .ods-textarea__textarea');
  }

  it('should render the web component', async() => {
    await setup('<ods-textarea></ods-textarea>');

    expect(el.shadowRoot).not.toBeNull();
    expect(textarea).not.toBeNull();
  });

  describe('part', () => {
    it('should render with custom style applied', async() => {
      const customBackgroundColor = '#ff0000';

      await setup('<ods-textarea></ods-textarea>', `ods-textarea::part(textarea) { background-color: ${customBackgroundColor}; }`);

      const tagStyle = await textarea.getComputedStyle();
      expect(tagStyle.getPropertyValue('background-color')).toBe('rgb(255, 0, 0)');
    });
  });

  describe('error state', () => {
    it('should render in error on form submit, before any changes, if invalid', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-textarea is-required></ods-textarea></form>');

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      const hasErrorClass = await page.evaluate(() => {
        return document.querySelector('ods-textarea')?.shadowRoot?.querySelector('textarea')?.classList.contains('ods-textarea__textarea--error');
      });
      expect(hasErrorClass).toBe(true);
    });

    it('should toggle the error state on value change', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-textarea is-required></ods-textarea></form>');

      await el.type('abcd');
      await page.waitForChanges();

      const hasErrorClass = await page.evaluate(() => {
        return document.querySelector('ods-textarea')?.shadowRoot?.querySelector('textarea')?.classList.contains('ods-textarea__textarea--error');
      });
      expect(hasErrorClass).toBe(false);

      await el.callMethod('clear');
      await page.click('body', { offset: { x: 200, y: 200 } }); // Blur
      await page.waitForChanges();

      const hasErrorClass2 = await page.evaluate(() => {
        return document.querySelector('ods-textarea')?.shadowRoot?.querySelector('textarea')?.classList.contains('ods-textarea__textarea--error');
      });
      await page.waitForChanges();
      expect(hasErrorClass2).toBe(true);
    });

    it('should enforce the error state if has-error is set even on valid textarea', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-textarea is-required has-error value="dummy"></ods-textarea></form>');
      await page.waitForChanges();

      const hasErrorClass = await page.evaluate(() => {
        return document.querySelector('ods-textarea')?.shadowRoot?.querySelector('textarea')?.classList.contains('ods-textarea__textarea--error');
      });
      expect(hasErrorClass).toBe(true);

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      const hasErrorClass2 = await page.evaluate(() => {
        return document.querySelector('ods-textarea')?.shadowRoot?.querySelector('textarea')?.classList.contains('ods-textarea__textarea--error');
      });
      expect(hasErrorClass2).toBe(true);
    });
  });
});

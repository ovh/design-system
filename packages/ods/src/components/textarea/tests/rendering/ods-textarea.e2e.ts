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
      await setup('<form><ods-textarea is-required></ods-textarea></form>');

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });

      // TODO add expect error style to be applied
      expect(false).toBe(true);
    });

    it('should toggle the error state on value change', async() => {
      // TODO add tests <ods-textarea is-required>
      //  start empty -> type text -> expect no error style
      //  -> erase text -> expect error style

      expect(false).toBe(true);
    });

    it('should enforce the error state if has-error is set even on valid textarea', async() => {
      // TODO add tests <ods-textarea is-required has-error value="dummy">

      // TODO add expect error style to be applied
      expect(false).toBe(true);
    });
  });
});

import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-accordion rendering', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function isDetailsOpen(): Promise<boolean> {
    return await page.evaluate(() => {
      const details = document.querySelector('ods-accordion')?.shadowRoot?.querySelector('.ods-accordion__details');
      return details?.getAttribute('open') === '';
    });
  }

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-accordion');
  }

  it('should render the web component', async() => {
    await setup('<ods-accordion></ods-accordion>');

    expect(el.shadowRoot).not.toBeNull();
  });

  describe('isDisabled', () => {
    it('should render with correct disabled style', async() => {
      await setup(`
        <ods-accordion is-disabled>
          <span slot="summary">Hello, world!</span>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </p>
        </ods-accordion>
      `);
      await page.waitForChanges();

      const isDisabled = await page.evaluate(() => {
        const details = document.querySelector('ods-accordion')?.shadowRoot?.querySelector('.ods-accordion__details');
        return details?.classList.contains('ods-accordion__details--disabled');
      });

      expect(isDisabled).toBe(true);
    });
  });

  describe('isOpen', () => {
    it('should render open if set', async() => {
      await setup(`
        <ods-accordion is-open>
          <span slot="summary">Hello, world!</span>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </p>
        </ods-accordion>
      `);
      await page.waitForChanges();

      expect((await isDetailsOpen())).toBe(true);
    });

    it('should render closed if unset', async() => {
      await setup(`
        <ods-accordion>
          <span slot="summary">Hello, world!</span>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </p>
        </ods-accordion>
      `);
      await page.waitForChanges();

      expect((await isDetailsOpen())).toBe(false);
    });
  });
});

import type { E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-accordion navigation', () => {
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
  }

  it('details should be focusable on tab', async() => {
    await setup(`
      <ods-accordion>
        <span slot="summary">Hello, world!</span>

        <ods-text preset="span">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </ods-text>
      </ods-accordion>
    `);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    const isDetailsFocused = await page.evaluate(() => {
      const details = document.querySelector('ods-accordion')?.shadowRoot?.querySelector('.ods-accordion__wrapper');
      const activeElement = document.activeElement?.shadowRoot?.activeElement;
      return details === activeElement;
    });

    expect(isDetailsFocused).toBe(true);
  });

  it('details should not be focusable on tab if disabled', async() => {
    await setup(`
      <ods-accordion is-disabled>
        <span slot="summary">Hello, world!</span>

        <ods-text preset="span">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </ods-text>
      </ods-accordion>
    `);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    const isDetailsFocused = await page.evaluate(() => {
      const details = document.querySelector('ods-accordion')?.shadowRoot?.querySelector('.ods-accordion__wrapper');
      const activeElement = document.activeElement?.shadowRoot?.activeElement;
      return details === activeElement;
    });

    expect(isDetailsFocused).toBe(false);
  });

  it('details should toggle on "Enter" when focused', async() => {
    await setup(`
      <ods-accordion>
        <span slot="summary">Hello, world!</span>

        <ods-text preset="span">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </ods-text>
      </ods-accordion>
    `);

    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.waitForChanges();

    const isDetailsOpen = await page.evaluate(() => {
      const details = document.querySelector('ods-accordion')?.shadowRoot?.querySelector('.ods-accordion__wrapper');
      return details?.getAttribute('open') === '';
    });

    expect(isDetailsOpen).toBe(true);
  });

  it('details should toggle on "Space" when focused', async() => {
    await setup(`
      <ods-accordion>
        <span slot="summary">Hello, world!</span>

        <ods-text preset="span">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </ods-text>
      </ods-accordion>
    `);

    await page.keyboard.press('Tab');
    await page.keyboard.press('Space');
    await page.waitForChanges();

    const isDetailsOpen = await page.evaluate(() => {
      const details = document.querySelector('ods-accordion')?.shadowRoot?.querySelector('.ods-accordion__wrapper');
      return details?.getAttribute('open') === '';
    });

    expect(isDetailsOpen).toBe(true);
  });

  it('details should toggle on click', async() => {
    await setup(`
      <ods-accordion>
        <span slot="summary">Hello, world!</span>

        <ods-text preset="span">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </ods-text>
      </ods-accordion>
    `);
    const details = await page.find('ods-accordion >>> .ods-accordion__wrapper');

    await details.click();
    await page.waitForChanges();

    const isDetailsOpen = await page.evaluate(() => {
      const details = document.querySelector('ods-accordion')?.shadowRoot?.querySelector('.ods-accordion__wrapper');
      return details?.getAttribute('open') === '';
    });

    expect(isDetailsOpen).toBe(true);
  });

  it('details should not toggle on click if disabled', async() => {
    await setup(`
      <ods-accordion is-disabled>
        <span slot="summary">Hello, world!</span>

        <ods-text preset="span">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </ods-text>
      </ods-accordion>
    `);
    const details = await page.find('ods-accordion >>> .ods-accordion__wrapper');

    await details.click();
    await page.waitForChanges();

    const isDetailsOpen = await page.evaluate(() => {
      const details = document.querySelector('ods-accordion')?.shadowRoot?.querySelector('.ods-accordion__wrapper');
      return details?.getAttribute('open') === '';
    });

    expect(isDetailsOpen).toBe(false);
  });
});

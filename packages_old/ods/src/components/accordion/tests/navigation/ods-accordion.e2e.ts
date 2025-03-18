import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-accordion navigation', () => {
  let details: E2EElement;
  let page: E2EPage;

  async function isDetailsOpen(): Promise<boolean> {
    return await page.evaluate(() => {
      const details = document.querySelector('ods-accordion')?.shadowRoot?.querySelector('.ods-accordion__details');
      return details?.getAttribute('open') === '';
    });
  }

  async function isSummaryFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      const summary = document.querySelector('ods-accordion')?.shadowRoot?.querySelector('.ods-accordion__details__summary');
      const activeElement = document.activeElement?.shadowRoot?.activeElement;
      return summary === activeElement;
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    details = await page.find('ods-accordion >>> .ods-accordion__details');
  }

  it('should focus summary on tab', async() => {
    await setup(`
      <ods-accordion>
        <span slot="summary">Hello, world!</span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </p>
      </ods-accordion>
    `);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect((await isSummaryFocused())).toBe(true);
  });

  it('should not be focusable on tab if disabled', async() => {
    await setup(`
      <ods-accordion is-disabled>
        <span slot="summary">Hello, world!</span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </p>
      </ods-accordion>
    `);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect((await isSummaryFocused())).toBe(false);
  });

  it('should toggle on "Enter" when focused', async() => {
    await setup(`
      <ods-accordion>
        <span slot="summary">Hello, world!</span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </p>
      </ods-accordion>
    `);

    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.waitForChanges();

    expect((await isDetailsOpen())).toBe(true);
  });

  it('should toggle on "Enter" after click', async() => {
    await setup(`
      <ods-accordion>
        <span slot="summary">Hello, world!</span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </p>
      </ods-accordion>
    `);

    await details.click();
    await page.waitForChanges();

    expect((await isDetailsOpen())).toBe(true);

    await page.keyboard.press('Enter');
    await page.waitForChanges();

    expect((await isDetailsOpen())).toBe(false);
  });

  it('should toggle on "Space" when focused', async() => {
    await setup(`
      <ods-accordion>
        <span slot="summary">Hello, world!</span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </p>
      </ods-accordion>
    `);

    await page.keyboard.press('Tab');
    await page.keyboard.press('Space');
    await page.waitForChanges();

    expect((await isDetailsOpen())).toBe(true);
  });

  it('should toggle on click', async() => {
    await setup(`
      <ods-accordion>
        <span slot="summary">Hello, world!</span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </p>
      </ods-accordion>
    `);

    await details.click();
    await page.waitForChanges();

    expect((await isDetailsOpen())).toBe(true);
  });

  it('should not toggle on click if disabled', async() => {
    await setup(`
      <ods-accordion is-disabled>
        <span slot="summary">Hello, world!</span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </p>
      </ods-accordion>
    `);

    await details.click();
    await page.waitForChanges();

    expect((await isDetailsOpen())).toBe(false);
  });

  it('should not open / close summary when clickable element inside', async() => {
    await setup(`
      <ods-accordion>
        <span slot="summary">
          Hello, world!
          <button id="summary-btn">Summary button</button>
        </span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </p>
        <button id="detail-btn">Detail button</button>
      </ods-accordion>
    `);

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.waitForChanges();

    expect((await isDetailsOpen())).toBe(false);

    await details.click();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.waitForChanges();

    expect((await isDetailsOpen())).toBe(true);
  });
});

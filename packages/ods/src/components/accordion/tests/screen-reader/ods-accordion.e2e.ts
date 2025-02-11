import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-accordion a11y', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function injectVirtualScreenReader() {
    await page.addScriptTag({
      url: 'https://unpkg.com/@guidepup/virtual-screen-reader/lib/esm/index.browser.js',
      type: 'module',
    });

    await page.addScriptTag({
      content: 'import { virtual } from "https://unpkg.com/@guidepup/virtual-screen-reader/lib/esm/index.browser.js"; window.virtual = virtual;',
      type: 'module',
    });
  }

  async function startVirtualScreenReader() {
    await page.evaluate(async () => {
      await (window as any).virtual.start({
        container: document.body,
      });
    });
  }

  async function navigateToEndOfDocument() {
    await page.evaluate(async () => {
      while ((await (window as any).virtual.lastSpokenPhrase()) !== 'end of document') {
        await (window as any).virtual.next();
      }
    });
  }

  async function getSpokenPhraseLog() {
    return await page.evaluate(async () => {
      return await (window as any).virtual.spokenPhraseLog();
    });
  }

  async function stopVirtualScreenReader() {
    await page.evaluate(async () => {
      await (window as any).virtual.stop();
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

  it('should navigate with screen reader in accordion', async() => {
    await setup(`
      <ods-accordion>
          <span slot="summary">Hello, world!</span>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </p>
        </ods-accordion>
    `);

    await injectVirtualScreenReader();
    await startVirtualScreenReader();

    try {
      await navigateToEndOfDocument();

      const spokenPhraseLog = await getSpokenPhraseLog();
      console.log('spokenPhraseLog', spokenPhraseLog);

      expect(spokenPhraseLog).toContain(
        'Hello, world!',
      );
    } finally {
      await stopVirtualScreenReader();
    }

  });
});

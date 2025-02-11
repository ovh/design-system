import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-input a11y', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function injectVirtualScreenReader(): Promise<void> {
    await page.addScriptTag({
      type: 'module',
      url: 'https://unpkg.com/@guidepup/virtual-screen-reader/lib/esm/index.browser.js',
    });

    await page.addScriptTag({
      content: 'import { virtual } from "https://unpkg.com/@guidepup/virtual-screen-reader/lib/esm/index.browser.js"; window.virtual = virtual;',
      type: 'module',
    });
  }

  async function startVirtualScreenReader(): Promise<void> {
    await page.evaluate(async() => {
      await (window as any).virtual.start({
        container: document.body,
      });
    });
  }

  async function navigateToEndOfDocument(): Promise<void> {
    await page.evaluate(async() => {
      while ((await (window as any).virtual.lastSpokenPhrase()) !== 'end of document') {
        console.log('(await (window as any).virtual.lastSpokenPhrase()', (await (window as any).virtual.lastSpokenPhrase()));
        await (window as any).virtual.next();
      }
    });
  }

  async function getSpokenPhraseLog(): Promise<void> {
    return await page.evaluate(async() => {
      return await (window as any).virtual.spokenPhraseLog();
    });
  }

  async function stopVirtualScreenReader(): Promise<void> {
    await page.evaluate(async() => {
      await (window as any).virtual.stop();
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));

    el = await page.find('ods-input');
  }

  it('should navigate to the input and announce the placeholder', async() => {
    await setup(`
      <ods-input placeholder="Placeholder">
      </ods-input>
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

import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-link navigation', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-link');
  }

  it('should be focused on tabulation', async() => {
    await setup('<ods-link label="some link" href="https://www.ovhcloud.com/fr/"></ods-link>');
    await page.keyboard.press('Tab');
    const focusedTagName = await page.evaluate(() => document.activeElement?.tagName);
    expect(focusedTagName).toBe('ODS-LINK');
  });

  it('should not be focused when  disabled', async() => {
    await setup('<ods-link label="some link" is-disabled href="https://www.ovhcloud.com/fr/"></ods-link>');
    await page.keyboard.press('Tab');
    const focusedTagName = await page.evaluate(() => document.activeElement?.tagName);
    expect(focusedTagName).not.toBe('ODS-LINK');
  });

  it('should trigger link on Enter', async() => {
    const href = 'https://www.ovhcloud.com/fr/';
    await setup(`<ods-link label="some link" href="${href}"></ods-link>`);
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.waitForNetworkIdle();
    expect(page.url()).toBe(href);
  });

  it('should not trigger link on Enter when disabled', async() => {
    const href = 'https://www.ovhcloud.com/fr/';
    await setup(`<ods-link label="some link" is-disabled href="${href}"></ods-link>`);
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.waitForNetworkIdle();
    expect(page.url()).not.toBe(href);
  });

  it('should trigger link on click', async() => {
    const href = 'https://www.ovhcloud.com/fr/';
    await setup(`<ods-link label="some link" href="${href}"></ods-link>`);
    await el.click();
    await page.waitForNetworkIdle();
    expect(page.url()).toBe(href);
  });

  it('should not trigger link on click when disabled', async() => {
    const href = 'https://www.ovhcloud.com/fr/';
    await setup(`<ods-link label="some link" is-disabled href="${href}"></ods-link>`);
    await el.click();
    await page.waitForNetworkIdle();
    expect(page.url()).not.toBe(href);
  });
});

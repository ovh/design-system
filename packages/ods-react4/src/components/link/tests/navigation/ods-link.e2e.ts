import 'expect-puppeteer';
import 'jest-puppeteer';

describe('OdsLink navigation', () => {
  it('should be focused on tabulation', async() => {
    await page.goto('http://localhost:3000/iframe.html?args=&id=tests-navigation--render&viewMode=story');
    await page.waitForNavigation();
    await page.waitForSelector('[data-testid="render"]');

    await page.keyboard.press('Tab');
    const focusedTagName = await page.evaluate(() => document.activeElement?.tagName);

    expect(focusedTagName).toBe('A');
  });

  // it('should not be focused when  disabled', async() => {
  //   await setup('<ods-link label="some link" is-disabled href="https://www.ovhcloud.com/fr/"></ods-link>');
  //   await page.keyboard.press('Tab');
  //   const focusedTagName = await page.evaluate(() => document.activeElement?.tagName);
  //   expect(focusedTagName).not.toBe('ODS-LINK');
  // });
  //
  // it('should trigger link on Enter', async() => {
  //   const href = 'https://www.ovhcloud.com/fr/';
  //   await setup(`<ods-link label="some link" href="${href}"></ods-link>`);
  //   await page.keyboard.press('Tab');
  //   await page.keyboard.press('Enter');
  //   await page.waitForNetworkIdle();
  //   expect(page.url()).toBe(href);
  // });
  //
  // it('should not trigger link on Enter when disabled', async() => {
  //   const href = 'https://www.ovhcloud.com/fr/';
  //   await setup(`<ods-link label="some link" is-disabled href="${href}"></ods-link>`);
  //   await page.keyboard.press('Tab');
  //   await page.keyboard.press('Enter');
  //   await page.waitForNetworkIdle();
  //   expect(page.url()).not.toBe(href);
  // });
  //
  // it('should trigger link on click', async() => {
  //   const href = 'https://www.ovhcloud.com/fr/';
  //   await setup(`<ods-link label="some link" href="${href}"></ods-link>`);
  //   await el.click();
  //   await page.waitForNetworkIdle();
  //   expect(page.url()).toBe(href);
  // });
  //
  // it('should not trigger link on click when disabled', async() => {
  //   const href = 'https://www.ovhcloud.com/fr/';
  //   await setup(`<ods-link label="some link" is-disabled href="${href}"></ods-link>`);
  //   await el.click();
  //   await page.waitForNetworkIdle();
  //   expect(page.url()).not.toBe(href);
  // });
});

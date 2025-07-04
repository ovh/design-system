import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Spinner accessibility', () => {
  it('should render with the right role', async() => {
    await gotoStory(page, 'accessibility/role');

    const odsSpinner = await page.waitForSelector('[data-testid="role"]');
    const role = await odsSpinner?.evaluate((el: Element) => el.getAttribute('role'));

    expect(role).toBe('progressbar');
  });
  it('should render aria-hidden on svg', async() => {
    await gotoStory(page, 'accessibility/aria-hidden');

    const odsSpinner = await page.waitForSelector('[data-testid="aria-hidden"] svg');
    const ariaHidden = await odsSpinner?.evaluate((el: Element) => el.getAttribute('aria-hidden'));

    expect(ariaHidden).toBe('true');
  });
});

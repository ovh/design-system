import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('OdsSpinner accessibility', () => {
  it('should render with the right role', async() => {
    await gotoStory(page, 'accessibility/role');

    const odsSpinner = await page.waitForSelector('[data-testid="role"]');
    const role = await odsSpinner?.evaluate((el: Element) => el.getAttribute('role'));

    expect(role).toBe('progressbar');
  });
});

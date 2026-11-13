import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Code accessibility', () => {
  beforeEach(async() => {
    await gotoStory(page, 'accessibility/role');
    await page.waitForSelector('[data-testid="copyable"]');
  });

  it('should render no role attribute when the code cannot be copied', async() => {
    expect(await page.$eval('[data-testid="static"]', (el) => el.hasAttribute('role'))).toBe(false);
  });

  it('should render the group role when the code can be copied', async() => {
    expect(await page.$eval('[data-testid="copyable"]', (el) => el.getAttribute('role'))).toBe('group');
  });
});

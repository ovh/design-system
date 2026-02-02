import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Menu rendering', () => {
  it('should render the component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render-trigger"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="menu-content"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="menu-trigger"]')).not.toBeNull();
  });
});

import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Range rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-ods="range"]')).not.toBeNull();
  });
});

import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Markdown rendering', () => {
  it('should render the component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"] > p')).not.toBeNull();
  });
});

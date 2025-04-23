import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('RadioGroup rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
  });
});

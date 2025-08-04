import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Popover rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render-trigger"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="popover-content"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="popover-trigger"]')).not.toBeNull();
  });
});

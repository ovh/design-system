import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Tooltip rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render-trigger"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="tooltip-content"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="tooltip-trigger"]')).not.toBeNull();
  });
});

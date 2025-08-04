import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Clipboard rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render-trigger"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="clipboard"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="clipboard-control"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="clipboard-trigger"]')).not.toBeNull();
  });
});

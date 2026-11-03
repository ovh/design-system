import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Tooltip rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render-trigger"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="tooltip-content"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="tooltip-trigger"]')).not.toBeNull();
  });

  it('should open on top of the trigger by default', async() => {
    await gotoStory(page, 'rendering/default-position');

    const content = await page.waitForSelector('[data-testid="default-position"][data-placement]');

    expect(await content?.evaluate((el: Element) => el.getAttribute('data-placement'))).toBe('top');
  });
});

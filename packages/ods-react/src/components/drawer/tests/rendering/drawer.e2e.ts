import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Drawer rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="drawer-body"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="drawer-content"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="drawer-trigger"]')).not.toBeNull();
  });
});

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

  it('should render a backdrop when the backdrop prop is set', async() => {
    await gotoStory(page, 'rendering/with-backdrop');
    await page.waitForSelector('[data-ods="drawer-content"]');

    expect(await page.$('[data-scope="dialog"][data-part="backdrop"]')).not.toBeNull();
  });

  it('should not render a backdrop by default', async() => {
    await gotoStory(page, 'rendering/without-backdrop');
    await page.waitForSelector('[data-ods="drawer-content"]');

    expect(await page.$('[data-scope="dialog"][data-part="backdrop"]')).toBeNull();
  });
});

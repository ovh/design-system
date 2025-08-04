import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Breadcrumb rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="breadcrumb"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="breadcrumb-item"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="breadcrumb-link"]')).not.toBeNull();
  });
});

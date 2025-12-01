import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('ButtonGroup rendering', () => {
  it('should render the component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-ods="button-group"]')).not.toBeNull();

    const items = await page.$$('[data-ods="button-group-item"]');

    expect(items.length).toBe(3);
  });
});

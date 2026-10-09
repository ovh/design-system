import 'jest-puppeteer';
import { getStatusStyle, gotoStory, gotoStoryAndCollectDeprecations } from '../../../../helpers/test';

describe('ButtonGroup rendering', () => {
  it('should render the component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-ods="button-group"]')).not.toBeNull();

    const items = await page.$$('[data-ods="button-group-item"]');

    expect(items.length).toBe(3);
  });

  it('should ignore an HTML color attribute, without any deprecation warning', async() => {
    const warnings = await gotoStoryAndCollectDeprecations(page, 'rendering/html-color');

    expect(await getStatusStyle(page, 'html-color')).toBe(await getStatusStyle(page, 'default'));
    expect(warnings).toEqual([]);
  });
});

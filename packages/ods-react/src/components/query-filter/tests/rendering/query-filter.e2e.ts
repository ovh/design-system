import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('QueryFilter rendering', () => {
  it('should render the component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-ods="query-filter"]')).not.toBeNull();
  });
});

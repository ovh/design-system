import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('DataTable rendering', () => {
  it('should render the component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-ods="data-table"]')).not.toBeNull();
  });
});

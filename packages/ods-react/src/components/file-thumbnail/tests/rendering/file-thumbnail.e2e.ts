import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('FileThumbnail rendering', () => {
  it('should render the component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-ods="file-thumbnail"]')).not.toBeNull();
  });
});

import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('FileUpload rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="file-upload"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="file-upload-item"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="file-upload-list"]')).not.toBeNull();
  });
});

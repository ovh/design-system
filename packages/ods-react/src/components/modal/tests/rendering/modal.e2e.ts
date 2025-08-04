import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Modal rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="modal-body"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="modal-content"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="modal-trigger"]')).not.toBeNull();
  });
});

import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Editable rendering', () => {
  it('should render the component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-ods="editable"]')).not.toBeNull();
  });
});

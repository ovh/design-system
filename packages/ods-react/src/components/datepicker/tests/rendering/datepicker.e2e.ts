import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Datepicker rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="datepicker"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="datepicker-content"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="datepicker-control"]')).not.toBeNull();
  });
});

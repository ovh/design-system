import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Timepicker rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="timepicker"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="timepicker-control"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="timepicker-timezone-list"]')).not.toBeNull();
  });
});

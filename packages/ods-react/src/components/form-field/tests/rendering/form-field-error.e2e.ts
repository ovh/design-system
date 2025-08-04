import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('FormFieldError rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="form-field"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="form-field-error"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="form-field-helper"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="form-field-label"]')).not.toBeNull();
  });
});

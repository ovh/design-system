import type { Page } from 'puppeteer';
import { goToComponentPage, setupBrowser } from '../setup';

describe('ods-form-field vue', () => {
  const setup = setupBrowser();
  let page: Page;

  beforeAll(async() => {
    page = setup().page;
  });

  beforeEach(async() => {
    await goToComponentPage(page, 'ods-form-field');
  });

  it('renders the component correctly', async() => {
    const elem = await page.$('ods-form-field');
    const boundingBox = await elem?.boundingBox();

    expect(boundingBox?.height).toBeGreaterThan(0);
    expect(boundingBox?.width).toBeGreaterThan(0);
  });

  it('properly renders the label slot', async() => {
    const elem = await page.$('ods-form-field');
    const label = await elem?.evaluate((el) => el.querySelector('[slot="label"]')?.textContent);
    expect(label).toBe('Description');
  });

  it('properly renders the visual-hint slot', async() => {
    const elem = await page.$('ods-form-field');
    const visualHint = await elem?.evaluate((el) => el.querySelector('ods-text[slot="visual-hint"]')?.textContent);
    expect(visualHint).toBe('02/11/1999');
  });

  it('properly renders the default slot', async() => {
    const elem = await page.$('ods-form-field > ods-input');
    const boundingBox = await elem?.boundingBox();

    expect(boundingBox?.height).toBeGreaterThan(0);
    expect(boundingBox?.width).toBeGreaterThan(0);
  });

  it('properly renders the helper slot', async() => {
    const elem = await page.$('ods-form-field');
    const helper = await elem?.evaluate((el) => el.querySelector('ods-text[slot="helper"]')?.textContent);
    expect(helper).toBe('A little helper text');
  });
});

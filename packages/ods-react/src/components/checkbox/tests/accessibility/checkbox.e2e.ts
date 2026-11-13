import 'jest-puppeteer';
import { type Page } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';

async function getDanglingLabels(page: Page): Promise<string[]> {
  return page.$$eval('label[for]', (labels) => labels
    .filter((label) => !document.getElementById((label as HTMLLabelElement).htmlFor))
    .map((label) => label.textContent ?? ''));
}

async function getDuplicateIds(page: Page): Promise<string[]> {
  return page.$$eval('[id]', (els) => els
    .map((el) => el.id)
    .filter((id, idx, ids) => ids.indexOf(id) !== idx));
}

describe('Checkbox accessibility', () => {
  describe('group in a form field', () => {
    beforeEach(async() => {
      await gotoStory(page, 'accessibility/group-in-form-field');
      await page.waitForSelector('[data-testid="group"]');
    });

    it('should name the group after the form field label', async() => {
      const name = await page.$eval('[data-testid="group"]', (el) => document.getElementById(el.getAttribute('aria-labelledby') ?? '')?.textContent);

      expect(name).toBe('Notifications');
    });

    it('should render no anonymous group around it', async() => {
      expect(await page.$eval('[data-testid="form-field"]', (el) => el.getAttribute('role'))).toBeNull();
    });

    it('should give each checkbox its own id and label', async() => {
      expect(await getDuplicateIds(page)).toEqual([]);
      expect(await getDanglingLabels(page)).toEqual([]);
      expect(await page.$$eval('input[type="checkbox"]', (inputs) => inputs.map((input) => document.getElementById(input.getAttribute('aria-labelledby') ?? '')?.textContent))).toEqual(['Mail', 'SMS']);
    });
  });

  it('should keep the id of each form field wrapped in a group', async() => {
    await gotoStory(page, 'accessibility/form-fields-in-group');
    await page.waitForSelector('[data-ods="checkbox-group"]');

    expect(await getDuplicateIds(page)).toEqual([]);
    expect(await page.$eval('[data-ods="checkbox-group"]', (el) => el.getAttribute('aria-labelledby'))).toBeNull();
  });

  it('should point the form field label to the checkbox input', async() => {
    await gotoStory(page, 'accessibility/single-in-form-field');
    await page.waitForSelector('[data-ods="checkbox"]');

    expect(await getDanglingLabels(page)).toEqual([]);
    expect(await page.$eval('label[data-ods="form-field-label"]', (label) => (label as HTMLLabelElement).control?.getAttribute('type'))).toBe('checkbox');
  });
});

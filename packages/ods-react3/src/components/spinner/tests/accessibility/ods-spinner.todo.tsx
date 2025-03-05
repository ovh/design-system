import { type Page } from 'puppeteer';
import { OdsSpinner } from '../../src';

describe('OdsSpinner accessibility', () => {
  // @ts-ignore
  e2e('should render the component with the right role',
    () => (
      <OdsSpinner />
    ),
    async(page: Page) => {
      const spinnerRole = await page.$eval('.ods-spinner', (el: Element) => el.getAttribute('role'));

      expect(spinnerRole).toBe('progressbar');
    }
  );
});

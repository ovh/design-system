import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Breadcrumb accessibility', () => {
  describe('collapsed', () => {
    beforeEach(async() => {
      await gotoStory(page, 'accessibility/collapsed');
      await page.waitForSelector('[data-testid="collapsed"]');
    });

    it('should set aria-expanded on the ellipsis button, not on the navigation', async() => {
      const nav = await page.$eval('[data-testid="collapsed"]', (el) => ({
        expanded: el.getAttribute('aria-expanded'),
        id: el.id,
      }));
      const button = await page.$eval('[data-testid="collapsed"] button', (el) => ({
        controls: el.getAttribute('aria-controls'),
        expanded: el.getAttribute('aria-expanded'),
      }));

      expect(nav.expanded).toBeNull();
      expect(button).toEqual({ controls: nav.id, expanded: 'false' });
    });

    it('should keep no aria-expanded once expanded', async() => {
      await page.click('[data-testid="collapsed"] button');
      await page.waitForFunction(() => !document.querySelector('[data-testid="collapsed"] button'));

      expect(await page.$('[data-testid="collapsed"] [aria-expanded]')).toBeNull();
      expect(await page.$eval('[data-testid="collapsed"]', (el) => el.getAttribute('aria-expanded'))).toBeNull();
    });
  });

  describe('navigation name', () => {
    beforeEach(async() => {
      await gotoStory(page, 'accessibility/names');
      await page.waitForSelector('[data-testid="default"]');
    });

    it('should name the navigation in the breadcrumb locale by default', async() => {
      expect(await page.$eval('[data-testid="default"]', (el) => el.getAttribute('aria-label'))).toBe('Fil d\'Ariane');
    });

    it('should keep the aria-label of the integrator', async() => {
      expect(await page.$eval('[data-testid="aria-label"]', (el) => el.getAttribute('aria-label'))).toBe('Custom');
    });

    it('should leave the name to the aria-labelledby of the integrator', async() => {
      expect(await page.$eval('[data-testid="aria-labelledby"]', (el) => ({
        label: el.getAttribute('aria-label'),
        labelledBy: el.getAttribute('aria-labelledby'),
      }))).toEqual({ label: null, labelledBy: 'breadcrumb-title' });
    });
  });
});

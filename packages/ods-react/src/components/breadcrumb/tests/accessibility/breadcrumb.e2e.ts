import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Breadcrumb accessibility', () => {
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

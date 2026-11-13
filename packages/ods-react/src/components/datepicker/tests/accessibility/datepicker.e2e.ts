import 'jest-puppeteer';
import { type Page } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';

async function getVisibleLabel(page: Page, part: string): Promise<string | null> {
  return page.$$eval(`[data-part="${part}"]`, (els) => els.find((el) => !el.closest('[hidden]'))?.getAttribute('aria-label') ?? null);
}

async function getVisibleGrid(page: Page): Promise<{ name: string | null | undefined, roleDescription: string | null }> {
  return page.$$eval('[role="grid"]', (grids) => {
    const grid = grids.find((el) => !el.closest('[hidden]'))!;
    return {
      name: document.getElementById(grid.getAttribute('aria-labelledby') ?? '')?.textContent,
      roleDescription: grid.getAttribute('aria-roledescription'),
    };
  });
}

describe('Datepicker accessibility', () => {
  describe('locale', () => {
    beforeEach(async() => {
      await gotoStory(page, 'accessibility/french');
      await page.waitForSelector('[role="grid"]');
    });

    it('should translate the calendar and its controls', async() => {
      expect(await page.$eval('[data-part="content"]', (el) => [el.getAttribute('aria-label'), el.getAttribute('aria-roledescription')])).toEqual(['Calendrier', 'Calendrier']);
      expect(await getVisibleLabel(page, 'prev-trigger')).toBe('Mois précédent');
      expect(await getVisibleLabel(page, 'view-trigger')).toBe('Choisir un mois');
      expect(await getVisibleLabel(page, 'next-trigger')).toBe('Mois suivant');
      expect(await getVisibleLabel(page, 'trigger')).toBe('Fermer le calendrier');
    });

    it('should name the day grid after the displayed month', async() => {
      expect(await getVisibleGrid(page)).toEqual({ name: 'septembre 2026', roleDescription: 'Calendrier du mois' });
    });

    it('should name a day by its date, and say when it is not available', async() => {
      const labels = await page.$$eval('[data-part="table-cell-trigger"]', (els) => els
        .filter((el) => ['15', '16'].includes(el.textContent ?? '') && !el.closest('[hidden]'))
        .map((el) => el.getAttribute('aria-label')));

      expect(labels).toEqual(['mardi 15 septembre 2026', 'mercredi 16 septembre 2026, Non disponible']);
    });

    it('should translate the month and year views', async() => {
      await page.click('[data-part="view"]:not([hidden]) [data-part="view-trigger"]');
      await page.waitForFunction(() => document.querySelector('[data-part="view"]:not([hidden]) [role="grid"]')?.getAttribute('aria-roledescription') === 'Mois');

      expect(await getVisibleGrid(page)).toEqual({ name: '2026', roleDescription: 'Mois' });
      expect(await getVisibleLabel(page, 'prev-trigger')).toBe('Année précédente');

      await page.click('[data-part="view"]:not([hidden]) [data-part="view-trigger"]');
      await page.waitForFunction(() => document.querySelector('[data-part="view"]:not([hidden]) [role="grid"]')?.getAttribute('aria-roledescription') === 'Années');

      expect(await getVisibleGrid(page)).toEqual({ name: '2020 - 2029', roleDescription: 'Années' });
      expect(await getVisibleLabel(page, 'next-trigger')).toBe('Décennie suivante');
    });
  });

  it('should apply the i18n override', async() => {
    await gotoStory(page, 'accessibility/overridden-label');
    await page.waitForSelector('[role="grid"]');

    expect(await getVisibleLabel(page, 'next-trigger')).toBe('Go to next month');
    expect(await getVisibleLabel(page, 'prev-trigger')).toBe('Mois précédent');
  });
});

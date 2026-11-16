import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Cart accessibility', () => {
  it('should hold the total label and price in an atomic status region, and update it on removal', async() => {
    await gotoStory(page, 'accessibility/announced-total');
    await page.waitForSelector('[data-ods="cart-product-group-item"]');

    const readStatus = (): Promise<{ atomic: string | null, text: string | null }[]> => page.$$eval('[role="status"]', (regions) => regions.map((region) => ({
      atomic: region.getAttribute('aria-atomic'),
      text: region.textContent,
    })));

    expect(await readStatus()).toEqual([{ atomic: 'true', text: 'Total 12 €' }]);

    const remove = await page.$('[data-ods="cart-product-group-item"] button');
    await remove?.click();
    await page.waitForFunction(() => !document.querySelector('[data-ods="cart-product-group-item"]'));

    expect(await readStatus()).toEqual([{ atomic: 'true', text: 'Total 10 €' }]);
  });

  it('should name each remove button after its product, in the cart locale', async() => {
    await gotoStory(page, 'accessibility/remove-buttons');
    await page.waitForSelector('[data-ods="cart-product-group-item"]');

    const names = await page.$$eval('button[aria-labelledby]', (buttons) => buttons.map((button) => {
      return (button.getAttribute('aria-labelledby') ?? '')
        .split(' ')
        .map((id) => {
          const el = document.getElementById(id);
          return el === button ? button.getAttribute('aria-label') : el?.textContent;
        })
        .join(' ');
    }));

    expect(names).toEqual([
      'Supprimer VPS Starter',
      'Supprimer Backup option',
      'Supprimer Extra IP',
    ]);
  });
});

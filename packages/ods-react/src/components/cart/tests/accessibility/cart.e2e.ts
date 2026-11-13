import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Cart accessibility', () => {
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

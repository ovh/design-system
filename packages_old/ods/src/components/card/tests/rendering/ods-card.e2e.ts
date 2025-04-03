import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-card rendering', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-card');
  }

  it('should render the web component', async() => {
    await setup('<ods-card></ods-card>');

    expect(el.shadowRoot).not.toBeNull();
  });

  describe('color', () => {
    it('should render with correct color primary', async() => {
      await setup(`
        <ods-card color="primary">
        </ods-card>
      `);

      const hasClassPrimary = await page.evaluate(() => {
        const card = document.querySelector('ods-card');
        return card?.classList.contains('ods-card--primary');
      });

      expect(hasClassPrimary).toBe(true);
    });

    it('should render with correct color neutral', async() => {
      await setup(`
        <ods-card color="neutral">
        </ods-card>
      `);

      const hasClassNeutral = await page.evaluate(() => {
        const card = document.querySelector('ods-card');
        return card?.classList.contains('ods-card--neutral');
      });

      expect(hasClassNeutral).toBe(true);
    });
  });
});

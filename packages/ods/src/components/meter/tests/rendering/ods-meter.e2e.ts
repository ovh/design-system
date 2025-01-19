import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-meter rendering in 100px container', () => {
  let page: E2EPage;
  let trackPart: E2EElement;
  let fillPart: E2EElement;

  // Fonction setup ajustée pour définir la valeur directement dans le HTML
  async function setup(value: number = 0, additionalStyles?: string): Promise<void> {
    page = await newE2EPage();

    const styles = `
      --ods-color-success-500: rgb(0, 128, 0);
      --ods-color-warning-500: rgb(255, 165, 0);
      --ods-color-primary-500: rgb(0, 0, 255);
      ${additionalStyles || ''}
    `;

    // Définir le contenu avec un conteneur de 100px de largeur et définir la propriété 'value'
    await page.setContent(`
      <div style="width: 100px;">
        <ods-meter value="${value}" style="${styles}"></ods-meter>
      </div>
    `);

    await page.waitForChanges();

    trackPart = await page.find('ods-meter >>> [part="track"]');
    fillPart = await page.find('ods-meter >>> [part="fill"]');
  }

  describe('inside 100px container', () => {
    it('should render track with width of container (100px)', async () => {
      await setup();

      const trackStyle = await trackPart.getComputedStyle();
      console.log('Computed Track Width:', trackStyle.getPropertyValue('width')); // Debugging

      expect(trackStyle.getPropertyValue('width')).toBe('100px');
    });

    it('should render fill with width proportional to value (50%)', async () => {
      await setup(50);

      const fillStyle = await fillPart.getComputedStyle();
      console.log('Computed Fill Width:', fillStyle.getPropertyValue('width')); // Debugging

      expect(fillStyle.getPropertyValue('width')).toBe('50px'); // Attendu '50px' car 50% de 100px
    });

    it('should render fill with color success when value is 80', async () => {
      await setup(80);

      const fillStyle = await fillPart.getComputedStyle();
      console.log('Computed Fill Color:', fillStyle.getPropertyValue('background-color')); // Debugging

      expect(fillStyle.getPropertyValue('background-color')).toBe('rgb(0, 128, 0)');
    });

    it('should render fill with color warning when value is 20', async () => {
      await setup(20);

      const fillStyle = await fillPart.getComputedStyle();
      console.log('Computed Fill Color:', fillStyle.getPropertyValue('background-color')); // Debugging

      expect(fillStyle.getPropertyValue('background-color')).toBe('rgb(255, 165, 0)');
    });

    it('should render fill with width 100px when value=100', async () => {
      await setup(100);

      const fillStyle = await fillPart.getComputedStyle();
      console.log('Computed Fill Width:', fillStyle.getPropertyValue('width')); // Debugging

      expect(fillStyle.getPropertyValue('width')).toBe('100px'); // Attendu '100px' car 100% de 100px
    });

    it('should render fill with color red when value=100', async () => {
      await setup(100, `
        --ods-color-success-500: red;
      `);

      const fillStyle = await fillPart.getComputedStyle();
      console.log('Computed Fill Color:', fillStyle.getPropertyValue('background-color')); // Debugging

      expect(fillStyle.getPropertyValue('background-color')).toBe('rgb(255, 0, 0)'); // 'red' en RGB
    });
  });

  describe('accessibility tests', () => {
    it('should render with fill width of 100px and red background color', async () => {
      await setup(100, `
        --ods-color-success-500: red;
      `);

      const fillStyle = await fillPart.getComputedStyle();
      console.log('Computed Fill Width:', fillStyle.getPropertyValue('width')); // Debugging
      console.log('Computed Fill Color:', fillStyle.getPropertyValue('background-color')); // Debugging

      expect(fillStyle.getPropertyValue('width')).toBe('100px');
      expect(fillStyle.getPropertyValue('background-color')).toBe('rgb(255, 0, 0)');
    });
  });
});
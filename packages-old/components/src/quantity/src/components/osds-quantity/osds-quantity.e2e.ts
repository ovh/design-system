import type { OdsQuantityAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-quantity', () => {
  let page: E2EPage;
  let el: E2EElement;
  let minusElement: E2EElement;
  let plusElement: E2EElement;
  let inputElement: E2EElement;

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsQuantityAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsQuantityAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
      <osds-quantity ${odsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-quantity>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '4px'));
    el = await page.find('osds-quantity');

    inputElement = await el.find('osds-input:not([slot])');
    minusElement = await el.find('[slot=minus]');
    plusElement = await el.find('[slot=plus]');
  }

  describe('defaults', () => {
    beforeEach(async() => {
      await setup();
    });

    it('should render', async() => {
      expect(el).not.toBeNull();
      expect(el).toHaveClass('hydrated');
    });
  });

  const template = `
<osds-quantity id="quantity-1">
  <osds-button slot="minus" color="primary" size="sm">-  </osds-button>
    <osds-input type="number" color="primary" min="1" max="3" step="1" value="2"></osds-input>
  <osds-button slot="plus" color="primary" size="sm">+</osds-button>
</osds-quantity>`;

  describe('disabled attribute on children', () => {
    beforeEach(async() => {
      await setup({ attributes: {}, html: template });
      el.setAttribute('disabled', 'disabled');
      await page.waitForChanges();
    });
    it('should have disabled attribute on input', async() => {
      expect(inputElement).toHaveAttribute('disabled');
    });

    it('should have disabled attribute on minus control', async() => {
      expect(await minusElement).toHaveAttribute('disabled');
    });

    it('should have disabled attribute on plus control', async() => {
      expect(await plusElement).toHaveAttribute('disabled');
    });
  });

  xdescribe('minus button', () => {
    it('should disabled minus button if value and min are equals to 0', async() => {
      const zeroTemplate = `
          <osds-button slot="minus" color="primary" size="sm">-</osds-button>
          <osds-input type="number" color="primary" min="0" max="3" step="1" value="0"></osds-input>
          <osds-button slot="plus" color="primary" size="sm">+</osds-button>`;

      await setup({ attributes: {}, html: zeroTemplate });
      await page.waitForChanges();

      expect(minusElement).toHaveAttribute('disabled');
    });
  });

  // todo this.component.input.stepDown() from controller is not a function error
  xdescribe('step down', () => {

    it('should step down the input value', async() => {
      await setup({ attributes: {}, html: template });
      await minusElement.click();
      await page.waitForChanges();
      const value = await inputElement.getProperty('value');
      expect(value).toBe(1);
    });

    it('should trigger disabled property on minus control element when stepping down to min value', async() => {
      await setup({ attributes: {}, html: template });
      await minusElement.click();
      await page.waitForChanges();
      expect(await minusElement.getProperty('disabled')).toBeTruthy();
    });
  });

  // todo this.component.input.stepUp() from controller is not a function error
  xdescribe('step up', () => {

    it('should step up the input value', async() => {
      await setup({ attributes: {}, html: template });
      await plusElement.click();
      await page.waitForChanges();
      const value = await inputElement.getProperty('value');
      expect(value).toBe(3);
    });

    it('should trigger disabled property on plus control element when stepping up to max value', async() => {
      await setup({ attributes: {}, html: template });
      await plusElement.click();
      await page.waitForChanges();
      expect(await plusElement.getProperty('disabled')).toBeTruthy();
    });
  });
});

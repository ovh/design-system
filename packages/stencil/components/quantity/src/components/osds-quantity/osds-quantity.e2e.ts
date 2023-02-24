import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsQuantityAttributes,
  odsQuantityDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsQuantityBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-quantity', () => {
  let page: E2EPage;
  let el: E2EElement;
  let slotMinus: E2EElement;
  let minusElement: E2EElement;
  let slotPlus: E2EElement;
  let plusElement: E2EElement;
  let unnamedSlot: E2EElement;
  let inputElement: E2EElement;

  async function setup({
                         attributes = {},
                         html = ``
                       }: { attributes?: Partial<OdsQuantityAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsQuantityAttributes = OdsCreateAttributes(attributes, odsQuantityBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsQuantityAttributes>(minimalAttributes, odsQuantityDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
      <osds-quantity ${OdsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-quantity>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '4px'));
    el = await page.find('osds-quantity');

    unnamedSlot = await page.find('osds-quantity >>> slot:not([name])');
    inputElement = await el.find('osds-input:not([slot])');
    slotMinus = await page.find('osds-quantity >>> slot[name=minus]');
    minusElement = await el.find('[slot=minus]');
    slotPlus = await page.find('osds-quantity >>> slot[name=plus]');
    plusElement = await el.find('[slot=plus]');
  }

  describe('defaults', () => {
    beforeEach(async () => {
      await setup();
    });

    it('should render', async () => {
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
    beforeEach(async () => {
      await setup({ attributes: {}, html: template });
      el.setAttribute('disabled', 'disabled');
      await page.waitForChanges();
    });
    it('should have disabled attribute on input', async () => {
      expect(inputElement).toHaveAttribute('disabled');
    });

    it('should have disabled attribute on minus control', async () => {
      expect(await minusElement).toHaveAttribute('disabled');
    });

    it('should have disabled attribute on plus control', async () => {
      expect(await plusElement).toHaveAttribute('disabled');
    });
  });

  // todo this.component.input.stepDown() from controller is not a function error
  xdescribe('step down', () => {

    it('should step down the input value', async () => {
      await setup({ attributes: {}, html: template });
      await minusElement.click();
      await page.waitForChanges();
      const value = await inputElement.getProperty('value');
      expect(value).toBe(1);
    });

    it('should trigger disabled property on minus control element when stepping down to min value', async () => {
      await setup({ attributes: {}, html: template });
      await minusElement.click();
      await page.waitForChanges();
      expect(await minusElement.getProperty('disabled')).toBeTruthy();
    });
  });

  // todo this.component.input.stepUp() from controller is not a function error
  xdescribe('step up', () => {

    it('should step up the input value', async () => {
      await setup({ attributes: {}, html: template });
      await plusElement.click();
      await page.waitForChanges();
      const value = await inputElement.getProperty('value');
      expect(value).toBe(3);
    });

    it('should trigger disabled property on plus control element when stepping up to max value', async () => {
      await setup({ attributes: {}, html: template });
      await plusElement.click();
      await page.waitForChanges();
      expect(await plusElement.getProperty('disabled')).toBeTruthy();
    });
  });
});

import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsSelectOptionAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-select-option', () => {
  const baseAttribute = { value: '' };
  let page: E2EPage;
  let el: E2EElement;
  let divElement: E2EElement;

  async function setup({ attributes = {}, onPage }: { attributes?: Partial<OdsSelectOptionAttribute>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsSelectOptionAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`
      <osds-select-option ${odsStringAttributes2Str(stringAttributes)}>
      </osds-select-option>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-select-option');
    divElement = await page.find('osds-select-option >>> div');
  }

  describe('defaults', () => {
    beforeEach(async () => {
      await setup();
    });

    it('should render', async () => {
      expect(el).not.toBeNull();
      expect(el).toHaveClass('hydrated');
    });

    it('should have a div element', async () => {
      expect(divElement).not.toBeNull();
    });
  });

/*
  describe('events', () => {
    describe('odsValueChange', () => {
      let odsSelectOptionValueChangeEventDetailBase: OdsSelectOptionValueSelectedEventDetail;

      beforeEach(() => {
        odsSelectOptionValueChangeEventDetailBase = {
          value: '',
        };
      });

      it('should emit when user clicks on component', async () => {
        const value = '42';
        await setup({ attributes: { value }});
        const odsSelectOptionValueSelected = await el.spyOnEvent('odsSelectOptionValueSelected');

        // TODO click on component

        const expected: OdsSelectOptionValueSelectedEventDetail = {
          ...odsSelectOptionValueChangeEventDetailBase,
          value: `${value}`,
        };

        // expect.objectContaining(expected) is not working with stencil
        expect(odsSelectOptionValueSelected).toHaveReceivedEventDetail(expected);
        expect(odsSelectOptionValueSelected).toHaveReceivedEventTimes(1);
      });
    });
  });
*/
});

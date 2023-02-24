import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

import {
  OdsComponentAttributes2StringAttributes,
  OdsSelectOptionAttributes,
  odsSelectOptionDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsStringAttributes2Str } from '@ovhcloud/ods-testing';
import {
  OdsSelectOptionCreateAttributes,
} from '@ovhcloud/ods-testing';

describe('e2e:osds-select-option', () => {
  let page: E2EPage;
  let el: E2EElement;
  let divElement: E2EElement;

  async function setup({
                         attributes = {},
                         onPage,
                       }: { attributes?: Partial<OdsSelectOptionAttributes>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    const minimalAttributes: OdsSelectOptionAttributes = OdsSelectOptionCreateAttributes(attributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsSelectOptionAttributes>(minimalAttributes, odsSelectOptionDefaultAttributes);

    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`
      <osds-select-option ${OdsStringAttributes2Str(stringAttributes)}>
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

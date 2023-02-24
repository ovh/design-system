import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

import {
  OdsComponentAttributes2StringAttributes,
  OdsCheckboxButtonAttributes,
  odsCheckboxButtonDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsCheckboxButtonBaseAttributes,
} from '@ovhcloud/ods-testing';

describe('e2e:osds-checkbox-button', () => {
  let page: E2EPage;
  let el: E2EElement;
  let slotStart: E2EElement;
  let slotEnd: E2EElement;

  async function setup({
                         attributes = {},
                         html = ``,
                         onPage
                       }: { attributes?: Partial<OdsCheckboxButtonAttributes>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    const minimalAttributes: OdsCheckboxButtonAttributes = OdsCreateAttributes(attributes, odsCheckboxButtonBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCheckboxButtonAttributes>(minimalAttributes, odsCheckboxButtonDefaultAttributes);

    page = await newE2EPage();
    onPage && await onPage({ page });

    await page.setContent(`
      <osds-checkbox-button ${OdsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-checkbox-button>
    `);
    el = await page.find('osds-checkbox-button');

    slotStart = await page.find('osds-checkbox-button >>> slot[name=start]');
    slotEnd = await page.find('osds-checkbox-button >>> slot[name=end]');
  }

  it('should render', async () => {
    await setup({ attributes: {}, html: `` });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  describe('slots', () => {
    it('should have slots', async () => {
      await setup({});
      expect(slotStart).not.toBeNull();
      expect(slotEnd).not.toBeNull();
    });

    it('should display slot texts', async () => {
      await setup({ html: `
          <span slot="start">Left input</span>
          <span slot="end">Right input</span>
        ` });

      expect(el.innerText).toContain('Left input');
      expect(el.innerText).toContain('Right input');
    });
  });
});

import type {OdsCheckboxButtonAttribute} from './interfaces/attributes';
import type {E2EElement, E2EPage} from '@stencil/core/testing';
import {newE2EPage} from '@stencil/core/testing';
import {odsComponentAttributes2StringAttributes, odsStringAttributes2Str} from '@ovhcloud/ods-common-testing';
import {DEFAULT_ATTRIBUTE} from './constants/default-attributes';

describe('e2e:osds-checkbox-button', () => {
  let page: E2EPage;
  let el: E2EElement;
  let slotStart: E2EElement;
  let slotEnd: E2EElement;

  async function setup({
    attributes = {},
    html = '',
    onPage,
  }: { attributes?: Partial<OdsCheckboxButtonAttribute>, html?: string, onPage?: ({page}: { page: E2EPage }) => void } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsCheckboxButtonAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    onPage && await onPage({page});

    await page.setContent(`
      <osds-checkbox-button ${odsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-checkbox-button>
    `);
    el = await page.find('osds-checkbox-button');

    slotStart = await page.find('osds-checkbox-button >>> slot[name=start]');
    slotEnd = await page.find('osds-checkbox-button >>> slot[name=end]');
  }

  it('should render', async() => {
    await setup({attributes: {}, html: ''});
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  describe('slots', () => {
    it('should have slots', async() => {
      await setup({});
      expect(slotStart).not.toBeNull();
      expect(slotEnd).not.toBeNull();
    });

    it('should display slot texts', async() => {
      await setup({html: `
          <span slot="start">Left input</span>
          <span slot="end">Right input</span>
        `});

      expect(el.innerText).toContain('Left input');
      expect(el.innerText).toContain('Right input');
    });
  });
});

import type { OdsTableAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_TABLE_SIZES } from './constants/table-size';
import { ODS_TABLE_VARIANTS } from './constants/table-variant';

describe('e2e:osds-table', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, onPage }: { attributes?: Partial<OdsTableAttribute>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsTableAttribute>(attributes, DEFAULT_ATTRIBUTE);
    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`<osds-table ${odsStringAttributes2Str(stringAttributes)}></osds-table>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '4px'));

    el = await page.find('osds-table');
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

  describe('mandatory properties', () => {
    it('should have a size class', async() => {
      await setup({ attributes: { size: 'sm' } });
      expect(Object.values(ODS_TABLE_SIZES)).toContain(await el.getProperty('size'));
    });

    it('should have an alt description', async() => {
      await setup({ attributes: { variant: 'striped' } });
      expect(Object.values(ODS_TABLE_VARIANTS)).toContain(await el.getProperty('variant'));
    });
  });
});

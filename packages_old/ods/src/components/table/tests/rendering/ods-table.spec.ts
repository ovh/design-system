import { type SpecPage, newSpecPage } from '@stencil/core/testing';
import { ODS_TABLE_SIZE, ODS_TABLE_VARIANT, OdsTable } from '../../src';

describe('ods-table rendering', () => {
  const dummyTable = '<table><tr><td>Table</td></tr></table>';
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsTable],
      html,
    });

    root = page.root;
  }

  describe('size', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-table size="${dummyValue}">${dummyTable}</ods-table>`);

      expect(root?.getAttribute('size')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup(`<ods-table>${dummyTable}</ods-table>`);

      expect(root?.getAttribute('size')).toBe(ODS_TABLE_SIZE.md);
    });
  });

  describe('variant', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-table variant="${dummyValue}">${dummyTable}</ods-table>`);

      expect(root?.getAttribute('variant')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup(`<ods-table>${dummyTable}</ods-table>`);

      expect(root?.getAttribute('variant')).toBe(ODS_TABLE_VARIANT.default);
    });
  });
});

import type { OdsDatagridAttribute } from './interfaces/attributes';
import type { E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-datagrid', () => {
  const baseAttribute = { columns: [], height: 100, rows: [] };
  let page: E2EPage;

  function createContent({ attributes = {} }: { attributes?: Partial<OdsDatagridAttribute> } = {}): string {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsDatagridAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);
    return `<osds-datagrid ${odsStringAttributes2Str(stringAttributes)}></osds-datagrid>`;
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
  }

  describe('screenshots', () => {
    it('datagrid screenshot', async() => {
      const content = [
        { columns: undefined, rows: undefined },
        { columns: [], rows: [] },
        { columns: '[]', rows: '[]' },
        {
          columns: JSON.stringify([{ field:'name', title:'Name' }, { field:'firstname', title:'Firstname' }]),
          noResultLabel: 'Aucune données de renseignée',
          rows: '[]',
        },
        {
          columns: JSON.stringify([{ field:'name', title:'Name' }, { field:'firstname', title:'Firstname' }]),
          rows: JSON.stringify([{ firstname:'Simpson', name:'Homer' }]),
        },
        {
          columns: JSON.stringify([{ field:'name', isSortable: true, title:'Name' }, { field:'firstname', title:'Firstname' }]),
          rows: JSON.stringify([{ firstname:'Simpson', name:'Homer' }]),
        },
        {
          columns: JSON.stringify([{ field:'name', title:'Name' }, { field:'firstname', title:'Firstname' }]),
          isSelectable: true,
          rows: JSON.stringify([{ firstname:'Simpson', name:'Homer' }]),
        },
        {
          columns: JSON.stringify([{ field:'name', title:'Name' }, { field:'firstname', title:'Firstname' }]),
          hasHideabledColumns: false,
          rows: JSON.stringify([{ firstname:'Simpson', name:'Homer' }]),
        },
      ].map((attributes) => createContent({ attributes })).join(' ');
      await setup(content);
      await page.waitForChanges();

      await page.setViewport({ height: 600, width: 600 });

      const results = await page.compareScreenshot('datagrid', { fullPage: false, omitBackground: true });

      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });
  });
});

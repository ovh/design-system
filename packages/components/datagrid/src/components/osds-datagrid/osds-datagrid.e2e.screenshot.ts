import type { E2EPage } from '@stencil/core/testing';
import type { OdsDatagridAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-datagrid', () => {
  const baseAttribute = { columns: [], rows: [], height: 100 };
  let page: E2EPage;

  function createContent({ attributes = {} }: { attributes?: Partial<OdsDatagridAttribute> } = {}): string {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsDatagridAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);
    return `<osds-datagrid ${odsStringAttributes2Str(stringAttributes)}></osds-datagrid>`
  }

  async function setup(content: string) {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
  }

  describe('screenshots', () => {
    it('datagrid screenshot', async () => {
      const content = [
        { columns: undefined, rows: undefined },
        { columns: [], rows: [] },
        { columns: '[]', rows: '[]' },
        { 
          columns: JSON.stringify([{ title:'Name', field:'name' }, { title:'Firstname', field:'firstname' }]),
          rows: '[]',
          noResultLabel: 'Aucune données de renseignée',
        },
        { 
          columns: JSON.stringify([{ title:'Name', field:'name' }, { title:'Firstname', field:'firstname' }]),
          rows: JSON.stringify([{ name:'Homer', firstname:'Simpson' }]),
        },
        { 
          columns: JSON.stringify([{ title:'Name', field:'name', isSortable: true }, { title:'Firstname', field:'firstname' }]),
          rows: JSON.stringify([{ name:'Homer', firstname:'Simpson' }]),
        },
        { 
          columns: JSON.stringify([{ title:'Name', field:'name' }, { title:'Firstname', field:'firstname' }]),
          rows: JSON.stringify([{ name:'Homer', firstname:'Simpson' }]),
          isSelectable: true,
        },
      ].map((attributes) => createContent({ attributes })).join(' ');
      await setup(content);
      await page.waitForChanges();

      await page.setViewport({ width: 600, height:600 });
      await page.waitForTimeout(10000);

      const results = await page.compareScreenshot('datagrid', { fullPage: false, omitBackground: true });

      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });
  });
});

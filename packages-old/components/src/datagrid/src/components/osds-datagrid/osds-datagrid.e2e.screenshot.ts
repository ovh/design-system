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
          columns: JSON.stringify([{ field:'firstname', title:'First name' }, { field:'lastname', title:'Last name' }]),
          noResultLabel: 'Aucune données de renseignée',
          rows: '[]',
        },
        {
          columns: JSON.stringify([{ field:'firstname', title:'First name' }, { field:'lastname', title:'Last name' }]),
          rows: JSON.stringify([{ firstname:'Homer', lastname:'Simpson' }]),
        },
        {
          columns: JSON.stringify([{ field:'firstname', isSortable: true, title:'First name' }, { field:'lastname', title:'Last name' }]),
          rows: JSON.stringify([{ firstname:'Homer', lastname:'Simpson' }]),
        },
        {
          columns: JSON.stringify([{ field:'firstname', title:'First name' }, { field:'lastname', title:'Last name' }]),
          isSelectable: true,
          rows: JSON.stringify([{ firstname:'Homer', lastname:'Simpson' }]),
        },
        {
          columns: JSON.stringify([{ field:'firstname', title:'First name' }, { field:'lastname', title:'Last name' }, { field: 'button', formatter: (): string => {
            return `<osds-menu>
        <osds-button slot="menu-title" color="primary" variant="stroked">Menu <osds-icon name='home' size='xs'></osds-icon></osds-button>
        <osds-menu-group>
          <osds-text>Group/Text 1</osds-text>
        </osds-menu-group>
        <osds-menu-item>
          <osds-button color="primary" size='sm' variant='ghost' flex><span slot="start">Action 1</span></osds-button>
        </osds-menu-item>
        <osds-menu-item>
          <osds-button color="primary" size='sm' variant='ghost' flex><span slot="start">Action 2</span></osds-button>
        </osds-menu-item>
        <osds-divider color="text" separator="true"></osds-divider>
      </osds-menu>`;
          }, title: 'Button' }]),
          hasHideabledColumns: false,
          rows: JSON.stringify([{ firstname:'Homer', lastname:'Simpson' }]),
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

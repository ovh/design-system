import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsDatagridAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-datagrid', () => {
  const baseAttribute = { columns: [], rows: [], height: 100 };
  let page: E2EPage;
  let el: E2EElement;
  let table: E2EElement | null;

  async function setup({ attributes }: { attributes: Partial<OdsDatagridAttribute> }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsDatagridAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-datagrid ${odsStringAttributes2Str(stringAttributes)}></osds-datagrid>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    await page.waitForChanges();

    el = await page.find('osds-datagrid');    
    table = await page.find('osds-datagrid >>> .tabulator');
    await page.waitForChanges();
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');

    expect(table).not.toBeNull();
  });

  it('should render 1 rows & 2 columns', async () => {
    await setup({ attributes: {
      columns: JSON.stringify([{ title: 'Name', field: 'name' }, { title: 'Firstname', field: 'firstname' }]),
      rows: JSON.stringify([{ name: 'Homer', firstname: 'Simpson' }]),
    } });
    const columns = await table?.findAll('.tabulator-col');
    expect(columns).toHaveLength(2);
    expect(columns?.[0].innerText).toContain('Name');
    expect(columns?.[1].innerText).toContain('Firstname');
    const rows = await table?.findAll('.tabulator-row');
    expect(rows).toHaveLength(1);
    expect(rows?.[0].innerText).toContain('Homer');
  });

  it('should update rows', async () => {
    await setup({ attributes: {
      columns: JSON.stringify([{ title: 'Name', field: 'name' }, { title: 'Firstname', field: 'firstname' }]),
      rows: JSON.stringify([{ name: 'Homer', firstname: 'Simpson' }]),
    } });
    el.setProperty('rows', JSON.stringify([
      { name: 'Homer', firstname: 'Simpson' },
      { name: 'Marge', firstname: 'Simpson' },
    ]));
    await page.waitForChanges();
    
    const rows = await table?.findAll('.tabulator-row');
    expect(rows).toHaveLength(2);
    expect(rows?.[0].innerText).toContain('Homer');
    expect(rows?.[1].innerText).toContain('Marge');
  });

  it('should have selectable columns', async () => {
    await setup({ attributes: {
      columns: JSON.stringify([{ title: 'Name', field: 'name' }, { title: 'Firstname', field: 'firstname' }]),
      rows: JSON.stringify([{ name: 'Homer', firstname: 'Simpson' }]),
      isSelectable: true,
    } });
    
    const selectableHeader = await table?.find('.tabulator-header input[type="checkbox"]');
    expect(selectableHeader).toBeDefined();
    expect(selectableHeader).not.toBe(null);
  });

  it('should select all rows', async () => {
    await setup({ attributes: {
      columns: JSON.stringify([{ title: 'Name', field: 'name' }, { title: 'Firstname', field: 'firstname' }]),
      rows: JSON.stringify([{ name: 'Homer', firstname: 'Simpson' }, { name: 'Marge', firstname: 'Simpson' }]),
      isSelectable: true,
    } });
    
    const selectableHeader = await table?.find('.tabulator-header input[type="checkbox"]');
    await selectableHeader?.click();

    const selectableRows = await table?.findAll('.tabulator-row input[type="checkbox"]');
    const isAllSelect = await Promise.all(selectableRows?.map(async (input) => {
      const checked: boolean = await input.getProperty('checked');
      return checked;
    }) ?? []);
    expect(isAllSelect.includes(false)).toBe(false);
  });

  it('should select 1 rows with header checkbox indeterminate', async () => {
    await setup({ attributes: {
      columns: JSON.stringify([{ title: 'Name', field: 'name' }, { title: 'Firstname', field: 'firstname' }]),
      rows: JSON.stringify([{ name: 'Homer', firstname: 'Simpson' }, { name: 'Marge', firstname: 'Simpson' }]),
      isSelectable: true,
    } });
    const selectableRow = await table?.find('.tabulator-row input[type="checkbox"]');
    await selectableRow?.click();

    const selectableHeader = await table?.find('.tabulator-header input[type="checkbox"]');
    const selectableRows = await table?.findAll('.tabulator-row input[type="checkbox"]');
    const isAllSelect = await Promise.all(selectableRows?.map(async (input) => {
      const checked: boolean = await input.getProperty('checked');
      return checked;
    }) ?? []);
    expect(isAllSelect.includes(false)).toBe(true);
    expect(await selectableHeader?.getProperty('indeterminate')).toBe(true);
  });

  it('should sortable columns', async () => {
    await setup({ attributes: {
      columns: JSON.stringify([{ title: 'Name', field: 'name', isSortable: true }, { title: 'Firstname', field: 'firstname' }]),
      rows: JSON.stringify([{ name: 'Homer', firstname: 'Simpson' }, { name: 'Marge', firstname: 'Simpson' }]),
    } });
    
    const sortableHeader = await table?.find('.tabulator-header .tabulator-col-sorter');
    await sortableHeader?.click();

    const rows = await table?.findAll('.tabulator-row [tabulator-field="name"]');
    expect(rows?.[0].innerText).toContain('Homer');
    expect(rows?.[1].innerText).toContain('Marge');

    await sortableHeader?.click();
    const newRows = await table?.findAll('.tabulator-row [tabulator-field="name"]');
    expect(newRows?.[0].innerText).toContain('Marge');
    expect(newRows?.[1].innerText).toContain('Homer');
  });

  it('should have a column formatter', async () => {
    await setup({ attributes: {
      columns: [{ title: 'Name', field: 'name' }, { title: 'Firstname', field: 'firstname' }],
      rows: JSON.stringify([{ name: 'Homer', firstname: 'Simpson' }, { name: 'Marge', firstname: 'Simpson' }]),
    } });
    await page.$eval('osds-datagrid', (elm: any) => {
      elm.columns = [{ title: 'Name', field: 'name', formatter: (value) => `<osds-button>Button content</osds-button>${value}` }, { title: 'Firstname', field: 'firstname' }];
    });
    await page.waitForChanges();

    const rows = await table?.findAll('.tabulator-row [tabulator-field="name"]');
    expect(rows?.[0].innerHTML).toContain('osds-button');
    expect(rows?.[0].innerHTML).toContain('Homer');
  });

  it('should have height', async () => {
    const height = 600;
    await setup({ attributes: {
      height,
      columns: [{ title: 'Name', field: 'name' }, { title: 'Firstname', field: 'firstname' }],
      rows: JSON.stringify([{ name: 'Homer', firstname: 'Simpson' }, { name: 'Marge', firstname: 'Simpson' }]),
    } });
    const style = await table?.getComputedStyle()
    expect(style?.height).toBe(height + 'px');
  });

  it('should have row height', async () => {
    const rowHeight = 60;
    await setup({ attributes: {
      rowHeight,
      columns: [{ title: 'Name', field: 'name' }, { title: 'Firstname', field: 'firstname' }],
      rows: JSON.stringify([{ name: 'Homer', firstname: 'Simpson' }, { name: 'Marge', firstname: 'Simpson' }]),
    } });
    const rows = await table?.findAll('.tabulator-row');
    const isAllRowHasHeight = await rows?.every(async (row) => {
      const style = await row.getComputedStyle();
      return style.height === rowHeight + 'px'
    })
    expect(isAllRowHasHeight).toBe(true);

    const columns = await table?.findAll('.tabulator-col');
    const isAllColumnsHasHeight = await columns?.every(async (row) => {
      const style = await row.getComputedStyle();
      return style.height === rowHeight + 'px'
    })
    expect(isAllColumnsHasHeight).toBe(true);
  });
});

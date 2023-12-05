import type { OdsDatagridAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-datagrid', () => {
  const baseAttribute = { columns: [], height: 100, rows: [] };
  let page: E2EPage;
  let el: E2EElement;
  let table: E2EElement | null;

  async function setup({ attributes }: { attributes: Partial<OdsDatagridAttribute> }): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsDatagridAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-datagrid ${odsStringAttributes2Str(stringAttributes)}></osds-datagrid>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-datagrid');
    table = await page.find('osds-datagrid >>> .tabulator');
    await page.waitForChanges();
  }

  it('should render', async() => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');

    expect(table).not.toBeNull();
  });

  it('should render 1 rows & 3 columns', async() => {
    await setup({ attributes: {
      columns: JSON.stringify([{ field: 'firstname', title: 'First name' }, { field: 'lastname', title: 'Last name' }]),
      rows: JSON.stringify([{ lastname: 'Simpson', firstname: 'Homer' }]),
    } });
    const columns = await table?.findAll('.tabulator-col');
    expect(columns).toHaveLength(3);
    expect(columns?.[0].innerText).toContain('First name');
    expect(columns?.[1].innerText).toContain('Last name');
    expect(columns?.[2].innerHTML).toContain('osds-button');
    const rows = await table?.findAll('.tabulator-row');
    expect(rows).toHaveLength(1);
    expect(rows?.[0].innerText).toContain('Homer');
  });

  it('should have selectable columns', async() => {
    await setup({ attributes: {
      columns: JSON.stringify([{ field: 'firstname', title: 'First name' }, { field: 'lastname', title: 'Last name' }]),
      isSelectable: true,
      rows: JSON.stringify([{ lastname: 'Simpson', firstname: 'Homer' }]),
    } });

    const selectableHeader = await table?.find('.tabulator-header input[type="checkbox"]');
    expect(selectableHeader).toBeDefined();
    expect(selectableHeader).not.toBe(null);
  });

  it('should deselect all selected columns after toggle isSelectable', async() => {
    await setup({ attributes: {
      columns: JSON.stringify([{ field: 'firstname', title: 'First name' }, { field: 'lastname', title: 'Last name' }]),
      isSelectable: true,
      rows: JSON.stringify([{ lastname: 'Simpson', firstname: 'Homer' }]),
    } });
    const selectableRow = await table?.find('.tabulator-row input[type="checkbox"]');
    await selectableRow?.click();
    expect(await selectableRow?.getProperty('checked')).toBe(true);

    el.setProperty('isSelectable', false);
    await page.waitForChanges();
    expect(await selectableRow?.getProperty('checked')).toBe(false);
  });

  it('should select all rows', async() => {
    await setup({ attributes: {
      columns: JSON.stringify([{ field: 'firstname', title: 'First name' }, { field: 'lastname', title: 'Last name' }]),
      isSelectable: true,
      rows: JSON.stringify([{ lastname: 'Simpson', firstname: 'Homer' }, { lastname: 'Simpson', firstname: 'Marge' }]),
    } });

    const selectableHeader = await table?.find('.tabulator-header input[type="checkbox"]');
    await selectableHeader?.click();

    const selectableRows = await table?.findAll('.tabulator-row input[type="checkbox"]');
    const isAllSelect = await Promise.all(selectableRows?.map(async(input) => {
      const checked: boolean = await input.getProperty('checked');
      return checked;
    }) ?? []);
    expect(isAllSelect.includes(false)).toBe(false);
  });

  it('should select 1 rows with header checkbox indeterminate', async() => {
    await setup({ attributes: {
      columns: JSON.stringify([{ field: 'firstname', title: 'First name' }, { field: 'lastname', title: 'Last name' }]),
      isSelectable: true,
      rows: JSON.stringify([{ lastname: 'Simpson', firstname: 'Homer' }, { lastname: 'Simpson', firstname: 'Marge' }]),
    } });
    const rowSelectionChangeSpy = await el.spyOnEvent('odsRowSelectionChange');

    const selectableRow = await table?.find('.tabulator-row input[type="checkbox"]');
    await selectableRow?.click();

    const selectableHeader = await table?.find('.tabulator-header input[type="checkbox"]');
    const selectableRows = await table?.findAll('.tabulator-row input[type="checkbox"]');
    const isAllSelect = await Promise.all(selectableRows?.map(async(input) => {
      const checked: boolean = await input.getProperty('checked');
      return checked;
    }) ?? []);
    expect(isAllSelect.includes(false)).toBe(true);
    expect(await selectableHeader?.getProperty('indeterminate')).toBe(true);
    expect(rowSelectionChangeSpy).toHaveReceivedEventDetail({ rows: [{ lastname: 'Simpson', firstname: 'Homer' }] });
  });

  it('should have sortable columns', async() => {
    await setup({ attributes: {
      columns: JSON.stringify([{ field: 'firstname', isSortable: true, title: 'First name' }, { field: 'lastname', title: 'Last name' }]),
      rows: JSON.stringify([{ lastname: 'Simpson', firstname: 'Homer' }, { lastname: 'Simpson', firstname: 'Marge' }]),
    } });
    const sortSpy = await el.spyOnEvent('odsSortChange');

    const sortableHeader = await table?.find('.tabulator-header .tabulator-col-sorter');
    await sortableHeader?.click();

    const rows = await table?.findAll('.tabulator-row [tabulator-field="firstname"]');
    expect(rows?.[0].innerText).toContain('Homer');
    expect(rows?.[1].innerText).toContain('Marge');
    expect(sortSpy).toHaveReceivedEventDetail({ dir: 'asc', field: 'firstname' });

    await sortableHeader?.click();
    const newRows = await table?.findAll('.tabulator-row [tabulator-field="firstname"]');
    expect(newRows?.[0].innerText).toContain('Marge');
    expect(newRows?.[1].innerText).toContain('Homer');
    expect(sortSpy).toHaveReceivedEventDetail({ dir: 'desc', field: 'firstname' });

  });

  it('should have a column formatter', async() => {
    await setup({ attributes: {
      columns: [{ field: 'firstname', title: 'First name' }, { field: 'lastname', title: 'Last name' }],
      rows: JSON.stringify([{ lastname: 'Simpson', firstname: 'Homer' }, { lastname: 'Simpson', firstname: 'Marge' }]),
    } });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await page.$eval('osds-datagrid', (elm: any) => {
      elm.columns = [{ field: 'firstname', formatter: (value): string => `<osds-button>Button content</osds-button>${value}`, title: 'First name' }, { field: 'lastname', title: 'Last name' }];
    });
    await page.waitForChanges();

    const rows = await table?.findAll('.tabulator-row [tabulator-field="firstname"]');
    expect(rows?.[0].innerHTML).toContain('osds-button');
    expect(rows?.[0].innerHTML).toContain('Homer');
  });

  it('should have height', async() => {
    const height = 600;
    await setup({ attributes: {
      columns: [{ field: 'firstname', title: 'First name' }, { field: 'lastname', title: 'Last name' }],
      height,
      rows: JSON.stringify([{ lastname: 'Simpson', firstname: 'Homer' }, { lastname: 'Simpson', firstname: 'Marge' }]),
    } });
    const style = await table?.getComputedStyle();
    expect(style?.height).toBe(height + 'px');
  });

  it('should have row height', async() => {
    const rowHeight = 60;
    await setup({ attributes: {
      columns: [{ field: 'firstname', title: 'First name' }, { field: 'lastname', title: 'Last name' }],
      rowHeight,
      rows: JSON.stringify([{ lastname: 'Simpson', firstname: 'Homer' }, { lastname: 'Simpson', firstname: 'Marge' }]),
    } });
    const rows = await table?.findAll('.tabulator-row');
    const isAllRowHasHeight = await rows?.every(async(row) => {
      const style = await row.getComputedStyle();
      return style.height === rowHeight + 'px';
    });
    expect(isAllRowHasHeight).toBe(true);

    const columns = await table?.findAll('.tabulator-col');
    const isAllColumnsHasHeight = await columns?.every(async(row) => {
      const style = await row.getComputedStyle();
      return style.height === rowHeight + 'px';
    });
    expect(isAllColumnsHasHeight).toBe(true);
  });

  it('should not display hideablecolumns', async() => {
    await setup({ attributes: {
      columns: JSON.stringify([{ field: 'firstname', title: 'First name' }, { field: 'lastname', title: 'Last name' }]),
      hasHideableColumns: false,
      rows: JSON.stringify([{ lastname: 'Simpson', firstname: 'Homer' }]),
    } });
    const columns = await table?.findAll('.tabulator-col');
    expect(columns).toHaveLength(2);
    expect(columns?.[0].innerText).toContain('First name');
    expect(columns?.[1].innerText).toContain('Last name');
  });

  it('should update rows', async() => {
    await setup({ attributes: {
      columns: JSON.stringify([{ field: 'firstname', title: 'First name' }, { field: 'lastname', title: 'Last name' }]),
      hasHideableColumns: false,
      rows: JSON.stringify([{ lastname: 'Simpson', firstname: 'Homer' }]),
    } });
    el.setProperty('rows', JSON.stringify([{ lastname: 'Simpson', firstname: 'Homer' }, { lastname: 'Simpson', firstname: 'Marge' }]));
    await page.waitForChanges();

    const rows = JSON.parse(await el.getProperty('rows'));
    expect(rows).toHaveLength(2);
  });
});

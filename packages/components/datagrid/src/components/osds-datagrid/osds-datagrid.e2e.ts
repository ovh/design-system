import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsDatagridAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-datagrid', () => {
  const baseAttribute = { columns: [], rows: [], };
  let page: E2EPage;
  let el: E2EElement;
  let table: E2EElement | null;

  async function setup({ attributes }: { attributes: Partial<OdsDatagridAttribute> }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsDatagridAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-datagrid ${odsStringAttributes2Str(stringAttributes)}></osds-datagrid>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-datagrid');
    await page.waitForChanges();
    
    table = await page.find('osds-datagrid >>> .tabulator');
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
    expect(rows?.[0].innerText).toContain('HomerSimpson');
  })

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
    expect(rows?.[0].innerText).toContain('HomerSimpson');
    expect(rows?.[1].innerText).toContain('MargeSimpson');
  })
});

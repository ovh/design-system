import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute, OdsUnitTestAttributeType } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OsdsDatagrid } from './osds-datagrid';
import { OdsDatagridAttribute } from './interfaces/attributes';

describe('spec:osds-datagrid', () => {
  const baseAttribute = { columns: [], rows: [] };
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsDatagrid;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsDatagridAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsDatagridAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsDatagrid],
      html: `<osds-datagrid ${odsStringAttributes2Str(stringAttributes)}></osds-datagrid>`,
    });

    root = page.root;
    instance = page.rootInstance;
  }

  it('should render', async () => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('columns', () => {
      odsUnitTestAttribute<OdsDatagridAttribute, 'columns'>({
        name: 'columns',
        defaultValue: DEFAULT_ATTRIBUTE.columns,
        newValue: JSON.stringify([{ title: 'Name', field: 'name' }, { title: 'Firstname', field: 'firstname' }]),
        value: '[]',
        setup: (value) => setup({ attributes: { ['columns']: value } }),
        ...config,
        exclude: [OdsUnitTestAttributeType.REFLECTED, OdsUnitTestAttributeType.MUTABLE],
      });
    });
    
    describe('rows', () => {
      odsUnitTestAttribute<OdsDatagridAttribute, 'rows'>({
        name: 'rows',
        defaultValue: DEFAULT_ATTRIBUTE.rows,
        newValue: JSON.stringify([{ name: 'Simpson', firstname: 'Homer'}]),
        value: '[]',
        setup: (value) => setup({ attributes: { ['rows']: value } }),
        ...config,
        exclude: [OdsUnitTestAttributeType.REFLECTED, OdsUnitTestAttributeType.MUTABLE],
      });
    });

    describe('isSelectable', () => {
      odsUnitTestAttribute<OdsDatagridAttribute, 'isSelectable'>({
        name: 'isSelectable',
        defaultValue: DEFAULT_ATTRIBUTE.isSelectable,
        newValue: true,
        value: false,
        setup: (value) => setup({ attributes: { ['isSelectable']: value } }),
        ...config,
      });
    });

  });
});

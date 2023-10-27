import type { SpecPage } from '@stencil/core/testing';

import { OdsUnitTestAttributeType, odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsDatagridAttribute } from './interfaces/attributes';
import { OsdsDatagrid } from './osds-datagrid';

describe('spec:osds-datagrid', () => {
  const baseAttribute = { columns: [], height: 100, rows: [] };
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsDatagrid;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsDatagridAttribute> } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsDatagridAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsDatagrid],
      html: `<osds-datagrid ${odsStringAttributes2Str(stringAttributes)}></osds-datagrid>`,
    });

    root = page.root;
    instance = page.rootInstance;
  }

  it('should render', async() => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: (): OsdsDatagrid => instance,
      page: (): SpecPage => page,
      root: (): HTMLElement | undefined => page.root,
      wait: (): Promise<unknown> => page.waitForChanges(),
    };

    describe('columns', () => {
      odsUnitTestAttribute<OdsDatagridAttribute, 'columns'>({
        defaultValue: DEFAULT_ATTRIBUTE.columns,
        name: 'columns',
        newValue: JSON.stringify([{ field: 'name', title: 'Name' }, { field: 'firstname', title: 'Firstname' }]),
        setup: (value) => setup({ attributes: { ['columns']: value } }),
        value: '[]',
        ...config,
        exclude: [OdsUnitTestAttributeType.REFLECTED, OdsUnitTestAttributeType.MUTABLE],
      });
    });

    describe('rows', () => {
      odsUnitTestAttribute<OdsDatagridAttribute, 'rows'>({
        defaultValue: DEFAULT_ATTRIBUTE.rows,
        name: 'rows',
        newValue: JSON.stringify([{ firstname: 'Homer', name: 'Simpson' }]),
        setup: (value) => setup({ attributes: { ['rows']: value } }),
        value: '[]',
        ...config,
        exclude: [OdsUnitTestAttributeType.REFLECTED, OdsUnitTestAttributeType.MUTABLE],
      });
    });

    describe('isSelectable', () => {
      odsUnitTestAttribute<OdsDatagridAttribute, 'isSelectable'>({
        defaultValue: DEFAULT_ATTRIBUTE.isSelectable,
        name: 'isSelectable',
        newValue: true,
        setup: (value) => setup({ attributes: { ['isSelectable']: value } }),
        value: false,
        ...config,
      });
    });

    describe('noResultLabel', () => {
      odsUnitTestAttribute<OdsDatagridAttribute, 'noResultLabel'>({
        defaultValue: DEFAULT_ATTRIBUTE.noResultLabel,
        name: 'noResultLabel',
        newValue: 'Aucune données de renseignée',
        setup: (value) => setup({ attributes: { ['noResultLabel']: value } }),
        value: '',
        ...config,
      });
    });

    describe('height', () => {
      odsUnitTestAttribute<OdsDatagridAttribute, 'height'>({
        defaultValue: DEFAULT_ATTRIBUTE.height,
        name: 'height',
        newValue: 600,
        setup: (value) => setup({ attributes: { ['height']: value } }),
        value: 0,
        ...config,
      });
    });

    describe('rowHeight', () => {
      odsUnitTestAttribute<OdsDatagridAttribute, 'rowHeight'>({
        defaultValue: DEFAULT_ATTRIBUTE.rowHeight,
        name: 'rowHeight',
        newValue: 60,
        setup: (value) => setup({ attributes: { ['rowHeight']: value } }),
        value: 0,
        ...config,
      });
    });


  });
});

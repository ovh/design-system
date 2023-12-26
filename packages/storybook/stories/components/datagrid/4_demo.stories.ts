// @ts-ignore
import changelog from '@ovhcloud/ods-components/datagrid/CHANGELOG.md';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-datagrid';
import { html } from 'lit-html';
// @ts-ignore
import page from './2_usage.stories.mdx';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Default story parameters */
const defaultStoryParams = {
  columns: {
    category: 'General',
    defaultValue: [
      { field: 'firstname', title: 'First name' },
      { field: 'lastname', isSortable: true, title: 'Last name' },
      { field: 'gender', title: 'Gender' },
      { field: 'dob', title: 'Date Of Birth', formatter: (value: string) => {
        return `<osds-icon name="calendar"></osds-icon> <osds-text color="text" size="400">${value}</osds-text>`;
      } },
      { field: 'test', title: 'Button', formatter: () => {
        return `<osds-menu style='position: absolute;'>
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
      } },
    ],
  },
  rows: {
    category: 'General',
    defaultValue: [
      { dob: '15/11/1996', firstname: 'Antoine', gender: 'male', lastname: 'Dupont' },
      { dob: '12/03/1999', firstname: 'Janja', gender: 'female', lastname: 'Garnbret' },
    ],
  },
  hasHideableColumns: {
    category: 'General',
    defaultValue: true,
  },
  isSelectable: {
    category: 'General',
    defaultValue: false,
  },
  noResultLabel: {
    category: 'General',
    defaultValue: 'Aucun résultat',
  },
  height: {
    category: 'Size',
    defaultValue: 600,
  },
  rowHeight: {
    category: 'Size',
    defaultValue: 52,
  },
};

const rowsLarge = {
  category: 'General',
  defaultValue: Array.from({ length: 10000 }).fill({ dob: '12/03/1999', firstname: 'Janja', gender: 'female', lastname: 'Garnbret' }),
};

export default {
  title: 'ODS Components/Layout/Datagrid [organism]/Demo',
  id: 'datagrid',
  argTypes: extractArgTypes(defaultStoryParams),
};

const TemplateDefault = (args: Record<string, unknown>) => html`
  <osds-datagrid ...=${getTagAttributes(args)}></osds-datagrid>
`;

export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(defaultStoryParams),
};
// @ts-ignore
Default.argTypes = extractArgTypes(defaultStoryParams);

export const LargeData = TemplateDefault.bind({});
// @ts-ignore
LargeData.args = {
  ...extractStoryParams({ ...defaultStoryParams, rows: rowsLarge }),
};

// @ts-ignore
LargeData.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false },
};

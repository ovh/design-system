import { html } from 'lit-html';
import { defineCustomElements } from '@ovhcloud/ods-components/datagrid/loader';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
// @ts-ignore
import changelog from '@ovhcloud/ods-components/datagrid/CHANGELOG.md';
// @ts-ignore
import page from './datagrid.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const defaultStoryParams = {
  columns: {
    category: 'Général',
    defaultValue: [
      { title: "Name", field: "name" },
      { title: "Firstname", field: "firstname" },
      { title: "Gender", field: "gender" },
      { title: "Date Of Birth", field: "dob" },
    ],
  },
  rows: {
    category: 'Général',
    defaultValue: [
      { name: "Dupont", firstname: "Antoine", gender: "male", dob: "15/11/1996" },
      { name: "Garnbret", firstname: "Janja", gender: "female", dob: "12/03/1999" },
    ],
  },
};

export default {
  title: 'UI Components/Datagrid [organism]/Web Component',
  id: 'datagrid',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page },
  }
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

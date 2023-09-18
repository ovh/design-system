import { html } from 'lit-html';
import { defineCustomElements } from '@ovhcloud/ods-components/datepicker/loader';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
// @ts-ignore
import changelog from '@ovhcloud/ods-components/datepicker/CHANGELOG.md';
// @ts-ignore
import page from './datepicker.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  clearable: {
    category: 'General',
    defaultValue: false,
  },
  disabled: {
    category: 'General',
    defaultValue: false,
  },
  error: {
    category: 'General',
    defaultValue: '',
  },
  format: {
    category: 'General',
    defaultValue: 'dd/mm/yyyy',
  },
  placeholder: {
    category: 'General',
    defaultValue: '',
  },
};

export default {
  title: 'UI Components/Datepicker [organism]/Web Component',
  id: 'datepicker',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page }
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => {
  return html`<osds-datepicker ...=${getTagAttributes(args)}></osds-datepicker>`;
}

export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};

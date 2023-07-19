import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '@ovhcloud/ods-common-core';
import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { defineCustomElements } from '@ovhcloud/ods-component-textarea/loader';
import { DEFAULT_ATTRIBUTE } from '../../src/components/osds-textarea/constants/default-attributes';
// @ts-ignore
import changelog from '../../CHANGELOG.md';
// @ts-ignore
import page from './textarea.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.color,
    options: OdsThemeColorIntentList,
    control: { type: 'select' },
  },
  defaultValue: {
    category: 'General',
    defaultValue: '',
  },
  value: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.value,
  },
  flex: {
    category: 'Misc',
    defaultValue: DEFAULT_ATTRIBUTE.flex,
  },
  contrasted: {
    category: 'Misc',
    defaultValue: DEFAULT_ATTRIBUTE.contrasted
  },
  disabled: {
    category: 'Misc',
    defaultValue: DEFAULT_ATTRIBUTE.disabled,
  },
  name: {
    category: 'Misc',
    defaultValue: 'myTextArea'
  },
  placeholder: {
    category: 'Misc',
    defaultValue: 'placeholder'
  },
  error: {
    category: 'Misc',
    defaultValue: DEFAULT_ATTRIBUTE.error,
  },
  resizable: {
    category: 'Misc',
    defaultValue: DEFAULT_ATTRIBUTE.resizable,
  },
  cols: {
    category: 'Misc',
    defaultValue: DEFAULT_ATTRIBUTE.cols,
    control: { type: 'number' }
  },
  rows: {
    category: 'Misc',
    defaultValue: DEFAULT_ATTRIBUTE.rows,
    control: { type: 'number' }
  },
};

export default {
  title: 'UI Components/TextArea [atom]/Web Component',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page },
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args: any) => html`
  <osds-textarea ...=${getTagAttributes(args)}>
  </osds-textarea>
`;
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};

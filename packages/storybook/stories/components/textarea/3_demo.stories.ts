import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-textarea';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Demo story parameters  */
const storyParams = {
  defaultValue: {
    category: 'General',
    defaultValue: '',
  },
  value: {
    category: 'General',
    defaultValue: '',
  },
  placeholder: {
    category: 'General',
    defaultValue: 'placeholder',
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false,
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  inline: {
    category: 'Misc',
    defaultValue: true,
  },
  error: {
    category: 'Misc',
    defaultValue: false,
  },
  resizable: {
    category: 'Misc',
    defaultValue: true,
  },
  name: {
    category: 'Development',
    defaultValue: 'myTextArea',
  },
  cols: {
    category: 'Development',
    defaultValue: undefined,
    control: { type: 'number' },
  },
  rows: {
    category: 'Development',
    defaultValue: undefined,
    control: { type: 'number' },
  },
};

export default {
  title: 'ODS Components/Form/Textarea [atom]/Demo',
  id: 'textarea',
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDemo = (args: any) => html`
  <osds-textarea ...=${getTagAttributes(args)}>
  </osds-textarea>
`;
export const Demo = TemplateDemo.bind({});
// @ts-ignore
Demo.args = {
  ...extractStoryParams(storyParams),
};

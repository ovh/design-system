import { ODS_THEME_COLOR_INTENT, ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-textarea';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: ODS_THEME_COLOR_INTENT.text,
    options: ODS_THEME_COLOR_INTENTS,
    control: { type: 'select' },
  },
  defaultValue: {
    category: 'General',
    defaultValue: '',
  },
  value: {
    category: 'General',
    defaultValue: '',
  },
  inline: {
    category: 'Misc',
    defaultValue: false,
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false,
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  name: {
    category: 'Misc',
    defaultValue: 'myTextArea',
  },
  placeholder: {
    category: 'Misc',
    defaultValue: 'placeholder',
  },
  error: {
    category: 'Misc',
    defaultValue: false,
  },
  resizable: {
    category: 'Misc',
    defaultValue: true,
  },
  cols: {
    category: 'Misc',
    defaultValue: undefined,
    control: { type: 'number' },
  },
  rows: {
    category: 'Misc',
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
const TemplateDefault = (args: any) => html`
  <osds-textarea ...=${getTagAttributes(args)}>
  </osds-textarea>
`;
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};

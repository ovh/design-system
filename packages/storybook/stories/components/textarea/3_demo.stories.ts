import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-textarea';
import { html } from 'lit-html';
import { CONTROL_CATEGORY, orderControls } from '../../controls';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

const storyParams = orderControls({
  ariaLabel: {
    category: CONTROL_CATEGORY.accessibility,
    defaultValue: '',
  },
  ariaLabelledby: {
    category: CONTROL_CATEGORY.accessibility,
    defaultValue: '',
  },
  cols: {
    category: CONTROL_CATEGORY.general,
    defaultValue: undefined,
    control: { type: 'number' },
  },
  defaultValue: {
    category: CONTROL_CATEGORY.general,
    defaultValue: 'Default value',
  },
  disabled: {
    category: CONTROL_CATEGORY.general,
    defaultValue: false,
  },
  error: {
    category: CONTROL_CATEGORY.general,
    defaultValue: false,
  },
  forbiddenValues: {
    category: CONTROL_CATEGORY.general,
    defaultValue: [],
    control: { type: 'array' },
  },
  inline: {
    category: CONTROL_CATEGORY.general,
    defaultValue: true,
  },
  label: {
    category: CONTROL_CATEGORY.general,
    defaultValue: '',
  },
  name: {
    category: CONTROL_CATEGORY.general,
    defaultValue: 'myTextArea',
  },
  placeholder: {
    category: CONTROL_CATEGORY.general,
    defaultValue: 'placeholder',
  },
  readOnly: {
    category: CONTROL_CATEGORY.general,
    defaultValue: false,
  },
  required: {
    category: CONTROL_CATEGORY.general,
    defaultValue: false,
  },
  resizable: {
    category: CONTROL_CATEGORY.general,
    defaultValue: true,
  },
  rows: {
    category: CONTROL_CATEGORY.general,
    defaultValue: undefined,
    control: { type: 'number' },
  },
  spellcheck: {
    category: CONTROL_CATEGORY.general,
    defaultValue: false,
  },
  tabindex: {
    category: CONTROL_CATEGORY.general,
    defaultValue: undefined,
    control: { type: 'number' },
  },
  textAreaId: {
    category: CONTROL_CATEGORY.general,
    defaultValue: '',
  },
  value: {
    category: CONTROL_CATEGORY.general,
    control: { type: 'text' },
  },
});

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

import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-checkbox';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Default story parameters  */
const storyParams = {
  checkboxContent: {
    category: 'Slot',
    defaultValue: '<osds-tile interactive>My tile as a checkbox element</osds-tile>',
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  checked: {
    category: 'Misc',
    defaultValue: false,
  },
  value: {
    category: 'Development',
    defaultValue: 'my-value',
  },
  name: {
    category: 'Development',
    defaultValue: 'my-name',
  },
};

const toggleStoryParams = {
  checkboxContent: {
    category: 'Slot',
    defaultValue: '<osds-toggle></osds-toggle>',
  },
};

const checkboxButtonStoryParams = {
  checkboxContent: {
    category: 'Slot',
    defaultValue: '<osds-checkbox-button interactive color="primary"><span slot="end"><osds-text color="text" level="body" size="500">Checkbox Button</osds-text></span></osds-checkbox-button>',
  },
};

export default {
  title: 'ODS Components/Form/Checkbox [meta]/Demo',
  id: 'checkbox',
  argTypes: extractArgTypes(storyParams)
};

// A checkbox example using osds-components
const TemplateDefault = (args: any) => html`
  <osds-checkbox ...=${getTagAttributes(args)}>
    ${unsafeHTML(args.checkboxContent)}
  </osds-checkbox>
`;
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};

// A checkbox example using Toggle component
const TemplateToggle = (args: any) => html`
  <osds-checkbox ...=${getTagAttributes(args)}>
    ${unsafeHTML(args.checkboxContent)}
  </osds-checkbox>
`;
export const Toggle = TemplateToggle.bind({});
// @ts-ignore
Toggle.args = {
  ...extractStoryParams({ ...storyParams, ...toggleStoryParams }),
};

// A checkbox example using Checkbox Button component
const TemplateCheckBoxButton = (args: any) => html`
  <osds-checkbox ...=${getTagAttributes(args)}>
    ${unsafeHTML(args.checkboxContent)}
  </osds-checkbox>
`;
export const CheckboxButton = TemplateCheckBoxButton.bind({});
// @ts-ignore
CheckboxButton.args = {
  ...extractStoryParams({ ...storyParams, ...checkboxButtonStoryParams }),
};

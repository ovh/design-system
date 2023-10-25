import changelog from '@ovhcloud/ods-components/checkbox/CHANGELOG.md';
import { defineCustomElements } from '@ovhcloud/ods-components/checkbox/loader';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

import page from './checkbox.web-component.stories.page.mdx';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
// @ts-ignore
// @ts-ignore

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  checked: {
    category: 'Misc',
    defaultValue: false,
  },
  value: {
    category: 'Misc',
    defaultValue: 'my-value',
  },
  name: {
    category: 'Misc',
    defaultValue: 'my-name',
  },
  checkboxContent: {
    category: 'Slot',
    defaultValue: '<osds-tile interactive>My tile as a checkbox element</osds-tile>',
  },
};

export default {
  title: 'Meta Components/Checkbox [meta]/Web Component',
  id: 'checkbox',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page },
  },
  argTypes: extractArgTypes(storyParams),
};

// A checkbox example using osds-components
const TemplateDefault = (args: any) => html`
  <osds-checkbox ...=${getTagAttributes(args)}>
    ${unsafeHTML(args.checkboxContent)}
  </osds-checkbox>
`;
export const WebComponent = TemplateDefault.bind({});
WebComponent.args = {
  ...extractStoryParams(storyParams),
};
const TemplateToggle = (args: any) => html`
  <osds-checkbox ...=${getTagAttributes(args)}>
  <osds-toggle></osds-toggle>
  </osds-checkbox>
`;
export const Toggle = TemplateToggle.bind({});
Toggle.args = {
  ...extractStoryParams(storyParams),
};

export { CheckboxButton } from './checkbox.web-components.stories.checkbox-button';

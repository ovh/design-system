import { extractArgTypes, extractStoryParams, getTagAttributes, } from '../../../core/componentHTMLUtils';

import { XDConfig } from 'storybook-addon-xd-designs/lib/config';
import changelog from '@ovhcloud/ods-stencil/components/checkbox/CHANGELOG.md';
import { config } from 'storybook-addon-xd-designs';
import { defineCustomElements } from '@ovhcloud/ods-stencil/components/checkbox/loader';
import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';
import page from './checkbox.web-component.stories.page.mdx';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  disabled: {
    category: 'Misc',
    defaultValue: false
  },
  checked: {
    category: 'Misc',
    defaultValue: false
  },
  value: {
    category: 'Misc',
    defaultValue: 'my-value'
  },
  name: {
    category: 'Misc',
    defaultValue: 'my-name'
  },
  checkboxContent: {
    category: 'Slot',
    defaultValue: `<osds-tile interactive>My tile as a checkbox element</osds-tile>`
  },
};

export default {
  title: 'Meta Components/Checkbox [meta]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-components-checkbox/modules/index.html'),
      changelog,
    },
    docs: { page },
    design: config({
      artboardUrl: '',
    } as XDConfig),
  },
  argTypes: extractArgTypes(storyParams)
};

// A checkbox example using osds-components
const TemplateDefault = (args: any) => html`
  <osds-checkbox ...=${getTagAttributes(args)}>
    ${unsafeHTML(args.checkboxContent)}
  </osds-checkbox>
`;
export const WebComponent = TemplateDefault.bind({});
WebComponent.args = {
  ...extractStoryParams(storyParams)
};
const TemplateToggle = (args: any) => html`
  <osds-checkbox ...=${getTagAttributes(args)}>
  <osds-toggle></osds-toggle>
  </osds-checkbox>
`
export const Toggle = TemplateToggle.bind({});
Toggle.args = {
  ...extractStoryParams(storyParams)
};

export { CheckboxButton } from './checkbox.web-components.stories.checkbox-button';

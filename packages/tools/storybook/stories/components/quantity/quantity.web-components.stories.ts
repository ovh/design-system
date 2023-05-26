import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

import { XDConfig } from 'storybook-addon-xd-designs/lib/config';
import changelog from '@ovhcloud/ods-stencil-quantity/CHANGELOG.md';
import { config } from 'storybook-addon-xd-designs';
import { defineCustomElements } from '@ovhcloud/ods-stencil-quantity/loader';
import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';
import page from './quantity.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  disabled: {
    category: 'Misc',
    defaultValue: false
  }
};

export default {
  title: 'UI Components/Quantity [molecule]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-components-quantity/modules/index.html'),
      changelog,
    },
    docs: { page },
    design: config({
      artboardUrl: 'https://xd.adobe.com/view/9bb1ccc1-e850-428c-9fd2-d4a60718a440-cee2/screen/974f5530-2bd5-4129-827c-7b2de248dbd5/Desktop',
    } as XDConfig),
  },
  argTypes: extractArgTypes(storyParams)
};

// A quantity example using osds-components
const TemplateDefault = (args: any) => html`
  <osds-quantity ...=${getTagAttributes(args)}>
    <osds-button slot="minus" size="sm" color="primary">
      <osds-icon size="sm" contrasted name="minus"></osds-icon>
    </osds-button>
    <osds-input style="max-width: 40px" type="number" color="primary" min="1" max="10" step="1" value="1"></osds-input>
    <osds-button slot="plus" size="sm" color="primary">
      <osds-icon size="sm" contrasted name="plus"></osds-icon>
    </osds-button>
  </osds-quantity>
`;
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams)
};

// A quantity example using vanilla elements
const TemplateVariant = (args: any) => html`
  <osds-quantity ...=${getTagAttributes(args)}>
    <button slot="minus">-</button>
    <input style="max-width: 40px" type="number" min="1" max="10" step="1" value="1"/>
    <button slot="plus">+</button>
  </osds-quantity>
`;
export const Variant = TemplateVariant.bind({});
Variant.args = {
  ...extractStoryParams(storyParams)
};

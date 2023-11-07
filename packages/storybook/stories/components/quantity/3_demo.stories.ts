import { defineCustomElements } from '@ovhcloud/ods-components/quantity/loader';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
};

export default {
  title: 'ODS Components/Form/Quantity [molecule]/Demo',
  id: 'quantity',
  argTypes: extractArgTypes(storyParams)
};

// A quantity example using osds-components
const TemplateDefault = (args: any) => html`
  <osds-quantity ...=${getTagAttributes(args)}>
    <osds-button slot="minus" size="sm" color="primary">
      <osds-icon size="sm" contrasted name="minus"></osds-icon>
    </osds-button>
    <osds-input type="number" color="primary" min="1" max="10" step="1" value="1"></osds-input>
    <osds-button slot="plus" size="sm" color="primary">
      <osds-icon size="sm" contrasted name="plus"></osds-icon>
    </osds-button>
  </osds-quantity>
`;
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};

// A quantity example using vanilla elements
const TemplateVariant = (args: any) => html`
  <osds-quantity ...=${getTagAttributes(args)}>
    <button slot="minus">-</button>
    <input style="width: 45px" type="number" min="1" max="10" step="1" value="1"/>
    <button slot="plus">+</button>
  </osds-quantity>
`;
export const Variant = TemplateVariant.bind({});
// @ts-ignore
Variant.args = {
  ...extractStoryParams(storyParams),
};

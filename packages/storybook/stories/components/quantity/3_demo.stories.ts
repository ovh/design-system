import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-quantity';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Demo story parameters  */
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

const TemplateDemo = (args: any) => html`
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
export const Demo = TemplateDemo.bind({});
// @ts-ignore
Demo.args = {
  ...extractStoryParams(storyParams),
};

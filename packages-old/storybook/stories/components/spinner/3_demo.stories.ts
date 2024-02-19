import { ODS_SPINNER_SIZE, ODS_SPINNER_SIZES } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-spinner';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Demo story parameters  */
const storyParams = {
  size: {
    category: 'General',
    defaultValue: ODS_SPINNER_SIZE.md,
    options: ODS_SPINNER_SIZES,
    control: { type: 'select' },
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false,
  },
  inline: {
    category: 'Misc',
    defaultValue: true,
  },
};

export default {
  title: 'ODS Components/User feedback/Spinner [atom]/Demo',
  id: 'spinner',
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDemo = (args:any) => {
  return html`<osds-spinner ...=${getTagAttributes(args)}></osds-spinner>`;
};

export const Demo = TemplateDemo.bind({});
// @ts-ignore
Demo.args = {
  ...extractStoryParams(storyParams),
};

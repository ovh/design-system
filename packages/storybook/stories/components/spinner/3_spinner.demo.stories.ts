import { ODS_SPINNER_SIZES } from '@ovhcloud/ods-components/spinner';
import { defineCustomElements } from '@ovhcloud/ods-components/spinner/loader';
import { DEFAULT_ATTRIBUTE } from '@ovhcloud/ods-components/spinner/src/components/osds-spinner/constants/default-attributes';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  size: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.size,
    options: ODS_SPINNER_SIZES,
    control: { type: 'select' },
  },
  contrasted: {
    category: 'Misc',
    defaultValue: DEFAULT_ATTRIBUTE.contrasted,
  },
  inline: {
    category: 'Misc',
    defaultValue: DEFAULT_ATTRIBUTE.inline,
  },
};

export default {
  title: 'ODS Components/User feedback/Spinner [atom]/Demo',
  id: 'spinner',
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => {
  return html`<osds-spinner ...=${getTagAttributes(args)}></osds-spinner>`;
};

export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};

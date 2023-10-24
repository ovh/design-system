import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import page from './spinner.web-component.stories.page.mdx';
import { html } from 'lit-html';
import { ODS_SPINNER_SIZES } from '@ovhcloud/ods-components/spinner';
import { defineCustomElements } from '@ovhcloud/ods-components/spinner/loader';
import { DEFAULT_ATTRIBUTE } from '@ovhcloud/ods-components/spinner/src/components/osds-spinner/constants/default-attributes';
// @ts-ignore
import changelog from '@ovhcloud/ods-components/spinner/CHANGELOG.md';
// @ts-ignore

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
  title: 'UI Components/Spinner [atom]/Web Component',
  id: 'spinner',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page },
  },
  argTypes: extractArgTypes(storyParams),
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

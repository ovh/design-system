import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import page from './divider.web-component.stories.page.mdx';
import { html } from 'lit-html';
import { ODS_THEME_COLOR_INTENT, ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { defineCustomElements } from '@ovhcloud/ods-components/divider/loader';
import { OlesIpsumGeneration, olesIpsum } from '@ovhcloud/ods-common-core';
import { ODS_DIVIDER_SIZE, ODS_DIVIDER_SIZES } from '@ovhcloud/ods-components/divider';
// @ts-ignore
import changelog from '@ovhcloud/ods-components/divider/CHANGELOG.md';
// @ts-ignore

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: ODS_THEME_COLOR_INTENT.default,
    options: ODS_THEME_COLOR_INTENTS,
    control: { type: 'select' },
  },
  size: {
    category: 'General',
    defaultValue: ODS_DIVIDER_SIZE.six,
    options: ODS_DIVIDER_SIZES,
    control: { type: 'select' },
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false,
  },
  separator: {
    category: 'Misc',
    defaultValue: false,
  },
};

export default {
  title: 'UI Components/Divider [quark]/Web Component',
  id: 'divider',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page },
  },
  argTypes: extractArgTypes(storyParams),
};

const example = olesIpsum(OlesIpsumGeneration.sentences, 3);

// A divider example
const TemplateDefault = (args: any) => html`
  <div style='color: #ccc'>${example}</div>
  <osds-divider ...=${getTagAttributes(args)}>
  </osds-divider>
  <div style='color: #ccc'>${example}</div>
`;
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};

import { html } from 'lit-html';
import { OdsThemeColorIntent, OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { defineCustomElements } from '@ovhcloud/ods-component-divider/loader';
import { OlesIpsumGeneration } from '@ovhcloud/ods-core/src';
import { ODS_DIVIDER_SIZE, ODS_DIVIDER_SIZES } from '@ovhcloud/ods-component-divider';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { olesIpsum } from '@ovhcloud/ods-core';
// @ts-ignore
import changelog from '@ovhcloud/ods-component-divider/CHANGELOG.md';
// @ts-ignore
import page from './divider.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: OdsThemeColorIntent.default,
    options: OdsThemeColorIntentList,
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
    defaultValue: false
  },
  separator: {
    category: 'Misc',
    defaultValue: false
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
  argTypes: extractArgTypes(storyParams)
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
  ...extractStoryParams(storyParams)
};

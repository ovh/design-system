import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';


import { defineCustomElements } from '@ovhcloud/ods-stencil-divider/loader';
import changelog from '@ovhcloud/ods-stencil-divider/CHANGELOG.md';
import page from './divider.web-component.stories.page.mdx';
import { OdsThemeColorIntent, OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OdsDividerSize, OdsDividerSizeList, OlesIpsumGeneration } from '@ovhcloud/ods-core/src';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { olesIpsum } from '@ovhcloud/ods-core';

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
    defaultValue: OdsDividerSize.six,
    options: OdsDividerSizeList,
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
  parameters: {
    notes: {
      API: iframe('/stencil-divider/modules/index.html'),
      changelog,
    },
    docs: { page },
  },
  argTypes: extractArgTypes(storyParams)
};

const example = olesIpsum(OlesIpsumGeneration.sentences, 3);

// A divider example
const TemplateDefault = (args) => html`
  <div style='color: #ccc'>${example}</div>
  <osds-divider ...=${getTagAttributes(args)}>
  </osds-divider>
  <div style='color: #ccc'>${example}</div>
`;
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams)
};

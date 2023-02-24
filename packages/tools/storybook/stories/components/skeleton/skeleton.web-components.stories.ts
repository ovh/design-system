import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';


import { defineCustomElements } from '@ovhcloud/ods-stencil-skeleton/loader';
import changelog from '@ovhcloud/ods-stencil-skeleton/CHANGELOG.md';
import page from './skeleton.web-component.stories.page.mdx';
import { OdsSkeletonSize, OdsSkeletonSizeList, odsSkeletonDefaultAttributes } from '@ovhcloud/ods-core/src';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  flex: {
    category: 'Misc',
    defaultValue: odsSkeletonDefaultAttributes.flex,
  },
  randomized: {
    category: 'Misc',
    defaultValue: odsSkeletonDefaultAttributes.randomized,
  },
  size: {
    category: 'General',
    defaultValue: odsSkeletonDefaultAttributes.size,
    options: OdsSkeletonSizeList,
    control: { type: 'select' },
  },
};

export default {
  title: 'UI Components/Skeleton [atom]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-skeleton/modules/index.html'),
      changelog,
    },
    docs: { page },
  },
  argTypes: extractArgTypes(storyParams)
};


// A skeleton example
const TemplateDefault = (args) => html`
  <osds-skeleton ...=${getTagAttributes(args)}>
  </osds-skeleton>
`;
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams)
};

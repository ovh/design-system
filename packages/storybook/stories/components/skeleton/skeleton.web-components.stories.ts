import { html } from 'lit-html';
import { ODS_SKELETON_SIZES } from '@ovhcloud/ods-components/skeleton';
import { defineCustomElements } from '@ovhcloud/ods-components/skeleton/loader';
import { getTagAttributes, extractArgTypes, extractStoryParams } from '../../../core/componentHTMLUtils';
import { DEFAULT_ATTRIBUTE } from '@ovhcloud/ods-components/skeleton/src/components/osds-skeleton/constants/default-attributes';
// @ts-ignore
import changelog from '@ovhcloud/ods-components/skeleton/CHANGELOG.md';
// @ts-ignore
import page from './skeleton.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  inline: {
    category: 'Misc',
    defaultValue: DEFAULT_ATTRIBUTE.inline,
  },
  randomized: {
    category: 'Misc',
    defaultValue: DEFAULT_ATTRIBUTE.randomized,
  },
  size: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.size,
    options: ODS_SKELETON_SIZES,
    control: { type: 'select' },
  },
};

export default {
  title: 'UI Components/Skeleton [atom]/Web Component',
  id: 'skeleton',
  parameters: {
    notes: {
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

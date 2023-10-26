import { ODS_SKELETON_SIZES } from '@ovhcloud/ods-components/skeleton';
import { defineCustomElements } from '@ovhcloud/ods-components/skeleton/loader';
import { DEFAULT_ATTRIBUTE } from '@ovhcloud/ods-components/skeleton/src/components/osds-skeleton/constants/default-attributes';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

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
  title: 'ODS Components/User feedback/Skeleton [atom]/Demo',
  id: 'skeleton',
  argTypes: extractArgTypes(storyParams)
};


// A skeleton example
const TemplateDefault = (args) => html`
  <osds-skeleton ...=${getTagAttributes(args)}>
  </osds-skeleton>
`;
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};

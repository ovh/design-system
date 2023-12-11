import { ODS_SKELETON_SIZE, ODS_SKELETON_SIZES } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-skeleton';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Default story parameters  */
const storyParams = {
  inline: {
    category: 'Misc',
    defaultValue: false,
  },
  randomized: {
    category: 'Misc',
    defaultValue: false,
  },
  size: {
    category: 'General',
    defaultValue: ODS_SKELETON_SIZE.md,
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

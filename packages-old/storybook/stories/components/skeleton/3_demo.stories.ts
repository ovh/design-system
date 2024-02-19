import { ODS_SKELETON_SIZE, ODS_SKELETON_SIZES } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-skeleton';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Demo story parameters  */
const storyParams = {
  size: {
    category: 'General',
    defaultValue: ODS_SKELETON_SIZE.md,
    options: ODS_SKELETON_SIZES,
    control: { type: 'select' },
  },
  inline: {
    category: 'Misc',
    defaultValue: true,
  },
  randomized: {
    category: 'Misc',
    defaultValue: false,
  },
};

export default {
  title: 'ODS Components/User feedback/Skeleton [atom]/Demo',
  id: 'skeleton',
  argTypes: extractArgTypes(storyParams)
};


// A skeleton example
const TemplateDefault = (args: any) => html`
  <osds-skeleton ...=${getTagAttributes(args)}>
  </osds-skeleton>
`;
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};

// Skeleton paragraph example
const TemplateParagraph = () => html`
  <osds-skeleton inline size="xs"></osds-skeleton>
  <osds-skeleton inline size="md"></osds-skeleton>
  <osds-skeleton inline size="sm"></osds-skeleton>
  <osds-skeleton inline size="lg"></osds-skeleton>
  <osds-skeleton inline size="xs"></osds-skeleton>
  <osds-skeleton inline size="md"></osds-skeleton>
  <osds-skeleton inline size="sm"></osds-skeleton>
  <osds-skeleton inline size="lg"></osds-skeleton>
  <osds-skeleton inline size="xs"></osds-skeleton>
  <osds-skeleton inline size="md"></osds-skeleton>
  <osds-skeleton inline size="sm"></osds-skeleton>
  <osds-skeleton inline size="lg"></osds-skeleton>
  <osds-skeleton inline size="xs"></osds-skeleton>
  <osds-skeleton inline size="md"></osds-skeleton>
  <osds-skeleton inline size="sm"></osds-skeleton>
  <osds-skeleton inline size="lg"></osds-skeleton>
  <osds-skeleton inline size="sm"></osds-skeleton>
  <osds-skeleton inline size="lg"></osds-skeleton>
  <osds-skeleton inline size="xs"></osds-skeleton>
  <osds-skeleton inline size="md"></osds-skeleton>
  <osds-skeleton inline size="sm"></osds-skeleton>
  <osds-skeleton inline size="lg"></osds-skeleton>
  <osds-skeleton inline size="xs"></osds-skeleton>
  <osds-skeleton inline size="md"></osds-skeleton>
  <osds-skeleton inline size="sm"></osds-skeleton>
  <osds-skeleton inline size="lg"></osds-skeleton>
`;
export const Paragraph = TemplateParagraph.bind({});
// @ts-ignore
Paragraph.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false },
};

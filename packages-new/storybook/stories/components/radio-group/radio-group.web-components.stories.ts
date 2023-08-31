import { html } from 'lit-html';
import { defineCustomElements } from '@ovhcloud/ods-components/radio/loader';
// @ts-ignore
import changelog from '@ovhcloud/ods-components/radio/CHANGELOG.md';
// @ts-ignore
import page from './radio-group.web-components.stories.page.mdx';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { olesIpsum, OlesIpsumGeneration } from '@ovhcloud/ods-common-core';

defineCustomElements();

const storyParams = {
  disabled: {
    category: 'Misc',
    defaultValue: false
  }
};

export default {
  title: 'Meta Components/Radio Group [meta]/Web Component',
  id: 'radio-group',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page },
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args: any) => html`
  <style>
    osds-tile {
      display: inline-flex;
      width: 10rem;
    }
  </style>
  <osds-radio-group id="radio-group-a" ...=${getTagAttributes(args)}>
    <osds-radio id="radio-A" value="val-tile-A">
      <osds-tile interactive="true" id="tile-A">${olesIpsum(OlesIpsumGeneration.words, 5)}</osds-tile>
    </osds-radio>
    <osds-radio id="radio-B" value="val-tile-B">
      <osds-tile interactive="true" id="tile-B">${olesIpsum(OlesIpsumGeneration.words, 5)}</osds-tile>
    </osds-radio>
  </osds-radio-group>
`;
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};

export { UpdateStrategy } from './radio-group.web-components.stories.update-strategy';
export { RadioButton } from './radio-group.web-components.stories.radio-button';

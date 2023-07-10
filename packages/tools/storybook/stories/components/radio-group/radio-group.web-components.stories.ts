import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';


import { defineCustomElements } from '@ovhcloud/ods-stencil-radio/loader';

import changelog from '@ovhcloud/ods-stencil-radio/CHANGELOG.md';
import page from './radio-group.web-components.stories.page.mdx';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { olesIpsum, OlesIpsumGeneration } from '@ovhcloud/ods-core';

defineCustomElements();

const storyParams = {
  disabled: {
    category: 'Misc',
    defaultValue: false
  }
};

export default {
  title: 'Meta Components/Radio Group [meta]/Web Component',
  parameters: {
    notes: {
      API: iframe('stencil-components-radio-group/modules/index.html'),
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
Default.args = {
  ...extractStoryParams(storyParams),
};

export { UpdateStrategy } from './radio-group.web-components.stories.update-strategy';
export { RadioButton } from './radio-group.web-components.stories.radio-button';

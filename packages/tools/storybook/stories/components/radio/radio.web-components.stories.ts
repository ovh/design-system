import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';


import { defineCustomElements } from '@ovhcloud/ods-stencil-radio/loader';

import changelog from '@ovhcloud/ods-stencil-radio/CHANGELOG.md';
import page from './radio.web-component.stories.page.mdx';
import { getTagAttributes, extractArgTypes, extractStoryParams } from '../../../core/componentHTMLUtils';
import { olesIpsum, OlesIpsumGeneration } from '@ovhcloud/ods-core';

defineCustomElements();

const storyParams = {
  disabled: {
    category: 'Misc',
    defaultValue: false
  },
  checking: {
    category: 'Misc',
    defaultValue: false
  }
};

export default {
  title: 'Meta Components/Radio [meta]/Web Component',
  id: 'radio',
  parameters: {
    notes: {
      API: iframe('stencil-components-radio/modules/index.html'),
      changelog,
    },
    docs: { page },
  }
};

/* Default */
const TemplateDefault = (args: any) => html`
  <style>
    osds-tile {
      display: inline-flex;
      width: 10rem;
    }
  </style>
  <h3>Non-selected</h3>
  <osds-radio ...=${getTagAttributes(args)} value="radio-a">
    <osds-tile interactive>${olesIpsum(OlesIpsumGeneration.words, 5)}</osds-tile>
  </osds-radio>
  <h3>Selected</h3>
  <osds-radio ...=${getTagAttributes(args)}  value="radio-b"
              checked>
    <osds-tile interactive>${olesIpsum(OlesIpsumGeneration.words, 5)}</osds-tile>
  </osds-radio>
`;
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};
Default.argTypes = extractArgTypes(storyParams)

export { UpdateStrategy } from './radio.web-components.stories.update-strategy';

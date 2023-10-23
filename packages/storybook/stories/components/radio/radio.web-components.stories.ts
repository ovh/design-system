import {html} from 'lit-html';
import {defineCustomElements} from '@ovhcloud/ods-components/radio/loader';
import {extractArgTypes, extractStoryParams, getTagAttributes} from '../../../core/componentHTMLUtils';
import {OlesIpsumGeneration, olesIpsum} from '@ovhcloud/ods-common-core';
// @ts-ignore
import changelog from '@ovhcloud/ods-components/radio/CHANGELOG.md';
// @ts-ignore
import page from './radio.web-component.stories.page.mdx';

defineCustomElements();

const storyParams = {
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  checking: {
    category: 'Misc',
    defaultValue: false,
  },
};

export default {
  title: 'Meta Components/Radio [meta]/Web Component',
  id: 'radio',
  parameters: {
    notes: {
      changelog,
    },
    docs: {page},
  },
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
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};
// @ts-ignore
Default.argTypes = extractArgTypes(storyParams);

export {UpdateStrategy} from './radio.web-components.stories.update-strategy';

import { defineCustomElements } from '@ovhcloud/ods-components/radio/loader';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

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
  title: 'ODS Components/Form/Radio [meta]/Demo',
  id: 'radio',
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
    <osds-tile interactive>Lorem ipsum dolor sit amet, consectetur adipiscing elit</osds-tile>
  </osds-radio>
  <h3>Selected</h3>
  <osds-radio ...=${getTagAttributes(args)}  value="radio-b"
              checked>
    <osds-tile interactive>Lorem ipsum dolor sit amet, consectetur adipiscing elit</osds-tile>
  </osds-radio>
`;
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};
// @ts-ignore
Default.argTypes = extractArgTypes(storyParams);

export { UpdateStrategy } from './demo.stories.update-strategy';

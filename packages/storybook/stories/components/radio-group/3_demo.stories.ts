import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-radio-group';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

const storyParams = {
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
};

export default {
  title: 'ODS Components/Form/Radio Group [meta]/Demo',
  id: 'radio-group',
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
      <osds-tile interactive="true" id="tile-A">Lorem ipsum dolor sit amet, consectetur adipiscing elit</osds-tile>
    </osds-radio>
    <osds-radio id="radio-B" value="val-tile-B">
      <osds-tile interactive="true" id="tile-B">Lorem ipsum dolor sit amet, consectetur adipiscing elit</osds-tile>
    </osds-radio>
  </osds-radio-group>
`;
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};

export { UpdateStrategy } from './demo.stories.update-strategy';
export { RadioButton } from './demo.stories.radio-button';

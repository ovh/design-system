import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-form';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Default story parameters  */
const storyParams = {};

export default {
  title: 'ODS Components/Content/Form [organism]/Demo',
  id: 'form',
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => html`
  <osds-form ...=${getTagAttributes(args)}>
  </osds-form>
`;
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};

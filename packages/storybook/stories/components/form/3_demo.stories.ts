import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-form';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Default story parameters  */
const storyParams = {
  initialValues: {
    category: 'General',
    defaultValue: { description: '', ovhInput: 'On Vous Héberge ?'},
    control: { type: 'object' },
  }
};

export default {
  title: 'ODS Components/Form/Form [organism]/Demo',
  id: 'form',
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => html`
  <osds-form ...=${getTagAttributes(args)}>
    <osds-form-field inline>
      <div slot="label">
        <osds-text level="heading" color="primary">Description</osds-text>
      </div>
      <div slot="visual-hint"><osds-text>150/200</osds-text></div>
      <osds-input inline name="description" type="text"></osds-input>
      <div slot="helper">
        <osds-text>Write a few sentences about you</osds-text>
      </div>
    </osds-form-field>
    <osds-input name="ovhInput" inline type="text"></osds-input>

    <div> 
      <osds-button type="reset" inline>Reset</osds-button>
      <osds-button type="submit" inline>Submit</osds-button>
    </div>
  </osds-form>
`;
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};

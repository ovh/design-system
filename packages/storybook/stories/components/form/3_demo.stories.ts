import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-form';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

defineCustomElement();

/* Default story parameters  */
const storyParams = {
  initialValues: {
    category: 'General',
    defaultValue: { description: '', ovhInput: 'On Vous Héberge ?'},
    control: { type: 'object' },
  },
  content: {
    category: 'Slot',
    defaultValue:  `<osds-form-field inline>
      <div slot="label">
        <osds-text level="heading" color="primary">Description</osds-text>
      </div>
      <div slot="visual-hint"><osds-text>150/200</osds-text></div>
      <osds-input inline name="description" type="text"></osds-input>
      <div slot="helper">
        <osds-text>Write a few sentences about you</osds-text>
      </div>
    </osds-form-field>
    <osds-input name="ovhInput" inline type="text"></osds-input>`,
  },
  buttonContent: {
    category: 'Slot',
    defaultValue: ` <div> 
    <osds-button type="reset" inline>Reset</osds-button>
    <osds-button type="submit" inline>Submit</osds-button>
    	</div>`
  },
};

export default {
  title: 'ODS Components/Form/Form [organism]/Demo',
  id: 'form',
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => html`
  <osds-form ...=${getTagAttributes(args)}>
    ${unsafeHTML(args.content)}

    ${unsafeHTML(args.buttonContent)}
  </osds-form>
`;
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};

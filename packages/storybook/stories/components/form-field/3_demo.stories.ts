import { defineCustomElements } from '@ovhcloud/ods-components/form-field/loader';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  inline: {
    category: 'General',
    defaultValue: false,
  },
  error: {
    category: 'General',
    defaultValue: '',
  },
  label: {
    category: 'Slot',
    defaultValue: `<osds-text level='heading' color="primary">
  Description
</osds-text>`,
  },
  visualHint: {
    category: 'Slot',
    defaultValue: `<osds-text>
  150/200
</osds-text>`,
  },
  input: {
    category: 'Slot',
    defaultValue: '<osds-input type="text" id="input" value="Just ODS being ahead"></osds-input>',
  },
  helper: {
    category: 'Slot',
    defaultValue: `<osds-text>
  Write a few sentences about you
</osds-text>`,
  },
};

export default {
  title: 'ODS Components/Form/Form Field [organism]/Demo',
  id: 'form-field',
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => {
  return html`<osds-form-field ...=${getTagAttributes(args)}>
    <div slot="label">${unsafeHTML(args.label)}</div>
    <div slot="visual-hint">${unsafeHTML(args.visualHint)}</div>
    ${unsafeHTML(args.input)}
    <div slot="helper">${unsafeHTML(args.helper)}</div>
  </osds-form-field>`;
};

export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};

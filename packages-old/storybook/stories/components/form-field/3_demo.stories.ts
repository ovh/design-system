import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-form-field';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Demo story parameters  */
const storyParams = {
  label: {
    category: 'Slot',
    defaultValue: '<osds-text level=\'heading\' color="text">Field label</osds-text>',
  },
  input: {
    category: 'Slot',
    defaultValue: '<osds-input type="text" id="input" placeholder="Input placeholder"></osds-input>',
  },
  helper: {
    category: 'Slot',
    defaultValue: '<osds-text>Field helper</osds-text>',
  },
  visualHint: {
    category: 'Slot',
    defaultValue: '',
  },
  inline: {
    category: 'Misc',
    defaultValue: true,
  },
  error: {
    category: 'Misc',
    defaultValue: '',
  },
};

export default {
  title: 'ODS Components/Form/Form Field [organism]/Demo',
  id: 'form-field',
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDemo = (args:any) => {
  return html`<osds-form-field ...=${getTagAttributes(args)}>
    <div slot="label">${unsafeHTML(args.label)}</div>
    <div slot="visual-hint">${unsafeHTML(args.visualHint)}</div>
    ${unsafeHTML(args.input)}
    <div slot="helper">${unsafeHTML(args.helper)}</div>
  </osds-form-field>`;
};

export const Demo = TemplateDemo.bind({});
// @ts-ignore
Demo.args = {
  ...extractStoryParams(storyParams),
};

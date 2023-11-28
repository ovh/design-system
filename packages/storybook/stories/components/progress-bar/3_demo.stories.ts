import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-progress-bar';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Demo story parameters  */
const storyParams = {
  value: {
    category: 'Misc',
    control: { type: 'number' },
    defaultValue: 50,
  },
  max: {
    category: 'Misc',
    control: { type: 'number' },
    defaultValue: 100,
  },
  end: {
    category: 'Slot',
    defaultValue: '<osds-text style="padding-left: 8px;" color="text">100%</osds-text>',
  },
};

export default {
  title: 'ODS Components/User feedback/Progress Bar [atom]/Demo',
  id: 'progress-bar',
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDemo = (args:any) => {
  return html`
    <osds-progress-bar ...=${getTagAttributes(args)}>
      <span slot="end">${unsafeHTML(args.end)}</span>
    </osds-progress-bar>
  `;
};
export const Demo = TemplateDemo.bind({});
// @ts-ignore
Demo.args = {
  ...extractStoryParams(storyParams),
};

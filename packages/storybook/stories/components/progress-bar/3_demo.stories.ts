import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-progress-bar';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Default story parameters  */
const storyParams = {
  value: {
    category: 'Misc',
    control: { type: 'number' },
    defaultValue: 0,
  },
  max: {
    category: 'Misc',
    control: { type: 'number' },
    defaultValue: 100,
  },
  end: {
    category: 'Slot',
    defaultValue: '',
  },
};

export default {
  title: 'ODS Components/User feedback/Progress Bar [atom]/Demo',
  id: 'progress-bar',
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => {
  return html`
    <osds-progress-bar ...=${getTagAttributes(args)}>
      <span slot="end">${unsafeHTML(args.end)}</span>
    </osds-progress-bar>
  `;
};
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};

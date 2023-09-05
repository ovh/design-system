import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { defineCustomElements } from '@ovhcloud/ods-components/progress-bar/loader';
import { DEFAULT_ATTRIBUTE } from '@ovhcloud/ods-components/progress-bar/src/components/osds-progress-bar/constants/default-attributes';
// @ts-ignore
import changelog from '@ovhcloud/ods-components/progress-bar/CHANGELOG.md';
// @ts-ignore
import page from './progress-bar.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  value: {
    category: 'Misc',
    control: { type: 'number' },
    defaultValue: DEFAULT_ATTRIBUTE.value,
  },
  max: {
    category: 'Misc',
    control: { type: 'number' },
    defaultValue: DEFAULT_ATTRIBUTE.max,
  },
  end: {
    category: 'Slot',
    defaultValue: '',
  },
};

export default {
  title: 'UI Components/Progress Bar [atom]/Web Component',
  id: 'progress-bar',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page },
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => {
  return html`
    <osds-progress-bar ...=${getTagAttributes(args)}>
      <span slot="end">${unsafeHTML(args.end)}</span>
    </osds-progress-bar>
  `;
}
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};

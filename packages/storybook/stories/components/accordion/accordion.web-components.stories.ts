import { ODS_THEME_COLOR_INTENT, ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import changelog from '@ovhcloud/ods-components/accordion/CHANGELOG.md';
import { defineCustomElements } from '@ovhcloud/ods-components/accordion/loader';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
// @ts-ignore

import page from './accordion.web-component.stories.page.mdx';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
// @ts-ignore

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: ODS_THEME_COLOR_INTENT.info,
    options: ODS_THEME_COLOR_INTENTS,
    control: { type: 'select' },
  },
  accordionSummary: {
    category: 'Slot',
    defaultValue: 'Lorem ipsum',
  },
  accordionContent: {
    category: 'Slot',
    defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar ornare augue, nec elementum lectus maximus vel. Praesent dignissim est diam, a tempor leo commodo non. Morbi ut suscipit enim. Ut nunc nunc, eleifend ut lacinia quis, mattis quis metus. Vestibulum at elit porta, tincidunt diam in, mattis mauris. Duis tincidunt ut mauris a faucibus. Nulla sodales lacus et nibh euismod, vel pellentesque justo condimentum.',
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false,
  },
};

export default {
  title: 'UI Components/Accordion [atom]/Web Component',
  id: 'accordion',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page },
  },
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const TemplateDefault = (args: any) => {
  if (args.flex === 0) {
    delete args.flex;
  }
  return html`
    <osds-accordion ...=${getTagAttributes(args)}>
      <span slot='summary'>${unsafeHTML(args.accordionSummary)}</span>
      ${unsafeHTML(args.accordionContent)}
    </osds-accordion>
  `;
};
export const WebComponent = TemplateDefault.bind({});
WebComponent.args = {
  ...extractStoryParams(storyParams),
};


import { OdsThemeColorIntent, OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

import { defineCustomElements } from '@ovhcloud/ods-component-accordion/loader';
import { html } from 'lit-html';
import page from './accordion.web-component.stories.page.mdx';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: OdsThemeColorIntent.info,
    options: OdsThemeColorIntentList,
    control: { type: 'select' },
  },
  accordionSummary: {
    category: 'Slot',
    defaultValue: `Lorem ipsum`,
  },
  accordionContent: {
    category: 'Slot',
    defaultValue: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar ornare augue, nec elementum lectus maximus vel. Praesent dignissim est diam, a tempor leo commodo non. Morbi ut suscipit enim. Ut nunc nunc, eleifend ut lacinia quis, mattis quis metus. Vestibulum at elit porta, tincidunt diam in, mattis mauris. Duis tincidunt ut mauris a faucibus. Nulla sodales lacus et nibh euismod, vel pellentesque justo condimentum.`,
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
    docs: { page }
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


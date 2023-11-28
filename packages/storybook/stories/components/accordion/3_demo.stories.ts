import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-accordion';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Demo story parameters  */
const storyParams = {
  summary: {
    category: 'Slot',
    defaultValue: 'Lorem ipsum',
  },
  content: {
    category: 'Slot',
    defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar ornare augue, nec elementum lectus maximus vel. Praesent dignissim est diam, a tempor leo commodo non. Morbi ut suscipit enim. Ut nunc nunc, eleifend ut lacinia quis, mattis quis metus. Vestibulum at elit porta, tincidunt diam in, mattis mauris. Duis tincidunt ut mauris a faucibus. Nulla sodales lacus et nibh euismod, vel pellentesque justo condimentum.',
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false,
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
};

export default {
  title: 'ODS Components/Layout/Accordion [atom]/Demo',
  id: 'accordion',
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const TemplateDemo = (args: any) => {
  if (args.flex === 0) {
    delete args.flex;
  }
  return html`
    <osds-accordion ...=${getTagAttributes(args)}>
      <span slot='summary'>${unsafeHTML(args.summary)}</span>
      ${unsafeHTML(args.content)}
    </osds-accordion>
  `;
};
export const Demo = TemplateDemo.bind({});
// @ts-ignore
Demo.args = {
  ...extractStoryParams(storyParams),
};


import { OdsThemeColorIntent, OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import {
  createComponentTable,
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

import { OdsMessageTypeList } from '@ovhcloud/ods-core/src';
import { XDConfig } from 'storybook-addon-xd-designs/lib/config';
// import changelog from '@ovhcloud/ods-stencil-message/CHANGELOG.md';
import { config } from 'storybook-addon-xd-designs';
import { defineCustomElements } from '@ovhcloud/ods-stencil-message/loader';
import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';
import page from './message.web-component.stories.page.mdx';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: OdsThemeColorIntent.default,
    options: OdsThemeColorIntentList,
    control: { type: 'select' },
  },
  type: {
    category: 'General',
    options: OdsMessageTypeList,
    control: { type: 'select' },
  },
  messageContent: {
    category: 'Slot',
    defaultValue: 'Message',
  },
  icon: {
    category: 'Misc',
    defaultValue: ''
  },
  removable: {
    category: 'Misc',
    defaultValue: false,
  },
  flex: {
    category: 'Misc',
    defaultValue: false,
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false,
  },
};

export default {
  title: 'UI Components/Message [atom]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-message/modules/index.html'),
    },
    docs: { page },
    design: config({
      artboardUrl: 'https://xd.adobe.com/view/9bb1ccc1-e850-428c-9fd2-d4a60718a440-cee2/screen/de3e2df7-15a7-4d3b-a452-b3bdfdc28911/Desktop',
    } as XDConfig),
  },
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const TemplateDefault = (args: any) => {
  if (args.flex === 0) {
    delete args.flex;
  }
  return html`
    <osds-message ...=${getTagAttributes(args)}>
      ${unsafeHTML(args.messageContent)}
    </osds-message>
  `;
};
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};

const defaultTag = 'osds-message';
const defaultContent = `Text`;

const TemplateAll = () => html`
<style>
.table {
  margin: 1em auto;
}
.table-row {
  display: flex;
  margin: 1em auto;
  align-items: center;
}
.table-cell {
  display: inline-flex;
  width: 7em;
  align-items: center;
  justify-content: center;
}
</style>

<h1>Types & Removable</h1>
${unsafeHTML(createComponentTable(
  defaultTag,
  { type: OdsMessageTypeList },
  { removable: [false, true] },
  defaultContent,
))}`;

export const All = TemplateAll.bind({});
All.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false },
};

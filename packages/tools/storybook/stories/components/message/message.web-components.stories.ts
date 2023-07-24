import { OdsThemeColorIntent, OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import {
  createComponentTable,
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

import { OdsMessageTypeList } from '@ovhcloud/ods-core/src';
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

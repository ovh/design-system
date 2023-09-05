import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes, createComponentTable } from '../../../core/componentHTMLUtils';
import { ODS_THEME_COLOR_INTENT, ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { defineCustomElements } from '@ovhcloud/ods-components/message/loader';
import { ODS_MESSAGE_TYPES } from '@ovhcloud/ods-components/message/src/components/osds-message/constants/message-type';
// @ts-ignore
import changelog from '@ovhcloud/ods-components/message/CHANGELOG.md';
// @ts-ignore
import page from './message.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: ODS_THEME_COLOR_INTENT.default,
    options: ODS_THEME_COLOR_INTENTS,
    control: { type: 'select' },
  },
  type: {
    category: 'General',
    options: ODS_MESSAGE_TYPES,
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
  inline: {
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
  id: 'message',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page }
  },
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const TemplateDefault = (args: any) => {
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
  { type: ODS_MESSAGE_TYPES },
  { removable: [false, true] },
  defaultContent,
))}`;

export const All = TemplateAll.bind({});
All.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false },
};

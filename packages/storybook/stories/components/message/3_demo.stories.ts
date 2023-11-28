import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-message';
import { ODS_MESSAGE_TYPES, ODS_ICON_NAME } from '@ovhcloud/ods-components';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Demo story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: ODS_THEME_COLOR_INTENT.primary,
    options: [ODS_THEME_COLOR_INTENT.primary, ODS_THEME_COLOR_INTENT.success, ODS_THEME_COLOR_INTENT.warning, ODS_THEME_COLOR_INTENT.error],
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
    defaultValue: '',
    control: { type: 'select' },
    options: ODS_ICON_NAME,
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
  title: 'ODS Components/User feedback/Message [atom]/Demo',
  id: 'message',
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const TemplateDemo = (args: any) => {
  return html`
    <osds-message ...=${getTagAttributes(args)}>
      ${unsafeHTML(args.messageContent)}
    </osds-message>
  `;
};
export const Demo = TemplateDemo.bind({});
// @ts-ignore
Demo.args = {
  ...extractStoryParams(storyParams),
};

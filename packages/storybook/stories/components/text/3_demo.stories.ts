import { ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { ODS_TEXT_LEVEL, ODS_TEXT_LEVELS, ODS_TEXT_SIZE, ODS_TEXT_SIZES } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-text';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

const textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

/* Demo story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: ODS_THEME_COLOR_INTENT.text,
    options: ODS_THEME_COLOR_INTENTS,
    control: { type: 'select' },
  },
  size: {
    category: 'General',
    defaultValue: ODS_TEXT_SIZE._400,
    options: ODS_TEXT_SIZES,
    control: { type: 'select' },
  },
  level: {
    category: 'General',
    defaultValue: ODS_TEXT_LEVEL.body,
    options: ODS_TEXT_LEVELS,
    control: { type: 'select' },
  },
  textContent: {
    category: 'Slot',
    defaultValue: textContent,
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false,
  },
  breakSpaces: {
    category: 'Misc',
    defaultValue: false,
  },
};

export default {
  title: 'ODS Components/Content/Text [quark]/Demo',
  id: 'text',
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDemo = (args:any) => html`
  <osds-text ...=${getTagAttributes(args)}>
    ${unsafeHTML(args.textContent)}
  </osds-text>
`;
export const Demo = TemplateDemo.bind({});
// @ts-ignore
Demo.args = {
  ...extractStoryParams(storyParams),
};

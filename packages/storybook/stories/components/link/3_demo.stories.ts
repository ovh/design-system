import { OdsHTMLAnchorElementRelList, OdsHTMLAnchorElementTarget, OdsHTMLAnchorElementTargetList } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-link';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Demo story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: ODS_THEME_COLOR_INTENT.primary,
    options: [ODS_THEME_COLOR_INTENT.primary],
    control: { type: 'select' },
  },
  start: {
    category: 'Slots',
    defaultValue: '',
  },
  end: {
    category: 'Slots',
    defaultValue: '<osds-icon style="padding-left: 8px" name="arrow-right" size="xs" hoverable=""></osds-icon>',
  },
  linkContent: {
    category: 'Slots',
    defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false,
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  href: {
    category: 'Development',
    defaultValue: '',
  },
  rel: {
    category: 'Development',
    defaultValue: '',
    options: OdsHTMLAnchorElementRelList,
    control: { type: 'select' },
  },
  target: {
    category: 'Development',
    defaultValue: OdsHTMLAnchorElementTarget._self,
    options: OdsHTMLAnchorElementTargetList,
    control: { type: 'select' },
  },
  download: {
    category: 'Development',
    defaultValue: 'filename',
  },
};

export default {
  title: 'ODS Components/Actions/Link [atom]/Demo',
  id: 'link',
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDemo = (args: Record<string, unknown>) => html`
  <osds-link ...=${getTagAttributes(args)}>
    <span slot='start'>${unsafeHTML(args.start)}</span>
    ${unsafeHTML(args.linkContent || 'Link')}
    <span slot='end'>${unsafeHTML(args.end)}</span>
  </osds-link>
`;
export const Demo = TemplateDemo.bind({});
// @ts-ignore
Demo.args = {
  ...extractStoryParams(storyParams),
};

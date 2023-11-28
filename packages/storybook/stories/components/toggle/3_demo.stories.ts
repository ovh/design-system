import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-toggle';
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
    options: [ODS_THEME_COLOR_INTENT.default, ODS_THEME_COLOR_INTENT.primary],
    control: { type: 'select' },
  },
  start: {
    category: 'Slot',
    defaultValue: '',
  },
  end: {
    category: 'Slot',
    defaultValue: '<osds-text style="padding-left: 8px;" color="text" level="body" size="500">Toggle</osds-text>',
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false,
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  checked: {
    category: 'Misc',
    defaultValue: false,
  },
  interactive: {
    category: 'Development',
    defaultValue: true,
  },
  checking: {
    category: 'Development',
    defaultValue: false,
  },
};

export default {
  title: 'ODS Components/Form/Toggle [atom]/Demo',
  id: 'toggle',
};

// A tile example
const TemplateDemo = (args: any) => {
  if (args.flex === 0) {
    delete args.flex;
  }
  return html`
    <div class='toggle-container'>
      <osds-toggle ...=${getTagAttributes(args)}>
        <span slot='start'>${unsafeHTML(args.start)}</span>
        <span slot='end'>${unsafeHTML(args.end)}</span>
      </osds-toggle>
    </div>
  `;
};
export const Demo = TemplateDemo.bind({});
// @ts-ignore
Demo.args = {
  ...extractStoryParams(storyParams),
};
// @ts-ignore
Demo.argTypes = extractArgTypes(storyParams);

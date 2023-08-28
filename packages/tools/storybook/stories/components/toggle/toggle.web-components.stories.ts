import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import {
  createComponentTable,
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

import { OdsThemeColorIntent, OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { defineCustomElements } from '@ovhcloud/ods-component-toggle/loader';
// @ts-ignore
import changelog from '@ovhcloud/ods-component-toggle/CHANGELOG.md';
// @ts-ignore
import page from './toggle.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: OdsThemeColorIntent.default,
    options: OdsThemeColorIntentList,
    control: { type: 'select' },
  },
  start: {
    category: 'Slot',
    defaultValue: '',
  },
  end: {
    category: 'Slot',
    defaultValue: '',
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false,
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  interactive: {
    category: 'Misc',
    defaultValue: false,
  },
  checked: {
    category: 'Misc',
    defaultValue: false,
  },
  checking: {
    category: 'Misc',
    defaultValue: false,
  }
};

export default {
  title: 'UI Components/Toggle [atom]/Web Component',
  id: 'toggle',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page }
  }
};

// A tile example
const TemplateDefault = (args: any) => {
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
}
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};
// @ts-ignore
Default.argTypes = extractArgTypes(storyParams);

const defaultTag = 'osds-toggle';

const TemplateAll = (args: any) => html`
  <style>
    .table {
      margin: 1em auto;
    }

    .table-row {
      display: flex;
      margin: .5em auto;
      align-items: center;
    }

    .table-cell {
      display: inline-flex;
      width: 8rem;
      align-items: center;
      justify-content: center;
    }
  </style>

  <h1>Default</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    { a: [''] },
    { color: OdsThemeColorIntentList },
    '',
    { ...(args.checking ? { checking: args.checking } : {}) }
  ))}
  <h1>Checked</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    { a: [''] },
    { color: OdsThemeColorIntentList },
    '',
    { checked: true, ...(args.checking ? { checking: args.checking } : {}) }
  ))}
  <h1>Disabled</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    { a: [''] },
    { color: OdsThemeColorIntentList },
    '',
    { disabled: true, ...(args.checking ? { checking: args.checking } : {}) }
  ))}
  <h1>Disabled checked</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    { checked: [true] },
    { color: OdsThemeColorIntentList },
    '',
    { checked: true, disabled: true, ...(args.checking ? { checking: args.checking } : {}) }
  ))}
`;


const storyParamsAll = {
  checking: {
    category: 'Misc',
    defaultValue: false
  },
};

export const All = TemplateAll.bind({});
// @ts-ignore
All.args = {
  ...extractStoryParams(storyParamsAll),
};
// @ts-ignore
All.argTypes = extractArgTypes(storyParamsAll);

import {
  createComponentTable,
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { defineCustomElements } from '@ovhcloud/ods-component-toggle/loader';
import changelog from '@ovhcloud/ods-component-toggle/CHANGELOG.md';
import { html } from 'lit-html';
import { odsToggleDefaultAttributes } from '@ovhcloud/ods-core';
import page from './toggle.web-component.stories.page.mdx';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: odsToggleDefaultAttributes.color,
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
    defaultValue: odsToggleDefaultAttributes.contrasted
  },
  disabled: {
    category: 'Misc',
    defaultValue: odsToggleDefaultAttributes.disabled
  },
  interactive: {
    category: 'Misc',
    defaultValue: odsToggleDefaultAttributes.interactive
  },
  checked: {
    category: 'Misc',
    defaultValue: odsToggleDefaultAttributes.checked
  },
  checking: {
    category: 'Misc',
    defaultValue: odsToggleDefaultAttributes.checking
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
Default.args = {
  ...extractStoryParams(storyParams),
};
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
All.args = {
  ...extractStoryParams(storyParamsAll),
};
All.argTypes = extractArgTypes(storyParamsAll);

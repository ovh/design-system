import { ODS_THEME_COLOR_INTENT, ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-toggle';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import {
  createComponentTable,
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: ODS_THEME_COLOR_INTENT.primary,
    options: ODS_THEME_COLOR_INTENTS,
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
    defaultValue: true,
  },
  checked: {
    category: 'Misc',
    defaultValue: false,
  },
  checking: {
    category: 'Misc',
    defaultValue: false,
  },
};

export default {
  title: 'ODS Components/Form/Toggle [atom]/Demo',
  id: 'toggle',
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
};
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
    { color: ODS_THEME_COLOR_INTENTS },
    '',
    { ...(args.checking ? { checking: args.checking } : {}) },
  ))}
  <h1>Checked</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    { a: [''] },
    { color: ODS_THEME_COLOR_INTENTS },
    '',
    { checked: true, ...(args.checking ? { checking: args.checking } : {}) },
  ))}
  <h1>Disabled</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    { a: [''] },
    { color: ODS_THEME_COLOR_INTENTS },
    '',
    { disabled: true, ...(args.checking ? { checking: args.checking } : {}) },
  ))}
  <h1>Disabled checked</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    { checked: [true] },
    { color: ODS_THEME_COLOR_INTENTS },
    '',
    { checked: true, disabled: true, ...(args.checking ? { checking: args.checking } : {}) },
  ))}
`;


const storyParamsAll = {
  checking: {
    category: 'Misc',
    defaultValue: false,
  },
};

export const All = TemplateAll.bind({});
All.args = {
  ...extractStoryParams(storyParamsAll),
};
All.argTypes = extractArgTypes(storyParamsAll);

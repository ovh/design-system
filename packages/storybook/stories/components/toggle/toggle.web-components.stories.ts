import {html} from 'lit-html';
import {unsafeHTML} from 'lit-html/directives/unsafe-html';
import {
  createComponentTable,
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';
import {ODS_THEME_COLOR_INTENTS} from '@ovhcloud/ods-common-theming';
import {DEFAULT_ATTRIBUTE} from '@ovhcloud/ods-components/toggle/src/components/osds-toggle/constants/default-attributes';
import {defineCustomElements} from '@ovhcloud/ods-components/toggle/loader';
// @ts-ignore
import changelog from '@ovhcloud/ods-components/toggle/CHANGELOG.md';
// @ts-ignore
import page from './toggle.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.color,
    options: ODS_THEME_COLOR_INTENTS,
    control: {type: 'select'},
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
    defaultValue: DEFAULT_ATTRIBUTE.contrasted,
  },
  disabled: {
    category: 'Misc',
    defaultValue: DEFAULT_ATTRIBUTE.disabled,
  },
  interactive: {
    category: 'Misc',
    defaultValue: DEFAULT_ATTRIBUTE.interactive,
  },
  checked: {
    category: 'Misc',
    defaultValue: DEFAULT_ATTRIBUTE.checked,
  },
  checking: {
    category: 'Misc',
    defaultValue: DEFAULT_ATTRIBUTE.checking,
  },
};

export default {
  title: 'UI Components/Toggle [atom]/Web Component',
  id: 'toggle',
  parameters: {
    notes: {
      changelog,
    },
    docs: {page},
  },
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
    {a: ['']},
    {color: ODS_THEME_COLOR_INTENTS},
    '',
    {...(args.checking ? {checking: args.checking} : {})},
  ))}
  <h1>Checked</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    {a: ['']},
    {color: ODS_THEME_COLOR_INTENTS},
    '',
    {checked: true, ...(args.checking ? {checking: args.checking} : {})},
  ))}
  <h1>Disabled</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    {a: ['']},
    {color: ODS_THEME_COLOR_INTENTS},
    '',
    {disabled: true, ...(args.checking ? {checking: args.checking} : {})},
  ))}
  <h1>Disabled checked</h1>
  ${unsafeHTML(createComponentTable(
    defaultTag,
    {checked: [true]},
    {color: ODS_THEME_COLOR_INTENTS},
    '',
    {checked: true, disabled: true, ...(args.checking ? {checking: args.checking} : {})},
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

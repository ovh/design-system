import {html} from 'lit-html';
import {unsafeHTML} from 'lit-html/directives/unsafe-html';
import {defineCustomElements} from '@ovhcloud/ods-components/checkbox-button/loader';
import {ODS_CHECKBOX_BUTTON_SIZE, ODS_CHECKBOX_BUTTON_SIZES} from '@ovhcloud/ods-components/checkbox-button';
import {ODS_THEME_COLOR_INTENT, ODS_THEME_COLOR_INTENTS} from '@ovhcloud/ods-common-theming';
// @ts-ignore
import changelog from '@ovhcloud/ods-components/checkbox-button/CHANGELOG.md';
// @ts-ignore
import page from './checkbox-button.web-component.stories.page.mdx';
import {
  createComponentTable,
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  checked: {
    category: 'General',
    defaultValue: false,
  },
  indeterminate: {
    category: 'General',
    defaultValue: false,
  },
  checking: {
    category: 'General',
    defaultValue: false,
  },
  color: {
    category: 'General',
    defaultValue: ODS_THEME_COLOR_INTENT.default,
    options: ODS_THEME_COLOR_INTENTS,
    control: {type: 'select'},
  },
  size: {
    category: 'General',
    defaultValue: ODS_CHECKBOX_BUTTON_SIZE.md,
    options: ODS_CHECKBOX_BUTTON_SIZES,
    control: {type: 'select'},
  },
  start: {
    category: 'Slot',
    defaultValue: 'Left input',
  },
  end: {
    category: 'Slot',
    defaultValue: 'Right input',
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  hasFocus: {
    category: 'Misc',
    defaultValue: false,
  },
  interactive: {
    category: 'Misc',
    defaultValue: false,
  },
};

export default {
  title: 'UI Components/Checkbox Button [atom]/Web Component',
  id: 'checkbox-button',
  parameters: {
    notes: {
      changelog,
    },
    docs: {page},
  },
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const OsdsCheckboxButtonDefault = (args: Record< string, unknown>) => html`
  <osds-checkbox-button ...=${getTagAttributes(args)}>
    <span slot='start'>${unsafeHTML(args.start)}</span>
    <span slot='end'>${unsafeHTML(args.end)}</span>
  </osds-checkbox-button>
`;
const TemplateDefault = (args: Record< string, unknown>) => OsdsCheckboxButtonDefault(args);
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};

/*  Checkbox */
const OsdsCheckboxButtonCheckboxWrapper = (args: Record< string, unknown>) => html`
  <h1 style='font-size: 1.3rem; font-family: "Source Sans Pro"; font-style: italic'>
    <a href=${parent.location.href.replace(parent.location.search, '?path=/story/checkbox--web-component')}>Checkbox</a> Meta component adds behavior to this Checkbox Button
  </h1>
  <osds-checkbox>
      <osds-checkbox-button ...=${getTagAttributes(args)}>
        <span slot='start'>${unsafeHTML(args.start)}</span>
        <span slot='end'>${unsafeHTML(args.end)}</span>
      </osds-checkbox-button>
    </osds-checkbox>
`;
const TemplateCheckboxWrapper = (args: Record< string, unknown>) => OsdsCheckboxButtonCheckboxWrapper(args);
export const CheckboxWrapper = TemplateCheckboxWrapper.bind({});
// @ts-ignore
CheckboxWrapper.args = {
  ...extractStoryParams(storyParams),
};

const defaultTag = 'osds-checkbox-button';
const defaultContent = 'Text';

const TemplateAll = () => html`
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
  width: 6em;
  align-items: center;
  justify-content: center;
}
</style>

<h1>Sizes & Colors</h1>
${unsafeHTML(createComponentTable(
    defaultTag,
    {size: ODS_CHECKBOX_BUTTON_SIZES},
    {color: ODS_THEME_COLOR_INTENTS},
    defaultContent,
    {
      checked: true,
    },
  ))}
</div>
`;
export const All = TemplateAll.bind({});
// @ts-ignore
All.parameters = {
  controls: {hideNoControlsWarning: true},
  options: {showPanel: false},
};

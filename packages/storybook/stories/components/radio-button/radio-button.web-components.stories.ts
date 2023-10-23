import {html} from 'lit-html';
import {unsafeHTML} from 'lit-html/directives/unsafe-html';
import {defineCustomElements} from '@ovhcloud/ods-components/radio-button/loader';
import {ODS_RADIO_BUTTON_SIZES} from '@ovhcloud/ods-components/radio-button';
import {ODS_THEME_COLOR_INTENTS} from '@ovhcloud/ods-common-theming';
import {DEFAULT_ATTRIBUTE} from '@ovhcloud/ods-components/radio-button/src/components/osds-radio-button/constants/default-attributes';
import {createComponentTable, extractArgTypes, extractStoryParams, getTagAttributes} from '../../../core/componentHTMLUtils';
// @ts-ignore
import changelog from '@ovhcloud/ods-components/radio-button/CHANGELOG.md';
// @ts-ignore
import page from './radio-button.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  checked: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.checked,
  },
  checking: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.checking,
  },
  color: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.color,
    options: ODS_THEME_COLOR_INTENTS,
    control: {type: 'select'},
  },
  size: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.size,
    options: ODS_RADIO_BUTTON_SIZES,
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
  interactive: {
    category: 'Misc',
    defaultValue: false,
  },
  hasFocus: {
    category: 'Misc',
    defaultValue: false,
  },
};

export default {
  title: 'UI Components/Radio Button [atom]/Web Component',
  id: 'radio-button',
  parameters: {
    notes: {
      changelog,
    },
    docs: {page},
  },
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const OsdsRadioButtonDefault = (args) => html`
  <osds-radio-button ...=${getTagAttributes(args)}>
    <span slot='start'>${unsafeHTML(args.start)}</span>
    <span slot='end'>${unsafeHTML(args.end)}</span>
  </osds-radio-button>
`;
const TemplateDefault = (args) => OsdsRadioButtonDefault(args);
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};

/* RadioWrapper */
const OsdsRadioButtonRadioWrapper = (args) => html`
  <h1 style='font-size: 1.3rem; font-family: "Source Sans Pro"; font-style: italic'>
    <a href=${parent.location.href.replace(parent.location.search, '?path=/story/radio--default')}>Radio</a> Meta component adds behavior to this Radio Button
  </h1>
  <osds-radio value="radio-a">
    <osds-radio-button ...=${getTagAttributes(args)}>
      <span slot='start'>${unsafeHTML(args.start)}</span>
      <span slot='end'>${unsafeHTML(args.end)}</span>
    </osds-radio-button>
  </osds-radio>
`;
const TemplateRadioWrapper = (args) => OsdsRadioButtonRadioWrapper(args);
export const RadioWrapper = TemplateRadioWrapper.bind({});
RadioWrapper.args = {
  ...extractStoryParams(storyParams),
};
/* RadioWrapper */
const OsdsRadioButtonRadioGroupWrapper = (args) => html`
  <h1 style='font-size: 1.3rem; font-family: "Source Sans Pro"; font-style: italic'>
    <a href=${parent.location.href.replace(parent.location.search, '?path=/story/radio--default')}>Radio</a> and <a href=${parent.location.href.replace(parent.location.search, '?path=/story/radio-group--default')}>Radio Group</a> Meta components adds behavior to these Radio Buttons
  </h1>
  <osds-radio-group id="radio-group-a">
    <osds-radio id="radio-A" value="val-tile-A" checked>
      <osds-radio-button ...=${getTagAttributes(args)}>
        <span slot='start'>${unsafeHTML(args.start)}</span>
        <span slot='end'>${unsafeHTML(args.end)}</span>
      </osds-radio-button>
    </osds-radio>
    <osds-radio id="radio-B" value="val-tile-B">
      <osds-radio-button ...=${getTagAttributes(args)}>
        <span slot='start'>${unsafeHTML(args.start)}</span>
        <span slot='end'>${unsafeHTML(args.end)}</span>
      </osds-radio-button>
    </osds-radio>
  </osds-radio-group>
`;
const TemplateRadioGroupWrapper = (args) => OsdsRadioButtonRadioGroupWrapper(args);
export const RadioGroupWrapper = TemplateRadioGroupWrapper.bind({});
RadioGroupWrapper.args = {
  ...extractStoryParams(storyParams),
};

const defaultTag = 'osds-radio-button';
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
    {size: ODS_RADIO_BUTTON_SIZES},
    {color: ODS_THEME_COLOR_INTENTS},
    defaultContent,
    {
      checked: true,
    },
  ))}
</div>
`;
export const All = TemplateAll.bind({});
All.parameters = {
  controls: {hideNoControlsWarning: true},
  options: {showPanel: false},
};

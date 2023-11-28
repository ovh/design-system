import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_CHECKBOX_BUTTON_SIZE, ODS_CHECKBOX_BUTTON_SIZES } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-checkbox-button';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import {
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
    options: [ODS_THEME_COLOR_INTENT.default, ODS_THEME_COLOR_INTENT.primary, ODS_THEME_COLOR_INTENT.error],
    control: { type: 'select' },
  },
  size: {
    category: 'General',
    defaultValue: ODS_CHECKBOX_BUTTON_SIZE.md,
    options: ODS_CHECKBOX_BUTTON_SIZES,
    control: { type: 'select' },
  },
  checked: {
    category: 'General',
    description: '',
    defaultValue: false,
  },
  indeterminate: {
    category: 'General',
    defaultValue: false,
  },
  start: {
    category: 'Slot',
    defaultValue: '',
  },
  end: {
    category: 'Slot',
    defaultValue: '<osds-text color="text" level="body" size="500">Checkbox Button</osds-text>',
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  checking: {
    category: 'Development',
    defaultValue: false,
  },
  interactive: {
    category: 'Development',
    defaultValue: false,
  },
  hasFocus: {
    category: 'Development',
    defaultValue: false,
  },
};

export default {
  title: 'ODS Components/Form/Checkbox Button [atom]/Demo',
  id: 'checkbox-button',
  argTypes: extractArgTypes(storyParams)
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
  <osds-text level='heading' size='100' color='text'>
    <osds-link href='?path=/story/checkbox--default' color='primary'>Checkbox</osds-link>
    Meta component adds behavior to this Checkbox Button
  </osds-text>
  <osds-divider separator></osds-divider>
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

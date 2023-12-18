import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_RADIO_BUTTON_SIZE, ODS_RADIO_BUTTON_SIZES } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-radio-button';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

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
    defaultValue: ODS_RADIO_BUTTON_SIZE.sm,
    options: ODS_RADIO_BUTTON_SIZES,
    control: { type: 'select' },
  },
  checked: {
    category: 'General',
    defaultValue: true,
  },
  start: {
    category: 'Slot',
    defaultValue: '',
  },
  end: {
    category: 'Slot',
    defaultValue: '<osds-text color="text" level="body" size="500">Radio Button</osds-text>',
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
  title: 'ODS Components/Form/Radio Button [atom]/Demo',
  id: 'radio-button',
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args: any) => html`
  <osds-radio-button ...=${getTagAttributes(args)}>
    <span slot='start'>${unsafeHTML(args.start)}</span>
    <span slot='end'>${unsafeHTML(args.end)}</span>
  </osds-radio-button>
`;

export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};

/* In Radio Group */
const TemplateInRadioGroup = (args: any) => html`
  <osds-text level='heading' size='100' color='text'>
    <osds-link href='?path=/story/radio--default' color='primary'>Radio</osds-link>
    and
    <osds-link href='?path=/story/radio-group--default' color='primary'>Radio Group</osds-link>
    Meta components adds behavior to these Radio Buttons
  </osds-text>
  <osds-divider separator></osds-divider>
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

export const InRadioGroup = TemplateInRadioGroup.bind({});
// @ts-ignore
InRadioGroup.args = {
  ...extractStoryParams(storyParams),
};

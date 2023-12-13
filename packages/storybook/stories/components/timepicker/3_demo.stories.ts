import { html } from 'lit-html';
import { defineCustomElements } from '@ovhcloud/ods-components/timepicker/loader';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { DEFAULT_ATTRIBUTE } from '@ovhcloud/ods-components/timepicker/src/components/osds-timepicker/constants/default-attributes';

defineCustomElements();

/* Default story parameters  */
const sharedStoryParam = {
  clearable: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.clearable,
  },
  disabled: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.disabled,
  },
  error: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.error,
  },
  inline: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.inline,
  },
  withSeconds: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.withSeconds,
  },
  value: {
    category: 'Value',
    defaultValue: '',
  }
};

const defaultParam = {
  timezones: {
    category: 'Timezones',
    defaultValue: [],
  }
}

const exampleParam = {
  timezones: {
    category: 'Timezones',
    defaultValue: ['UTC-0', 'UTC-1', 'UTC-2'],
  },
}

export default {
  title: 'ODS Components/Form/Timepicker [molecule]/Web Component',
  id: 'timepicker',
  argTypes: extractArgTypes({...sharedStoryParam, ...defaultParam, ...exampleParam})
};

/* Default */
const TemplateDefault = (args: any) => html`
  <osds-timepicker ...=${getTagAttributes({
    ...args,
  })}>
  </osds-timepicker>
`;
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams({...sharedStoryParam, ...defaultParam}),
};

/* With Timezones Example */
const TemplateTimezonesExample = (args: any) => html`
  <osds-timepicker ...=${getTagAttributes({
    ...args,
  })}>
  </osds-timepicker>
`;
export const TimezonesExample = TemplateTimezonesExample.bind({});
// @ts-ignore
TimezonesExample.args = {
  ...extractStoryParams({...sharedStoryParam, ...exampleParam}),
};

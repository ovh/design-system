import { html } from 'lit-html';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-timepicker';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Default story parameters  */
const sharedStoryParam = {
  clearable: {
    category: 'General',
    defaultValue: false,
  },
  disabled: {
    category: 'General',
    defaultValue: false,
  },
  error: {
    category: 'General',
    defaultValue: false,
  },
  inline: {
    category: 'General',
    defaultValue: true,
  },
  value: {
    category: 'Value',
    defaultValue: '',
  },
  withSeconds: {
    category: 'General',
    defaultValue: false,
  },
};

const defaultParam = {
  timezones: {
    category: 'Timezones',
    defaultValue: [],
  },
};

const exampleParam = {
  timezones: {
    category: 'Timezones',
    defaultValue: ['UTC-0', 'UTC-1', 'UTC-2'],
  },
};

export default {
  argTypes: extractArgTypes({ ...sharedStoryParam, ...defaultParam, ...exampleParam }),
  id: 'timepicker',
  title: 'ODS Components/Form/Timepicker [molecule]/Web Component',
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
export const WithTimezones = TemplateTimezonesExample.bind({});
// @ts-ignore
WithTimezones.args = {
  ...extractStoryParams({...sharedStoryParam, ...exampleParam}),
};

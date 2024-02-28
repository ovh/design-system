import { html } from 'lit-html';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-timepicker';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { CONTROL_CATEGORY, orderControls } from '../../controls';
import { ODS_TIMEZONES } from '@ovhcloud/ods-components';

defineCustomElement();

/* Default story parameters  */
const sharedStoryParam = orderControls({
  ariaLabel: {
    category: CONTROL_CATEGORY.accessibility,
    defaultValue: '',
  },
  ariaLabelledby: {
    category: CONTROL_CATEGORY.accessibility,
    defaultValue: '',
  },
  clearable: {
    category: CONTROL_CATEGORY.general,
    defaultValue: false,
  },
  defaultValue: {
    category: CONTROL_CATEGORY.general,
    control: { type: 'text' },
  },
  disabled: {
    category: CONTROL_CATEGORY.general,
    defaultValue: false,
  },
  error: {
    category: CONTROL_CATEGORY.general,
    defaultValue: false,
  },
  inline: {
    category: CONTROL_CATEGORY.general,
    defaultValue: true,
  },
  value: {
    category: CONTROL_CATEGORY.general,
    control: { type: 'text' },
  },
  withSeconds: {
    category: CONTROL_CATEGORY.general,
    defaultValue: false,
  },
});

const exampleParam = orderControls({
  currentTimezone: {
    category: CONTROL_CATEGORY.general,
    control: { type: 'select' },
    defaultValue: null,
    options: ODS_TIMEZONES,
  },
  timezones: {
    category: CONTROL_CATEGORY.general,
    defaultValue: ['UTC+0', 'UTC-1', 'UTC-2'],
  },
});

export default {
  argTypes: extractArgTypes(sharedStoryParam),
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
  ...extractStoryParams({...sharedStoryParam}),
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
// @ts-ignore
WithTimezones.argTypes = extractArgTypes(exampleParam);

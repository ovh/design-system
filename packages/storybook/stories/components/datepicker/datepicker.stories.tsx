import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Datepicker, DatepickerContent, DatepickerControl, type DatepickerProp } from '../../../../ods-react/src/components/datepicker/src';
import { FormField, FormFieldLabel } from '../../../../ods-react/src/components/form-field/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

type Story = StoryObj<DatepickerProp>;

const meta: Meta<DatepickerProp> = {
  argTypes: excludeFromDemoControls(['dateFormatter', 'defaultOpen', 'defaultValue', 'defaultView', 'disabledDates', 'disabledWeekDays', 'max', 'maxView', 'min', 'minView', 'name', 'onValueChange', 'open', 'required', 'value', 'view']),
  component: Datepicker,
  subcomponents: { DatepickerContent, DatepickerControl },
  title: 'ODS Components/Form elements/Datepicker',
};

export default meta;

export const Demo: Story = {
  render: (arg) => (
    <Datepicker { ...arg }>
      <DatepickerControl />

      <DatepickerContent />
    </Datepicker>
  ),
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: { type: 'boolean' },
    },
    invalid: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: { type: 'boolean' },
    },
    locale: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'iso code' },
      },
      control: { type: 'select' },
      options: ['de', 'es', 'fr', 'it', 'nl', 'pl', 'pt'],
    },
    placeholder: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'text',
    },
    readOnly: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: { type: 'boolean' },
    },
  }),
};

export const DateFormatter: Story = {
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => (
    <Datepicker dateFormatter={ ({ date }) => `${date.getFullYear()}` }>
      <DatepickerControl />

      <DatepickerContent />
    </Datepicker>
  ),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Datepicker>
      <DatepickerControl />

      <DatepickerContent />
    </Datepicker>
  ),
};

export const Disabled: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'column', gap: '8px' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <p>Disabled:</p>

      <Datepicker disabled>
        <DatepickerControl />

        <DatepickerContent />
      </Datepicker>

      <p>Disabled Dates:</p>

      <Datepicker disabledDates={ [new Date(Date.now() - 86400000), new Date(), new Date(Date.now() + 86400000)] }>
        <DatepickerControl />

        <DatepickerContent />
      </Datepicker>

      <p>Disabled Week Days:</p>

      <Datepicker disabledWeekDays={ [0, 3] }>
        <DatepickerControl />

        <DatepickerContent />
      </Datepicker>
    </>
  ),
};

export const InFormField: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <FormFieldLabel>
        Label:
      </FormFieldLabel>

      <Datepicker>
        <DatepickerControl />

        <DatepickerContent />
      </Datepicker>
    </FormField>
  ),
};

export const MaxView: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Datepicker maxView="day">
      <DatepickerControl />

      <DatepickerContent />
    </Datepicker>
  ),
};

export const MinMax: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Datepicker
      max={ new Date(Date.now() + (86400000 * 10)) }
      min={ new Date(Date.now() - (86400000 * 10)) }>
      <DatepickerControl />

      <DatepickerContent />
    </Datepicker>
  ),
};

export const MinView: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Datepicker minView="month">
      <DatepickerControl />

      <DatepickerContent />
    </Datepicker>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Datepicker defaultValue={ new Date() }>
      <DatepickerControl />

      <DatepickerContent />
    </Datepicker>
  ),
};

export const Readonly: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Datepicker readOnly>
      <DatepickerControl />

      <DatepickerContent />
    </Datepicker>
  ),
};

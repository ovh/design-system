import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { FormField, FormFieldLabel } from '../../../../ods-react/src/components/form-field/src';
import { Timepicker, TimepickerControl, TimepickerTimezoneList, type TimepickerProp } from '../../../../ods-react/src/components/timepicker/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { addLiveEditorToStory } from '../../../src/helpers/liveCoding';
import demoCode from './Demo?raw';

type Story = StoryObj<TimepickerProp>;

const meta: Meta<TimepickerProp> = {
  argTypes: excludeFromDemoControls(['defaultValue', 'i18n', 'id', 'locale', 'name', 'onTimezoneChange', 'onValueChange', 'required', 'timezone', 'timezones', 'value']),
  component: Timepicker,
  subcomponents: { TimepickerControl, TimepickerTimezoneList },
  title: 'React Components/Timepicker',
};

export default meta;

export const Demo: Story = {
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
      control: 'boolean',
    },
    readOnly: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    withSeconds: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    withTimezones: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
  }),
};

addLiveEditorToStory(Demo, demoCode);

export const AccessibilityLabel: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <FormFieldLabel>
        Starting time:
      </FormFieldLabel>

      <Timepicker withSeconds>
        <TimepickerControl />

        <TimepickerTimezoneList />
      </Timepicker>
    </FormField>
  ),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Timepicker>
      <TimepickerControl />
    </Timepicker>
  ),
};

export const Disabled: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'column', gap: '8px' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Timepicker disabled>
        <TimepickerControl />
      </Timepicker>

      <Timepicker disabled>
        <TimepickerControl />

        <TimepickerTimezoneList />
      </Timepicker>
    </>
  ),
};

export const InFormField: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <FormFieldLabel>
        Timepicker:
      </FormFieldLabel>

      <Timepicker>
        <TimepickerControl />
      </Timepicker>
    </FormField>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Timepicker defaultValue="12:00">
      <TimepickerControl />

      <TimepickerTimezoneList />
    </Timepicker>
  ),
};

export const Readonly: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'column', gap: '8px' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Timepicker readOnly>
        <TimepickerControl />
      </Timepicker>

      <Timepicker readOnly>
        <TimepickerControl />

        <TimepickerTimezoneList />
      </Timepicker>
    </>
  ),
};

export const TimezoneList: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'column', gap: '8px' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <span>All timezones</span>
      <Timepicker>
        <TimepickerControl />

        <TimepickerTimezoneList />
      </Timepicker>

      <span>Subset of timezone</span>
      <Timepicker timezones={ ['UTC-10', 'UTC+0', 'UTC+10'] }>
        <TimepickerControl />

        <TimepickerTimezoneList />
      </Timepicker>
    </>
  ),
};

export const WithSeconds: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'column', gap: '8px' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Timepicker withSeconds>
        <TimepickerControl />
      </Timepicker>

      <Timepicker withSeconds>
        <TimepickerControl />

        <TimepickerTimezoneList />
      </Timepicker>
    </>
  ),
};

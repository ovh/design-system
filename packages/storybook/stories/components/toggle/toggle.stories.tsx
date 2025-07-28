import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { FormField, FormFieldLabel } from '../../../../ods-react/src/components/form-field/src';
import { Toggle, type ToggleProp } from '../../../../ods-react/src/components/toggle/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<ToggleProp>;

const meta: Meta<ToggleProp> = {
  argTypes: excludeFromDemoControls(['checked', 'defaultChecked', 'name', 'onCheckedChange', 'required', 'value']),
  component: Toggle,
  title: 'React Components/Toggle',
};

export default meta;

export const Demo: StoryObj = {
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    invalid: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    withLabels: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
  }),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Toggle />
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Toggle />
  ),
};

export const Disabled: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Toggle disabled />
  ),
};

export const InFormField: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <FormFieldLabel>
        Dark mode
      </FormFieldLabel>

      <div>
        <Toggle />
      </div>
    </FormField>
  ),
};

export const Invalid: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Toggle invalid />
  ),
};

export const WithLabels: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Toggle withLabels />
  ),
};

export const AccessibilityLabel: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <FormFieldLabel>
        Dark mode
      </FormFieldLabel>

      <Toggle />
    </FormField>
  ),
};

export const AccessibilityAriaLabel: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Toggle aria-label="Enable dark mode" />
  ),
};

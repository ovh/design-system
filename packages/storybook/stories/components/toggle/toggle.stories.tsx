import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { FormField } from '../../../../ods-react/src/components/form-field/src';
import { TEXT_PRESET, Text } from '../../../../ods-react/src/components/text/src';
import { Toggle, ToggleControl, ToggleLabel, type ToggleProp } from '../../../../ods-react/src/components/toggle/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<ToggleProp>;

const meta: Meta<ToggleProp> = {
  argTypes: excludeFromDemoControls(['checked', 'defaultChecked', 'name', 'onCheckedChange', 'required', 'value']),
  component: Toggle,
  subcomponents: { ToggleControl, ToggleLabel },
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
    <Toggle>
      <ToggleControl />
    </Toggle>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Toggle>
      <ToggleControl />
    </Toggle>
  ),
};

export const Disabled: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Toggle disabled>
      <ToggleControl />
    </Toggle>
  ),
};

export const InFormField: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'column', gap: '8px' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Text preset={ TEXT_PRESET.label }>
        Notification settings:
      </Text>

      <FormField>
        <Toggle>
          <ToggleControl />
          <ToggleLabel>
            General Information
          </ToggleLabel>
        </Toggle>
      </FormField>

      <FormField>
        <Toggle>
          <ToggleControl />
          <ToggleLabel>
            Promotions
          </ToggleLabel>
        </Toggle>
      </FormField>
    </>
  ),
};

export const Invalid: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Toggle invalid>
      <ToggleControl />
    </Toggle>
  ),
};

export const WithLabel: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Toggle>
      <ToggleControl />

      <ToggleLabel>Enable dark mode</ToggleLabel>
    </Toggle>
  ),
};

export const WithLabels: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Toggle withLabels>
      <ToggleControl />
    </Toggle>
  ),
};

export const AccessibilityLabel: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Toggle>
      <ToggleControl />
      <ToggleLabel>Enable dark mode</ToggleLabel>
    </Toggle>
  ),
};

export const AccessibilityAriaLabel: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Toggle aria-label="Enable dark mode">
      <ToggleControl />
      <ToggleLabel>Dark mode</ToggleLabel>
    </Toggle>
  ),
};

import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { OdsFormField, OdsFormFieldLabel } from '../../../../ods-react/src/components/form-field/src';
import { OdsPassword, type OdsPasswordProp } from '../../../../ods-react/src/components/password/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<OdsPasswordProp>;

const meta: Meta<OdsPasswordProp> = {
  argTypes: {
    maskInitialState: {
      table: {
        disable: true,
      },
    },
    onClear: {
      table: {
        disable: true,
      },
    },
  },
  component: OdsPassword,
  title: 'ODS Components/Form elements/Password',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    clearable: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    loading: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    placeholder: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    readOnly: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
  }),
};

export const Clearable: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsPassword
      clearable
      defaultValue="Clearable" />
  ),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsPassword />
  ),
};

export const Disabled: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsPassword disabled />
  ),
};

export const FormField: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsFormField>
      <OdsFormFieldLabel>
        Password:
      </OdsFormFieldLabel>

      <OdsPassword />
    </OdsFormField>
  ),
};

export const Loading: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsPassword loading />
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <OdsPassword />
  ),
};

export const ReadOnly: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsPassword
      defaultValue="Readonly"
      readOnly />
  ),
};

import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { FormField, FormFieldLabel } from '../../../../ods-react/src/components/form-field/src';
import { INPUT_I18N } from '../../../../ods-react/src/components/input/src';
import { Password, type PasswordProp } from '../../../../ods-react/src/components/password/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

type Story = StoryObj<PasswordProp>;

const meta: Meta<PasswordProp> = {
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
  component: Password,
  title: 'React Components/Password',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    clearable: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    invalid: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    loading: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    placeholder: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'string' },
      },
      control: 'text',
    },
    readOnly: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
  }),
};

export const AccessibilityLabel: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <FormFieldLabel>
        Password:
      </FormFieldLabel>

      <Password />
    </FormField>
  ),
};

export const Clearable: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Password
      clearable
      defaultValue="Clearable" />
  ),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Password />
  ),
};

export const Disabled: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Password disabled />
  ),
};

export const InFormField: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <FormFieldLabel>
        Password:
      </FormFieldLabel>

      <Password />
    </FormField>
  ),
};

export const Loading: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Password loading />
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Password />
  ),
};

export const ReadOnly: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Password
      defaultValue="Readonly"
      readOnly />
  ),
};

export const AccessibilityFormField: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <FormFieldLabel>
        Password:
      </FormFieldLabel>

      <Password />
    </FormField>
  ),
};

export const AccessibilityI18n: Story = {
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => (
    <FormField>
      <FormFieldLabel>
        Password:
      </FormFieldLabel>

      <Password
        i18n={{
          [INPUT_I18N.maskButtonHide]: 'Hide the password',
          [INPUT_I18N.maskButtonShow]: 'Show the password',
        }} />
    </FormField>
  ),
};

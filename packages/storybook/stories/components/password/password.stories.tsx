import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { FormField, FormFieldLabel } from '../../../../ods-react/src/components/form-field/src';
import { INPUT_I18N } from '../../../../ods-react/src/components/input/src';
import { Password, type PasswordProp } from '../../../../ods-react/src/components/password/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

type Story = StoryObj<PasswordProp>;

const meta: Meta<PasswordProp> = {
  argTypes: excludeFromDemoControls(['i18n', 'locale', 'maskInitialState', 'onClear']),
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
  globals: {
    imports: `import { FormField, FormFieldLabel, Password } from '@ovhcloud/ods-react';`,
  },
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
  globals: {
    imports: `import { Password } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Password
      clearable
      defaultValue="Clearable" />
  ),
};

export const Default: Story = {
  globals: {
    imports: `import { Password } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Password />
  ),
};

export const Disabled: Story = {
  globals: {
    imports: `import { Password } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Password disabled />
  ),
};

export const InFormField: Story = {
  globals: {
    imports: `import { FormField, FormFieldLabel, Password } from '@ovhcloud/ods-react';`,
  },
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
  globals: {
    imports: `import { Password } from '@ovhcloud/ods-react';`,
  },
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
  globals: {
    imports: `import { Password } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Password
      defaultValue="Readonly"
      readOnly />
  ),
};

export const AccessibilityFormField: Story = {
  globals: {
    imports: `import { FormField, FormFieldLabel, Password } from '@ovhcloud/ods-react';`,
  },
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
  globals: {
    imports: `import { INPUT_I18N, FormField, FormFieldLabel, Password } from '@ovhcloud/ods-react';`,
  },
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

      <Password i18n={{
        [INPUT_I18N.maskButtonHide]: 'Hide the password',
        [INPUT_I18N.maskButtonShow]: 'Show the password',
      }} />
    </FormField>
  ),
};

export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
      <Password placeholder="Default" />
      <Password clearable defaultValue="Clearable" />
      <Password loading placeholder="Loading" />
      <Password disabled placeholder="Disabled" />
      <Password invalid placeholder="Invalid" />
      <Password readOnly defaultValue="Read only" />
    </div>
  ),
};

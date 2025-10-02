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
  globals: {
    imports: `import { Toggle, ToggleControl } from '@ovhcloud/ods-react';`,
  },
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
  globals: {
    imports: `import { Toggle, ToggleControl } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Toggle disabled>
      <ToggleControl />
    </Toggle>
  ),
};

export const InFormField: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'column', gap: '8px' }}>{ story() }</div>],
  globals: {
    imports: `import { TEXT_PRESET, FormField, Text, Toggle, ToggleControl, ToggleLabel } from '@ovhcloud/ods-react';`,
  },
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
  globals: {
    imports: `import { Toggle, ToggleControl } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Toggle invalid>
      <ToggleControl />
    </Toggle>
  ),
};

export const WithLabel: Story = {
  globals: {
    imports: `import { Toggle, ToggleControl, ToggleLabel } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Toggle>
      <ToggleControl />

      <ToggleLabel>
        Enable dark mode
      </ToggleLabel>
    </Toggle>
  ),
};

export const WithLabels: Story = {
  globals: {
    imports: `import { Toggle, ToggleControl } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Toggle withLabels>
      <ToggleControl />
    </Toggle>
  ),
};

export const AccessibilityLabel: Story = {
  globals: {
    imports: `import { Toggle, ToggleControl, ToggleLabel } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Toggle>
      <ToggleControl />

      <ToggleLabel>
        Enable dark mode
      </ToggleLabel>
    </Toggle>
  ),
};

export const AccessibilityAriaLabel: Story = {
  globals: {
    imports: `import { Toggle, ToggleControl, ToggleLabel } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Toggle aria-label="Enable dark mode">
      <ToggleControl />

      <ToggleLabel>
        Dark mode
      </ToggleLabel>
    </Toggle>
  ),
};


export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Toggle>
        <ToggleControl />
      </Toggle>

      <Toggle disabled>
        <ToggleControl />
      </Toggle>

      <Toggle invalid>
        <ToggleControl />
      </Toggle>

      <Toggle withLabels>
        <ToggleControl />
      </Toggle>

      <Toggle>
        <ToggleControl />
        <ToggleLabel>With label</ToggleLabel>
      </Toggle>
    </div>
  ),
};

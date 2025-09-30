import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Checkbox, CheckboxControl, CheckboxGroup, CheckboxLabel, type CheckboxProp } from '../../../../ods-react/src/components/checkbox/src';
import { FormField } from '../../../../ods-react/src/components/form-field/src';
import { TEXT_PRESET, Text } from '../../../../ods-react/src/components/text/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<CheckboxProp>;
type DemoArg = Partial<CheckboxProp> & {
  label?: string,
};

const meta: Meta<CheckboxProp> = {
  argTypes: excludeFromDemoControls(['checked', 'defaultChecked', 'name', 'onCheckedChange', 'required', 'value']),
  component: Checkbox,
  subcomponents: { CheckboxControl, CheckboxGroup, CheckboxLabel },
  title: 'React Components/Checkbox',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg: DemoArg) => (
    <Checkbox
      disabled={ arg.disabled }
      invalid={ arg.invalid }>
      <CheckboxControl />

      <CheckboxLabel>
        { arg.label }
      </CheckboxLabel>
    </Checkbox>
  ),
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
    label: {
      table: {
        category: CONTROL_CATEGORY.slot,
      },
      control: 'text',
    }
  }),
  args: {
    label: 'My checkbox',
  },
};

export const Default: Story = {
  globals: {
    imports: `import { Checkbox, CheckboxControl } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Checkbox>
      <CheckboxControl />
    </Checkbox>
  ),
};

export const Disabled: Story = {
  globals: {
    imports: `import { Checkbox, CheckboxControl, CheckboxLabel } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Checkbox disabled>
      <CheckboxControl />

      <CheckboxLabel>
        Checkbox
      </CheckboxLabel>
    </Checkbox>
  ),
};

export const InFormField: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'column', gap: '8px' }}>{ story() }</div>],
  globals: {
    imports: `import { TEXT_PRESET, Checkbox, CheckboxControl, CheckboxLabel, FormField, Text } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Text preset={ TEXT_PRESET.label }>
        Legal considerations:
      </Text>

      <FormField>
        <Checkbox>
          <CheckboxControl />

          <CheckboxLabel>
            I agree to the terms and conditions.
          </CheckboxLabel>
        </Checkbox>
      </FormField>

      <FormField>
        <Checkbox>
          <CheckboxControl />

          <CheckboxLabel>
            I agree to receive marketing communications.
          </CheckboxLabel>
        </Checkbox>
      </FormField>
    </>
  ),
};

export const Group: Story = {
  globals: {
    imports: `import { Checkbox, CheckboxControl, CheckboxGroup, CheckboxLabel } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <CheckboxGroup
      defaultValue={ ['marketing'] }
      name="acknowledgments">
      <Checkbox value="term">
        <CheckboxControl />

        <CheckboxLabel>
          I agree to the terms and conditions.
        </CheckboxLabel>
      </Checkbox>

      <Checkbox value="marketing">
        <CheckboxControl />

        <CheckboxLabel>
          I agree to receive marketing communications.
        </CheckboxLabel>
      </Checkbox>
    </CheckboxGroup>
  ),
};

export const Invalid: Story = {
  globals: {
    imports: `import { Checkbox, CheckboxControl, CheckboxLabel } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Checkbox invalid>
      <CheckboxControl />

      <CheckboxLabel>
        Checkbox
      </CheckboxLabel>
    </Checkbox>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Checkbox>
      <CheckboxControl />

      <CheckboxLabel>
        Checkbox
      </CheckboxLabel>
    </Checkbox>
  ),
};

export const States: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'column', gap: '8px' }}>{ story() }</div>],
  globals: {
    imports: `import { Checkbox, CheckboxControl, CheckboxLabel } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Checkbox checked={ false }>
        <CheckboxControl />

        <CheckboxLabel>
          Unchecked
        </CheckboxLabel>
      </Checkbox>

      <Checkbox checked={ true }>
        <CheckboxControl />

        <CheckboxLabel>
          Checked
        </CheckboxLabel>
      </Checkbox>

      <Checkbox checked="indeterminate">
        <CheckboxControl />

        <CheckboxLabel>
          Indeterminate
        </CheckboxLabel>
      </Checkbox>
    </>
  ),
};

export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ display: 'flex', flexFlow: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', flexFlow: 'row', gap: '16px', alignItems: 'center' }}>
        <Checkbox>
          <CheckboxControl />
          <CheckboxLabel>Unchecked</CheckboxLabel>
        </Checkbox>
        <Checkbox disabled>
          <CheckboxControl />
          <CheckboxLabel>Unchecked disabled</CheckboxLabel>
        </Checkbox>
      </div>

      <div style={{ display: 'flex', flexFlow: 'row', gap: '16px', alignItems: 'center' }}>
        <Checkbox checked>
          <CheckboxControl />
          <CheckboxLabel>Checked</CheckboxLabel>
        </Checkbox>
        <Checkbox checked disabled>
          <CheckboxControl />
          <CheckboxLabel>Checked disabled</CheckboxLabel>
        </Checkbox>
      </div>

      <div style={{ display: 'flex', flexFlow: 'row', gap: '16px', alignItems: 'center' }}>
        <Checkbox checked="indeterminate">
          <CheckboxControl />
          <CheckboxLabel>Indeterminate</CheckboxLabel>
        </Checkbox>
        <Checkbox checked="indeterminate" disabled>
          <CheckboxControl />
          <CheckboxLabel>Indeterminate disabled</CheckboxLabel>
        </Checkbox>
      </div>
    </div>
  ),
};

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
  title: 'ODS Components/Form elements/Checkbox',
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
  tags: ['!dev'],
  render: ({}) => (
    <Checkbox>
      <CheckboxControl />
    </Checkbox>
  ),
};

export const Disabled: Story = {
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

import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { OdsCheckbox, OdsCheckboxControl, OdsCheckboxGroup, OdsCheckboxLabel, type OdsCheckboxProp } from '../../../../ods-react/src/components/checkbox/src';
import { OdsFormField } from '../../../../ods-react/src/components/form-field/src';
import { ODS_TEXT_PRESET, OdsText } from '../../../../ods-react/src/components/text/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<OdsCheckboxProp>;
type DemoArg = Partial<OdsCheckboxProp> & {
  label?: string,
};

const meta: Meta<OdsCheckboxProp> = {
  argTypes: excludeFromDemoControls(['checked', 'defaultChecked', 'name', 'onCheckedChange', 'required', 'value']),
  component: OdsCheckbox,
  // @ts-ignore see https://github.com/storybookjs/storybook/issues/27535
  subcomponents: { OdsCheckboxControl, OdsCheckboxGroup, OdsCheckboxLabel },
  title: 'ODS Components/Form elements/Checkbox',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg: DemoArg) => (
    <OdsCheckbox
      disabled={ arg.disabled }
      invalid={ arg.invalid }>
      <OdsCheckboxControl />

      <OdsCheckboxLabel>
        { arg.label }
      </OdsCheckboxLabel>
    </OdsCheckbox>
  ),
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'boolean' }
      },
      control: 'boolean',
    },
    invalid: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'boolean' }
      },
      control: 'boolean',
    },
    label: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
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
    <OdsCheckbox>
      <OdsCheckboxControl />
    </OdsCheckbox>
  ),
};

export const Disabled: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsCheckbox disabled>
      <OdsCheckboxControl />

      <OdsCheckboxLabel>
        Checkbox
      </OdsCheckboxLabel>
    </OdsCheckbox>
  ),
};

export const FormField: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <>
      <OdsText preset={ ODS_TEXT_PRESET.label }>
        Legal considerations:
      </OdsText>

      <OdsFormField>
        <OdsCheckbox>
          <OdsCheckboxControl />

          <OdsCheckboxLabel>
            I agree to the terms and conditions.
          </OdsCheckboxLabel>
        </OdsCheckbox>
      </OdsFormField>

      <OdsFormField>
        <OdsCheckbox>
          <OdsCheckboxControl />

          <OdsCheckboxLabel>
            I agree to receive marketing communications.
          </OdsCheckboxLabel>
        </OdsCheckbox>
      </OdsFormField>
    </>
  ),
};

export const Group: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsCheckboxGroup
      defaultValue={ ['marketing'] }
      name="acknowledgments">
      <OdsCheckbox value="term">
        <OdsCheckboxControl />

        <OdsCheckboxLabel>
          I agree to the terms and conditions.
        </OdsCheckboxLabel>
      </OdsCheckbox>

      <OdsCheckbox value="marketing">
        <OdsCheckboxControl />

        <OdsCheckboxLabel>
          I agree to receive marketing communications.
        </OdsCheckboxLabel>
      </OdsCheckbox>
    </OdsCheckboxGroup>
  ),
};

export const Invalid: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsCheckbox invalid>
      <OdsCheckboxControl />

      <OdsCheckboxLabel>
        Checkbox
      </OdsCheckboxLabel>
    </OdsCheckbox>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <OdsCheckbox>
      <OdsCheckboxControl />

      <OdsCheckboxLabel>
        Checkbox
      </OdsCheckboxLabel>
    </OdsCheckbox>
  ),
};

export const States: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <>
      <OdsCheckbox checked={ false }>
        <OdsCheckboxControl />

        <OdsCheckboxLabel>
          Unchecked
        </OdsCheckboxLabel>
      </OdsCheckbox>

      <OdsCheckbox checked={ true }>
        <OdsCheckboxControl />

        <OdsCheckboxLabel>
          Checked
        </OdsCheckboxLabel>
      </OdsCheckbox>

      <OdsCheckbox checked="indeterminate">
        <OdsCheckboxControl />

        <OdsCheckboxLabel>
          Indeterminate
        </OdsCheckboxLabel>
      </OdsCheckbox>
    </>
  ),
};

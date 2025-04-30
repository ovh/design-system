import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { FormField } from '../../../../ods-react/src/components/form-field/src';
import { Radio, RadioControl, RadioGroup, RadioGroupLabel, type RadioGroupProp, RadioLabel } from '../../../../ods-react/src/components/radio-group/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<RadioGroupProp>;

const meta: Meta<RadioGroupProp> = {
  argTypes: excludeFromDemoControls(['defaultValue', 'name', 'onValueChange', 'value']),
  component: RadioGroup,
  subcomponents: { Radio, RadioControl, RadioGroupLabel, RadioLabel },
  title: 'ODS Components/Form elements/RadioGroup',
};

export default meta;

export const Demo: Story = {
  render: (arg)=> (
    <RadioGroup
      disabled={ arg.disabled }
      orientation={ arg.orientation }>
      <Radio value="html">
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>
  ),
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: { type: 'boolean' },
    },
    orientation: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: ['horizontal', 'vertical'] },
      },
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
  }),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <RadioGroup>
      <Radio value="html">
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>
  ),
};

export const DisabledGroup: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <RadioGroup disabled>
      <RadioGroupLabel>
        Disabled group:
      </RadioGroupLabel>

      <Radio value="html">
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>
  ),
};

export const DisabledItem: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <RadioGroup>
      <RadioGroupLabel>
        Disabled item:
      </RadioGroupLabel>

      <Radio value="html">
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio
        disabled
        value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>
  ),
};

export const InFormField: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <RadioGroup>
        <RadioGroupLabel>
          Pick a language:
        </RadioGroupLabel>

        <Radio value="html">
          <RadioControl />

          <RadioLabel>HTML</RadioLabel>
        </Radio>

        <Radio value="css">
          <RadioControl />

          <RadioLabel>CSS</RadioLabel>
        </Radio>

        <Radio value="js">
          <RadioControl />

          <RadioLabel>JavaScript</RadioLabel>
        </Radio>
      </RadioGroup>
    </FormField>
  ),
};

export const Orientation: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <RadioGroup orientation="horizontal">
      <Radio value="html">
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <RadioGroup>
      <Radio value="html">
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>
  ),
};

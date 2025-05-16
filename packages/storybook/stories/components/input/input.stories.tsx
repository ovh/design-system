import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { FormField, FormFieldLabel } from '../../../../ods-react/src/components/form-field/src';
import { INPUT_TYPE, INPUT_TYPES, Input, type InputProp } from '../../../../ods-react/src/components/input/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<InputProp>;
type DemoArg = Partial<InputProp> & {
  masked?: boolean,
};

const meta: Meta<InputProp> = {
  argTypes: excludeFromDemoControls(['maskOption', 'onClear']),
  component: Input,
  title: 'ODS Components/Form elements/Input',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg: DemoArg) => {
    const { masked, ...inputArg } = arg;

    return (
      <Input
        maskOption={{ enable: !!masked }}
        { ...inputArg } />
    )
  },
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
    masked: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'boolean' },
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
    type: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'INPUT_TYPE' }
      },
      control: { type: 'select' },
      options: INPUT_TYPES,
    },
  }),
};

export const Clearable: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Input
      clearable
      defaultValue="Clearable" />
  ),
};

export const Datalist: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Input list="ice-cream-flavors" />

      <datalist id="ice-cream-flavors">
        <option value="Chocolate"></option>
        <option value="Coconut"></option>
        <option value="Mint"></option>
        <option value="Strawberry"></option>
        <option value="Vanilla"></option>
      </datalist>
    </>
  ),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Input />
  ),
};

export const Disabled: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Input disabled />
  ),
};

export const FloatingNumber: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Input
      defaultValue="9.99"
      step="any"
      type={ INPUT_TYPE.number } />
  ),
};

export const InFormField: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <FormFieldLabel>
        Name:
      </FormFieldLabel>

      <Input />
    </FormField>
  ),
};

export const Loading: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Input loading />
  ),
};

export const Masked: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Input maskOption={{ enable: true }} />
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Input placeholder="Input" />
  ),
};

export const ReadOnly: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Input
      defaultValue="Readonly"
      readOnly />
  ),
};

export const Types: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'column', gap: '8px', alignItems: 'start' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Input type={ INPUT_TYPE.email } placeholder="email" /><br />
      <Input type={ INPUT_TYPE.number } placeholder="number" /><br />
      <Input type={ INPUT_TYPE.password } placeholder="password" /><br />
      <Input type={ INPUT_TYPE.search } placeholder="search" /><br />
      <Input type={ INPUT_TYPE.text } placeholder="text" /><br />
      <Input type={ INPUT_TYPE.time } placeholder="time" /><br />
      <Input type={ INPUT_TYPE.url } placeholder="url" /><br />
    </>
  ),
};

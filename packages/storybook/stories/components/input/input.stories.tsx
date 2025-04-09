import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { OdsFormField, OdsFormFieldLabel } from '../../../../ods-react/src/components/form-field/src';
import { ODS_INPUT_TYPE, ODS_INPUT_TYPES, OdsInput, type OdsInputProp } from '../../../../ods-react/src/components/input/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<OdsInputProp>;

const meta: Meta<OdsInputProp> = {
  argTypes: excludeFromDemoControls(['onClear']),
  component: OdsInput,
  title: 'ODS Components/Form elements/Input',
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
    maskOption: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
      },
      control: 'object',
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
    type: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: ODS_INPUT_TYPE.text },
        type: { summary: ODS_INPUT_TYPES }
      },
      control: { type: 'select' },
      options: ODS_INPUT_TYPES,
    },
  }),
};

export const Clearable: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsInput
      clearable
      defaultValue="Clearable" />
  ),
};

export const Datalist: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <>
      <OdsInput list="ice-cream-flavors" />

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
    <OdsInput />
  ),
};

export const Disabled: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsInput disabled />
  ),
};

export const FloatingNumber: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsInput
      defaultValue="9.99"
      step="any"
      type={ ODS_INPUT_TYPE.number } />
  ),
};

export const FormField: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsFormField>
      <OdsFormFieldLabel>
        Name:
      </OdsFormFieldLabel>

      <OdsInput />
    </OdsFormField>
  ),
};

export const Loading: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsInput loading />
  ),
};

export const Masked: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsInput maskOption={{ enable: true }} />
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <OdsInput placeholder="Input" />
  ),
};

export const ReadOnly: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsInput
      defaultValue="Readonly"
      readOnly />
  ),
};

export const Types: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'column', gap: '8px' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <OdsInput type={ ODS_INPUT_TYPE.email } placeholder="email" /><br />
      <OdsInput type={ ODS_INPUT_TYPE.number } placeholder="number" /><br />
      <OdsInput type={ ODS_INPUT_TYPE.password } placeholder="password" /><br />
      <OdsInput type={ ODS_INPUT_TYPE.search } placeholder="search" /><br />
      <OdsInput type={ ODS_INPUT_TYPE.text } placeholder="text" /><br />
      <OdsInput type={ ODS_INPUT_TYPE.time } placeholder="time" /><br />
      <OdsInput type={ ODS_INPUT_TYPE.url } placeholder="url" /><br />
    </>
  ),
};

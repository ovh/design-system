import { type Meta, type StoryObj } from '@storybook/react';
import React, { type FormEvent, useState } from 'react';
import { FormField, FormFieldError, FormFieldHelper, FormFieldLabel } from '../../../../ods-react/src/components/form-field/src';
import { TEXT_PRESET, Text } from '../../../../ods-react/src/components/text/src';
import { Textarea, type TextareaProp } from '../../../../ods-react/src/components/textarea/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<TextareaProp>;

const meta: Meta<TextareaProp> = {
  component: Textarea,
  title: 'ODS Components/Form elements/Textarea',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    cols: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'number' },
      },
      control: 'number',
    },
    disabled: {
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
    rows: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'number' },
      },
      control: 'number',
    },
  }),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Textarea />
  ),
};

export const Disabled: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Textarea disabled />
  ),
};

export const InFormField: Story = {
  tags: ['!dev'],
  render: ({}) => {
    const MAX_COUNT = 200;
    const [count, setCount] = useState(0);

    function onInput(e: FormEvent): void {
      setCount((e.target as HTMLTextAreaElement).value.length);
    }

    return (
      <FormField invalid={ count > MAX_COUNT }>
        <FormFieldLabel>
          Description:
        </FormFieldLabel>

        <Textarea
          name="description"
          onInput={ onInput } />

        <FormFieldHelper style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Text preset={ TEXT_PRESET.caption }>
            Helper text
          </Text>

          <Text preset={ TEXT_PRESET.caption }>
            { count }/{ MAX_COUNT }
          </Text>
        </FormFieldHelper>

        <FormFieldError>
          Error message
        </FormFieldError>
      </FormField>
    );
  },
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Textarea placeholder="Textarea" />
  ),
};

export const ReadOnly: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Textarea
      defaultValue="Readonly"
      readOnly />
  ),
};

export const Resizable: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Textarea style={{ resize: 'both' }} />
  ),
};

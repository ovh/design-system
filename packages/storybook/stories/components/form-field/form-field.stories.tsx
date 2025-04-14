import { type Meta, type StoryObj } from '@storybook/react';
import React, { type FormEvent, useState } from 'react';
import { FormField, type FormFieldProp, FormFieldError, FormFieldHelper, FormFieldLabel } from '../../../../ods-react/src/components/form-field/src';
import { TEXT_PRESET, Text } from '../../../../ods-react/src/components/text/src';
import { Textarea } from '../../../../ods-react/src/components/textarea/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<FormFieldProp>;
type DemoArg = Partial<FormFieldProp> & {
  errorText?: string,
  helperText?: string,
  label?: string,
};

const meta: Meta<FormFieldProp> = {
  argTypes: excludeFromDemoControls(['required']),
  component: FormField,
  subcomponents: { FormFieldError, FormFieldHelper, FormFieldLabel },
  title: 'ODS Components/Form elements/FormField',
};

export default meta;

export const Demo: Story = {
  render: (args: DemoArg) => (
    <FormField
      disabled={ args.disabled }
      invalid={ args.invalid }
      readOnly={ args.readOnly }>
      <FormFieldLabel>
        { args.label }
      </FormFieldLabel>

      <Textarea name="demo" />

      <FormFieldHelper>
        { args.helperText }
      </FormFieldHelper>

      <FormFieldError>
        { args.errorText }
      </FormFieldError>
    </FormField>
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
    errorText: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: 'text',
    },
    helperText: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: 'text',
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
        type: { summary: 'string' }
      },
      control: 'text',
    },
    readOnly: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'boolean' }
      },
      control: 'boolean',
    },
  }),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <Textarea name="textarea" />
    </FormField>
  ),
};

export const Error: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <FormField invalid>
      <Textarea name="textarea" />

      <FormFieldError>
        Error message
      </FormFieldError>
    </FormField>
  ),
};

export const Helper: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <Textarea name="textarea" />

      <FormFieldHelper>
        <Text preset={ TEXT_PRESET.caption }>
          Helper text
        </Text>
      </FormFieldHelper>
    </FormField>
  ),
};

export const Label: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <FormFieldLabel>
        Description:
      </FormFieldLabel>

      <Textarea name="textarea" />
    </FormField>
  ),
};

export const Overview: Story = {
  parameters: {
    layout: 'centered',
  },
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

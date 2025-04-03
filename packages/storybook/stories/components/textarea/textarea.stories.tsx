import { type Meta, type StoryObj } from '@storybook/react';
import React, { type FormEvent, useState } from 'react';
import { OdsFormField, OdsFormFieldError, OdsFormFieldHelper, OdsFormFieldLabel } from '../../../../ods-react/src/components/form-field/src';
import { ODS_TEXT_PRESET, OdsText } from '../../../../ods-react/src/components/text/src';
import { OdsTextarea, type OdsTextareaProp } from '../../../../ods-react/src/components/textarea/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<OdsTextareaProp>;

const meta: Meta<OdsTextareaProp> = {
  component: OdsTextarea,
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
    <OdsTextarea />
  ),
};

export const Disabled: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsTextarea disabled />
  ),
};

export const FormField: Story = {
  tags: ['!dev'],
  render: ({}) => {
    const MAX_COUNT = 200;
    const [count, setCount] = useState(0);

    function onInput(e: FormEvent): void {
      setCount((e.target as HTMLTextAreaElement).value.length);
    }

    return (
      <OdsFormField invalid={ count > MAX_COUNT }>
        <OdsFormFieldLabel>
          Description:
        </OdsFormFieldLabel>

        <OdsTextarea
          name="description"
          onInput={ onInput } />

        <OdsFormFieldHelper style={{ display: 'flex', justifyContent: 'space-between' }}>
          <OdsText preset={ ODS_TEXT_PRESET.caption }>
            Helper text
          </OdsText>

          <OdsText preset={ ODS_TEXT_PRESET.caption }>
            { count }/{ MAX_COUNT }
          </OdsText>
        </OdsFormFieldHelper>

        <OdsFormFieldError>
          Error message
        </OdsFormFieldError>
      </OdsFormField>
    );
  },
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <OdsTextarea />
  ),
};

export const ReadOnly: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsTextarea readOnly />
  ),
};

export const Resizable: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsTextarea style={{ resize: 'both' }} />
  ),
};

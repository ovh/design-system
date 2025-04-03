import { type Meta, type StoryObj } from '@storybook/react';
import React, { type FormEvent, useState } from 'react';
import { OdsFormField, type OdsFormFieldProp, OdsFormFieldError, OdsFormFieldHelper, OdsFormFieldLabel } from '../../../../ods-react/src/components/form-field/src';
import { ODS_TEXT_PRESET, OdsText } from '../../../../ods-react/src/components/text/src';
import { OdsTextarea } from '../../../../ods-react/src/components/textarea/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<OdsFormFieldProp>;
type DemoArg = Partial<OdsFormFieldProp> & {
  errorText?: string,
  helperText?: string,
  label?: string,
};

const meta: Meta<OdsFormFieldProp> = {
  argTypes: {
    required: {
      table: {
        disable: true,
      },
    },
  },
  component: OdsFormField,
  // @ts-ignore see https://github.com/storybookjs/storybook/issues/27535
  subcomponents: { OdsFormFieldError, OdsFormFieldHelper, OdsFormFieldLabel },
  title: 'ODS Components/Form elements/FormField',
};

export default meta;

export const Demo: Story = {
  render: (args: DemoArg) => (
    <OdsFormField
      disabled={ args.disabled }
      invalid={ args.invalid }
      readOnly={ args.readOnly }>
      <OdsFormFieldLabel>
        { args.label }
      </OdsFormFieldLabel>

      <OdsTextarea name="demo" />

      <OdsFormFieldHelper>
        { args.helperText }
      </OdsFormFieldHelper>

      <OdsFormFieldError>
        { args.errorText }
      </OdsFormFieldError>
    </OdsFormField>
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
    <OdsFormField>
      <OdsTextarea name="textarea" />
    </OdsFormField>
  ),
};

export const Error: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsFormField invalid>
      <OdsTextarea name="textarea" />

      <OdsFormFieldError>
        Error message
      </OdsFormFieldError>
    </OdsFormField>
  ),
};

export const Helper: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsFormField>
      <OdsTextarea name="textarea" />

      <OdsFormFieldHelper>
        <OdsText preset={ ODS_TEXT_PRESET.caption }>
          Helper text
        </OdsText>
      </OdsFormFieldHelper>
    </OdsFormField>
  ),
};

export const Label: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsFormField>
      <OdsFormFieldLabel>
        Description:
      </OdsFormFieldLabel>

      <OdsTextarea name="textarea" />
    </OdsFormField>
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
